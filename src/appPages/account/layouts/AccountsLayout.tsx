import { AccountsProvider } from '$/entities/account';
import React from 'react';
import { Sidebar } from './components/sidebar/Sidebar';
import styles from './AccountsLayout.module.scss';

const AccountsLayout: React.FC<React.PropsWithChildren> = async ({
	children
}) => {
	return (
		<AccountsProvider>
			<div className={`container ${styles.accounts_layout}`}>
				<Sidebar />
				{children}
			</div>
		</AccountsProvider>
	);
};

export default AccountsLayout;
