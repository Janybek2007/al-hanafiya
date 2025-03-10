'use client';
import React from 'react';
import Collapsible from '../collapsible/Collapsible';
import styles from './Accordion.module.scss';
import { AccordionItemProps } from './accordion.types';
import clsx from 'clsx';
import Icon from '../icon/Icon';

const AccordionItem: React.FC<AccordionItemProps> = ({
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
			data-accordion-item
		>
			<Collapsible
				value={isActive}
				trigger={
					<div
						className={clsx(styles['accordion-header'], {
							[styles.disabled]: disabled
						})}
						data-accordion-header
						onClick={() => !disabled && toggleItem(value)}
					>
						<div
							className={clsx(styles['row'], { [styles.disabled]: disabled })}
							data-accordion-row
						>
							{icon && (
								<span data-accordion-icon>
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
							<span data-accordion-label className={styles.label}>
								{label}
							</span>
						</div>

						{trailingContent}
					</div>
				}
			>
				<div data-accordion-content className={styles['accordion-content']}>
					{content}
				</div>
			</Collapsible>
		</div>
	);
};

export default AccordionItem;
