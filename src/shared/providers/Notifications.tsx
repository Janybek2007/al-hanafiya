'use client';
import {
	NotificationItem,
	useNotificationsQuery,
	useRegisterPushSubscriptionMutation
} from '$/entities/notifications';
import React, { createContext, useContext, useEffect } from 'react';
import { VAPID_PUBLIC_KEY } from '../constants/vapid-keys';
import { useSW } from './SWProvider';
import { useLocalstorageState } from '../utils';

interface NotificationsContextType {
	notifications: NotificationItem[];
	notify: (title: string, message: string) => void;
	isPushSupported: boolean;
	subscriptionData: object | null;
}

const NotificationsContext = createContext<
	NotificationsContextType | undefined
>(undefined);

export const NotificationsProvider: React.FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const [subscriptionData, setSubscriptionData] = useLocalstorageState<
		object | null
	>('pushSubscriptionData', null);
	const [isPushEnabled] = useLocalstorageState<boolean>('push_enabled', false);

	const [registerPushSubscription] = useRegisterPushSubscriptionMutation();
	const { data: notificationsData } = useNotificationsQuery();
	const { registration } = useSW();
	const notifications = notificationsData || [];
	const isPushSupported =
		'serviceWorker' in navigator && 'PushManager' in window;

	const urlBase64ToUint8Array = React.useCallback((base64String: string) => {
		const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
		const base64 = (base64String + padding)
			.replace(/-/g, '+')
			.replace(/_/g, '/');
		const rawData = window.atob(base64);
		const outputArray = new Uint8Array(rawData.length);
		for (let i = 0; i < rawData.length; ++i) {
			outputArray[i] = rawData.charCodeAt(i);
		}
		return outputArray;
	}, []);

	const initializePush = React.useCallback(async () => {
		if (
			!isPushSupported ||
			!registration ||
			!VAPID_PUBLIC_KEY ||
			subscriptionData
		)
			return;

		try {
			const permission = await Notification.requestPermission();
			if (permission !== 'granted') return;

			const applicationServerKey = urlBase64ToUint8Array(VAPID_PUBLIC_KEY);
			const subscription = await registration.pushManager.subscribe({
				userVisibleOnly: true,
				applicationServerKey
			});

			const newSubscriptionData = {
				subscription_info: {
					endpoint: subscription.endpoint,
					keys: {
						p256dh: subscription.toJSON().keys?.p256dh || '',
						auth: subscription.toJSON().keys?.auth || ''
					}
				},
				browser: navigator.userAgent.includes('Chrome') ? 'Chrome' : 'Other',
				device: window.innerWidth > 768 ? 'Desktop' : 'Mobile'
			};

			await registerPushSubscription(newSubscriptionData);
			setSubscriptionData(newSubscriptionData);
			console.log('Push-подписка зарегистрирована');
		} catch (error) {
			console.error('Ошибка инициализации push:', error);
		}
	}, [
		isPushSupported,
		registration,
		subscriptionData,
		urlBase64ToUint8Array,
		registerPushSubscription,
		setSubscriptionData
	]);

	const notify = React.useCallback(
		async (title: string, message: string) => {
			if (!isPushSupported || !registration || !isPushEnabled) {
				console.log('Push not supported or SW not registered:', title, message);
				return;
			}

			if (Notification.permission !== 'granted') {
				console.log('Notification permission denied');
				return;
			}

			try {
				await registration.showNotification(title, {
					body: message,
					icon: '/favicon-192x192.png'
				});
			} catch (error) {
				console.error('Notification error:', error);
				alert(`${title}: ${message}`);
			}
		},
		[isPushSupported, registration, isPushEnabled]
	);

	useEffect(() => {
		if (!registration || !isPushEnabled) return;

		if (subscriptionData) {
			return;
		}

		initializePush();
	}, [registration, initializePush, isPushEnabled, subscriptionData]);

	const contextValue: NotificationsContextType = {
		notifications,
		notify,
		isPushSupported,
		subscriptionData
	};

	return (
		<NotificationsContext.Provider value={contextValue}>
			{children}
		</NotificationsContext.Provider>
	);
};

export const useNotifications = () => {
	const context = useContext(NotificationsContext);
	if (!context) {
		throw new Error(
			'useNotifications must be used within a NotificationsProvider'
		);
	}
	return context;
};
