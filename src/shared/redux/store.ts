import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import { audioPlayerSlice } from './slices/audio-player';

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		audioPlayer: audioPlayerSlice
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
