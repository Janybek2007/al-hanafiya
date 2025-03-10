export interface IModuleLesson {
	id: string;
	title: string;
	time: number;
	created_at: string;
	comments_count: number;
	video_url?: string;
	audio_url?: string;
	image_src: string;
	type: 'video' | 'audio';
}

export interface IModule {
	lId: string;
	module: number;
	id: string;
	title: string;
	description: string;
	progress: number;
	image_src: string;
	lessons: IModuleLesson[];
}

export interface IModuleComment {
	id: string;
	user: {
		avatar: string | null;
		displayName: string;
	};
	reply_to?: string
	sended_at: string;
	message: string
	comments?: IModuleComment[];
}
