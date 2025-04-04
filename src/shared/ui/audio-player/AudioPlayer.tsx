'use client';
import { useAppDispatch, useAppSelector } from '$/shared/redux/hooks';
import {
	setSrc,
	setCurrentTime,
	setDragging,
	setDuration,
	setLoading,
	setPlaying,
	setVolume,
	toggleMute
} from '$/shared/redux/slices/player';
import { secondsToTime } from '$/shared/utils';
import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import Icon from '../icon/Icon';
import styles from './AudioPlayer.module.scss';
import { useLessonProgress } from '$/features/save_progress'

interface AudioPlayerProps {
	audio: string;
	onNext?: () => void;
	onPrev?: () => void;
	actions?: ('rewind' | 'step-back' | 'step-forward' | 'fast-forward')[];
	onInstall?: VoidFunction;
}

export const AudioPlayer = ({
	audio,
	onNext,
	onPrev,
	actions = ['rewind', 'fast-forward'],
	onInstall,
}: AudioPlayerProps) => {
	const dispatch = useAppDispatch();
	const {
		isPlaying,
		currentTime,
		duration,
		volume,
		isMuted,
		isLoading,
		isDragging
	} = useAppSelector(state => state.player);
	const { progress: defaultTime } = useLessonProgress();

	const audioRef = useRef<HTMLAudioElement>(null);
	const progressBarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (audioRef.current) {
			dispatch(setLoading(true));
			dispatch(setSrc(audio));
			audioRef.current.src = audio;
			audioRef.current.load();
		}
	}, [audio, dispatch]);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = volume;
			audioRef.current.muted = isMuted;
			if (isPlaying) {
				audioRef.current
					.play()
					.catch(err => console.warn('Playback failed', err));
			} else {
				audioRef.current.pause();
			}
		}
	}, [isPlaying, volume, isMuted]);

	const handleLoadedMetadata = useCallback(() => {
		if (audioRef.current) {
			dispatch(setDuration(audioRef.current.duration));
			if (defaultTime && defaultTime > 0) {
				audioRef.current.currentTime = defaultTime;
				dispatch(setCurrentTime(defaultTime));
			}
		}
	}, [dispatch, defaultTime]);

	const handleTimeUpdate = useCallback(() => {
		if (audioRef.current) {
			dispatch(setCurrentTime(audioRef.current.currentTime));
		}
	}, [dispatch]);

	const handleEnded = useCallback(() => {
		dispatch(setPlaying(false));
		if (onNext) onNext();
	}, [dispatch, onNext]);

	const handleCanPlay = useCallback(() => {
		dispatch(setLoading(false));
	}, [dispatch]);

	const togglePlay = useCallback(() => {
		dispatch(setPlaying(!isPlaying));
	}, [dispatch, isPlaying]);

	const handleProgressClick = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			if (audioRef.current) {
				const rect = e.currentTarget.getBoundingClientRect();
				const percent = (e.clientX - rect.left) / rect.width;
				audioRef.current.currentTime = percent * duration;
			}
		},
		[duration]
	);

	const handleMouseDown = useCallback(() => {
		dispatch(setDragging(true));
	}, [dispatch]);

	const handleMouseMove = useCallback(
		(e: MouseEvent) => {
			if (isDragging && audioRef.current && progressBarRef.current) {
				const rect = progressBarRef.current.getBoundingClientRect();
				const percent = Math.min(
					Math.max((e.clientX - rect.left) / rect.width, 0),
					1
				);
				const newTime = percent * duration;
				audioRef.current.currentTime = newTime;
				dispatch(setCurrentTime(newTime));
			}
		},
		[dispatch, duration, isDragging]
	);

	const handleMouseUp = useCallback(() => {
		dispatch(setDragging(false));
	}, [dispatch]);

	useEffect(() => {
		if (isDragging) {
			window.addEventListener('mousemove', handleMouseMove);
			window.addEventListener('mouseup', handleMouseUp);
		}
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
		};
	}, [isDragging, handleMouseMove, handleMouseUp]);

	const handleForward = useCallback(() => {
		if (audioRef.current) audioRef.current.currentTime += 5;
	}, []);

	const handleRewind = useCallback(() => {
		if (audioRef.current) audioRef.current.currentTime -= 5;
	}, []);

	const handleVolumeChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			dispatch(setVolume(parseFloat(e.target.value)));
		},
		[dispatch]
	);

	const progress = useMemo(() => {
		return duration > 0 ? (currentTime / duration) * 100 : 0;
	}, [currentTime, duration]);

	return (
		<div className={styles.playerCtn}>
			<audio
				ref={audioRef}
				onLoadedMetadata={handleLoadedMetadata}
				onTimeUpdate={handleTimeUpdate}
				onEnded={handleEnded}
				onCanPlay={handleCanPlay}
			/>

			<div
				className={styles.progressBar}
				ref={progressBarRef}
				onClick={handleProgressClick}
			>
				<div className={styles.progress} style={{ width: `${progress}%` }}>
					<div className={styles.thumb} onMouseDown={handleMouseDown} />
				</div>
			</div>

			<div className={styles.controls}>
				<div className={styles.btnCtn}>
					{actions.includes('step-back') && onPrev && (
						<button className={styles.controlButton} onClick={onPrev}>
							<Icon className={styles.icon} name='StepBack' c_size={26} />
						</button>
					)}

					{actions.includes('rewind') && (
						<button className={styles.controlButton} onClick={handleRewind}>
							<Icon className={styles.icon} name='Rewind' c_size={26} />
						</button>
					)}

					<button
						className={styles.controlButton}
						onClick={!isLoading ? togglePlay : undefined}
					>
						{isLoading ? (
							<Icon
								className={`loaderAnimation ${styles.icon}`}
								name='Loader2'
								c_size={22}
							/>
						) : isPlaying ? (
							<Icon className={styles.icon} name='Pause' c_size={26} />
						) : (
							<Icon className={styles.icon} name='Play' c_size={26} />
						)}
					</button>

					{actions.includes('fast-forward') && (
						<button className={styles.controlButton} onClick={handleForward}>
							<Icon className={styles.icon} name='FastForward' c_size={26} />
						</button>
					)}

					{actions.includes('step-forward') && onNext && (
						<button className={styles.controlButton} onClick={onNext}>
							<Icon className={styles.icon} name='StepForward' c_size={26} />
						</button>
					)}
					<div className={styles.infosCtn}>
						<div className={styles.timer}>{secondsToTime(currentTime)}</div>
						<span>/</span>
						<div className={styles.duration}>{secondsToTime(duration)}</div>
					</div>
				</div>

				<div className={styles['end']}>
					<div className={styles.volumeControls}>
						<button
							className={styles.controlButton}
							onClick={() => dispatch(toggleMute())}
							aria-label={isMuted ? 'Unmute' : 'Mute'}
						>
							{isMuted ? (
								<Icon className={styles.icon} name='VolumeX' c_size={26} />
							) : (
								<Icon className={styles.icon} name='Volume2' c_size={26} />
							)}
						</button>
						<input
							type='range'
							min='0'
							max='1'
							step='0.1'
							value={volume}
							onChange={handleVolumeChange}
							className={styles.volumeSlider}
							aria-label='Volume control'
						/>
					</div>
					{onInstall && (
						<button onClick={onInstall} className={styles.install}>
							<Icon
								className={styles.icon}
								name='ArrowDownToLine'
								c_size={26}
							/>
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
