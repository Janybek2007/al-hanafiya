'use client';
import React, { useState } from 'react';
import styles from './ModuleAudio.module.scss';
import Image from 'next/image';
import { AudioPlayer } from '$/shared/ui';
import { LessonItem } from '$/entities/lessons';

interface IProps {
	lesson: LessonItem;
	title?: string;
}

export const ModuleAudio: React.FC<IProps> = React.memo(({ lesson, title }) => {
	const [audioFile] = useState(
		'https://podcasts.qurancentral.com/mishary-rashid-alafasy/mishary-rashid-alafasy-001-muslimcentral.com.mp3'
	);

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
	);
});

ModuleAudio.displayName = 'ModuleAudio';
