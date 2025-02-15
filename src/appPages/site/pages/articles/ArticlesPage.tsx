'use client';
import Breadcrumb from '$/shared/ui/breadcrumb/Breadcrumb';
import React, { useState } from 'react';
import Filtiration from './sections/filtration/Filtiration';
import SectionTitle from '$/shared/ui/section-title/SectionTitle';
import scss from './ArticlesPage.module.scss';
import { ArticleItem } from '$/entities/articles';
import { articles } from '$/entities/articles/constants/articles.constants';
import Pagination from './sections/pagination/Pagination';

export const ArticlesPage: React.FC = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;
	const totalPages = Math.ceil(articles.length / itemsPerPage);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		const startIndex = (page - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
	};

	return (
		<main>
			<div className={`container ${scss.container}`}>
				<Breadcrumb
					items={[
						{ label: 'Башкы бет', href: '/' },
						{ label: 'Макалалар', href: '#this' }
					]}
				/>

				<Filtiration />

				<SectionTitle className={scss.title} title={'Бардык макалалар'} />

				<section className={scss.article_head}>
					<ArticleItem
						className={scss.card_article}
						variant='2'
						item={{
							...articles[0],
							image_src: '/images/article-card.png',
							category: 'Викх'
						}}
					/>
					<div className={scss.articlesList}>
						{articles.map(article => (
							<ArticleItem
								className={scss.card_articleList}
								type='list'
								variant='2'
								key={article.id}
								item={{
									title: 'Можно ли мусульманам изучать психологию?',
									date: '25.01.2025',
									views: 15,
									id: 'article_l_1',
									description:
										'Последние исследования в области изучения активности в интернете приводят данные, что их аудиторией являются  люди всех возрастов',
									image_src: '/images/article-list.png',
									category: 'Викх'
								}}
							/>
						))}
					</div>
				</section>

				<section>
					<div className={scss['articles']}>
						{articles.map(art => (
							<ArticleItem
								variant='2'
								type='list'
								key={art.id}
								item={{ ...art, category: 'Викх' }}
							/>
						))}
					</div>
				</section>

				<SectionTitle className={scss.title} title={'Популярдуу макалалар'} />

				<section>
					<div className={scss['popularArticle']}>
						{articles.map(art => (
							<ArticleItem
								variant='1'
								type='card'
								key={art.id}
								item={{ ...art, category: 'Викх' }}
							/>
						))}
					</div>
				</section>

				<section className={scss.pagination_section}>
					<Pagination totalPages={10} onPageChange={handlePageChange} />
				</section>
			</div>
		</main>
	);
};
