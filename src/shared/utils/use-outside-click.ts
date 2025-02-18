'use client';
import React from 'react';

export function useOutsideClick(
	callback: VoidFunction,
	_ref?: React.RefObject<HTMLElement | null>
) {
	const $ref = React.useRef<HTMLElement>(null);
	const ref = _ref !== undefined ? _ref : $ref;
	React.useEffect(() => {
		function handleClick(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback();
			}
		}

		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, [callback, ref]);
	return $ref
}
