import React from 'react';
import styles from './HeaderEnd.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import Icon from '$/shared/ui/icon/Icon';

const HeaderEnd: React.FC = () => {
	return (
		<div className={styles.header_end}>
			<button className={styles.search_button}>
				<Icon c_size={28} className='flexCenter' name='Search' />
			</button>
			<input
				type='search'
				className={styles.search_input}
				placeholder='Издөө...'
			/>
			<button className={clsx('flexCenter', styles.glasses_btn)}>
				<Image width={32} height={32} src='/icon/glaesses.svg' alt='' />
			</button>
		</div>
	);
};

export default HeaderEnd;
