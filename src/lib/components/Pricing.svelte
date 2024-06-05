<script lang="ts">
	import { Check, Ship, X } from 'lucide-svelte';
	import Container from './Container.svelte';

	const featuresBasic = {
		included: ['Feature 1', 'Feature 2', 'Feature 3'],
		excluded: ['Feature 4', 'Feature 5', 'Feature 6']
	};

	const featuresPremium = {
		included: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6']
	};
</script>

<!-- premium package -->
<!-- <div class="card">
	<h3>{title}</h3>
	<div>${price}usd</div>
	<ul>
		{#each features as feature}
			<li><Check /> {feature}</li>
		{/each}
	</ul>
	<a class="btn" href="/">Get Justship</a>
</div> -->

<Container>
	<div id="pricing" class="py-24 sm:py-32">
		<h2 class="text-center text-md text-base text-base-content/70 font-semibold leading-7">
			Pricing
		</h2>
		<div class="text-center mt-2 mb-10 sm:mb-20 text-2xl font-bold tracking-tight sm:text-4xl">
			Choose the right plan for you
		</div>
		<div class="flex flex-wrap justify-center gap-10 md:gap-16 w-fit mx-auto">
			<!-- Basic package -->
			<div class="card p-8 w-80 ring-2 ring-base-200 shadow-xl">
				<h3 class="text-xl font-extrabold mb-2 text-base-content text-opacity-80">Basic</h3>
				<div class="text-5xl font-extrabold leading-snug">
					$100 <span class="font-bold text-base">usd</span>
				</div>
				<ul class="space-y-2 mt-3 mb-20">
					{#each featuresBasic.included as feature}
						<li class="flex items-center space-x-2">
							<Check strokeWidth={1} class="text-primary" />
							<div class="text-base-content text-opacity-80">{feature}</div>
						</li>
					{/each}
					{#each featuresBasic.excluded as feature}
						<li class="flex space-x-2 text-base-content text-opacity-60">
							<X strokeWidth={1} />
							<div class="line-through">{feature}</div>
						</li>
					{/each}
				</ul>
				<a class="btn mt-auto" href="/"><Ship /> Get Product</a>
			</div>

			<!-- Premium package -->
			<div class="relative card p-8 w-80 ring-2 ring-primary shadow-xl">
				<div
					class="absolute top-5 right-5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary"
				>
					Most popular
				</div>

				<h3 class="text-xl font-extrabold mb-2 text-base-content text-opacity-80">Premium</h3>
				<div class="text-5xl font-extrabold leading-snug">
					$120 <span class="font-bold text-base">usd</span>
				</div>
				<ul class="space-y-2 mt-3 mb-20">
					{#each featuresPremium.included as feature}
						<li class="flex items-center space-x-2">
							<Check strokeWidth={1} class="text-primary" />
							<div class="text-base-content text-opacity-80">{feature}</div>
						</li>
					{/each}
				</ul>
				<a class="btn btn-primary mt-auto" href="/"><Ship /> Get Product</a>
			</div>
		</div>
	</div>
</Container>
