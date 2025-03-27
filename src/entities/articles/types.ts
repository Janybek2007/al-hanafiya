export interface ArticleItem {
	id: number;
	title: string;
	content: string;
	slug: string;
	created_at: string;
	author_name: string;
	image_url: string;
}

export interface ArticleItemDetail {
	id: number;
	title: string;
	content: string;
	image: string;
	image_url: string;
	created_at: string;
	updated_at: string;
	slug: string;
	similar_articles: ArticleItem[];
	author: null | string;
	author_details: null | string;
	is_moderated: boolean;
}
