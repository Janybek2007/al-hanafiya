/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextConfig } from 'next';
import withPWA from 'next-pwa';

const nextConfig = withPWA({
	dest: 'public',
	disable: process.env.NODE_ENV === 'development',
	register: true,
	sw: '/service-worker.js'
})({
	devIndicators: {
		// @ts-expect-error
		appIsrStatus: false
	},
	output: "standalone"
} satisfies NextConfig);

export default nextConfig;
