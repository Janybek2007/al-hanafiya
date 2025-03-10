import { SiteLayout } from '$/appPages/site';
import React from 'react';

const layout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <SiteLayout>{children}</SiteLayout>;
};

export default layout;
