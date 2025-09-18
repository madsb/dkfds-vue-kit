# FdsButton

The button component is used to trigger actions in forms, dialogs, and more. It follows the DKFDS v11 design specifications and adapts to different theme contexts (Default, VirkDK, BorgerDK).

## Usage

```vue
<template>
  <FdsButton variant="primary" @click="handleClick">
    Click me
  </FdsButton>
</template>

<script setup>
import { FdsButton } from '@madsb/dkfds-vue3'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

## Props

| Prop              | Type                                                  | Default     | Description                                     |
| ----------------- | ----------------------------------------------------- | ----------- | ----------------------------------------------- |
| `variant`         | `'primary' \| 'secondary' \| 'tertiary' \| 'warning'` | `'primary'` | Visual style of the button                      |
| `icon`            | `string`                                              | -           | Icon name from DKFDS icon set                   |
| `iconRight`       | `boolean`                                             | `false`     | Position icon on the right side                 |
| `iconOnly`        | `boolean`                                             | `false`     | Style as icon-only button (requires aria-label) |
| `fullWidthMobile` | `boolean`                                             | `false`     | Make button full width on mobile devices        |
| `disabled`        | `boolean`                                             | `false`     | Disable the button                              |

## Events

| Event   | Description                        |
| ------- | ---------------------------------- |
| `click` | Emitted when the button is clicked |

## Accessibility

- Always provide descriptive text for the button action
- For icon-only buttons, always include an `aria-label` attribute
- Ensure sufficient color contrast for all button variants
- Keyboard navigation is fully supported (Tab, Enter, Space)

## Design Guidelines

- **Primary buttons** should be used for main actions (only one per screen)
- **Secondary buttons** are for secondary actions
- **Tertiary buttons** are for less prominent actions
- **Warning buttons** should be used for destructive actions
- Group related actions together
- Consider mobile responsiveness with `fullWidthMobile` prop

## Themes

The button component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
