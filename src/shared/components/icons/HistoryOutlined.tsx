import React from 'react';

export const HistoryOutlined: React.FC<
	Partial<Record<'width' | 'height', number>>
> = ({ height = 24, width = 25 }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 ${height} ${width}`}
			fill='inherit'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M12.5639 6.89844H11.4366C11.3334 6.89844 11.2491 6.98282 11.2491 7.08594V13.5383C11.2491 13.5992 11.2772 13.6555 11.3264 13.6906L15.2006 16.5195C15.285 16.5805 15.4022 16.5641 15.4631 16.4797L16.1334 15.5656C16.1967 15.4789 16.178 15.3617 16.0936 15.3031L12.7514 12.8867V7.08594C12.7514 6.98282 12.667 6.89844 12.5639 6.89844ZM17.7155 8.66094L21.3905 9.5586C21.5076 9.58672 21.6225 9.49766 21.6225 9.37813L21.6412 5.59297C21.6412 5.43594 21.4608 5.34688 21.3389 5.44532L17.6451 8.33047C17.6172 8.35207 17.596 8.3811 17.5838 8.41424C17.5717 8.44738 17.5691 8.48327 17.5765 8.5178C17.5838 8.55232 17.6008 8.58407 17.6254 8.60939C17.6499 8.63471 17.6812 8.65258 17.7155 8.66094ZM21.6459 15.718L20.317 15.2609C20.2707 15.2451 20.22 15.2479 20.1757 15.269C20.1315 15.29 20.0972 15.3275 20.0803 15.3734C20.0358 15.493 19.9889 15.6102 19.9397 15.7273C19.5225 16.7141 18.9248 17.6023 18.1608 18.3641C17.4052 19.122 16.5097 19.7261 15.5241 20.143C14.5029 20.5747 13.4053 20.7963 12.2967 20.7945C11.1764 20.7945 10.0912 20.5766 9.06937 20.143C8.08368 19.7261 7.18823 19.122 6.43265 18.3641C5.67093 17.6023 5.07327 16.7141 4.65374 15.7273C4.22441 14.7057 4.00444 13.6082 4.00687 12.5C4.00687 11.3797 4.22484 10.2922 4.65843 9.27032C5.07562 8.2836 5.67327 7.39532 6.43734 6.6336C7.19292 5.87567 8.08837 5.27154 9.07406 4.85469C10.0912 4.4211 11.1787 4.20313 12.2991 4.20313C13.4194 4.20313 14.5045 4.4211 15.5264 4.85469C16.5121 5.27154 17.4075 5.87567 18.1631 6.6336C18.4022 6.875 18.6272 7.12578 18.8334 7.39063L20.235 6.29375C18.3905 3.93594 15.5194 2.41953 12.2944 2.42188C6.67874 2.42422 2.16937 6.98516 2.22562 12.6031C2.28187 18.1227 6.77015 22.5781 12.2991 22.5781C16.6467 22.5781 20.3498 19.8219 21.7608 15.9617C21.7959 15.8633 21.7444 15.7531 21.6459 15.718Z'
				fill='inherit'
			/>
		</svg>
	);
};
