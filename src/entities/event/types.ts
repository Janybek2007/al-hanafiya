// $/entities/event/types.ts
export interface EventItem {
	id: number;
	title: string;
	description: string;
	event_date: string;
	location: string;
	created_at: string;
	forWomenOnly?: boolean;
	image_src?: string; 
}

export interface DataWithPagination<T> {
	count: number;
	next: string | null;
	previous: string | null;
	results: T[];
}

export type EventsResponse = DataWithPagination<EventItem>;
export type EventsUpcomingResponse = EventsResponse | undefined;
