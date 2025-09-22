# Repository Guidelines

## Project Structure & Module Organization
The library lives in `src`, with Vue components under `src/components`, typed utilities in `src/utils`, and shared composables within `src/composables`. Unit tests sit in `src/__tests__/components/*.test.ts`, while reusable fixtures and render helpers live in `test-shared`. `examples/demo` contains the Vite sandbox targeted by `pnpm dev`, and `documentation` powers the docs site. Build artefacts land in `dist/`; don’t edit them manually. CLI helpers in `scripts/` plus `prepare-package.sh` support publishing.

## Build, Test, and Development Commands
Use pnpm throughout the workspace. `pnpm install` bootstraps dependencies. `pnpm dev` runs the demo sandbox locally for component smoke testing. `pnpm build` executes the library build then emits TypeScript declarations. `pnpm docs:dev` starts the documentation site. Run `pnpm lint` or `pnpm lint:fix` before commits, and `pnpm format` to apply Prettier across `src`, `examples`, and `documentation`.

## Coding Style & Naming Conventions
Code is TypeScript-first in Vue 3 SFCs with 2-space indentation enforced by ESLint and Prettier. Vue files stay kebab-case (for example `src/components/forms/fds-input.vue`) while exports use the `Fds` PascalCase prefix. Composables follow the `useX` pattern from `src/composables`, and utilities remain camelCase. Avoid ad-hoc lint overrides; adjust `eslint.config.cjs` if a rule truly needs tuning. Styles extend DKFDS SCSS via `src/assets` and `src/styles`.

## Testing Guidelines
Vitest powers unit tests with Testing Library and `vitest-axe` for accessibility checks. Add specs alongside related components in `src/__tests__/components`, named `*.test.ts`. Favor render-driven tests using helpers in `src/test-utils.ts` rather than shallow stubs. Run `pnpm test` during development; gate pull requests with `pnpm test:run` and `pnpm test:coverage` to catch regressions and watch accessibility assertions. Keep shared fixtures in `test-shared`.

## Commit & Pull Request Guidelines
Follow Conventional Commits, mirroring existing history: `feat`, `fix`, `chore`, etc., optionally scoping (`feat(button): support loading state`). Each PR should describe intent, list verification commands (lint, tests), and link issues. Include before/after screenshots or GIFs when touching user-facing markup or styles, and call out accessibility considerations. Request review once the branch is rebased on `main` and CI is green.
