<script setup lang="ts">
import { ref } from 'vue'
import { FdsDropdown, FdsFormgroup, FdsLabel, FdsHint, FdsFejlmeddelelse } from '@madsb/dkfds-vue3'

// Demo state
const singleValue = ref('')
const multipleValue = ref('')
const validatedValue = ref('')
const groupedValue = ref('')
const isValidated = ref(true)

const handleChange = (value: string, type: string) => {
  console.log(`${type} dropdown changed to:`, value)
  if (type === 'validated') {
    isValidated.value = value !== ''
  }
}

const countries = [
  { value: 'dk', label: 'Denmark' },
  { value: 'no', label: 'Norway' },
  { value: 'se', label: 'Sweden' },
  { value: 'fi', label: 'Finland' },
  { value: 'is', label: 'Iceland' },
]

const cities = {
  nordic: [
    { value: 'copenhagen', label: 'Copenhagen' },
    { value: 'oslo', label: 'Oslo' },
    { value: 'stockholm', label: 'Stockholm' },
    { value: 'helsinki', label: 'Helsinki' },
  ],
  european: [
    { value: 'berlin', label: 'Berlin' },
    { value: 'paris', label: 'Paris' },
    { value: 'rome', label: 'Rome' },
    { value: 'madrid', label: 'Madrid' },
  ],
}
</script>

<template>
  <Story title="Input/Dropdown" :layout="{ type: 'grid', width: '100%' }" icon="carbon:chevron-down">
    <!-- Showcase all dropdown variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Basic Dropdown</h3>
            <FdsDropdown v-model="singleValue">
              <option value="">Choose an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </FdsDropdown>
          </div>
          <div class="variant-section">
            <h3 class="section-title">With Placeholder</h3>
            <FdsDropdown v-model="multipleValue">
              <option value="" disabled>Select a country</option>
              <option v-for="country in countries" :key="country.value" :value="country.value">
                {{ country.label }}
              </option>
            </FdsDropdown>
          </div>
          <div class="variant-section">
            <h3 class="section-title">In Form Group</h3>
            <FdsFormgroup :isValid="isValidated">
              <template #default="{ formid, ariaDescribedby }">
                <FdsLabel :forId="formid" :required="true">Country</FdsLabel>
                <FdsHint>Select your country of residence</FdsHint>
                <FdsDropdown
                  :id="formid"
                  v-model="validatedValue"
                  @change="() => handleChange(validatedValue, 'validated')"
                >
                  <option value="">Please select...</option>
                  <option v-for="country in countries" :key="country.value" :value="country.value">
                    {{ country.label }}
                  </option>
                </FdsDropdown>
                <FdsFejlmeddelelse v-if="!isValidated">Please select a country</FdsFejlmeddelelse>
              </template>
            </FdsFormgroup>
          </div>
          <div class="variant-section">
            <h3 class="section-title">With Option Groups</h3>
            <FdsDropdown v-model="groupedValue">
              <option value="">Select a city</option>
              <optgroup label="Nordic Cities">
                <option v-for="city in cities.nordic" :key="city.value" :value="city.value">
                  {{ city.label }}
                </option>
              </optgroup>
              <optgroup label="European Cities">
                <option v-for="city in cities.european" :key="city.value" :value="city.value">
                  {{ city.label }}
                </option>
              </optgroup>
            </FdsDropdown>
          </div>
        </div>
        <p class="story-hint">
          The dropdown component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how dropdowns adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Form integration demonstration -->
    <Variant title="Form Integration" icon="carbon:form">
      <div class="story-content">
        <div class="form-demo">
          <FdsFormgroup :isValid="true">
            <template #default="{ formid, ariaDescribedby }">
              <FdsLabel :forId="formid">Preferred Language</FdsLabel>
              <FdsHint>Choose your preferred language for communication</FdsHint>
              <FdsDropdown :id="formid" v-model="singleValue">
                <option value="">Select language</option>
                <option value="da">Danish</option>
                <option value="en">English</option>
                <option value="de">German</option>
                <option value="fr">French</option>
              </FdsDropdown>
            </template>
          </FdsFormgroup>

          <FdsFormgroup :isValid="multipleValue !== ''">
            <template #default="{ formid, ariaDescribedby }">
              <FdsLabel :forId="formid" :required="true">Industry Sector</FdsLabel>
              <FdsHint>Required field - select your industry</FdsHint>
              <FdsDropdown :id="formid" v-model="multipleValue">
                <option value="">Choose sector</option>
                <option value="tech">Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="government">Government</option>
              </FdsDropdown>
              <FdsFejlmeddelelse v-if="multipleValue === ''">Please select an industry sector</FdsFejlmeddelelse>
            </template>
          </FdsFormgroup>
        </div>
        <p class="story-hint">
          Dropdowns integrate seamlessly with DKFDS form structure components (formgroup, label, hint, error messages).
          Required fields show validation messages when empty.
        </p>
      </div>
    </Variant>

    <!-- States demonstration -->
    <Variant title="States" icon="carbon:status-change">
      <div class="story-content">
        <div class="states-grid">
          <div class="state-column">
            <h3 class="section-subtitle">Normal</h3>
            <FdsDropdown v-model="singleValue">
              <option value="">Select option</option>
              <option value="normal1">Normal Option 1</option>
              <option value="normal2">Normal Option 2</option>
            </FdsDropdown>
          </div>
          <div class="state-column">
            <h3 class="section-subtitle">Disabled</h3>
            <FdsDropdown v-model="multipleValue" disabled>
              <option value="">Cannot select</option>
              <option value="disabled1">Disabled Option 1</option>
              <option value="disabled2">Disabled Option 2</option>
            </FdsDropdown>
          </div>
          <div class="state-column">
            <h3 class="section-subtitle">Error State</h3>
            <FdsFormgroup :isValid="false">
              <template #default="{ formid }">
                <FdsDropdown :id="formid" v-model="validatedValue">
                  <option value="">Invalid selection</option>
                  <option value="error1">Option with error</option>
                </FdsDropdown>
                <FdsFejlmeddelelse>Please make a valid selection</FdsFejlmeddelelse>
              </template>
            </FdsFormgroup>
          </div>
          <div class="state-column">
            <h3 class="section-subtitle">With Selected Value</h3>
            <FdsDropdown v-model="groupedValue">
              <option value="">Select option</option>
              <option value="selected" selected>Pre-selected Option</option>
              <option value="other">Other Option</option>
            </FdsDropdown>
          </div>
        </div>
        <p class="story-hint">
          Dropdowns support various states including normal, disabled, error, and pre-selected values.
          Error states are automatically styled when used within form groups.
        </p>
      </div>
    </Variant>

    <!-- Advanced features -->
    <Variant title="Advanced Features" icon="carbon:settings">
      <div class="story-content">
        <div class="advanced-grid">
          <div class="feature-section">
            <h3 class="section-subtitle">Dynamic Options</h3>
            <FdsDropdown v-model="singleValue" @change="(e) => handleChange(singleValue, 'dynamic')">
              <option value="">Select country</option>
              <option v-for="country in countries" :key="country.value" :value="country.value">
                {{ country.label }}
              </option>
            </FdsDropdown>
            <p class="feature-hint">Options generated from JavaScript array</p>
          </div>

          <div class="feature-section">
            <h3 class="section-subtitle">Grouped Options</h3>
            <FdsDropdown v-model="multipleValue">
              <option value="">Choose location</option>
              <optgroup label="Primary Cities">
                <option value="cph">Copenhagen</option>
                <option value="aar">Aarhus</option>
                <option value="ode">Odense</option>
              </optgroup>
              <optgroup label="Regional Cities">
                <option value="aal">Aalborg</option>
                <option value="esb">Esbjerg</option>
                <option value="ran">Randers</option>
              </optgroup>
            </FdsDropdown>
            <p class="feature-hint">Uses optgroup for logical organization</p>
          </div>

          <div class="feature-section">
            <h3 class="section-subtitle">Custom Validation</h3>
            <FdsFormgroup :isValid="validatedValue !== '' && validatedValue !== 'invalid'">
              <template #default="{ formid }">
                <FdsLabel :forId="formid">Business Type</FdsLabel>
                <FdsDropdown
                  :id="formid"
                  v-model="validatedValue"
                  @change="() => handleChange(validatedValue, 'validation')"
                >
                  <option value="">Select type</option>
                  <option value="company">Company</option>
                  <option value="individual">Individual</option>
                  <option value="invalid">Invalid Option</option>
                </FdsDropdown>
                <FdsFejlmeddelelse v-if="validatedValue === 'invalid'">
                  This option is not allowed
                </FdsFejlmeddelelse>
                <FdsFejlmeddelelse v-else-if="validatedValue === ''">
                  Please select a business type
                </FdsFejlmeddelelse>
              </template>
            </FdsFormgroup>
            <p class="feature-hint">Custom validation logic with specific error messages</p>
          </div>
        </div>
        <p class="story-hint">
          Advanced features include dynamic option generation, option grouping, and custom validation logic.
          All features maintain accessibility and DKFDS styling standards.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          options: 'Option 1,Option 2,Option 3',
          placeholder: 'Choose an option',
          disabled: false,
          required: false,
          showLabel: true,
          showHint: true,
          labelText: 'Select Option',
          hintText: 'Choose from the available options',
          hasError: false,
          errorMessage: 'Please make a selection',
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <FdsFormgroup :isValid="!state.hasError">
            <template #default="{ formid, ariaDescribedby }">
              <FdsLabel v-if="state.showLabel" :forId="formid" :required="state.required">
                {{ state.labelText }}
              </FdsLabel>
              <FdsHint v-if="state.showHint">{{ state.hintText }}</FdsHint>
              <FdsDropdown
                :id="formid"
                v-model="groupedValue"
                :disabled="state.disabled"
                @change="() => handleChange(groupedValue, 'playground')"
              >
                <option value="">{{ state.placeholder }}</option>
                <option
                  v-for="(option, index) in state.options.split(',')"
                  :key="index"
                  :value="option.trim().toLowerCase().replace(/\s+/g, '-')"
                >
                  {{ option.trim() }}
                </option>
              </FdsDropdown>
              <FdsFejlmeddelelse v-if="state.hasError">{{ state.errorMessage }}</FdsFejlmeddelelse>
            </template>
          </FdsFormgroup>
          <p class="story-hint">Selected value: {{ groupedValue || '(none)' }}</p>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.options" title="Options (comma-separated)" />
        <HstText v-model="state.placeholder" title="Placeholder Text" />
        <HstCheckbox v-model="state.disabled" title="Disabled" />
        <HstCheckbox v-model="state.required" title="Required" />
        <HstCheckbox v-model="state.showLabel" title="Show Label" />
        <HstText v-model="state.labelText" title="Label Text" :disabled="!state.showLabel" />
        <HstCheckbox v-model="state.showHint" title="Show Hint" />
        <HstText v-model="state.hintText" title="Hint Text" :disabled="!state.showHint" />
        <HstCheckbox v-model="state.hasError" title="Show Error" />
        <HstText v-model="state.errorMessage" title="Error Message" :disabled="!state.hasError" />
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

.feature-hint {
  font-size: 1.4rem; /* 14px */
  color: #666;
  margin-top: 0.8rem;
  font-style: italic;
}

/* Layout structures */
.variant-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.variant-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form-demo {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  max-width: 500px;
}

.states-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.state-column {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.advanced-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.feature-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.playground {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

/* Ensure proper dropdown styling */
.story-content :deep(.form-select) {
  width: 100%;
  min-width: 200px;
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

  .advanced-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<docs lang="md">
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
import { FdsDropdown } from '@madsb/dkfds-vue3'

const selectedValue = ref('')
const handleChange = (event) => {
  console.log('Selection changed:', event.target.value)
}
</script>
```

## Props

| Prop         | Type     | Default | Description                                      |
| ------------ | -------- | ------- | ------------------------------------------------ |
| `id`         | `string` | -       | Unique identifier (auto-generated if not provided) |
| `modelValue` | `string` | `''`    | The v-model value for two-way data binding      |

## Events

| Event                | Description                                          |
| -------------------- | ---------------------------------------------------- |
| `update:modelValue`  | Emitted when selection changes (v-model binding)    |
| `change`             | Emitted on change event with raw DOM event          |
| `dirty`              | Emitted when dropdown loses focus after interaction |

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
</docs>