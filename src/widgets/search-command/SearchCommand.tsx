import React from 'react';
import styles from './SearchCommand.module.scss';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

interface IProps {
	term: string | null;
	setTerm: (v: string | null) => void;
}

export const SearchCommand: React.FC<IProps> = ({ term, setTerm }) => {
	return createPortal(
		<div className={styles.search_command}>
			<motion.div
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.95 }}
				initial={{ opacity: 0, scale: 0.95 }}
				className={styles.modal_content}
			>
				<input
					type='search'
					value={term || ''}
					onChange={e => setTerm(e.target.value)}
					placeholder='Search...'
					className={styles.modal_input}
				/>
				<button onClick={() => setTerm(null)} className={styles.close_button}>
					Close
				</button>
			</motion.div>
		</div>,
		document.body
	);
};
