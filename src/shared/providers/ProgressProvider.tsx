'use client';

import React from 'react';
import { AppProgressProvider } from '@bprogress/next';
import { useHiddenPages } from '../utils/use-hidden-pages';

export const ProgressProvider: React.FC<React.PropsWithChildren> = ({
	children
}) => {
	const isHidden = useHiddenPages();
	return (
		<AppProgressProvider
			memo={true}
			height='4px'
			color={isHidden ? 'rgb(0, 131, 121)' : 'rgb(255,255,255)'}
			options={{ showSpinner: false }}
			shallowRouting
		>
			{children}
		</AppProgressProvider>
	);
};
