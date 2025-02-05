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
	{ id: 8, label: 'Талак' },

	{ id: 9, label: 'Дуа' },
	{ id: 10, label: 'Намаз' },
	{ id: 11, label: 'Рамазан' },
	{ id: 12, label: 'Үй-бүлө' },
	{ id: 13, label: 'Талак' },
	{ id: 14, label: 'Намаз' },
	{ id: 15, label: 'Рамазан' },
	{ id: 16, label: 'Үй-бүлө' },
	{ id: 17, label: 'Талак' },

	{ id: 18, label: 'Дуа' },
	{ id: 20, label: 'Намаз' },
	{ id: 110, label: 'Рамазан' },
	{ id: 120, label: 'Үй-бүлө' },
	{ id: 130, label: 'Талак' }
];

const Filtration: React.FC = () => {
	const [activeTag, setActiveTag] = useState('Все');
	const [scrollPosition, setScrollPosition] = useState(0);
	const scrollRef = useRef<HTMLDivElement>(null);

	const handleScroll = () => {
		if (scrollRef.current) {
			const scrollWidth =
				scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
			const currentScroll = scrollRef.current.scrollLeft;
			const position = (currentScroll / scrollWidth) * 100;
			setScrollPosition(position);
		}
	};

	useEffect(() => {
		const scrollElement = scrollRef.current;
		if (scrollElement) {
			scrollElement.addEventListener('scroll', handleScroll);
			return () => scrollElement.removeEventListener('scroll', handleScroll);
		}
	}, []);

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
