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
				url_allowlist: [
					'justship.today/.*',
					'www.justship.today/.*',
					'www.justship.today',
					'justship.today/'
				]
			}
		});
	</script>
</svelte:head>

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
				<div>git clone https://github.com/ocluf/svelte-boilerplate.git</div>
				<div>
					<CopyText text="git clone https://github.com/ocluf/svelte-boilerplate.git" />
				</div>
			</div>
			<div class="mx-auto flex gap-5 w-fit mt-10">
				<a href="https://github.com/ocluf" class="btn w-fit flex items-center space-x-2">
					<img src="/github.svg" alt="github" class="w-6" />
					<div class="font-bold text-lg">225</div>
				</a>
				<a class="btn btn-accent" href="https://buy.stripe.com/eVa8yug4m2Z86nm9AB">
					<PiggyBank class="mr-2" />support this project
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

<!-- <div class="mx-auto max-w-7xl px-6 lg:px-8">
	<div class="mx-auto max-w-2xl md:text-center">
		<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12">Build With</p>
	</div>
</div> -->
<div class="px-5 lg:px-10 pb-32 lg:pb-48 flex flex-wrap gap-10 lg:gap-14 justify-center">
	<div>
		<img class="h-16 lg:h-20 rounded-xl" src="/svelte.svg" alt="svelte" />
		<div class="mt-3 font-semibold text-center text-opacity-80">svelte 5</div>
	</div>
	<div>
		<img class="h-16 lg:h-20 rounded-xl" src="/tailwind.png" alt="tailwind" />
		<div class="mt-3 font-semibold text-center text-opacity-80">tailwindcss</div>
	</div>
	<div>
		<img class="h-16 lg:h-20 rounded-xl" src="/turso.jpeg" alt="turso" />
		<div class="mt-3 font-semibold text-center text-opacity-80">turso</div>
	</div>
	<div>
		<img class="h-16 lg:h-20 rounded-xl" src="/resend.png" alt="resend" />
		<div class="mt-3 font-semibold text-center text-opacity-80">resend</div>
	</div>
	<div>
		<img class="h-16 lg:h-20 rounded-xl" src="/daisyUI.png" alt="daisyUi" />
		<div class="mt-3 font-semibold text-center text-opacity-80">daisyUI</div>
	</div>
	<div>
		<img class="h-16 lg:h-20 rounded-xl" src="/drizzle.png" alt="drizzle" />
		<div class="mt-3 font-semibold text-center text-opacity-80">drizzle</div>
	</div>
	<div>
		<img class="h-16 lg:h-20 rounded-xl" src="/typescript.png" alt="typescript" />
		<div class="mt-3 font-semibold text-center text-opacity-80">typescript</div>
	</div>
</div>
<div class="py-24 sm:py-32" data-theme="dark">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-base font-semibold leading-7 text-accent">Deploy faster</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
				Everything you need to ship fast
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
						in many different ways each time.
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
						and turso.
					</dd>
				</div>
			</dl>
		</div>
	</div>
</div>
