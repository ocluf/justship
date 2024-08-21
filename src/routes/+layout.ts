import posthog from 'posthog-js';
import { browser, dev } from '$app/environment';
import { PUBLIC_ORIGIN, PUBLIC_POSTHOG_KEY } from '$env/static/public';

export const load = async () => {
	if (browser && !dev) {
		posthog.init(PUBLIC_POSTHOG_KEY, {
			api_host: `${PUBLIC_ORIGIN}/ingest`,
			ui_host: 'https://us.posthog.com',
			capture_pageview: false,
			capture_pageleave: false
		});
	}
};
