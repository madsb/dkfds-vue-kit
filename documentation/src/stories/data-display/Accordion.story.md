# FdsAccordion

Collapsible content panels that allow users to show and hide sections of related information. The accordion follows DKFDS v11 specifications and provides accessible expand/collapse functionality with keyboard navigation support.

## Usage

```vue
<template>
  <!-- Basic accordion -->
  <FdsAccordion header="Section Title"> Content that can be expanded or collapsed </FdsAccordion>

  <!-- Controlled accordion with v-model -->
  <FdsAccordion
    v-model="isExpanded"
    header="Controlled Section"
    @fds.accordion.open="handleOpen"
    @fds.accordion.close="handleClose"
  >
    Controlled content visibility
  </FdsAccordion>

  <!-- Accordion group for coordinated behavior -->
  <FdsAccordionGroup>
    <FdsAccordion header="Section 1">Content 1</FdsAccordion>
    <FdsAccordion header="Section 2">Content 2</FdsAccordion>
    <FdsAccordion header="Section 3">Content 3</FdsAccordion>
  </FdsAccordionGroup>
</template>

<script setup>
import { ref } from 'vue'
import { FdsAccordion, FdsAccordionGroup } from '@madsb/dkfds-vue3'

const isExpanded = ref(false)

const handleOpen = () => {
  console.log('Accordion opened')
}

const handleClose = () => {
  console.log('Accordion closed')
}
</script>
```

## Props

### FdsAccordion

| Prop          | Type                                        | Default | Description                                |
| ------------- | ------------------------------------------- | ------- | ------------------------------------------ |
| `header`      | `string`                                    | -       | Accordion header text                      |
| `modelValue`  | `boolean`                                   | `false` | Controlled expanded state (v-model)        |
| `headerTag`   | `'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'`      | `'h2'`  | HTML heading tag for semantic structure    |
| `variant`     | `'success' \| 'warning' \| 'error' \| null` | `null`  | Status variant with icon                   |
| `variantText` | `string`                                    | -       | Custom text for status variants            |
| `id`          | `string`                                    | -       | Custom ID (auto-generated if not provided) |

### FdsAccordionGroup

| Prop             | Type      | Default      | Description                              |
| ---------------- | --------- | ------------ | ---------------------------------------- |
| `expandedText`   | `string`  | `'Luk alle'` | Text for bulk collapse button            |
| `collapsedText`  | `string`  | `'Åbn alle'` | Text for bulk expand button              |
| `showBulkButton` | `boolean` | `true`       | Whether to show bulk control button      |
| `modelValue`     | `boolean` | -            | Controlled bulk expanded state (v-model) |

## Events

### FdsAccordion

| Event                 | Description                         |
| --------------------- | ----------------------------------- |
| `update:modelValue`   | Emitted when expanded state changes |
| `fds.accordion.open`  | Emitted when accordion opens        |
| `fds.accordion.close` | Emitted when accordion closes       |

### FdsAccordionGroup

| Event               | Description                                |
| ------------------- | ------------------------------------------ |
| `update:modelValue` | Emitted when bulk expanded state changes   |
| `toggle-all`        | Emitted when bulk toggle button is clicked |

## Slots

### FdsAccordion

| Slot      | Description                                   |
| --------- | --------------------------------------------- |
| `default` | Main accordion content                        |
| `header`  | Custom header content (overrides header prop) |

### FdsAccordionGroup

| Slot      | Description                                   |
| --------- | --------------------------------------------- |
| `default` | Child accordion components                    |
| `header`  | Custom header content (overrides bulk button) |

## Accessibility

- Full keyboard navigation support (Tab, Enter, Space)
- Proper ARIA attributes (`aria-expanded`, `aria-controls`, `aria-hidden`)
- Semantic HTML with customizable heading levels
- Screen reader announcements for state changes
- Focus management when expanding/collapsing
- High contrast support for all themes

## Design Guidelines

- Use accordions to organize related content that doesn't need to be visible simultaneously
- Limit the number of accordion sections to avoid overwhelming users
- Use descriptive headers that clearly indicate the content within
- Consider using accordion groups for related sections with bulk controls
- Status variants (success, warning, error) help communicate section state
- Avoid nesting accordions too deeply for better usability

## Themes

The accordion component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling with subtle borders and hover states
- **VirkDK**: Business-oriented styling optimized for professional use
- **BorgerDK**: Citizen-oriented styling with enhanced readability
