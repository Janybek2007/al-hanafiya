import { api } from '$/shared/redux/api';
import { createSearchParams } from '$/shared/utils';
import {
	TopicBySlugArg,
	TopicBySlugResponse,
	TopicsArg,
	TopicsResponse
} from './types';

const topicsApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: build => ({
		topics: build.query<TopicsResponse, TopicsArg>({
			query: arg => ({
				url: `/topics/?${createSearchParams(arg)}`
			})
		}),
		topicsBySlug: build.query<TopicBySlugResponse, TopicBySlugArg>({
			query: arg => ({
				url: `/topics/${arg.slug}/`
			})
		})
	})
});

export const { useTopicsBySlugQuery, useTopicsQuery } = topicsApi;
