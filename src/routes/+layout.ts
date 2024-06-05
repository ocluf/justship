import posthog from 'posthog-js';
import { browser, dev } from '$app/environment';
import {
	PUBLIC_DEFAULT_DESCRIPTION,
	PUBLIC_DEFAULT_TITLE,
	PUBLIC_ORIGIN,
	PUBLIC_POSTHOG_KEY
} from '$env/static/public';
import type { DefaultSeo } from '$lib/types';

export const load = async () => {
	if (browser && !dev) {
		posthog.init(PUBLIC_POSTHOG_KEY, {
			api_host: `${PUBLIC_ORIGIN}/ingest`,
			ui_host: 'https://us.posthog.com',
			capture_pageview: false,
			capture_pageleave: false
		});
	}
	const seo: DefaultSeo = {
		pageTitle: PUBLIC_DEFAULT_TITLE,
		pageDescription: PUBLIC_DEFAULT_DESCRIPTION,
		twitterCard: 'summary_large_image',
		twitterSite: PUBLIC_ORIGIN,
		twitterImage: `${PUBLIC_ORIGIN}/socialcard.jpg`,
		ogType: 'website',
		ogUrl: PUBLIC_ORIGIN,
		ogImage: `${PUBLIC_ORIGIN}/socialcard.jpg`
	};
	return seo;
};
