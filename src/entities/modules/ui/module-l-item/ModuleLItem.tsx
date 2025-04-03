'use client';
import React from 'react';
import { ModuleItem } from '../../types';
import styles from './ModuleLItem.module.scss';
import { secondsToTime } from '$/shared/utils';
import { IoIosCheckmark } from 'react-icons/io';
import { IoPlayOutline } from 'react-icons/io5';
import Link from 'next/link';
import { useLessonsQuery } from '$/entities/lessons/redux';
import { paths } from '$/shared/routing';

interface IProps {
	module: ModuleItem;
}

export const ModuleLItem: React.FC<IProps> = ({ module: m }) => {
	const { data } = useLessonsQuery({ module: m.id });
	return (
		<div className={styles.module_l_item}>
			<div className={styles['top']}>
				<Link
					href={paths.lessons.with_module(
						m.slug,
						String(data?.results[0].slug)
					)}
					className={styles['row']}
				>
					{false ? (
						<div className={styles.checked}>
							<IoIosCheckmark />
						</div>
					) : (
						<div className={styles.unchecked}>
							<IoPlayOutline />
						</div>
					)}
					<h4 className={styles.title}>{m.name}</h4>
				</Link>
				{/* <p className={styles.desc}>{m.description}</p> */}
			</div>
			<div className={styles['lessons']}>
				{data &&
					data.results.map(l => (
						<div className={styles.lesson} key={l.id}>
							<Link
								href={paths.lessons.with_module(m.slug, l.slug)}
								className={styles['row']}
							>
								{false ? (
									<div className={styles.checked}>
										<IoIosCheckmark />
									</div>
								) : (
									<div className={styles.unchecked}>
										<IoPlayOutline />
									</div>
								)}
								<h4 className={styles.title}>Урок {l.order + 1}</h4>
							</Link>
							<span className={styles.time}>{secondsToTime(4000)}</span>
						</div>
					))}
			</div>
		</div>
	);
};
