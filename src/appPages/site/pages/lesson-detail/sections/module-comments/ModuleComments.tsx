'use client';
import { CommentList, CommentSender } from '$/entities/modules';
import React from 'react';
import styles from './ModuleComments.module.scss';
import { CommentProvider } from '$/features/comments';
import { Loading } from '$/shared/ui';

interface IProps {
	lessonSlug: string | null;
}

const ModuleComments: React.FC<IProps> = ({ lessonSlug }) => {
	return (
		<CommentProvider lessonSlug={lessonSlug}>
			{({ comments, loading }) => (
				<div className={styles.module_comments}>
					<CommentSender />
					{loading ? <Loading /> : <CommentList comments={comments} />}
				</div>
			)}
		</CommentProvider>
	);
};

export default ModuleComments;
