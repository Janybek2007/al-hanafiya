'use client';
import * as React from 'react';
import styles from './ProfileImages.module.scss';
const ProfileImages: React.FC = () => {
	const [index, setIndex] = React.useState(0);
	const images = Array.from({ length: 4 }, () => '/images/teacher.png');
	
	return (
		<div className={styles.profile_images}>
			<div className={styles['images']}>

			</div>
			<div className={styles['pagination']}></div>
		</div>
	);
};

export default ProfileImages;
