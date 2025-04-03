'use client';
import { LessonItem } from '$/entities/lessons';
import { useAppDispatch, useAppSelector } from '$/shared/redux/hooks';
import { setPlaying } from '$/shared/redux/slices/player';
import { Icon } from '$/shared/ui';
import { secondsToTime } from '$/shared/utils';
import clsx from 'clsx';
import { parseAsString, useQueryState } from 'nuqs';
import React from 'react';
import { IoIosCheckmark } from 'react-icons/io';
import styles from './ModuleItem.module.scss';

interface IProps {
	lessons: LessonItem[];
}

export const ModuleItem: React.FC<IProps> = ({ lessons }) => {
	const { playing, loading } = useAppSelector(s => ({
		playing: s.player.isPlaying,
		loading: s.player.isLoading
	}));
	const dispath = useAppDispatch();
	const [lessonSlug, setLessonSlug] = useQueryState(
		'slug',
		parseAsString.withDefault(lessons?.[0]?.slug)
	);

	return (
		<div className={styles.lessons}>
			{lessons.map(l => {
				const isActive = l.slug === lessonSlug;
				return (
					<div
						onClick={() => setLessonSlug(l.slug)}
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
							<h4 className={styles.title}>Урок {l.order + 1}</h4>
						</div>
						<div className={styles.row}>
							<button onClick={() => !loading && dispath(setPlaying(!playing))}>
								<Icon
									className={clsx(
										loading && isActive && `loaderAnimation`,
										styles.icon,
										'flexCenter'
									)}
									size='sm'
									name={
										isActive && loading
											? 'Loader2'
											: isActive && playing
											? 'Pause'
											: 'Play'
									}
								/>
							</button>
							<span>{secondsToTime(500)}</span>
						</div>
					</div>
				);
			})}
		</div>
	);
};
