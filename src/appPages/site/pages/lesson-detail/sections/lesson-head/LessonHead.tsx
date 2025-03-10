'use client';
import React from 'react';
import styles from './LessonHead.module.scss';
import { TLesson } from '$/entities/lessons';
import Image from 'next/image';
import { Svg } from '$/shared/ui';

interface IProps {
	lesson: TLesson;
}

const LessonHead: React.FC<IProps> = ({ lesson }) => {
	const {
		image_src,
		module_count,
		progress,
		title,
		category,
		description,
		type
	} = lesson;

	return (
		<div className={styles.lesson_head}>
			<figure>
				<Image width={412} height={234} src={image_src} alt={title} />
			</figure>
			<div className={styles['info']}>
				<div className={styles['row']}>
					<span className={styles['category']}>{category}</span>
					<span>{module_count} модуль</span>
					<span>
						<Svg className={styles.svg} src={`/icon/${type}-outlined.svg`} />4{' '}
						{type == 'audio' ? 'аудио' : 'видео'}
						сабак
					</span>
				</div>
				<h4 className={styles.title}>{title}</h4>
				<p className={styles.desc}>{description}</p>
				<hr className={styles.divider} />
				<div className={styles.progress}>
					<hr
						className={styles.progress_line}
						style={{ width: `${progress}%` }}
					/>
					<div>
						<span>Жалпы прогресс</span>
						<span>{progress}%</span>
					</div>
					<hr className={styles.line} />
				</div>
			</div>
		</div>
	);
};

export default LessonHead;
