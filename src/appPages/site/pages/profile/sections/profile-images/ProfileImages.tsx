'use client';
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import styles from './ProfileImages.module.scss';

const ProfileImages: React.FC = () => {
	const images = React.useMemo(
		() => Array.from({ length: 4 }, () => '/images/teacher.png'),
		[]
	);

	return (
		<div className={styles.profile_images}>
			<div className={`${styles['container']} container`}>
				<Swiper
					modules={[Navigation]}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					className={styles.swiper}
				>
					{images.map((src, index) => (
						<SwiperSlide key={index} className={styles.slide}>
							<Image
								src={src}
								alt={`Profile ${index + 1}`}
								width={823}
								height={600}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default ProfileImages;
