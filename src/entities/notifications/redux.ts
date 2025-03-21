import { api } from '$/shared/redux/api';
import { IdArg } from '$/shared/types/api.types';
import {
	NotificationsResponse,
	PushSubscription,
	NotificationSettings,
	NotificationItem,
	DeepPartial
} from './types';

const notificationsApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: builder => ({
		notifications: builder.query<NotificationsResponse, void>({
			query: () => ({
				url: '/notifications/',
				method: 'GET'
			}),
			providesTags: ['notifications']
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
			}),
			invalidatesTags: ['notifications']
		}),

		markAllNotificationsAsRead: builder.mutation<{ status: string }, void>({
			query: () => ({
				url: '/notifications/mark_all_as_read/',
				method: 'POST'
			}),
			invalidatesTags: ['notifications']
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
			}),
			providesTags: ['notifications']
		}),

		updateNotificationSettings: builder.mutation<
			NotificationSettings,
			DeepPartial<NotificationSettings>
		>({
			query: body => ({
				url: '/notifications/settings/',
				method: 'PUT',
				body
			}),
			invalidatesTags: ['notifications']
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
