'use client';
import React from 'react';
import styles from './TopicList.module.scss';
import { CategoryItem } from '$/entities/categories';
import { useTopicsQuery } from '$/entities/topics';
import { TopicCard } from '../topic-card/TopicCard';
interface IProps {
	category: CategoryItem;
}

export const TopicList: React.FC<IProps> = ({ category }) => {
	const { data: topics } = useTopicsQuery({ category: category.id });

	return (
		<div className={styles.topic_list}>
			{topics?.results.map(topic => (
				<TopicCard key={topic.id} topic={topic} />
			))}
		</div>
	);
};
