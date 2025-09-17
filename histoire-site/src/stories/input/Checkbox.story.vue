<script setup lang="ts">
import { ref } from 'vue'
import { FdsCheckbox, FdsFormgroup, FdsLabel, FdsHint, FdsFejlmeddelelse } from '@madsb/dkfds-vue3'

// Demo state
const singleCheck = ref(false)
const terms = ref(false)
const newsletter = ref(false)
const interests = ref<string[]>([])
const workFields = ref<string[]>(['development'])
const hasAllergies = ref(false)
const allergyDetails = ref('')
const validationCheck = ref(false)
const isValidationValid = ref(true)

const handleValidationChange = () => {
  // Simulate validation
  isValidationValid.value = validationCheck.value
}
</script>

<template>
  <Story title="Input/Checkbox" :layout="{ type: 'grid', width: '100%' }" icon="carbon:checkbox">
    <!-- Showcase all checkbox variants -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Single Checkbox</h3>
            <FdsCheckbox v-model="singleCheck">
              I agree to the terms and conditions
            </FdsCheckbox>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Checkbox Group</h3>
            <FdsCheckbox v-model="interests" value="sports">Sports</FdsCheckbox>
            <FdsCheckbox v-model="interests" value="music">Music</FdsCheckbox>
            <FdsCheckbox v-model="interests" value="travel">Travel</FdsCheckbox>
          </div>
          <div class="variant-section">
            <h3 class="section-title">With Conditional Content</h3>
            <FdsCheckbox v-model="hasAllergies">
              I have allergies
              <template #content>
                <div class="checkbox-content-demo">
                  <label for="allergy-details">Please specify:</label>
                  <textarea id="allergy-details" v-model="allergyDetails" rows="2" />
                </div>
              </template>
            </FdsCheckbox>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Disabled State</h3>
            <FdsCheckbox :model-value="true" disabled>
              This option is disabled
            </FdsCheckbox>
          </div>
        </div>
        <p class="story-hint">
          The checkbox component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how checkboxes adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Checkbox groups and states -->
    <Variant title="States & Groups" icon="carbon:status-change">
      <div class="story-content">
        <div class="states-grid">
          <div class="state-column">
            <h3 class="section-subtitle">Individual States</h3>
            <FdsCheckbox :model-value="false">Unchecked</FdsCheckbox>
            <FdsCheckbox :model-value="true">Checked</FdsCheckbox>
            <FdsCheckbox :model-value="false" disabled>Disabled unchecked</FdsCheckbox>
            <FdsCheckbox :model-value="true" disabled>Disabled checked</FdsCheckbox>
          </div>
          <div class="state-column">
            <h3 class="section-subtitle">Checkbox Group Example</h3>
            <div class="checkbox-group">
              <FdsCheckbox v-model="workFields" value="development">
                Software Development
              </FdsCheckbox>
              <FdsCheckbox v-model="workFields" value="design">
                Design
              </FdsCheckbox>
              <FdsCheckbox v-model="workFields" value="management">
                Management
              </FdsCheckbox>
              <FdsCheckbox v-model="workFields" value="sales">
                Sales
              </FdsCheckbox>
            </div>
            <p class="demo-output">Selected: {{ workFields.join(', ') || 'None' }}</p>
          </div>
        </div>
        <p class="story-hint">
          Checkbox groups allow multiple selections from a set of options. Individual checkboxes work with boolean values.
        </p>
      </div>
    </Variant>

    <!-- Form integration with proper structure -->
    <Variant title="Form Integration" icon="carbon:form">
      <div class="story-content">
        <div class="form-examples">
          <FdsFormgroup>
            <template #default="{ formid, ariaDescribedby }">
              <FdsLabel>Newsletter Preferences</FdsLabel>
              <FdsHint>Select the types of updates you'd like to receive</FdsHint>
              <div class="checkbox-group">
                <FdsCheckbox v-model="newsletter" :aria-describedby="ariaDescribedby">
                  I want to receive the weekly newsletter
                </FdsCheckbox>
                <FdsCheckbox v-model="terms" :aria-describedby="ariaDescribedby">
                  I agree to the terms and conditions
                </FdsCheckbox>
              </div>
            </template>
          </FdsFormgroup>

          <div class="divider" />

          <FdsFormgroup :is-valid="isValidationValid">
            <template #default="{ formid, ariaDescribedby }">
              <FdsLabel :required="true">Required Checkbox</FdsLabel>
              <FdsHint>You must accept this to continue</FdsHint>
              <FdsCheckbox 
                v-model="validationCheck" 
                :aria-describedby="ariaDescribedby"
                @change="handleValidationChange"
              >
                I accept the privacy policy
              </FdsCheckbox>
              <FdsFejlmeddelelse v-if="!isValidationValid">
                You must accept the privacy policy to continue
              </FdsFejlmeddelelse>
            </template>
          </FdsFormgroup>
        </div>
        <p class="story-hint">
          Checkboxes integrate with the DKFDS form structure using FdsFormgroup, FdsLabel, FdsHint, and FdsFejlmeddelelse components.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          modelValue: false,
          value: 'checkbox-value',
          disabled: false,
          withContent: false,
          labelText: 'Sample checkbox label',
          isArray: false,
          arrayValues: ['option1'],
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <div class="playground-demo">
            <FdsCheckbox
              v-if="!state.isArray"
              :model-value="state.modelValue"
              :value="state.value"
              :disabled="state.disabled"
              @update:model-value="(value) => { state.modelValue = value }"
            >
              {{ state.labelText }}
              <template v-if="state.withContent" #content>
                <div class="checkbox-content-demo">
                  <input type="text" placeholder="Additional information..." />
                </div>
              </template>
            </FdsCheckbox>
            
            <div v-else class="checkbox-group">
              <FdsCheckbox
                :model-value="state.arrayValues"
                value="option1"
                :disabled="state.disabled"
                @update:model-value="(value) => { state.arrayValues = value }"
              >
                Option 1
              </FdsCheckbox>
              <FdsCheckbox
                :model-value="state.arrayValues"
                value="option2"
                :disabled="state.disabled"
                @update:model-value="(value) => { state.arrayValues = value }"
              >
                Option 2
              </FdsCheckbox>
              <FdsCheckbox
                :model-value="state.arrayValues"
                value="option3"
                :disabled="state.disabled"
                @update:model-value="(value) => { state.arrayValues = value }"
              >
                Option 3
              </FdsCheckbox>
            </div>
          </div>
          
          <div class="playground-output">
            <p class="demo-output">
              Value: {{ state.isArray ? JSON.stringify(state.arrayValues) : state.modelValue }}
            </p>
          </div>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.labelText" title="Label Text" />
        
        <HstCheckbox v-model="state.isArray" title="Array Model (Multiple Selection)" />
        
        <div v-if="!state.isArray">
          <HstCheckbox v-model="state.modelValue" title="Checked" :disabled="state.disabled" />
          <HstText v-model="state.value" title="Value" />
        </div>
        
        <HstCheckbox v-model="state.withContent" title="With Conditional Content" />
        
        <HstCheckbox v-model="state.disabled" title="Disabled" />
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
  gap: 1.2rem;
}

.states-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3.2rem;
  margin-bottom: 2.4rem;
}

.state-column {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.form-examples {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  max-width: 500px;
}

.checkbox-content-demo {
  margin-top: 1.2rem;
  padding: 1.2rem;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.checkbox-content-demo label {
  display: block;
  margin-bottom: 0.8rem;
  font-weight: 600;
  font-size: 1.4rem;
}

.checkbox-content-demo input,
.checkbox-content-demo textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.4rem;
}

.demo-output {
  margin-top: 1.2rem;
  padding: 1.2rem;
  background-color: #e8f4f8;
  border-radius: 4px;
  font-family: monospace;
  font-size: 1.4rem;
  color: #333;
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
  margin-bottom: 2.4rem;
}

.playground-output {
  width: 100%;
  max-width: 400px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem;
  }

  .variant-grid {
    grid-template-columns: 1fr;
  }

  .states-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<docs lang="md">
# FdsCheckbox

The checkbox component allows users to select one or more options from a set. It follows DKFDS v11 design specifications and supports both single boolean values and multiple selections with array models.

## Usage

```vue
<template>
  <!-- Single checkbox (boolean model) -->
  <FdsCheckbox v-model="acceptTerms">
    I accept the terms and conditions
  </FdsCheckbox>

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

| Prop         | Type                             | Default | Description                                                       |
| ------------ | -------------------------------- | ------- | ----------------------------------------------------------------- |
| `modelValue` | `boolean \| string \| string[]`  | `false` | The v-model value for two-way data binding                       |
| `value`      | `string \| number \| boolean`    | `true`  | Checkbox value for form submission and array models              |
| `id`         | `string`                         | -       | Unique identifier (auto-generated if not provided)               |
| `name`       | `string`                         | -       | Name attribute for form submission                                |
| `disabled`   | `boolean`                        | `false` | Whether the checkbox is disabled                                  |

## Events

| Event                 | Description                                           |
| --------------------- | ----------------------------------------------------- |
| `update:modelValue`   | Emitted when checkbox state changes (v-model)        |
| `change`              | Emitted on change event with raw DOM event           |
| `dirty`               | Emitted when checkbox loses focus after interaction  |

## Slots

| Slot      | Description                                                    |
| --------- | -------------------------------------------------------------- |
| `default` | Checkbox label content                                         |
| `content` | Conditional content shown when checkbox is checked            |

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
</docs>