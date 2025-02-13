'use client';
import React from 'react';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import 'video.js/dist/video-js.css';
import { VideoPlayerProps } from './video-player.types';
import { useDerived } from '$/shared/utils';
import clsx from 'clsx';

const VideoPlayer: React.FC<VideoPlayerProps> = ({
	options: _,
	className,
	onReady
}) => {
	const options = useDerived(
		{
			controls: _?.controls || true,
			autoplay: _?.autoplay || false,
			preload: _?.preload || 'auto',
			responsive: _?.responsive || true,
			fluid: _?.fluid || true,
			sources: _?.sources
		},
		[_]
	);
	const videoRef = React.useRef<HTMLDivElement>(null);
	const playerRef = React.useRef<Player>(null);

	React.useEffect(() => {
		if (!playerRef.current && videoRef.current) {
			const videoElement = document.createElement('video-js');

			videoElement.classList.add('vjs-big-play-centered');
			videoRef.current.appendChild(videoElement);

			const player = (playerRef.current = videojs(videoElement, options, () => {
				videojs.log('player is ready');
				onReady?.(player);
			}));
		} else {
			const player = playerRef.current;
			if (player) {
				player.autoplay(options?.autoplay);
				player.src(options?.sources);
			}
		}
	}, [onReady, options, videoRef]);

	React.useEffect(() => {
		const player = playerRef.current;

		return () => {
			if (player && !player.isDisposed()) {
				player.dispose();
				playerRef.current = null;
			}
		};
	}, [playerRef]);
	return (
		<div data-vjs-player className={clsx('video-player', className)}>
			<div ref={videoRef} className={'video-player'} />
		</div>
	);
};

export default VideoPlayer;
