# FdsFormgroup

The formgroup component provides the essential structure for form fields in DKFDS. It manages validation state, accessibility relationships, and proper semantic grouping for form controls including labels, hints, inputs, and error messages.

## Usage

```vue
<template>
  <FdsFormgroup :is-valid="emailValid">
    <template #default="{ formid, ariaDescribedby, isValid }">
      <FdsLabel :forId="formid" :required="true">Email Address</FdsLabel>
      <FdsHint>We'll use this to contact you</FdsHint>
      <FdsInput :id="formid" :aria-describedby="ariaDescribedby" v-model="email" type="email" />
      <FdsFejlmeddelelse v-if="!isValid"> Please enter a valid email address </FdsFejlmeddelelse>
    </template>
  </FdsFormgroup>
</template>

<script setup>
import { FdsFormgroup, FdsLabel, FdsHint, FdsInput, FdsFejlmeddelelse } from '@madsb/dkfds-vue-kit'

const email = ref('')
const emailValid = ref(true)
</script>
```

## Props

| Prop      | Type      | Default | Description                                 |
| --------- | --------- | ------- | ------------------------------------------- |
| `id`      | `string`  | -       | Unique identifier for the form group        |
| `isValid` | `boolean` | `true`  | Validation state affecting styling and ARIA |

## Slot Props

| Prop              | Type      | Description                                      |
| ----------------- | --------- | ------------------------------------------------ |
| `formid`          | `string`  | Generated unique ID for form control association |
| `ariaDescribedby` | `string`  | ARIA relationships for hint and error elements   |
| `isValid`         | `boolean` | Current validation state                         |

## Events

This component does not emit events directly. It provides context for child components.

## Accessibility

- Automatically manages `aria-invalid` attribute based on validation state
- Generates proper `aria-describedby` relationships for screen readers
- Provides context for child components to maintain accessibility
- Applies `form-error` class when validation fails
- Ensures proper label-input association through ID management
- Supports error message registration for form summary components

## Design Guidelines

- **Always use with form controls**: Formgroup provides essential structure for all form fields
- **Include all components**: Use FdsLabel, FdsHint, input component, and FdsFejlmeddelelse together
- **Validation timing**: Update `isValid` prop based on field validation state
- **Consistent structure**: Maintain the same component order (Label → Hint → Input → Error)
- **Required fields**: Use `required` prop on FdsLabel for proper indication
- **Error messages**: Show FdsFejlmeddelelse only when validation fails

## Component Integration

Formgroup works seamlessly with:

- **FdsLabel**: Automatic label association via `formid`
- **FdsHint**: Automatic ARIA description via `hintId`
- **FdsInput**: Automatic ARIA relationships via `ariaDescribedby`
- **FdsFejlmeddelelse**: Automatic error state management
- **Form validation libraries**: Compatible with validation state management

## Themes

The formgroup component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling with proper spacing and validation states
- **VirkDK**: Business-oriented styling for Virk.dk with enhanced contrast
- **BorgerDK**: Citizen-oriented styling for Borger.dk with accessibility focus
