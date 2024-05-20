<script>
	import { Github, PiggyBank } from 'lucide-svelte';
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
					'https://justship.today/.*',
					'https://www.justship.today/.*',
					'https://www.justship.today',
					'https://justship.today/'
				]
			}
		});
	</script>
	<script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.52/build/spline-viewer.js">
	</script>
</svelte:head>

<!-- Rest of your homepage content -->

<div class="bg-white px-6 py-24 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Just Ship</h2>
		<p class="mt-6 text-lg leading-8 text-gray-600">
			Skip the boring parts of making a web app. A completely <b>free</b> and <b>open source</b> sveltekit
			starter template.
		</p>
		<p class="text-red-500">
			Note: I turned of email login to use the free tier for another project
		</p>
		<div class="flex space-x-4 mt-6 w-fit mx-auto">
			<a class="btn" href="https://github.com/ocluf/justship">
				<Github class="mr-2" />Github
			</a>
			<a class="btn btn-primary" href="https://buy.stripe.com/eVa8yug4m2Z86nm9AB">
				<PiggyBank class="mr-2" />Buy me a coffee
			</a>
		</div>
	</div>
</div>

<h2 class="text-center text-4xl font-bold">Comes with</h2>

<div class="grid md:grid-cols-2 gap-x-20 w-fit mx-auto text-xl my-5 md:my-10">
	<li>Login with Google and magic link</li>
	<li>Sveltekit with svelte 5</li>
	<li>Typescript</li>
	<li>Vercel for Hosting</li>
	<li>Turso as the database</li>
	<li>drizzle as ORM</li>
	<li>Resend for email</li>
	<li>Lucia 3 for auth</li>
	<li>Superforms 2</li>
	<li>shadcn-svelte and tailwind</li>
</div>

<h2 class="text-center text-4xl font-bold mt-20 md:mt-32">Click on the laptop</h2>
<spline-viewer url="https://prod.spline.design/YSTaVTAlOK8GCfs9/scene.splinecode"></spline-viewer>
