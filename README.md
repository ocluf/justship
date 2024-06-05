# Just Ship - An batteries included Svelte 5 SaaS Boilerplate

### Comes With

- 💻 **Svelte 5 and sveltekit 2**
- 🚪 **Auth** (both social and with magic link, using Lucia)
- 📧 **Sending Emails** (using Postmark)
- 🎨 **Styling** (using tailwindcss and daisyUI )
- 📦 **Database** (using turso and drizzle as ORM)
- ☁️ **Serverless hosting** using vercel

### Getting Started 🚀

#### Local Development

- Run `npm install`
- Create a `.env` file and copy over `.env.example`
- Run `npm run generate && npm run migrate` to create a local database
- Install mailpit to receive emails locally https://mailpit.axllent.org/docs/install/
- run `npm run dev`

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

### Roadmap

- [x] SEO Setup
- [x] 404 page
- [x] Replace Resend with Postmark
- [ ] Landing page components
  - [x] Hero
  - [x] FAQ
  - [x] Personal Story
  - [x] Footer
  - [x] Pricing
  - [x] Features
  - [ ] Problem Agition
  - [ ] Wall of Love
- [ ] Blog Section
- [ ] Add rate limiting to email login
- [ ] docs
- [ ] Improve stripe section
