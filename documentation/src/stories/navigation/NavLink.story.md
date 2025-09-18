# FdsNavLink

Flexible navigation link component implementing DKFDS v11 navigation specifications. Suitable for sidebar navigation, menus, and general navigation contexts with support for current page indication, disabled states, icons, and hint text.

## Usage

```vue
<template>
  <FdsNavLink 
    href="/dashboard" 
    :current="$route.path === '/dashboard'"
    icon="dashboard"
    hint="Main overview page"
    @click="handleNavigation"
  >
    Dashboard
  </FdsNavLink>
</template>

<script setup>
import { FdsNavLink } from '@madsb/dkfds-vue3'

const handleNavigation = (event) => {
  // Handle navigation in SPA
  console.log('Navigating to dashboard')
}
</script>
```

## Props

| Prop       | Type      | Default | Description                                               |
| ---------- | --------- | ------- | --------------------------------------------------------- |
| `href`     | `string`  | `'#'`   | Link destination URL (relative or absolute)               |
| `current`  | `boolean` | `false` | Whether this is the current page/section                 |
| `disabled` | `boolean` | `false` | Whether the link is disabled                             |
| `icon`     | `string`  | -       | Optional DKFDS icon identifier                           |
| `hint`     | `string`  | -       | Optional hint/description text below the link           |

## Events

| Event   | Description                                                     |
| ------- | --------------------------------------------------------------- |
| `click` | Emitted when the link is clicked (even when href is '#')      |

## Accessibility

- Automatically sets `aria-current="page"` for current page links
- Sets `aria-disabled="true"` for disabled links
- Disabled links render as `<span>` elements instead of `<a>` tags
- Icons are marked as decorative with `aria-hidden="true"`
- Supports keyboard navigation (Tab, Enter)
- Proper semantic HTML structure for screen readers

## Design Guidelines

- Use for primary navigation elements in sidebars, menus, and breadcrumbs
- Mark the current page/section with the `current` prop
- Use icons consistently throughout navigation sections
- Provide hint text for complex or less obvious navigation options
- Use disabled state for restricted access or unavailable features
- Group related navigation links together in semantic containers

## Navigation Patterns

- **Sidebar Navigation**: Stack vertically with consistent spacing
- **Menu Systems**: Use within FdsMenu components for structured navigation
- **External Links**: Automatically handles external link styling and behavior
- **SPA Integration**: Prevents default navigation when href is '#' for client-side routing

## Themes

The navigation link component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with subtle hover states
- **VirkDK**: Business-oriented styling optimized for Virk.dk
- **BorgerDK**: Citizen-friendly styling optimized for Borger.dk
