# FdsIkon

The icon component renders SVG icons from the DKFDS Material Design icon set with proper accessibility attributes. It supports both decorative and meaningful icons, inline sizing, and screen reader integration.

## Usage

```vue
<template>
  <!-- Decorative icon (hidden from screen readers) -->
  <FdsIkon icon="home" />

  <!-- Meaningful icon (accessible to screen readers) -->
  <FdsIkon 
    icon="warning" 
    :decorative="false" 
    aria-label="Warning: Please review your input" 
  />

  <!-- Inline icon that scales with text -->
  <p>
    <FdsIkon icon="check" :inline="true" />
    Task completed
  </p>
</template>

<script setup>
import { FdsIkon } from '@madsb/dkfds-vue3'
</script>
```

## Props

| Prop         | Type      | Default | Description                                                    |
| ------------ | --------- | ------- | -------------------------------------------------------------- |
| `icon`       | `string`  | `'home'`| Icon name from DKFDS Material Design icon set                 |
| `inline`     | `boolean` | `false` | Adjust icon to text height (inline display)                   |
| `ariaLabel`  | `string`  | -       | ARIA label for screen readers (required when decorative=false)|
| `decorative` | `boolean` | `true`  | Whether the icon is decorative (hidden from screen readers)   |

## Events

This component does not emit any events.

## Accessibility

- **Decorative icons** (default): Use `aria-hidden="true"` and are hidden from screen readers
- **Meaningful icons**: Set `decorative="false"` and provide `aria-label` for screen reader context
- **Role attribute**: Automatically set to `"img"` for meaningful icons with aria-label
- **Inline icons**: Scale with surrounding text for consistent visual alignment

### Examples:
```vue
<!-- Decorative: Icon adds visual interest but doesn't convey meaning -->
<FdsButton>
  <FdsIkon icon="save" :decorative="true" />
  Save Document
</FdsButton>

<!-- Meaningful: Icon conveys important information -->
<FdsIkon 
  icon="error" 
  :decorative="false" 
  aria-label="Error: Form validation failed" 
/>
```

## Design Guidelines

- **Use decorative icons** when the icon reinforces text content but doesn't add new meaning
- **Use meaningful icons** when the icon conveys important information not available in text
- **Inline icons** are perfect for text integration (checkmarks, status indicators)
- **Block icons** work well for buttons, cards, and standalone visual elements
- **Consistent sizing**: Icons maintain consistent visual weight across the interface

### When to Use:
- Status indicators and feedback messages
- Navigation and action buttons
- Visual reinforcement of content
- Text enhancement and emphasis

### When NOT to Use:
- As the sole means of conveying critical information
- Without proper accessibility attributes for meaningful icons
- In dense text where they create visual clutter

## Available Icons

The component uses the DKFDS Material Design icon set including:

**Navigation**: home, arrow-back, arrow-forward, chevron-* directions, menu
**Actions**: check, close, save, delete, edit, add, remove, refresh
**Feedback**: warning, info, error, help
**Content**: search, star, bookmark, calendar-month, download
**User**: account, visibility, settings

## Themes

The icon component automatically adapts to the selected theme:
- **Default**: Standard DKFDS icon styling
- **VirkDK**: Business-oriented icon presentation
- **BorgerDK**: Citizen-oriented icon styling

Icons maintain consistent visual weight and color inheritance across all themes.
