'use client';
import React from 'react';
import { LearningProgress, useAccounts } from '$/entities/account';
import { Loading } from '$/shared/ui';
import styles from './LearningProgressPage.module.scss';
import { AccountHeader } from '../../layouts/components';

const LearningProgressPage: React.FC = () => {
	const { data, isLoading, error } = useAccounts().page;
	const learningProgress = React.useMemo(
		() => data as LearningProgress,
		[data]
	);

	if (isLoading) return <Loading />;

	if (
		error ||
		!learningProgress ||
		!Array.isArray(learningProgress.recently_completed)
	) {
		return (
			<div className={styles.error}>
				Окуу прогрессин жүктөөдө ката: {error?.toString()}
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<AccountHeader
				title='Окуу прогресси'
				subtitle='Сиздин сурооңузга жооп алгандан кийин, жеке кабинетиңизде жана көрсөтүлгөн Telegram аркылуу билдирүү аласыз.'
			/>
			<div className={styles.progressSummary}>
				<h2 className={styles.subtitle}>
					Жалпы прогресс: {learningProgress.progress_percentage}%
				</h2>
				<p className={styles.summaryText}>
					Аяктаган сабактар: {learningProgress.completed_lessons} /{' '}
					{learningProgress.total_lessons}
				</p>
			</div>
			<div className={styles.recentProgress}>
				<h2 className={styles.subtitle}>Жакында аяктаган сабактар</h2>
				<div className={styles.recentLessons}>
					{learningProgress.recently_completed.map(lesson => (
						<div key={lesson.lesson_id} className={styles.lessonItem}>
							<span className={styles.lessonTitle}>{lesson.title}</span>
							<span className={styles.completedDate}>
								Аяктаган: {new Date(lesson.completed_at).toLocaleDateString()}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LearningProgressPage;
