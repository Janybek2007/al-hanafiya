import { DataWithPagination } from '$/shared/types';
import { BaseArg, SlugArg } from '$/shared/types/api.types';

export interface CategoryItem extends SlugArg {
	id: number;
	name: string;
}

export type CategoriesArg = BaseArg;
export type CategoriesResponse = DataWithPagination<CategoryItem>;

export type CategoryBySlugArg = SlugArg;
export type CategoryBySlugResponse = CategoryItem & {
	topics: [];
};
