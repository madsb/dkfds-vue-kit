# FdsBreadcrumb

Breadcrumb navigation component that provides hierarchical navigation with support for Vue Router integration, automatic current page detection, and full accessibility features. Follows DKFDS v11 breadcrumb design patterns.

## Usage

```vue
<template>
  <FdsBreadcrumb :items="breadcrumbItems" @item-click="handleBreadcrumbClick" />
</template>

<script setup>
import { FdsBreadcrumb } from '@madsb/dkfds-vue-kit'
import type { BreadcrumbItem } from '@madsb/dkfds-vue-kit'

const breadcrumbItems: BreadcrumbItem[] = [
  { text: 'Forside', href: '/' },
  { text: 'Komponenter', href: '/komponenter' },
  { text: 'Aktuel side' }, // Current page (no href)
]

const handleBreadcrumbClick = (event, item, index) => {
  console.log('Breadcrumb clicked:', item)
}
</script>
```

## Props

| Prop             | Type               | Default        | Description                                                 |
| ---------------- | ------------------ | -------------- | ----------------------------------------------------------- |
| `items`          | `BreadcrumbItem[]` | **required**   | Array of breadcrumb items representing navigation hierarchy |
| `ariaLabel`      | `string`           | `'Brødkrumme'` | ARIA label for the navigation element                       |
| `container`      | `boolean`          | `false`        | Add container class for standard DKFDS layout               |
| `useNativeLinks` | `boolean`          | `false`        | Force use of anchor tags even when Vue Router is available  |

### BreadcrumbItem Interface

```typescript
interface BreadcrumbItem {
  text: string // Display text for the breadcrumb
  href?: string // URL for standard navigation
  to?: string | Record<string, any> // Vue Router location object
  external?: boolean // Force external link behavior
  data?: any // Custom data for event handlers
}
```

## Events

| Event        | Payload                                                    | Description                               |
| ------------ | ---------------------------------------------------------- | ----------------------------------------- |
| `item-click` | `(event: MouseEvent, item: BreadcrumbItem, index: number)` | Emitted when a breadcrumb link is clicked |

## Navigation Behavior

### Automatic Link Detection

- Items with `href` use standard anchor tags
- Items with `to` use Vue Router links (when available)
- Items marked `external: true` always use anchor tags with `target="_blank"`
- Last item is treated as current page and rendered without a link

### Vue Router Integration

- Automatically detects Vue Router availability
- Uses `<router-link>` for items with `to` property
- Falls back to standard anchors when router unavailable
- Respects `useNativeLinks` prop to force anchor tag usage

## Accessibility

### Semantic Structure

- Uses semantic `<nav>` element with descriptive aria-label
- Implements proper ordered list `<ol>` hierarchy
- Current page marked with `aria-current="page"`
- Decorative separator icons are hidden from screen readers

### Keyboard Navigation

- Full keyboard support with Tab navigation
- Links activate with Enter or Space keys
- Focus indicators follow DKFDS accessibility standards
- Screen reader announces navigation context and hierarchy

### ARIA Support

- Configurable aria-label (defaults to Danish "Brødkrumme")
- Proper landmark navigation structure
- Current page identification for assistive technology

## Design Guidelines

### When to Use

- Multi-level site hierarchies (3+ levels recommended)
- Complex application navigation flows
- When users need to understand their current location
- E-commerce category navigation
- Document or content hierarchies

### When NOT to Use

- Single-level pages or simple sites
- Mobile-first designs where space is critical
- Linear processes where back navigation is handled differently
- When the hierarchy doesn't match user mental models

### Best Practices

- Keep breadcrumb text concise but descriptive
- Ensure breadcrumb hierarchy matches site structure
- Place consistently at top of page content
- Don't duplicate current page in main navigation
- Limit to essential levels (avoid overly deep hierarchies)

### Content Guidelines

- Use clear, descriptive labels that match page titles
- Maintain consistency with main navigation terminology
- Consider abbreviation for very long category names
- Ensure labels work in both desktop and mobile contexts

## Mobile Behavior

- Breadcrumbs wrap naturally on small screens
- Text remains readable at minimum 14px size
- Touch targets meet accessibility requirements
- Long paths may require horizontal scrolling

## Themes

The breadcrumb component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling with blue links
- **VirkDK**: Business-oriented styling for Virk.dk context
- **BorgerDK**: Citizen-oriented styling for Borger.dk context

All themes maintain proper contrast ratios and accessibility standards.
