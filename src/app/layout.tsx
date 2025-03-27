import { BASE_SEO_METADATA, SITE_NAME } from '$/shared/constants/seo.constants';
import { RootProvider } from '$/shared/providers';
import type { Metadata } from 'next';
import './styles/globals.css';
import { APP_URL } from '$/shared/constants/url.constants';
import Script from 'next/script';

export const metadata: Metadata = BASE_SEO_METADATA;

export default function RootLayout({
	children
}: Readonly<React.PropsWithChildren>) {
	return (
		<html lang='ru' suppressHydrationWarning>
			<head>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
				/>
				<Script
					id='ld+json'
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'WebSite',
							name: SITE_NAME,
							url: APP_URL,
							publisher: {
								'@type': 'Organization',
								name: 'Лидер Умра',
								logo: {
									'@type': 'ImageObject',
									url: `${APP_URL}/seo/android-chrome-192x192.png`
								}
							}
						})
					}}
				/>
			</head>
			<body>
				<div className='wrapper'>
					<RootProvider>{children}</RootProvider>
				</div>
			</body>
		</html>
	);
}
