import { BASE_SEO_METADATA } from '$/shared/constants/seo.constants';
import { RootProvider } from '$/shared/providers';
import type { Metadata } from 'next';
import './styles/globals.css';

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
			</head>
			<body>
				<div className='wrapper'>
					<RootProvider>{children}</RootProvider>
				</div>
			</body>
		</html>
	);
}
