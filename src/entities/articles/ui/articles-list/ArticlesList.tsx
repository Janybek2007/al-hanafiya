import React from 'react';
import { ArticleItem } from '../article-item/ArticleItem';
import styles from './ArticlesList.module.scss';
import { articles } from '../../constants/articles.constants';
export const ArticlesList: React.FC = () => {
	return (
		<div className={styles.articles_list}>
			{articles.map(art => (
				<ArticleItem key={art.id} item={art} />
			))}
		</div>
	);
};
