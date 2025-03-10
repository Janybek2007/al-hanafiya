import React from 'react';
import styles from './LatestLessons.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import { SectionTitle } from '$/shared/ui';
import { CiVideoOn } from 'react-icons/ci';
import { AiOutlineAudio } from 'react-icons/ai';

const LatestLessons: React.FC = () => {
	return (
		<section className={styles.latest_lessons}>
			<div className={`${styles['container']} container`}>
				<SectionTitle
					className={styles.section_title}
					title='Акыркы сабактар'
					type='col'
				/>
				<div className={styles['lessons']}>
					{Array.from({ length: 3 }).map((_, i) => (
						<div className={clsx(styles.lesson_card)} key={`${i}-key`}>
							<figure>
								<Image
									width={447}
									height={195}
									src={'/images/lesson-card.png'}
									alt='LessonCard Image'
								/>
								<button className={clsx('flexCenter', styles['btn'])}>
									{i == 1 ? <CiVideoOn /> : <AiOutlineAudio />}
								</button>
							</figure>
							<div className={styles['content']}>
								<p>Тема: Бухари китебинен сабак. Хадистен окум алы....</p>
								<hr />
								<div className={styles.row_parent}>
									<div>
										<span>Модульдар: </span>
										<span>5</span>
									</div>
									<div>
										<span>Жалпы саны: </span>
										<span>20</span>
									</div>
									<span className={styles.date}>25.01.2025</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default LatestLessons;
