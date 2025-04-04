'use client';
import { ArticlesList, useGetArticlesByLatestQuery } from '$/entities/articles';
import { Loading } from '$/shared/ui';
import HomeSectionProps from '../home-section/HomeSection';

export const Articles = () => {
	const { data: articles, isLoading, error } = useGetArticlesByLatestQuery({});

	if (isLoading) return <Loading />;

	if (error || !articles || !Array.isArray(articles)) {
		return <div>Ошибка загрузки статей: {error?.toString()}</div>;
	}
	return (
		<HomeSectionProps
			button={{
				children: 'Бардык макалалар',
				linearGradient: 'v2',
				href: '/articles',
				as: "a"
			}}
			title='Макалалар'
		>
			<ArticlesList articles={articles.slice(0, 3)} />
		</HomeSectionProps>
	);
};
