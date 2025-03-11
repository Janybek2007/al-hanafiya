'use client';
import { ArticleItem, articles } from '$/entities/articles';
import { Pagination, SectionTitle, Breadcrumb } from '$/shared/ui';
import React from 'react';
import scss from './ArticlesPage.module.scss';
import Filtiration from './sections/filtration/Filtiration';
import { useSize } from '$/shared/utils/use-size';

const TheMostWidelyRead = {
	...articles[0],
	image_src: '/images/article-card.png',
	category: 'Викх'
};

const LastThirdWidelyRead = Array.from({ length: 3 }, (_, idx) => ({
	title: 'Можно ли мусульманам изучать психологию?',
	date: '25.01.2025',
	views: 15,
	id: `article_l_${idx}`,
	description:
		'Последние исследования в области изучения активности в интернете приводят данные, что их аудиторией являются  люди всех возрастов',
	image_src: '/images/article-list.png',
	category: 'Викх'
}));

const totalArticles = [TheMostWidelyRead, ...LastThirdWidelyRead, ...articles];

const ArticlesPage: React.FC = () => {
	const windowSize = useSize();
	return (
		<main>
			<div className={` ${scss.container}`}>
				<Breadcrumb
					items={[
						{ label: 'Башкы бет', href: '/' },
						{ label: 'Макалалар', href: '#this' }
					]}
				/>

				<Filtiration />
				<SectionTitle className={scss.title} title={'Бардык макалалар'} />
				<section className={scss.article_head}>
					{windowSize.width >= 740 && (
						<ArticleItem
							className={scss.card_article}
							variant='2'
							item={TheMostWidelyRead}
						/>
					)}
					<div className={scss.articlesList}>
						{totalArticles
							.map((item, idx) => (
								<ArticleItem
									className={scss.card_articleList}
									type={windowSize.width <= 1284 ? 'card' : 'list'}
									variant={windowSize.width <= 1284 ? '1' : '2'}
									key={`key-${idx}`}
									item={item}
								/>
							))
							.slice(
								windowSize.width! <= 740 ? 0 : 1,
								windowSize.width <= 1100 && windowSize.width >= 740
									? 3
									: windowSize.width <= 740
									? totalArticles.length
									: 4
							)}
					</div>
				</section>

				{windowSize.width >= 740 && (
					<section>
						<div className={scss['articles']}>
							{articles.map(art => (
								<ArticleItem
									variant={windowSize.width <= 920 ? '1' : '2'}
									type={windowSize.width <= 920 ? 'card' : 'list'}
									key={art.id}
									item={{ ...art, category: 'Викх' }}
								/>
							))}
						</div>
					</section>
				)}

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
