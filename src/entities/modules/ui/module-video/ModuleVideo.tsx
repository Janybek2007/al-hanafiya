'use client';
import React from 'react';
import styles from './ModuleVideo.module.scss';
import VideoPlayer from '$/shared/ui/video-player/VideoPlayer';
import { IModuleLesson } from '../../types';
import { formatDate } from '$/shared/utils';
import { Svg } from '$/shared/ui/svg/Svg';

interface IProps {
	lesson: IModuleLesson;
	onDownload(): void;
	onPlayer?: (states: {
		isPlaying: boolean;
		currentTime: number;
		duration: number;
		volume: number;
		isMuted: boolean;
	}) => void;
}

export const ModuleVideo: React.FC<IProps> = ({ lesson, onDownload }) => {
	return (
		<div className={styles['module-video']}>
			<figure>
				<VideoPlayer
					options={{
						sources: [{ src: lesson.video_url, type: 'video/mp4' }]
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
