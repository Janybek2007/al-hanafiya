import { api } from '$/shared/redux/api';
import { createSearchParams } from '$/shared/utils';
import {
	SearchArg,
	SearchResponse,
	SearchSuggestionsArg,
	SearchSuggestionsResponse
} from './types';

const searchApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: builder => ({
		search: builder.query<SearchResponse, SearchArg>({
			query: arg => ({
				url: `/search/?${createSearchParams(arg)}`
			})
		}),
		searchSuggestions: builder.query<
			SearchSuggestionsResponse,
			SearchSuggestionsArg
		>({
			query: arg => ({
				url: `/search/suggestions/?${createSearchParams(arg)}`
			})
		})
	})
});

export const { useSearchQuery, useSearchSuggestionsQuery } = searchApi;
