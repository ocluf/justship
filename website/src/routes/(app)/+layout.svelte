<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { CircleUserRound, LogOut, Ship } from 'lucide-svelte';
	import { enhance } from '$app/forms';
	let { data, children } = $props();
</script>

<header
	class="sticky py-2 px-4 sm:px-6 lg:px-8 top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 max-w-[85rem] mx-auto"
>
	<div class="flex items-center">
		<a href="/" class="font-bold text-lg">
			{env.PUBLIC_PROJECT_NAME}
		</a>
		<div class="ml-20 mr-auto">
			<a href="/docs" class="opacity-85 hover:opacity-100">Docs</a>
		</div>
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
					<a class="btn btn-ghost" href="/login">Sign in</a>
				</div>
			{/if}
		</div>
	</div>
</header>
{@render children()}
