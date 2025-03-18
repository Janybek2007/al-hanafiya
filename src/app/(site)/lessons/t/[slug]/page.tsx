import { TopicDetailPage } from '$/appPages/site';
import { AsyncPageProps } from '$/shared/types';

const page = async (p: AsyncPageProps<['slug']>) => {
	const params = await p.params;
	return <TopicDetailPage topicSlug={params['slug']} />;
};

export default page;
