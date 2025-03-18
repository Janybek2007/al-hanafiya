import React from 'react';

export const Next: React.FC<Partial<Record<'width' | 'height', number>>> = ({
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
				d='M12.66 11.66L0.35 0.05C0.32 0.02 0.28 0 0.24 0C0.2 -0.01 0.15 0 0.12 0.02C0.08 0.04 0.05 0.08 0.03 0.12C0.01 0.16 0 0.21 0 0.26L0 2.81C0 2.97 0.06 3.13 0.16 3.22L9.99 12.49L0.16 21.77C0.06 21.86 0 22.02 0 22.18L0 24.73C0 24.95 0.2 25.07 0.35 24.94L12.66 13.33C12.76 13.23 12.85 13.1 12.91 12.96C12.96 12.81 13 12.66 13 12.49C13 12.33 12.96 12.18 12.91 12.03C12.85 11.89 12.76 11.76 12.66 11.66Z'
				fill='#FFFFFF'
				fillOpacity='1.000000'
				fillRule='nonzero'
			/>
		</svg>
	);
};
