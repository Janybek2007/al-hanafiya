'use client';
import React from 'react';
import styles from './ModuleVideo.module.scss';
import { VideoPlayer } from '$/shared/ui';
import { formatDate } from '$/shared/utils';
import { LessonItem } from '$/entities/lessons';
import { Icons } from '$/shared/components';
import { CommentItem } from '$/entities/comments';
import { SaveProgressEffect } from '$/features/save_progress';
import { LessonProgressProvider } from '$/features/save_progress/context';

interface IProps {
	lesson: LessonItem;
	onDownload: VoidFunction;
	title?: string;
}

export const ModuleVideo: React.FC<IProps> = React.memo(
	({ lesson, onDownload, title }) => {
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
			<LessonProgressProvider slug={lesson.slug}>
				<SaveProgressEffect />
				<div className={styles['module-video']}>
					<figure>
						<VideoPlayer
							options={{
								source: {
									src: lesson.media_file,
									// src: 'https://videos.pexels.com/video-files/5783005/5783005-hd_1920_1080_30fps.mp4',
									type: 'video/mp4',
									id: lesson.slug
								}
							}}
						/>
					</figure>
					<div className={styles['content']}>
						<div className={styles['col']}>
							{title && <h4 className={styles.title}>{title}</h4>}
							<div className={styles['row']}>
								<span>{formatDate(lesson.created_at).DDMMYYYY}</span>
								<span>
									Комментарии: <strong>{totalComments}</strong>
								</span>
							</div>
						</div>
						<div className={styles['actions']}>
							<button onClick={onDownload} className={styles.action}>
								<Icons.Install />
								Көчүрүү
							</button>
						</div>
					</div>
				</div>
			</LessonProgressProvider>
		);
	}
);

ModuleVideo.displayName = 'ModuleVideo';
