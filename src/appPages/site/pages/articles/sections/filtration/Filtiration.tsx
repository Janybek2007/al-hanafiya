'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './Filtiration.module.scss';

const tags = [
	{ id: 1, label: 'Все' },
	{ id: 2, label: 'Никх' },
	{ id: 3, label: 'Акида' },
	{ id: 4, label: 'Дуа' },
	{ id: 5, label: 'Намаз' },
	{ id: 6, label: 'Рамазан' },
	{ id: 7, label: 'Үй-бүлө' },
	{ id: 8, label: 'Талак' }
];

interface IProps {
	tags: {
		label: string;
		value: string;
	};
	setTags: React.Dispatch<
		React.SetStateAction<{
			label: string;
			value: string;
		}>
	>;
}

const Filtration: React.FC<IProps> = () => {
	const [activeTag, setActiveTag] = useState('Все');
	const [scrollPosition, setScrollPosition] = useState(0);
	const scrollRef = useRef<HTMLDivElement>(null);

	const handleScroll = React.useCallback(() => {
		if (scrollRef.current) {
			const scrollWidth =
				scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
			const currentScroll = scrollRef.current.scrollLeft;
			const position = (currentScroll / scrollWidth) * 100;
			setScrollPosition(position);
		}
	}, []);

	useEffect(() => {
		const scrollElement = scrollRef.current;
		if (scrollElement) {
			scrollElement.addEventListener('scroll', handleScroll);
			return () => scrollElement.removeEventListener('scroll', handleScroll);
		}
	}, [handleScroll]);

	return (
		<div className={styles.filtration}>
			<div className={styles.tags_container}>
				<div className={styles.tags_wrapper} ref={scrollRef}>
					<div className={styles.tags_scroll}>
						{tags.map(tag => (
							<button
								key={tag.id}
								className={`${styles.tag} ${
									activeTag === tag.label ? styles.active : ''
								}`}
								onClick={() => setActiveTag(tag.label)}
							>
								{tag.label}
							</button>
						))}
					</div>
				</div>
				<div className={styles.progress_line}>
					<div
						className={styles.progress_inner}
						style={{ width: `${scrollPosition}%` }}
					></div>
				</div>
			</div>
		</div>
	);
};

export default Filtration;
