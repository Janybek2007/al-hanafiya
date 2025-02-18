'use client';
import React from 'react';
import styles from './Footer.module.scss';
import { FooterStart } from './ui/footer-start/FooterStart';
import { FooterEnd } from './ui/footer-end/FooterEnd';
import { usePathname } from 'next/navigation';
export const Footer: React.FC = () => {
	const pathname = usePathname();

	const isHidden = ['/articles/*', '/lessons/d/*', '/lessons/m/*'].some(
		pattern => pathname.startsWith(pattern.replace('*', ''))
	);
	return (
		!isHidden && (
			<footer className={styles.footer}>
				<div className={styles.container}>
					<FooterStart />
					<FooterEnd />
				</div>
			</footer>
		)
	);
};
