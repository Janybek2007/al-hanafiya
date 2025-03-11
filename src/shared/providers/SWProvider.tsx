'use client';

import React from 'react';

export const SWProvider: React.FC = () => {
	React.useEffect(() => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/service-worker.js');
		}
	}, []);
	return <></>;
};
