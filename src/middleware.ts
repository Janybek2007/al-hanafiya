import { NextRequest, NextResponse } from 'next/server';
import { onFetch } from './shared/api';

const privatePages = ['/account*'];

export default async function middleware(req: NextRequest) {
	try {
		const { pathname } = req.nextUrl;

		let isAuthenticated = false;
		const response = await onFetch('/auth/accounts/me');
		isAuthenticated = response?.isSuccess === true;

		const isPrivatePage = privatePages.some(page =>
			new RegExp(`^${page.replace('*', '.*')}$`).test(pathname)
		);

		if (!isAuthenticated && isPrivatePage) {
			const loginUrl = new URL('/', req.url);
			return NextResponse.redirect(loginUrl);
		}

		if (isAuthenticated && pathname.startsWith('/auth')) {
			const dashboardUrl = new URL('/account/me', req.url);
			return NextResponse.redirect(dashboardUrl);
		}

		return NextResponse.next();
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (e) {
		return NextResponse.next();
	}
}

export const config = {
	matcher: ['/:path*']
};
