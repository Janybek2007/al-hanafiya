export interface ArticleItem {
	id: number;
	title: string;
	slug: string;
	created_at: string;
	author_name: string;
}

export interface ArticleItemDetail {
	id: number;
	title: string;
	content: string;
	created_at: string;
	updated_at: string;
	slug: string;
	is_moderated: boolean;

	similar_articles: ArticleItem[];
	author: number;
	author_details: {
		biography: string;
		achievements: string;
		photos: {
			id: number;
			image: string;
			description: string;
		}[];
	};
}
