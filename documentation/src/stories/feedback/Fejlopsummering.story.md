# FdsFejlopsummering

The error summary component provides a centralized display of form validation errors with direct navigation to problematic fields. It implements DKFDS v11 specifications for accessible error handling and helps users quickly identify and resolve form issues.

## Usage

```vue
<template>
  <FdsFejlopsummering
    :errors="[
      { id: 'email-field', message: 'E-mail er påkrævet' },
      { id: 'password-field', message: 'Adgangskode skal være mindst 8 karakterer' }
    ]"
    @error-clicked="handleErrorClick"
  />
</template>

<script setup>
import { FdsFejlopsummering } from '@madsb/dkfds-vue3'

const handleErrorClick = (fieldId) => {
  console.log('Navigating to field:', fieldId)
}
</script>
```

## Props

| Prop          | Type        | Default           | Description                                                |
| ------------- | ----------- | ----------------- | ---------------------------------------------------------- |
| `header`      | `string`    | 'Der er problemer'| Main heading text for the error summary section           |
| `id`          | `string`    | -                 | Unique identifier for the container (auto-generated)      |
| `errors`      | `ErrorItem[]` | `[]`            | Manual list of error items to display                     |
| `autoCollect` | `boolean`   | `true`            | Whether to automatically collect errors from child components |

### ErrorItem Interface

```typescript
interface ErrorItem {
  id: string        // Unique identifier matching the form field ID
  message: string   // Human-readable error message to display
  element?: HTMLElement // Optional reference to the form element
}
```

## Events

| Event          | Description                                              |
| -------------- | -------------------------------------------------------- |
| `error-clicked` | Emitted when a user clicks on an error link (fieldId: string) |

## Slots

| Slot     | Description                                    |
| -------- | ---------------------------------------------- |
| `header` | Custom content for the error summary header   |
| `default`| Additional error items or custom content      |

## Accessibility

- Uses semantic `<nav>` element with `aria-labelledby` for proper navigation landmark
- Error container has `role="alert"` to announce errors to screen readers
- Error links provide smooth scrolling and focus management to target fields
- Keyboard navigation fully supported with Tab, Enter, and Space keys
- Error icon includes `aria-label="Fejl"` and `decorative="false"` for screen readers
- Meets WCAG 2.1 AA accessibility standards

## Form Integration

The component can automatically collect errors from child form components when `autoCollect` is enabled:

```vue
<FdsFejlopsummering :auto-collect="true">
  <FdsFormgroup id="username" :error="usernameError">
    <FdsInput v-model="username" />
  </FdsFormgroup>
</FdsFejlopsummering>
```

## Design Guidelines

- **Always place at the top** of forms to provide immediate feedback
- **Use clear, actionable messages** that tell users exactly what to fix
- **Ensure error IDs match** form field IDs for proper navigation
- **Test with keyboard navigation** to verify accessibility
- **Consider error priority** - show most critical errors first
- **Provide context** with custom headers when needed

## Error Message Best Practices

- Be specific: "E-mail skal have et gyldigt format" not "Ugyldig input"
- Be actionable: Tell users what to do, not just what's wrong
- Be consistent: Use the same language patterns across all errors
- Be helpful: Provide examples when formats are expected

## Themes

The component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with red error colors
- **VirkDK**: Business-oriented styling for Virk.dk with consistent error handling
- **BorgerDK**: Citizen-oriented styling for Borger.dk with accessible error presentation
