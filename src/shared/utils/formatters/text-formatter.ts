const toSlug = (str: string): string => {
	return str.toLowerCase().replace(/\s+/g, '-').replace(/_/g, '-');
};

const truncate = (text: string, maxLength: number) => {
	if (text.length <= maxLength) return text;
	const trimmedText = text.slice(0, maxLength);
	return trimmedText.slice(0, trimmedText.lastIndexOf(' ')) + '...';
};

export const text$ = {
	toSlug,
	truncate
};
