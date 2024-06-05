<script lang="ts">
	import type { Faq } from '$lib/types';
	import Container from './Container.svelte';

	const faqs: Array<Faq> = [
		{
			question: 'What is Just Ship?',
			answer: 'test'
		},
		{
			question: 'How do I get started?',
			answer: 'test'
		},
		{
			question: 'How can I support Just Ship?',
			answer: 'test'
		}
	];
</script>

<Container>
	<div id="faq" class="max-w-2xl mx-auto py-24 sm:py-32">
		<div class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-center">FAQ</div>
		<div class="mt-2 sm:mt-4 text-md sm:text-lg leading-6 sm:leading-8 text-center">
			Still have questions? We've got you covered!
		</div>
		<div class="mt-5 md:mt-8 lg:mt-10">
			<div class="join join-vertical w-full">
				{#each faqs as faq}
					<div class="collapse collapse-arrow join-item border">
						<input type="radio" name="accordion" />
						<div class="collapse-title text-xl font-medium">
							{faq.question}
						</div>
						<div class="collapse-content">
							<p>{@html faq.answer}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</Container>
