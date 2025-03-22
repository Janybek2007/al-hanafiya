export type NotificationType =
	| 'question_answer'
	| 'comment_reply'
	| 'new_lesson'
	| 'new_event'
	| 'system';

export interface NotificationItem {
	id: number;
	title: string;
	message: string;
	notification_type: NotificationType;
	is_read: boolean;
	created_at: string;
	url: string;
}

export type NotificationsResponse = NotificationItem[];

export interface PushSubscription {
	subscription_info: {
		endpoint: string;
		keys: {
			p256dh: string;
			auth: string;
		};
	};
	browser: string;
	device: string;
}

export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export interface NotificationSettings {
	push_enabled: boolean;
	email_enabled: boolean;
	notification_types: {
		question_answer: boolean;
		comment_reply: boolean;
		new_lesson: boolean;
		new_event: boolean;
		system: boolean;
	};
}
