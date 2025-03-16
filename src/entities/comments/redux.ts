'use client'
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
				body: arg.data
			})
		}),
		likeComment: b.mutation<LikeCommentResponse, LikeCommentArg>({
			query: arg => ({
				url: `/lessons/${arg.slug}/add_comment/`,
				body: arg.data
			})
		})
	})
});

export const { useAddCommentMutation, useLikeCommentMutation } = commentsApi;
