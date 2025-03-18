'use client';
import { api } from '$/shared/redux/api';
import {
	AddCommentArg,
	CommentItem,
	LikeCommentArg,
	LikeCommentResponse
} from '.';

const commentsApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: b => ({
		addComment: b.mutation<CommentItem, AddCommentArg>({
			query: arg => ({
				url: `/lessons/${arg.slug}/add_comment/`,
				method: 'POST',
				body: arg.data
			}),
			invalidatesTags: ['lesson_by_slug']
		}),
		likeComment: b.mutation<LikeCommentResponse, LikeCommentArg>({
			query: arg => ({
				url: `/lessons/${arg.slug}/like_comment/`,
				method: 'POST',
				body: arg.data
			}),
			invalidatesTags: ['lesson_by_slug']
		})
	})
});

export const { useAddCommentMutation, useLikeCommentMutation } = commentsApi;
