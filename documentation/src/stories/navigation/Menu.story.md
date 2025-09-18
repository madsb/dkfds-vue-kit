# FdsMenu & FdsMenuItem

Navigation menu components implementing DKFDS v11 specifications for creating accessible navigation structures. The menu system supports sidebar navigation, nested submenus, numbered items, and proper semantic structure.

## Usage

```vue
<template>
  <!-- Basic sidebar menu -->
  <FdsMenu variant="sidemenu" aria-label="Main navigation">
    <FdsMenuItem href="/dashboard" :current="true">
      Dashboard
    </FdsMenuItem>
    <FdsMenuItem href="/reports">
      Reports
    </FdsMenuItem>
  </FdsMenu>

  <!-- Menu with submenus -->
  <FdsMenu variant="sidemenu" aria-label="Application navigation">
    <FdsMenuItem href="/settings" :expanded="showSubmenu">
      Settings
      <template #submenu>
        <FdsMenu variant="submenu">
          <FdsMenuItem href="/settings/profile">Profile</FdsMenuItem>
          <FdsMenuItem href="/settings/security">Security</FdsMenuItem>
        </FdsMenu>
      </template>
    </FdsMenuItem>
  </FdsMenu>

  <!-- Numbered process steps -->
  <FdsMenu aria-label="Application process">
    <FdsMenuItem :index="1" href="/step1" :current="true">
      Personal Information
    </FdsMenuItem>
    <FdsMenuItem :index="2" href="/step2" hint="Upload documents">
      Document Upload
    </FdsMenuItem>
  </FdsMenu>
</template>

<script setup>
import { FdsMenu, FdsMenuItem } from '@madsb/dkfds-vue3'
</script>
```

## FdsMenu Props

| Prop        | Type                       | Default     | Description                                       |
| ----------- | -------------------------- | ----------- | ------------------------------------------------- |
| `variant`   | `'sidemenu' \| 'submenu'`  | `'sidemenu'` | Menu type - sidemenu creates nav element          |
| `ariaLabel` | `string`                   | -           | ARIA label for navigation (required for sidemenu) |

## FdsMenuItem Props

| Prop       | Type      | Default | Description                                        |
| ---------- | --------- | ------- | -------------------------------------------------- |
| `id`       | `string`  | -       | Unique identifier for navigation events            |
| `active`   | `boolean` | `false` | Active state for expanded styling                  |
| `href`     | `string`  | -       | Link destination URL                               |
| `index`    | `number`  | `null`  | Optional numeric prefix (e.g., "1. Dashboard")    |
| `current`  | `boolean` | `false` | Marks item as current page                         |
| `expanded` | `boolean` | `false` | Controls submenu visibility                        |
| `hint`     | `string`  | -       | Optional descriptive text below menu item         |

## FdsMenuItem Events

| Event      | Description                              |
| ---------- | ---------------------------------------- |
| `navigate` | Emitted when menu item is navigated to  |
| `click`    | Emitted when menu item is clicked        |

## FdsMenuItem Slots

| Slot      | Description                              |
| --------- | ---------------------------------------- |
| `default` | Menu item text content                   |
| `submenu` | Submenu content (FdsMenu with variant="submenu") |

## Accessibility

- **Keyboard Navigation**: Full keyboard support with Tab, Enter, and Space keys
- **ARIA Landmarks**: Sidebar menus create navigation landmarks for screen readers
- **Current Page**: Uses `aria-current="page"` to identify current location
- **Semantic Structure**: Proper nav/ul/li hierarchy for assistive technology
- **Focus Management**: Keyboard focus is properly managed through menu items
- **Screen Reader Support**: Menu structure and states are announced to screen readers

## Design Guidelines

- **Sidebar Menus**: Use `variant="sidemenu"` for main navigation with proper ARIA labels
- **Submenus**: Use `variant="submenu"` for nested navigation within parent items
- **Current Page**: Always mark the current page with the `current` prop
- **Numbered Items**: Use the `index` prop for step-by-step processes
- **Hint Text**: Provide additional context with the `hint` prop when helpful
- **Expandable Menus**: Use the `expanded` prop to control submenu visibility
- **Semantic HTML**: Always provide meaningful `aria-label` for sidebar menus

## Navigation Patterns

- **Single Level**: Simple list of navigation links
- **Nested Structure**: Parent items with submenu children
- **Process Steps**: Numbered items for sequential workflows
- **Mixed Content**: Combine regular items with expandable sections

## Themes

The menu components automatically adapt to the selected theme:
- **Default**: Standard DKFDS styling with appropriate contrast
- **VirkDK**: Business-oriented styling for Virk.dk applications
- **BorgerDK**: Citizen-oriented styling for Borger.dk services
