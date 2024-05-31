import posthog from 'posthog-js';
import { browser } from '$app/environment';

export const load = async () => {
	if (browser) {
		posthog.init('phc_KIdxWocwGarElqZABLSDNfLdtRvpV4xv4pszQbfAo3R', {
			api_host: 'https://www.justship.today/ingest',
			ui_host: 'https://us.posthog.com',
			capture_pageview: false,
			capture_pageleave: false
		});
	}
	return;
};
