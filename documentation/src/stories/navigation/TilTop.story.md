# FdsTilTop

The back to top component provides smooth scroll-to-top functionality with intelligent visibility management. It follows DKFDS v11 tilbage-til-toppen specifications and appears after the user scrolls down a configurable distance.

## Usage

```vue
<template>
  <FdsTilTop />
</template>

<script setup>
import { FdsTilTop } from '@madsb/dkfds-vue-kit'
</script>
```

## Props

| Prop               | Type     | Default                 | Description                                              |
| ------------------ | -------- | ----------------------- | -------------------------------------------------------- |
| `screenReaderText` | `string` | `'Til toppen af siden'` | Hidden text announced by screen readers                  |
| `visibleText`      | `string` | `'Til toppen'`          | Text displayed alongside icon on desktop                 |
| `threshold`        | `number` | `undefined`             | Custom scroll threshold in pixels (default: 2x viewport) |

## Slots

| Slot      | Description                                      |
| --------- | ------------------------------------------------ |
| `default` | Custom content to display instead of visibleText |

## Accessibility

- Uses semantic `<a>` element with proper href attribute for better accessibility
- Includes hidden screen reader text via `sr-only` class
- Icon is marked as decorative to avoid redundant screen reader announcements
- Fully keyboard navigable (Tab, Enter, Space key support)
- Maintains proper focus management and touch targets on mobile devices
- Provides clear context about the button's purpose through screen reader text

## Design Guidelines

- **When to use**: On long pages where users need easy navigation back to top
- **Positioning**: Fixed in bottom-right corner, doesn't interfere with content
- **Visibility**: Appears only after significant scrolling (default: 2 viewport heights)
- **Responsive**: Shows icon + text on desktop, icon only on mobile
- **Smooth scrolling**: Uses native `scroll-behavior: smooth` for better UX
- **Performance**: Uses passive event listeners for optimal scroll performance

## Behavior

- **Threshold**: Becomes visible after scrolling past threshold (default: 2x viewport height)
- **Responsive text**: Text hidden on mobile (<768px) to save space
- **Smooth scrolling**: Scrolls smoothly to top using native browser behavior
- **Event handling**: Uses passive listeners for better scroll performance
- **Auto-hide**: Automatically hides when near top of page

## Themes

The component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
