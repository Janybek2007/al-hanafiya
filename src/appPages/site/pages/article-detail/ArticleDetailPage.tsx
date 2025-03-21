'use client';
import React from 'react';
import ArticleContent from './sections/article-content/ArticleContent';
import SimilarArticles from './sections/similar-articles/SimilarArticles';
import LatestLessons from './sections/latest-lessons/LatestLessons';
// import Filtration from '../articles/sections/filtration/Filtiration';
import { BackButton, Loading } from '$/shared/ui';
import { useParams } from 'next/navigation';
import { useGetArticlesBySlugQuery } from '$/entities/articles';

const ArticleDetailPage: React.FC = () => {
	const params = useParams();
	const { data, isLoading, error } = useGetArticlesBySlugQuery({
		slug: String(params.slug)
	});

	if (isLoading) return <Loading />;
	if (error || !data) {
		return <div>Ошибка загрузки истории просмотров: {error?.toString()}</div>;
	}

	return (
		<main>
			<section className={'back_section'}>
				<div className='container'>
					<BackButton />
				</div>
			</section>
			{/* <section>
				<div className='container'>
					<Filtration />
				</div>
			</section> */}
			<ArticleContent detail={data} />
			<SimilarArticles articles={data.similar_articles} />
			<LatestLessons />
		</main>
	);
};

export default ArticleDetailPage;
