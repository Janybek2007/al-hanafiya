'use client';
import { nav_items } from '$/appPages/site/layouts/config';
import Icon from '$/shared/ui/icon/Icon';
import { useOutsideClick } from '$/shared/utils';
import { useSize } from '$/shared/utils/use-size';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './HeaderNav.module.scss';

const HeaderNav: React.FC = () => {
	const pathname = usePathname();
	const { width } = useSize();
	const [isOpen, setIsOpen] = React.useState(false);
	const navRef = useOutsideClick(() => setIsOpen(false));

	const Component = (
		<>
			{nav_items.map(nav => {
				const isActive = pathname === nav.to;
				return (
					<Link
						onClick={() => setIsOpen(false)}
						key={nav.label}
						href={nav.to}
						className={clsx(styles.link, {
							[styles.active]: isActive
						})}
					>
						{nav.label}
					</Link>
				);
			})}
		</>
	);

	return (
		<div className={styles.header_nav}>
			<button onClick={() => setIsOpen(p => !p)} className={styles.menu_button}>
				<Icon c_size={30} className='flexCenter' name='Menu' />
			</button>
			{width > 1024 ? (
				<nav>{Component}</nav>
			) : (
				<AnimatePresence initial={false}>
					{isOpen && (
						<motion.nav
							key={'mobile-nav'}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							initial={{ opacity: 0, scale: 0.8 }}
							ref={navRef}
							style={{ transformOrigin: 'top left' }}
						>
							{Component}
						</motion.nav>
					)}
				</AnimatePresence>
			)}
		</div>
	);
};

export default HeaderNav;
