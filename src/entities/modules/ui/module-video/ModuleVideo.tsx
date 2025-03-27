'use client';
import React from 'react';
import styles from './ModuleVideo.module.scss';
import { VideoPlayer } from '$/shared/ui';
import { formatDate } from '$/shared/utils';
import { LessonItem } from '$/entities/lessons';
import { Icons } from '$/shared/components';
import { CommentItem } from '$/entities/comments';

interface IProps {
	lesson: LessonItem;
	onDownload(): void;
}

export const ModuleVideo: React.FC<IProps> = ({ lesson, onDownload }) => {
	const flattenComments = React.useCallback(
		(comments: CommentItem[]): CommentItem[] => {
			return comments.flatMap(comment => [
				comment,
				...(comment.replies ? flattenComments(comment.replies) : [])
			]);
		},
		[]
	);

	const totalComments = flattenComments(lesson?.comments || []).length;

	return (
		<div className={styles['module-video']}>
			<figure>
				<VideoPlayer
					options={{
						source: {
							src: lesson.media_file,
							type: 'video/mp4',
							id: lesson.slug
						}
					}}
				/>
			</figure>
			<div className={styles['content']}>
				<div className={styles['col']}>
					<h4 className={styles.title}>{}</h4>
					<div className={styles['row']}>
						<span>{formatDate(lesson.created_at).DDMMYYYY}</span>
						<span>
							Комментарии: <strong>{totalComments}</strong>
						</span>
					</div>
				</div>
				<button onClick={onDownload} className={styles.install}>
					<Icons.Install />
					Көчүрүү
				</button>
			</div>
		</div>
	);
};
