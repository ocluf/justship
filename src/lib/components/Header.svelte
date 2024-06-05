<script lang="ts">
	import { PUBLIC_PROJECT_NAME } from '$env/static/public';
	import type { Link } from '$lib/types';
	import Container from './Container.svelte';
	import { Menu, Ship } from 'lucide-svelte';

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
			<a href="/login" class="btn ml-auto"> <Ship />your CTA / login</a>
		</div>
		<div class="navbar-end lg:hidden">
			<a href="/login" class="hidden sm:flex btn ml-auto mr-2"> <Ship />your CTA / login</a>
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
					<a href="/login" class="sm:hidden btn mt-5 mb-2 mx-2"> <Ship />your CTA / login</a>
				</ul>
			</div>
		</div>
	</header>
</Container>
