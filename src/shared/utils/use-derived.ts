'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

export const useDerived = <T>(
	initialState: T | (() => T),
	dependencies: any[] = []
): T => {
	const [state, setState] = useState<T>(initialState);

	useEffect(() => {
		if (typeof initialState === 'function') {
			setState((initialState as () => T)());
		} else {
			setState(initialState);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [...dependencies, initialState]);

	return state;
};
