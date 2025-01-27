import { MainLayout } from '$/appPages/site';
import React from 'react';

const layout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <MainLayout>{children}</MainLayout>;
};

export default layout;
