import React from 'react';
import { BaseSectionProps } from './base-section.types';
import clsx from 'clsx';
import styles from './BaseSection.module.scss';
import Button from '../button/Button';
import SectionTitle from '../section-title/SectionTitle';

const BaseSection: React.FC<BaseSectionProps> = ({
	children,
	title,
	button,
	className
}) => {
	return (
		<section className={styles.base_section}>
			<div className={clsx('container', styles.container)}>
				<SectionTitle title={title} type='flex' />
				<div className={clsx(styles['content'], className)}>{children}</div>
				{button &&
					(typeof button == 'string' ? (
						<Button variant='solid'>{button}</Button>
					) : (
						<Button {...button} />
					))}
			</div>
		</section>
	);
};

export default BaseSection;
