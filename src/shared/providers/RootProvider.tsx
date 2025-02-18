'use client';
import { store } from '$/shared/redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import { SWProvider } from './SWProvider';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

export const RootProvider: React.FC<React.PropsWithChildren> = ({
	children
}) => {
	return (
		<div className='wrapper'>
			<Provider store={store}>
				<NuqsAdapter>
					<ProgressBar
						memo={true}
						style=''
						height='4px'
						color='rgb(0, 131, 121)'
						options={{ showSpinner: true }}
						shallowRouting
					/>
					<SWProvider />
					{children}
				</NuqsAdapter>
			</Provider>
		</div>
	);
};
