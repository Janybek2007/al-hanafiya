'use client';
import { useRouter } from '@bprogress/next';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import styles from './BackButton.module.scss';

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
