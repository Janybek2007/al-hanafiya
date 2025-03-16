'use client';
import { MyQuestion, useAccounts } from '$/entities/account';
import { paths } from '$/shared/routing';
import { EmptyState, Loading } from '$/shared/ui';
import React from 'react';
import styles from './MyQuestionsPage.module.scss';

const MyQuestionsPage: React.FC = () => {
	const { data, isLoading, error } = useAccounts().page;

	const my_questions = React.useMemo(() => data as MyQuestion, [data]);

	if (isLoading) return <Loading />;

	if (error) {
		return (
			<div className={styles.error}>
				Ошибка загрузки вопросов: {error.toString()}
			</div>
		);
	}

	if (
		!my_questions ||
		!Array.isArray(my_questions.results) ||
		my_questions?.count === 0
	) {
		return (
			<EmptyState
				icon='FileQuestion'
				title='Список вопросов пуст'
				description='Вы еще не задали ни одного вопроса. Задайте вопрос во время урока,
					чтобы увидеть его здесь!'
				link={{ href: paths['q&a'], label: 'Задать вопрос' }}
			/>
		);
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Мои вопросы</h1>
			<div className={styles.questionsList}>
				{my_questions.results.map(question => (
					<div key={question.id} className={styles.questionItem}>
						<div className={styles.itemHeader}>
							<span className={styles.questionText}>{question.content}</span>
							<span
								className={styles.status}
								data-status={question.is_answered ? 'answered' : 'pending'}
							>
								{question.is_answered ? 'Отвечен' : 'Ожидает ответа'}
							</span>
						</div>
						<div className={styles.itemDetails}>
							<p>
								<strong>Дата вопроса:</strong>{' '}
								{new Date(question.created_at).toLocaleDateString('ru-RU', {
									day: '2-digit',
									month: '2-digit',
									year: 'numeric',
									hour: '2-digit',
									minute: '2-digit'
								})}
							</p>
							{question.is_answered && question.answer && (
								<>
									<p>
										<strong>Ответ:</strong> {question.answer.content}
									</p>
									<p>
										<strong>Дата ответа:</strong>{' '}
										{new Date(question.answer.created_at).toLocaleDateString(
											'ru-RU',
											{
												day: '2-digit',
												month: '2-digit',
												year: 'numeric',
												hour: '2-digit',
												minute: '2-digit'
											}
										)}
									</p>
								</>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyQuestionsPage;
