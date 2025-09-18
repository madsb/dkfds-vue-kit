# FdsDatoFelter

The DatoFelter (Date Fields) component provides three separate input fields for day, month, and year with automatic tab progression, validation, and proper Danish date formatting. It offers an alternative to native date pickers with enhanced user control and accessibility support following DKFDS date input patterns.

## Usage

```vue
<template>
  <FdsDatoFelter 
    v-model="birthDate" 
    @valid="handleValidation"
    @dirty="markFieldDirty"
  />
</template>

<script setup>
import { ref } from 'vue'
import { FdsDatoFelter } from '@madsb/dkfds-vue3'

const birthDate = ref('1990-06-15')

const handleValidation = (isValid) => {
  console.log('Date is valid:', isValid)
}

const markFieldDirty = (isDirty) => {
  console.log('Field is dirty:', isDirty)
}
</script>
```

## Props

| Prop         | Type     | Default     | Description                                           |
| ------------ | -------- | ----------- | ----------------------------------------------------- |
| `id`         | `string` | `undefined` | Unique identifier for the date fields group          |
| `modelValue` | `string` | `''`        | The v-model value in ISO date format (YYYY-MM-DD)    |

## Events

| Event               | Description                                               |
| ------------------- | --------------------------------------------------------- |
| `update:modelValue` | Emitted when date value changes, provides ISO date string |
| `dirty`             | Emitted when any date field loses focus                  |
| `valid`             | Emitted when combined date validation state changes      |

## Accessibility

- Each input field has descriptive Danish labels (Dag, Måned, År)
- Tooltip guidance provided through title attributes
- Pattern validation ensures only numeric input
- Keyboard navigation with Tab key between fields
- Auto-advance to next field after entering 2 digits (day/month fields)
- Screen reader compatible with semantic markup
- WCAG 2.1 AA compliant with proper labeling and validation feedback

## Design Guidelines

- Use for date input when precise control is needed over day, month, and year
- Ideal for birth dates, registration dates, and historical dates
- Provides better user experience than native date pickers on some devices
- Follows Danish date format conventions (DD/MM/YYYY)
- Auto-validation prevents invalid dates (e.g., February 30th)
- Integrates well with form groups, labels, hints, and error messages

## Date Format

- **Input Format**: Separate fields for day (1-31), month (1-12), year (1900-3000)
- **Output Format**: ISO 8601 date string (YYYY-MM-DD)
- **Validation**: Real-time validation with leap year support
- **Auto-advance**: Automatic focus progression for seamless data entry

## Themes

The DatoFelter component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with proper spacing and typography
- **VirkDK**: Business-oriented styling for Virk.dk with professional appearance
- **BorgerDK**: Citizen-oriented styling for Borger.dk with accessible design
