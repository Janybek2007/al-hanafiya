'use client';
import styles from './BackButton.module.scss';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next-nprogress-bar';
import clsx from 'clsx';

export const BackButton: React.FC = () => {
	const route = useRouter();
	return (
		<button
			onClick={() => route.back()}
			className={clsx('flexCenter', styles.back_button)}
		>
			<Image
				width={16}
				height={16}
				src='/icon/arrow-left.svg'
				alt='ArrowLeft Icon'
			/>
			<span>Артка</span>
		</button>
	);
};
