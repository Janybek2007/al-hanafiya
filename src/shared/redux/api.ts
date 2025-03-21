'use client';
import {
	createApi,
	fetchBaseQuery,
	type BaseQueryFn
} from '@reduxjs/toolkit/query/react';
import { API_URL } from '../constants/url.constants';
import Cookies from 'js-cookie';

const baseQuery = fetchBaseQuery({
	baseUrl: API_URL + '/api',
	credentials: 'omit',
	prepareHeaders(headers) {
		const tokenValue = Cookies.get('token');
		const newHeaders = new Headers([...headers]);
		if (tokenValue) {
			newHeaders.set('Authorization', `Token ${tokenValue}`);
		}
		return newHeaders;
	}
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
	const result = await baseQuery(args, api, extraOptions);
	return result;
};

export const api = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryExtended,
	refetchOnReconnect: true,
	refetchOnFocus: false,
	tagTypes: [
		'account',
		'account_view_history',
		'account_view_history',
		'account_settings',
		'account_notifications',
		'account_learining_progress',
		'questions',
		'question_detail',
		'lesson_by_slug',
		'notifications'
	],
	endpoints: () => ({})
});
