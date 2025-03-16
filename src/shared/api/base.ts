import { cookies } from 'next/headers';
import { API_URL } from '../constants/url.constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function onFetch<T = any>(url: string, options?: RequestInit) {
	const _cookies = await cookies();
	const token = _cookies.get('token');

	try {
		const response = await fetch(`${API_URL}/api${url}`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${token?.value}`
			},
			method: options?.method,
			body: options?.body,
			credentials: 'omit'
		});
		const jsonData = (await response.json()) as T;
		if (!response.ok) {
			return { data: jsonData, isError: true, isSuccess: false };
		}
		return { data: jsonData, isError: false, isSuccess: true };
	} catch (error) {
		throw error;
	}
}
