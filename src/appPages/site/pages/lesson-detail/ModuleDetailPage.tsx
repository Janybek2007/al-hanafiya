'use client';
import React from 'react';
import clsx from 'clsx';
import { useModuleBySlugQuery, useModulesQuery } from '$/entities/modules';
import { BackButton, EmptyState, Loading } from '$/shared/ui';
import ModuleContent from './sections/module-content/ModuleContent';
import ModuleComments from './sections/module-comments/ModuleComments';
import { parseAsString, useQueryState } from 'nuqs';
import { useLessonsQuery } from '$/entities/lessons/redux';

interface IProps {
	readonly moduleSlug: string;
}

const ModuleDetailPage: React.FC<IProps> = props => {
	const {
		data: module,
		isLoading: moduleLoading,
		error: moduleError
	} = useModuleBySlugQuery({ slug: props.moduleSlug });
	const {
		data: modules,
		isLoading: modulesLoading,
		error: modulesError
	} = useModulesQuery({ topic: module?.topic });
	const { data: lessons } = useLessonsQuery({ module: module?.id });
	const [lessonSlug] = useQueryState(
		'slug',
		parseAsString.withDefault(String(lessons?.results?.[0].slug))
	);

	return (
		<main>
			<section className={'back_section'}>
				<div className={clsx('container')}>
					<BackButton />
				</div>
			</section>

			{moduleLoading || modulesLoading ? (
				<Loading />
			) : moduleError || modulesError ? (
				<EmptyState
					icon='AlertTriangle'
					title='Ошибка при загрузке модуля или списка модулей'
					description='Произошла ошибка при загрузке данных. Попробуйте ещё раз.'
				/>
			) : module && modules && lessonSlug ? (
				<div className={clsx('container')}>
					<ModuleContent
						lessons={lessons?.results}
						modules={modules.results}
						lessonSlug={lessonSlug}
						module={module}
					/>
					<ModuleComments lessonSlug={lessonSlug} />
				</div>
			) : (
				<EmptyState
					icon='File'
					title='Модуль не найден'
					description='Указанный модуль отсутствует или ещё не доступен.'
				/>
			)}
		</main>
	);
};

export default ModuleDetailPage;
