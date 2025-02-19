import { ModuleDetailPage } from '$/appPages/site';
import { AsyncPageProps } from '$/shared/types';

const page = async (props: AsyncPageProps<['id']>) => {
	const params = await props.params;
	const [lessonId, moduleId, mLessonId] = params.id.split('-');
	return (
		<ModuleDetailPage
			moduleId={moduleId}
			lessonId={lessonId}
			mLessonId={mLessonId}
		/>
	);
};

export default page;
