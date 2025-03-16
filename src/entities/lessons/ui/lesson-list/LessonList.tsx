'use client';
import React from 'react';
import styles from './LessonList.module.scss';
import { LessonCard, LessonItem } from '$/entities/lessons';
interface IProps {
	lessons: LessonItem[];
}

export const LessonList: React.FC<IProps> = ({ lessons }) => {
	return (
		<div className={styles.lesson_list}>
			{lessons.map(ls => (
				<LessonCard key={ls.id} lesson={ls} />
			))}
		</div>
	);
};
