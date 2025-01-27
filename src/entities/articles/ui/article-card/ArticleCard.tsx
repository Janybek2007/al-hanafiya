import React from 'react';
import { articles } from '../../constants/articles.constants';
import styles from './ArticleCard.module.scss';
import Image from 'next/image';
type ArticleCardProps = (typeof articles)[number];

export const ArticleCard: React.FC<ArticleCardProps> = ({
	date,
	description,
	image_src,
	title,
	views
}) => {
	return (
		<div className={styles.article_card}>
			<figure>
				<Image width={516} height={310} src={image_src} alt='Article Image' />
			</figure>
			<div className={styles['card_content']}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>
				<div className={styles.row}>
					<div className={styles.views}>
						<figure>
							<Image
								width={28}
								height={28}
								src={'/icon/view.svg'}
								alt='Article Image'
							/>
						</figure>
						<span>{views}</span>
					</div>
					<span className={styles.date}>{date}</span>
				</div>
			</div>
		</div>
	);
};
