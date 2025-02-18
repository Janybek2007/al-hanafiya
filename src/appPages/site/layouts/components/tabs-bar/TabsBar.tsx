'use client';
import { useSize } from '$/shared/utils/use-size';
import React from 'react';
import styles from './TabsBar.module.scss';
import { nav_items } from '../../config';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { Svg } from '$/shared/ui/svg/Svg';
import { motion } from 'framer-motion';
export const TabsBar: React.FC = () => {
	const { width } = useSize();
	const pathname = usePathname();

	if (width > 1024) return <></>;

	return (
		<div className={styles.tabs}>
			<div className={`${styles['container']} container`}>
				{nav_items.map(nav => {
					const isActive = pathname === nav.to;
					return (
						<Link
							key={nav.label}
							href={nav.to}
							className={clsx(styles.link, {
								[styles.active]: isActive
							})}
						>
							<Svg src={nav.icon} width={32} height={32} />
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
