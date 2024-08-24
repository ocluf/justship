<script>
	import '../app.css';
	import posthog from 'posthog-js';
	import { browser, dev } from '$app/environment';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { getMeta } from '$lib/meta';
	import {
		PUBLIC_DEFAULT_DESCRIPTION,
		PUBLIC_DEFAULT_TITLE,
		PUBLIC_PROJECT_NAME
	} from '$env/static/public';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();

	if (browser && !dev) {
		beforeNavigate(() => posthog.capture('$pageleave'));
		afterNavigate(() => posthog.capture('$pageview'));
	}
	const meta = $derived(
		getMeta({
			defaultTitle: PUBLIC_DEFAULT_TITLE,
			defaultDescription: PUBLIC_DEFAULT_DESCRIPTION,
			defaultOGImage: '/socialcard.jpeg',
			routeMeta: $page.data?.meta ?? {},
			url: $page.url,
			pageParam: $page.params?.page ?? ''
		})
	);
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width" />
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<link rel="canonical" href={meta.canonicalUrl} />

	<!--
		  Icons
		  - https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs
			(Usually kept up to date.)
		  - `.ico` is fallback for RSS readers & browsers that don't support SVG:
			 https://caniuse.com/link-icon-svg
	  - `manifest.webmanifest` includes links to 192x192 & 512x512 PNGs.
	  - `apple-touch-icon` is 180x180, but we can use our 192x192 instead.
	  -->

	<link rel="icon" href="/favicon.ico" sizes="32x32" />
	<link rel="icon" href="/icon.svg" type="image/svg+xml" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/manifest.webmanifest" />

	<!--
		Open Graph
		- https://ahrefs.com/blog/open-graph-meta-tags/
	  - https://developers.facebook.com/docs/sharing/webmasters#markup
	  - 1200x630px; `og:height` & `og:width` tags are optional; excluding for minimalism.
	  - For `og:type`, use `article` for blog posts & `website` for the rest (blog index, pages, etc).
		- `og:url` is always the canonical URL.
	  - `og:title` & `og:description` are usually same as page title & meta description, but if those
		  are full of SEO keywords, then the og versions could be different.
	-->

	<meta property="og:type" content={meta.ogType} />
	<meta property="og:title" content={meta.ogTitle} />
	<meta property="og:description" content={meta.ogDescription} />
	<meta property="og:image" content={meta.ogImage} />
	<meta property="og:url" content={meta.ogUrl} />

	<!--
	  Twitter
	  - Twitter uses OG's url, title, description, & image tags.
			https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
	  -->
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Header></Header>
{@render children()}
