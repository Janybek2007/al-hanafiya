import React, { useState } from 'react';
import styles from './SearchCommand.module.scss';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { SearchType, TSearchType, SearchArg, SearchItem } from './utils/types';
import { useSearchQuery } from './utils/redux';
import { Icon, Loading } from '$/shared/ui';
import { useOutsideClick } from '$/shared/utils';

interface IProps {
	term: string | null;
	setTerm: (v: string | null) => void;
}

export const SearchCommand: React.FC<IProps> = ({ term, setTerm }) => {
	const [selectedType, setSelectedType] = useState<TSearchType>('all');

	const searchArg: SearchArg = { q: term, type: selectedType };
	const {
		data: searchResults,
		isLoading,
		error
	} = useSearchQuery(searchArg, { skip: !term });
	const ref =  useOutsideClick<HTMLDivElement>(() => setTerm(null));

	return createPortal(
		<div className={styles.overlay}>
			<motion.div
				animate={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -20 }}
				className={styles.panel}
				ref={ref}
			>
				<div className={styles['control']}>
					<div className={styles.searchBar}>
						<input
							type='text'
							value={term || ''}
							onChange={e => setTerm(e.target.value)}
							placeholder='Издөө...'
							className={styles.input}
							autoFocus
						/>
						{term && (
							<button onClick={() => setTerm(null)} className={styles.clear}>
								<Icon name='X' />
							</button>
						)}
					</div>

					<div className={styles.filters}>
						{SearchType.map(type => (
							<button
								key={type}
								onClick={() => setSelectedType(type)}
								className={`${styles.filter} ${
									selectedType === type ? styles.active : ''
								}`}
							>
								{type === 'all'
									? 'Баары'
									: type === 'questions'
									? 'Суроолор'
									: type === 'articles'
									? 'Макалалар'
									: type === 'lessons'
									? 'Сабактар'
									: 'Иш-чаралар'}
							</button>
						))}
					</div>
				</div>

				<div className={styles.results}>
					{isLoading ? (
						<Loading />
					) : error ? (
						<div className={styles.error}>Ката: Жүктөө мүмкүн болгон жок</div>
					) : !searchResults?.results.length || term?.trim() == '' ? (
						<div className={styles.empty}>Эч нерсе табылган жок</div>
					) : (
						searchResults.results.map((item: SearchItem) => (
							<a
								key={item.id}
								href={item.url}
								target='_blank'
								rel='noopener noreferrer'
								className={styles.item}
							>
								{item.title && (selectedType || item.type) !== 'lessons' && (
									<div className={styles.title}>{item.title}</div>
								)}
								{
									<div
										className={`${
											['questions', 'lessons'].includes(
												selectedType || item.type
											)
												? styles.title
												: styles.content
										}`}
										dangerouslySetInnerHTML={{
											__html: item.highlight || item.content || ''
										}}
									/>
								}
								{item.additional_info && (
									<div className={styles.meta}>
										{selectedType === 'questions' && (
											<span className={styles.status}>
												{item.additional_info.is_answered
													? 'Жооп берилди'
													: 'Жооп жок'}
											</span>
										)}
										{item.additional_info?.event_date && (
											<span className={styles.date}>
												{item.additional_info.event_date}
											</span>
										)}
										{item.type === 'lessons' && (
											<>
												<span className={styles.card}>
													{item.additional_info.category}
												</span>
												<span className={styles['dot']}></span>
												<span className={styles.card}>
													{item.additional_info.topic}
												</span>
											</>
										)}
									</div>
								)}
							</a>
						))
					)}
				</div>

				<button onClick={() => setTerm(null)} className={styles.close}>
					Жабуу
				</button>
			</motion.div>
		</div>,
		document.body
	);
};
