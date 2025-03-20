import { DataWithPagination } from '$/shared/types';

export interface EventItem {
	id: number;
	title: string;
	description: string;
	event_date: string;
	location: string;
	created_at: string;
}

export type EventsResponse = DataWithPagination<EventItem>;
export type EventsUpcomingResponse = EventsResponse;
