import { AuthLayout } from '$/appPages/auth'

const layout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <AuthLayout>{children}</AuthLayout>;
};

export default layout;
