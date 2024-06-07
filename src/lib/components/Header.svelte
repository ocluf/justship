<script lang="ts">
	import { PUBLIC_PROJECT_NAME } from '$env/static/public';
	import type { Link } from '$lib/types';
	import Container from './Container.svelte';
	import { LogOut, Menu, Ship } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	const links: Array<Link> = [
		{ name: 'About', href: '/#about' },
		{ name: 'Pricing', href: '/#pricing' },
		{ name: 'FAQ', href: '/#faq' }
	];
</script>

<Container>
	<header class="navbar px-0">
		<div class="navbar-start">
			<Ship class="w-10 h-10 mr-3" />
			<div class="text-2xl sm:text-3xl font-bold">{PUBLIC_PROJECT_NAME}</div>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				{#each links as link}
					<li>
						<a href={link.href}>{link.name}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="navbar-end hidden lg:flex">
			{#if $page.data.user}
				<form method="post" class="ml-auto" action="/login?/signout" use:enhance>
					<button type="submit" class="btn">
						<div class="flex items-center text-red-500">
							<LogOut class="mr-2 h-4 w-4" />
							<span>Log out</span>
						</div>
					</button>
				</form>
			{:else}
				<a href="/login" class="btn ml-auto"> <Ship />your CTA / login</a>
			{/if}
		</div>
		<div class="navbar-end lg:hidden">
			{#if $page.data.user}
				<form method="post" class="hidden sm:block ml-auto" action="/login?/signout" use:enhance>
					<button type="submit" class="btn mr-2">
						<div class="flex items-center text-red-500">
							<LogOut class="mr-2 h-4 w-4" />
							<span>Log out</span>
						</div>
					</button>
				</form>
			{:else}
				<a href="/login" class="hidden sm:flex btn ml-auto mr-2"> <Ship />your CTA / login</a>
			{/if}
			<!-- <a href="/" class="btn ml-auto">your call to action</a> -->
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost m-1"><Menu /></div>
				<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
				<ul
					tabindex="0"
					class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
				>
					{#each links as link}
						<li>
							<a href={link.href}>{link.name}</a>
						</li>
					{/each}
					{#if $page.data.user}
						<form
							method="post"
							class="sm:hidden btn mt-5 mb-2 mx-2"
							action="/login?/signout"
							use:enhance
						>
							<button type="submit">
								<div class="flex items-center text-red-500">
									<LogOut class="mr-2 h-4 w-4" />
									<span>Log out</span>
								</div>
							</button>
						</form>
					{:else}
						<a href="/login" class="sm:hidden btn mt-5 mb-2 mx-2"> <Ship />your CTA / login</a>
					{/if}
				</ul>
			</div>
		</div>
	</header>
</Container>
