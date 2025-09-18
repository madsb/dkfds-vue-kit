# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a Vue 3 component library implementing the Danish Common Design System (Det Fælles Designsystem - DKFDS). The library provides 40+ accessible components following DKFDS standards for Danish government self-service solutions.

## Key Commands

### Development Setup

```bash
# Install dependencies (using pnpm)
pnpm install

# Build the library
pnpm run build

# Run demo site for development
pnpm run dev
```

### Code Quality

```bash
# Lint code
pnpm run lint

# Auto-fix linting issues
pnpm run lint:fix

# Format code with prettier
pnpm run format

# Type checking
pnpm run typecheck
```

### Testing

```bash
# Run tests
pnpm test

# Run tests once
pnpm test:run

# Run tests with coverage
pnpm test:coverage

# Run tests with UI
pnpm test:ui

# Run a single test file
pnpm test src/__tests__/components/fds-button.test.ts

# Run tests matching a pattern
pnpm test button
```

### Documentation

```bash
# Run VitePress documentation site in development mode
pnpm docs:dev

# Build VitePress documentation for production
pnpm docs:build

# Preview built documentation locally
pnpm docs:preview
```

### Histoire Component Stories

```bash
# Run Histoire story development server
pnpm -C documentation run story:dev
# or
pnpm -C documentation run dev

# Build Histoire stories for production
pnpm -C documentation run story:build

# Preview built Histoire stories
pnpm -C documentation run story:preview
```

## Architecture

### Project Structure

```
src/
├── components/           # Vue components organized by category
│   ├── forms/           # Form structure components (formgroup, label, hint, etc.)
│   ├── input/           # Input components (input, checkbox, radio, dropdown, etc.)
│   ├── navigation/      # Navigation components (breadcrumb, menu, tabs, etc.)
│   ├── feedback/        # User feedback components (alert, toast, modal, spinner)
│   ├── data-display/    # Data presentation (accordion, card, table, list, etc.)
│   └── layout/          # Layout components (button, cookie notice, language selector)
├── composables/         # Vue composables (formId, generateId, useToast, etc.)
├── utils/               # Utility functions
│   └── scripts/         # DKFDS behavior scripts (dropdown, tooltip, navigation)
├── types/               # TypeScript type definitions
├── assets/              # SCSS styles
└── index.ts             # Main entry point with exports

examples/
└── demo/                # Demo application showcasing all components
```

### Component Naming Conventions

- Core components: `fds-[danish-name]` (e.g., `fds-accordion`, `fds-detaljer`)
- Extended components: `xfds-[name]` (e.g., `xfds-form-input`, `xfds-progressbar`)
- Some exceptions use English names: `fds-input`, `fds-label`, `fds-checkbox`

### Development Principles

- Components must follow DKFDS accessibility standards (WCAG compliance)
- Use original DKFDS HTML structure where possible
- Minimize dependencies - avoid introducing new npm packages
- Components should be minimal and composable
- No vue-router dependency in library components
- All components are tree-shakeable

### Import Patterns

```typescript
// Import from component categories
import { FdsButton } from '@madsb/dkfds-vue3' // From layout
import { FdsInput } from '@madsb/dkfds-vue3' // From input
import { FdsAlert } from '@madsb/dkfds-vue3' // From feedback

// Import composables
import { useToast, formId } from '@madsb/dkfds-vue3'

// Import types
import type { FdsLanguageItem } from '@madsb/dkfds-vue3'
```

### Key Technical Details

- Built with Vite and TypeScript
- Vue 3 Composition API
- SCSS styling following DKFDS design tokens
- Supports both VirkDK and BorgerDK themes
- Single package architecture for simplicity
- Organized components by functional domain
- Full TypeScript support with generated declarations

### Development Workflow

1. Make changes to components in `src/components/[category]/`
2. Update tests in `src/__tests__/`
3. Update component documentation in `docs-site/docs/components/[category]/`
4. Run `pnpm run format` to format code
5. Run `pnpm run lint:fix` to fix linting issues
6. Run `pnpm test:run` to ensure tests pass
7. Run `pnpm run build` to build the library
8. Test in demo app with `pnpm run dev`
9. Preview documentation with `pnpm docs:dev`

### Publishing Preparation

```bash
# Build the library
pnpm run build

# Build documentation
pnpm docs:build

# Run all quality checks
pnpm run lint
pnpm run typecheck
pnpm test:run

# The built files will be in dist/
# The built documentation will be in docs-site/docs/.vitepress/dist/
# Ready for npm publish and documentation deployment
```

### Documentation Architecture

The project uses two documentation systems:

#### VitePress Documentation
- **Configuration**: `docs-site/docs/.vitepress/config.ts` contains navigation and site configuration
- **Component Documentation**: Each component has its own markdown file in `docs-site/docs/components/[category]/`
- **Structure**:
  - Guide section for installation and getting started
  - Components section organized by the same categories as the source code
  - API reference for technical details

#### Histoire Component Stories
- **Location**: `documentation/src/stories/[category]/`
- **Story Files**: 39 `.story.vue` files covering all 59 components
- **Story Guidelines**: `documentation/STORY_GUIDELINES.md` defines story requirements
- **Story Structure**: Each story has max 5 variants (Showcase + features + Playground)
- **Icon Collection**: FdsIconCollection is globally available via `documentation/histoire.setup.ts`
- **Theme Switcher**: Global theme switcher available in top-right corner of all stories

## Important Notes

- This is a single-package library (no monorepo complexity)
- All components are in `src/components/` organized by category
- The demo app uses the workspace protocol to link to the local package
- Documentation is in `docs-site/` and uses VitePress for static site generation
- Always run format and lint after major edits: `pnpm run format && pnpm run lint:fix`
- Keep component documentation in sync with component changes

### Icon System
- Icons are provided via `fds-icon-collection` component containing SVG sprite
- Icon names must match SVG symbol IDs in the collection (e.g., `check`, `warning`, `error`)
- Common icons: `check`, `warning`, `error`, `arrow-forward`, `arrow-back`, `close`, `menu`
- The icon collection is globally available in Histoire stories
