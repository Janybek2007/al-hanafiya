'use client';
import React from 'react';
import styles from './Sidebar.module.scss';
import { NavLink } from './ui/NavLink';
import { useAccounts } from '$/entities/account';
import Image from 'next/image';
import { ApiMedia } from '$/shared/constants/url.constants';
import clsx from 'clsx';
import { menuItems } from './const';

const Sidebar: React.FC = () => {
	const { accounts_me } = useAccounts();
	const telegram = accounts_me.data?.profile.telegram.trim()
		? accounts_me.data?.profile.telegram
		: 'телеграм жок';
	return (
		<aside className={styles.sidebar}>
			<div className={styles.profileSection}>
				<div
					className={clsx(
						styles.avatar,
						accounts_me.data?.profile.avatar?.trim() !== '' && styles.is_place
					)}
				>
					{accounts_me.data?.profile.avatar ? (
						<Image
							width={100}
							height={100}
							src={ApiMedia(accounts_me.data?.profile.avatar)}
							alt='Колдонуучунун профилинин сүрөтү'
						/>
					) : (
						<div className={styles.placeholder}>
							{accounts_me.data?.username.slice(0, 1)}
						</div>
					)}
				</div>
				<div className={styles.profileInfo}>
					<h3 className={styles.name}>{accounts_me.data?.username}</h3>
					<p className={styles.handle}>@{telegram}</p>
					<div className={styles.progress}>
						<span>Окуу прогресси: 0%</span>
						<div className={styles.progressBar}>
							<div className={styles.progressFill} style={{ width: '0%' }} />
						</div>
					</div>
				</div>
			</div>

			<nav className={styles.menu}>
				<ul>
					{menuItems.map(item => (
						<NavLink key={item.href} {...item} />
					))}
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
