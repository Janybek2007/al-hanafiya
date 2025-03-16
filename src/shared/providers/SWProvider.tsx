'use client';

import React from 'react';

export const SWProvider: React.FC = () => {
	React.useEffect(() => {
		if (!('serviceWorker' in navigator)) {
			throw new Error('Service Worker не поддерживается в браузере');
		}

		const registration = navigator.serviceWorker.register('/service-worker.js');
	}, []);
	return <></>;
};
