export const APP_URL = String(process.env.NEXT_PUBLIC_APP_URL);
export const API_URL = String(process.env.NEXT_PUBLIC_API_URL);

export const ApiMedia = (url: string) => {
	return API_URL + url;
};
