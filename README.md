# [Decision Making Tool](https://vlmna13.github.io/decision-making-tool/#home)

A single-page app with an animated decision wheel — built with TypeScript and Vite, without any UI framework.

## Features

- **Custom hash-based router** — implemented from scratch as a TypeScript class; handles `hashchange` events, supports error routes
- **Decision wheel** — enter options on the home page, spin the wheel to get a random result with animation
- **Component architecture** — UI elements are encapsulated in typed TypeScript modules
- **Input validation** — guarded before navigating to the wheel view
- **Error page** — graceful fallback for unknown routes
- **Full linting pipeline** — ESLint (unicorn plugin), Prettier, Stylelint with `stylelint-config-clean-order`
- **Git hooks** — Husky + lint-staged run format/lint on commit; commitlint enforces Conventional Commits

## Tech Stack

| | |
|---|---|
| Language | TypeScript |
| Bundler | Vite 6 |
| Styles | CSS3 |
| Linting | ESLint + eslint-plugin-unicorn, Prettier, Stylelint |
| Git hooks | Husky, lint-staged, commitlint |
