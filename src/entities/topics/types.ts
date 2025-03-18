import { DataWithPagination } from '$/shared/types';
import { BaseArg, SlugArg } from '$/shared/types/api.types';
import { ModuleItem } from '../modules/types';

export interface TopicItem extends SlugArg {
	id: number;
	name: string;
	category: number;
}

export type TopicsArg = BaseArg & { category?: number };
export type TopicsResponse = DataWithPagination<TopicItem>;

export type TopicBySlugArg = SlugArg;
export type TopicBySlugResponse = TopicItem & {
	modules: ModuleItem[];
};
