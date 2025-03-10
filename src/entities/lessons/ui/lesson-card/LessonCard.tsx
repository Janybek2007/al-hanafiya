import React from 'react';
import { TLesson } from '$/entities/lessons';
import styles from './LessonCard.module.scss';
import Image from 'next/image';
import { Svg } from '$/shared/ui';
import Link from 'next/link';
interface IProps {
	lesson: TLesson;
}

export const LessonCard: React.FC<IProps> = ({ lesson }) => {
	const { image_src, module_count, progress, title, id } = lesson;
	return (
		<Link href={`/lessons/d/${id}`} className={styles.lesson_card}>
			<figure>
				<Image width={453} height={257} src={image_src} alt={title} />
			</figure>
			<div className={styles['content']}>
				<div>
					<h4>{title}</h4>
					<div className={styles.progress}>
						<hr
							className={styles.progress_line}
							style={{ width: `${progress}%` }}
						/>
						<hr className={styles.line} />
					</div>
				</div>
				<div className={styles['row']}>
					<div className='flexCenter'>
						<Svg className='flexCenter' src='/icon/book.svg' />
						<span>{module_count} модуль</span>
					</div>
					<span>{progress} %</span>
				</div>
			</div>
		</Link>
	);
};
