import { DataWithPagination } from '$/shared/types';
import { BaseArg } from '$/shared/types/api.types'

export enum ELessonFilters {
	ALL = 'ALL',
	UNINITIATED = 'UNINITIATED',
	THOSE_WHO_WALK = 'THOSE_WHO_WALK',
	FINISHED = 'FINISHED'
}

export type LessonType = 'video' | 'audio';

export interface LessonArg extends BaseArg {
	module?: number;
	media_type?: LessonType;
	is_intro?: boolean;
};

export interface LessonItem {
	id: number;
	module: number;
	media_type: LessonType;
	media_file: string;
	is_intro: boolean;
	order: number;
	created_at: string;
	updated_at: string;
	slug: boolean;
	comments: [];
}

export type LessonResponse = DataWithPagination<LessonItem>;

export interface SaveProgressArg {
	data: { timestamp: number };
	slug: string;
}

export interface SaveProgressResponse {
	status: string;
}

export interface ProgressResponse {
	timestamp: string;
	last_viewed: string;
}
