import { useAppSelector } from '$/shared/redux/hooks';
import React, { useEffect } from 'react';
import { useLessonProgress } from '../context';

export const SaveProgressEffect: React.FC = React.memo(() => {
	const { currentTime, duration } = useAppSelector(s => s.player);
	const { save } = useLessonProgress();

	useEffect(() => {
		if (currentTime === duration) return;

		const interval = setInterval(() => {
			if (currentTime > 0 && currentTime !== duration) {
				save(currentTime);
			}
		}, 10000);

		return () => clearInterval(interval);
	}, [currentTime, duration, save]);

	useEffect(() => {
		if (currentTime === duration) return;

		const handleVisibilityChange = () => {
			if (document.hidden && currentTime > 0 && currentTime !== duration) {
				save(currentTime);
			}
		};

		const handleBeforeUnload = () => {
			if (currentTime > 0 && currentTime !== duration) {
				save(currentTime);
			}
		};

		document.addEventListener('visibilitychange', handleVisibilityChange);
		window.addEventListener('beforeunload', handleBeforeUnload);

		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange);
			window.removeEventListener('beforeunload', handleBeforeUnload);
		};
	}, [currentTime, duration, save]);

	return null;
});

SaveProgressEffect.displayName = 'SaveProgressEffect';
