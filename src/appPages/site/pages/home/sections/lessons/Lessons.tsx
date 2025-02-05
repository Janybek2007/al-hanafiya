import React from 'react';
import styles from './Lessons.module.scss';
import BaseSection from '../base-section/BaseSection';
import clsx from 'clsx';
import Image from 'next/image';

export const Lessons = () => {
	return (
		<BaseSection
			title='Сабактар'
			className={styles.lessons_content}
			button={{ children: 'Баардык сабактар', linearGradient: 'v2' }}
		>
			<div
				style={{
					backgroundImage: "url('/images/lesson1.png')"
				}}
				className={clsx(styles.lesson, styles.current_lesson)}
			>
				<div className={clsx('flexCenter', styles['breadcrumb'])}>12+</div>
				<div className={styles['pagination']}>
					<div>
						<button className='inlineFlexCenter'>
							<Image
								width={16}
								height={16}
								src='/icon/prev-pagination.svg'
								alt='Prev-Pagination Icon'
							/>
						</button>
					</div>
					<div>
						<button className='inlineFlexCenter'>
							<Image
								width={16}
								height={16}
								src='/icon/next-pagination.svg'
								alt='Next-Pagination Icon'
							/>
						</button>
					</div>
				</div>
				<div className={styles['content']}>
					<button className={styles['audio_btn']}>
						<figure className='flexCenter'>
							<Image
								width={16}
								height={16}
								src='/icon/audio-outlined.svg'
								alt='Audio-Outlined Icon'
							/>
						</figure>
						<span>Аудио</span>
					</button>
					<div className={styles['flex']}>
						<div className={styles['content_title']}>
							Тема: Бухари китебинен сабак. Хадистен окум алы....
						</div>
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
			</div>
			<div className={styles.next_lessons}>
				<div
					style={{
						backgroundImage: "url('/images/lesson2.png')"
					}}
					className={clsx(styles.lesson, styles.next_lesson)}
					id='lesson-1'
				>
					<div className={styles['content']}>
						<button className={styles['video_btn']}>
							<figure className='flexCenter'>
								<Image
									width={16}
									height={16}
									src='/icon/video-outlined.svg'
									alt='Video-Outlined Icon'
								/>
							</figure>
							<span>Видео</span>
						</button>
						<div className={styles.flex}>
							<div className={styles['content_title']}>
								Тема: Бухари китебинен сабак. Хадистен окум алы....
							</div>
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
				</div>
				<div
					style={{
						backgroundImage: "url('/images/lesson2.png')"
					}}
					className={clsx(styles.lesson, styles.next_lesson)}
					id='lesson2'
				>
					<div className={styles['content']}>
						<button className={styles['video_btn']}>
							<figure className='flexCenter'>
								<Image
									width={16}
									height={16}
									src='/icon/video-outlined.svg'
									alt='Video-Outlined Icon'
								/>
							</figure>
							<span>Видео</span>
						</button>
						<div className={styles['flex']}>
							<div className={styles['content_title']}>
								Тема: Бухари китебинен сабак. Хадистен окум алы....
							</div>
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
				</div>
			</div>
		</BaseSection>
	);
};
