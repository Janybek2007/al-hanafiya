'use client';
import { LessonsFilter } from '$/entities/lessons';
import { paths } from '$/shared/routing';
import React from 'react';
import styles from './LessonsPage.module.scss';
import CategorySection from './sections/category-section/CategorySection';
import { EmptyState, Loading, Pagination } from '$/shared/ui';
import { useCategoriesQuery } from '$/entities/categories';
import { TopicList } from '$/entities/topics';

const section_label = 'Все уроки';
const LessonsPage: React.FC = () => {
	const { data: categories, isLoading, error } = useCategoriesQuery({});

	return (
		<main className={styles.lessons_page}>
			<LessonsFilter />
			{isLoading ? (
				<Loading />
			) : error ? (
				<EmptyState
					icon='AlertTriangle'
					title='Произошла ошибка'
					description='Произошла ошибка при загрузке данных. Пожалуйста, попробуйте еще раз.'
				/>
			) : categories?.count === 0 ? (
				<EmptyState
					icon='File'
					title='Уроки не найдены'
					description='На данный момент уроков нет. Попробуйте позже.'
				/>
			) : (
				categories?.results.map(c => (
					<CategorySection
						key={c.slug}
						className={styles.lessons_section}
						title={c.name}
						link={{
							href: paths.lessons.by_category(c.slug),
							label: section_label
						}}
					>
						<TopicList slice={3} category={c} />
					</CategorySection>
				))
			)}
			{categories?.next && <Pagination totalPages={categories.count} />}
		</main>
	);
};

export default LessonsPage;
