'use client';
import { BackButton, EmptyState, Loading } from '$/shared/ui';
import React from 'react';
import TopicHead from './sections/topic-head/TopicHead';
import styles from './TopicDetailPage.module.scss';
import clsx from 'clsx';
import ModuleList from './sections/module-list/ModuleList';
import { useTopicsBySlugQuery } from '$/entities/topics';
import { useModulesQuery } from '$/entities/modules';

const TopicDetailPage: React.FC<{ topicSlug: string }> = ({ topicSlug }) => {
	const {
		data: topic,
		isLoading: topicLoading,
		error: topicError
	} = useTopicsBySlugQuery({ slug: topicSlug });
	const {
		data: modules,
		isLoading: modulesLoading,
		error: modulesError
	} = useModulesQuery({ topic: topic?.id });
	return (
		<main className={styles.main}>
			<section className={'back_section'}>
				<div className='container'>
					<BackButton />
				</div>
			</section>

			<div className={styles['block']}>
				<div className={clsx('container', styles['container'])}>
					{topicLoading ? (
						<Loading />
					) : topicError ? (
						<EmptyState
							icon='AlertTriangle'
							title='Ошибка при загрузке темы'
							description='Произошла ошибка при загрузке темы. Попробуйте ещё раз.'
						/>
					) : (
						topic && <TopicHead topic={topic} module_count={modules?.count} />
					)}

					{modulesLoading ? (
						<Loading />
					) : modulesError ? (
						<EmptyState
							icon='AlertTriangle'
							title='Ошибка при загрузке модулей'
							description='Произошла ошибка при загрузке модулей. Попробуйте ещё раз.'
						/>
					) : !modules || modules?.count === 0 ? (
						<EmptyState
							icon='File'
							title='Модули не найдены'
							description='Для данной темы ещё нет доступных модулей.'
						/>
					) : (
						<ModuleList modules={modules} />
					)}
				</div>
			</div>
		</main>
	);
};

export default TopicDetailPage;
