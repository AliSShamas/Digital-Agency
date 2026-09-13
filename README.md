# Digital Agency

A modern bilingual digital agency and content publishing website built with Next.js, TypeScript, Tailwind CSS, and next-intl.

The project supports both English and Arabic, including RTL layouts, localized navigation, translated content, localized metadata, blog articles, a contact form using Server Actions, and responsive mobile navigation.

---

## Live Demo

Add the Vercel URL here after deployment:

```text
[View the live website](https://digital-agency-xi-topaz.vercel.app)
Features
English and Arabic localization
Locale-based routes using /en and /ar
RTL and LTR layout support
Responsive desktop and mobile navigation
Accessible mobile drawer
Localized navigation and footer
Home, About, Services, Blog, and Contact pages
Dynamic blog article routes
Localized blog article content
Localized article date formatting
Static generation of known blog article routes
Contact form with Next.js Server Actions
Server-side form validation
Form state preservation after validation errors
Localized SEO metadata
Canonical and alternate-language URLs
TypeScript strict typing
React Server Components by default
Tailwind CSS responsive styling
Dark mode compatible styling
Tech Stack
Next.js 16
React
TypeScript
Tailwind CSS
next-intl
Lucide React
Vercel
Project Structure
messages/
├── en.json
└── ar.json

src/
├── app/
│   └── [locale]/
│       ├── layout.tsx
│       ├── page.tsx
│       ├── about/
│       │   └── page.tsx
│       ├── services/
│       │   └── page.tsx
│       ├── blog/
│       │   ├── page.tsx
│       │   └── [slug]/
│       │       └── page.tsx
│       └── contact/
│           ├── page.tsx
│           └── actions.ts
│
├── components/
│   ├── common/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── NavigationLinks.tsx
│   │   └── ContactForm.tsx
│   │
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── FeatureGrid.tsx
│   │   └── Stats.tsx
│   │
│   └── blog/
│       ├── ArticleCard.tsx
│       ├── ArticleDate.tsx
│       └── BlogListing.tsx
│
├── data/
│   └── blog.ts
│
├── i18n/
│   ├── navigation.ts
│   ├── request.ts
│   └── routing.ts
│
├── types/
│   └── blog.ts
│
└── proxy.ts
Localization

The application supports:

English → /en
Arabic  → /ar

Translation files are stored in:

messages/en.json
messages/ar.json

The current locale determines which translation file is loaded.

The root localized layout also sets the correct document direction:

<html
  lang={locale}
  dir={locale === 'ar' ? 'rtl' : 'ltr'}
>

Arabic therefore uses RTL layout while English uses LTR.

The project also uses logical CSS utilities such as:

start / end
text-start

instead of relying only on physical left/right positioning.

Blog

Blog article information is stored in:

src/data/blog.ts

Each article follows the BlogArticle TypeScript interface.

Example:

export interface BlogArticle {
  slug: string;
  date: string;
  translationKey: string;
}

The slug is used to generate article URLs such as:

/en/blog/digital-transformation
/ar/blog/digital-transformation

Article text is stored in the English and Arabic translation files.

The dynamic article page uses the slug to find the corresponding article and translation key.

Known article routes are generated using generateStaticParams().

Contact Form

The Contact page uses a React Client Component for interactive form state and a Next.js Server Action for server-side form processing.

The Server Action is located at:

src/app/[locale]/contact/actions.ts

The flow is:

User fills form
       ↓
ContactForm
       ↓
Server Action
       ↓
Validation
       ↓
Success or error state

Validation errors preserve the user's entered form values.

The current project validates and processes the submitted form data but does not yet persist submissions to a database or send emails.

Server and Client Component Strategy

The project follows a server-first architecture.

Components remain React Server Components by default.

'use client' is only used where browser interaction or client-side React hooks are required.

Examples include:

LanguageSwitcher
MobileMenu
NavigationLinks
ContactForm

Server Actions use:

'use server';

for server-side form processing.

SEO and Metadata

Pages use localized metadata including:

title
description
canonical URL
alternate language URLs

For example:

/en/about
/ar/about

are identified as English and Arabic versions of the same page.

The project uses:

NEXT_PUBLIC_SITE_URL

as the base URL for production metadata.

During local development, it falls back to:

http://localhost:3000
Environment Variables

Create a .env.local file in the project root:

NEXT_PUBLIC_SITE_URL=http://localhost:3000

For production on Vercel, set it to the deployed URL:

NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app

Do not commit .env.local to Git.

Installation

Clone the repository:

git clone https://github.com/AliSShamas/Digital-Agency.git

Enter the project:

cd Digital-Agency

Install dependencies:

npm install
Development

Start the development server:

npm run dev

Open:

http://localhost:3000

The locale routing will redirect or resolve to one of the supported locale paths.

For example:

http://localhost:3000/en
http://localhost:3000/ar
Linting

Run ESLint:

npm run lint

Fix any reported errors before committing or deploying.

Production Build

Create a production build:

npm run build

Run the production server locally with:

npm start
Deployment

The project is designed to be deployed with Vercel.

Import the GitHub repository into Vercel and keep the detected framework as:

Next.js

After deployment, add the following environment variable in the Vercel project settings:

NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app

Redeploy after adding or changing environment variables.

Git Workflow

Development follows a feature-branch workflow.

Example:

git switch main
git pull origin main

git switch -c feat/example-feature

After completing and testing the feature:

git add .
git commit -m "feat: add example feature"
git push -u origin feat/example-feature

Then create a Pull Request into main.

Conventional commit prefixes include:

feat:
fix:
refactor:
Quality Checks

Before opening a Pull Request or deploying:

npm run lint
npm run build

The application should also be manually tested in both English and Arabic and on desktop and mobile screen sizes.
