import React from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './button-types';
import clsx from 'clsx';
const Button: React.FC<ButtonProps> = ({ children, variant = 'solid' }) => {
	return (
		<button className={clsx(styles.button, styles[variant])}>{children}</button>
	);
};

export default Button;
