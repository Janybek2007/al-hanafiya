'use client';
import React from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './button.types';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
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
