'use client'
import { CommentList, CommentSender } from '$/entities/modules';
import React from 'react';
import styles from './ModuleComments.module.scss';
import { CommentProvider } from '$/features/comments';
interface IProps {
	moduleId: string;
}

const ModuleComments: React.FC<IProps> = ({ moduleId }) => {
	return (
		<CommentProvider moduleId={moduleId}>
			{({ comments }) => (
				<div className={styles.module_comments}>
					<CommentSender />
					<CommentList comments={comments} />
				</div>
			)}
		</CommentProvider>
	);
};

export default ModuleComments;
