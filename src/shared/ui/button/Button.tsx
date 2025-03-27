'use client';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './button.types';

const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'solid',
	className,
	borderColor = 'white',
	linearGradient = 'v1',
	...props
}) => {
	const Component = props.as === 'a' ? Link : 'button';

	return (
		<Component
			className={clsx(
				styles.button,
				styles[variant],
				styles[`linearGradient_${linearGradient}`],
				styles[`bs-${borderColor}`],
				className
			)}
			{...props}
			href={props.as === 'a' ? props.to || '' : '#'}
			onClick={(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
				if (props.onClick) props.onClick(e);
			}}
		>
			{children}
		</Component>
	);
};

export default Button;
