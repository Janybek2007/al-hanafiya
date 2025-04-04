'use client';
import { ViewingHistory, useAccounts } from '$/entities/account';
import { paths } from '$/shared/routing';
import { EmptyState, Loading } from '$/shared/ui';
import React from 'react';
import styles from './ViewingHistoryPage.module.scss';
import { formatDate } from '$/shared/utils';
import { AccountHeader } from '../../layouts/components';

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
			<AccountHeader
				title='Көрүү тарыхы'
				subtitle='Сиздин көрүү тарыхыңыз бул жерде көрсөтүлөт. Ар бир сабактын маалыматын карап чыгыңыз.'
			/>
			<div className={styles.historyList}>
				{viewing_history.map(entry => (
					<div key={entry.lesson_id} className={styles.historyItem}>
						<div className={styles.itemHeader}>
							<h4 className={styles.lessonTitle}>{entry.module_name}</h4>
						</div>
						<div className={styles.itemDetails}>
							<p className={styles.detailText}>
								<strong>Сабак:</strong> {entry.lesson_slug}
							</p>
							<p className={styles.detailText}>
								<strong>Тема:</strong> {entry.topic_name}
							</p>
							<p className={styles.detailText}>
								<strong>Акыркы көрүү:</strong>{' '}
								{formatDate(entry.last_viewed).DDMMYYYY_HHMM}
							</p>
							<p className={styles.detailText}>
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
