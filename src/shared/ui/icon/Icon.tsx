/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Lucide from 'lucide-react';
import React from 'react';
import { IconProps } from './icon.types';

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
	const IconComponent = Lucide[name as IconProps['name']] as any;
	if (!IconComponent || name == 'Icon') {
		return null;
	}
	const size = props.size || 'md';
	const sizes = {
		xs: 16,
		sm: 16,
		md: 20,
		lg: 20,
		xl: 24,
		['2xl']: 24,
		['3xl']: 28
	};
	return (
		<IconComponent
			{...props}
			className={props.className}
			size={props.c_size || sizes[size]}
		/>
	);
};

export default Icon;
