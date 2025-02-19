import { ProfilePage } from '$/appPages/site';
import { Metadata } from 'next';
import { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Калыс Заманбеков | Профиль'
};

const page = () => (
	<Suspense>
		<ProfilePage />
	</Suspense>
);
export default page;
