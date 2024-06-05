<script>
	import '../app.css';
	import posthog from 'posthog-js';
	import { browser, dev } from '$app/environment';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	let { children } = $props();
	if (browser && !dev) {
		beforeNavigate(() => posthog.capture('$pageleave'));
		afterNavigate(() => posthog.capture('$pageview'));
	}
</script>

<svelte:head>
	<title>{$page.data.pageTitle}</title>
	<meta name="description" content={$page.data.pageDescription} />
	<meta
		name="twitter:title"
		content={$page.data.twitterTitle ? $page.data.twitterTitle : $page.data.pageTitle}
	/>
	<meta
		name="twitter:description"
		content={$page.data.twitterDescription
			? $page.data.twitterDescription
			: $page.data.pageDescription}
	/>
	<meta name="twitter:card" content={$page.data.twitterCard} />
	<meta name="twitter:site" content={$page.data.twitterSite} />
	<meta property="og:url" content={$page.data.ogUrl} />
	<meta property="og:type" content={$page.data.ogType} />
	<meta
		property="og:title"
		content={$page.data.ogTitle ? $page.data.ogTitle : $page.data.pageTitle}
	/>
	<meta
		property="og:description"
		content={$page.data.ogDescription ? $page.data.ogDescription : $page.data.pageDescription}
	/>
	<meta property="og:image" content={$page.data.ogImage} />
</svelte:head>
{@render children()}
