'use client';
import React from 'react';
import styles from './ModuleAudio.module.scss';
import Image from 'next/image';
import { AudioPlayer } from '$/shared/ui';
import { text$ } from '$/shared/utils';
import { LessonItem } from '$/entities/lessons'

interface IProps {
	lesson: LessonItem;
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
						src={lesson.media_file}
						alt={lesson.slug}
					/>
				</figure>
				<div className={styles['content']}>
					<h4 className={styles.title}>{lesson.slug}</h4>
					<AudioPlayer
						onInstall={onDownload}
						audio={{
							duration: 400,
							name: text$.toSlug(lesson.slug),
							file: String(lesson.media_file)
						}}
					/>
				</div>
			</div>
		);
	}
);
ModuleAudio.displayName = 'ModuleAudio';
