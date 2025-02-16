'use client';
import React from 'react';
import styles from './ModuleItem.module.scss';
import { IModuleLesson } from '../../types';
import Link from 'next/link';
import clsx from 'clsx';
import { IoIosCheckmark } from 'react-icons/io';
import Icon from '$/shared/ui/icon/Icon';
import { secondsToTime } from '$/shared/utils';
import { parseAsBoolean, useQueryState } from 'nuqs';

interface IProps {
	lessons: IModuleLesson[];
	activeLesson: IModuleLesson | undefined;
	href: string;
}

export const ModuleItem: React.FC<IProps> = ({
	lessons,
	activeLesson,
	href
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
						href={`/lessons/m/${href}-${l.id}`}
						className={clsx(styles.lesson, {
							[styles.active]: isActive
						})}
						key={l.id}
					>
						<div className={styles['row1']}>
							{l.id === 'l1' ? (
								<div className={styles.checked}>
									<IoIosCheckmark />
								</div>
							) : (
								<div className={styles.unchecked} />
							)}
							<h4 className={styles.title}>{l.title}</h4>
						</div>
						<div className={styles.row}>
							<button onClick={() => setIsPlaying(p => !p)}>
								<Icon
									className='flexCenter'
									size='sm'
									name={isActive && isPlaying ? 'Pause' : 'Play'}
								/>
							</button>
							<span>{secondsToTime(l.time)}</span>
						</div>
					</Link>
				);
			})}
		</div>
	);
};
