import Player from 'video.js/dist/types/player';
type VideoPlayerOptions = {
	controls: true;
	autoplay: false;
	preload: string;
	responsive: boolean;
	fluid: boolean;
	sources?: {
		src?: string;
		type?: string;
	}[];
};
export interface VideoPlayerProps {
	onReady?: (player: Player) => void;
	className?: string;
	options?: Partial<VideoPlayerOptions>;
}
