import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AudioPlayerState {
	isPlaying: boolean;
	currentTime: number;
	duration: number;
	volume: number;
	isMuted: boolean;
	isLoading: boolean;
	isDragging: boolean;
	audioSrc: string;
}

const initialState: AudioPlayerState = {
	isPlaying: false,
	currentTime: 0,
	duration: 0,
	volume: 1,
	isMuted: false,
	isLoading: true,
	isDragging: false,
	audioSrc: ''
};

const _audioPlayerSlice = createSlice({
	name: 'audioPlayer',
	initialState,
	reducers: {
		setPlaying: (state, action: PayloadAction<boolean>) => {
			state.isPlaying = action.payload;
		},
		setCurrentTime: (state, action: PayloadAction<number>) => {
			state.currentTime = action.payload;
		},
		setDuration: (state, action: PayloadAction<number>) => {
			state.duration = action.payload;
		},
		setVolume: (state, action: PayloadAction<number>) => {
			state.volume = action.payload;
			state.isMuted = action.payload === 0;
		},
		toggleMute: state => {
			state.isMuted = !state.isMuted;
			state.volume = !state.isMuted ? 1 : 0;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setDragging: (state, action: PayloadAction<boolean>) => {
			state.isDragging = action.payload;
		},
		setAudioSrc: (state, action: PayloadAction<string>) => {
			state.audioSrc = action.payload;
		},
		resetPlayer: () => initialState
	}
});

export const {
	setPlaying,
	setCurrentTime,
	setDuration,
	setVolume,
	toggleMute,
	setLoading,
	setDragging,
	setAudioSrc,
	resetPlayer
} = _audioPlayerSlice.actions;

export const audioPlayerSlice = _audioPlayerSlice.reducer;
