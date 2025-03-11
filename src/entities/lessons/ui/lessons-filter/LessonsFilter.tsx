'use client';
import clsx from 'clsx';
import styles from './LessonsFilter.module.scss';
import React from 'react';
import { ELessonFilters, filters } from '$/entities/lessons';
import { parseAsStringEnum, useQueryState } from 'nuqs';

export const LessonsFilter: React.FC = () => {
	const [filter, setFilter] = useQueryState(
		'lessons_filter',
		parseAsStringEnum<ELessonFilters>(
			Object.values(ELessonFilters)
		).withDefault(ELessonFilters.ALL)
	);
	const [anchor, setAnchor] = React.useState({ width: 0, x: 0 });
	const anchorsRef = React.useRef<Map<ELessonFilters, HTMLButtonElement>>(
		new Map()
	);

	React.useEffect(() => {
		if (filter && anchorsRef.current.has(filter)) {
			const anchorElement = anchorsRef.current.get(filter);
			if (anchorElement) {
				setAnchor({
					width: anchorElement.offsetWidth,
					x: anchorElement.offsetLeft
				});
			}
		} else {
		}
	}, [filter]);

	return (
		<section className={styles.filter_section}>
			<div className={clsx('container', styles['container'])}>
				<div className={styles['f_buttons']}>
					{filters.map(val => (
						<button
							ref={el => {
								if (el) anchorsRef.current.set(val.value, el);
							}}
							onClick={() => {
								setFilter(val.value);
							}}
							key={val.value}
						>
							{val.label}
						</button>
					))}
					<hr className={styles.line} />
					<hr
						className={styles.active_line}
						style={{
							width: anchor.width,
							transform: `translateX(${anchor.x}px)`
						}}
					/>
				</div>
			</div>
		</section>
	);
};
