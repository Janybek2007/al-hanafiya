'use client';
import { Button } from '$/shared/ui';
import { useSize } from '$/shared/utils';
import clsx from 'clsx';
import React from 'react';
import styles from './Hero.module.scss';
import { paths } from '$/shared/routing'

export const Hero: React.FC = () => {
	const size = useSize('#hero-p');
	return (
		<section
			className={styles.hero}
			style={{ backgroundImage: "url('/images/hero.png')" }}
		>
			<div className={clsx('container', styles.container)}>
				<div className={styles['content']}>
					<h3 className={styles.title}>Устаз</h3>
					<div className={styles.about_ustaz}>
						<h1 className={styles.name}>Калыс Заманбеков</h1>
						<div className={styles.description}>
							<hr suppressHydrationWarning style={{ height: size.height }} />
							<p id='hero-p'>
								Lorem ipsum dolor sit amet consectetur. Semper sed pharetra nec
								auctor duis dictumst pretium. Non arcu vitae ac eget. Volutpat
								at id quisque dictum odio tristique scelerisque ridiculus eros.
							</p>
						</div>
					</div>
					<div className={styles['actions']}>
						<Button as='a' href={paths.teacherProfile} variant='solid'>
							Кенерирээк
						</Button>
						<Button as='a' href={paths.questions} variant='outline'>
							Суроо берүү
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};
