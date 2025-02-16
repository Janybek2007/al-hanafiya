'use client';
import {
	IModule,
	ModuleAudio,
	ModuleItem,
	ModuleVideo
} from '$/entities/modules';
import Accordion from '$/shared/ui/accordion/Accordion';
import { AccordionItem } from '$/shared/ui/accordion/accordion.types';
import { text$, useDerived } from '$/shared/utils';
import styles from './ModuleContent.module.scss';
import React from 'react';

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
					<ModuleItem
						lessons={val.lessons}
						activeLesson={activeLesson}
						href={`${val.lId}-${val.id}`}
					/>
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
