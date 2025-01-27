import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import styles from './FooterEnd.module.scss';

export const FooterEnd: React.FC = () => {
	return (
		<div className={styles.footer_end}>
			<div className={clsx(styles.container, 'container')}>
				<h5>Диний билим берүү сайты</h5>
				<h5>Диний билим берүү сайты</h5>
				<div className={styles.col}>
					<Image
						width={45}
						height={44}
						src='/images/iant-logo.png'
						alt='IAnt Logo'
					/>
					<span>Тарабынан жасалды</span>
				</div>
			</div>
		</div>
	);
};
