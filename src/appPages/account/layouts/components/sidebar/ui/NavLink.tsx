'use client';
import React from 'react';
import styles from './NavLink.module.scss';
import { usePathname } from 'next/navigation';
import { IconKeys } from '$/shared/ui/icon/icon.types';
import { Icon } from '$/shared/ui';
import clsx from 'clsx';
import Link from 'next/link'

interface IProps {
	label: string;
	href: string;
	icon: string;
}

export const NavLink: React.FC<IProps> = ({ href, icon, label }) => {
	const pathname = usePathname();
	const isActive = React.useMemo(() => pathname === href, [pathname, href]);
	return (
		<li className={clsx(styles.li, isActive ? styles.active : '')}>
			<Link href={href}>
				<Icon name={icon as IconKeys} className={styles.icon} />
				{label}
			</Link>
		</li>
	);
};
