<script>
	import Container from './Container.svelte';
</script>

<Container>
	<div id="about" class="py-24 sm:py-32">
		<div class="mx-auto max-w-2xl px-6 lg:px-8">
			<img
				src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				alt="description"
				class="float-left mr-4 w-32 rounded-full h-auto"
			/>
			<div>
				<h2 class="font-bold text-lg mb-5">Hi! I'm ....</h2>
				<p class="mb-5 text-lg">
					This is my background and the reason why I am qualified to solve problem X. <span
						class="text-base-content/60"
					>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis optio sapiente
					</span>
				</p>
				<p class="mb-5 text-lg">
					I noticed problem X and that is why I build this product that helps solve it. <span
						class="text-base-content/60"
					>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, recusandae! Lorem ipsum
						dolor sit amet, consectetur adipisicing elit.
					</span>
				</p>

				<p class="mb-10 text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias, accusamus
					molestiae deleniti quod laboriosam aut animi! Culpa, dolore, adipisci itaque debitis.
				</p>
				<p class="my-5 text-lg font-bold">Here is a bullet list of the key benefits</p>
				<ul class="list-disc pl-5 space-y-2">
					<li><span class="font-bold">You find god</span> and she finds you</li>
					<li>
						<span class="font-bold">You make a million dollars</span> and your parents as well
					</li>
					<li><span class="font-bold">World peace gets achieved</span> and you get the credits</li>
				</ul>
			</div>
			<div class="mt-10">A demo video</div>
			<iframe
				width="560"
				height="315"
				class="rounded-xl w-full"
				src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=4e-7TwyrKYEQXD4O"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
	</div>
</Container>
