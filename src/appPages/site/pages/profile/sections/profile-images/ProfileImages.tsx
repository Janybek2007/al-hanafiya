'use client';
import * as React from 'react';
import styles from './ProfileImages.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import { useDerived } from '$/shared/utils';

const ProfileImages: React.FC = () => {
	const [index, setIndex] = React.useState(0);
	const [direction, setDirection] = React.useState<'left' | 'right' | ''>('');

	const images = React.useMemo(
		() => Array.from({ length: 4 }, () => '/images/teacher.png'),
		[]
	);

	const { current, next, prev } = useDerived(
		() => ({
			current: images[index],
			next: images[index + 1] || null,
			prev: images[index - 1] || null
		}),
		[index, images]
	);

	const handleIndexChange = (newIndex: number) => {
		if (newIndex > index) {
			setDirection('right');
		} else if (newIndex < index) {
			setDirection('left');
		}
		setIndex(newIndex);
	};

	return (
		<div className={styles.profile_images}>
			<div className={clsx(styles.container, 'container')}>
				<div className={styles['images']}>
					{prev && (
						<figure className={clsx(styles['prev-image'])}>
							<Image src={prev} alt='Prev Image' width={823} height={600} />
						</figure>
					)}
					<figure
						key={String(index + 1).concat('-key')}
						className={clsx(styles['current-image'], styles[direction])}
					>
						<Image
							quality={75}
							priority
							src={current}
							alt='Current Image'
							width={823}
							height={600}
						/>
					</figure>
					{next && (
						<figure className={clsx(styles['next-image'])}>
							<Image src={next} alt='Next Image' width={823} height={600} />
						</figure>
					)}
				</div>
				<div className={styles['paginations']}>
					{images.map((_, i) => (
						<button
							onClick={() => handleIndexChange(i)}
							className={clsx(styles.dot, {
								[styles.active]: index === i
							})}
							key={`${i}-id`}
						></button>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProfileImages;
