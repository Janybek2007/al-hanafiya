import React from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './button.types';
import clsx from 'clsx';
const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'solid',
	className,
	borderColor = 'white',
	linearGradient = 'v1',
	...props
}) => {
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
		>
			{children}
		</button>
	);
};

export default Button;
