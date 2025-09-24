<script setup lang="ts">
import { ref } from 'vue'
import { FdsDatoFelter } from '@madsb/dkfds-vue-kit'

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
  <Story title="Input/DatoFelter" icon="carbon:calendar">
    <!-- Showcase all variations in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Basic Date Fields</h3>
            <FdsDatoFelter v-model="basicDate" />
            <p>Value: {{ basicDate || 'empty' }}</p>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">With Validation</h3>
            <FdsDatoFelter
              v-model="validationDate"
              @valid="handleValidation"
              @dirty="handleDirty"
            />
            <p>Valid: {{ isValid ? 'Yes' : 'No' }} | Dirty: {{ isDirty ? 'Yes' : 'No' }}</p>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Pre-filled Date</h3>
            <FdsDatoFelter v-model="disabledDate" />
            <p>Value: {{ disabledDate }}</p>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The DatoFelter component follows DKFDS v11 design specifications for Danish date input.
          Try switching themes using the global theme switcher to see how the component adapts.
        </p>
      </div>
    </Variant>

    <!-- Date format and validation -->
    <Variant title="Validation & Format" icon="carbon:checkmark">
      <div class="container py-6">
        <h3 class="h6 mb-2">Danish Date Format (DD/MM/YYYY)</h3>
        <div>
          <FdsDatoFelter v-model="validationDate" @valid="handleValidation" @dirty="handleDirty" />
          <div>
            <span :class="{ valid: isValid, invalid: isDirty && !isValid }">
              {{ isValid ? '✓ Valid date' : isDirty ? '✗ Invalid date' : '○ Not validated' }}
            </span>
          </div>
        </div>

        <hr class="my-6" />

        <h3 class="h6 mb-2">Example Valid Dates</h3>
        <div>
          <div>
            <strong>15/03/2024</strong>
            <span>Standard date format</span>
          </div>
          <div>
            <strong>01/01/2000</strong>
            <span>New millennium</span>
          </div>
          <div>
            <strong>29/02/2024</strong>
            <span>Leap year validation</span>
          </div>
        </div>

        <button type="button" @click="resetValidation">Reset Validation</button>

        <p class="mt-4 mb-0">
          The component validates dates in real-time and prevents invalid dates like February 30th.
          Auto-advance to next field occurs after entering 2 digits in day/month fields.
        </p>
      </div>
    </Variant>

    <!-- User interaction patterns -->
    <Variant title="Interaction Features" icon="carbon:touch-interaction">
      <div class="container py-6">
        <h3 class="h6 mb-2">Auto-Tab Progression</h3>
        <p>
          Type in the day field - after 2 digits, focus automatically moves to month field, then to
          year field for seamless data entry.
        </p>
        <FdsDatoFelter v-model="basicDate" />

        <hr class="my-6" />

        <h3 class="h6 mb-2">Focus Selection</h3>
        <p>Click any field to focus and automatically select existing content for easy editing.</p>
        <FdsDatoFelter v-model="disabledDate" />

        <hr class="my-6" />

        <h3 class="h6 mb-2">Keyboard Navigation</h3>
        <div>
          <div><strong>Tab:</strong> Move between fields</div>
          <div><strong>Numbers only:</strong> Automatic validation</div>
          <div><strong>Auto-advance:</strong> After 2 digits (day/month)</div>
          <div><strong>Select all:</strong> On focus for easy editing</div>
        </div>

        <p class="mt-4 mb-0">
          The component uses tel input type for better mobile keyboard support and includes pattern
          validation to ensure only numbers are entered.
        </p>
      </div>
    </Variant>

    <!-- Accessibility features -->
    <Variant title="Accessibility" icon="carbon:accessibility">
      <div class="container py-6">
        <h3 class="h6 mb-2">Screen Reader Support</h3>
        <div>
          <FdsDatoFelter v-model="basicDate" />
          <div>
            <div>
              <strong>Labels:</strong> Each field has descriptive Danish labels (Dag, Måned, År)
            </div>
            <div><strong>Titles:</strong> Tooltip guidance for each input field</div>
            <div><strong>Pattern:</strong> Input validation patterns for screen readers</div>
            <div><strong>ARIA:</strong> Semantic markup for date input group</div>
          </div>
        </div>

        <hr class="my-6" />

        <h3 class="h6 mb-2">Input Constraints</h3>
        <div>
          <div><strong>Day:</strong> 1-31 (max 2 digits)</div>
          <div><strong>Month:</strong> 1-12 (max 2 digits)</div>
          <div><strong>Year:</strong> 1900-3000 (max 4 digits)</div>
        </div>

        <p class="mt-4 mb-0">
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
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <div>
            <FdsDatoFelter
              v-model="state.dateValue"
              @valid="state.showValidation ? handleValidation : undefined"
              @dirty="state.showEvents ? handleDirty : undefined"
            />

            <div>
              <div><strong>Model Value:</strong> {{ state.dateValue || 'empty' }}</div>
              <div v-if="state.showValidation">
                <strong>Valid:</strong> {{ isValid ? 'Yes' : 'No' }}
              </div>
              <div v-if="state.showEvents">
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
