'use client';
import React from 'react';
import Collapsible from '../collapsible/Collapsible';
import styles from './Accordion.module.scss';
import { AccodrionItemProps } from './accordion.types';
import clsx from 'clsx';
import Icon from '../icon/Icon';

const AccordionItem: React.FC<AccodrionItemProps> = ({
	content,
	icon,
	label,
	value,
	disabled = false,
	isLast,
	trailingContent,
	isActive,
	toggleItem
}) => {
	return (
		<div
			className={clsx(styles['accordion-item'], {
				[styles.isLast]: isLast,
				[styles.isActive]: isActive
			})}
		>
			<Collapsible
				value={isActive}
				trigger={
					<div
						className={clsx(styles['accordion-header'], {
							[styles.disabled]: disabled
						})}
						onClick={() => !disabled && toggleItem(value)}
					>
						<div
							className={clsx(styles['row'], { [styles.disabled]: disabled })}
						>
							{icon && (
								<span>
									<Icon
										{...(typeof icon == 'string'
											? {
													name: icon,
													size: 'lg',
													className: clsx(
														'flexCenter',
														{ [styles['rotate-180']]: isActive },
														styles['accordion-icon']
													)
											  }
											: {
													...icon,
													size: icon.size || 'lg',
													className: clsx(
														'flexCenter',
														{ [styles['rotate-180']]: isActive },
														styles['accordion-icon'],
														icon.className
													)
											  })}
									/>
								</span>
							)}
							<span className={styles.label}>{label}</span>
						</div>

						{trailingContent}
					</div>
				}
			>
				<div className={styles['accordion-content']}>{content}</div>
			</Collapsible>
		</div>
	);
};

export default AccordionItem;
