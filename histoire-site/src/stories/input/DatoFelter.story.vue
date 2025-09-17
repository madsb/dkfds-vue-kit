<script setup lang="ts">
import { ref } from 'vue'
import { FdsDatoFelter } from '@madsb/dkfds-vue3'

// Demo state
const basicDate = ref('2024-03-15')
const disabledDate = ref('1985-12-25')
const validationDate = ref('')
const isValid = ref(false)
const isDirty = ref(false)

const handleValidation = (valid: boolean) => {
  isValid.value = valid
}

const handleDirty = (dirty: boolean) => {
  isDirty.value = dirty
}

const resetValidation = () => {
  validationDate.value = ''
  isValid.value = false
  isDirty.value = false
}
</script>

<template>
  <Story title="Input/DatoFelter" :layout="{ type: 'grid', width: '100%' }" icon="carbon:calendar">
    <!-- Showcase all variations in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Basic Date Fields</h3>
            <FdsDatoFelter v-model="basicDate" />
            <p class="demo-value">Value: {{ basicDate || 'empty' }}</p>
          </div>
          <div class="variant-section">
            <h3 class="section-title">With Validation</h3>
            <FdsDatoFelter
              v-model="validationDate"
              @valid="handleValidation"
              @dirty="handleDirty"
            />
            <p class="demo-value">
              Valid: {{ isValid ? 'Yes' : 'No' }} | 
              Dirty: {{ isDirty ? 'Yes' : 'No' }}
            </p>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Pre-filled Date</h3>
            <FdsDatoFelter v-model="disabledDate" />
            <p class="demo-value">Value: {{ disabledDate }}</p>
          </div>
        </div>
        <p class="story-hint">
          The DatoFelter component follows DKFDS v11 design specifications for Danish date input.
          Try switching themes using the global theme switcher to see how the component adapts.
        </p>
      </div>
    </Variant>

    <!-- Date format and validation -->
    <Variant title="Validation & Format" icon="carbon:checkmark">
      <div class="story-content">
        <h3 class="section-subtitle">Danish Date Format (DD/MM/YYYY)</h3>
        <div class="validation-demo">
          <FdsDatoFelter
            v-model="validationDate"
            @valid="handleValidation"
            @dirty="handleDirty"
          />
          <div class="validation-status">
            <span class="status-indicator" :class="{ valid: isValid, invalid: isDirty && !isValid }">
              {{ isValid ? '✓ Valid date' : isDirty ? '✗ Invalid date' : '○ Not validated' }}
            </span>
          </div>
        </div>

        <div class="divider" />

        <h3 class="section-subtitle">Example Valid Dates</h3>
        <div class="examples-grid">
          <div class="example-item">
            <strong>15/03/2024</strong>
            <span>Standard date format</span>
          </div>
          <div class="example-item">
            <strong>01/01/2000</strong>
            <span>New millennium</span>
          </div>
          <div class="example-item">
            <strong>29/02/2024</strong>
            <span>Leap year validation</span>
          </div>
        </div>

        <button type="button" class="reset-button" @click="resetValidation">Reset Validation</button>

        <p class="story-hint">
          The component validates dates in real-time and prevents invalid dates like February 30th.
          Auto-advance to next field occurs after entering 2 digits in day/month fields.
        </p>
      </div>
    </Variant>

    <!-- User interaction patterns -->
    <Variant title="Interaction Features" icon="carbon:touch-interaction">
      <div class="story-content">
        <h3 class="section-subtitle">Auto-Tab Progression</h3>
        <p class="interaction-description">
          Type in the day field - after 2 digits, focus automatically moves to month field, 
          then to year field for seamless data entry.
        </p>
        <FdsDatoFelter v-model="basicDate" />

        <div class="divider" />

        <h3 class="section-subtitle">Focus Selection</h3>
        <p class="interaction-description">
          Click any field to focus and automatically select existing content for easy editing.
        </p>
        <FdsDatoFelter v-model="disabledDate" />

        <div class="divider" />

        <h3 class="section-subtitle">Keyboard Navigation</h3>
        <div class="keyboard-tips">
          <div class="tip-item">
            <strong>Tab:</strong> Move between fields
          </div>
          <div class="tip-item">
            <strong>Numbers only:</strong> Automatic validation
          </div>
          <div class="tip-item">
            <strong>Auto-advance:</strong> After 2 digits (day/month)
          </div>
          <div class="tip-item">
            <strong>Select all:</strong> On focus for easy editing
          </div>
        </div>

        <p class="story-hint">
          The component uses tel input type for better mobile keyboard support and includes
          pattern validation to ensure only numbers are entered.
        </p>
      </div>
    </Variant>

    <!-- Accessibility features -->
    <Variant title="Accessibility" icon="carbon:accessibility">
      <div class="story-content">
        <h3 class="section-subtitle">Screen Reader Support</h3>
        <div class="accessibility-demo">
          <FdsDatoFelter v-model="basicDate" />
          <div class="accessibility-features">
            <div class="feature-item">
              <strong>Labels:</strong> Each field has descriptive Danish labels (Dag, Måned, År)
            </div>
            <div class="feature-item">
              <strong>Titles:</strong> Tooltip guidance for each input field
            </div>
            <div class="feature-item">
              <strong>Pattern:</strong> Input validation patterns for screen readers
            </div>
            <div class="feature-item">
              <strong>ARIA:</strong> Semantic markup for date input group
            </div>
          </div>
        </div>

        <div class="divider" />

        <h3 class="section-subtitle">Input Constraints</h3>
        <div class="constraints-grid">
          <div class="constraint-item">
            <strong>Day:</strong> 1-31 (max 2 digits)
          </div>
          <div class="constraint-item">
            <strong>Month:</strong> 1-12 (max 2 digits)
          </div>
          <div class="constraint-item">
            <strong>Year:</strong> 1900-3000 (max 4 digits)
          </div>
        </div>

        <p class="story-hint">
          The component follows WCAG 2.1 AA guidelines with proper labeling, keyboard navigation,
          and clear validation feedback for assistive technologies.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          dateValue: '1990-06-15',
          showValidation: true,
          showEvents: true,
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <div class="playground-demo">
            <FdsDatoFelter
              v-model="state.dateValue"
              @valid="state.showValidation ? handleValidation : undefined"
              @dirty="state.showEvents ? handleDirty : undefined"
            />
            
            <div class="playground-output">
              <div class="output-item">
                <strong>Model Value:</strong> {{ state.dateValue || 'empty' }}
              </div>
              <div v-if="state.showValidation" class="output-item">
                <strong>Valid:</strong> {{ isValid ? 'Yes' : 'No' }}
              </div>
              <div v-if="state.showEvents" class="output-item">
                <strong>Dirty:</strong> {{ isDirty ? 'Yes' : 'No' }}
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.dateValue" title="Date Value (YYYY-MM-DD)" />
        
        <HstCheckbox v-model="state.showValidation" title="Show Validation Events" />
        
        <HstCheckbox v-model="state.showEvents" title="Show Dirty Events" />
      </template>
    </Variant>
  </Story>
</template>

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

.demo-value {
  font-size: 1.4rem;
  color: #666;
  margin-top: 0.8rem;
  font-family: monospace;
}

.validation-demo {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 300px;
}

.validation-status {
  font-size: 1.4rem;
}

.status-indicator {
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  background-color: #f5f5f5;
  color: #666;
}

.status-indicator.valid {
  background-color: #d4edda;
  color: #155724;
}

.status-indicator.invalid {
  background-color: #f8d7da;
  color: #721c24;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.6rem;
  margin-bottom: 2.4rem;
}

.example-item {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 1.4rem;
}

.example-item strong {
  font-family: monospace;
  color: #0052cc;
}

.example-item span {
  color: #666;
  font-size: 1.3rem;
}

.reset-button {
  padding: 0.8rem 1.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f9fa;
  color: #333;
  cursor: pointer;
  font-size: 1.4rem;
}

.reset-button:hover {
  background-color: #e9ecef;
}

.interaction-description {
  font-size: 1.4rem;
  color: #555;
  margin-bottom: 1.6rem;
  line-height: 1.5;
}

.keyboard-tips {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.2rem;
  margin-bottom: 1.6rem;
}

.tip-item {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 1.4rem;
}

.tip-item strong {
  color: #0052cc;
}

.accessibility-demo {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.accessibility-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.2rem;
}

.feature-item {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 1.4rem;
}

.feature-item strong {
  color: #0052cc;
}

.constraints-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.6rem;
  margin-bottom: 2.4rem;
}

.constraint-item {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 1.4rem;
  padding: 1.2rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: #f8f9fa;
}

.constraint-item strong {
  color: #0052cc;
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
  min-height: 200px;
}

.playground-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  width: 100%;
  max-width: 400px;
}

.playground-output {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.6rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  width: 100%;
}

.output-item {
  font-size: 1.4rem;
  font-family: monospace;
}

.output-item strong {
  color: #0052cc;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem;
  }

  .variant-grid {
    grid-template-columns: 1fr;
  }

  .examples-grid,
  .keyboard-tips,
  .accessibility-features,
  .constraints-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<docs lang="md">
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
</docs>