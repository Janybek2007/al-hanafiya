'use client';
import { useCategoriesQuery } from '$/entities/categories';
import { TopicList } from '$/entities/topics';
import { CategoriesFilter } from '$/widgets/categories-filter';
import { parseAsString, useQueryState } from 'nuqs';
import React from 'react';
import s from './LessonsCategory.module.scss';
import { Pagination } from '$/shared/ui';

const LessonsCategory: React.FC = () => {
	const { error, data, isLoading } = useCategoriesQuery({});
	const [category, setCategory] = useQueryState(
		'category',
		parseAsString.withDefault(String(data?.results[0].slug))
	);

	const currentCategory = data?.results.find(item => item.slug === category);

	return (
		<main className={s['main']}>
			<div className={`container ${s.container}`}>
				{data && (
					<CategoriesFilter
						setCategory={setCategory}
						categories={data.results}
						error={error}
						loading={isLoading}
						category={category}
					/>
				)}
				{currentCategory && <TopicList category={currentCategory} />}
				<div className={s['pn']}>
					<Pagination totalPages={10} />
				</div>
			</div>
		</main>
	);
};

export default LessonsCategory;
