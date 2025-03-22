import { DataWithPagination } from '$/shared/types';

export const AccountEndpoints = [
	'me',
	'my_questions',
	'viewing_history',
	'notifications',
	'learning_progress'
] as const;

export type TAccountEndpoints = (typeof AccountEndpoints)[number];

export interface AccountMe {
	id: number;
	username: string;
	email: string;
	first_name: string;
	last_name: string;
	profile: { avatar: null | string; telegram: string; is_ustaz: boolean };
}

export interface ViewingHistory {
	lesson_id: number;
	lesson_slug: string;
	module_name: string;
	topic_name: string;
	timestamp: number;
	last_viewed: string;
	duration_watched: string;
}

export type MyQuestion = DataWithPagination<{
	id: number;
	content: string;
	created_at: string;
	is_answered: boolean;
	answer: { id: number; content: string; created_at: string };
}>;

export type Notifications = {
	id: number;
	title: string;
	message: string;
	notification_type: string;
	is_read: boolean;
	created_at: string;
	url: string;
};

export interface CategoryProgress {
	category_id: number;
	category_name: string;
	total_lessons: number;
	completed_lessons: number;
	progress_percentage: number;
}

export interface RecentlyCompleted {
	lesson_id: number;
	lesson_slug: string;
	title: string;
	completed_at: string;
}

export type LearningProgress = {
	total_lessons: number;
	completed_lessons: number;
	progress_percentage: number;
	by_category: CategoryProgress[];
	recently_completed: RecentlyCompleted[];
};
