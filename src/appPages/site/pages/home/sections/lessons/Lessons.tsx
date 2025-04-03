import clsx from 'clsx';
import HomeSection from '../home-section/HomeSection';
import styles from './Lessons.module.scss';
import { AiOutlineAudio } from 'react-icons/ai';
import { CiVideoOn } from 'react-icons/ci';
import { paths } from '$/shared/routing';
import { Icon } from '$/shared/ui';

export const Lessons = () => {
	return (
		<HomeSection
			title='Сабактар'
			className={styles.lessons_content}
			button={{
				children: 'Баардык сабактар',
				linearGradient: 'v2',
				as: 'a',
				href: paths._lessons
			}}
		>
			<div
				style={{
					backgroundImage: "url('/images/lesson1.png')",
					backgroundPosition: '-clamp(-1.875rem, -5rem + 5.56vw, 0rem)'
				}}
				className={clsx(styles.lesson, styles.current_lesson)}
			>
				<div className={clsx('flexCenter', styles['breadcrumb'])}>12+</div>
				<div className={styles['pagination']}>
					<div>
						<button className='inlineFlexCenter'>
							<Icon name='ChevronLeft' />
						</button>
					</div>
					<div>
						<button className='inlineFlexCenter'>
							<Icon name='ChevronRight' />
						</button>
					</div>
				</div>
				<div className={styles['content']}>
					<button className={styles['audio_btn']}>
						<figure className='flexCenter'>
							<AiOutlineAudio size={20} />
						</figure>
						<span>Аудио</span>
					</button>
					<div className={styles['row']}>
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
						backgroundImage: "url('/images/lesson2.png')",
						backgroundPosition: 'center'
					}}
					className={clsx(styles.lesson, styles.next_lesson)}
					id='lesson-1'
				>
					<div className={styles['content']}>
						<button className={styles['video_btn']}>
							<figure className='flexCenter'>
								<CiVideoOn size={20} />
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
						backgroundImage: "url('/images/lesson2.png')",
						backgroundPosition: 'center'
					}}
					className={clsx(styles.lesson, styles.next_lesson)}
					id='lesson2'
				>
					<div className={styles['content']}>
						<button className={styles['video_btn']}>
							<figure className='flexCenter'>
								<CiVideoOn size={20} />
							</figure>
							<span>Видео</span>
						</button>
						<div className={styles['row']}>
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
		</HomeSection>
	);
};
