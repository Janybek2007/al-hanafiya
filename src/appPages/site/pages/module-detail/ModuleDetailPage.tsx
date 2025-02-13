import { example_modules } from '$/entities/modules';
import { BackButton } from '$/shared/ui/back-button/BackButton';
import React from 'react';
import ModuleContent from './sections/module-content/ModuleContent';
import ModuleComments from './sections/module-comments/ModuleComments';

interface IProps {
	readonly moduleId: string;
	readonly lessonId: string;
	readonly mLessonId: string;
}

export const ModuleDetailPage: React.FC<IProps> = props => {
	const _module = example_modules.find(val => val.id === props.moduleId);
	const modules = example_modules.filter(val => val.lId === props.lessonId);
	return (
		<main>
			<section className={'back_section'}>
				<div className='container'>
					<BackButton />
				</div>
			</section>
			{_module && (
				<div className='container'>
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
