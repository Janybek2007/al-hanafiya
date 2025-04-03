'use client';
import React from 'react';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import 'video.js/dist/video-js.css';
import 'videojs-youtube';
import { VideoPlayerProps } from './video-player.types';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '$/shared/redux/hooks';
import {
	setPlaying,
	setCurrentTime,
	setDuration,
	setLoading,
	setSrc
} from '$/shared/redux/slices/player';

const VideoPlayer: React.FC<VideoPlayerProps> = ({
	options: _,
	className,
	onReady
}) => {
	const dispatch = useAppDispatch();
	const { isPlaying, isLoading, src } = useAppSelector(state => state.player);

	const videoRef = React.useRef<HTMLDivElement>(null);
	const playerRef = React.useRef<Player>(null);

	const options = React.useMemo(
		() => ({
			controls: _?.controls || true,
			autoplay: _?.autoplay || false,
			preload: _?.preload || 'auto',
			responsive: _?.responsive || true,
			fluid: _?.fluid || true,
			source: _?.source
		}),
		[_]
	);

	React.useEffect(() => {
		if (!playerRef.current && videoRef.current) {
			const videoElement = document.createElement('video-js');
			videoElement.classList.add('vjs-big-play-centered');
			videoRef.current.appendChild(videoElement);

			const player = (playerRef.current = videojs(videoElement, options, () => {
				dispatch(setLoading(false));
				onReady?.(player);
			}));

			player.on('play', () => dispatch(setPlaying(true)));
			player.on('pause', () => dispatch(setPlaying(false)));
			player.on('timeupdate', () => {
				if (player.currentTime())
					dispatch(setCurrentTime(player.currentTime()!));
			});
			player.on('loadedmetadata', () => {
				if (player.duration()) dispatch(setDuration(player.duration()!));
			});
			player.on('loadeddata', () => dispatch(setLoading(false)));
		} else if (playerRef.current) {
			const player = playerRef.current;
			player.autoplay(options.autoplay);
			if (options.source !== src) {
				dispatch(setSrc(String(options.source?.src)));
				player.src(options.source);
			}
		}
	}, [options, onReady, dispatch, src]);

	React.useEffect(() => {
		const player = playerRef.current;
		if (player && !isLoading) {
			if (isPlaying) player.play();
			else player.pause();
		}
	}, [isPlaying, isLoading]);

	React.useEffect(() => {
		const player = playerRef.current;
		return () => {
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
