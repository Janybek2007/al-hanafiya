'use client';
import React, { useState } from 'react';
import styles from './ModuleAudio.module.scss';
import Image from 'next/image';
import { AudioPlayer } from '$/shared/ui';
import { LessonItem } from '$/entities/lessons';
import { LessonProgressProvider } from '$/features/save_progress/context'

interface IProps {
	lesson: LessonItem;
	title?: string;
}

export const ModuleAudio: React.FC<IProps> = React.memo(({ lesson, title }) => {
	const [audioFile] = useState(lesson.media_file);

	const onDownload = React.useCallback(() => {
		const link = document.createElement('a');
		link.href = audioFile;
		link.target = '_blank';

		const fileName = audioFile.split('/').pop() || 'audio.mp3';
		link.download = fileName;

		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}, [audioFile]);

	return (
		<LessonProgressProvider slug={lesson.slug}>
			<div className={styles['module-audio']}>
				<figure>
					<Image
						width={1015}
						height={724}
						src={lesson.thumbnail_url || '/images/placeholder.webp'}
						alt={lesson.slug}
					/>
				</figure>
				<div className={styles['content']}>
					<h4 className={styles.title}>{title}</h4>
					<AudioPlayer onInstall={onDownload} audio={audioFile} />
				</div>
			</div>
		</LessonProgressProvider>
	);
});

ModuleAudio.displayName = 'ModuleAudio';
