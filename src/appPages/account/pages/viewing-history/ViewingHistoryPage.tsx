'use client';
import { ViewingHistory, useAccounts } from '$/entities/account';
import { paths } from '$/shared/routing';
import { EmptyState, Loading } from '$/shared/ui';
import React from 'react';
import styles from './ViewingHistoryPage.module.scss';
import { formatDate } from '$/shared/utils'

const ViewingHistoryPage: React.FC = () => {
	const { data, isLoading, error } = useAccounts().page;

	const viewing_history = React.useMemo(() => data as ViewingHistory[], [data]);

	if (isLoading) return <Loading />;

	if (error) {
		return (
			<div className={styles.error}>
				Көрүү тарыхын жүктөөдө ката кетти: {error.toString()}
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
				title='Көрүү тарыхы бош'
				description='Сиз азырынча сабактарды көрө элексиз. Азыр баштаңыз, көрүү тарыхыңызды көрүү үчүн!'
				link={{ href: paths._lessons, label: 'Сабактарга өтүү' }}
			/>
		);
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Көрүү тарыхы</h1>
			<div className={styles.historyList}>
				{viewing_history.map(entry => (
					<div key={entry.lesson_id} className={styles.historyItem}>
						<div className={styles.itemHeader}>
							<span className={styles.lessonSlug}>{entry.lesson_slug}</span>
							<span className={styles.timestamp}>
								{formatDate(entry.timestamp).DDMMYYYY_HHMM}
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
								<strong>Акыркы көрүү:</strong> {entry.last_viewed}
							</p>
							<p>
								<strong>Көрүү узактыгы:</strong> {entry.duration_watched}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ViewingHistoryPage;
