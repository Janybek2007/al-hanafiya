import React from 'react';
import styles from './TopicCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { TopicItem } from '../../types';
import { useModulesQuery } from '$/entities/modules';
import { Icons } from '$/shared/components';

interface IProps {
	topic: TopicItem;
}

export const TopicCard: React.FC<IProps> = ({ topic }) => {
	const { id, name, slug } = topic;
	const { data: modules } = useModulesQuery({ topic: id });

	return (
		<Link href={`/lessons/t/${slug}`} className={styles.lesson_card}>
			<figure>
				<Image
					width={453}
					height={257}
					src={'/images/lesson1.png'}
					alt={name}
				/>
			</figure>
			<div className={styles['content']}>
				<div className={styles.top}>
					<h4>{name}</h4>
					{/* <div className={styles.progress}>
						<hr
							className={styles.progress_line}
							style={{ width: `${progress}%` }}
						/>
						<hr className={styles.line} />
					</div> */}
				</div>
				<div className={styles['row']}>
					<div className='flexCenter'>
						<Icons.Book />
						<span>{modules?.count} модуль</span>
					</div>
					{/* <span>{progress} %</span> */}
				</div>
			</div>
		</Link>
	);
};
