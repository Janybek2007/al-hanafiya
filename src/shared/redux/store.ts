import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import { playerSlice } from './slices/player';
import { loginModalSlice } from './slices/login-modal';

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		player: playerSlice,
		loginModal: loginModalSlice
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
