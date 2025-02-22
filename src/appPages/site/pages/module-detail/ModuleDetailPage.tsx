import React from 'react';
import clsx from 'clsx';
import { example_modules } from '$/entities/modules';
import { BackButton } from '$/shared/ui';
import ModuleContent from './sections/module-content/ModuleContent';
import styles from './ModuleDetailPage.module.scss';
import ModuleComments from './sections/module-comments/ModuleComments';

interface IProps {
	readonly moduleId: string;
	readonly lessonId: string;
	readonly mLessonId: string;
}

const ModuleDetailPage: React.FC<IProps> = props => {
	const _module = example_modules.find(val => val.id === props.moduleId);
	const modules = example_modules.filter(val => val.lId === props.lessonId);
	return (
		<main>
			<section className={'back_section'}>
				<div className={clsx('container', styles.container)}>
					<BackButton />
				</div>
			</section>
			{_module && (
				<div className={clsx('container', styles.container)}>
					<ModuleContent
						modules={modules}
						lessonId={props.mLessonId}
						module={_module}
					/>
					<ModuleComments moduleId={props.moduleId} />
				</div>
			)}
		</main>
	);
};

export default ModuleDetailPage;
