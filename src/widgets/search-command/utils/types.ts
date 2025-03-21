import { DataWithPagination } from '$/shared/types'

export interface SearchItem {
	id: number;
	type: string;
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
		category: number;
	}>;
}

export type SearchResponse = DataWithPagination<SearchItem>;
export type SearchSuggestionsResponse = DataWithPagination<SearchItem>;
