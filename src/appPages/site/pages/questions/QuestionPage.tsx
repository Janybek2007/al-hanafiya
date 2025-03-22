'use client';
import {
	Breadcrumb,
	SectionTitle,
	Pagination,
	Button,
	Loading,
	EmptyState
} from '$/shared/ui';
import Image from 'next/image';
import { useState } from 'react';
import scss from './QuestionPage.module.scss';
import AskQuestion from './sections/AskQuestion/AskQuestion';
import QuestionList from '$/widgets/question-list/QuestionList';
import { useGuestionsQuery } from '$/entities/questions';

const QuestionPage: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { data, isLoading, error } = useGuestionsQuery({});
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

						<div className={scss.submit_btn_parent}>
							<Button
								className={scss.ask_btn}
								onClick={() => setIsModalOpen(true)}
							>
								Суроо берүү
							</Button>
						</div>
						<AskQuestion
							isOpen={isModalOpen}
							onClose={() => setIsModalOpen(false)}
						/>
					</div>
					{isLoading ? (
						<Loading />
					) : error ? (
						<EmptyState
							icon='AlertTriangle'
							title='Произошла ошибка'
							description='Что-то пошло не так при загрузке данных. Пожалуйста, попробуйте ещё раз.'
						/>
					) : !data || data?.results.length === 0 ? (
						<EmptyState
							icon='FileQuestion'
							title='Данные не найдены'
							description='Не удалось найти подходящие данные. Попробуйте изменить критерии поиска.'
						/>
					) : (
						<QuestionList list={data.results} />
					)}
					<Pagination totalPages={10} />
				</div>
			</div>
		</main>
	);
};

export default QuestionPage;
