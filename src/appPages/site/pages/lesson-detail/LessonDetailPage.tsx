import { BackButton } from '$/shared/ui';
import React from 'react';
import LessonHead from './sections/lesson-head/LessonHead';
import { example_lessons } from '$/entities/lessons';
import styles from './LessonDetailPage.module.scss';
import clsx from 'clsx';
import ModuleList from './sections/module-list/ModuleList';
import { example_modules } from '$/entities/modules';

const LessonDetailPage: React.FC<{ lId?: string }> = ({ lId }) => {
	const lesson = {
		detail: example_lessons.find(val => val.id === lId),
		modules: example_modules.filter(val => val.lId === lId)
	};

	return (
		<main className={styles.main}>
			<section className={'back_section'}>
				<div className='container'>
					<BackButton />
				</div>
			</section>
			<div className={styles['block']}>
				<div className={clsx('container', styles['container'])}>
					{lesson.detail && <LessonHead lesson={lesson.detail} />}
					{lesson.modules && <ModuleList modules={lesson.modules} />}
				</div>
			</div>
		</main>
	);
};

export default LessonDetailPage;
