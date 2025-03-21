'use client';
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

export const useDerived = <T>(
	initialState: T | (() => T),
	dependencies: React.DependencyList = []
): [T, Dispatch<SetStateAction<T>>] => {
	const [state, setState] = useState<T>(initialState);

	useEffect(() => {
		if (typeof initialState === 'function') {
			setState((initialState as () => T)());
		} else {
			setState(initialState);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [...dependencies]);

	return [state, setState];
};
