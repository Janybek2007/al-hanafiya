'use client';
import { useSize } from '$/shared/utils';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import styles from './FooterEnd.module.scss';

export const FooterEnd: React.FC = () => {
	const size = useSize();
	const Component = ({ children }: React.PropsWithChildren) =>
		size.width <= 1024 ? (
			<div className={styles.first}>{children}</div>
		) : (
			<>{children}</>
		);
	return (
		<div className={styles.footer_end}>
			<div className={clsx(styles.container, 'container')}>
				<Component>
					<h5>© Калысбек Заманбеков 2025</h5>
					<h5>Диний билим берүү сайты</h5>
				</Component>
				<div className={styles.last}>
					<Image
						width={44}
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
