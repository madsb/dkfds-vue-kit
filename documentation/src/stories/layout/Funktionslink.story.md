# FdsFunktionslink

The function link component is a versatile link/button element that automatically adapts between anchor and button elements based on props. It supports icons, accessibility attributes, and various link behaviors for functional actions in DKFDS applications.

## Usage

```vue
<template>
  <!-- Basic link -->
  <FdsFunktionslink href="/help"> Get Help </FdsFunktionslink>

  <!-- Button with icon -->
  <FdsFunktionslink type="button" icon="download" @click="downloadFile">
    Download
  </FdsFunktionslink>

  <!-- External link with security -->
  <FdsFunktionslink
    href="https://external-site.com"
    target="_blank"
    rel="noopener noreferrer"
    icon="open-in-new"
    icon-right
  >
    External Resource
  </FdsFunktionslink>
</template>

<script setup>
import { FdsFunktionslink } from '@madsb/dkfds-vue3'

const downloadFile = () => {
  // Handle download action
}
</script>
```

## Props

| Prop        | Type                                         | Default     | Description                                         |
| ----------- | -------------------------------------------- | ----------- | --------------------------------------------------- |
| `icon`      | `string`                                     | -           | Icon name from DKFDS icon set                       |
| `iconRight` | `boolean`                                    | `false`     | Position icon on the right side                     |
| `href`      | `string`                                     | -           | URL for link navigation (creates anchor element)    |
| `type`      | `'link' \| 'button'`                         | auto-detect | Force specific element type                         |
| `title`     | `string`                                     | -           | Title attribute for accessibility                   |
| `disabled`  | `boolean`                                    | `false`     | Disabled state (only for button type)               |
| `target`    | `'_blank' \| '_self' \| '_parent' \| '_top'` | -           | Target attribute for links                          |
| `rel`       | `string`                                     | -           | Rel attribute for links (use 'noopener noreferrer') |

## Events

| Event   | Description                                |
| ------- | ------------------------------------------ |
| `click` | Emitted when the link or button is clicked |

## Auto-Detection Logic

The component automatically determines the element type:

- **Anchor element**: When `href` prop is provided
- **Button element**: When no `href` prop is provided
- **Override**: Use `type` prop to force specific element type

## Accessibility

- Automatically applies correct semantic element (anchor vs button)
- Use `title` attribute to provide additional context
- For external links, always include `rel="noopener noreferrer"` with `target="_blank"`
- Icons are automatically marked as decorative
- Disabled state only applies to button elements
- Keyboard navigation is fully supported (Tab, Enter, Space for buttons)

## Design Guidelines

- **Use for functional actions**: Navigation, file operations, external links
- **Icon placement**: Icons before text for actions, after text for navigation/external
- **External links**: Always use appropriate security attributes
- **Button vs Link**: Use button for actions, anchor for navigation
- **Disabled state**: Only available for button type, provide helpful title text
- **Consistent iconography**: Use DKFDS Material Design icons consistently

## Themes

The function link component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
