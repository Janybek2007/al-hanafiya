'use client';
import React from 'react';
import styles from './HeaderEnd.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import { Icon } from '$/shared/ui';
import { SearchCommand } from '$/widgets/search-command';
import { AnimatePresence } from 'framer-motion';

const HeaderEnd: React.FC = () => {
	const [term, setTerm] = React.useState<string | null>(null);
	return (
		<>
			<AnimatePresence initial={false}>
				{!!term && <SearchCommand term={term} setTerm={setTerm} />}
			</AnimatePresence>
			<div className={styles.header_end}>
				<button onClick={() => setTerm('')} className={styles.search_button}>
					<Icon c_size={28} className='flexCenter' name='Search' />
				</button>
				<input
					type='search'
					className={styles.search_input}
					placeholder='Издөө...'
					onKeyDown={e => {
						if (e.key == 'Enter') {
							setTerm((e.target as HTMLInputElement).value);
						}
					}}
				/>
				<button className={clsx('flexCenter', styles.glasses_btn)}>
					<Image width={32} height={32} src='/icon/glaesses.svg' alt='' />
				</button>
			</div>
		</>
	);
};

export default HeaderEnd;
