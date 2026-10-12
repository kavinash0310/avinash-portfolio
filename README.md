# Avinash Kumar — Developer Portfolio

A personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS. It presents an introduction, skills, projects, certificates, coding profiles, and a contact form.

**Live site:** [my-portfolio-seven-pi-16.vercel.app](https://my-portfolio-seven-pi-16.vercel.app)

## Run locally

Requirements: Node.js and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

The contact endpoint uses Resend. Add `RESEND_API_KEY` to an untracked `.env.local` file for local email delivery. Never commit API keys. Without that setting, the visual portfolio can still be explored, but email delivery will not be configured.

## Deploy

The project is deployed on Vercel. Connect the repository, configure the required environment variable in deployment settings, then deploy the `main` branch.
