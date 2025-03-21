import React from 'react';
import styles from './SimilarArticles.module.scss';
import { SectionTitle } from '$/shared/ui';
import { ArticleItem } from '$/entities/articles';
import { ArticleItem as TArticleItem } from '$/entities/articles/types';
import { useSize } from '$/shared/utils';

interface IProps {
	articles: TArticleItem[];
}

const SimilarArticles: React.FC<IProps> = ({ articles }) => {
	const windowSize = useSize();
	return (
		<section className={styles.similar_articles}>
			<div className={`${styles['container']} container`}>
				<SectionTitle
					className={styles.section_title}
					title='Окшош макалалар'
					type='col'
				/>
				<div className={styles['articles']}>
					{articles.map(art => (
						<ArticleItem
							variant={windowSize.width <= 920 ? '1' : '2'}
							type={windowSize.width <= 920 ? 'card' : 'list'}
						key={art.id}
							item={art}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default SimilarArticles;
