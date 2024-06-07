<script lang="ts">
	import { PUBLIC_PROJECT_NAME } from '$env/static/public';
	import { tick } from 'svelte';
	import Google from '$lib/components/icons/Google.svelte';
	import { superForm } from 'sveltekit-superforms';
	import { Mail, Laugh } from 'lucide-svelte';

	const { data } = $props();

	let email_input: HTMLInputElement | null = $state(null);
	let show_email_input = $state(false);
	let email_sent = $state(false);

	const { enhance, errors, submitting } = superForm(data.form, {
		onResult(event) {
			console.log(event);
			if (event.result.type === 'success') {
				email_sent = true;
			}
		}
	});

	const handleEmail = async () => {
		if (!show_email_input && email_input) {
			show_email_input = true;
			await tick();
			email_input.focus();
		}
	};
</script>

<svelte:head>
	<title>Svelte Saas Boilerplate</title>
	<meta
		name="description"
		content="The free and open-source Svelte 5 and SvelteKit SaaS boilerplate that gets you shipping fast. Includes authentication with magic link and Google, email, styling with Tailwind CSS and DaisyUI, and Turso for the database."
	/>
</svelte:head>

<div class="flex p-5 items-center justify-center h-screen">
	<div class="card p-5 flex flex-col w-full max-w-[470px]">
		{#if email_sent}
			<div class="text-center">
				<Mail size="40" class="mx-auto my-4" />
				<div class="text-3xl font-bold leading-none tracking-tight">Check your inbox</div>
				<div class="mt-4 text-muted-primary text-lg opacity-80 max-w-[32ch] mx-auto">
					We've sent you an activation link. Please be sure to check your spam folder too.
				</div>
			</div>
		{:else}
			<div class="my-4 flex flex-col space-y-1.5 text-center w-full">
				<div class="mx-auto w-fit">
					<Laugh class="h-12 w-12 my-4" />
				</div>
				<div class="mx-auto text-3xl font-semibold leading-none tracking-tight">
					Welcome to {PUBLIC_PROJECT_NAME}
				</div>
			</div>
			{#if data.user}
				<a href="/" class="btn btn-primary font-semibold text-md md:text-lg mt-4 w-full"
					>Continue with current account
				</a>
				<p class="opacity-70 text-center text-sm my-3">
					Signed in as {data.user.email}
				</p>
			{:else}
				<a href="/login/google" class="btn btn-primary font-semibold text-md md:text-lg mt-4 w-full"
					><Google class="w-4 mr-3" />Continue with Google
				</a>{/if}

			{#if data.user}
				<form method="post" action="/login?/signout">
					<button type="submit" class="btn btn-ghost font-semibold text-md sm:text-lg mt-2 w-full"
						>Sign in with a different account
					</button>
				</form>
			{:else}
				<form method="post" action="/login?/login_with_email" use:enhance>
					<input
						bind:this={email_input}
						placeholder="Email"
						type="email"
						name="email"
						class="input w-full my-5"
						class:hidden={!show_email_input}
					/>
					{#if $errors.email}
						<span class="text-red-500 text-xs mt-2 ml-1">{$errors.email}</span>
					{/if}

					{#if show_email_input}
						<button
							type="submit"
							disabled={$submitting}
							class="btn font-semibold text-md sm:text-lg w-full"
						>
							{#if $submitting}
								<span class="loading loading-spinner loading-xs mr-2"></span>
							{/if}
							<span>Continue</span>
						</button>
					{:else}
						<button
							onclick={handleEmail}
							type="button"
							class="btn font-semibold text-md sm:text-lg mt-4 w-full"
							>Continue with email
						</button>{/if}
				</form>
			{/if}
		{/if}
	</div>
</div>
