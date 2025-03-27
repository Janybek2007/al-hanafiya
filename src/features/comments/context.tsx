'use client';
import { CommentItem, useAddCommentMutation } from '$/entities/comments';
import { useLessonBySlugQuery } from '$/entities/lessons/redux';
import { useSearchParams } from 'next/navigation';
import * as React from 'react';

interface ICommentContext {
	comments: CommentItem[];
	handleSendComment: (newMessage: string, replyId?: number) => Promise<void>;
	reply: number | null;
	setReply: React.Dispatch<React.SetStateAction<number | null>>;
	lessonSlug: string | null;
	commentRefs: React.RefObject<Map<number, HTMLLIElement | null>>;
}
const CommentContext = React.createContext<ICommentContext | undefined>(
	undefined
);

interface ICommentProvider {
	lessonSlug: string | null;
	children: (arg: {
		comments: CommentItem[];
		loading: boolean;
	}) => React.ReactNode;
}

export const CommentProvider: React.FC<ICommentProvider> = ({
	children,
	lessonSlug
}) => {
	const { data, isLoading } = useLessonBySlugQuery({
		slug: String(lessonSlug)
	});
	const sp = useSearchParams();
	const slideComment = Number(sp.get('comment'));
	const commentRefs = React.useRef<Map<number, HTMLLIElement | null>>(
		new Map()
	);

	const [reply, setReply] = React.useState<number | null>(null);
	const [sendComment] = useAddCommentMutation();
	const handleSendComment = React.useCallback(
		async (newMessage: string, replyId?: number) => {
			if (!lessonSlug) {
				alert('Урок не указан');
				return;
			}
			await sendComment({
				data: { content: newMessage, parent: replyId },
				slug: lessonSlug
			}).unwrap();
		},
		[sendComment, lessonSlug]
	);

	React.useEffect(() => {
		if (slideComment && data?.comments && !isLoading) {
			const commentRef = commentRefs.current.get(slideComment);
			if (commentRef) {
				commentRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}
		}
	}, [slideComment, data?.comments, isLoading]);

	const values: ICommentContext = {
		comments: data?.comments || [],
		handleSendComment,
		reply,
		setReply,
		lessonSlug,
		commentRefs
	};

	return (
		<CommentContext.Provider value={values}>
			{children({ comments: data?.comments || [], loading: isLoading })}
		</CommentContext.Provider>
	);
};
export const useComment = (): ICommentContext => {
	const context = React.useContext(CommentContext);

	if (!context) {
		throw new Error('useMyContext must be used within a MovieProvider');
	}
	return context;
};
