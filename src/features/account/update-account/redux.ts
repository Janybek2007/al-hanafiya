'use client';
import { api } from '$/shared/redux/api';
import { UpdateAccountDto } from './contract';

const accountsMeApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: builder => ({
		updateAccount: builder.mutation<{ id: number }, UpdateAccountDto>({
			query: arg => ({
				url: '/auth/accounts/me/',
				method: 'PUT',
				body: arg
			}),
			invalidatesTags: ['account']
		}),
		updateAvatar: builder.mutation<{ avatar: string }, File>({
			query: file => {
				const formData = new FormData();
				formData.set('avatar', file);
				return {
					url: '/auth/accounts/update_avatar/',
					method: 'POST',
					body: formData
				};
			},
			invalidatesTags: ['account']
		})
	})
});

export const { useUpdateAccountMutation, useUpdateAvatarMutation } =
	accountsMeApi;
