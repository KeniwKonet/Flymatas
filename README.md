# Flymatas Travels & Tours

The new website for [flymatas.com](https://flymatas.com): study abroad, work abroad, visas, medical tourism, migration and holidays. *Escape The Ordinary.*

Built with **Next.js 16 (App Router)**, **React 19** and **Tailwind CSS 4**. Every screen follows the approved Flymatas design, in the brand colours and typography from the Flymatas brand guideline.

> This is the front end. Every page is built and clickable, using demo data. Enquiries, the booking request, accounts and the news feed still need a backend or CMS.

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Pages

| Route | Screen |
| --- | --- |
| `/` | Home: animated plane hero, ticket-style cards, services, testimonials |
| `/destinations` | Destinations |
| `/destinations/united-kingdom` | Destination detail (UK) |
| `/book` | Four-step booking request (trip type, basics, contact, confirmation) |
| `/study-abroad` | Study abroad |
| `/work-abroad` | Work abroad |
| `/visa` | Visa services |
| `/varsity` | Flymatas Aviation Varsity (training school) |
| `/guides`, `/guides/article` | Travel guides and a guide article |
| `/news` | News and blog |
| `/experiences` | Client experiences and gallery |
| `/about` | About Flymatas and the founder |
| `/contact` | Contact |
| `/account`, `/account/trips` | Client account and my trips |

Any unknown URL shows the custom 404 page.

## Project structure

```
src/
  app/                 routes (one page.js per route), layout, global styles
    design.css         the design system styles (brand colours, ticket cards, animations)
    globals.css        Tailwind theme and utilities plus brand tokens
  screens/             one component per page
public/assets/         logos, world map, founder photo and flyers
```

Each file in `src/screens` is a client component. Its state and derived values sit in the small `Logic` class at the top of the file: the initial state, what each button does, and the lists the page renders. The markup below it reads from `v`. To connect real data, replace the demo arrays in `extra()` or `renderVals()` with data from your API or CMS.

## Styling

- The look comes from `src/app/design.css`, so pages match the design pixel for pixel.
- Tailwind utilities and brand colour tokens are available for new work, for example `bg-brand-pink`, `text-brand-blue` and `bg-brand-night`.
- Tailwind's reset (preflight) is switched off on purpose, so it doesn't change the designed styles.
- The Outfit font is self-hosted through `@fontsource`. It stands in for the brand typeface, Aventa; swap it in once the licensed font files are available.

## Deploying

The site deploys to Vercel with no extra setup: import the repo and use the default Next.js settings.
