import { api } from '$/shared/redux/api';
import { createSearchParams } from '$/shared/utils';
import {
	CategoriesArg,
	CategoriesResponse,
	CategoryBySlugArg,
	CategoryBySlugResponse
} from './types';

const categoriesApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: build => ({
		categories: build.query<CategoriesResponse, CategoriesArg>({
			query: arg => ({
				url: `/categories/?${createSearchParams(arg)}`
			})
		}),
		categoriesBySlug: build.query<CategoryBySlugResponse, CategoryBySlugArg>({
			query: arg => ({
				url: `/categories/${arg.slug}/`
			})
		})
	})
});

export const { useCategoriesBySlugQuery, useCategoriesQuery } = categoriesApi;
