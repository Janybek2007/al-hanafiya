import React from 'react';

export const Prev: React.FC<Partial<Record<'width' | 'height', number>>> = ({
	height = 25,
	width = 14
}) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 ${height} ${width}`}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
		>
			<defs />
			<path
				id='Vector'
				d='M14 2.81L14 0.26C14 0.04 13.77 -0.08 13.62 0.05L0.36 11.67C0.24 11.76 0.15 11.89 0.09 12.03C0.03 12.18 0 12.34 0 12.5C0 12.66 0.03 12.81 0.09 12.96C0.15 13.1 0.24 13.23 0.36 13.32L13.62 24.94C13.77 25.07 14 24.95 14 24.73L14 22.18C14 22.02 13.93 21.86 13.82 21.77L3.23 12.5L13.82 3.22C13.93 3.13 14 2.97 14 2.81Z'
				fill='#FFFFFF'
				fillOpacity='1.000000'
				fillRule='nonzero'
			/>
		</svg>
	);
};
