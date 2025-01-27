import React from 'react';
import styles from './q&a.module.scss';
import clsx from 'clsx';
import Button from '$/shared/ui/button/Button';
export const QuestionAndAnwser = () => {
	return (
		<section className={styles['qa']}>
			<div className={clsx('container', styles.container)}>
				<h2 className={styles.title}>Суроо-Жооп</h2>
				<div className={styles['content']}></div>
				<Button variant='solid'>Бардык суроолор</Button>
			</div>
		</section>
	);
};
