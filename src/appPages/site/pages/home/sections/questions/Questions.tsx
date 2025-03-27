'use client';
import { useAnsweredQuestionsQuery } from '$/entities/questions';
import { Button, Loading } from '$/shared/ui';
import clsx from 'clsx';
import styles from './Questions.module.scss';
import { paths } from '$/shared/routing';
import Link from 'next/link';

export const Questions = () => {
	const { data, isLoading, error } = useAnsweredQuestionsQuery({});
	const questions = data?.results || [];
	if (isLoading) return <Loading />;

	if (error || !Array.isArray(questions)) {
		return <div>Ошибка загрузки вопросов: {error?.toString()}</div>;
	}

	return (
		<section className={styles['questions']}>
			<div className={clsx('container', styles.container)}>
				<h2 className={styles.title}>Суроо-Жооп</h2>
				<div className={styles['content']}>
					{questions
						.map(question => (
							<div key={`qa-${question.id}`} className={styles.qa_item}>
								<Link href={paths.questionsDetail(question.id)}>
									<h2>{question.content}</h2>
								</Link>
								<p>
									“Customers will not download an extra app for pharmacies or
									the e-prescription. In my opinion WhatsApp is the most natural
									solution here.”
								</p>
								<div className={styles.date}>25.05.2025</div>
							</div>
						))
						.slice(0, 4)}
				</div>
				<Button
					to={paths.questions}
					as='a'
					className={styles.more}
					linearGradient='v2'
					variant='solid'
				>
					Бардык суроолор
				</Button>
			</div>
		</section>
	);
};
