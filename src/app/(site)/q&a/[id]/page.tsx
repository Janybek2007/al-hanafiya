import { QADetailPage } from '$/appPages/site'
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: 'Калыс устазга келген'
};
const page = () => (
	<Suspense>
		<QADetailPage />
	</Suspense>
);

export default page;
