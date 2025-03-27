'use client';
import React from 'react';
import styles from './ModuleItem.module.scss';
import clsx from 'clsx';
import { IoIosCheckmark } from 'react-icons/io';
import { Icon } from '$/shared/ui';
import { secondsToTime } from '$/shared/utils';
import { useQueryState } from 'nuqs';
import { LessonItem } from '$/entities/lessons';
import { useAppDispatch, useAppSelector } from '$/shared/redux/hooks';
import { setPlaying } from '$/shared/redux/slices/audio-player';

interface IProps {
	lessons: LessonItem[];
}

export const ModuleItem: React.FC<IProps> = ({ lessons }) => {
	const { playing, loading } = useAppSelector(s => ({
		playing: s.audioPlayer.isPlaying,
		loading: s.audioPlayer.isLoading
	}));
	const dispath = useAppDispatch();
	const [lessonSlug, setLessonSlug] = useQueryState('slug');

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
							<h4 className={styles.title}>{l.slug}</h4>
						</div>
						<div className={styles.row}>
							<button onClick={() => loading && dispath(setPlaying(!playing))}>
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
