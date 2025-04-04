'use client';
import { Icon } from '$/shared/ui';
import { SearchCommand } from '$/widgets/search-command';
import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import styles from './HeaderEnd.module.scss';
import { useAppDispatch } from '$/shared/redux/hooks';
import { toggleModal } from '$/shared/redux/slices/login-modal';
import { useAccountsByEndpointQuery } from '$/entities/account';
import Link from 'next/link'

const HeaderEnd: React.FC = () => {
	const [term, setTerm] = React.useState<string | null>(null);
	const dispatch = useAppDispatch();
	const { data: user, isLoading } = useAccountsByEndpointQuery({ endpoint: 'me' });
	const Component = user ? Link : "button";
	return (
		<>
			<AnimatePresence initial={false}>
				{term !== null && <SearchCommand term={term} setTerm={setTerm} />}
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
						if (e.key == 'Enter') setTerm((e.target as HTMLInputElement).value);
					}}
				/>
				<button className={clsx('flexCenter', styles.glasses_btn)}>
					<Image width={32} height={32} src='/icon/glaesses.svg' alt='' />
				</button>
				<Component
					href={"/account/me"}
					onClick={() => !user && dispatch(toggleModal())}
					className={clsx('flexCenter', styles.login_btn)}
				>
					<Icon
						name={isLoading ? 'Loader' : (user ? 'User' :  'LogIn')}
						className={isLoading ? 'loaderAnimation' : ''}
					/>
				</Component>
			</div>
		</>
	);
};

export default HeaderEnd;
