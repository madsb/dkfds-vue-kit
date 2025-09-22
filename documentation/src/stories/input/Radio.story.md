# FdsRadioGroup & FdsRadioItem

Radio button components implementing DKFDS v11 specifications for single-choice selection. The radio group provides semantic grouping with accessibility features, while radio items represent individual options that can include conditional content.

## Usage

```vue
<template>
  <FdsRadioGroup v-model="selectedValue" label="Choose an option">
    <FdsRadioItem value="option1">First Option</FdsRadioItem>
    <FdsRadioItem value="option2">Second Option</FdsRadioItem>
    <FdsRadioItem value="option3">Third Option</FdsRadioItem>
  </FdsRadioGroup>
</template>

<script setup>
import { ref } from 'vue'
import { FdsRadioGroup, FdsRadioItem } from '@madsb/dkfds-vue3'

const selectedValue = ref('option1')
</script>
```

## FdsRadioGroup Props

| Prop         | Type                                  | Default | Description                                        |
| ------------ | ------------------------------------- | ------- | -------------------------------------------------- |
| `modelValue` | `string \| number \| boolean \| null` | `null`  | The v-model value for the selected option          |
| `id`         | `string`                              | -       | Unique identifier (auto-generated if not provided) |
| `label`      | `string`                              | -       | Label for the radio group (required)               |
| `helpText`   | `string`                              | `''`    | Help text providing additional context             |
| `name`       | `string`                              | -       | Name attribute for radio inputs                    |

## FdsRadioItem Props

| Prop       | Type                          | Default | Description                                         |
| ---------- | ----------------------------- | ------- | --------------------------------------------------- |
| `value`    | `string \| number \| boolean` | -       | Value for this radio option (required)              |
| `index`    | `string`                      | -       | Index identifier for unique ID generation           |
| `id`       | `string`                      | -       | Unique identifier (auto-generated if not provided)  |
| `disabled` | `boolean`                     | `false` | Whether the radio button is disabled                |
| `name`     | `string`                      | -       | Name attribute (usually inherited from radio group) |

## Events

### FdsRadioGroup Events

| Event               | Description                               |
| ------------------- | ----------------------------------------- |
| `update:modelValue` | Emitted when radio selection changes      |
| `dirty`             | Emitted when any radio button loses focus |

### FdsRadioItem Events

| Event    | Description                           |
| -------- | ------------------------------------- |
| `dirty`  | Emitted when radio button loses focus |
| `change` | Emitted on change event               |

## Slots

### FdsRadioGroup Slots

| Slot    | Description                  |
| ------- | ---------------------------- |
| `label` | Custom content for the label |
| `help`  | Custom content for help text |
| default | Radio items content          |

### FdsRadioItem Slots

| Slot      | Description                             |
| --------- | --------------------------------------- |
| default   | Label content for the radio option      |
| `content` | Conditional content shown when selected |

## Accessibility

- Uses semantic `fieldset` and `legend` elements for proper grouping
- Provides `aria-labelledby` and `aria-describedby` for screen readers
- Supports full keyboard navigation (Tab, Arrow keys, Space)
- Each radio group has a unique `name` attribute for form association
- Conditional content is properly linked with `aria-controls` attributes
- Disabled states are announced to assistive technologies

## Design Guidelines

- Use radio buttons when users must select exactly one option from a list
- Group related options together in a single radio group
- Provide clear, descriptive labels for each option
- Use help text to provide additional context when needed
- Consider using conditional content for options that require additional input
- Limit the number of options to avoid overwhelming users (typically 2-7 options)
- Order options logically (alphabetical, by frequency, or by importance)

## Conditional Content

Radio items can display additional content when selected using the `content` slot:

```vue
<FdsRadioItem value="other">Other
  <template #content>
    <FdsLabel>Please specify:</FdsLabel>
    <FdsInput v-model="otherValue" />
  </template>
</FdsRadioItem>
```

## Themes

The radio components automatically adapt to the selected theme:

- **Default**: Standard DKFDS styling with blue selection indicators
- **VirkDK**: Business-oriented styling for Virk.dk with appropriate brand colors
- **BorgerDK**: Citizen-oriented styling for Borger.dk with accessible contrast ratios
