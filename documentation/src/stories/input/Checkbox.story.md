# FdsCheckbox

The checkbox component allows users to select one or more options from a set. It follows DKFDS v11 design specifications and supports both single boolean values and multiple selections with array models.

## Usage

```vue
<template>
  <!-- Single checkbox (boolean model) -->
  <FdsCheckbox v-model="acceptTerms"> I accept the terms and conditions </FdsCheckbox>

  <!-- Checkbox group (array model) -->
  <FdsCheckbox v-model="interests" value="sports">Sports</FdsCheckbox>
  <FdsCheckbox v-model="interests" value="music">Music</FdsCheckbox>
  <FdsCheckbox v-model="interests" value="travel">Travel</FdsCheckbox>

  <!-- Checkbox with conditional content -->
  <FdsCheckbox v-model="hasAllergies">
    I have allergies
    <template #content>
      <FdsLabel>Please specify:</FdsLabel>
      <FdsTextarea v-model="allergyDetails" />
    </template>
  </FdsCheckbox>
</template>

<script setup>
import { ref } from 'vue'
import { FdsCheckbox } from '@madsb/dkfds-vue3'

const acceptTerms = ref(false)
const interests = ref([])
const hasAllergies = ref(false)
const allergyDetails = ref('')
</script>
```

## Props

| Prop         | Type                            | Default | Description                                         |
| ------------ | ------------------------------- | ------- | --------------------------------------------------- |
| `modelValue` | `boolean \| string \| string[]` | `false` | The v-model value for two-way data binding          |
| `value`      | `string \| number \| boolean`   | `true`  | Checkbox value for form submission and array models |
| `id`         | `string`                        | -       | Unique identifier (auto-generated if not provided)  |
| `name`       | `string`                        | -       | Name attribute for form submission                  |
| `disabled`   | `boolean`                       | `false` | Whether the checkbox is disabled                    |

## Events

| Event               | Description                                         |
| ------------------- | --------------------------------------------------- |
| `update:modelValue` | Emitted when checkbox state changes (v-model)       |
| `change`            | Emitted on change event with raw DOM event          |
| `dirty`             | Emitted when checkbox loses focus after interaction |

## Slots

| Slot      | Description                                        |
| --------- | -------------------------------------------------- |
| `default` | Checkbox label content                             |
| `content` | Conditional content shown when checkbox is checked |

## Model Types

### Boolean Model (Single Checkbox)

```vue
<FdsCheckbox v-model="singleValue">Single option</FdsCheckbox>
```

The `modelValue` will be `true` when checked, `false` when unchecked.

### Array Model (Checkbox Group)

```vue
<FdsCheckbox v-model="arrayValue" value="option1">Option 1</FdsCheckbox>
<FdsCheckbox v-model="arrayValue" value="option2">Option 2</FdsCheckbox>
```

The `modelValue` array will contain the `value` of each checked checkbox.

### String Model (Named Value)

```vue
<FdsCheckbox v-model="stringValue" value="yes">Yes, I agree</FdsCheckbox>
```

The `modelValue` will be the `value` when checked, or the previous value when unchecked.

## Form Integration

Checkboxes work seamlessly with DKFDS form structure components:

```vue
<FdsFormgroup :is-valid="isValid">
  <template #default="{ formid, ariaDescribedby }">
    <FdsLabel :required="true">Required Selection</FdsLabel>
    <FdsHint>Please select at least one option</FdsHint>
    <FdsCheckbox v-model="selection" :aria-describedby="ariaDescribedby">
      I agree to the terms
    </FdsCheckbox>
    <FdsFejlmeddelelse v-if="!isValid">
      This field is required
    </FdsFejlmeddelelse>
  </template>
</FdsFormgroup>
```

## Accessibility

- Proper semantic markup with `<input type="checkbox">` and associated `<label>`
- Automatic ARIA attributes for conditional content (`aria-controls`, `aria-describedby`)
- Keyboard navigation support (Space to toggle, Tab to focus)
- Screen reader support with proper labels and state announcements
- Integration with form validation and error messages
- Conditional content properly hidden/shown with `aria-hidden`

## Design Guidelines

- **Single checkbox**: Use for boolean options like "I agree to terms"
- **Checkbox groups**: Use when users can select multiple options from a list
- **Conditional content**: Show additional form fields when a checkbox is selected
- **Required fields**: Use with form validation and clear error messages
- **Labels**: Always provide clear, descriptive labels for each checkbox
- **Grouping**: Group related checkboxes together visually and semantically

## Themes

The checkbox component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling with blue accent color
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
