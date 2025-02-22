import { HomePage } from '$/appPages/site';
import { Suspense } from 'react';

const page = () => (
	<Suspense>
		<HomePage />
	</Suspense>
);
export default page;
