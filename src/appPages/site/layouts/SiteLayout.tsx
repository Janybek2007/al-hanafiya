import React from 'react';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { TabsBar } from './components/tabs-bar/TabsBar';

export const SiteLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<>
			<TabsBar />
			<Header />
			{children}
			<Footer />
		</>
	);
};
