import { DataWithPagination } from '$/shared/types';
import { BaseArg } from '$/shared/types/api.types'

export const SearchType = [
	'all',
	'questions',
	'articles',
	'lessons',
	'events'
] as const;

export type TSearchType = (typeof SearchType)[number];

export interface SearchItem {
	id: number;
	type: TSearchType;
	title?: string;
	content?: string;
	url: string;
	created_at: string;
	highlight: string;
	additional_info?: Partial<{
		is_answered: boolean;
		telegram: string;
		event_date: string;
		location: string;
		topic: number;
		category: string;
	}>;
}

export type SearchResponse = DataWithPagination<SearchItem>;
export type SearchSuggestionsResponse = DataWithPagination<SearchItem>;

export interface SearchArg extends BaseArg {
	type?: TSearchType;
	size?: number
	q?: string | null
}

export interface SearchSuggestionsArg {
	limit?: number
	q: string
}
