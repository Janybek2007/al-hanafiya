import React from 'react';
import { HomeSectionProps } from './home-section.types';
import clsx from 'clsx';
import styles from './HomeSection.module.scss';
import { SectionTitle, Button } from '$/shared/ui';

const HomeSection: React.FC<HomeSectionProps> = ({
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

export default HomeSection;
