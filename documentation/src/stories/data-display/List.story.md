# FdsList & FdsListItem

Flexible list components implementing DKFDS v11 specifications for organizing and displaying content in ordered or unordered lists. Supports multiple visual variants, nesting, and flexible layouts for different design contexts.

## Usage

```vue
<template>
  <!-- Basic unordered list -->
  <FdsList>
    <FdsListItem>First item</FdsListItem>
    <FdsListItem>Second item</FdsListItem>
    <FdsListItem>Third item</FdsListItem>
  </FdsList>

  <!-- Ordered list with numbering -->
  <FdsList :ordered="true">
    <FdsListItem>Step one</FdsListItem>
    <FdsListItem>Step two</FdsListItem>
    <FdsListItem>Step three</FdsListItem>
  </FdsList>

  <!-- Bordered list with flex items -->
  <FdsList variant="bordered">
    <FdsListItem :flex="true" :justify-between="true">
      <span>Item name</span>
      <button>Action</button>
    </FdsListItem>
  </FdsList>
</template>

<script setup>
import { FdsList, FdsListItem } from '@madsb/dkfds-vue3'
</script>
```

## Props

### FdsList Props

| Prop             | Type                                                           | Default | Description                                |
| ---------------- | -------------------------------------------------------------- | ------- | ------------------------------------------ |
| `variant`        | `'bordered' \| 'unstyled' \| 'nobullet' \| 'overflow' \| null` | `null`  | Visual variant controlling list appearance |
| `ordered`        | `boolean`                                                      | `false` | Render as ordered list (ol) with numbering |
| `noTopMargin`    | `boolean`                                                      | `false` | Remove top margin for tight layouts        |
| `noBottomMargin` | `boolean`                                                      | `false` | Remove bottom margin for tight layouts     |

### FdsListItem Props

| Prop             | Type                                  | Default | Description                                   |
| ---------------- | ------------------------------------- | ------- | --------------------------------------------- |
| `variant`        | `'current' \| 'active' \| 'disabled'` | -       | Visual state of the list item                 |
| `role`           | `'none'`                              | -       | ARIA role for accessibility customization     |
| `flex`           | `boolean`                             | `false` | Apply flexbox layout to the item              |
| `justifyBetween` | `boolean`                             | `false` | Apply justify-content-between (requires flex) |

## Events

Both components inherit standard DOM events through `v-bind="$attrs"`.

## Accessibility

- Use ordered lists (`ordered="true"`) for sequential content like steps or rankings
- Use unordered lists for general collections of items
- The `current` variant indicates the current page/section in navigation
- Use `role="none"` on list items when removing list semantics for custom layouts
- Ensure adequate color contrast for all list variants
- Support keyboard navigation for interactive list items

## Design Guidelines

- **Basic lists**: Use default styling for simple content organization
- **Bordered lists**: Use for structured content that needs visual separation
- **No bullet lists**: Use for navigation menus or clean layouts
- **Overflow lists**: Use for dropdown menus and overflow contexts
- **Nested lists**: Support hierarchical content with proper indentation
- **Flex layouts**: Use for complex content arrangements within list items

## List Variants

- **Default**: Standard bullet points or numbers with DKFDS spacing
- **Bordered**: Adds borders between items for structured content
- **Unstyled**: Removes all default styling for custom designs
- **No bullet**: Removes bullets/numbers while maintaining semantics
- **Overflow**: Optimized for dropdown and menu contexts

## Item States

- **Default**: Standard list item appearance
- **Current**: Indicates the current page or active section
- **Active**: Highlights selected or focused items
- **Disabled**: Shows inactive or unavailable items

## Themes

The list components automatically adapt to the selected theme:

- **Default**: Standard DKFDS styling with proper spacing and typography
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
