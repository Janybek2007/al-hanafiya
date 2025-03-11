'use client';
import { store } from '$/shared/redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import { SWProvider } from './SWProvider';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { ProgressProvider } from './ProgressProvider';

export const RootProvider: React.FC<React.PropsWithChildren> = ({
	children
}) => {
	return (
		<div className='wrapper'>
			<Provider store={store}>
				<NuqsAdapter>
					<ProgressProvider>
						<SWProvider />
						{children}
					</ProgressProvider>
				</NuqsAdapter>
			</Provider>
		</div>
	);
};
