import { api } from '$/shared/redux/api';
import { SlugArg } from '$/shared/types/api.types';
import { createSearchParams } from '$/shared/utils';
import {
	AnsweredQuestionsArg,
	AnsweredQuestionsResponse,
	QuestionsArg,
	QuestionsResponse,
	GuestionSimilarCheckArg,
	GuestionSimilarCheckResponse,
	NewQuestionArg,
	NewQuestionResponse,
	QuestionBySlugResponse,
	QuestionItem
} from '.';

const questionsApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: build => ({
		guestions: build.query<QuestionsResponse, QuestionsArg>({
			query: () => ({
				url: '/questions/'
			}),
			providesTags: ['questions']
		}),
		newQuestion: build.mutation<NewQuestionResponse, NewQuestionArg>({
			query: arg => ({
				url: '/questions/',
				method: 'POST',
				body: arg.data
			}),
			invalidatesTags: ['questions']
		}),
		answeredQuestions: build.query<
			AnsweredQuestionsResponse,
			AnsweredQuestionsArg
		>({
			query: arg => ({
				url: `/questions/answered/?${createSearchParams(arg)}`
			})
		}),
		questionSimilarCheck: build.query<
			GuestionSimilarCheckResponse,
			GuestionSimilarCheckArg
		>({
			query: arg => ({
				url: `/questions/similar_check/?${createSearchParams(arg)}`
			})
		}),
		questionBySlug: build.query<QuestionBySlugResponse, SlugArg>({
			query: arg => ({
				url: `/questions/${arg.slug}/`
			})
		}),
		questionBySlugSimilar: build.query<QuestionItem[], SlugArg>({
			query: arg => ({
				url: `/questions/${arg.slug}/similar/`
			})
		})
	})
});

export const {
	useAnsweredQuestionsQuery,
	useGuestionsQuery,
	useNewQuestionMutation,
	useQuestionBySlugQuery,
	useQuestionBySlugSimilarQuery,
	useQuestionSimilarCheckQuery
} = questionsApi;
