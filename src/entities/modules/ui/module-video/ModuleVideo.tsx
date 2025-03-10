'use client';
import React from 'react';
import styles from './ModuleVideo.module.scss';
import { VideoPlayer, Svg } from '$/shared/ui';
import { IModuleLesson } from '../../types';
import { formatDate } from '$/shared/utils';

interface IProps {
	lesson: IModuleLesson;
	onDownload(): void;
}

export const ModuleVideo: React.FC<IProps> = ({ lesson, onDownload }) => {
	return (
		<div className={styles['module-video']}>
			<figure>
				<VideoPlayer
					options={{
						source: {
							src: lesson.video_url,
							type: 'video/youtube',
							id: lesson.id
						}
					}}
				/>
			</figure>
			<div className={styles['content']}>
				<div className={styles['col']}>
					<h4 className={styles.title}>{lesson.title}</h4>
					<div className={styles['row']}>
						<span>{formatDate(lesson.created_at).DDMMYYYY}</span>
						<span>
							Комментарии: <strong>{lesson.comments_count}</strong>
						</span>
					</div>
				</div>
				<button onClick={onDownload} className={styles.install}>
					<Svg src='/icon/install.svg' />
					Көчүрүү
				</button>
			</div>
		</div>
	);
};
