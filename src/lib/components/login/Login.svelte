<script lang="ts">
	import { zodClient } from 'sveltekit-superforms/adapters';
	import * as Form from '$lib/components/ui/form/index';
	import { Input } from '$lib/components/ui/input/index';
	import { loginFormSchema, type LoginFormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { Button, buttonVariants } from '../ui/button';
	import Google from '$lib/components/icons/Google.svelte';
	import { twMerge } from 'tailwind-merge';
	import { tick } from 'svelte';
	import { Mail } from 'lucide-svelte';

	let { data }: { data: SuperValidated<Infer<LoginFormSchema>> } = $props();
	let email_input: HTMLInputElement | null = $state(null);
	let loginWithEmail = $state(false);
	let email_sent = $state(false);

	const form = superForm(data, {
		validators: zodClient(loginFormSchema),
		onResult(event) {
			console.log(event);
			if (event.result.type === 'success') {
				email_sent = true;
			}
		}
	});
	const { form: formData, enhance } = form;

	async function handleLoginWithEmail() {
		loginWithEmail = true;
		await tick();
		email_input?.focus();
	}
</script>

<div class="flex flex-col gap-6 p-10 min-w-[365px] w-fit">
	{#if email_sent}
		<div class="text-center">
			<Mail size="40" class="mx-auto my-4" />
			<div class="text-3xl font-bold leading-none tracking-tight">Check your inbox</div>
			<div class="mt-4 text-muted-primary text-lg opacity-80 max-w-[32ch] mx-auto">
				We've sent you an activation link. Please be sure to check your spam folder too.
			</div>
		</div>
	{:else}
		<a
			href="/login/google"
			class={twMerge(
				buttonVariants({ variant: 'outline', size: 'lg' }),
				'flex items-center gap-2 max-w-xs'
			)}
		>
			<span class="flex items-center gap-2">
				<Google class="h-4 w-4" />
				Continue with Google</span
			></a
		>
		{#if loginWithEmail}
			<form class="max-w-xs" method="POST" action="/login?/login_with_email" use:enhance>
				<Form.Field {form} name="email">
					<Form.Control>
						{#snippet children({ props })}
							<Input
								bind:ref={email_input}
								{...props}
								placeholder="Email"
								bind:value={$formData.email}
							/>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Button class="w-full">Continue</Form.Button>
			</form>
		{:else}
			<Button variant="outline" size="lg" class="max-w-xs w-full " onclick={handleLoginWithEmail}
				>Continue with email</Button
			>
		{/if}
	{/if}
</div>
