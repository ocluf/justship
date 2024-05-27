<script>
	import CopyText from '$lib/components/CopyText.svelte';
	import { Link, Palette, PiggyBank, SquarePlus } from 'lucide-svelte';
</script>

<svelte:head>
	<script>
		!(function (t, e) {
			var o, n, p, r;
			e.__SV ||
				((window.posthog = e),
				(e._i = []),
				(e.init = function (i, s, a) {
					function g(t, e) {
						var o = e.split('.');
						2 == o.length && ((t = t[o[0]]), (e = o[1])),
							(t[e] = function () {
								t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
							});
					}
					((p = t.createElement('script')).type = 'text/javascript'),
						(p.async = !0),
						(p.src = s.api_host + '/static/array.js'),
						(r = t.getElementsByTagName('script')[0]).parentNode.insertBefore(p, r);
					var u = e;
					for (
						void 0 !== a ? (u = e[a] = []) : (a = 'posthog'),
							u.people = u.people || [],
							u.toString = function (t) {
								var e = 'posthog';
								return 'posthog' !== a && (e += '.' + a), t || (e += ' (stub)'), e;
							},
							u.people.toString = function () {
								return u.toString(1) + '.people (stub)';
							},
							o =
								'capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId'.split(
									' '
								),
							n = 0;
						n < o.length;
						n++
					)
						g(u, o[n]);
					e._i.push([i, s, a]);
				}),
				(e.__SV = 1));
		})(document, window.posthog || []);
		posthog.init('phc_KIdxWocwGarElqZABLSDNfLdtRvpV4xv4pszQbfAo3R', {
			api_host: 'https://app.posthog.com',
			autocapture: {
				url_allowlist: ['justship.today/.*', 'svelteboilerplate.com/.*']
			}
		});
	</script>
</svelte:head>

<div>
	<div class="relative p-5 lg:px-10">
		<div
			class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
			aria-hidden="true"
		>
			<div
				class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			></div>
		</div>
		<div class="mx-auto max-w-2xl pt-20 pb-20 lg:pt-24 lg:pb-24">
			<div class="text-center">
				<h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
					The <span class="text-accent">free</span> and
					<span class="text-accent">opensource</span> svelte 5 saas boilerplate to ship
					<span class="underline decoration-accent">today</span>
				</h1>

				<div
					class="hidden bg-gray-800 md:flex space-x-5 pl-5 font-mono mt-10 font-semibold p-4 rounded-xl w-fit text-gray-300 mx-auto"
				>
					<div>npm create justship@latest my-app</div>
					<div>
						<CopyText text="npm create justship@latest my-app" />
					</div>
				</div>
				<div class="mx-auto flex gap-5 w-fit mt-10">
					<a href="https://github.com/ocluf" class="btn w-fit flex items-center space-x-2">
						<svg class="w-6" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
								transform="scale(64)"
								fill="#1B1F23"
							/>
						</svg>
						<div class="font-bold text-lg">225</div>
					</a>
					<a class="btn btn-accent" href="https://buy.stripe.com/fZeg0WcSa43cfXW8wy">
						<PiggyBank class="mr-2" />support just ship
					</a>
				</div>
			</div>
		</div>
		<div
			class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
			aria-hidden="true"
		>
			<div
				class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			></div>
		</div>
	</div>

	<div class="px-5 lg:px-10 pb-32 lg:pb-48 flex flex-wrap gap-10 lg:gap-14 justify-center">
		<div>
			<svg
				class="h-16 lg:h-20 p-1 rounded-xl"
				version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 98.1 118"
				style="enable-background:new 0 0 98.1 118;"
				xml:space="preserve"
			>
				<style type="text/css">
					.st0 {
						fill: #ff3e00;
					}
					.st1 {
						fill: #ffffff;
					}
				</style>
				<path
					class="st0"
					d="M91.8,15.6C80.9-0.1,59.2-4.7,43.6,5.2L16.1,22.8C8.6,27.5,3.4,35.2,1.9,43.9c-1.3,7.3-0.2,14.8,3.3,21.3
	c-2.4,3.6-4,7.6-4.7,11.8c-1.6,8.9,0.5,18.1,5.7,25.4c11,15.7,32.6,20.3,48.2,10.4l27.5-17.5c7.5-4.7,12.7-12.4,14.2-21.1
	c1.3-7.3,0.2-14.8-3.3-21.3c2.4-3.6,4-7.6,4.7-11.8C99.2,32.1,97.1,22.9,91.8,15.6"
				/>
				<path
					class="st1"
					d="M40.9,103.9c-8.9,2.3-18.2-1.2-23.4-8.7c-3.2-4.4-4.4-9.9-3.5-15.3c0.2-0.9,0.4-1.7,0.6-2.6l0.5-1.6l1.4,1
	c3.3,2.4,6.9,4.2,10.8,5.4l1,0.3l-0.1,1c-0.1,1.4,0.3,2.9,1.1,4.1c1.6,2.3,4.4,3.4,7.1,2.7c0.6-0.2,1.2-0.4,1.7-0.7L65.5,72
	c1.4-0.9,2.3-2.2,2.6-3.8c0.3-1.6-0.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7l-10.5,6.7
	c-1.7,1.1-3.6,1.9-5.6,2.4c-8.9,2.3-18.2-1.2-23.4-8.7c-3.1-4.4-4.4-9.9-3.4-15.3c0.9-5.2,4.1-9.9,8.6-12.7l27.5-17.5
	c1.7-1.1,3.6-1.9,5.6-2.5c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.2,0.9-0.4,1.7-0.7,2.6l-0.5,1.6l-1.4-1
	c-3.3-2.4-6.9-4.2-10.8-5.4l-1-0.3l0.1-1c0.1-1.4-0.3-2.9-1.1-4.1c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7L32.4,46.1
	c-1.4,0.9-2.3,2.2-2.6,3.8s0.1,3.3,1,4.6c1.6,2.3,4.4,3.3,7.1,2.6c0.6-0.2,1.2-0.4,1.7-0.7l10.5-6.7c1.7-1.1,3.6-1.9,5.6-2.5
	c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.9,5.2-4.1,9.9-8.6,12.7l-27.5,17.5C44.8,102.5,42.9,103.3,40.9,103.9"
				/>
			</svg>

			<div class="mt-3 font-semibold text-center text-opacity-80">svelte 5</div>
		</div>
		<div>
			<svg
				class="h-16 lg:h-20 p-2 rounded-xl"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 54 33"
				><g clip-path="url(#prefix__clip0)"
					><path
						fill="#38bdf8"
						fill-rule="evenodd"
						d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
						clip-rule="evenodd"
					/></g
				><defs
					><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z" /></clipPath></defs
				></svg
			>
			<div class="mt-3 font-semibold text-center text-opacity-80">tailwindcss</div>
		</div>
		<div>
			<svg
				role="img"
				class="h-16 text-[#4FF8D2] lg:h-20 rounded-xl"
				fill="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><title>Turso</title><path
					d="m23.31.803-.563-.42-1.11 1.189-.891-1.286-.512.235.704 1.798-.326.35L18.082 0l-.574.284 2.25 4.836-2.108.741h-.05l-1.143-1.359-1.144 1.36H8.687l-1.144-1.36-1.146 1.363H6.36l-2.12-.745L6.491.284 5.919 0l-2.53 2.668-.327-.349.705-1.798-.512-.236-.89 1.287L1.253.382.69.804 2.42 3.69l-.89.939.311 2.375 2.061.787L3.9 8.817H1.947v.444l.755 1.078 1.197.433v6.971l3.057 4.55L7.657 24l1.101-1.606L9.9 24l.999-1.606L12 24l1.102-1.606L14.1 24l1.141-1.606L16.343 24l.701-1.706 3.058-4.55v-6.972l1.196-.433.756-1.078v-.444h-1.952l.003-1.03 2.054-.784.311-2.375-.89-.939zm-8.93 18.718H8.033l.793-1.615.794 1.615.793-1.083.793 1.083.794-1.083.793 1.083.794-1.083.793 1.083.793-1.615.794 1.615zm3.886-7.39-3.3 1.084-.143 3.061-2.827.627-2.826-.627-.142-3.06-3.3-1.085v-1.635l4.266 1.21-.052 4.126h4.109l-.052-4.127 4.266-1.209z"
				/></svg
			>
			<div class="mt-3 font-semibold text-center text-opacity-80">turso</div>
		</div>
		<div>
			<svg
				role="img"
				class="h-16 lg:h-20 p-1 rounded-xl"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><title>Resend</title><path
					d="M2.023 0v24h5.553v-8.434h2.998L15.326 24h6.65l-5.372-9.258a7.652 7.652 0 0 0 3.316-3.016c.709-1.21 1.062-2.57 1.062-4.08 0-1.462-.353-2.767-1.062-3.91-.709-1.165-1.692-2.079-2.95-2.742C15.737.331 14.355 0 12.823 0Zm5.553 4.87h4.219c.731 0 1.349.125 1.851.376.526.252.925.618 1.2 1.098.274.457.412.994.412 1.611S15.132 9.12 14.88 9.6c-.229.48-.572.856-1.03 1.13-.434.252-.948.38-1.542.38H7.576Z"
				/></svg
			>
			<div class="mt-3 font-semibold text-center text-opacity-80">resend</div>
		</div>
		<div>
			<svg
				class="h-16 lg:h-20 scale-125 rounded-xl"
				viewBox="0 0 1024 1024"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="256" y="670.72" width="512" height="256" rx="128" fill="#1AD1A5" />
				<circle cx="512" cy="353.28" r="256" fill="white" />
				<circle
					cx="512"
					cy="353.28"
					r="261"
					stroke="black"
					stroke-opacity="0.2"
					stroke-width="10"
				/>
				<circle cx="512" cy="353.28" r="114.688" fill="#FF9903" />
			</svg>

			<div class="mt-3 font-semibold text-center text-opacity-80">daisyUI</div>
		</div>
		<div>
			<svg
				class="h-16 lg:h-20 rounded-xl"
				role="img"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><title>Drizzle</title><path
					d="M5.353 11.823a1.036 1.036 0 0 0-.395-1.422 1.063 1.063 0 0 0-1.437.399L.138 16.702a1.035 1.035 0 0 0 .395 1.422 1.063 1.063 0 0 0 1.437-.398l3.383-5.903Zm11.216 0a1.036 1.036 0 0 0-.394-1.422 1.064 1.064 0 0 0-1.438.399l-3.382 5.902a1.036 1.036 0 0 0 .394 1.422c.506.283 1.15.104 1.438-.398l3.382-5.903Zm7.293-4.525a1.036 1.036 0 0 0-.395-1.422 1.062 1.062 0 0 0-1.437.399l-3.383 5.902a1.036 1.036 0 0 0 .395 1.422 1.063 1.063 0 0 0 1.437-.399l3.383-5.902Zm-11.219 0a1.035 1.035 0 0 0-.394-1.422 1.064 1.064 0 0 0-1.438.398l-3.382 5.903a1.036 1.036 0 0 0 .394 1.422c.506.282 1.15.104 1.438-.399l3.382-5.902Z"
				/></svg
			>
			<div class="mt-3 font-semibold text-center text-opacity-80">drizzle</div>
		</div>
		<div>
			<svg
				class="h-16 lg:h-20 text-[#3178C6] rounded-xl"
				fill="currentColor"
				role="img"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><title>TypeScript</title><path
					d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
				/></svg
			>

			<div class="mt-3 font-semibold text-center text-opacity-80">typescript</div>
		</div>
	</div>
</div>
<div class="py-24 sm:py-32" data-theme="dark">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-base font-semibold leading-7 text-accent">Deploy faster</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
				Everything you need to ship in days
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
			<dl
				class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
			>
				<div class="relative pl-16">
					<dt class="text-base font-semibold leading-7">
						<div class="absolute left-0 top-0 flex items-center justify-center rounded-lg">
							<Link class="text-accent-content bg-accent rounded-box p-2 w-10 h-10" />
						</div>
						Magic link + google auth
					</dt>
					<dd class="mt-2 text-base leading-7 text-base-content text-opacity-85">
						An auth flow that is easy, secure and always verifies the users email. No third party
						auth providers needed.
					</dd>
				</div>
				<div class="relative pl-16">
					<dt class="text-base font-semibold leading-7">
						<div class="absolute left-0 top-0 flex items-center justify-center rounded-lg">
							<Palette class="text-accent-content bg-accent rounded-box p-2 w-10 h-10" />
						</div>
						Same code, 30+ styles
					</dt>
					<dd class="mt-2 text-base leading-7 text-base-content text-opacity-85">
						By using tailwindcss and daisyUI you can use the exact same code to style your projects
						in many different ways.
					</dd>
				</div>
				<div class="relative pl-16">
					<dt class="text-base font-semibold leading-7 text-opacity-85">
						<div class="absolute left-0 top-0 flex items-center justify-center rounded-lg">
							<PiggyBank class="text-accent-content bg-accent rounded-box p-2 w-10 h-10" />
						</div>
						Deploy to production for free
					</dt>
					<dd class="mt-2 text-base leading-7 text-base-content text-opacity-85">
						Besides the code being free this boilerplate is made for platforms with generous free
						tiers like Vercel and Turso.
					</dd>
				</div>
				<div class="relative pl-16">
					<dt class="text-base font-semibold leading-7">
						<div class="absolute left-0 top-0 flex items-center justify-center rounded-lg">
							<SquarePlus class="text-accent-content bg-accent rounded-box p-2 w-10 h-10" />
						</div>
						And much more
					</dt>
					<dd class="mt-2 text-base leading-7 text-base-content text-opacity-85">
						Transactional emails with resend, easy database migrations and deployments with drizzle
						and turso. Super easy local dev experience.
					</dd>
				</div>
			</dl>
		</div>
	</div>
</div>

<div class="py-24 sm:py-32">
	<div class="mx-auto max-w-2xl px-6 lg:px-8">
		<img src="/me.jpg" alt="description" class="float-left mr-4 w-32 rounded-full h-auto" />
		<div>
			<h2 class="font-bold text-lg mb-5">Hi! I'm Fulco</h2>
			<p class="mb-5 text-lg">
				I'm a fullstack developer who <b>loves</b> Svelte and SvelteKit. Over the past year, I've noticed
				a surge in paid SaaS boilerplates.
			</p>
			<p class="mb-5 text-lg">
				These boilerplates can be valuable if they save you time, but it's hard to know what you're
				getting until you've purchased them!
			</p>
			<p class="mb-5 text-lg">
				On the other hand there are open source boilerplates. But often these aren't maintained or
				updated as much post launch as there is no incentive to do so.
			</p>
			<p class="mb-5 text-lg">
				That is why I wan't to propose a <b>gentleman's agreement</b>. This boilerplate will stay
				free and opensource.
			</p>
			<p class="mb-5 text-lg">
				<b>But</b>, if it does save you hours of work and you can afford it. You support svelte
				boilerplate by making a donation.
			</p>
		</div>
		<div class="ml-auto flex gap-5 w-fit mt-16">
			<a href="https://github.com/ocluf" class="btn w-fit flex items-center space-x-2">
				<svg class="w-6" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
						transform="scale(64)"
						fill="#1B1F23"
					/>
				</svg>
				<div>Star on Github</div>
			</a>
			<a class="btn btn-accent" href="https://buy.stripe.com/eVa8yug4m2Z86nm9AB">
				support svelte boilerplate
			</a>
		</div>
	</div>
</div>
<div class="py-24 sm:py-32" data-theme="dark">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			<div>
				<h2 class="text-base font-semibold leading-7 text-accent">The roadmap</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">What is coming</p>
				<p class="mt-6 text-base leading-7 text-base-content text-opacity-75">
					What else is coming to the boilerplate? Here are some of the features that I would like to
					add. I'll add checkmarks as I complete them.
				</p>
			</div>
			<dl
				class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16"
			>
				<div class="relative pl-9">
					<dt class="font-semibold text-base-content">
						<svg
							class="absolute left-0 top-1 h-5 w-5 text-accent"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							/>
						</svg>
						A setup CLI
					</dt>
					<dd class="mt-2 text-base-content text-opacity-75">
						A Command Line Interface similar to npm create svelte where you get some tech choices
						like e.g. the database.
					</dd>
				</div>
				<div class="relative pl-9">
					<dt class="font-semibold text-base-content">
						<!-- <svg
							class="absolute left-0 top-1 h-5 w-5 text-accent"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							/>
						</svg> -->
						Posthog Analytics
					</dt>
					<dd class="mt-2 text-base-content text-opacity-75">
						Add posthog analytics in a way that events aren't blocked by adblockers.
					</dd>
				</div>
				<div class="relative pl-9">
					<dt class="font-semibold text-base-content">
						<!-- <svg
							class="absolute left-0 top-1 h-5 w-5 text-accent"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							/>
						</svg> -->
						Payments with Stripe
					</dt>
					<dd class="mt-2 text-base-content text-opacity-75">
						Setup the webhooks to listen for succesful payments from stripe.
					</dd>
				</div>
				<div class="relative pl-9">
					<dt class="font-semibold text-base-content">
						<!-- <svg
							class="absolute left-0 top-1 h-5 w-5 text-accent"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							/>
						</svg> -->
						Documentation
					</dt>
					<dd class="mt-2 text-base-content text-opacity-75">
						Documentation on how to setup various features and get how to get API keys.
					</dd>
				</div>

				<div class="relative pl-9">
					<dt class="font-semibold text-base-content">
						<!-- <svg
							class="absolute left-0 top-1 h-5 w-5 text-accent"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							/>
						</svg> -->
						Blog components
					</dt>
					<dd class="mt-2 text-base-content text-opacity-75">
						A way to easily deploy blogs that have all the things neccesary for SEO.
					</dd>
				</div>
				<div class="relative pl-9">
					<dt class="font-semibold text-base-content">
						<!-- <svg
							class="absolute left-0 top-1 h-5 w-5 text-accent"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							/>
						</svg> -->
						Admin dashboard
					</dt>
					<dd class="mt-2 text-base-content text-opacity-75">
						A dashboard where you can update/delete/edit users.
					</dd>
				</div>
			</dl>
		</div>
	</div>
</div>

<div class="relative isolate pb-32 pt-24 sm:pt-32">
	<div
		class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-10 blur-3xl"
		aria-hidden="true"
	>
		<div
			class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-primary to-secondary"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		></div>
	</div>
	<div
		class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-10 blur-3xl sm:pt-40 xl:justify-end"
		aria-hidden="true"
	>
		<div
			class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-primary to-secondary xl:ml-0 xl:mr-[calc(50%-12rem)]"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		></div>
	</div>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-xl text-center">
			<h2 class="text-lg font-semibold leading-8 tracking-tight text-accent">Testimonials</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				This is where I'd put my testimonials if I had them
			</p>
		</div>
		<div
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4"
		>
			<figure
				class="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1"
			>
				<blockquote
					class="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8"
				>
					<p>
						"The Svelte starter kit is a game-changer. It offers seamless integration and smooth
						development. The clean code structure significantly reduces setup time. Overall, it
						impressively accelerates project kick-off!"
					</p>
				</blockquote>
				<figcaption
					class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap"
				>
					<div class="h-10 w-10 flex-none rounded-full">
						<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
							><title>OpenAI</title><path
								d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
							/></svg
						>
					</div>
					<div class="flex-auto">
						<div class="font-semibold">ChatGPT</div>
						<div class="text-gray-600">@ChatGPT</div>
					</div>

					<svg
						class="h-10 w-auto flex-none"
						role="img"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><title>OpenAI</title><path
							d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
						/></svg
					>

					<p class="font-bold">OpenAI</p>
				</figcaption>
			</figure>
			<div class="space-y-8 xl:contents xl:space-y-0">
				<div class="space-y-8 xl:row-span-2">
					<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
						<blockquote class="text-gray-900">
							<p>He is a lovely kid, you should really use his boilerplate.</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<img
								class="h-10 w-10 rounded-full bg-gray-50"
								src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
							<div>
								<div class="font-semibold">My mom</div>
								<div class="text-gray-600">@mymom</div>
							</div>
						</figcaption>
					</figure>
				</div>
			</div>
			<div class="space-y-8 xl:contents xl:space-y-0">
				<div class="space-y-8 xl:row-span-2">
					<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
						<blockquote class="text-gray-900">
							<p>SaaS starter kits are always made by people who don’t have a SaaS finisher kit</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<img
								class="h-10 w-10 rounded-full bg-gray-50"
								src="https://pbs.twimg.com/profile_images/1602333093485891584/mmVqjFNI_400x400.jpg"
								alt="dax profile"
							/>
							<div>
								<div class="font-semibold">dax</div>
								<div class="text-gray-600">@thdxr</div>
							</div>
						</figcaption>
					</figure>
				</div>
			</div>
		</div>
	</div>
</div>
