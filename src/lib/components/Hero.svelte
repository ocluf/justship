<script>
	import { Ship } from 'lucide-svelte';
	import Container from './Container.svelte';
</script>

<!-- The exact line breaks and widths of various sections should depend on the copy. Make sure the copy looks good on
all screen sizes (not the case here) -->
<Container>
	<div class="flex flex-col md:flex-row py-8 sm:py-20">
		<div>
			<div class="text-center text-4xl sm:text-7xl sm:text-left font-bold sm:mt-8">
				You put your apps <br /> <span class="text-secondary">main promise</span> <br /> right
				<span class="underline decoration-primary">here</span>
			</div>
			<p class="mt-2 sm:mt-4 mb-6 sm:mb-8 text-md text-center sm:text-left sm:text-lg">
				You can put some subtext here about with a further explanation <br
					class="hidden sm:block"
				/> of what features your app has to offer.
			</p>
			<div class="flex items-center justify-center sm:justify-start">
				<a href="/" class="btn btn-primary text-lg w-full max-w-sm h-14">
					<Ship class="mr-2" /> Your call to action
				</a>
			</div>
		</div>
		<div class=" bg-gray-100 md:ml-5 p-10 flex-1 text-xl rounded-xl mt-8 text-center">
			You can put lots of things in this section. A quick demo video of your product, a carousel of
			images, some testimonials or relevant logos. Be creative!
		</div>
	</div>
</Container>
