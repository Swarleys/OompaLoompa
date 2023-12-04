# OompaLoompas for Napptilus

This is a technical test for Napptilus, wich shows a list of oompa loompas on the landing page and you can navigate for a detail page.

## Prerequisites 

I  developed the app with PNPM and with Node v18.17.1

## How to run the project

1. - First step clone the repo
```sh
git@github.com:Swarleys/OompaLoompa.git
```
2. - Install the Packages 

```sh
pnpm install
```

3A. - Dev mode

```sh
pnpm dev
```

and open [http://localhost:5173](http://localhost:5173) 

3B. - Build
```sh 
pnpm build
pnpm preview
```

and open [http://localhost:4173](http://localhost:4173) 

## Testing

I added e2e testing with [Playwright](https://playwright.dev/), and unit testing with [Vitest](https://vitest.dev/) and [MSW](https://mswjs.io/) for API mocking

### E2E

You need to have the dev server running with

```sh
pnpm dev
```

and then

```sh
pnpm test:e2e
```

or

```sh
pnpm test:e2e:ui
```

### Unit Testing

```sh
pnpm test
```

or 

```sh
pnpm test:ui
```

## Stack

- [React](https://reactjs.org/)
- [Typescritp](https://www.typescriptlang.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/en/main)