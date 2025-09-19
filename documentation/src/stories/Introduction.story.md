---
group: 'top'
icon: 'carbon:bookmark'
title: 'Introduction'
---

# DKFDS Vue 3 Component Library

This library provides Vue 3 wrappers for the Danish Public Design System (DKFDS) so teams can build consistent, accessible public-facing interfaces. Each component mirrors the DKFDS design tokens and interaction patterns while embracing Vue idioms like composables and slots.

## Getting Started

1. Install the package:
   ```bash
   pnpm add @madsb/dkfds-vue3
   ```
2. Import the global styles once, typically in your main entrypoint:
   ```ts
   import '@madsb/dkfds-vue3/styles'
   ```
3. Register and use the components you need:

   ```vue
   <script setup lang="ts">
   import { FdsButton } from '@madsb/dkfds-vue3'
   </script>

   <template>
     <FdsButton variant="primary">Gem ændringer</FdsButton>
   </template>
   ```

## Working Locally

This Histoire instance showcases every component with playgrounds, accessibility notes, and code examples. To run it locally:

```bash
pnpm install
pnpm dev    # opens the demo sandbox
pnpm docs:dev  # starts the documentation site with these stories
```

## Learn More

- Browse the component sections in the sidebar to see live examples and the extracted markdown documentation.
- Check the `documentation/STORY_GUIDELINES.md` file for authoring tips when adding or updating stories.
- Visit [designsystem.dk](https://designsystem.dk/) for the official DKFDS guidance and compare behaviors with the Vue implementations here.
