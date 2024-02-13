<script lang="ts">
	import { env } from '$env/dynamic/public';
	import Button from '$lib/components/ui/button/button.svelte';
	import { CircleUserRound, LogOut, Ship } from 'lucide-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import DropdownMenuSeparator from '$lib/components/ui/dropdown-menu/dropdown-menu-separator.svelte';
	import { enhance } from '$app/forms';

	let { data } = $props();
</script>

<header
	class="sticky p-2 top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="flex">
		<a href="/" class="flex items-center space-x-2">
			<Ship class="h-8 w-8" />
			<div class="font-bold text-lg">{env.PUBLIC_PROJECT_NAME}</div>
		</a>

		{#if data.user}
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button builders={[builder]} class="ml-auto" variant="ghost">
						<CircleUserRound />
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="w-56">
					<DropdownMenu.Label class="font-normal">
						<div class="flex flex-col space-y-1">
							<p class="text-sm font-medium leading-none">{env.PUBLIC_PROJECT_NAME}</p>
							<p class="text-xs leading-none text-muted-foreground">{data.user.email}</p>
						</div>
					</DropdownMenu.Label>
					<DropdownMenuSeparator />
					<form method="post" action="/login?/signout" use:enhance>
						<button type="submit" class="w-full">
							<DropdownMenu.Item class="text-red-500">
								<LogOut class="mr-2 h-4 w-4" />
								<span>Log out</span>
							</DropdownMenu.Item>
						</button>
					</form>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		{:else}
			<a class="ml-auto" href="/login"
				><Button variant="outline" class="font-bold text-md">Sign in</Button></a
			>
		{/if}
	</div>
</header>
<slot />
