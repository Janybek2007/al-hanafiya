export enum ELessonFilters {
	ALL = 'ALL',
	UNINITIATED = 'UNINITIATED',
	THOSE_WHO_WALK = 'THOSE_WHO_WALK',
	FINISHED = 'FINISHED'
}

export type TLesson = {
	id: string;
	image_src: string;
	title: string;
	module_count: number;
	progress: number;
	category: string;
	description: string;
	type: "video" | 'audio'
};
