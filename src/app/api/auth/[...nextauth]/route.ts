/* eslint-disable @typescript-eslint/no-explicit-any */
import { onFetch } from '$/shared/api';
import { LoginWithResponse } from '$/widgets/login-modal/types';
import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { cookies } from 'next/headers';

const authOptions: AuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
			clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!
		})
	],
	callbacks: {
		async jwt({ token, account }) {
			const id_token = account?.id_token;
			const _cookies = await cookies();
			if (id_token) {
				const { data } = await onFetch<LoginWithResponse>(
					'/auth/accounts/google_auth/',
					{
						method: 'POST',
						body: JSON.stringify({ token: id_token })
					}
				);
				if (data.token) {
					_cookies.set('token', data.token);
				}
			}
			return token;
		},
		async session({ session, token }: any) {
			if (token) {
				session.id = token.id;
				session.accessToken = token.accessToken;
			}
			return session;
		}
	},
	secret: process.env.NEXTAUTH_SECRET
};

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
