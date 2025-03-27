import React, { memo, useMemo } from 'react';
import { CommentItem } from '../comment-item/CommentItem';
import styles from './CommentList.module.scss';
import clsx from 'clsx';
import { type CommentItem as CItem } from '$/entities/comments';
import { EmptyState } from '$/shared/ui';
import { useComment } from '$/features/comments';

interface IProps {
	comments: CItem[];
	treeIndex?: number;
}

const getAllComments = (comments: CItem[], commentMap: Map<number, CItem>) => {
	const result: (Omit<CItem, 'replies'> & { reply?: { username: string } })[] =
		[];

	comments.forEach(comment => {
		const { replies, ...rest } = comment;
		const flatComment = {
			...rest,
			reply: rest.parent
				? { username: commentMap.get(rest.parent)?.username || '' }
				: undefined
		};
		result.push(flatComment);
		if (replies?.length) {
			result.push(...getAllComments(replies, commentMap));
		}
	});

	return result;
};

const MemoizedCommentItem = memo(CommentItem, (prevProps, nextProps) => {
	return (
		prevProps.cm.id === nextProps.cm.id &&
		prevProps.cm.content === nextProps.cm.content &&
		prevProps.cm.username === nextProps.cm.username &&
		prevProps.cm.reply?.username === nextProps.cm.reply?.username
	);
});

export const CommentList: React.FC<IProps> = memo(
	({ treeIndex = 0, comments }) => {
		const { commentRefs } = useComment();

		const [, flatComments] = useMemo(() => {
			const map = new Map<number, CItem>();

			const collectComments = (cmts: CItem[]) => {
				cmts.forEach(cmt => {
					map.set(cmt.id, cmt);
					if (cmt.replies?.length) {
						collectComments(cmt.replies);
					}
				});
			};
			collectComments(comments);

			return [map, getAllComments(comments, map)];
		}, [comments]);

		return (
			<ul className={clsx(styles.comment_list, treeIndex > 0 && styles[`ti`])}>
				{flatComments.length === 0 ? (
					<EmptyState
						icon={'MessageSquare'}
						title='Нет комментариев'
						description='Здесь пока нет комментариев. Будьте первым!'
					/>
				) : (
					flatComments.map(cm => (
						<li
							key={cm.id}
							ref={el => {
								commentRefs.current.set(cm.id, el);
							}}
							className={clsx(
								styles.comment_wrapper,
								treeIndex === 0 && styles.rm
							)}
						>
							<div
								className={styles.tree_line}
								style={{ left: `${treeIndex * 20}px` }}
							/>
							<MemoizedCommentItem cm={cm} />
						</li>
					))
				)}
			</ul>
		);
	},
	(prevProps, nextProps) => {
		return (
			prevProps.treeIndex === nextProps.treeIndex &&
			prevProps.comments === nextProps.comments
		);
	}
);

CommentList.displayName = 'CommentList';
