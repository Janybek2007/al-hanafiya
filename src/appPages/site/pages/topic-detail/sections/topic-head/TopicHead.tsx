'use client';
import React from 'react';
import styles from './TopicHead.module.scss';
import { AiOutlineAudio } from 'react-icons/ai';
import { CiVideoOn } from 'react-icons/ci';
import { TopicItem } from '$/entities/topics';
import Image from 'next/image';
import {
	LearningProgress,
	useAccountsByEndpointQuery
} from '$/entities/account';
import Link from 'next/link';
import { paths } from '$/shared/routing';
import { useLessonsQuery } from '$/entities/lessons/redux';

interface IProps {
	topic: TopicItem;
	module_count?: number;
	first_module_id?: number;
}

const TopicHead: React.FC<IProps> = ({
	topic,
	module_count,
	first_module_id
}) => {
	const { category, name } = topic;
	const { data: progress, error } = useAccountsByEndpointQuery({
		endpoint: 'learning_progress'
	});
	const progressW =
		progress &&
		(progress as LearningProgress).by_category.find(
			v => v.category_id === category.id
		);

	const { data } = useLessonsQuery({ module: first_module_id });
	const thumbnailImage = data?.results[0].thumbnail_url;

	return (
		<div className={styles.topic_head}>
			<figure>
				<Image
					width={412}
					height={234}
					src={thumbnailImage ? thumbnailImage : '/images/placeholder.webp'}
					alt={'Topic Head Image Alt'}
				/>
			</figure>
			<div className={styles['info']}>
				<div className={styles['row']}>
					<Link
						href={paths.lessons.by_category(category.slug)}
						target='_blank'
						className={styles['category']}
					>
						{category.name}
					</Link>
					<span>{module_count} модуль</span>
					<span>
						{true ? <AiOutlineAudio /> : <CiVideoOn />}4
						{true ? 'аудио' : 'видео'} сабак
					</span>
				</div>
				<h4 className={styles.title}>{name}</h4>
				<hr className={styles.divider} />
				{progress && !error && (
					<div className={styles.progress}>
						<hr
							className={styles.progress_line}
							style={{ width: `${progressW?.progress_percentage}%` }}
						/>
						<div>
							<span>Жалпы прогресс</span>
							<span>{progressW?.progress_percentage}%</span>
						</div>
						<hr className={styles.line} />
					</div>
				)}
			</div>
		</div>
	);
};

export default TopicHead;
