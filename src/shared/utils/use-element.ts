'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react';

interface UseElementOptions {
	depends?: any[];
}

type ElementRect = {
	top: number;
	left: number;
	bottom: number;
	right: number;
	width: number;
	height: number;
	x: number;
	y: number;
};

type ElementDimensions = {
	offsetWidth: number;
	offsetHeight: number;
	scrollWidth: number;
	scrollHeight: number;
	clientWidth: number;
	clientHeight: number;
	rect: ElementRect;
};

export const useElement = <T extends HTMLElement = HTMLElement>(
	props?: Partial<UseElementOptions>
): [React.RefObject<T | null>, ElementDimensions] => {
	const elementRef = useRef<T | null>(null);
	const [dimensions, setDimensions] = useState<ElementDimensions>({
		offsetWidth: 0,
		offsetHeight: 0,
		scrollWidth: 0,
		scrollHeight: 0,
		clientWidth: 0,
		clientHeight: 0,
		rect: {
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			width: 0,
			height: 0,
			x: 0,
			y: 0
		}
	});

	const { depends = [] } = props || {};

	useEffect(() => {
		const updateDimensions = () => {
			if (elementRef.current) {
				const {
					offsetWidth,
					offsetHeight,
					scrollWidth,
					scrollHeight,
					clientWidth,
					clientHeight
				} = elementRef.current;

				const rect = elementRef.current.getBoundingClientRect();

				setDimensions({
					offsetWidth,
					offsetHeight,
					scrollWidth,
					scrollHeight,
					clientWidth,
					clientHeight,
					rect
				});
			}
		};

		const resizeObserver = new ResizeObserver(updateDimensions);

		if (elementRef.current) {
			resizeObserver.observe(elementRef.current);
		}

		return () => {
			if (elementRef.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				resizeObserver.unobserve(elementRef.current);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [elementRef, ...depends]);

	return [elementRef, dimensions];
};

