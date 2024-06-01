<script>
	import CopyText from '$lib/components/CopyText.svelte';
</script>

<div
	class="relative mx-auto w-full max-w-[85rem] px-4 pt-12 sm:px-6 sm:pt-16 lg:flex lg:justify-between lg:px-8 lg:pt-20"
>
	<div class="mx-auto max-w-[40rem] lg:mx-0 lg:max-w-none lg:flex-none">
		<ul
			role="list"
			class="space-y-10 text-sm leading-6 lg:sticky lg:top-0 lg:-mt-16 lg:h-screen lg:w-72 lg:overflow-y-auto lg:py-16 lg:pr-8 lg:[mask-image:linear-gradient(to_bottom,transparent,white_4rem,white)]"
		>
			<li>
				<a href="#getting-set-up" class="font-semibold"> Getting started </a>
				<ul role="list" class="mt-4 space-y-2 border-l border-slate-200 pl-6">
					<li><a href="#installing-just-ship"> Installing Just Ship </a></li>
					<li>
						<a href="#drizzle-migrations">Drizzle migrations </a>
					</li>
				</ul>
			</li>
			<li>
				<a href="#getting-set-up" class="font-semibold"> Going to production </a>
				<ul role="list" class="mt-4 space-y-2 border-l border-slate-200 pl-6">
					<li>
						<a href="#getting-a-domain-name"> Getting a domain name </a>
					</li>
					<li>
						<a href="#turso-api-key"> Turso API key </a>
					</li>
					<li>
						<a href="#resend-api-key"> Resend API key </a>
					</li>
					<li>
						<a href="#deploying-to-vercel"> Deploying to vercel </a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
	<div
		class="mx-auto my-20 min-w-0 max-w-[40rem] lg:ml-16 lg:mr-0 lg:mt-0 lg:max-w-[50rem] lg:flex-auto prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600"
	>
		<h2 id="getting-set-up">Getting started</h2>
		<h3 id="installing-just-ship">Installing Just Ship</h3>
		<p>
			This tutorial assumes you have a basic understanding of Svelte, Sveltekit, and what a package
			manager is. Otherwise I suggest going through the tutorials at
			<a href="https://svelte.dev/tutorial">svelte.dev</a> first before continuing as the boilerplate
			won't be of much use to you. To start a new project run the following command and follow the instructions.
		</p>
		<div
			class="hidden bg-gray-800 md:flex space-x-5 pl-5 font-mono my-5 font-semibold p-3 rounded-xl w-fit text-gray-300 mb-14"
		>
			<div>npm create justship@latest my-app</div>
			<div>
				<CopyText text="npm create justship@latest my-app" />
			</div>
		</div>

		<h3 id="drizzle-migrations" class="mt-10">Drizzle migrations</h3>
		<p>
			<a href="https://orm.drizzle.team/docs/overview">Drizzle</a> is a great tool for adding types
			to your database and running migrations. To set up your local database, run
			<code>npm run generate && npm run migrate</code>. <br /><br /> The generate command creates
			migrations based on <code>/src/lib/server/database/schema.ts</code>, and the migrate command
			applies them to <code>local.db</code>. Update the schema file and rerun these commands
			whenever you want to change the database. <br /><br />If you want to run the migrations in
			production use <code>npm run migrate:prod</code> which will run them on your database in turso.
		</p>

		<div class="h-px bg-gray-200 my-10"></div>

		<h2 class="mt-10" id="going-to-production">Going to production</h2>
		<h3 id="getting-a-domain-name" class="mt-5">Getting a domain name</h3>
		<p class="mb-14">
			This is the first and only purchase you'll need to get setup with Just Ship. Go to a domain
			name registrar like <a href="https://www.namecheap.com/">namecheap</a> or
			<a href="https://www.godaddy.com/">GoDaddy</a>. You can get one for around 2 dollars already
			depending on the TLD. <br /><br />

			Once you have yourm domain name set the origin variable in your <code>.env</code> file. For
			example if you bought example.com set the origin to <code>ORIGIN=https://example.com</code>
		</p>
		<h3 id="turso-api-key" class="mt-5">Turso API key</h3>
		<p class="mb-14">
			To get a database up and running follow the <a href="https://docs.turso.tech/quickstart"
				>quickstart from Turso</a
			>. After completing the quickstart and creating a database get the following two environment
			variables and fill them in in your <code>.env</code> file <br /><br />

			<code>TURSO_DB_URL</code> : get this by running <code>turso db list</code> and copy the URL
			from your production database <br /><br />
			<code>TURSO_DB_AUTH_TOKEN</code> : get this by running
			<code>turso db tokens create ~YOUR_DATABASE_NAME~</code>
		</p>
		<h3 id="resend-api-key" class="mt-5">Resend API key</h3>
		<p class="mb-14">
			Resend is the service we use to send our emails. First create an account at <a
				href="https://resend.com">Resend</a
			>. Then <a href="https://resend.com/api-keys">create an API key</a> and
			<a href="https://resend.com/domains">verify your domain name</a>. <br /><br />Once you have
			your API key fill out the following two variables in your <code>.env</code> <br /><br />

			<code>RESEND_API_KEY</code> : Your resend API key. <br /><br /> <code>RESEND_EMAIL</code> : The
			email from which you want to send your transactional emails. For example team@justship.today (where
			the domain has to be verified in Resend)
		</p>
		<h3 id="deploying-to-vercel" class="mt-5">Deploying to vercel</h3>
		<p class="mb-14">
			<a href="https://vercel.com">Vercel</a> is the service we use to host the frontend. It
			connects to your github account and automatically redeploys whenever you push a new version of
			your repo. Sign up and follow the steps to connect your repository. <br /><br />Once you have
			connected your repository go to the project setting and click on domains. Follow the steps to
			connect your domain to the project. <br /><br /> Finally go to the project environment
			variables tab and fill out all the environment variables from your <code>.env</code> file. Redeploy
			and everything should be working!
		</p>
	</div>
</div>
