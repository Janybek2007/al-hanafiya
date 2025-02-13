'use client';
import { IModule, ModuleAudio, ModuleVideo } from '$/entities/modules';
import Accordion from '$/shared/ui/accordion/Accordion';
import { AccordionItem } from '$/shared/ui/accordion/accordion.types';
import Icon from '$/shared/ui/icon/Icon';
import { secondsToTime, text$, useDerived } from '$/shared/utils';
import { IoIosCheckmark } from 'react-icons/io';
import styles from './ModuleContent.module.scss';
import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { parseAsBoolean, useQueryState } from 'nuqs';

interface IProps {
	lessonId: string;
	module: IModule;
	modules: IModule[];
}

const ModuleContent: React.FC<IProps> = ({
	module,
	lessonId = module.lessons[0].id,
	modules
}) => {
	const [isPlaying, setIsPlaying] = useQueryState(
		'playing',
		parseAsBoolean.withDefault(false)
	);
	const activeLesson = useDerived(
		() => module.lessons.find(l => l.id === lessonId),
		[lessonId]
	);

	const accodionItems = useDerived((): AccordionItem[] => {
		return modules.map(val => {
			return {
				label: val.title,
				value: text$.toSlug(val.title),
				content: (
					<div className={styles.lessons}>
						{val.lessons.map(l => {
							const isActive = l.id === activeLesson?.id;
							return (
								<Link
									href={`/lessons/m/${val.lId}-${val.id}-${l.id}`}
									className={clsx(styles.lesson, {
										[styles.active]: isActive
									})}
									key={l.id}
								>
									<div className={styles['row1']}>
										{l.id === '-l10' ? (
											<div className={styles.checked}>
												<IoIosCheckmark />
											</div>
										) : (
											<div className={styles.unchecked} />
										)}
										<h4 className={styles.title}>{l.title}</h4>
									</div>
									<div className={styles.row}>
										<button onClick={() => setIsPlaying(p => !p)}>
											<Icon
												className='flexCenter'
												size='sm'
												name={isActive && isPlaying ? 'Pause' : 'Play'}
											/>
										</button>
										<span>{secondsToTime(l.time)}</span>
									</div>
								</Link>
							);
						})}
					</div>
				),
				icon: 'ChevronDown'
			};
		});
	}, [modules]);

	return (
		activeLesson && (
			<div className={styles.content}>
				{activeLesson.type == 'video' && (
					<ModuleVideo lesson={activeLesson} onDownload={() => {}} />
				)}
				{activeLesson.type == 'audio' && (
					<ModuleAudio lesson={activeLesson} onDownload={() => {}} />
				)}
				<div className={styles['right']}>
					<div className={styles.progress}>
						<hr
							className={styles.progress_line}
							style={{ width: `${module.progress}%` }}
						/>
						<div>
							<span>{module.title}</span>
							<span>{module.progress}%</span>
						</div>
						<hr className={styles.line} />
					</div>
					<div className={styles['ml']}>
						<Accordion
							defaultValue={text$.toSlug(module.title)}
							className={styles.accordion}
							items={accodionItems}
						/>
					</div>
				</div>
			</div>
		)
	);
};

export default ModuleContent;
