# FdsDropdown

The dropdown component provides a select field that follows DKFDS v11 design specifications. It offers native HTML select functionality with v-model binding, validation states, and proper form integration for Danish government self-service solutions.

## Usage

```vue
<template>
  <FdsDropdown v-model="selectedValue" @change="handleChange">
    <option value="">Choose an option</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </FdsDropdown>
</template>

<script setup>
import { ref } from 'vue'
import { FdsDropdown } from '@madsb/dkfds-vue-kit'

const selectedValue = ref('')
const handleChange = (event) => {
  console.log('Selection changed:', event.target.value)
}
</script>
```

## Props

| Prop         | Type     | Default | Description                                        |
| ------------ | -------- | ------- | -------------------------------------------------- |
| `id`         | `string` | -       | Unique identifier (auto-generated if not provided) |
| `modelValue` | `string` | `''`    | The v-model value for two-way data binding         |

## Events

| Event               | Description                                         |
| ------------------- | --------------------------------------------------- |
| `update:modelValue` | Emitted when selection changes (v-model binding)    |
| `change`            | Emitted on change event with raw DOM event          |
| `dirty`             | Emitted when dropdown loses focus after interaction |

## Accessibility

- Uses native HTML select element for full screen reader support
- Properly integrates with form labels and hint text via aria-describedby
- Supports keyboard navigation (Tab, Arrow keys, Enter, Space)
- Maintains focus management and announces changes to assistive technology
- When used in form groups, automatically associates with labels and error messages

## Design Guidelines

- **Use for single selection** from a predefined list of options
- **Provide clear option labels** that describe the choice accurately
- **Include a default placeholder option** to guide user selection
- **Group related options** using optgroup elements when dealing with many choices
- **Always pair with a label** for form accessibility and usability
- **Show validation feedback** immediately after user interaction
- **Avoid dropdowns with very few options** (consider radio buttons instead)
- **Limit options to reasonable numbers** (consider search/filter for 20+ options)

## Form Integration

The dropdown component works seamlessly with DKFDS form structure:

```vue
<template>
  <FdsFormgroup :isValid="isValid">
    <template #default="{ formid, ariaDescribedby }">
      <FdsLabel :forId="formid" :required="true">Country</FdsLabel>
      <FdsHint>Select your country of residence</FdsHint>
      <FdsDropdown :id="formid" v-model="selectedCountry">
        <option value="">Please select...</option>
        <option value="dk">Denmark</option>
        <option value="no">Norway</option>
        <option value="se">Sweden</option>
      </FdsDropdown>
      <FdsFejlmeddelelse v-if="!isValid">Please select a country</FdsFejlmeddelelse>
    </template>
  </FdsFormgroup>
</template>
```

## Advanced Features

### Option Groups

Use optgroup elements to organize related options:

```vue
<FdsDropdown v-model="selectedCity">
  <option value="">Select a city</option>
  <optgroup label="Capital Cities">
    <option value="copenhagen">Copenhagen</option>
    <option value="oslo">Oslo</option>
  </optgroup>
  <optgroup label="Regional Cities">
    <option value="aarhus">Aarhus</option>
    <option value="bergen">Bergen</option>
  </optgroup>
</FdsDropdown>
```

### Dynamic Options

Generate options from data arrays:

```vue
<FdsDropdown v-model="selectedValue">
  <option value="">Choose option</option>
  <option v-for="item in items" :key="item.id" :value="item.value">
    {{ item.label }}
  </option>
</FdsDropdown>
```

## Themes

The dropdown component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling with neutral colors
- **VirkDK**: Business-oriented styling for Virk.dk with professional appearance
- **BorgerDK**: Citizen-oriented styling for Borger.dk with accessible design
