'use client';
import React from 'react';
import styles from './TopicHead.module.scss';
import Image from 'next/image';
import { AiOutlineAudio } from 'react-icons/ai';
import { CiVideoOn } from 'react-icons/ci';
import { TopicBySlugResponse, TopicItem } from '$/entities/topics';

interface IProps {
	topic: TopicItem;
	module_count?: number;
}

const TopicHead: React.FC<IProps> = ({ topic, module_count }) => {
	const { category, id, name, slug } = topic;

	return (
		<div className={styles.topic_head}>
			<figure>
				{/* <Image width={412} height={234} src={image_src} alt={title} /> */}
			</figure>
			<div className={styles['info']}>
				<div className={styles['row']}>
					<span className={styles['category']}>{category}</span>
					<span>{module_count} модуль</span>
					<span>
						{/* {type === 'audio' ? <AiOutlineAudio /> : <CiVideoOn />}4
						{type == 'audio' ? 'аудио' : 'видео'} */}
						сабак
					</span>
				</div>
				<h4 className={styles.title}>{name}</h4>
				<hr className={styles.divider} />
				<div className={styles.progress}>
					<hr className={styles.progress_line} style={{ width: `${0}%` }} />
					<div>
						<span>Жалпы прогресс</span>
						<span>{0}%</span>
					</div>
					<hr className={styles.line} />
				</div>
			</div>
		</div>
	);
};

export default TopicHead;
