'use client';
import { ViewingHistory, useAccounts } from '$/entities/account';
import { paths } from '$/shared/routing';
import { EmptyState, Loading } from '$/shared/ui';
import React from 'react';
import styles from './ViewingHistoryPage.module.scss';

const ViewingHistoryPage: React.FC = () => {
	const { data, isLoading, error } = useAccounts().page;

	const viewing_history = React.useMemo(() => data as ViewingHistory[], [data]);

	if (isLoading) return <Loading />;

	if (error) {
		return (
			<div className={styles.error}>
				Ошибка загрузки истории просмотров: {error.toString()}
			</div>
		);
	}

	if (
		!viewing_history ||
		!Array.isArray(viewing_history) ||
		viewing_history?.length === 0
	) {
		return (
			<EmptyState
				icon='History'
				title='История просмотров пуста'
				description='Вы еще не начали просмотр уроков. Начните прямо сейчас, чтобы увидеть
					вашу историю!'
				link={{ href: paths.lessons.index, label: 'Перейти к урокам' }}
			/>
		);
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>История просмотров</h1>
			<div className={styles.historyList}>
				{viewing_history.map(entry => (
					<div key={entry.lesson_id} className={styles.historyItem}>
						<div className={styles.itemHeader}>
							<span className={styles.lessonSlug}>{entry.lesson_slug}</span>
							<span className={styles.timestamp}>
								{new Date(entry.timestamp).toLocaleDateString('ru-RU', {
									day: '2-digit',
									month: '2-digit',
									year: 'numeric',
									hour: '2-digit',
									minute: '2-digit'
								})}
							</span>
						</div>
						<div className={styles.itemDetails}>
							<p>
								<strong>Модуль:</strong> {entry.module_name}
							</p>
							<p>
								<strong>Тема:</strong> {entry.topic_name}
							</p>
							<p>
								<strong>Последний просмотр:</strong> {entry.last_viewed}
							</p>
							<p>
								<strong>Длительность просмотра:</strong>{' '}
								{entry.duration_watched}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ViewingHistoryPage;
