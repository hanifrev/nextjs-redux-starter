## [Next.js](https://nextjs.org/) + Typescript + Redux Toolkit + RTK Query + TailwindCSS starter kit

The Next.js version is 14 and it using App Router. The documentation of this starter kit is on progress, and I will record a video to brief about this starter kit / boilerplate

## Getting Started

#### Clone this template

There's two way to clone this template:

1. Click the <b>'Use this template'</b> button above
   or
2. Use `create-next-app`

```
pnpm create next-app  -e https://github.com/hanifrev/nextjs-redux-starter
```

you can use yarn / npx too, it's up to you, but I recommend to using pnpm

#### Installation

```
pnpm install
```

#### .env files

Make sure you already create `.env` files on the root of the repo, you can use everything inside `.env.example` as starter

#### Running

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Folder Structure FAQ

I'm gonna explain some folder that might makes you confuse

### common

The <b>common</b> directory houses generic and reusable components, types, and utilities that are shared across the application.

- <b>Components:</b> This directory contains reusable UI components such as buttons, cards, modals, and other atoms or organisms. These components are often generic and can be used across different modules or features in your application. They are standalone and not tied to any specific functionality.

- <b>Types:</b> Here, you store TypeScript type definitions/interfaces that are commonly used throughout your application. These types can include shared data structures, API response formats, or any other types that are used across multiple modules.

- <b>Utils:</b> The utils directory typically holds utility functions or helper functions that are used in various parts of your application. These can include functions for data manipulation, formatting, validation, or any other common tasks. There's a 'fetcher' utils over there

### modules

The <b>modules</b> directory organizes functionality, components, services, and types (all of which are optional) that are specific to different modules or features of your application. In your actual application, you may have multiple directories under the <b>modules</b> directory, each representing a specific module or feature. However, it's important to note that the components within each module directory are tailored to the functionality or UI of that particular module and may not be directly reusable in other modules.

### lib

The <b>lib</b> folder centralizes your Redux state management setup, including the store, provider, feature-specific slices/reducers, and of course the services folder. The <b>services</b> folder focuses on API-related functionality, including RTK Query setup for data fetching and API service files for handling HTTP requests.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Learn Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [Learn RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
