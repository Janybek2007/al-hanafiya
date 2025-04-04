import React from 'react';
import { BaseSectionProps } from './base-section.types';
import clsx from 'clsx';
import styles from './BaseSection.module.scss';
import SectionTitle from '$/shared/ui/section-title/SectionTitle';
import Button from '$/shared/ui/button/Button';

const BaseSection: React.FC<BaseSectionProps> = ({
	children,
	title,
	button,
	className
}) => {
	return (
		<section className={styles.base_section}>
			<div className={clsx('container', styles.container)}>
				<SectionTitle title={title} type='row' />
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
