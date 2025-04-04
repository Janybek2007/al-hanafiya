'use client';
import { api } from '$/shared/redux/api';
import { SlugArg } from '$/shared/types/api.types';
import { createSearchParams } from '$/shared/utils';
import {
	LessonArg,
	LessonResponse,
	ProgressResponse,
	LessonItem,
	SaveProgressArg,
	SaveProgressResponse
} from '.';

const lessonsApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: ({ query, mutation }) => ({
		lessons: query<LessonResponse, LessonArg>({
			query: arg => ({
				url: `/lessons/?${createSearchParams(arg)}`
			})
		}),
		lessonBySlug: query<LessonItem, SlugArg>({
			query: ({ slug }) => ({
				url: `/lessons/${slug}/`
			}),
			providesTags: ['lesson_by_slug']
		}),
		progress: query<ProgressResponse, SlugArg>({
			query: ({ slug }) => ({
				url: `/lessons/${slug}/get_progress/`
			})
		}),
		saveProgress: mutation<SaveProgressResponse, SaveProgressArg>({
			query: arg => ({
				url: `/lessons/${arg.slug}/save_progress/`,
				body: arg.data,
				method: "POST"
			})
		})
	})
});

export const {
	useLessonsQuery,
	useLessonBySlugQuery,
	useProgressQuery,
	useSaveProgressMutation
} = lessonsApi;
