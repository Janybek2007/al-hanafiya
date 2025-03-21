import { api } from '$/shared/redux/api';
import { BaseArg, IdArg } from '$/shared/types/api.types';
import { createSearchParams } from '$/shared/utils';
import { EventItem, EventsResponse, EventsUpcomingResponse } from './types';

const eventsApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: builder => ({
		events: builder.query<EventsResponse, BaseArg>({
			query: arg => ({
				url: `/events/?${createSearchParams(arg)}`
			})
		}),
		eventsUpcoming: builder.query<EventsUpcomingResponse, BaseArg>({
			query: arg => ({
				url: `/events/upcoming/?${createSearchParams(arg)}`
			})
		}),
		eventsById: builder.query<EventItem, IdArg>({
			query: arg => ({
				url: `/events/${arg.id}/`
			})
		})
	})
});

export const {useEventsQuery , useEventsByIdQuery , useEventsUpcomingQuery} = eventsApi;
