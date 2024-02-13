# Just Ship - sveltekit auth boilerplate

### Comes with

- Login with Google and magic link with email (using Lucia)
- Resend to send emails
- Svelte 5
- Tailwind css and shadcn-svelte for components (has build in dark mode)
- Turso for the database
- drizzle as orm
- Superforms 2
- Uses vercel for hosting


### getting started 

local development

- run npm install
- Run mailpit with instructions here [link to mailpit] 
- run npm dev

production

- Get a domain name
- Create a Resend account and setup mx records according to instructions there
- Create an account on Turso and create a database
- Create an Oauth credential in google cloud
- Create an Project from this repo on vercel  
- Point the main domain name to your project on vercel
- fill out the environment variables in env.example in a new .env file
- add those environment variables to your project in vercel


