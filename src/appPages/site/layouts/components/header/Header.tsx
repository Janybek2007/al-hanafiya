'use client';
import { useHiddenPages } from '$/shared/utils/hooks/use-hidden-pages';
import clsx from 'clsx';
import React from 'react';
import styles from './Header.module.scss';
import HeaderEnd from './ui/header-end/HeaderEnd';
import HeaderNav from './ui/header-nav/HeaderNav';
export const Header: React.FC = () => {
	const isHidden = useHiddenPages();
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
