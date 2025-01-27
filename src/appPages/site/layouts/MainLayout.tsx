import React from 'react';
import { Header } from './ui/header/Header';
import { Footer } from './ui/footer/Footer';

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};
