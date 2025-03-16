export interface AddCommentArg {
	data: {
		content: string;
		parent?: number;
	};
	slug: string;
}

export interface LikeCommentArg {
	data: {
		comment_id?: number;
	};
	slug: string;
}

export enum LikeCommentAction {
	LIKED = 'liked',
	UN_LIKED = 'unliked'
}

export interface LikeCommentResponse {
	status: string;
	action: LikeCommentAction;
	like_count: number;
}

export interface CommentItem {
	content: string;
	username: string;
	avatar: string;
	like_count: string;
	has_user_liked: string;
	created_at: string;
	replies: string;
	parent: number;
	user_id: string;
}
