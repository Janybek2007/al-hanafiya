import React from 'react';

const page = (arg: Record<string, string>) => {
	return <pre>{JSON.stringify(arg, null, 2)}</pre>;
};

export default page;
