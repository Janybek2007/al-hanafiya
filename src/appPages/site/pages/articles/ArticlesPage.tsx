'use client';
import { ArticleItem, useGetArticlesByLatestQuery } from '$/entities/articles';
import { Breadcrumb, Loading, Pagination, SectionTitle } from '$/shared/ui';
import { useSize } from '$/shared/utils';
import React from 'react';
import scss from './ArticlesPage.module.scss';
import Filtiration from './sections/filtration/Filtiration';

const ArticlesPage: React.FC = () => {
	const [tags, setTags] = React.useState({ label: 'Все', value: 'all' });
	const { data, isLoading, error } = useGetArticlesByLatestQuery({});
	const windowSize = useSize();

	if (isLoading) return <Loading />;
	if (error || !data) {
		return <div>Ошибка загрузки истории просмотров: {error?.toString()}</div>;
	}

	return (
		<main>
			<div className={` ${scss.container}`}>
				<Breadcrumb
					items={[
						{ label: 'Башкы бет', href: '/' },
						{ label: 'Макалалар', href: '#this' }
					]}
				/>

				<Filtiration tags={tags} setTags={setTags} />
				<SectionTitle className={scss.title} title={'Бардык макалалар'} />
				<section className={scss.article_head}>
					{windowSize.width >= 740 && (
						<ArticleItem
							className={scss.card_article}
							variant='2'
							item={data[0]}
						/>
					)}
					<div className={scss.articlesList}>
						{data
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
									? data.length
									: 4
							)}
					</div>
				</section>

				{windowSize.width >= 740 && (
					<section>
						<div className={scss['articles']}>
							{data
								.map(art => (
									<ArticleItem
										variant={windowSize.width <= 920 ? '1' : '2'}
										type={windowSize.width <= 920 ? 'card' : 'list'}
										key={art.id}
										item={art}
									/>
								))
								.slice(
									windowSize.width <= 1100 && windowSize.width >= 740
										? 3
										: windowSize.width <= 740
										? data.length
										: 4
								)}
						</div>
					</section>
				)}

				<SectionTitle className={scss.title} title={'Популярдуу макалалар'} />

				<section>
					<div className={scss['popularArticle']}>
						{data.map(art => (
							<ArticleItem variant='1' type='card' key={art.id} item={art} />
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
