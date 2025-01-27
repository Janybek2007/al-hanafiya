import React from 'react';
import styles from './ArticlesList.module.scss';
import { articles } from '../../constants/articles.constants';
import { ArticleCard } from '../article-card/ArticleCard';
export const ArticlesList: React.FC = () => {
	return (
		<div className={styles.articles_list}>
			{articles.map(art => (
				<ArticleCard key={art.id} {...art} />
			))}
		</div>
	);
};
