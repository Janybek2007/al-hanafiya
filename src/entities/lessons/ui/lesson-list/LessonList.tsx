import React from 'react';
import styles from './LessonList.module.scss';
import { LessonCard, TLesson } from '$/entities/lessons';
interface IProps {
	lessons: TLesson[];
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
