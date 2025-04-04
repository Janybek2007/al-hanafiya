'use client';
import React from 'react';
import styles from './TopicList.module.scss';
import { CategoryItem } from '$/entities/categories';
import { useTopicsQuery } from '$/entities/topics';
import { TopicCard } from '../topic-card/TopicCard';
import { parseAsInteger, useQueryState } from 'nuqs';
interface IProps {
	category: CategoryItem;
	slice?: number
}

export const TopicList: React.FC<IProps> = ({ category, slice }) => {
	const [page] = useQueryState('page', parseAsInteger.withDefault(1));
	const { data: topics } = useTopicsQuery({
		category: category.id,
		page
	});

	return (
		<div className={styles.topic_list}>
			{topics?.results.slice(0, slice || topics.results.length).map(topic => (
				<TopicCard key={topic.id} topic={topic} />
			))}
		</div>
	);
};
