'use client';
import { useLessonsQuery } from '$/entities/lessons/redux';
import { ModuleAudio, ModuleItem, ModuleVideo } from '$/entities/modules';
import { type ModuleItem as MItem } from '$/entities/modules/types';
import { Accordion, AccordionItem } from '$/shared/ui';
import { text$, useDerived } from '$/shared/utils';
import styles from './ModuleContent.module.scss';
import React from 'react';

interface IProps {
	lessonSlug: string | null;
	module: MItem;
	modules: MItem[];
}

const ModuleContent: React.FC<IProps> = ({ module, lessonSlug, modules }) => {
	const { data: lessons } = useLessonsQuery({ module: module.id });

	const activeLesson = React.useMemo(
		() => lessons?.results.find(v => v.slug == lessonSlug),
		[lessonSlug, lessons]
	);

	const [accordionItems] = useDerived((): AccordionItem[] => {
		return modules.map(val => {
			return {
				label: val.name,
				value: text$.toSlug(val.name),
				content: (
					<ModuleItem
						lessons={lessons?.results ? lessons.results : []}
						moduleSlug={val.slug}
						activeLesson={activeLesson}
					/>
				)
			};
		});
	}, [modules, lessons, lessonSlug]);

	return (
		activeLesson && (
			<div className={styles.content}>
				{activeLesson.media_type == 'video' && (
					<ModuleVideo lesson={activeLesson} onDownload={() => {}} />
				)}
				{activeLesson.media_type == 'audio' && (
					<ModuleAudio lesson={activeLesson} onDownload={() => {}} />
				)}
				<div className={styles['right']}>
					<div className={styles.progress}>
						<hr className={styles.progress_line} style={{ width: `${0}%` }} />
						<div>
							<span>{module.name.split('-')[0]}</span>
							<span>{0}%</span>
						</div>
						<hr className={styles.line} />
					</div>
					<div className={styles['ml']}>
						<Accordion
							icon='ChevronDown'
							defaultValue={text$.toSlug(module.name)}
							className={styles.accordion}
							items={accordionItems}
						/>
					</div>
				</div>
			</div>
		)
	);
};

export default ModuleContent;
