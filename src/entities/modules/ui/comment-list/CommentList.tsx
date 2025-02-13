import React from 'react';
import { CommentItem } from '../comment-item/CommentItem';
import styles from './CommentList.module.scss';
import { IModuleComment } from '../../types';
import clsx from 'clsx';

interface IProps {
	comments: IModuleComment[];
	treeIndex?: number;
}

export const CommentList: React.FC<IProps> = ({ comments, treeIndex }) => {
	return (
		<div className={clsx(styles.comment_list, styles[`ti-${treeIndex}`])}>
			{comments.map((cm, i) => (
				<React.Fragment key={cm.id}>
					<CommentItem cm={cm} />
					{cm.comments && cm.comments.length > 0 && (
						<CommentList comments={cm.comments} treeIndex={i} />
					)}
				</React.Fragment>
			))}
		</div>
	);
};
