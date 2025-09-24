# FdsInputNumber

The number input component provides a specialized input field for numeric values with built-in validation, increment/decrement controls, and DKFDS v11 styling. It supports min/max constraints, step values, prefix/suffix text, and keyboard accessibility.

## Usage

```vue
<template>
  <FdsInputNumber v-model="age" :min="18" :max="100" suffix="years" @dirty="validateAge" />
</template>

<script setup>
import { ref } from 'vue'
import { FdsInputNumber } from '@madsb/dkfds-vue-kit'

const age = ref(25)

const validateAge = (isDirty) => {
  if (isDirty) {
    // Perform validation
  }
}
</script>
```

## Props

| Prop         | Type               | Default | Description                                   |
| ------------ | ------------------ | ------- | --------------------------------------------- |
| `id`         | `string`           | -       | Unique identifier (auto-generated if omitted) |
| `modelValue` | `number \| string` | `''`    | The v-model value for two-way data binding    |
| `suffix`     | `string`           | -       | Text displayed after the input (e.g., "kr.")  |
| `prefix`     | `string`           | -       | Text displayed before the input               |
| `min`        | `number`           | -       | Minimum allowed value                         |
| `max`        | `number`           | -       | Maximum allowed value                         |
| `step`       | `number \| string` | -       | Step value for increment/decrement operations |
| `widthClass` | `string`           | `''`    | CSS class for input width sizing              |

## Events

| Event               | Description                                            |
| ------------------- | ------------------------------------------------------ |
| `update:modelValue` | Emitted when the input value changes                   |
| `dirty`             | Emitted when input loses focus (useful for validation) |
| `input`             | Emitted on input event with raw DOM event              |

## Width Classes

Use these predefined width classes to control input sizing:

- `input-width-xs` - Extra small width
- `input-width-s` - Small width
- `input-width-m` - Medium width
- `input-width-l` - Large width
- `input-width-xl` - Extra large width

## Accessibility

- **Keyboard Navigation**: Full support for arrow keys (↑/↓) to increment/decrement values
- **Focus Behavior**: Automatically selects all text when focused for easy value replacement
- **Screen Readers**: Properly announces min/max constraints and current values
- **ARIA Support**: Integrates with form groups for coordinated accessibility
- **Validation**: Browser-native validation for min/max constraints

### Keyboard Controls

- **↑/↓ Arrow Keys**: Increment/decrement by step value
- **Tab**: Navigate to next form field
- **Enter**: Submit form (when in form context)
- **Direct Typing**: Replace current value

## Design Guidelines

- Use **prefix/suffix** to clarify units or context (e.g., "kr.", "%", "years")
- Set appropriate **min/max values** to guide user input and prevent errors
- Choose **step values** that match expected precision (e.g., 0.01 for currency)
- Use **width classes** to match expected content length
- Consider **placeholder text** to show expected format
- Integrate with **form groups** for proper labeling and validation

### When to Use

- Age, quantity, price, or percentage inputs
- Settings that require numeric values with constraints
- Forms where users need to increment/decrement values
- Any numeric input that benefits from validation

### When NOT to Use

- Free-form text input (use FdsInput instead)
- Phone numbers or IDs (use FdsInput with type="tel")
- Large numbers that don't need increment controls

## Themes

The component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling with blue focus states
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
