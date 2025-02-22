import { ArticlesPage } from '$/appPages/site';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: 'Калыс устаз тарабынан жазылган макалалар  | Макалалар'
};

const page = () => (
	<Suspense>
		<ArticlesPage />
	</Suspense>
);

export default page;
