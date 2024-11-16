<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="container my-10">
	<pre>{JSON.stringify(data.user, null, 2)}</pre>
</div>
