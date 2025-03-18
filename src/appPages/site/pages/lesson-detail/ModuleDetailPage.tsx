'use client';
import React from 'react';
import clsx from 'clsx';
import { useModuleBySlugQuery, useModulesQuery } from '$/entities/modules';
import { BackButton, EmptyState, Loading } from '$/shared/ui';
import ModuleContent from './sections/module-content/ModuleContent';
import styles from './ModuleDetailPage.module.scss';
import ModuleComments from './sections/module-comments/ModuleComments';
import { useQueryState } from 'nuqs';

interface IProps {
	readonly moduleSlug: string;
}

const ModuleDetailPage: React.FC<IProps> = props => {
	const [lessonSlug] = useQueryState('slug');
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

	return (
		<main>
			<section className={'back_section'}>
				<div className={clsx('container', styles.container)}>
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
			) : module && modules ? (
				<div className={clsx('container', styles.container)}>
					<ModuleContent
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
