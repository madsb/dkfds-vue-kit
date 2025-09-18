# FdsDatoVaelger

A native HTML5 date picker component that follows DKFDS v11 design specifications. The component provides date selection with built-in validation, proper formatting, and accessibility support for Danish government self-service solutions.

## Usage

```vue
<template>
  <FdsDatoVaelger v-model="selectedDate" @valid="handleValidation" />
</template>

<script setup>
import { ref } from 'vue'
import { FdsDatoVaelger } from '@madsb/dkfds-vue3'

const selectedDate = ref('2024-03-15')

const handleValidation = (isValid) => {
  console.log('Date is valid:', isValid)
}
</script>
```

## Props

| Prop         | Type     | Default | Description                                    |
| ------------ | -------- | ------- | ---------------------------------------------- |
| `modelValue` | `string` | `''`    | The date value in ISO format (YYYY-MM-DD)     |
| `id`         | `string` | -       | Custom ID for the input (auto-generated if not provided) |

## Events

| Event              | Description                                           |
| ------------------ | ----------------------------------------------------- |
| `update:modelValue` | Emitted when the date value changes                   |
| `valid`            | Emitted when validation state changes (boolean)       |
| `dirty`            | Emitted when the input loses focus (always true)      |

## Form Integration

```vue
<template>
  <FdsFormgroup :is-valid="isDateValid">
    <template #default="{ formid, ariaDescribedby }">
      <FdsLabel :for-id="formid" :required="true">Event Date</FdsLabel>
      <FdsHint>Select the date for your event</FdsHint>
      <FdsDatoVaelger
        :id="formid"
        v-model="eventDate"
        @valid="isValid => { isDateValid = isValid }"
        @dirty="validateDate"
      />
      <FdsFejlmeddelelse v-if="!isDateValid">
        Please select a valid date
      </FdsFejlmeddelelse>
    </template>
  </FdsFormgroup>
</template>
```

## Date Validation

The component automatically validates dates and handles edge cases:

- **Invalid dates**: February 30, November 31, etc.
- **Leap years**: Correctly validates February 29 for leap years
- **Month boundaries**: Validates correct number of days per month
- **Format validation**: Ensures ISO date format (YYYY-MM-DD)

## Accessibility

- Uses native HTML5 date input for optimal browser accessibility
- Supports keyboard navigation and screen readers
- Works with assistive technology date pickers
- Can be labeled using external `<label>` elements or DKFDS form components
- Automatic form validation integration

## Browser Behavior

- Leverages native browser date picker UI
- Respects system locale for date formatting display
- Provides fallback graceful degradation for older browsers
- Mobile-optimized date selection interface

## Design Guidelines

- **Use for date selection**: Appointments, deadlines, birth dates, etc.
- **Combine with labels**: Always provide clear labeling
- **Include validation**: Use with form validation for required dates
- **Consider date ranges**: For date ranges, use two separate date pickers
- **Provide hints**: Use hint text to clarify date format or requirements

## Danish Localization

- Browser automatically handles Danish date formatting
- Native Danish month/day names in browser date picker
- Supports Danish keyboard input patterns
- Integrates with Danish accessibility standards

## Themes

The date picker component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling for government portals
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
