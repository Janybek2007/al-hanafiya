import React from 'react';
import { IconKeys } from '../icon/icon.types';
import styles from './EmtpyState.module.scss';
import Icon from '../icon/Icon';
import Link from 'next/link';
interface IProps {
	icon: IconKeys;
	title: string;
	description: string;
	link?: { label: string; href: string };
}

const EmptyState: React.FC<IProps> = React.memo(
	({ description, icon, title, link }) => {
		return (
			<div className={styles.emptyState}>
				<Icon name={icon} className={styles.emptyIcon} />
				<h2 className={styles.emptyTitle}>{title}</h2>
				<p className={styles.emptyMessage}>{description}</p>
				{link && (
					<Link href={link.href} className={styles.emptyButton}>
						{link.label}
					</Link>
				)}
			</div>
		);
	}
);
EmptyState.displayName = 'EmptyState';

export default EmptyState;
