# FdsOverflowMenu

The overflow menu component provides a space-saving way to display additional actions or options when interface space is limited. It follows DKFDS v11 design specifications and provides accessible dropdown functionality with keyboard navigation support.

## Usage

```vue
<template>
  <FdsOverflowMenu header="Actions" @open="handleMenuOpen">
    <li><button type="button" @click="handleEdit">Rediger</button></li>
    <li><button type="button" @click="handleShare">Del</button></li>
    <li><button type="button" @click="handleDelete">Slet</button></li>
  </FdsOverflowMenu>
</template>

<script setup>
import { FdsOverflowMenu } from '@madsb/dkfds-vue-kit'

const handleMenuOpen = () => {
  console.log('Menu opened')
}

const handleEdit = () => {
  console.log('Edit action')
}
</script>
```

## Props

| Prop           | Type                | Default           | Description                                      |
| -------------- | ------------------- | ----------------- | ------------------------------------------------ |
| `header`       | `string`            | `'Overflow menu'` | Header text displayed on the menu trigger button |
| `id`           | `string`            | auto-generated    | Unique identifier for ARIA relationships         |
| `icon`         | `string`            | `'more-vert'`     | Icon identifier from DKFDS icon set              |
| `iconPosition` | `'left' \| 'right'` | `'right'`         | Position of icon relative to header text         |
| `position`     | `'left' \| 'right'` | `'right'`         | Dropdown menu positioning relative to trigger    |

## Events

| Event    | Payload           | Description                                    |
| -------- | ----------------- | ---------------------------------------------- |
| `open`   | -                 | Emitted when the overflow menu opens           |
| `close`  | -                 | Emitted when the overflow menu closes          |
| `toggle` | `isOpen: boolean` | Emitted when menu state changes with new state |

## Slots

| Slot         | Description                                         |
| ------------ | --------------------------------------------------- |
| `default`    | Menu items content (should contain `<li>` elements) |
| `header`     | Custom header content for the trigger button        |
| `icon-left`  | Custom icon content positioned on the left          |
| `icon-right` | Custom icon content positioned on the right         |

## Accessibility

- **ARIA Support**: Full ARIA labeling with `aria-expanded`, `aria-controls`, `aria-haspopup`, and `aria-hidden`
- **Keyboard Navigation**:
  - `Tab` - Navigate to/from trigger button
  - `Enter`/`Space` - Open/close menu
  - `Escape` - Close menu and return focus to trigger
- **Focus Management**: Proper focus handling on open/close with focus return
- **Screen Reader**: Announces menu state changes and available actions
- **Click Outside**: Automatically closes menu when clicking outside

## Design Guidelines

- **Use for**: Secondary actions, contextual menus, table row actions, card actions
- **Avoid for**: Primary navigation, single actions that fit in the interface
- **Content**: Mix buttons and links as needed, group related actions
- **Positioning**: Use `position="left"` near right edge, `position="right"` otherwise
- **Menu Items**: Keep to 6 items or fewer for optimal usability
- **Destructive Actions**: Use error styling (`text-error` class) for delete actions

## Common Patterns

### Table Row Actions

```vue
<FdsOverflowMenu header="Handlinger" position="right">
  <li><button @click="viewDetails">Se detaljer</button></li>
  <li><button @click="editItem">Rediger</button></li>
  <li><button @click="deleteItem">Slet</button></li>
</FdsOverflowMenu>
```

### Card Actions

```vue
<FdsOverflowMenu header="Mere" position="left">
  <li><a href="/share">Del</a></li>
  <li><button @click="favorite">Tilføj til favoritter</button></li>
  <li><button @click="archive">Arkiver</button></li>
</FdsOverflowMenu>
```

### Custom Icon and Header

```vue
<FdsOverflowMenu icon="settings" icon-position="left">
  <template #header>Indstillinger</template>
  <li><button @click="preferences">Præferencer</button></li>
  <li><button @click="logout">Log ud</button></li>
</FdsOverflowMenu>
```

## Themes

The overflow menu component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling with proper contrast and spacing
- **VirkDK**: Business-oriented styling for Virk.dk with corporate styling
- **BorgerDK**: Citizen-oriented styling for Borger.dk with accessible design
