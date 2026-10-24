# Repository Guidelines

## Project Structure & Module Organization

The library lives in `src`, with Vue components under `src/components`, typed utilities in `src/utils`, and shared composables within `src/composables`. Unit tests sit in `src/__tests__/components/*.test.ts`, while reusable fixtures and render helpers live in `test-shared`. `documentation` powers the docs site. Build artefacts land in `dist/`; don’t edit them manually. CLI helpers in `scripts/` support publishing.

## Build, Test, and Development Commands

Use pnpm throughout the workspace. `pnpm install` bootstraps dependencies. `pnpm build` executes the library build then emits TypeScript declarations. `pnpm docs:dev` starts the documentation site used for component smoke testing. Run `pnpm lint` or `pnpm lint:fix` before commits, and `pnpm format` to apply Prettier across `src` and `documentation`.

## Coding Style & Naming Conventions

Code is TypeScript-first in Vue 3 SFCs with 2-space indentation enforced by ESLint and Prettier. Vue files stay kebab-case (for example `src/components/forms/fds-input.vue`) while exports use the `Fds` PascalCase prefix. Composables follow the `useX` pattern from `src/composables`, and utilities remain camelCase. Avoid ad-hoc lint overrides; adjust `eslint.config.cjs` if a rule truly needs tuning. Styles extend DKFDS SCSS via `src/assets` and `src/styles`.

## Testing Guidelines

Vitest powers unit tests with Testing Library and `vitest-axe` for accessibility checks. Add specs alongside related components in `src/__tests__/components`, named `*.test.ts`. Favor render-driven tests using helpers in `src/test-utils.ts` rather than shallow stubs. Run `pnpm test` during development; gate pull requests with `pnpm test:run` and `pnpm test:coverage` to catch regressions and watch accessibility assertions. Keep shared fixtures in `test-shared`.

## Commit & Pull Request Guidelines

Follow Conventional Commits, mirroring existing history: `feat`, `fix`, `chore`, etc., optionally scoping (`feat(button): support loading state`). Each PR should describe intent, list verification commands (lint, tests), and link issues. Include before/after screenshots or GIFs when touching user-facing markup or styles, and call out accessibility considerations. Request review once the branch is rebased on `main` and CI is green.

## Judgment and autonomy

- Act when you have enough information. Ask only when the answer would change what you do and you can't resolve it from the request, the code, or a sensible reversible default. When you assume, say what you assumed.
- For a consequential choice between genuinely different approaches, recommend one with a brief reason. Mention alternatives only when the tradeoff is close.
- Carry work through to a verified result. Don't stop at a plan or hand back steps you can do yourself.
- When a step doesn't need my input, keep going. Put progress notes in the same message as your next action; don't end a turn on a status update.
- Watch for the XY problem: when a request prescribes a solution, check that it serves the underlying goal. If it looks like a workaround for a different problem, name the likely real goal and the more direct path before investing in the prescribed one. When the prescribed solution is sound, just build it.
- For non-trivial plans, reason the plan through to its end state before executing, then revisit the original premise with that hindsight (Pólya's "looking back"). Seeing the whole solution often reveals a simpler or better approach that wasn't reachable from the premise alone: a reframing that makes most of the plan unnecessary, or a problem that shouldn't exist. If you find one, propose it before executing the original plan.
- Solve what was asked, completely. Mention adjacent problems instead of fixing them unasked. If the right fix turns out materially larger than the request implied, or needs a hard-to-reverse change such as a data migration or a breaking interface change, say so before committing to it.
- When an approach isn't converging, change the evidence (shrink the repro, add instrumentation, test an unchecked assumption) instead of retrying variations. If you're blocked on something only I can resolve, say what you tried and what you need.

## Engineering

- Treat the project's existing architecture, conventions, and toolchain as the default, not as requirements. Match local naming and idiom in code you touch. Where the project's documented direction (AGENTS.md, architecture docs) differs from what the code does, follow the direction.
- Don't extend a pattern you'd recommend removing. When the existing design is the obstacle (needless layers, dead abstractions, duplicated mechanisms), say so and propose the simpler shape. First understand why it exists.
- Within the code a change touches, simplifying is part of the work: prefer deleting over adding. Broader structural changes follow the scope rule above.
- Change a convention completely, in one deliberate migration, never by quietly adding a second way of doing something next to the first. A half-finished migration is worse than either convention on its own.
- Build for the requirements in front of you (YAGNI). Don't add abstractions, configuration, extension points, or generality without a present need.
- Duplication is cheaper than the wrong abstraction: extract on the third occurrence, not the first (Rule of Three). When unsure, choose the simplest design that passes the tests and reveals intent (Beck's rules of simple design).
- Prefer readable, explicit code over clever abstractions. Comments explain non-obvious intent, constraints, or tradeoffs, not what the code does.
- For bug fixes, add a regression test and confirm it fails without the fix when that's cheap. For new behavior, write focused tests with the change; go test-first when it clarifies the design.
- Before calling coding work done, run the relevant tests plus available build, lint, and type checks. If you couldn't run one, say which and why.
- Prefer code, types, tests, and nearby comments over standalone docs. Add documentation files only when the information can't live near the code or the task asks for them.
