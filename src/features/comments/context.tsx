'use client';
import { example_comments, IModuleComment } from '$/entities/modules';
import * as React from 'react';

interface ICommentContext {
	comments: IModuleComment[];
	handleSendComment: (newMessage: string, replyId?: string) => void;
	reply: string | null;
	setReply: React.Dispatch<React.SetStateAction<string | null>>;
}
const CommentContext = React.createContext<ICommentContext | undefined>(
	undefined
);

interface ICommentProvider {
	moduleId: string;
	children: (arg: { comments: IModuleComment[] }) => React.ReactNode;
}

export const CommentProvider: React.FC<ICommentProvider> = ({ children }) => {
	const [comments, setComments] = React.useState(example_comments);
	const [reply, setReply] = React.useState<string | null>(null);

	const handleSendComment = React.useCallback(
		(newMessage: string, replyId?: string) => {
			const date = new Date();
			const formattedDate = `${date.getDate().toString().padStart(2, '0')}.${(
				date.getMonth() + 1
			)
				.toString()
				.padStart(2, '0')}.${date.getFullYear()} ${date
				.getHours()
				.toString()
				.padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

			const newComment: IModuleComment = {
				id: Date.now().toLocaleString(),
				user: {
					displayName: 'Current User',
					avatar: null
				},
				sended_at: formattedDate,
				message: newMessage,
				reply_to: replyId || undefined
			};

			if (!replyId) {
				setComments(prevComments => [...prevComments, newComment]);
			} else {
				const addReplyToComment = (
					commentsArray: IModuleComment[]
				): IModuleComment[] => {
					return commentsArray.map(comment => {
						if (comment.id === replyId) {
							return {
								...comment,
								comments: comment.comments
									? [...comment.comments, newComment]
									: [newComment]
							};
						}
						if (comment.comments) {
							return {
								...comment,
								comments: addReplyToComment(comment.comments)
							};
						}
						return comment;
					});
				};

				setReply(null);
				setComments(prevComments => addReplyToComment(prevComments));
			}
		},
		[]
	);

	const values: ICommentContext = {
		comments,
		handleSendComment,
		reply,
		setReply
	};

	return (
		<CommentContext.Provider value={values}>
			{children({ comments })}
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
