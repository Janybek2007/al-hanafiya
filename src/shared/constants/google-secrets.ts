export const GOOGLE_CLIENT_ID = () => {
	const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
	if (!clientId) {
		throw new Error('Google Client Id - not found');
	}
	return clientId;
};
export const GOOGLE_SECRET_SECRET =
	process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET;
