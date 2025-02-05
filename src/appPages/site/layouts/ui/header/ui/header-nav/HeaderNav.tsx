'use client';
import React from 'react';
import { nav_items } from '../../config';
import Link from 'next/link';
import styles from './HeaderNav.module.scss';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const HeaderNav: React.FC = () => {
	const pathname = usePathname();
	return (
		<nav className={styles.header_nav}>
			{nav_items.map(nav => {
				const href =
					typeof nav.to === 'function' ? nav.to('kalyc-zamanbekov') : nav.to;
				const isActive = pathname === href;
				return (
					<Link
						key={nav.label}
						href={href}
						className={clsx(styles.link, {
							[styles.active]: isActive
						})}
					>
						{nav.label}
					</Link>
				);
			})}
		</nav>
	);
};

export default HeaderNav;
