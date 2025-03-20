import { api } from '$/shared/redux/api';
import { IdArg } from '$/shared/types/api.types';
import { createSearchParams } from '$/shared/utils';
import {
	AnsweredQuestionsArg,
	AnsweredQuestionsResponse,
	GuestionSimilarCheckArg,
	GuestionSimilarCheckResponse,
	NewQuestionArg,
	NewQuestionResponse,
	QuestionByIdResponse,
	QuestionItem,
	QuestionsArg,
	QuestionsResponse
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
		questionById: build.query<QuestionByIdResponse, IdArg>({
			query: arg => ({
				url: `/questions/${arg.id}/`
			})
		}),
		questionByIdSimilar: build.query<QuestionItem[], IdArg>({
			query: arg => ({
				url: `/questions/${arg.id}/similar/`
			})
		})
	})
});

export const {
	useAnsweredQuestionsQuery,
	useGuestionsQuery,
	useNewQuestionMutation,
	useQuestionSimilarCheckQuery,
	useQuestionByIdQuery,
	useQuestionByIdSimilarQuery
} = questionsApi;
