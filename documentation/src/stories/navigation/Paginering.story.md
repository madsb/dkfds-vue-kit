# FdsPaginering

Pagination navigation component implementing DKFDS v11 specifications. Provides accessible pagination controls with support for large datasets, smart ellipsis handling, and keyboard navigation.

## Usage

```vue
<template>
  <!-- Internal pagination with array -->
  <FdsPaginering
    :list="items"
    :page-size="10"
    @filtered-page="handlePageData"
    @page-change="handlePageChange"
  />

  <!-- External pagination with total count -->
  <FdsPaginering
    :total-items="totalCount"
    :skip="currentSkip"
    :page-size="20"
    @skip="handleSkipChange"
    @page-change="handlePageChange"
  />
</template>

<script setup>
import { FdsPaginering } from '@madsb/dkfds-vue-kit'

const handlePageData = (items) => {
  // Handle filtered page items (internal mode)
}

const handlePageChange = (page) => {
  // Handle page change event
}

const handleSkipChange = (skip) => {
  // Handle skip change for API calls (external mode)
}
</script>
```

## Props

| Prop            | Type      | Default | Description                                                 |
| --------------- | --------- | ------- | ----------------------------------------------------------- |
| `list`          | `any[]`   | `[]`    | Array of items to paginate (internal mode)                  |
| `skip`          | `number`  | `0`     | Number of items to skip (external pagination)               |
| `pageSize`      | `number`  | `10`    | Number of items per page                                    |
| `maxElements`   | `number`  | `7`     | Maximum number of visible page elements (includes ellipsis) |
| `showFirstLast` | `boolean` | `true`  | Show first/last navigation buttons                          |
| `id`            | `string`  | auto    | Unique identifier for the pagination component              |
| `totalItems`    | `number`  | `0`     | Total number of items (external pagination)                 |

## Events

| Event          | Payload        | Description                                     |
| -------------- | -------------- | ----------------------------------------------- |
| `filteredPage` | `items: any[]` | Emitted with current page items (internal mode) |
| `skip`         | `skip: number` | Emitted when skip value changes (external mode) |
| `page-change`  | `page: number` | Emitted when page changes (1-based page number) |

## Pagination Modes

### Internal Pagination

Use when you have all data available. The component handles slicing internally:

- Provide `list` prop with all items
- Listen to `filteredPage` event for current page items
- Component automatically hides when items fit on one page

### External Pagination

Use with APIs where you load data per page:

- Provide `totalItems` and `skip` props
- Listen to `skip` and `page-change` events
- You handle the data loading based on skip value

## Accessibility

- ARIA navigation landmark with descriptive label
- Current page marked with `aria-current="page"`
- Screen reader announcements with `aria-live="polite"`
- Descriptive ARIA labels for all navigation buttons
- Full keyboard navigation support (Tab, Enter, Space)
- Mobile-friendly "Side X af Y" display
- Hidden pagination when only one page exists

## Design Guidelines

- Use for datasets with more items than can comfortably fit on one page
- Keep page sizes reasonable (10-50 items depending on content)
- Consider using `showFirstLast={false}` for simpler navigation
- Adjust `maxElements` based on available space (5-9 recommended)
- For very large datasets, consider server-side pagination with external mode
- Provide clear loading states when using external pagination

## Keyboard Navigation

- **Tab**: Navigate between pagination controls
- **Enter/Space**: Activate pagination buttons
- **Arrow keys**: Navigate within pagination controls (browser default)

## Themes

The pagination component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
