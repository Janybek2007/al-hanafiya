import React from 'react';
import LessonSection from './sections/lesson-section/LessonSection';
import { example_lessons, LessonList, LessonsFilter } from '$/entities/lessons';
import styles from './LessonsPage.module.scss';
import { paths } from '$/shared/routing';
import clsx from 'clsx';

const section_label = 'Баардык сабактар';
export const LessonsPage: React.FC = () => {
	return (
		<main>
			<LessonsFilter />
			<LessonSection
				className={styles.lessons_section}
				title={'Акыркы сабактар'}
				link={{ href: paths.lessons.latest_lessons, label: section_label }}
			>
				<LessonList lessons={example_lessons} />
			</LessonSection>
			<LessonSection
				className={styles.lessons_section}
				title={'Китептер боюнча'}
				link={{ href: paths.lessons.by_books, label: section_label }}
			>
				<LessonList lessons={example_lessons} />
			</LessonSection>
			<LessonSection
				className={styles.lessons_section}
				title={'Фикх'}
				link={{ href: paths.lessons.fiqh, label: section_label }}
			>
				<LessonList lessons={example_lessons} />
			</LessonSection>
			<LessonSection
				className={clsx(styles.lessons_section, styles.last)}
				title={'Акыйда'}
				link={{ href: paths.lessons.aqidah, label: section_label }}
			>
				<LessonList lessons={example_lessons} />
			</LessonSection>
		</main>
	);
};
