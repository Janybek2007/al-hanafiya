'use client';
import { Breadcrumb, SectionTitle, Pagination } from '$/shared/ui';
import Image from 'next/image';
import { useState } from 'react';
import scss from './QuestionsAnswerPage.module.scss';
import AskQuestionModal from './sections/AskQuestionModal/AskQuestionModal';
import QuestionsSections from './sections/q&aLists/QuestionsSections';

const QuestionsAnswerPage: React.FC = () => {
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
					</div>
					<QuestionsSections />
					<Pagination totalPages={10} />
				</div>

				<AskQuestionModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
				/>
			</div>
		</main>
	);
};

export default QuestionsAnswerPage;
