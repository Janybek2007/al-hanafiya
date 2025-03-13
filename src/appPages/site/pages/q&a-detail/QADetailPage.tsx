import React from 'react';
import styles from './QADetailPage.module.scss';
import { BackButton, SectionTitle } from '$/shared/ui';
import { QuestionList } from '$/widgets/question-list';
import { questions } from '$/shared/constants/questions';
import clsx from 'clsx';
import QAContent from './sections/q&a-content/QAContent'

const QuestionsAnsDetail: React.FC = () => {
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
						<QAContent />{' '}
					</div>
				</section>
				<section>
					<div className={clsx('container', styles.container)}>
						<SectionTitle title='Окшош суроолор' />
						<QuestionList questions={questions} />
					</div>
				</section>
			</div>
		</main>
	);
};

export default QuestionsAnsDetail;
