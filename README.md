# Just Ship - A batteries included Svelte 5 SaaS Boilerplate

### Comes With

- 💻 **Svelte 5 and SvelteKit 2**
- 🚪 **Auth** (both social and magic link, using Lucia)
- 📧 **Sending Emails** (using Postmark)
- 🎨 **Styling** (using tailwindcss and shadcn)
- 📦 **Database** (using turso and drizzle as ORM)
- ☁️ **Serverless hosting** using vercel

### Getting Started 🚀

#### Local Development

- Run `npm install -g bun`
- Run `bun install`
- Rename the `.env.example` file to `.env` and **populate it with your own values**
- Run `bun run generate && bun run migrate` to create a local database
- Install mailpit to receive emails locally https://mailpit.axllent.org/docs/install/
- run `bun run dev`

#### Production 🌐

- 🌍 Get a domain name
- 📬 Create a **postmark** account and get the server api key
- 💾 Set up a database with **Turso**: [Turso Setup](https://turso.tech/)
- 🔑 Create an OAuth credential in **Google Cloud**
- 🏗️ Set up a project from this repo on **Vercel**: [vercel](https://vercel.com)
- 🎯 Point your main domain name to your project on Vercel
- 🔐 fill out the environment variables in `.env`
- ⚙️ Add those environment variables to your project in Vercel

Feel free to contribute or suggest improvements! 🤝

### How to setup Just Ship the youtube tutorial
(note this tutorial is slightly outdated) You don't need mailpit neccesarily I log the email login link in the console.
I also use shadcn now instead of daisyUI

[![How to use Just Ship](https://img.youtube.com/vi/sJZOXUhkvMc/0.jpg)](https://www.youtube.com/watch?v=sJZOXUhkvMc)