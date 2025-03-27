import React from 'react';
import styles from './ArticleContent.module.scss';
import Image from 'next/image';
import { Icons } from '$/shared/components';
import { ArticleItemDetail } from '$/entities/articles/types';
import { formatDate } from '$/shared/utils';

interface IProps {
	detail: ArticleItemDetail;
}

const ArticleContent: React.FC<IProps> = ({ detail }) => {
	return (
		<section className={styles.article_detail_section}>
			<div className={`${styles['container']} container`}>
				<h2 className={styles.title}>{detail.title}</h2>
				<div className={styles['info']}>
					<div className={styles.info_item}>
						<figure>
							<Image
								width={28}
								height={28}
								src={'/icon/view.svg'}
								alt='View Icon'
							/>
						</figure>
						<span>{15}</span>
					</div>
					<div className={styles.info_item}>
						<figure>{<Icons.HistoryOutlined />}</figure>
						<span>{formatDate(detail.updated_at).timeAgo}</span>
					</div>
					<div className={styles.info_item}>
						<figure>
							<Image
								width={28}
								height={28}
								src={'/icon/calendar-broken.svg'}
								alt='CalendarBroken Icon'
							/>
						</figure>
						<span>{formatDate(detail.updated_at).DDMMYYYY}</span>
					</div>
				</div>
				<div className={styles['content']}>
					<div className={styles['row']}>
						<figure>
							<Image
								width={570}
								height={321}
								// '/images/article-detail.png'
								src={detail.image_url}
								alt='ArticleDetail Image'
							/>
						</figure>
						<div
							className={styles.p}
							dangerouslySetInnerHTML={{ __html: detail.content }}
						/>
					</div>
				</div>
				<div className={styles['end']}>
					<div className={styles['contact']}>
						<h5>Байланышуу :</h5>
						<div className={styles['social_links']}>
							<a href={'#'}>
								<Image
									width={24}
									height={24}
									src='/icon/social_links/facebook-colored.svg'
									alt='Facebook Icon'
								/>
							</a>
							<a href={'#'}>
								<Image
									width={24}
									height={24}
									src='/icon/social_links/instagram-colored.svg'
									alt='Instagram Icon'
								/>
							</a>
							<a href={'#'}>
								<Image
									width={24}
									height={24}
									src='/icon/social_links/whatsapp-colored.svg'
									alt='Whatsapp Icon'
								/>
							</a>
							<a href={'#'}>
								<Image
									width={24}
									height={24}
									src='/icon/social_links/telegram-colored.svg'
									alt='Telegram Icon'
								/>
							</a>
						</div>
					</div>
					<h3 className={styles['title']}>Калыс Заманбеков</h3>
				</div>
			</div>
		</section>
	);
};

export default ArticleContent;
