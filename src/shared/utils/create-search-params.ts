export const createSearchParams = (params: object): URLSearchParams => {
	const filteredParams = Object.entries(params).reduce((acc, [key, value]) => {
		if (value !== undefined && value !== null) {
			acc[key] = String(value);
		}
		return acc;
	}, {} as Record<string, string>);

	return new URLSearchParams(filteredParams);
};
