<script lang="ts">
	import { Check, Copy } from 'lucide-svelte';

	let { text }: { text: string } = $props();

	let copied = $state(false);

	function copy() {
		navigator.clipboard.writeText(text);
		copied = true;
		setTimeout(() => (copied = false), 1000);
	}
</script>

{#if copied}
	<Check class="w-10 cursor-pointer text-green-500"></Check>
{:else}
	<Copy onclick={copy} class="w-10 cursor-pointer"></Copy>
{/if}
