'use client';
import { CategoryItem } from '$/entities/categories';
import { Loading } from '$/shared/ui';
import React from 'react';
import styles from './CategoriesFilter.module.scss';

interface IProps {
	category: string;
	categories: CategoryItem[];
	error: unknown;
	loading: boolean;
	setCategory: (
		value: string | ((old: string) => string | null) | null
	) => Promise<URLSearchParams>;
}

export const CategoriesFilter: React.FC<IProps> = ({
	category,
	categories,
	error,
	loading,
	setCategory
}) => {
	if (loading) <Loading />;
	if (error) return <div>Error loading categories</div>;

	return (
		<>
			<div className={styles.categoriesFilter}>
				{categories.map(item => (
					<button
						key={item.slug}
						onClick={() => setCategory(item.slug)}
						className={`${styles.category} ${
							item.slug === category ? styles.active : ''
						}`}
					>
						{item.name}
					</button>
				))}
			</div>
		</>
	);
};
