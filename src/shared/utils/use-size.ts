'use client';
import { useState, useEffect } from 'react';

interface Size {
	width: number;
	height: number;
}

type ElementType =
	| HTMLElement
	| Window
	| Document
	| { current?: HTMLElement | null }
	| string;

export const useSize = (element: ElementType = window): Size => {
	const [size, setSize] = useState<Size>({ width: 0, height: 0 });

	useEffect(() => {
		if (typeof document === 'undefined') return;
		let targetElement: HTMLElement | Window | null | undefined = null;
		if (typeof element === 'string') {
			targetElement = document.querySelector(element) as HTMLElement;
		} else if (element && 'current' in element) {
			targetElement = element.current;
		} else {
			targetElement = element as HTMLElement | Window;
		}

		if (!targetElement) return;

		const updateSize = () => {
			setSize({
				width:
					(targetElement as HTMLElement).clientWidth ||
					(targetElement as Window).innerWidth ||
					0,
				height:
					(targetElement as HTMLElement).clientHeight ||
					(targetElement as Window).innerHeight ||
					0
			});
		};

		updateSize();
		if (typeof window === 'undefined') return;
		window.addEventListener('resize', updateSize);

		return () => {
			window.removeEventListener('resize', updateSize);
		};
	}, [element]);

	return size;
};
