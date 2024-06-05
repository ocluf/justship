<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { LogOut } from 'lucide-svelte';
	import { enhance } from '$app/forms';
	import Header from '$lib/components/Header.svelte';

	let { data, children } = $props();

	const links = [
		{ name: 'Pricing', href: '/' },
		{ name: 'Demo', href: '/' },
		{ name: 'Blog', href: '/' }
	];
</script>

<Header {links}></Header>
<!-- <header
	class="sticky p-2 top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="flex">
		<a href="/" class="font-bold text-lg mix-blend-difference">
			{env.PUBLIC_PROJECT_NAME}
		</a>

		<div class="ml-auto">
			{#if data.user}
				<form method="post" action="/login?/signout" use:enhance>
					<button type="submit" class="btn">
						<div class="flex items-center text-red-500">
							<LogOut class="mr-2 h-4 w-4" />
							<span>Log out</span>
						</div>
					</button>
				</form>
			{:else}
				<div class="flex space-x-5">
					<a class=" btn btn-ghost" href="/login">Sign in</a>
				</div>
			{/if}
		</div>
	</div>
</header> -->
{@render children()}
