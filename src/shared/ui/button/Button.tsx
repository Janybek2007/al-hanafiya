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
	href,
	as,
	...props
}) => {
	const Component = as === 'a' ? Link : 'button';
	const _href = as === 'a' ? href || "#" : '#';
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
			href={_href}
			onClick={(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
				if (props.onClick) props.onClick(e);
			}}
		>
			{children}
		</Component>
	);
};

export default Button;
