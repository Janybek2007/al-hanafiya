'use client';
import { Breadcrumb, SectionTitle, Pagination } from '$/shared/ui';
import Image from 'next/image';
import { useState } from 'react';
import scss from './QAPage.module.scss';
import AskQuestion from './sections/AskQuestion/AskQuestion';
import QuestionList from '$/widgets/question-list/QuestionList'
import { questions } from '$/shared/constants/questions'

const QuestionsAndAnswerPage: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<main>
			<div className='container'>
				<Breadcrumb
					items={[
						{ label: 'Башкы бет', href: '/' },
						{ label: 'Суроо-жооп', href: '#this' }
					]}
				/>

				<SectionTitle className={scss.title} title={'Суроолор'} />
				<div className={scss.content}>
					<h2>Суроолорунузга устаз Калыс Заманбеков жооп берет</h2>
					<div className={scss.ask_box}>
						<Image
							src={'/images/Q&Apage/Star2.svg'}
							alt='Star1'
							width={50}
							height={50}
							className={scss.star_one}
						/>
						<Image
							src={'/images/Q&Apage/Star1.svg'}
							alt='Star1'
							width={80}
							height={80}
							className={scss.star_two}
						/>
						<Image
							src={'/images/Q&Apage/Star3.svg'}
							alt='Star1'
							width={80}
							height={80}
							className={scss.star_three}
						/>

						<h3>Сизде суроо барбы?</h3>
						<button
							className={scss.ask_btn}
							onClick={() => setIsModalOpen(true)}
						>
							Суроо берүү
						</button>
						<AskQuestion
							isOpen={isModalOpen}
							onClose={() => setIsModalOpen(false)}
						/>
					</div>
					<QuestionList questions={questions} />
					<Pagination totalPages={10} />
				</div>
			</div>
		</main>
	);
};

export default QuestionsAndAnswerPage;
