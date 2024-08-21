import * as sitemap from 'super-sitemap';
import type { RequestHandler } from '@sveltejs/kit';
import { PUBLIC_ORIGIN } from '$env/static/public';

export const GET: RequestHandler = async () => {
	return await sitemap.response({
		origin: PUBLIC_ORIGIN,
		excludeRoutePatterns: ['^/stripe/.*', '.*\\(login\\).*']
	});
};
