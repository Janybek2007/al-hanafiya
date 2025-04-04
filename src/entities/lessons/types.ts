import { DataWithPagination } from '$/shared/types';
import { BaseArg } from '$/shared/types/api.types';
import { CommentItem } from '../comments';

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
}

export interface LessonItem {
	id: number;
	module: number;
	media_type: LessonType;
	media_file: string;
	thumbnail_url: string | null;
	is_intro: boolean;
	order: number;
	created_at: string;
	updated_at: string;
	slug: string;
	comments: CommentItem[];
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
	timestamp: number;
	last_viewed: string;
}
