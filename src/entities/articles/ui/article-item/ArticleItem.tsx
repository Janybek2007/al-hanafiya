'use client';
import React from 'react';
import styles from './ArticleItem.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import { formatDate } from '$/shared/utils';
import { Icons } from '$/shared/components';
import { type ArticleItem as TArticleItem } from '../../types';
import { useRouter } from 'next/navigation';
import { ApiMedia } from '$/shared/constants/url.constants';

type ArticleItemProps = {
	type?: 'list' | 'card';
	variant?: '1' | '2';
	item: TArticleItem;
	className?: string;
};

const MAX_LENGTH = 120;

export const ArticleItem: React.FC<ArticleItemProps> = ({
	type = 'card',
	item,
	variant = '1',
	className = ''
}) => {
	const { content, created_at, image_url, slug, title } = item;
	const { push } = useRouter();

	const image_src = image_url.includes('http')
		? image_url
		: ApiMedia(image_url);

	return (
		<div
			data-article-item='true'
			className={clsx(
				styles.article_card,
				styles[`t-${type}`],
				styles[`v-${variant}`],
				className
			)}
		>
			<figure>
				<Image
					width={type == 'list' ? 438 : 408}
					height={type == 'list' ? 223 : 238}
					src={image_src}
					alt='Article Image'
				/>
			</figure>
			<div data-article-content='true' className={styles['card_content']}>
				<div>
					{/* {category && (
						<div className={styles['badge-category']}>{category}</div>
					)} */}
					<h3 className={styles.title}>{title}</h3>
					<p
						className={styles.description}
						dangerouslySetInnerHTML={{
							__html:
								content?.slice(0, MAX_LENGTH) +
								`...<span class="${styles.next}">Читать</span>`
						}}
						onClick={e => {
							const target = e.target as HTMLElement;
							if (target.classList.contains(styles.next)) {
								push(`/articles/${slug}`);
							}
						}}
					/>
				</div>
				<div className={styles.row}>
					<div className={styles.row_}>
						<div className={styles.item}>
							<Icons.HistoryOutlined width={28} height={28} />
							<span>{formatDate(created_at).timeAgo}</span>
						</div>
						<div className={styles.item}>
							<Icons.View width={28} height={28} />
							<span>{5}</span>
						</div>
					</div>
					<span>{formatDate(created_at).DDMMYYYY}</span>
				</div>
			</div>
		</div>
	);
};
