import { ArticleDetailPage } from '$/appPages/site';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Имам Ибн аль-Хумам: его жизнь и труды'
};

const page = () => <ArticleDetailPage />;

export default page;
