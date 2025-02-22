'use client';
import React from 'react';
import styles from './ModuleAudio.module.scss';
import { IModuleLesson } from '../../types';
import Image from 'next/image';
import { AudioPlayer } from '$/shared/ui';
import { text$ } from '$/shared/utils';

interface IProps {
	lesson: IModuleLesson;
	onDownload?: VoidFunction;
}
export const ModuleAudio: React.FC<IProps> = React.memo(
	({ lesson, onDownload }) => {
		return (
			<div className={styles['module-audio']}>
				<figure>
					<Image
						width={1015}
						height={724}
						src={lesson.image_src}
						alt={lesson.title}
					/>
				</figure>
				<div className={styles['content']}>
					<h4 className={styles.title}>{lesson.title}</h4>
					<AudioPlayer
						onInstall={onDownload}
						audio={{
							duration: lesson.time,
							name: text$.toSlug(lesson.title),
							file: String(lesson.audio_url)
						}}
					/>
				</div>
			</div>
		);
	}
);
ModuleAudio.displayName = 'ModuleAudio';
