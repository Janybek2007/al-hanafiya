import React from 'react';
import styles from './SimilarArticles.module.scss';
import { SectionTitle } from '$/shared/ui';
import { ArticleItem } from '$/entities/articles';
import { articles } from '$/entities/articles/constants/articles.constants';
const SimilarArticles: React.FC = () => {
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
						<ArticleItem variant='2' type='list' key={art.id} item={art} />
					))}
				</div>
			</div>
		</section>
	);
};

export default SimilarArticles;
