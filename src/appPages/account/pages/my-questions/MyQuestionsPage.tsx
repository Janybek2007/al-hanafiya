'use client';
import { MyQuestion, useAccounts } from '$/entities/account';
import { paths } from '$/shared/routing';
import { Accordion, EmptyState, Loading } from '$/shared/ui';
import React, { useState } from 'react';
import styles from './MyQuestionsPage.module.scss';
import { formatDate } from '$/shared/utils';
import { AccountHeader } from '../../layouts/components';

const MyQuestionsPage: React.FC = () => {
	const { data, isLoading, error } = useAccounts().page;
	const [filter, setFilter] = useState<'all' | 'answered' | 'pending'>('all');

	const my_questions = React.useMemo(() => data as MyQuestion, [data]);

	const filteredQuestions = React.useMemo(() => {
		if (!my_questions?.results) return [];
		if (filter === 'all') return my_questions.results;
		return my_questions.results.filter(q =>
			filter === 'answered' ? q.is_answered : !q.is_answered
		);
	}, [my_questions, filter]);

	if (isLoading) return <Loading />;

	if (error) {
		return (
			<div className={styles.error}>
				Суроолорду жүктөөдө ката кетти: {error.toString()}
			</div>
		);
	}

	if (!my_questions || !Array.isArray(my_questions.results)) {
		return (
			<EmptyState
				icon='FileQuestion'
				title='Суроолор тизмеси бош'
				description='Сиз азырынча эч кандай суроо берген жоксуз. Сабак учурунда суроо бериңиз, аны бул жерден көрүү үчүн!'
				link={{ href: paths['questions'], label: 'Суроо берүү' }}
			/>
		);
	}

	const accordionItems = filteredQuestions.map(question => ({
		label: question.content,
		value: question.id.toString(),
		trailingContent: (
			<span
				className={styles.status}
				data-status={question.is_answered ? 'answered' : 'pending'}
			>
				{question.is_answered ? 'Жооп берилди' : 'Жооп күтүүдө'}
			</span>
		),
		content: (
			<div className={styles.itemDetails}>
				<p className={styles.detailItem}>
					<strong>Сиздин сурооңуз:</strong>
					<span>{question.content}</span>
				</p>
				<div className={styles.detailItem}>
					<strong>Жооп:</strong>
					{question.is_answered && question.answer ? (
						<p
							className={styles.answer}
							dangerouslySetInnerHTML={{
								__html: `${question.answer.content.slice(
									0,
									300
								)}...<a href="${paths.questionsDetail(
									question.id
								)}" target="_blank" class="${styles.more}">Толугураак</a>`
							}}
						/>
					) : (
						<span>Жооп жок</span>
					)}
				</div>
				<p className={styles.detailItem}>
					<strong>Жооп берилген күн:</strong>
					<span>
						{question.is_answered && question.answer
							? formatDate(question.answer.created_at).DDMMYYYY_HHMM
							: '—'}
					</span>
				</p>
			</div>
		)
	}));

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<AccountHeader
					title='Менин суроолорум'
					subtitle='Сурооңузга жооп алгандан кийин, сиз жеке кабинетиңизде жана көрсөтүлгөн Telegram аркылуу билдирме аласыз.'
				/>
				<div className={styles.filters}>
					<button
						className={`${styles.filterBtn} ${
							filter === 'all' ? styles.active : ''
						}`}
						onClick={() => setFilter('all')}
					>
						Баары ({my_questions.results.length})
					</button>
					<button
						className={`${styles.filterBtn} ${
							filter === 'answered' ? styles.active : ''
						}`}
						onClick={() => setFilter('answered')}
					>
						Жооп берилген (
						{my_questions.results.filter(q => q.is_answered).length})
					</button>
					<button
						className={`${styles.filterBtn} ${
							filter === 'pending' ? styles.active : ''
						}`}
						onClick={() => setFilter('pending')}
					>
						Жооп күтүүдө (
						{my_questions.results.filter(q => !q.is_answered).length})
					</button>
				</div>

				{filteredQuestions.length === 0 ? (
					<EmptyState
						icon='FileQuestion'
						title='Суроолор табылган жок'
						description='Тандалган чыпкага туура келген суроолор жок'
					/>
				) : (
					<Accordion
						type='single'
						items={accordionItems}
						className={styles.questionsList}
					/>
				)}
			</div>
		</div>
	);
};

export default MyQuestionsPage;
