import { ArticleItem, articles } from '$/entities/articles';
import { Pagination, SectionTitle, Breadcrumb } from '$/shared/ui';
import React from 'react';
import scss from './ArticlesPage.module.scss';
import Filtiration from './sections/filtration/Filtiration';

const ArticlesPage: React.FC = () => {
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
					<Pagination totalPages={10} />
				</section>
			</div>
		</main>
	);
};

export default ArticlesPage;
