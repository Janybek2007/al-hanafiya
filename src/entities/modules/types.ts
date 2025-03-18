import { DataWithPagination } from '$/shared/types';
import { BaseArg } from '$/shared/types/api.types';

export interface ModuleItem {
	id: number;
	name: string;
	topic: number;
	slug: string;
}

export interface ModulesArg extends BaseArg {
	topic?: number;
}

export interface ModulesBySlugArg {
	slug: string;
	sort_comments?: 'newest' | 'popular';
}

export type ModulesResponse = DataWithPagination<ModuleItem>;
export type ModulesBySlugResponse = ModuleItem;
