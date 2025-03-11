'use client';
import { useRouter } from '@bprogress/next';
import clsx from 'clsx';
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
	const route = useRouter();
	return (
		<button
			className={clsx(
				styles.button,
				styles[variant],
				styles[`linearGradient_${linearGradient}`],
				styles[`bs-${borderColor}`],
				className
			)}
			{...props}
			onClick={e => {
				if (props.onClick) props.onClick(e);
				if (props.to) route.push(props.to);
			}}
		>
			{children}
		</button>
	);
};

export default Button;
