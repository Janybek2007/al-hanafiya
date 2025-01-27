import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
export const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={clsx('container', styles.container)}>
				Header
			</div>
		</header>
	);
};
