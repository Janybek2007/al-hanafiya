'use client';
import * as React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProfileImages.module.scss';

const ProfileImages: React.FC = () => {
	const [currentIndex, setCurrentIndex] = React.useState(0);
	const [direction, setDirection] = React.useState(0);

	const images = React.useMemo(
		() => [
			'/images/teacher.png',
			'/images/lesson1.png',
			'/images/teacher.png',
			'/images/lesson1.png',
			'/images/teacher.png'
		],
		[]
	);

	const slideVariants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 1200 : -1200,
			opacity: 0,
			scale: 0.8
		}),
		center: {
			x: 0,
			opacity: 1,
			scale: 1,
			zIndex: 2
		},
		exit: (direction: number) => ({
			x: direction < 0 ? 1200 : -1200,
			opacity: 0,
			scale: 0.8,
			zIndex: 1
		})
	};

	const handleNext = () => {
		setDirection(1);
		setCurrentIndex(prev => (prev + 1) % images.length);
	};

	const handlePrev = () => {
		setDirection(-1);
		setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
	};

	React.useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.slider}>
			<div className={styles.sliderWrapper}>
				<AnimatePresence initial={false} custom={direction}>
					<motion.div
						key={currentIndex}
						className={styles.slide}
						custom={direction}
						variants={slideVariants}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{
							x: { type: 'spring', stiffness: 300, damping: 30 },
							opacity: { duration: 0.5 },
							scale: { duration: 0.5 }
						}}
					>
						<Image
							src={images[currentIndex]}
							alt={`Slide ${currentIndex}`}
							width={1200}
							height={600}
							className={styles.slideImage}
							priority
						/>
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Навигация баскычтары */}
			<button
				className={`${styles.navButton} ${styles.prev}`}
				onClick={handlePrev}
			>
				‹
			</button>
			<button
				className={`${styles.navButton} ${styles.next}`}
				onClick={handleNext}
			>
				›
			</button>
		</div>
	);
};

export default ProfileImages;
