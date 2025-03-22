'use client';
import React from 'react';
import styles from './NotificationsPage.module.scss';
import { EmptyState, Loading } from '$/shared/ui';
import Link from 'next/link';
import { formatDate } from '$/shared/utils';
import { AccountHeader } from '../../layouts/components';
import {
	useNotificationsQuery,
	useMarkNotificationAsReadMutation,
	useMarkAllNotificationsAsReadMutation,
	NotificationType
} from '$/entities/notifications';

const NOTIFICATION_TYPES: Record<NotificationType, string> = {
	question_answer: 'Сиздин сурооңузга жооп',
	comment_reply: 'Сиздин комментарийиңизге жооп',
	new_lesson: 'Жаңы сабак',
	new_event: 'Жаңы иш-чара',
	system: 'Системалык билдирүү'
};

const NotificationsPage: React.FC = () => {
	const { data: notifications, isLoading, error } = useNotificationsQuery();
	const [markNotificationAsRead] = useMarkNotificationAsReadMutation();
	const [markAllNotificationsAsRead] = useMarkAllNotificationsAsReadMutation();

	const handleMarkAsRead = React.useCallback(
		async (id: number) => {
			try {
				await markNotificationAsRead(id).unwrap();
			} catch (err) {
				console.error('Билдирүүнү окулду деп белгилөөдө ката кетти:', err);
			}
		},
		[markNotificationAsRead]
	);

	const handleMarkAllAsRead = React.useCallback(async () => {
		try {
			await markAllNotificationsAsRead().unwrap();
		} catch (err) {
			console.error(
				'Бардык билдирүүлөрдү окулду деп белгилөөдө ката кетти:',
				err
			);
		}
	}, [markAllNotificationsAsRead]);

	if (isLoading) return <Loading />;

	if (error) {
		return (
			<div className={styles.error}>
				Билдирүүлөрдү жүктөөдө ката кетти: {error.toString()}
			</div>
		);
	}

	if (!notifications || notifications.length === 0) {
		return (
			<EmptyState
				icon='Bell'
				title='Билдирүүлөр жок'
				description='Сизде азырынча жаңы билдирүүлөр жок. Алар пайда болгондо бул жерде көрсөтүлөт!'
			/>
		);
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<AccountHeader
					title='Билдирүүлөр'
					subtitle='Сурооңузга жооп алгандан кийин, сиз жеке кабинетиңизде жана көрсөтүлгөн Telegram аркылуу билдирме аласыз.'
				/>
				<div className={styles.actions}>
					<button
						onClick={handleMarkAllAsRead}
						disabled={notifications.every(n => n.is_read)}
						className={styles.markBtn}
					>
						Баарын окулду деп белгилөө
					</button>
				</div>
				<div className={styles.notificationsList}>
					{notifications.map(notification => (
						<div key={notification.id} className={styles.notificationItem}>
							<div className={styles.itemHeader}>
								<span className={styles.titleText}>
									{NOTIFICATION_TYPES[notification.notification_type] ||
										notification.title}
								</span>
								<div className={styles.statusContainer}>
									<span
										className={styles.status}
										data-read={notification.is_read ? 'read' : 'unread'}
									>
										{notification.is_read ? 'Окулду' : 'Жаңы'}
									</span>
									{!notification.is_read && (
										<button
											onClick={() => handleMarkAsRead(notification.id)}
											className={styles.markBtn}
										>
											Окулду деп белгилөө
										</button>
									)}
								</div>
							</div>
							<div className={styles.itemDetails}>
								<p className={styles.messageText}>{notification.message}</p>
								<p>
									<strong>Күн:</strong>{' '}
									{formatDate(notification.created_at).DDMMYYYY_HHMM}
								</p>
								{notification.url && (
									<p>
										<Link
											target='_blank'
											href={notification.url}
											className={styles.link}
										>
											Мазмунга өтүү
										</Link>
									</p>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default NotificationsPage;
