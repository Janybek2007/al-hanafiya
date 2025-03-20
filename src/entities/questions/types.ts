import { DataWithPagination } from '$/shared/types';
import { BaseArg } from '$/shared/types/api.types';

export interface QuestionItem {
	id: number;
	content: string;
	created_at: string;
	is_answered: boolean;
}

export interface QuestionsArg extends BaseArg {
	is_answered?: boolean;
}
export type AnsweredQuestionsArg = BaseArg;

export interface GuestionSimilarCheckArg extends BaseArg {
	text: string;
}

export interface GuestionSimilarCheckArg extends BaseArg {
	text: string;
}

export type GuestionSimilarCheckResponse = {
	similar_questions: QuestionItem[];
};

export interface QuestionByIdResponse {
	id: number;
	content: string;
	telegram: string;
	is_answered: boolean;
	crated_at: string;
	answer?: {
		id: number;
		content: string;
		created_at: string;
	};
}

export type QuestionsResponse = DataWithPagination<QuestionItem>;

export type AnsweredQuestionsResponse = QuestionItem[];

export interface NewQuestionArg {
	data: { content: string };
}

export type NewQuestionResponse =
	| {
			similar_questions: QuestionItem[];
	  }
	| (QuestionItem & { telegram: string });
