# FdsSpinner

The spinner component provides visual feedback for loading states with accessibility support and multiple size variants. It follows DKFDS v11 design specifications and includes proper ARIA live regions for screen readers.

## Usage

```vue
<template>
  <!-- Basic spinner with screen reader text -->
  <FdsSpinner sr-only-text="Loading content..." />

  <!-- Spinner with visible status text -->
  <FdsSpinner aria-live="polite">
    Loading your data...
  </FdsSpinner>

  <!-- Small spinner for inline use -->
  <FdsSpinner size="small" sr-only-text="Processing..." />
</template>

<script setup>
import { FdsSpinner } from '@madsb/dkfds-vue3'
</script>
```

## Props

| Prop         | Type                              | Default     | Description                                               |
| ------------ | --------------------------------- | ----------- | --------------------------------------------------------- |
| `size`       | `'small' \| 'large'`               | `'large'`   | Size variant affecting visual dimensions                  |
| `variant`    | `'default' \| 'light'`             | `'default'` | Color variant for different background contexts          |
| `srOnlyText` | `string`                          | -           | Screen reader text when no visible status is shown      |
| `centered`   | `boolean`                         | `false`     | Whether to center spinner horizontally in container     |
| `ariaLive`   | `'polite' \| 'assertive' \| 'off'` | `'polite'`  | ARIA live region politeness for status announcements   |

## Slots

| Slot      | Description                                              |
| --------- | -------------------------------------------------------- |
| `default` | Status text content displayed next to spinner          |

## Accessibility

- Uses ARIA live regions to announce status updates to screen readers
- Supports both visible status text and screen reader only text
- `aria-live="polite"` waits for screen reader to pause before announcing
- `aria-live="assertive"` interrupts screen reader for urgent updates
- Spinner element is hidden from screen readers when status text is present
- Proper semantic markup ensures compatibility with assistive technologies

## Design Guidelines

- **Small spinners** work well inline with text or in buttons
- **Large spinners** are better for prominent loading states and full-page loading
- Use **default variant** on light backgrounds
- Use **light variant** on dark backgrounds for better visibility
- Always provide either `sr-only-text` or visible status text for accessibility
- Use `aria-live="polite"` for non-urgent updates (default)
- Use `aria-live="assertive"` for critical updates that require immediate attention
- Center spinners in containers when they represent the primary loading state
- Consider context when choosing between standalone spinners and those with status text

## Usage Patterns

### Inline Loading
```vue
<p>Processing your request <FdsSpinner size="small" sr-only-text="Processing" /> please wait...</p>
```

### Button Loading State
```vue
<button :disabled="loading">
  <FdsSpinner v-if="loading" size="small" sr-only-text="Saving" />
  {{ loading ? 'Saving...' : 'Save Changes' }}
</button>
```

### Full-Page Loading
```vue
<FdsSpinner 
  size="large" 
  :centered="true" 
  aria-live="polite"
>
  Loading application data...
</FdsSpinner>
```

### Modal Loading
```vue
<FdsSpinner 
  size="large" 
  :centered="true" 
  aria-live="assertive"
>
  Processing your submission...
</FdsSpinner>
```

## Themes

The spinner component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with theme-appropriate colors
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
