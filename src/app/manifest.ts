import { SITE_DESCRIPTION, SITE_NAME } from '$/shared/constants/seo.constants'
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: SITE_NAME,
		short_name: SITE_NAME,
		description: SITE_DESCRIPTION,
		start_url: '/',
		orientation: 'portrait',
		display: 'standalone',
		background_color: '#ffffff',
		theme_color: '#000000',
		icons: [
			{
				src: '/favicon-192x192.png',
				sizes: '192x192',
				type: 'image/png'
			},
			{
				src: '/favicon-512x512.png',
				sizes: '512x512',
				type: 'image/png'
			}
		]
	}
}
