import { AccountsLayout } from '$/appPages/account'

const layout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <AccountsLayout>{children}</AccountsLayout>;
};

export default layout;
