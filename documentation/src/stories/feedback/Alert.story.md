# FdsAlert

The alert component displays important messages to users with different severity levels. It follows DKFDS v11 design specifications and provides proper accessibility features for screen readers.

## Usage

```vue
<template>
  <FdsAlert variant="success" show-icon> Your changes have been saved successfully. </FdsAlert>
</template>

<script setup>
import { FdsAlert } from '@madsb/dkfds-vue3'
</script>
```

## Props

| Prop        | Type                                          | Default  | Description                                     |
| ----------- | --------------------------------------------- | -------- | ----------------------------------------------- |
| `variant`   | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Alert type determining visual style and meaning |
| `header`    | `string \| null`                              | `null`   | Optional header text displayed above content    |
| `showIcon`  | `boolean`                                     | `false`  | Whether to display an icon matching the variant |
| `closeable` | `boolean`                                     | `false`  | Whether the alert can be dismissed by user      |

## Events

| Event   | Description                                |
| ------- | ------------------------------------------ |
| `close` | Emitted when user closes a closeable alert |

## Slots

| Slot      | Description                                   |
| --------- | --------------------------------------------- |
| `default` | Main alert content                            |
| `header`  | Custom header content (overrides header prop) |
| `button`  | Custom close button content                   |

## Accessibility

- Error and warning alerts automatically use `role="alert"` for immediate screen reader announcement
- Icons include appropriate `aria-label` attributes in Danish
- Close buttons include both icon and text for clarity
- Supports keyboard navigation for all interactive elements
- High contrast colors ensure readability across themes

## Design Guidelines

- **Info alerts** for general information and status updates
- **Success alerts** for completed actions and confirmations
- **Warning alerts** for important notices requiring attention
- **Error alerts** for problems that need immediate user action
- Use headers to provide clear context for the alert content
- Keep alert messages concise and actionable
- Use closeable alerts for non-critical notifications
- Group related alerts together when multiple messages are needed

## Themes

The alert component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling with neutral colors
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
