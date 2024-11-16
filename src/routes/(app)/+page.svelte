<script lang="ts">
	import Container from '$lib/components/Container.svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<Container>
	<div class="my-10">
		<pre>{JSON.stringify(data.user, null, 2)}</pre>
	</div>
</Container>
