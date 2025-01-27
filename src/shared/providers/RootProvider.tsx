'use client';
import { SWProvider } from '$/shared/providers';
import { store } from '$/shared/redux/store';
import React from 'react';
import { Provider } from 'react-redux';

export const RootProvider: React.FC<React.PropsWithChildren> = ({
	children
}) => {
	return (
		<Provider store={store}>
			<SWProvider>{children}</SWProvider>
		</Provider>
	);
};
