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
				const isActive = pathname == nav.to;
				return (
					<Link
						key={nav.to}
						href={nav.to}
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
