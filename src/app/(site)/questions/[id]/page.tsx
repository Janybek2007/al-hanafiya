import { QuestionDetailPage } from '$/appPages/site';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: 'Калыс устазга келген'
};
const page = () => (
	<Suspense>
		<QuestionDetailPage />
	</Suspense>
);

export default page;
