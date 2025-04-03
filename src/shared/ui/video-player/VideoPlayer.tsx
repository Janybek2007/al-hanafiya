'use client';
import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import 'video.js/dist/video-js.css';
import 'videojs-youtube';
import { VideoPlayerProps } from './video-player.types';
import { useAppDispatch, useAppSelector } from '$/shared/redux/hooks';
import clsx from 'clsx';
import {
	setPlaying,
	setCurrentTime,
	setDuration,
	setVolume,
	setLoading
} from '$/shared/redux/slices/player';

const VideoPlayer: React.FC<VideoPlayerProps> = ({
	options: _,
	className,
	onReady
}) => {
	const dispatch = useAppDispatch();
	const playerRef = useRef<Player | null>(null);
	const videoRef = useRef<HTMLDivElement>(null);

	const { isPlaying, volume, isMuted, src } = useAppSelector(
		state => state.player
	);

	useEffect(() => {
		if (
			!playerRef.current &&
			videoRef.current &&
			typeof document !== 'undefined'
		) {
			const videoElement = document.createElement('video-js');
			videoElement.classList.add('vjs-big-play-centered');
			videoRef.current.appendChild(videoElement);

			const player = (playerRef.current = videojs(
				videoElement,
				{
					controls: _?.controls ?? true,
					autoplay: _?.autoplay ?? false,
					preload: _?.preload ?? 'auto',
					responsive: _?.responsive ?? true,
					fluid: _?.fluid ?? true,
					sources: [{ src, type: 'video/mp4' }]
				},
				() => {
					dispatch(setLoading(false));
					onReady?.(player);
				}
			));

			player.on('play', () => dispatch(setPlaying(true)));
			player.on('pause', () => dispatch(setPlaying(false)));
			player.on('timeupdate', () =>
				dispatch(setCurrentTime(player.currentTime()!))
			);
			player.on('durationchange', () =>
				dispatch(setDuration(player.duration()!))
			);
			player.on('volumechange', () => dispatch(setVolume(player.volume()!)));
		}
	}, [dispatch, onReady, _, src]);

	useEffect(() => {
		const player = playerRef.current;
		if (player) {
			if (isPlaying) {
				player.play();
			} else {
				player.pause();
			}
		}
	}, [isPlaying]);

	useEffect(() => {
		const player = playerRef.current;
		if (player) {
			player.volume(volume);
			player.muted(isMuted);
		}
	}, [volume, isMuted]);

	useEffect(() => {
		return () => {
			const player = playerRef.current;
			if (player && !player.isDisposed()) {
				player.dispose();
				playerRef.current = null;
			}
		};
	}, []);

	return (
		<div data-vjs-player className={clsx('video-player', className)}>
			<div ref={videoRef} className={'video-player'} />
		</div>
	);
};

export default VideoPlayer;
