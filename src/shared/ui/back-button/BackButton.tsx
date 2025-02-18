'use client';
import styles from './BackButton.module.scss';
import Button from '$/shared/ui/button/Button';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next-nprogress-bar';

export const BackButton: React.FC = () => {
	const route = useRouter();
	return (
		<Button
			onClick={() => route.back()}
			className={styles.back_button}
			borderColor='gray'
			variant='outline'
		>
			<Image
				width={16}
				height={16}
				src='/icon/arrow-left.svg'
				alt='ArrowLeft Icon'
			/>
			<span>Назад</span>
		</Button>
	);
};
