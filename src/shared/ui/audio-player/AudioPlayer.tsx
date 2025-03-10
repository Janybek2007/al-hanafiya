'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './AudioPlayer.module.scss';
import { secondsToTime } from '$/shared/utils';
import Icon from '../icon/Icon';
import { parseAsBoolean, useQueryState } from 'nuqs';

interface Audio {
	file: string;
	name: string;
	duration: number;
}

interface AudioPlayerProps {
	audio: Audio;
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
	onInstall
}: AudioPlayerProps) => {
	const [isPlaying, setIsPlaying] = useQueryState(
		'playing',
		parseAsBoolean.withDefault(false)
	);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(1);
	const [isMuted, setIsMuted] = useState(false);
	const audioRef = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.src = audio.file;
			audioRef.current.load();
		}
	}, [audio]);

	useEffect(() => {
		if (audioRef.current)
			if (isPlaying) {
				audioRef.current
					.play()
					.catch(err => console.warn('Autoplay failed', err));
			} else {
				audioRef.current.pause();
			}
	}, [audio, isPlaying]);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = volume;
			audioRef.current.muted = volume === 0;
			setIsMuted(volume === 0);
		}
	}, [volume]);

	const handleLoadedMetadata = React.useCallback(() => {
		if (audioRef.current) {
			setDuration(audioRef.current.duration);
		}
	}, []);

	const handleTimeUpdate = React.useCallback(() => {
		if (audioRef.current) {
			setCurrentTime(audioRef.current.currentTime);
		}
	}, []);

	const handleEnded = React.useCallback(() => {
		setIsPlaying(false);
		if (onNext) onNext();
	}, [onNext, setIsPlaying]);

	const togglePlay = React.useCallback(() => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	}, [isPlaying, setIsPlaying]);

	const handleProgressClick = React.useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			if (audioRef.current) {
				const rect = e.currentTarget.getBoundingClientRect();
				const percent = (e.clientX - rect.left) / rect.width;
				audioRef.current.currentTime = percent * duration;
			}
		},
		[duration]
	);

	const handleForward = React.useCallback(() => {
		if (audioRef.current) audioRef.current.currentTime += 5;
	}, []);

	const handleRewind = React.useCallback(() => {
		if (audioRef.current) audioRef.current.currentTime -= 5;
	}, []);

	const handleVolumeChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const newVolume = parseFloat(e.target.value);
			setVolume(newVolume);
			if (audioRef.current) {
				audioRef.current.muted = newVolume === 0;
			}
		},
		[]
	);

	const toggleMute = React.useCallback(() => {
		if (audioRef.current) {
			if (isMuted) {
				setVolume(1);
				audioRef.current.muted = false;
			} else {
				setVolume(0);
				audioRef.current.muted = true;
			}
			setIsMuted(!isMuted);
		}
	}, [isMuted]);

	const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

	return (
		<div className={styles.playerCtn}>
			<audio
				ref={audioRef}
				onLoadedMetadata={handleLoadedMetadata}
				onTimeUpdate={handleTimeUpdate}
				onEnded={handleEnded}
			/>

			<div className={styles.progressBar} onClick={handleProgressClick}>
				<div className={styles.progress} style={{ width: `${progress}%` }} />
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

					<button className={styles.controlButton} onClick={togglePlay}>
						{isPlaying ? (
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
							onClick={toggleMute}
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
