'use client';
import React from 'react';
import styles from './AccountsMePage.module.scss';
import { UpdateAccount, UpdateAccountProvider } from '$/features/account';
import { useAccounts } from '$/entities/account';
import { Loading } from '$/shared/ui';

const AccountsMePage: React.FC = () => {
	const { accounts_me } = useAccounts();
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Личный профиль</h1>
			<p className={styles.subtitle}>
				Управляйте своими персональными данными и настройками
			</p>

			<div className={styles.profileCard}>
				{accounts_me.isLoading ? (
					<Loading />
				) : (
					<UpdateAccountProvider defaultValues={accounts_me.data!}>
						<UpdateAccount />
					</UpdateAccountProvider>
				)}
			</div>
		</div>
	);
};

export default AccountsMePage;
