'use client';
import {
	createApi,
	fetchBaseQuery,
	type BaseQueryFn
} from '@reduxjs/toolkit/query/react';
import { API_URL } from '../constants/url.constants';

const baseQuery = fetchBaseQuery({
	baseUrl: API_URL,
	credentials: 'include'
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
	const result = await baseQuery(args, api, extraOptions);
	return result;
};

const tagTypes: string[] = [];

export const api = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryExtended,
	refetchOnReconnect: true,
	refetchOnFocus: false,
	tagTypes,
	endpoints: () => ({})
});
