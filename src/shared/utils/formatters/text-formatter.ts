const toSlug = (str: string): string => {
	return str.toLowerCase().replace(/\s+/g, '-').replace(/_/g, '-');
};

export const text$ = {
	toSlug
};
