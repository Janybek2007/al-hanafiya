import React from 'react';
import styles from './Footer.module.scss';
import clsx from 'clsx';
export const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={clsx('container', styles.container)}>Footer</div>
		</footer>
	);
};
