'use client';
import { api } from '$/shared/redux/api';
import { TAccountEndpoints } from './types';

const accountsApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: builder => ({
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		accountsByEndpoint: builder.query<any, { endpoint: TAccountEndpoints }>({
			query: ({ endpoint }) => {
				let url = '/auth/accounts/me';
				if (
					[
						'me',
						'learning_progress',
						'viewing_history',
						'telegram_status'
					].includes(endpoint)
				) {
					url = `/auth/accounts/${endpoint}`;
				} else if (endpoint == 'my_questions') {
					url = `/questions/${endpoint}`;
				} else if (endpoint === 'notifications') {
					url = `/notifications`;
				}
				return {
					url,
					method: 'GET'
				};
			},
			providesTags: ['account']
		})
	})
});

export const { useAccountsByEndpointQuery } = accountsApi;
