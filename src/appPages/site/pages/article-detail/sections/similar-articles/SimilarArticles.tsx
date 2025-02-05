import React from 'react';
import styles from './SimilarArticles.module.scss';
import SectionTitle from '$/shared/ui/section-title/SectionTitle';
const SimilarArticles: React.FC = () => {
	return (
		<section className={styles.similar_articles}>
			<div className={`${styles['container']} container`}>
				<SectionTitle
					className={styles.section_title}
					title='Окшош макалалар'
					type='col'
				/>
			</div>
		</section>
	);
};

export default SimilarArticles;
