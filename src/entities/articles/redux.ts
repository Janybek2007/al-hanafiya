'use client';
import { api } from '$/shared/redux/api';
import { DataWithPagination } from '$/shared/types'
import { BaseArg } from '$/shared/types/api.types'
import { createSearchParams } from '$/shared/utils'
import { ArticleItem, ArticleItemDetail } from './types';

const articlesApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: build => ({
		getArticles: build.query<DataWithPagination<ArticleItem[]>, BaseArg>({
			query: arg => ({
				url: `/articles/?${createSearchParams(arg)}`
			})
		}),
		getArticlesByCategory: build.query<
			ArticleItem[],
			BaseArg & { category: number }
		>({
			query: arg => ({
				url: `/articles/by_category/?${createSearchParams(arg)}`
			})
		}),
		getArticlesByTags: build.query<ArticleItem[], BaseArg & { tags: string }>({
			query: arg => ({
				url: `/articles/by_tags/?${createSearchParams(arg)}`
			})
		}),
		getArticlesByLatest: build.query<ArticleItem[], BaseArg>({
			query: arg => ({
				url: `/articles/latest/?${createSearchParams(arg)}`
			})
			

		}),

		getArticlesBySlug: build.query<ArticleItemDetail, { slug: string }>({
			query: ({ slug }) => ({
				url: `/articles/${slug}`
			})
		}),
		getArticlesBySlugSimilar: build.query<ArticleItem[], { slug: string }>({
			query: ({ slug }) => ({
				url: `/articles/${slug}/similar`
			})
		})
	})
});

export const {
	useGetArticlesByCategoryQuery,
	useGetArticlesByLatestQuery,
	useGetArticlesBySlugQuery,
	useGetArticlesBySlugSimilarQuery,
	useGetArticlesByTagsQuery,
	useGetArticlesQuery
} = articlesApi;
