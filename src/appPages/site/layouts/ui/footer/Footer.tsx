import React from 'react';
import styles from './Footer.module.scss';
import { FooterStart } from './ui/footer-start/FooterStart';
import { FooterEnd } from './ui/footer-end/FooterEnd';
export const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<FooterStart />
				<FooterEnd />
			</div>
		</footer>
	);
};
