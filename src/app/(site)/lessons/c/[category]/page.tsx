import { AsyncPageProps } from '$/shared/types';
import React from 'react';

const page = async ({ params }: AsyncPageProps) => {
	const rest = await params;
	return <pre>{JSON.stringify(rest, null, 2)}</pre>;
};

export default page;
