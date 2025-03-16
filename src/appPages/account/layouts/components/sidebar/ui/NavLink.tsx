'use client';
import React from 'react';
import styles from './NavLink.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import { IconKeys } from '$/shared/ui/icon/icon.types';
import { Icon } from '$/shared/ui';
import clsx from 'clsx';

interface IProps {
	label: string;
	href: string;
	icon: string;
}

export const NavLink: React.FC<IProps> = ({ href, icon, label }) => {
	const { push: navigate } = useRouter();
	const pathname = usePathname();
	const isActive = React.useMemo(() => pathname === href, [pathname, href]);
	return (
		<li
			onClick={() => navigate(href)}
			className={clsx(styles.li, isActive ? styles.active : '')}
		>
			<Icon name={icon as IconKeys} className={styles.icon} />
			{label}
		</li>
	);
};
