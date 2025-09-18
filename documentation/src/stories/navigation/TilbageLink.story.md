# FdsTilbageLink

The tilbage link component provides consistent back navigation for multi-step processes and connected page sequences. It follows DKFDS v11 specifications with a chevron icon and customizable text.

## Usage

```vue
<template>
  <FdsTilbageLink @click="goBack">
    Tilbage til oversigt
  </FdsTilbageLink>
</template>

<script setup>
import { FdsTilbageLink } from '@madsb/dkfds-vue3'

const goBack = () => {
  // Custom back navigation logic
  // router.go(-1) or history.back()
}
</script>
```

## Props

| Prop   | Type     | Default                 | Description                                                    |
| ------ | -------- | ----------------------- | -------------------------------------------------------------- |
| `href` | `string` | `'javascript:void(0);'` | Link destination URL. Defaults to void to use click handler   |

## Events

| Event   | Description                                                           |
| ------- | --------------------------------------------------------------------- |
| `click` | Emitted when the tilbage link is clicked. Receives MouseEvent object |

## Accessibility

- The component includes proper semantic markup with anchor element
- Uses decorative chevron icon that doesn't interfere with screen readers
- Supports keyboard navigation (Tab, Enter) as standard link behavior
- Link text should be descriptive of the destination or action

## Design Guidelines

- Position tilbage links at the top left of the page, immediately under the header
- Use for multi-step processes, wizards, and hierarchical navigation
- **Do not use with breadcrumbs** - they serve similar navigation purposes
- Text should be concise but descriptive of the back destination
- Most effective in task-oriented workflows and connected page sequences

### When to Use

- Multi-step forms or wizards (e.g., "Tilbage til trin 2")
- Detail views that came from list views (e.g., "Tilbage til søgeresultater")
- Error recovery navigation (e.g., "Tilbage til sikker side")
- Task completion flows

### When NOT to Use

- On pages that already have breadcrumb navigation
- As the primary navigation method
- For unrelated page navigation (use regular links instead)

## Themes

The tilbage link automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with blue chevron and text
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
