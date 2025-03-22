'use client';
import { useAnsweredQuestionsQuery } from '$/entities/questions';
import { Button } from '$/shared/ui';
import clsx from 'clsx';
import styles from './Questions.module.scss';

export const Questions = () => {
	const {} = useAnsweredQuestionsQuery({});

	return (
		<section className={styles['questions']}>
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
