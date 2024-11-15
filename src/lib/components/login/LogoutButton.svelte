<script>
	import { enhance } from '$app/forms';
	import { LogOut } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<form method="post" class="ml-auto" action="/login?/signout" use:enhance>
	<Button type="submit" variant="outline">
		<div class="flex items-center text-red-500">
			<LogOut class="mr-2 h-4 w-4" />
			<span>Log out</span>
		</div>
	</Button>
</form>
