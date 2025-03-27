import { APP_URL } from '$/shared/constants/url.constants';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		{ url: APP_URL, lastModified: new Date().toISOString() },
		{ url: `${APP_URL}/articles`, lastModified: new Date().toISOString() },
		{ url: `${APP_URL}/lessons`, lastModified: new Date().toISOString() },
		{ url: `${APP_URL}/profile`, lastModified: new Date().toISOString() },
		{ url: `${APP_URL}/questions`, lastModified: new Date().toISOString() }
	];
}
