<script>
	import { Ship } from 'lucide-svelte';
	import Container from './Container.svelte';
	import { PUBLIC_PROJECT_NAME } from '$env/static/public';
</script>

<footer class="footer p-10 bg-base-200 text-base-content">
	<aside>
		<div class="flex items-center h-fit space-x-2">
			<Ship class="h-8 w-8" />
			<div class="text-xl font-bold">{PUBLIC_PROJECT_NAME}</div>
		</div>
		<div>Providing reliable tech since 1992</div>
	</aside>

	<nav>
		<h6 class="footer-title">LINKS</h6>
		<a class="link link-hover" href="/">Home</a>
		<a class="link link-hover" href="/">About</a>
	</nav>
	<nav>
		<h6 class="footer-title">Legal</h6>
		<a class="link link-hover" href="/terms-of-use">Terms of use</a>
		<a class="link link-hover" href="/privacy-policy">Privacy policy</a>
		<a class="link link-hover" href="mailto:someone@example.com">Contact</a>
	</nav>
	<div>
		<h2 class="font-bold mb-4 text-base-content text-opacity-60">SOCIALS</h2>
		<div class="text-opacity-60 text-base-content">
			you can put some social icons here <br /> or a newsletter signup or whatever
		</div>
	</div>
</footer>
