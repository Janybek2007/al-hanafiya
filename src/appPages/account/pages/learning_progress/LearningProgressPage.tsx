'use client';
import React from 'react';
import { LearningProgress, useAccounts } from '$/entities/account';
import { Loading } from '$/shared/ui';
import styles from './LearningProgressPage.module.scss';

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
		!Array.isArray(learningProgress.by_category)
	) {
		return (
			<div className={styles.error}>
				Ошибка загрузки прогресса обучения: {error?.toString()}
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Прогресс обучения</h1>
			<div className={styles.progressSummary}>
				<h2 className={styles.subtitle}>
					Общий прогресс: {learningProgress.progress_percentage}%
				</h2>
				<p className={styles.summaryText}>
					Пройдено уроков: {learningProgress.completed_lessons} из{' '}
					{learningProgress.total_lessons}
				</p>
			</div>
			<div className={styles.categoryProgress}>
				<h2 className={styles.subtitle}>Прогресс по категориям</h2>
				<div className={styles.categories}>
					{learningProgress.by_category.map(category => (
						<div key={category.category_id} className={styles.categoryItem}>
							<div className={styles.categoryHeader}>
								<span className={styles.categoryName}>
									{category.category_name}
								</span>
								<span className={styles.categoryProgressText}>
									{category.completed_lessons} из {category.total_lessons} (
									{category.progress_percentage}%)
								</span>
							</div>
							<div className={styles.progressBar}>
								<div
									className={styles.progressFill}
									style={{ width: `${category.progress_percentage}%` }}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LearningProgressPage;
