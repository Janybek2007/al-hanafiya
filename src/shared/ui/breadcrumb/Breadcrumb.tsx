import React from 'react';
import { BreadcrumbProps } from './breadcrumb.types';
import styles from './Breadcrumb.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
	return (
		<div className={styles.breadcrumb_container}>
			{items.map((item, i) => {
				const isLast = items.length === i + 1;
				return (
					<React.Fragment key={item.label + item.href}>
						<Link className={clsx({ [styles.last]: isLast })} href={item.href}>
							{item.label}
						</Link>
						{!isLast && <span>/</span>}
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default Breadcrumb;
