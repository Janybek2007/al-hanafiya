'use client';
import React from 'react';
import styles from './TopicList.module.scss';
import { CategoryItem } from '$/entities/categories';
import { useTopicsQuery } from '$/entities/topics';
import { TopicCard } from '../topic-card/TopicCard';
import { parseAsInteger, useQueryState } from 'nuqs';
interface IProps {
	category: CategoryItem;
}

export const TopicList: React.FC<IProps> = ({ category }) => {
	const [page] = useQueryState('page', parseAsInteger.withDefault(1));
	const { data: topics } = useTopicsQuery({
		category: category.id,
		page
	});

	return (
		<div className={styles.topic_list}>
			{topics?.results.map(topic => (
				<TopicCard key={topic.id} topic={topic} />
			))}
		</div>
	);
};
