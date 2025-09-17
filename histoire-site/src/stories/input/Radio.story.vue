<script setup lang="ts">
import { ref } from 'vue'
import { FdsRadioGroup, FdsRadioItem } from '@madsb/dkfds-vue3'

// Demo state
const paymentMethod = ref('card')
const contactMethod = ref('email')
const newsletterFrequency = ref('weekly')
const serviceType = ref('')
const phoneNumber = ref('')
const otherService = ref('')

const handleRadioChange = () => {
  console.log('Radio selection changed')
}
</script>

<template>
  <Story title="Input/Radio" :layout="{ type: 'grid', width: '100%' }" icon="carbon:radio-button">
    <!-- Showcase all radio group variants -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Basic Radio Group</h3>
            <FdsRadioGroup v-model="paymentMethod" label="Payment Method">
              <FdsRadioItem value="card">Credit Card</FdsRadioItem>
              <FdsRadioItem value="bank">Bank Transfer</FdsRadioItem>
              <FdsRadioItem value="cash">Cash</FdsRadioItem>
            </FdsRadioGroup>
          </div>
          <div class="variant-section">
            <h3 class="section-title">With Help Text</h3>
            <FdsRadioGroup
              v-model="contactMethod"
              label="Contact Method"
              help-text="Choose how we should contact you"
            >
              <FdsRadioItem value="email">Email</FdsRadioItem>
              <FdsRadioItem value="phone">Phone</FdsRadioItem>
              <FdsRadioItem value="mail">Postal Mail</FdsRadioItem>
            </FdsRadioGroup>
          </div>
          <div class="variant-section">
            <h3 class="section-title">With Disabled Options</h3>
            <FdsRadioGroup v-model="newsletterFrequency" label="Newsletter Frequency">
              <FdsRadioItem value="daily">Daily</FdsRadioItem>
              <FdsRadioItem value="weekly">Weekly</FdsRadioItem>
              <FdsRadioItem value="monthly" disabled>Monthly (Coming Soon)</FdsRadioItem>
              <FdsRadioItem value="never">Never</FdsRadioItem>
            </FdsRadioGroup>
          </div>
        </div>
        <p class="story-hint">
          Radio groups follow DKFDS v11 design specifications for single-choice selection.
          Try switching themes using the global theme switcher to see how radio buttons adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Conditional content demonstration -->
    <Variant title="With Conditional Content" icon="carbon:chevron-down">
      <div class="story-content">
        <FdsRadioGroup v-model="serviceType" label="What type of service do you need?">
          <FdsRadioItem value="standard">Standard Service</FdsRadioItem>
          <FdsRadioItem value="priority">Priority Service</FdsRadioItem>
          <FdsRadioItem value="phone-support">Phone Support
            <template #content>
              <div class="conditional-content">
                <label for="phone-input" class="form-label">Phone Number</label>
                <input
                  id="phone-input"
                  v-model="phoneNumber"
                  type="tel"
                  class="form-input"
                  placeholder="Enter your phone number"
                />
              </div>
            </template>
          </FdsRadioItem>
          <FdsRadioItem value="other">Other
            <template #content>
              <div class="conditional-content">
                <label for="other-input" class="form-label">Please specify</label>
                <textarea
                  id="other-input"
                  v-model="otherService"
                  class="form-textarea"
                  rows="3"
                  placeholder="Describe the service you need"
                ></textarea>
              </div>
            </template>
          </FdsRadioItem>
        </FdsRadioGroup>
        <p class="story-hint">
          Radio items can reveal additional content when selected. This is useful for gathering
          conditional information based on the user's choice.
        </p>
      </div>
    </Variant>

    <!-- States demonstration -->
    <Variant title="States" icon="carbon:status-change">
      <div class="story-content">
        <div class="states-grid">
          <div class="state-column">
            <h3 class="section-subtitle">Normal State</h3>
            <FdsRadioGroup v-model="paymentMethod" label="Payment Options">
              <FdsRadioItem value="card">Credit Card</FdsRadioItem>
              <FdsRadioItem value="debit">Debit Card</FdsRadioItem>
              <FdsRadioItem value="paypal">PayPal</FdsRadioItem>
            </FdsRadioGroup>
          </div>
          <div class="state-column">
            <h3 class="section-subtitle">With Disabled Options</h3>
            <FdsRadioGroup v-model="contactMethod" label="Notification Method">
              <FdsRadioItem value="email">Email</FdsRadioItem>
              <FdsRadioItem value="sms" disabled>SMS (Unavailable)</FdsRadioItem>
              <FdsRadioItem value="push" disabled>Push Notifications (Unavailable)</FdsRadioItem>
              <FdsRadioItem value="none">No Notifications</FdsRadioItem>
            </FdsRadioGroup>
          </div>
        </div>
        <p class="story-hint">
          Radio buttons support various states including normal, selected, and disabled.
          Disabled options prevent selection and show appropriate visual feedback.
        </p>
      </div>
    </Variant>

    <!-- Accessibility demonstration -->
    <Variant title="Accessibility Features" icon="carbon:accessibility">
      <div class="story-content">
        <FdsRadioGroup
          v-model="serviceType"
          label="Service Priority Level"
          help-text="Select the priority level for your service request. This affects processing time and cost."
        >
          <FdsRadioItem value="low">Low Priority (5-7 business days)</FdsRadioItem>
          <FdsRadioItem value="normal">Normal Priority (2-3 business days)</FdsRadioItem>
          <FdsRadioItem value="high">High Priority (Next business day)</FdsRadioItem>
          <FdsRadioItem value="urgent">Urgent (Same day)</FdsRadioItem>
        </FdsRadioGroup>

        <div class="accessibility-info">
          <h3 class="section-subtitle">Keyboard Navigation</h3>
          <ul class="accessibility-list">
            <li><kbd>Tab</kbd> - Navigate to radio group</li>
            <li><kbd>↑/↓</kbd> or <kbd>←/→</kbd> - Navigate between options</li>
            <li><kbd>Space</kbd> - Select focused option</li>
          </ul>
        </div>
        <p class="story-hint">
          Radio groups are fully accessible with ARIA labels, keyboard navigation,
          and screen reader support. The fieldset and legend provide proper grouping semantics.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          selectedValue: 'option2',
          label: 'Choose an option',
          helpText: 'Select one option from the list below',
          showHelpText: true,
          option1Text: 'First Option',
          option2Text: 'Second Option',
          option3Text: 'Third Option',
          option1Disabled: false,
          option2Disabled: false,
          option3Disabled: false,
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <FdsRadioGroup
            v-model="state.selectedValue"
            :label="state.label"
            :help-text="state.showHelpText ? state.helpText : ''"
            @update:model-value="handleRadioChange"
          >
            <FdsRadioItem value="option1" :disabled="state.option1Disabled">
              {{ state.option1Text }}
            </FdsRadioItem>
            <FdsRadioItem value="option2" :disabled="state.option2Disabled">
              {{ state.option2Text }}
            </FdsRadioItem>
            <FdsRadioItem value="option3" :disabled="state.option3Disabled">
              {{ state.option3Text }}
            </FdsRadioItem>
          </FdsRadioGroup>
          <p class="story-hint">Selected value: {{ state.selectedValue }}</p>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.label" title="Group Label" />
        <HstText v-model="state.helpText" title="Help Text" />
        <HstCheckbox v-model="state.showHelpText" title="Show Help Text" />
        
        <div class="control-divider"></div>
        
        <HstSelect
          v-model="state.selectedValue"
          title="Selected Value"
          :options="[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
          ]"
        />
        
        <div class="control-divider"></div>
        
        <HstText v-model="state.option1Text" title="Option 1 Text" />
        <HstCheckbox v-model="state.option1Disabled" title="Option 1 Disabled" />
        
        <HstText v-model="state.option2Text" title="Option 2 Text" />
        <HstCheckbox v-model="state.option2Disabled" title="Option 2 Disabled" />
        
        <HstText v-model="state.option3Text" title="Option 3 Text" />
        <HstCheckbox v-model="state.option3Disabled" title="Option 3 Disabled" />
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.variant-section {
  display: flex;
  flex-direction: column;
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
}

.conditional-content {
  margin-top: 1.6rem;
  padding: 1.6rem;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.conditional-content .form-label {
  display: block;
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
}

.conditional-content .form-input,
.conditional-content .form-textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.4rem;
  line-height: 1.5;
}

.conditional-content .form-textarea {
  resize: vertical;
  min-height: 8rem;
}

.accessibility-info {
  margin-top: 2.4rem;
  padding: 1.6rem;
  background-color: #f0f8ff;
  border-radius: 4px;
  border-left: 4px solid #0066cc;
}

.accessibility-list {
  margin: 1.2rem 0 0 2.4rem;
  font-size: 1.4rem;
  line-height: 1.6;
}

.accessibility-list li {
  margin-bottom: 0.8rem;
}

.accessibility-list kbd {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 0.2rem 0.4rem;
  font-family: monospace;
  font-size: 1.2rem;
}

.playground {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.control-divider {
  height: 1px;
  background-color: #e0e0e0;
  margin: 1.6rem 0;
}

/* Ensure proper spacing for radio groups */
.story-content :deep(.form-group-radio) {
  margin-bottom: 1.2rem;
}

.story-content :deep(fieldset) {
  margin-bottom: 2.4rem;
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

  .conditional-content {
    padding: 1.2rem;
  }
}
</style>

<docs lang="md">
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

| Prop         | Type                                | Default     | Description                                        |
| ------------ | ----------------------------------- | ----------- | -------------------------------------------------- |
| `modelValue` | `string \| number \| boolean \| null` | `null`      | The v-model value for the selected option         |
| `id`         | `string`                            | -           | Unique identifier (auto-generated if not provided) |
| `label`      | `string`                            | -           | Label for the radio group (required)              |
| `helpText`   | `string`                            | `''`        | Help text providing additional context             |
| `name`       | `string`                            | -           | Name attribute for radio inputs                    |

## FdsRadioItem Props

| Prop       | Type                            | Default | Description                                           |
| ---------- | ------------------------------- | ------- | ----------------------------------------------------- |
| `value`    | `string \| number \| boolean`     | -       | Value for this radio option (required)               |
| `index`    | `string`                        | -       | Index identifier for unique ID generation            |
| `id`       | `string`                        | -       | Unique identifier (auto-generated if not provided)   |
| `disabled` | `boolean`                       | `false` | Whether the radio button is disabled                 |
| `name`     | `string`                        | -       | Name attribute (usually inherited from radio group)  |

## Events

### FdsRadioGroup Events

| Event                | Description                                      |
| -------------------- | ------------------------------------------------ |
| `update:modelValue`  | Emitted when radio selection changes            |
| `dirty`              | Emitted when any radio button loses focus       |

### FdsRadioItem Events

| Event    | Description                                      |
| -------- | ------------------------------------------------ |
| `dirty`  | Emitted when radio button loses focus           |
| `change` | Emitted on change event                          |

## Slots

### FdsRadioGroup Slots

| Slot     | Description                     |
| -------- | ------------------------------- |
| `label`  | Custom content for the label   |
| `help`   | Custom content for help text    |
| default  | Radio items content             |

### FdsRadioItem Slots

| Slot      | Description                                    |
| --------- | ---------------------------------------------- |
| default   | Label content for the radio option            |
| `content` | Conditional content shown when selected        |

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
</docs>