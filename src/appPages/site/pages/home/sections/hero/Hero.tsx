import React from 'react';
import styles from './Hero.module.scss';
import clsx from 'clsx';
import Button from '$/shared/ui/button/Button';

export const Hero: React.FC = () => {
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
							<hr />
							<p>
								Lorem ipsum dolor sit amet consectetur. Semper sed pharetra nec
								auctor duis dictumst pretium. Non arcu vitae ac eget. Volutpat
								at id quisque dictum odio tristique scelerisque ridiculus eros.
							</p>
						</div>
					</div>
					<div className={styles['actions']}>
						<Button variant='solid'>Кенерирээк</Button>
						<Button variant='outline'>Суроо берүү</Button>
					</div>
				</div>
			</div>
		</section>
	);
};
