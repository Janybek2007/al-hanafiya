import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlayerState {
	isPlaying: boolean;
	currentTime: number;
	duration: number;
	volume: number;
	isMuted: boolean;
	isLoading: boolean;
	isDragging: boolean;
	src: string;
}

const initialState: PlayerState = {
	isPlaying: false,
	currentTime: 0,
	duration: 0,
	volume: 1,
	isMuted: false,
	isLoading: true,
	isDragging: false,
	src: ''
};

const _playerSlice = createSlice({
	name: 'player',
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
		setSrc: (state, action: PayloadAction<string>) => {
			state.src = action.payload;
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
	setSrc,
	resetPlayer
} = _playerSlice.actions;

export const playerSlice = _playerSlice.reducer;
