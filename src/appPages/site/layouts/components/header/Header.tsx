'use client';
import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import HeaderNav from './ui/header-nav/HeaderNav';
import HeaderEnd from './ui/header-end/HeaderEnd';
import { usePathname } from 'next/navigation';
export const Header: React.FC = () => {
	const pathname = usePathname();
	const isHidden = ['/articles/*', '/lessons/d/*', '/lessons/m/*'].some(
		pattern => pathname.startsWith(pattern.replace('*', ''))
	);
	return (
		!isHidden && (
			<header className={styles.header}>
				<div className={clsx('container', styles.container)}>
					<HeaderNav />
					<HeaderEnd />
				</div>
			</header>
		)
	);
};
