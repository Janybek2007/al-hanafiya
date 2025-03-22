'use client';
import React from 'react';
import styles from './AccountsMePage.module.scss';
import { UpdateAccount, UpdateAccountProvider } from '$/features/account';
import { useAccounts } from '$/entities/account';
import { Loading } from '$/shared/ui';
import AccountHeader from '../../layouts/components/account-header/AccountHeader';

const AccountsMePage: React.FC = () => {
	const { accounts_me } = useAccounts();
	return (
		<div className={styles.container}>
			<AccountHeader
				title='Жеке профиль'
				subtitle='Жеке маалыматтарыңызды жана жөндөөлөрүңүздү башкарыңыз'
			/>
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
