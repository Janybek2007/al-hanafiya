'use client';
import React from 'react';
import styles from './ModuleVideo.module.scss';
import { VideoPlayer } from '$/shared/ui';
import { formatDate } from '$/shared/utils';
import { LessonItem } from '$/entities/lessons';
import { Icons } from '$/shared/components';

interface IProps {
	lesson: LessonItem;
	onDownload(): void;
}

export const ModuleVideo: React.FC<IProps> = ({ lesson, onDownload }) => {
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
							Комментарии: <strong>{lesson.comments.length}</strong>
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
