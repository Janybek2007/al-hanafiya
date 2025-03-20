'use client';
import React from 'react';
import styles from './q&a.module.scss';
import clsx from 'clsx';
import { Button } from '$/shared/ui';
import { useAnsweredQuestionsQuery } from '$/entities/questions';

export const QuestionAndAnwser = () => {
	const {} = useAnsweredQuestionsQuery({});

	return (
		<section className={styles['qa']}>
			<div className={clsx('container', styles.container)}>
				<h2 className={styles.title}>Суроо-Жооп</h2>
				<div className={styles['content']}>
					{Array.from({ length: 4 }).map((_, index) => (
						<div key={`qa-${index}`} className={styles.qa_item}>
							<h2>Как воспитать ребенка-мусульманина?</h2>
							<p>
								“Customers will not download an extra app for pharmacies or the
								e-prescription. In my opinion WhatsApp is the most natural
								solution here.”
							</p>
							<div className={styles.date}>25.05.2025</div>
						</div>
					))}
				</div>
				<Button className={styles.more} linearGradient='v2' variant='solid'>
					Бардык суроолор
				</Button>
			</div>
		</section>
	);
};
