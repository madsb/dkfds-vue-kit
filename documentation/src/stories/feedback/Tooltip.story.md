# FdsTooltip

The tooltip component provides contextual help information through an accessible interface with click or hover triggers. It follows DKFDS v11 specifications and is designed primarily for help icons but can be adapted for other contextual information needs.

## Usage

```vue
<template>
  <FdsTooltip
    content="This field is required for processing your application"
    trigger="click"
    position="above"
  />
</template>

<script setup>
import { FdsTooltip } from '@madsb/dkfds-vue-kit'
</script>
```

## Props

| Prop           | Type                 | Default   | Description                                                        |
| -------------- | -------------------- | --------- | ------------------------------------------------------------------ |
| `content`      | `string`             | -         | Tooltip text content to display (required)                         |
| `position`     | `'above' \| 'below'` | `'above'` | Position of tooltip relative to the trigger button                 |
| `trigger`      | `'hover' \| 'click'` | `'click'` | Interaction method to trigger tooltip display                      |
| `icon`         | `string`             | `'help'`  | Icon name to display in the tooltip button                         |
| `disabled`     | `boolean`            | `false`   | Disable tooltip interaction completely                             |
| `forceVisible` | `boolean`            | `false`   | Force tooltip to remain visible regardless of trigger              |
| `isLabel`      | `boolean`            | `false`   | Use tooltip content as aria-label instead of aria-describedby      |
| `id`           | `string`             | -         | Custom ID for the tooltip element (auto-generated if not provided) |
| `ariaLabel`    | `string`             | -         | Custom aria-label text for the tooltip trigger button              |

## Events

| Event    | Description                                        |
| -------- | -------------------------------------------------- |
| `show`   | Emitted when tooltip becomes visible               |
| `hide`   | Emitted when tooltip is hidden/dismissed           |
| `toggle` | Emitted when visibility changes (provides boolean) |

## Accessibility

- Tooltips are fully keyboard accessible with Tab navigation
- Click triggers can be activated with Enter or Space keys
- Hover triggers activate automatically on keyboard focus
- Screen readers receive appropriate ARIA attributes (aria-describedby or aria-labelledby)
- Escape key dismisses any open tooltip
- Icon-only buttons include appropriate ARIA labels
- Supports high contrast and reduced motion preferences

## Design Guidelines

- **Use click triggers** for better mobile and accessibility support
- **Keep content concise** - tooltips should provide brief, helpful context
- **Position thoughtfully** - above is default, but below works well for headers
- **Consider mobile users** - hover triggers don't work well on touch devices
- **Provide meaningful icons** - help icon is default, but info/warning may be more appropriate
- **Don't overuse** - too many tooltips can overwhelm users
- **Test with keyboard** - ensure all tooltips are accessible via keyboard navigation

## Themes

The tooltip component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling with neutral colors
- **VirkDK**: Business-oriented styling for Virk.dk with professional appearance
- **BorgerDK**: Citizen-oriented styling for Borger.dk with accessible, friendly design
