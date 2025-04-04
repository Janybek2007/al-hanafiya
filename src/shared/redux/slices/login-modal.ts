import { createSlice } from '@reduxjs/toolkit';

const _loginModalSlice = createSlice({
	name: 'loginModal',
	initialState: {
		isOpen: false
	},
	reducers: {
		toggleModal(state) {
			state.isOpen = !state.isOpen;
		},
		closeLoginModal(state) {
			state.isOpen = false;
		}
	}
});


export const { toggleModal, closeLoginModal } = _loginModalSlice.actions;

export const loginModalSlice = _loginModalSlice.reducer;
