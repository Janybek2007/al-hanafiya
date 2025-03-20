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
	isSubscribed: boolean;
}

const NotificationsContext = createContext<NotificationsContextType>({
	notifications: [],
	notify: () => {},
	isPushSupported: false,
	isSubscribed: false
});

export const NotificationsProvider: React.FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const [isSubscribed, setIsSubscribed] = useLocalstorageState<boolean>(
		'isSubscribed',
		false
	);
	const [registerPushSubscription] = useRegisterPushSubscriptionMutation();
	const { data: notificationsData } = useNotificationsQuery();
	const { registration } = useSW();
	const notifications = notificationsData?.results || [];
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
		if (!isPushSupported || !registration || !VAPID_PUBLIC_KEY) return;

		try {
			const permission = await Notification.requestPermission();
			if (permission !== 'granted') return;

			const applicationServerKey = urlBase64ToUint8Array(VAPID_PUBLIC_KEY);
			const subscription = await registration.pushManager.subscribe({
				userVisibleOnly: true,
				applicationServerKey
			});

			const subscriptionData = {
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

			await registerPushSubscription(subscriptionData).unwrap();
			setIsSubscribed(true);
			console.log('Push-подписка зарегистрирована');
		} catch (error) {
			console.error('Ошибка инициализации push:', error);
			setIsSubscribed(false);
		}
	}, [
		isPushSupported,
		registration,
		registerPushSubscription,
		urlBase64ToUint8Array,
		setIsSubscribed
	]);

	const notify = React.useCallback(
		async (title: string, message: string) => {
			if (!isPushSupported || !registration) {
				console.log(
					'Push не поддерживается или SW не зарегистрирован, использую alert:',
					title,
					message
				);
				alert(`${title}: ${message}`);
				return;
			}

			registration.showNotification(title, {
				body: message,
				icon: '/favicon-192x192.png'
			});
		},
		[isPushSupported, registration]
	);

	useEffect(() => {
		if (!registration) return;

		const handleSubscriptionChange = async (event: MessageEvent) => {
			if (event.data.type === 'SUBSCRIPTION_CHANGE') {
				const subscriptionData = {
					subscription_info: {
						endpoint: event.data.subscription.endpoint,
						keys: {
							p256dh: event.data.subscription.toJSON().keys?.p256dh || '',
							auth: event.data.subscription.toJSON().keys?.auth || ''
						}
					},
					browser: navigator.userAgent.includes('Chrome') ? 'Chrome' : 'Other',
					device: window.innerWidth > 768 ? 'Desktop' : 'Mobile'
				};
				await registerPushSubscription(subscriptionData).unwrap();
				setIsSubscribed(true);
			}
		};

		navigator.serviceWorker.addEventListener(
			'message',
			handleSubscriptionChange
		);
		initializePush();

		return () =>
			navigator.serviceWorker.removeEventListener(
				'message',
				handleSubscriptionChange
			);
	}, [registration, initializePush, registerPushSubscription, setIsSubscribed]);

	const contextValue: NotificationsContextType = {
		notifications,
		notify,
		isPushSupported,
		isSubscribed
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
