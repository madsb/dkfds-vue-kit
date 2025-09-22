# FdsTextarea

The textarea component provides a multi-line text input with automatic row sizing, character limits, and proper accessibility attributes. It follows DKFDS v11 design specifications and adapts to different theme contexts.

## Usage

```vue
<template>
  <FdsTextarea
    v-model="description"
    :rows="5"
    :maxlength="500"
    placeholder="Enter your description..."
    @dirty="validateInput"
  />
</template>

<script setup>
import { ref } from 'vue'
import { FdsTextarea } from '@madsb/dkfds-vue3'

const description = ref('')

const validateInput = (isDirty) => {
  console.log('User has interacted with textarea:', isDirty)
}
</script>
```

## Props

| Prop         | Type     | Default | Description                                           |
| ------------ | -------- | ------- | ----------------------------------------------------- |
| `modelValue` | `string` | -       | The v-model value for two-way data binding (required) |
| `id`         | `string` | -       | Unique identifier (auto-generated if not provided)    |
| `rows`       | `number` | `5`     | Number of visible text rows (minimum height)          |
| `maxRows`    | `number` | `10`    | Maximum number of rows for auto-resize                |
| `rowlength`  | `number` | `80`    | Characters per row for auto-resize calculation        |
| `maxlength`  | `number` | -       | Maximum character length allowed                      |
| `widthClass` | `string` | `''`    | CSS class for width sizing (input--width-xs to xl)    |

## Events

| Event               | Description                                               |
| ------------------- | --------------------------------------------------------- |
| `update:modelValue` | Emitted when textarea value changes (v-model)             |
| `dirty`             | Emitted when textarea loses focus (useful for validation) |
| `input`             | Emitted on input event (provides raw DOM event)           |

## Width Classes

The textarea supports DKFDS width classes for consistent sizing:

- `input--width-xs` - Extra small width
- `input--width-s` - Small width
- `input--width-m` - Medium width
- `input--width-l` - Large width
- `input--width-xl` - Extra large width

## Auto-Expanding Behavior

The textarea automatically adjusts its height based on content:

- **Minimum rows**: Set by the `rows` prop
- **Maximum rows**: Limited by the `maxRows` prop
- **Calculation**: Based on newlines and character count using `rowlength`
- **Dynamic sizing**: Grows and shrinks as content changes

## Form Integration

The textarea works seamlessly with DKFDS form components:

```vue
<FdsFormgroup>
  <template #default="{ formid, ariaDescribedby }">
    <FdsLabel :for="formid" required>Description</FdsLabel>
    <FdsHint>Provide a detailed description (max 500 characters)</FdsHint>
    <FdsTextarea 
      :id="formid"
      v-model="description"
      :maxlength="500"
      :aria-describedby="ariaDescribedby"
    />
    <FdsInputLimit v-model="description" :limit="500" />
    <FdsFejlmeddelelse v-if="hasError">Description is required</FdsFejlmeddelelse>
  </template>
</FdsFormgroup>
```

## Accessibility

- Always provide a descriptive label using `FdsLabel` or `aria-label`
- Use `aria-describedby` to associate hints and error messages
- The `maxlength` attribute provides native browser validation
- Keyboard navigation is fully supported (Tab, Shift+Tab)
- Screen readers announce character limits and current count

## Design Guidelines

- **Use for multi-line input**: Comments, descriptions, feedback, messages
- **Set appropriate sizing**: Use `rows` and `maxRows` based on expected content length
- **Provide character limits**: Use `maxlength` for validation and `FdsInputLimit` for user feedback
- **Choose appropriate width**: Use `widthClass` to match form layout and content needs
- **Enable auto-expansion**: Let textareas grow with content for better user experience

## Themes

The textarea component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling with neutral colors
- **VirkDK**: Business-oriented styling for Virk.dk with professional appearance
- **BorgerDK**: Citizen-oriented styling for Borger.dk with accessible design
