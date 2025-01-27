import { Metadata } from 'next'
import { APP_URL } from './url.constants'

export const NO_INDEX_PAGE = { robots: { index: false, follow: false } }

export const SITE_NAME = 'Аль Ханафия'
export const SHORT_NAME = 'Аль Ханафия'

export const SITE_DESCRIPTION = 'Аль Ханафия'

export const SITE_KEYWORDS = ['Аль Ханафия']

export const BASE_SEO_METADATA: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s - ${SITE_NAME}`
	},
	description: SITE_DESCRIPTION,
	metadataBase: new URL(APP_URL),
	applicationName: SITE_NAME,
	keywords: SITE_KEYWORDS,
	generator: 'Next.js',
	creator: '',
	publisher: '',
	icons: {
		icon: '/favicon-192x192.png',
		shortcut: '/favicon-192x192.png',
		apple: '/favicon-192x192.png'
		// other: {
		// 	rel: 'touch-icons',
		// 	url: '/touch-icons/256x256.png',
		// 	sizes: '256x256',
		// 	type: 'image/png'
		// }
	},
	openGraph: {
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		type: 'website',
		emails: [],
		locale: 'ru_RU',
		images: [
			{
				// url: '/touch-icons/512x512.png',
				// width: 512,
				// height: 512,
				url: '/favicon-192x192.png',
				width: '192',
				height: '192',
				alt: SITE_NAME
			}
		],
		url: new URL(APP_URL)
	},
	twitter: {
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		images: [
			{
				// url: '/touch-icons/512x512.png',
				// width: 512,
				// height: 512,
				url: '/favicon-192x192.png',
				width: '192',
				height: '192',
				alt: SITE_NAME
			}
		]
	}
}
