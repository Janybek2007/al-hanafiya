'use client';

import { useElement } from '$/shared/utils';
import clsx from 'clsx';
import styles from './Collapsible.module.scss';
import React from 'react';
import { CollapsibleProps } from './collapsible.types';

const Collapsible: React.FC<CollapsibleProps> = ({
	disabled,
	className,
	children,
	trigger,
	transition,
	value
}) => {
	const [contentRef, { offsetHeight: contentHeight }] = useElement({
		depends: [value]
	});

	const firstChild = React.Children.toArray(children)[0];
	return (
		<div
			suppressHydrationWarning
			className={clsx(className, styles.collapsible)}
		>
			{trigger && trigger}

			{!disabled && (
				<>
					<div
						style={{
							height: value && !disabled ? `${contentHeight}px` : `0px`,
							transition: transition || 'height 0.3s ease'
						}}
						className={clsx(styles.collapsible_content, 'collabsible_content')}
					>
						{React.isValidElement(firstChild)
							? React.cloneElement(firstChild, {
									ref: contentRef
							  } as React.HTMLAttributes<HTMLElement>)
							: children}
					</div>
				</>
			)}
		</div>
	);
};

export default Collapsible;
