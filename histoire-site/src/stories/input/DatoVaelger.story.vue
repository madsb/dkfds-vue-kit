<script setup lang="ts">
import { ref } from 'vue'
import { 
  FdsDatoVaelger,
  FdsFormgroup,
  FdsLabel,
  FdsHint,
  FdsFejlmeddelelse
} from '@madsb/dkfds-vue3'

// Demo state for interactive examples
const selectedDate = ref('2024-03-15')
const birthDate = ref('')
const eventDate = ref('')
const isEventDateValid = ref(true)
const isEventDateDirty = ref(false)
const appointmentDate = ref('2024-06-20')
const isAppointmentValid = ref(true)
const isAppointmentDirty = ref(false)

// Event handlers
const handleDateValidation = (isValid: boolean) => {
  isEventDateValid.value = isValid
}

const handleDateDirty = (isDirty: boolean) => {
  isEventDateDirty.value = isDirty
}

const handleAppointmentValidation = (isValid: boolean) => {
  isAppointmentValid.value = isValid
}

const handleAppointmentDirty = (isDirty: boolean) => {
  isAppointmentDirty.value = isDirty
}
</script>

<template>
  <Story title="Input/DatoVaelger" :layout="{ type: 'grid', width: '100%' }" icon="carbon:calendar">
    <!-- Showcase all date picker variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Basic Date Picker</h3>
            <FdsDatoVaelger v-model="selectedDate" />
            <p class="variant-note">Selected: {{ selectedDate || 'None' }}</p>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Empty State</h3>
            <FdsDatoVaelger v-model="birthDate" />
            <p class="variant-note">Selected: {{ birthDate || 'None' }}</p>
          </div>
          <div class="variant-section">
            <h3 class="section-title">With Custom ID</h3>
            <FdsDatoVaelger id="custom-date" v-model="appointmentDate" />
            <p class="variant-note">Selected: {{ appointmentDate || 'None' }}</p>
          </div>
        </div>
        <p class="story-hint">
          The dato vælger follows DKFDS v11 design specifications and uses native HTML5 date input.
          Try switching themes using the global theme switcher to see how the component adapts to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Form integration with labels and validation -->
    <Variant title="Form Integration" icon="carbon:form">
      <div class="story-content">
        <FdsFormgroup :is-valid="isEventDateValid">
          <template #default="{ formid, ariaDescribedby }">
            <FdsLabel :for-id="formid" :required="true">Event Date</FdsLabel>
            <FdsHint>Select the date for your event (required)</FdsHint>
            <FdsDatoVaelger
              :id="formid"
              v-model="eventDate"
              @valid="handleDateValidation"
              @dirty="handleDateDirty"
            />
            <FdsFejlmeddelelse v-if="!isEventDateValid && isEventDateDirty">
              Please select a valid date
            </FdsFejlmeddelelse>
          </template>
        </FdsFormgroup>

        <div class="divider" />

        <FdsFormgroup :is-valid="isAppointmentValid">
          <template #default="{ formid, ariaDescribedby }">
            <FdsLabel :for-id="formid">Appointment Date</FdsLabel>
            <FdsHint>Choose your preferred appointment date (optional)</FdsHint>
            <FdsDatoVaelger
              :id="formid"
              v-model="appointmentDate"
              @valid="handleAppointmentValidation"
              @dirty="handleAppointmentDirty"
            />
            <FdsFejlmeddelelse v-if="!isAppointmentValid && isAppointmentDirty">
              The selected date is not valid
            </FdsFejlmeddelelse>
          </template>
        </FdsFormgroup>

        <p class="story-hint">
          The date picker integrates seamlessly with DKFDS form components including labels, hints, and error messages.
          Try entering invalid dates (like 2024-02-30) to see validation in action.
        </p>
      </div>
    </Variant>

    <!-- Date validation examples -->
    <Variant title="Date Validation" icon="carbon:checkmark">
      <div class="story-content">
        <div class="validation-examples">
          <div class="validation-group">
            <h3 class="section-subtitle">Valid Dates</h3>
            <div class="date-examples">
              <div class="date-example">
                <label>Leap Year February 29:</label>
                <FdsDatoVaelger v-model="selectedDate" id="leap-date" />
                <span class="example-text">Try: 2024-02-29</span>
              </div>
              <div class="date-example">
                <label>December 31:</label>
                <FdsDatoVaelger v-model="selectedDate" id="dec-date" />
                <span class="example-text">Try: 2024-12-31</span>
              </div>
              <div class="date-example">
                <label>November 30:</label>
                <FdsDatoVaelger v-model="selectedDate" id="nov-date" />
                <span class="example-text">Try: 2024-11-30</span>
              </div>
            </div>
          </div>

          <div class="validation-group">
            <h3 class="section-subtitle">Invalid Dates</h3>
            <div class="date-examples">
              <div class="date-example">
                <label>Invalid February 30:</label>
                <FdsDatoVaelger v-model="selectedDate" id="invalid-feb" />
                <span class="example-text">Try: 2024-02-30</span>
              </div>
              <div class="date-example">
                <label>Invalid November 31:</label>
                <FdsDatoVaelger v-model="selectedDate" id="invalid-nov" />
                <span class="example-text">Try: 2024-11-31</span>
              </div>
              <div class="date-example">
                <label>Non-leap Year February 29:</label>
                <FdsDatoVaelger v-model="selectedDate" id="invalid-leap" />
                <span class="example-text">Try: 2023-02-29</span>
              </div>
            </div>
          </div>
        </div>
        <p class="story-hint">
          The component validates dates automatically and emits 'valid' events.
          Browser behavior may prevent some invalid dates from being entered directly.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          modelValue: '2024-03-15',
          id: 'playground-date',
          showValidation: true,
          showLabel: true,
          labelText: 'Select Date',
          hintText: 'Choose your preferred date',
          required: false
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <div v-if="state.showLabel" class="playground-form">
            <FdsFormgroup>
              <template #default="{ formid }">
                <FdsLabel 
                  v-if="state.showLabel" 
                  :for-id="state.id || formid" 
                  :required="state.required"
                >
                  {{ state.labelText }}
                </FdsLabel>
                <FdsHint v-if="state.hintText">{{ state.hintText }}</FdsHint>
                <FdsDatoVaelger
                  :id="state.id || formid"
                  v-model="state.modelValue"
                  @valid="handlePlaygroundValidation"
                  @dirty="handlePlaygroundDirty"
                />
                <FdsFejlmeddelelse v-if="state.showValidation && !playgroundValid && playgroundDirty">
                  Please enter a valid date
                </FdsFejlmeddelelse>
              </template>
            </FdsFormgroup>
          </div>
          <div v-else class="playground-standalone">
            <FdsDatoVaelger
              :id="state.id"
              v-model="state.modelValue"
              @valid="handlePlaygroundValidation"
              @dirty="handlePlaygroundDirty"
            />
          </div>
          <div class="playground-output">
            <p><strong>Selected Value:</strong> {{ state.modelValue || 'None' }}</p>
            <p><strong>Is Valid:</strong> {{ playgroundValid ? 'Yes' : 'No' }}</p>
            <p><strong>Is Dirty:</strong> {{ playgroundDirty ? 'Yes' : 'No' }}</p>
          </div>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.modelValue" title="Date Value (YYYY-MM-DD)" />
        
        <HstText v-model="state.id" title="Custom ID" />
        
        <HstCheckbox v-model="state.showLabel" title="Show Label" />
        
        <HstText 
          v-model="state.labelText" 
          title="Label Text" 
          :disabled="!state.showLabel"
        />
        
        <HstText 
          v-model="state.hintText" 
          title="Hint Text" 
          :disabled="!state.showLabel"
        />
        
        <HstCheckbox 
          v-model="state.required" 
          title="Required" 
          :disabled="!state.showLabel"
        />
        
        <HstCheckbox v-model="state.showValidation" title="Show Validation" />
      </template>
    </Variant>
  </Story>
</template>

<script>
// Additional playground state
const playgroundValid = ref(true)
const playgroundDirty = ref(false)

const handlePlaygroundValidation = (isValid) => {
  playgroundValid.value = isValid
}

const handlePlaygroundDirty = (isDirty) => {
  playgroundDirty.value = isDirty
}
</script>

<style scoped>
/* Base styles with 10px font-size root */
.story-content {
  padding: 2.4rem;
  font-size: 1.6rem; /* 16px with 10px base */
  line-height: 1.5;
}

/* Typography */
.section-title {
  font-size: 1.6rem; /* 16px */
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #1a1a1a;
}

.section-subtitle {
  font-size: 1.4rem; /* 14px */
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #333;
}

.story-hint {
  font-size: 1.4rem; /* 14px - readable minimum */
  color: #666;
  margin-top: 1.6rem;
  line-height: 1.6;
}

.variant-note {
  font-size: 1.4rem; /* 14px */
  color: #666;
  margin-top: 0.8rem;
  font-style: italic;
}

/* Layout structures */
.variant-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.variant-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.validation-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3.2rem;
  margin-bottom: 2.4rem;
}

.validation-group {
  display: flex;
  flex-direction: column;
}

.date-examples {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.date-example {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.date-example label {
  font-size: 1.4rem; /* 14px */
  font-weight: 500;
  color: #333;
}

.example-text {
  font-size: 1.4rem; /* 14px */
  color: #666;
  font-family: monospace;
  background: #f5f5f5;
  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;
  align-self: flex-start;
}

.divider {
  margin: 2.4rem 0;
  border-top: 1px solid #e0e0e0;
}

.playground {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  gap: 2.4rem;
}

.playground-form,
.playground-standalone {
  width: 100%;
  max-width: 400px;
}

.playground-output {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.6rem;
  background: #f8f9fa;
  border-radius: 0.8rem;
  width: 100%;
  max-width: 400px;
}

.playground-output p {
  font-size: 1.4rem; /* 14px */
  margin: 0;
}

/* Ensure proper form spacing */
.story-content :deep(.form-group) {
  margin-bottom: 2.4rem;
}

.story-content :deep(.form-input) {
  margin: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem;
  }

  .variant-grid {
    grid-template-columns: 1fr;
  }

  .validation-examples {
    grid-template-columns: 1fr;
  }

  .date-example {
    gap: 0.4rem;
  }
}
</style>

<docs lang="md">
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
</docs>