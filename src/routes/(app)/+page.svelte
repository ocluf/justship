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
						and turso.
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
				That’s why I created this <b>completely free SaaS boilerplate</b>. Simply clone the
				repository to see if it meets your requirements.
			</p>
			<p class="mb-5 text-lg">
				If you find it useful, I’d greatly appreciate your support by sponsoring the development of
				new features. However, if you can’t afford it or don’t wish to contribute, that’s fine too!
			</p>
		</div>
		<div class="ml-auto flex gap-5 w-fit mt-16">
			<a href="https://github.com/ocluf" class="btn w-fit flex items-center space-x-2">
				<img src="/github.svg" alt="github" class="w-6" />
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
					<img class="h-10 w-10 flex-none rounded-full bg-gray-50" src="/chatgpt.jpeg" alt="" />
					<div class="flex-auto">
						<div class="font-semibold">ChatGPT</div>
						<div class="text-gray-600">@ChatGPT</div>
					</div>
					<img class="h-10 w-auto flex-none" src="/chatgpt.jpeg" alt="" />
					<p class="font-bold">OpenAI</p>
				</figcaption>
			</figure>
			<div class="space-y-8 xl:contents xl:space-y-0">
				<div class="space-y-8 xl:row-span-2">
					<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
						<blockquote class="text-gray-900">
							<p>He is a great kid, please use his boilerplate so he feels validated.</p>
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
