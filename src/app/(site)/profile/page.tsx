import { ProfilePage } from '$/appPages/site';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Калыс Заманбеков | Профиль'
};

const page = () => <ProfilePage />;
export default page;
