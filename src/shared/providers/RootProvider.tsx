'use client';
import { store } from '$/shared/redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import { SWProvider } from './SWProvider';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { ProgressProvider } from './ProgressProvider';
import { NotificationsProvider } from './Notifications';

export const RootProvider: React.FC<React.PropsWithChildren> = ({
	children
}) => {
	return (
		<Provider store={store}>
			<NuqsAdapter>
				<ProgressProvider>
					<SWProvider>
						<NotificationsProvider>{children}</NotificationsProvider>
					</SWProvider>
				</ProgressProvider>
			</NuqsAdapter>
		</Provider>
	);
};
