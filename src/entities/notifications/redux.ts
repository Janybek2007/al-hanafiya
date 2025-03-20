import { api } from '$/shared/redux/api';
import { IdArg } from '$/shared/types/api.types'
import {
	NotificationsResponse,
	PushSubscription,
	NotificationSettings,
	NotificationItem
} from './types';

const notificationsApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: builder => ({
		notifications: builder.query<NotificationsResponse, void>({
			query: () => ({
				url: '/notifications/',
				method: 'GET'
			})
		}),

		notificationsId: builder.query<NotificationItem, IdArg>({
			query: ({ id }) => ({
				url: `/notifications/${id}/`,
				method: 'GET'
			})
		}),

		markNotificationAsRead: builder.mutation<{ status: string }, number>({
			query: id => ({
				url: `/notifications/${id}/mark_as_read/`,
				method: 'POST'
			})
		}),

		markAllNotificationsAsRead: builder.mutation<{ status: string }, void>({
			query: () => ({
				url: '/notifications/mark_all_as_read/',
				method: 'POST'
			})
		}),

		registerPushSubscription: builder.mutation<
			PushSubscription,
			PushSubscription
		>({
			query: body => ({
				url: '/notifications/push-subscriptions/',
				method: 'POST',
				body
			})
		}),

		notificationSettings: builder.query<NotificationSettings, void>({
			query: () => ({
				url: '/notifications/settings/',
				method: 'GET'
			})
		}),

		updateNotificationSettings: builder.mutation<
			NotificationSettings,
			NotificationSettings
		>({
			query: body => ({
				url: '/notifications/settings/',
				method: 'PUT',
				body
			})
		})
	})
});

export const {
	useNotificationsQuery,
	useMarkNotificationAsReadMutation,
	useMarkAllNotificationsAsReadMutation,
	useRegisterPushSubscriptionMutation,
	useNotificationSettingsQuery,
	useUpdateNotificationSettingsMutation
} = notificationsApi;
