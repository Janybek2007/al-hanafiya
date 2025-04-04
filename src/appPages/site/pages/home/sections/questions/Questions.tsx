'use client';
import { useAnsweredQuestionsQuery } from '$/entities/questions';
import { Button, Loading } from '$/shared/ui';
import clsx from 'clsx';
import styles from './Questions.module.scss';
import { paths } from '$/shared/routing';
import Link from 'next/link';
import React from 'react';

export const Questions = () => {
	const { data, isLoading, error } = useAnsweredQuestionsQuery({});

	const sortedQuestions = React.useMemo(() => {
		if (!data?.results) return [];
		return [...data.results.slice(0, 4)].sort(
			(a, b) =>
				new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
		);
	}, [data]);

	if (isLoading) return <Loading />;
	if (error) {
		return <div>Суроолорду жүктөөдө ката: {error?.toString()}</div>;
	}

	return (
		<section className={styles['questions']}>
			<div className={clsx('container', styles.container)}>
				<h2 className={styles.title}>Суроо-Жооп</h2>
				<div className={styles['content']}>
					{sortedQuestions
						.map(question => (
							<div key={`qa-${question.id}`} className={styles.qa_item}>
								<Link href={paths.questionsDetail(question.id)}>
									<h2>{question.content}</h2>
								</Link>
								<p>
									“Кардарлар дарыканалар же электрондук рецепт үчүн кошумча
									тиркеме жүктөбөйт. Менин оюмча, WhatsApp бул жерде эң ыңгайлуу
									чечим.”
								</p>
								<div className={styles.date}>25.05.2025</div>
							</div>
						))
						.slice(0, 4)}
				</div>
				<Button
					href={paths.questions}
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
