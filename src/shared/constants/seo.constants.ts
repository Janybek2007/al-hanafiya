import { Metadata } from 'next';
import { APP_URL } from './url.constants';

export const NO_INDEX_PAGE = {
	robots: { index: false, follow: false },
	'max-snippet': -1,
	'max-image-preview': 'large',
	'max-video-preview': -1
};

export const SITE_NAME = 'Аль Ханафия';
export const SHORT_NAME = 'Аль Ханафия';

export const SITE_DESCRIPTION = 'Аль Ханафия';

export const SITE_KEYWORDS = ['Аль Ханафия'];

export const BASE_SEO_METADATA: Metadata = {
	title: SITE_NAME,
	description: SITE_DESCRIPTION,
	metadataBase: new URL(APP_URL),
	applicationName: SITE_NAME,
	keywords: SITE_KEYWORDS,
	generator: 'iant.kg',
	creator: 'iant.kg',
	publisher: 'iant.kg',
	alternates: { canonical: `${APP_URL}` },
	icons: {
		icon: '/favicon-192x192.png',
		shortcut: '/favicon-192x192.png',
		apple: '/favicon-192x192.png'
		// other: [{
		// 	rel: 'touch-icons',
		// 	url: '/touch-icons/256x256.png',
		// 	sizes: '256x256',
		// 	type: 'image/png'
		// }]
	},
	openGraph: {
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		type: 'website',
		locale: 'kg_KG',
		siteName: SITE_NAME,
		countryName: 'Kyrgyzstan',
		url: new URL(APP_URL),
		images: [
			{
				// url: '/touch-icons/512x512.png',
				// width: 512,
				// height: 512,
				url: '/favicon-192x192.png',
				width: '192',
				height: '192'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		images: [
			{
				// url: '/touch-icons/512x512.png',
				// width: 512,
				// height: 512,
				url: '/favicon-192x192.png',
				width: '192',
				height: '192'
			}
		]
	},
	other: {
		'theme-color': '#ffffff',
		'msapplication-TileColor': '#ffffff'
		// 'msapplication-TileImage': '/seo/android-chrome-192x192.png'
	}
};
