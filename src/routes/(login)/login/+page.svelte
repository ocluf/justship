<script lang="ts">
	import type { PageData } from './$types.js';
	import Login from '$lib/components/login/Login.svelte';

	let { data }: { data: PageData } = $props();
</script>

{#if data.user}
	<a href="/" class="btn btn-primary font-semibold text-md md:text-lg mt-4 w-full"
		>Continue with current account
	</a>
{:else}
	<div class="flex items-center justify-center min-h-[90vh]">
		<Login data={data.form} />
	</div>
{/if}
