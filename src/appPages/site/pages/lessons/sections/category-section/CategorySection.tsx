import React from 'react';
import styles from './CategorySection.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';

interface IProps extends React.PropsWithChildren {
	title: string;
	link: { href: string; label: string };
	className?: string;
}

const CategorySection: React.FC<IProps> = props => {
	return (
		<section className={clsx(styles.category_section, props.className)}>
			<div className={clsx('container', styles['container'])}>
				<div className={styles['content']}>
					<div className={styles.header}>
						<h2>{props.title}</h2>
						<Link className='flexCenter' href={props.link.href}>
							<span>{props.link.label}</span>
							<GoArrowRight />
						</Link>
					</div>
					{props.children}
				</div>
			</div>
		</section>
	);
};

export default CategorySection;
