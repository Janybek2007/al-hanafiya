/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import * as React from 'react';
import { AccountEndpoints, AccountMe, TAccountEndpoints } from './types';
import { useAccountsByEndpointQuery } from './redux';
import { usePathname } from 'next/navigation';

interface IAccounsContext {
	accounts_me: {
		data: AccountMe | undefined;
		isLoading: boolean;
		error: unknown;
	};
	page: {
		data: any;
		isLoading: boolean;
		error: unknown;
	};
}

const AccountsContext = React.createContext<IAccounsContext | undefined>(
	undefined
);

export const AccountsProvider: React.FC<React.PropsWithChildren> = ({
	children
}) => {
	const {
		data: meData,
		isLoading: meLoading,
		error: meError
	} = useAccountsByEndpointQuery({ endpoint: 'me' });

	const pathname = usePathname();

	const pageType = React.useMemo(() => {
		return pathname.split('/').pop() as TAccountEndpoints;
	}, [pathname]);

	const { data, isLoading, error, refetch } = useAccountsByEndpointQuery(
		{ endpoint: pageType },
		{ skip: !AccountEndpoints.includes(pageType) }
	);

	React.useEffect(() => {
		if (AccountEndpoints.includes(pageType)) refetch();
	}, [refetch, pageType]);

	const values: IAccounsContext = {
		accounts_me: {
			isLoading: meLoading,
			error: meError,
			data: meData
		},
		page: { data, isLoading, error }
	};

	return (
		<AccountsContext.Provider value={values}>
			{children}
		</AccountsContext.Provider>
	);
};

export const useAccounts = (): IAccounsContext => {
	const context = React.useContext(AccountsContext);

	if (!context) {
		throw new Error('useAccounts must be used within a AccountsProvider');
	}
	return context;
};
