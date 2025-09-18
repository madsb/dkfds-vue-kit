# FdsTag

Interactive labels for categorization, filtering, and content organization. Unlike badges, tags are typically user-interactive elements supporting selection, removal, and filtering operations. Designed for content management interfaces following DKFDS v11 specifications.

## Usage

```vue
<template>
  <FdsTag @click="handleTagClick"> Category Name </FdsTag>

  <!-- Removable tag with icon -->
  <FdsTag icon="highlight-off" @click="removeTag"> Removable Tag </FdsTag>
</template>

<script setup>
import { FdsTag } from '@madsb/dkfds-vue3'

const handleTagClick = (formId) => {
  console.log('Tag clicked:', formId)
}

const removeTag = (formId) => {
  // Handle tag removal
}
</script>
```

## Props

| Prop   | Type     | Default | Description                                      |
| ------ | -------- | ------- | ------------------------------------------------ |
| `icon` | `string` | -       | Icon name (commonly 'close', 'star', 'bookmark') |
| `id`   | `string` | -       | Custom ID (auto-generated if not provided)       |

## Events

| Event   | Description                                             |
| ------- | ------------------------------------------------------- |
| `click` | Emitted when tag is clicked, provides form ID parameter |

## Accessibility

- Tags are implemented as `<button>` elements for semantic correctness
- Icons have `aria-hidden="true"` and `focusable="false"` for screen readers
- Fully keyboard navigable (Tab, Enter, Space)
- Each tag gets a unique ID automatically if not provided
- For icon-only functionality, ensure the text content describes the action

## Design Guidelines

### When to Use

- Provide secondary, metadata-related information
- Enable content categorization and filtering
- Show user selections or applied filters
- Indicate removable items in lists
- Display status or category information

### When NOT to Use

- As primary navigation elements
- To replace systematic navigation
- For critical functionality (tags should be supplementary)
- When the information is essential to the user's core workflow

### Best Practices

- Use tags sparingly and meaningfully
- Use recognizable words from your solution's context
- Capitalize first letter, use lowercase for remaining text
- Provide clear visual feedback for interactive states
- Consider the removable pattern for user-generated content

## Common Patterns

### Content Metadata

Use tags to show categories, topics, or classifications for articles, documents, or other content.

### Filtering Interface

Allow users to select and deselect filter criteria using clickable tags with visual selection states.

### Removable Items

Use tags with close icons to represent items that can be removed from lists, selections, or filters.

### Status Indicators

Show current state, priority level, or processing status using descriptive tags.

## Themes

The tag component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling with neutral colors
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
