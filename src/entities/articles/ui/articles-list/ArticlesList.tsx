import React from 'react';
import { ArticleItem } from '../article-item/ArticleItem';
import styles from './ArticlesList.module.scss';
import { ArticleItem as TArticleItem } from '../../types';

interface IProps {
	articles: TArticleItem[];
}
export const ArticlesList: React.FC<IProps> = ({ articles }) => {
	return (
		<div className={styles.articles_list}>
			{articles.map(art => (
				<ArticleItem key={art.id} item={art} />
			))}
		</div>
	);
};
