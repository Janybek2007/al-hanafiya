'use client';
import React from 'react';
import styles from './QADetailPage.module.scss';
import { BackButton, EmptyState, Loading, SectionTitle } from '$/shared/ui';
import { QuestionList } from '$/widgets/question-list';
import clsx from 'clsx';
import QAContent from './sections/q&a-content/QAContent';
import { useParams } from 'next/navigation';
import {
	useQuestionByIdQuery,
	useQuestionByIdSimilarQuery
} from '$/entities/questions';
import { paths } from '$/shared/routing';

const QADetailPage: React.FC = () => {
	const { id } = useParams();
	const {
		data: question,
		isLoading,
		error
	} = useQuestionByIdQuery({ id: String(id) });
	const { data: similar, isLoading: similarLoading } =
		useQuestionByIdSimilarQuery({ id: String(id) });

	if (isLoading || similarLoading) return <Loading />;

	if (error) {
		return (
			<div className={styles.error}>
				Ошибка загрузки вопросов: {error.toString()}
			</div>
		);
	}

	if (!question || !similar || !Array.isArray(similar)) {
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
		<main>
			<div>
				<section className={'back_section'}>
					<div className='container'>
						<BackButton />
					</div>
				</section>
				<section className={styles.qa_content}>
					<div className={'container'}>
						<QAContent question={question} />
					</div>
				</section>
				<section>
					<div className={clsx('container', styles.container)}>
						<SectionTitle title='Окшош суроолор' />
						{error ? (
							<EmptyState
								icon='AlertTriangle'
								title='Ката кетти'
								description='Маалыматтарды жүктөөдө бир нерсе туура эмес болду. Сураныч, кайра аракет кылыңыз.'
							/>
						) : !similar || similar?.length === 0 ? (
							<EmptyState
								icon='FileQuestion'
								title='Окшош суроолор жок'
								description='Окшош суроолор табылган жок. Издөө шарттарын өзгөртүп көрүңүз.'
							/>
						) : (
							<QuestionList list={similar} />
						)}
					</div>
				</section>
			</div>
		</main>
	);
};

export default QADetailPage;
