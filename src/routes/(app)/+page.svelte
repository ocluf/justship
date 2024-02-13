<script>
	import { Button } from '$lib/components/ui/button';
	import { Github, PiggyBank } from 'lucide-svelte';
</script>

<div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Just Ship</h2>
		<p class="mt-6 text-lg leading-8 text-gray-600">
			Skip the boring parts of making a web app. A completely <b>free</b> and <b>open source</b> sveltekit
			starter template.
		</p>
		<div class="flex space-x-4 mt-6 w-fit mx-auto">
			<a href="https://github.com/ocluf/justship">
				<Button variant="outline"><Github class="mr-2" />Github</Button>
			</a>
			<a href="https://buy.stripe.com/eVa8yug4m2Z86nm9AB">
				<Button><PiggyBank class="mr-2" />Buy me a coffee</Button>
			</a>
		</div>
	</div>
</div>

<h2 class="text-center text-4xl font-bold">Comes with</h2>

<div class="grid md:grid-cols-2 gap-x-20 w-fit mx-auto text-xl my-5 md:my-10">
	<li>Login with Google and magic link</li>
	<li>Sveltekit and Svelte 5</li>
	<li>Vercel for Hosting</li>
	<li>Turso as the database</li>
	<li>Rewind for email</li>
	<li>Lucia 3 for auth</li>
	<li>Superforms 2</li>
	<li>shadcn-svelte and tailwind</li>
</div>
