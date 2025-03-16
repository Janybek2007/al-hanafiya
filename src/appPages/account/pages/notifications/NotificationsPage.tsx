'use client';
import React from 'react';
import { Notifications, useAccounts } from '$/entities/account';
import styles from './NotificationsPage.module.scss';
import { EmptyState, Loading } from '$/shared/ui';
import Link from 'next/link';

const NotificationsPage: React.FC = () => {
	const { data, isLoading, error } = useAccounts().page;

	const notifications = React.useMemo(() => data as Notifications, [data]);

	if (isLoading) return <Loading />;

	if (error) {
		return (
			<div className={styles.error}>
				Ошибка загрузки уведомлений: {error.toString()}
			</div>
		);
	}

	if (
		!notifications ||
		!Array.isArray(notifications) ||
		notifications.count === 0
	) {
		return (
			<EmptyState
				icon='Bell'
				title='Уведомлений нет'
				description='У вас пока нет новых уведомлений. Они будут отображаться здесь, как только появятся!'
			/>
		);
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Уведомления</h1>
			<div className={styles.notificationsList}>
				{notifications.results.map(notification => (
					<div key={notification.id} className={styles.notificationItem}>
						<div className={styles.itemHeader}>
							<span className={styles.titleText}>{notification.title}</span>
							<span
								className={styles.status}
								data-read={notification.is_read ? 'read' : 'unread'}
							>
								{notification.is_read ? 'Прочитано' : 'Новое'}
							</span>
						</div>
						<div className={styles.itemDetails}>
							<p className={styles.messageText}>{notification.message}</p>
							<p>
								<strong>Тип:</strong> {notification.notification_type}
							</p>
							<p>
								<strong>Дата:</strong>{' '}
								{new Date(notification.created_at).toLocaleDateString('ru-RU', {
									day: '2-digit',
									month: '2-digit',
									year: 'numeric',
									hour: '2-digit',
									minute: '2-digit'
								})}
							</p>
							{notification.url && (
								<p>
									<Link href={notification.url} className={styles.link}>
										Перейти к содержимому
									</Link>
								</p>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default NotificationsPage;
