# FdsDetaljer

A collapsible details component that uses native HTML5 details/summary elements for progressive disclosure of information. Perfect for FAQ sections, optional form fields, and any content that doesn't need to be visible by default.

## Usage

```vue
<template>
  <FdsDetaljer header="More Information">
    This content is hidden by default and can be expanded by the user.
  </FdsDetaljer>
</template>

<script setup>
import { FdsDetaljer } from '@madsb/dkfds-vue3'
</script>
```

## Props

| Prop     | Type     | Default              | Description                                    |
| -------- | -------- | -------------------- | ---------------------------------------------- |
| `header` | `string` | `'Mere information'` | Header text displayed in the clickable summary |

## Slots

| Slot      | Description                                   |
| --------- | --------------------------------------------- |
| `default` | Content that can be expanded/collapsed        |
| `header`  | Custom header content (overrides header prop) |

## Events

| Event    | Description                                 |
| -------- | ------------------------------------------- |
| `toggle` | Emitted when the details section is toggled |

## Accessibility

- Uses semantic HTML5 `<details>` and `<summary>` elements for optimal screen reader support
- Built-in keyboard navigation: Tab to focus, Enter/Space to toggle
- Screen readers automatically announce the expandable state
- No additional ARIA attributes needed - semantic HTML provides everything
- Content is properly associated with its toggle control

## Design Guidelines

- **Use for optional information** that doesn't need to be visible by default
- **Perfect for FAQ sections** where users can expand only relevant questions
- **Ideal for progressive disclosure** in forms with optional advanced settings
- **Group related details sections** for better organization
- **Keep headers concise** but descriptive enough to indicate the content
- **Avoid nesting details** elements deeply as it can confuse navigation

## Common Patterns

### FAQ Section

```vue
<FdsDetaljer header="How do I create an account?">
  To create an account, click the "Sign Up" button...
</FdsDetaljer>

<FdsDetaljer header="What payment methods do you accept?">
  We accept credit cards, PayPal, and bank transfers...
</FdsDetaljer>
```

### Optional Form Fields

```vue
<FdsDetaljer header="Advanced Settings">
  <FdsFormgroup>
    <FdsLabel for="advanced-option">Advanced Option</FdsLabel>
    <FdsInput id="advanced-option" />
  </FdsFormgroup>
</FdsDetaljer>
```

### Rich Header Content

```vue
<FdsDetaljer>
  <template #header>
    <strong>Important Notice</strong>
    <span>(Please read)</span>
  </template>
  Important information content...
</FdsDetaljer>
```

## Themes

The component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling with subtle borders and spacing
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
