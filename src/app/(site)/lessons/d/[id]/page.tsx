import { LessonDetailPage } from '$/appPages/site';
import { AsyncPageProps } from '$/shared/types';

const page = async (p: AsyncPageProps<['id']>) => {
	const params = await p.params;
	return <LessonDetailPage lId={params.id} />;
};

export default page;
