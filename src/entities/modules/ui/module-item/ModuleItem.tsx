'use client';
import React from 'react';
import styles from './ModuleItem.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import { IoIosCheckmark } from 'react-icons/io';
import { Icon } from '$/shared/ui';
import { secondsToTime } from '$/shared/utils';
import { parseAsBoolean, useQueryState } from 'nuqs';
import { LessonItem } from '$/entities/lessons';
import { paths } from '$/shared/routing';

interface IProps {
	lessons: LessonItem[];
	activeLesson: LessonItem | undefined;
	moduleSlug: string;
}

export const ModuleItem: React.FC<IProps> = ({
	lessons,
	activeLesson,
	moduleSlug
}) => {
	const [isPlaying, setIsPlaying] = useQueryState(
		'playing',
		parseAsBoolean.withDefault(false)
	);

	return (
		<div className={styles.lessons}>
			{lessons.map(l => {
				const isActive = l.id === activeLesson?.id;
				return (
					<Link
						href={paths.lessons.with_module(moduleSlug, l.slug)}
						className={clsx(styles.lesson, {
							[styles.active]: isActive
						})}
						key={l.id}
					>
						<div className={styles['row1']}>
							{false ? (
								<div className={styles.checked}>
									<IoIosCheckmark />
								</div>
							) : (
								<div className={styles.unchecked} />
							)}
							<h4 className={styles.title}>{l.slug}</h4>
						</div>
						<div className={styles.row}>
							<button onClick={() => setIsPlaying(p => !p)}>
								<Icon
									className='flexCenter'
									size='sm'
									name={isActive && isPlaying ? 'Pause' : 'Play'}
								/>
							</button>
							<span>{secondsToTime(500)}</span>
						</div>
					</Link>
				);
			})}
		</div>
	);
};
