'use client';
import { useSize } from '$/shared/utils';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { nav_items } from '../../constants';
import styles from './TabsBar.module.scss';

export const TabsBar: React.FC = () => {
	const { width } = useSize();
	const pathname = usePathname();

	if (width > 1024) return <></>;

	return (
		<div id='tabs-bar' className={styles.tabs}>
			<div className={`${styles['container']}`}>
				{nav_items.map(nav => {
					const isActive = pathname === nav.to;
					return (
						<Link
							key={nav.label}
							href={nav.to}
							className={clsx(styles.link, styles[nav.className || ''], {
								[styles.active]: isActive
							})}
						>
							<nav.icon />
							{isActive && (
								<motion.span
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.8 }}
									initial={{ opacity: 0, scale: 0.8 }}
								>
									{nav.label}
								</motion.span>
							)}
						</Link>
					);
				})}
			</div>
		</div>
	);
};
