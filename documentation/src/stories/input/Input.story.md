# FdsInput

The input component is a fundamental form element that provides text input functionality with support for multiple input types, prefixes, suffixes, and character limits. It follows DKFDS v11 design specifications and integrates seamlessly with form validation.

## Usage

```vue
<template>
  <FdsInput v-model="inputValue" type="text" placeholder="Enter text" />
</template>

<script setup>
import { ref } from 'vue'
import { FdsInput } from '@madsb/dkfds-vue-kit'

const inputValue = ref('')
</script>
```

## Props

| Prop         | Type     | Default  | Description                                   |
| ------------ | -------- | -------- | --------------------------------------------- |
| `id`         | `string` | -        | Unique identifier for the input element       |
| `modelValue` | `string` | `''`     | The v-model binding value                     |
| `type`       | `string` | `'text'` | HTML input type (text, email, password, etc.) |
| `prefix`     | `string` | -        | Text displayed before the input field         |
| `suffix`     | `string` | -        | Text displayed after the input field          |
| `widthClass` | `string` | `''`     | Width class for controlling input size        |

## Events

| Event               | Description                      |
| ------------------- | -------------------------------- |
| `update:modelValue` | Emitted when input value changes |
| `dirty`             | Emitted when input loses focus   |
| `input`             | Native input event pass-through  |

## Input Types

The component supports all standard HTML input types:

- **text**: Standard text input
- **email**: Email input with validation
- **password**: Password input with hidden text
- **number**: Numeric input
- **tel**: Telephone number input
- **search**: Search input
- **url**: URL input

## Width Classes

Control input width using DKFDS width utility classes:

- `input-width-xs`: Extra small width
- `input-width-s`: Small width
- `input-width-m`: Medium width
- `input-width-l`: Large width
- Default: Full container width

## Character Limits

Use FdsInputLimit component for character counting and validation:

```vue
<template>
  <FdsInput v-model="text" maxlength="100" />
  <FdsInputLimit v-model="text" :limit="100" />
</template>
```

## Accessibility

- Always associate inputs with labels using `for` attribute
- Use appropriate input types for better mobile experience
- Provide helpful placeholder text and validation messages
- Ensure sufficient color contrast for all states
- Support keyboard navigation (Tab, arrow keys)

## Design Guidelines

- Use appropriate input types for better user experience
- Provide clear labels and helper text
- Use prefixes and suffixes to provide context (currency, units)
- Implement character limits for fields with length constraints
- Group related inputs logically in forms
- Consider mobile responsiveness with appropriate width classes

## Integration with Forms

The input component integrates with FdsFormgroup for validation:

```vue
<template>
  <FdsFormgroup :error="emailError">
    <FdsLabel for="email">Email Address</FdsLabel>
    <FdsHint>We'll never share your email</FdsHint>
    <FdsInput id="email" v-model="email" type="email" placeholder="your@email.com" />
    <FdsFejlmeddelelse v-if="emailError">
      {{ emailError }}
    </FdsFejlmeddelelse>
  </FdsFormgroup>
</template>
```

## Themes

The input component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling with clean borders
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk

Try switching themes using the global theme switcher to see the visual differences.
