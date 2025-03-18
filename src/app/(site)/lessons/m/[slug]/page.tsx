import { ModuleDetailPage } from '$/appPages/site';
import { AsyncPageProps } from '$/shared/types';

const page = async (props: AsyncPageProps<['slug']>) => {
	const p = await props.params;
	return <ModuleDetailPage moduleSlug={p['slug']} />;
};

export default page;
