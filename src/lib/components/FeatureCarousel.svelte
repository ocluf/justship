<script lang="ts">
	// even though it works typescript complains about onemblaInit instead of on:emblaInit
	import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	import { Aperture, Dice6, Drama, Factory, Smile } from 'lucide-svelte';
	import Container from './Container.svelte';

	let emblaApi: EmblaCarouselType;
	let index = $state(0);

	const options: EmblaOptionsType = {
		align: 'center',
		loop: true,
		inViewThreshold: 1
	};

	function updateSelected(emblaApi: EmblaCarouselType): void {
		let slidesIndexes = emblaApi.slidesInView();
		if (slidesIndexes.length > 0) {
			index = slidesIndexes[0];
		}
	}

	function onInit(event: { detail: EmblaCarouselType }) {
		emblaApi = event.detail;
		emblaApi.on('slidesInView', updateSelected);
	}

	function setIndex(newIndex: number) {
		index = newIndex;
		emblaApi.scrollTo(index);
	}
</script>

<Container>
	<div class="py-24 md:py-32">
		<h2 class="font-bold text-2xl md:text-4xl mb-16 text-center">
			Everything you need to fix your problem right now
		</h2>
		<!-- on mobile show small icons without text -->
		<div class="w-fit mx-auto mb-5 sm:hidden">
			<div class="join">
				<button class:btn-primary={index === 0} class="join-item btn" onclick={() => setIndex(0)}
					><Smile />
				</button>
				<button class:btn-primary={index === 1} class="join-item btn" onclick={() => setIndex(1)}
					><Dice6 /></button
				>
				<button class:btn-primary={index === 2} class="join-item btn" onclick={() => setIndex(2)}
					><Aperture /></button
				>
				<button class:btn-primary={index === 3} class="join-item btn" onclick={() => setIndex(3)}
					><Drama /></button
				>
				<button class:btn-primary={index === 4} class="join-item btn" onclick={() => setIndex(4)}
					><Factory /></button
				>
			</div>
		</div>

		<!-- on desktop show large icons with text -->
		<div class="hidden w-fit mx-auto space-x-10 sm:flex">
			<button
				class:text-primary={index === 0}
				class="flex flex-col items-center"
				onclick={() => setIndex(0)}
				><Smile class="w-10 h-10" />
				<div class="text-xl font-semibold mt-2">Smile</div>
			</button>
			<button
				class:text-primary={index === 1}
				class="flex flex-col items-center"
				onclick={() => setIndex(1)}
				><Dice6 class="w-10 h-10" />
				<div class="text-xl font-semibold mt-2">Dice</div></button
			>
			<button
				class:text-primary={index === 2}
				class="flex flex-col items-center"
				onclick={() => setIndex(2)}
				><Aperture class="w-10 h-10" />
				<div class="text-xl font-semibold mt-2">Aperture</div></button
			>
			<button
				class:text-primary={index === 3}
				class="flex flex-col items-center"
				onclick={() => setIndex(3)}
				><Drama class="w-10 h-10" />
				<div class="text-xl font-semibold mt-2">Drama</div></button
			>
			<button
				class:text-primary={index === 4}
				class="flex flex-col items-center"
				onclick={() => setIndex(4)}
				><Factory class="w-10 h-10" />
				<div class="text-xl font-bold mt-2">Factory</div></button
			>
		</div>
		<div class="embla pt-14">
			<div
				class="embla__viewport"
				use:emblaCarouselSvelte={{ options, plugins: [] }}
				onemblaInit={onInit}
			>
				<div class="embla__container">
					<div class="embla__slide">
						<div
							class="rounded-xl flex items-center justify-center text-xl font-bold h-80 bg-slate-100"
						>
							<span>feature 1</span>
						</div>
					</div>
					<div class="embla__slide">
						<div
							class="rounded-xl flex items-center justify-center text-xl font-bold h-80 bg-slate-100"
						>
							<span>feature 2</span>
						</div>
					</div>
					<div class="embla__slide">
						<div
							class="rounded-xl flex items-center justify-center text-xl font-bold h-80 bg-slate-100"
						>
							<span>feature 3</span>
						</div>
					</div>
					<div class="embla__slide">
						<div
							class="rounded-xl flex items-center justify-center text-xl font-bold h-80 bg-slate-100"
						>
							<span>feature 4</span>
						</div>
					</div>
					<div class="embla__slide">
						<div
							class="rounded-xl flex items-center justify-center text-xl font-bold h-80 bg-slate-100"
						>
							<span>feature 5</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</Container>

<style>
	.embla {
		margin: auto;
		--slide-height: 19rem;
		--slide-spacing: 1rem;
		--slide-size: 70%;
	}
	.embla__viewport {
		overflow: hidden;
	}
	.embla__container {
		backface-visibility: hidden;
		display: flex;
		touch-action: pan-y pinch-zoom;
	}
	.embla__slide {
		flex: 0 0 var(--slide-size);
		min-width: 0;
		padding-left: var(--slide-spacing);
	}
</style>
