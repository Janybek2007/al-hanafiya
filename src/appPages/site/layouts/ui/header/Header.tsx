import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import HeaderNav from './ui/header-nav/HeaderNav';
import HeaderEnd from './ui/header-end/HeaderEnd';
export const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={clsx('container', styles.container)}>
				<HeaderNav />
				<HeaderEnd />
			</div>
		</header>
	);
};
