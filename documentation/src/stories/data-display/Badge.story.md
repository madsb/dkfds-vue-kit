# FdsBadge

Small labels used to highlight new, important, or status-related content. Designed for supplementary information that needs visual emphasis without being the primary focus. The badge component follows DKFDS v11 design specifications and supports semantic variants for contextual meaning.

## Usage

```vue
<template>
  <div>
    <!-- Basic badge -->
    <FdsBadge>New</FdsBadge>

    <!-- Status badges -->
    <FdsBadge variant="success">Approved</FdsBadge>
    <FdsBadge variant="warning">Pending</FdsBadge>
    <FdsBadge variant="error">Rejected</FdsBadge>

    <!-- Emphasized badge -->
    <FdsBadge tag="strong" variant="warning">Important</FdsBadge>
  </div>
</template>

<script setup>
import { FdsBadge } from '@madsb/dkfds-vue-kit'
</script>
```

## Props

| Prop      | Type                                                  | Default  | Description                                                   |
| --------- | ----------------------------------------------------- | -------- | ------------------------------------------------------------- |
| `tag`     | `'span' \| 'strong'`                                  | `'span'` | HTML element type for semantic meaning                        |
| `variant` | `'success' \| 'info' \| 'warning' \| 'error' \| null` | `null`   | Visual variant indicating semantic status or importance level |

## Events

This component does not emit any events.

## Accessibility

- Use the `tag` prop with `'strong'` for badges that convey important or emphasized information
- Ensure badge content is concise and meaningful for screen readers
- Avoid using badges as the sole means of conveying critical information
- Consider color contrast requirements - all variants meet WCAG AA standards
- Badge content should be descriptive (e.g., "Under Review" rather than just "Yellow")

## Design Guidelines

- **Use sparingly** - Too many badges can reduce their effectiveness
- **Be descriptive** - Use clear, meaningful text rather than vague labels
- **Choose appropriate variants**:
  - `success` for completed, approved, or positive states
  - `info` for neutral information or new content
  - `warning` for caution, pending, or attention-needed states
  - `error` for failures, rejections, or critical issues
  - Default (no variant) for general labels and counts
- **Semantic HTML** - Use `tag="strong"` for emphasized or important badges
- **Context matters** - Place badges near related content for clear association
- **Consistent usage** - Use the same variant for similar states throughout your application

## Common Use Cases

- **Status indicators**: Application status, document states, process stages
- **Content labels**: New articles, featured content, categories
- **Notification counts**: Unread messages, pending tasks, alerts
- **System states**: Online/offline status, connection states
- **Process feedback**: Success confirmations, error states, warnings

## Themes

The badge component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling with neutral colors
- **VirkDK**: Business-oriented styling optimized for Virk.dk
- **BorgerDK**: Citizen-oriented styling optimized for Borger.dk
