import React from 'react';
import { CommentItem } from '../comment-item/CommentItem';
import styles from './CommentList.module.scss';
import clsx from 'clsx';
import { type CommentItem as CItem } from '$/entities/comments';
import { EmptyState } from '$/shared/ui';

interface IProps {
	comments: CItem[];
	treeIndex?: number;
}

export const CommentList: React.FC<IProps> = ({ treeIndex = 0, comments }) => {
	return (
		<div className={clsx(styles.comment_list, treeIndex > 0 && styles[`ti`])}>
			{comments.length === 0 ? (
				<EmptyState
					icon={'MessageSquare'}
					title='Нет комментариев'
					description='Здесь пока нет комментариев. Будьте первым, кто оставит комментарий!'
				/>
			) : (
				comments.map((cm, i) => (
					<div
						key={cm.id}
						className={clsx(
							styles.comment_wrapper,
							i === comments.length - 1 && styles.last
						)}
					>
						<CommentItem cm={cm} />
						{cm.replies && cm.replies.length > 0 && (
							<CommentList comments={cm.replies} treeIndex={i + 1} />
						)}
					</div>
				))
			)}
		</div>
	);
};
