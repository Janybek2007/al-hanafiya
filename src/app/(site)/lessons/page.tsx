import { LessonsPage } from '$/appPages/site';
import { Suspense } from 'react';

const page = () => (
	<Suspense>
		<LessonsPage />
	</Suspense>
);

export default page;
