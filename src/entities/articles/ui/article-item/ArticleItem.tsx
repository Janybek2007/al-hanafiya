import React from 'react';
import { articles } from '../../constants/articles.constants';
import styles from './ArticleItem.module.scss';
import clsx from 'clsx';
import { Svg } from '$/shared/ui';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '$/shared/utils';
type ArticleItemProps = {
	type?: 'list' | 'card';
	variant?: '1' | '2';
	item: (typeof articles)[number];
	className?: string;
};

const MAX_LENGTH = 180;

const truncateText = (text: string, maxLength: number) => {
	if (text.length <= maxLength) return text;
	const trimmedText = text.slice(0, maxLength);
	return trimmedText.slice(0, trimmedText.lastIndexOf(' ')) + '...';
};

export const ArticleItem: React.FC<ArticleItemProps> = ({
	type = 'card',
	item,
	variant = '1',
	className = ''
}) => {
	const { date, description, image_src, title, views, category } = item;
	return (
		<div
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
			<div className={styles['card_content']}>
				<div className={styles['']}>
					{category && (
						<div className={styles['badge-category']}>{category}</div>
					)}
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.description}>
						{truncateText(description, MAX_LENGTH)}...
						<Link href='#'>Читать</Link>
					</p>
				</div>
				<div className={styles.row}>
					<div className={styles.row_}>
						<div className={styles.item}>
							<Svg
								className='flexCenter child'
								width={28}
								height={28}
								src={'/icon/history-outlined.svg'}
							/>
							<span>{formatDate(date).timeAgo}</span>
						</div>
						<div className={styles.item}>
							<Svg
								className='flexCenter child'
								width={28}
								height={28}
								src={'/icon/view.svg'}
							/>
							<span>{views}</span>
						</div>
					</div>
					<span>
						{variant === '2' ? date.split(' ')[0] : formatDate(date).DDMMYYYY}
					</span>
				</div>
			</div>
		</div>
	);
};
