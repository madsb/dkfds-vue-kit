# FdsFaneblade

Tab navigation components implementing DKFDS v11 specifications. The faneblade system includes multiple components for different use cases: navigation tabs for page sections and content tabs with panels for in-page content switching.

## Usage

### Content Tabs (with panels)

```vue
<template>
  <fds-faneblade>
    <template #tabs>
      <fds-faneblade-tab
        id="overview"
        label="Overview"
        icon="dashboard"
        :active="activeTab === 'overview'"
        @click="setActiveTab"
      />
      <fds-faneblade-tab
        id="details"
        label="Details"
        :active="activeTab === 'details'"
        @click="setActiveTab"
      />
    </template>
    <template #panels>
      <fds-faneblade-panel id="overview" :active="activeTab === 'overview'">
        <h2>Overview Content</h2>
        <p>Content for the overview tab...</p>
      </fds-faneblade-panel>
      <fds-faneblade-panel id="details" :active="activeTab === 'details'">
        <h2>Details Content</h2>
        <p>Content for the details tab...</p>
      </fds-faneblade-panel>
    </template>
  </fds-faneblade>
</template>

<script setup>
import { ref } from 'vue'
import { FdsFaneblade, FdsFanebladeTab, FdsFanebladePanel } from '@madsb/dkfds-vue-kit'

const activeTab = ref('overview')
const setActiveTab = (tabId) => {
  activeTab.value = tabId
}
</script>
```

### Navigation Tabs (links)

```vue
<template>
  <fds-faneblade-nav aria-label="Main navigation">
    <fds-faneblade-nav-item
      href="/profile"
      label="Profile"
      icon="user"
      :active="$route.path === '/profile'"
    />
    <fds-faneblade-nav-item
      href="/settings"
      label="Settings"
      icon="settings"
      :active="$route.path === '/settings'"
    />
  </fds-faneblade-nav>
</template>

<script setup>
import { FdsFanebladeNav, FdsFanebladeNavItem } from '@madsb/dkfds-vue-kit'
</script>
```

## Components

### FdsFaneblade

| Prop | Type | Default | Description                               |
| ---- | ---- | ------- | ----------------------------------------- |
| -    | -    | -       | Container for tabs and panels using slots |

**Slots:**

- `tabs` - Contains fds-faneblade-tab components
- `panels` - Contains fds-faneblade-panel components

### FdsFanebladeTab

| Prop     | Type      | Default | Description                        |
| -------- | --------- | ------- | ---------------------------------- |
| `id`     | `string`  | -       | Unique identifier linking to panel |
| `label`  | `string`  | -       | Tab button text                    |
| `active` | `boolean` | `false` | Whether tab is currently active    |
| `icon`   | `string`  | -       | Optional DKFDS icon identifier     |

**Events:**

- `click` - Emitted with tab id when clicked

### FdsFanebladePanel

| Prop     | Type      | Default | Description                           |
| -------- | --------- | ------- | ------------------------------------- |
| `id`     | `string`  | -       | Identifier matching corresponding tab |
| `active` | `boolean` | `false` | Whether panel is currently visible    |

### FdsFanebladeNav

| Prop        | Type     | Default | Description                       |
| ----------- | -------- | ------- | --------------------------------- |
| `ariaLabel` | `string` | -       | ARIA label for navigation context |

### FdsFanebladeNavItem

| Prop     | Type      | Default | Description                      |
| -------- | --------- | ------- | -------------------------------- |
| `href`   | `string`  | -       | Link destination URL             |
| `label`  | `string`  | -       | Link text                        |
| `active` | `boolean` | `false` | Whether item is currently active |
| `icon`   | `string`  | -       | Optional DKFDS icon identifier   |

**Events:**

- `click` - Emitted with click event for navigation handling

## Accessibility

- **Full keyboard navigation** with Tab, Arrow keys, Enter, Space, Home, End
- **Screen reader support** with proper ARIA tablist/tab/tabpanel relationships
- **Focus management** with automatic focus handling on tab activation
- **Active state indication** with aria-selected and aria-current attributes
- **Semantic navigation** structure for navigation tabs with nav element

## Keyboard Navigation

- **Tab:** Move focus between tab groups and into panel content
- **Left/Right Arrow:** Navigate between tabs within a group
- **Enter/Space:** Activate the focused tab
- **Home:** Jump to first tab in group
- **End:** Jump to last tab in group

## Design Guidelines

- **Navigation tabs** are ideal for linking to different pages or major application sections
- **Content tabs** should be used for switching between related content within the same page
- **Limit to 5-7 tabs** maximum to avoid cognitive overload
- **Use descriptive labels** that clearly indicate the content or destination
- **Group related tabs** logically and consider user workflow
- **Provide visual icons** when they add clarity to the tab purpose

## Themes

The faneblade components automatically adapt to the selected theme:

- **Default**: Standard DKFDS styling with blue accent
- **VirkDK**: Business-oriented styling for Virk.dk with corporate colors
- **BorgerDK**: Citizen-oriented styling for Borger.dk with accessible design
