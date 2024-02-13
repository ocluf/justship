<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { PUBLIC_PROJECT_NAME } from '$env/static/public';
	import { tick } from 'svelte';
	import Google from '$lib/components/icons/Google.svelte';
	import { superForm } from 'sveltekit-superforms';
	import { Separator } from '$lib/components/ui/separator';
	import { Mail, Ship } from 'lucide-svelte';

	const { data } = $props();

	let show_email_input = $state(false);
	let email_input: HTMLInputElement;
	let email_sent = $state(false);

	const { form, enhance, errors } = superForm(data.form, {
		onResult(event) {
			console.log(event);
			if (event.result.type === 'success') {
				email_sent = true;
			}
			if (event.result.type === 'error') {
				console.error(event.result);
			}
		}
	});

	const handleEmail = async () => {
		if (!show_email_input) {
			show_email_input = true;
			await tick();
			email_input.focus();
		}
	};
</script>

<div class="flex p-5 items-center justify-center h-screen">
	<Card.Root class="flex flex-col w-full max-w-[470px] ">
		<Card.Content>
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
						<Ship class="h-12 w-12 my-4" />
					</div>
					<div class="mx-auto text-3xl font-semibold leading-none tracking-tight">
						Welcome to {PUBLIC_PROJECT_NAME}
					</div>
				</div>
				{#if data.user}
					<a href="/">
						<Button size="lg" class="font-semibold text-md md:text-lg mt-4 w-full"
							>Continue with current account</Button
						>
					</a>
					<p class="text-muted-foreground text-center text-sm my-3">
						Signed in as {data.user.email}
					</p>
					<Separator class="mb-4" />
				{:else}
					<a href="/login/google">
						<Button size="lg" class="font-semibold text-md md:text-lg mt-4 w-full"
							><Google class="w-4 mr-3" />Continue with Google</Button
						>
					</a>{/if}

				{#if data.user}
					<form method="post" action="/login?/signout">
						<Button
							type="submit"
							size="lg"
							class="font-semibold text-md sm:text-lg mt-2 w-full"
							variant="outline">Sign in with a different account</Button
						>
					</form>
				{:else}
					<!-- Classes are the same as the normal Input component except for py. But needed a normal input element to call .focus() in handleEmail-->
					<form method="post" action="/login?/login_with_email" use:enhance>
						<input
							bind:this={email_input}
							placeholder="Email"
							type="email"
							name="email"
							class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-4 text-md md:text-lg ring-offset-background file:border-0 file:bg-transparent file:text-lg file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50; mt-6"
							class:hidden={!show_email_input}
						/>
						{#if $errors.email}<span class="text-red-500 text-xs mt-2 ml-1">{$errors.email}</span
							>{/if}

						{#if show_email_input}
							<Button
								type="submit"
								size="lg"
								class="font-semibold text-md sm:text-lg mt-2 w-full"
								variant="outline">Continue</Button
							>
						{:else}
							<Button
								onclick={handleEmail}
								type="button"
								size="lg"
								class="font-semibold text-md sm:text-lg mt-2 w-full"
								variant="outline">Continue with email</Button
							>{/if}
					</form>
				{/if}
			{/if}
		</Card.Content>
	</Card.Root>
</div>
