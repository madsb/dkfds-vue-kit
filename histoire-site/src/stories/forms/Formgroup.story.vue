<script setup lang="ts">
import { ref } from 'vue'
import {
  FdsFormgroup,
  FdsLabel,
  FdsHint,
  FdsFejlmeddelelse,
  FdsInput,
  FdsButton
} from '@madsb/dkfds-vue3'

// Demo state
const email = ref('')
const password = ref('')
const emailValid = ref(true)
const passwordValid = ref(true)
const formSubmitted = ref(false)

const validateForm = () => {
  emailValid.value = email.value.includes('@')
  passwordValid.value = password.value.length >= 6
  formSubmitted.value = true
}

const resetForm = () => {
  email.value = ''
  password.value = ''
  emailValid.value = true
  passwordValid.value = true
  formSubmitted.value = false
}
</script>

<template>
  <Story title="Forms/Formgroup" :layout="{ type: 'grid', width: '100%' }" icon="carbon:form">
    <!-- Showcase all formgroup variants -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Basic Structure</h3>
            <FdsFormgroup>
              <template #default="{ formid, ariaDescribedby }">
                <FdsLabel :forId="formid">Full Name</FdsLabel>
                <FdsHint>Enter your first and last name</FdsHint>
                <FdsInput :id="formid" :aria-describedby="ariaDescribedby" placeholder="John Doe" />
              </template>
            </FdsFormgroup>
          </div>

          <div class="variant-section">
            <h3 class="section-title">Required Field</h3>
            <FdsFormgroup>
              <template #default="{ formid, ariaDescribedby }">
                <FdsLabel :forId="formid" :required="true">Email Address</FdsLabel>
                <FdsHint>We'll use this to contact you</FdsHint>
                <FdsInput
                  :id="formid"
                  :aria-describedby="ariaDescribedby"
                  type="email"
                  placeholder="user@example.com"
                />
              </template>
            </FdsFormgroup>
          </div>

          <div class="variant-section">
            <h3 class="section-title">With Error</h3>
            <FdsFormgroup :is-valid="false">
              <template #default="{ formid, ariaDescribedby }">
                <FdsLabel :forId="formid" :required="true">Password</FdsLabel>
                <FdsHint>Must be at least 6 characters</FdsHint>
                <FdsInput
                  :id="formid"
                  :aria-describedby="ariaDescribedby"
                  type="password"
                  value="123"
                />
                <FdsFejlmeddelelse>Password is too short</FdsFejlmeddelelse>
              </template>
            </FdsFormgroup>
          </div>

          <div class="variant-section">
            <h3 class="section-title">Optional Field</h3>
            <FdsFormgroup>
              <template #default="{ formid, ariaDescribedby }">
                <FdsLabel :forId="formid">Phone Number</FdsLabel>
                <FdsHint>Optional - for account recovery</FdsHint>
                <FdsInput
                  :id="formid"
                  :aria-describedby="ariaDescribedby"
                  type="tel"
                  placeholder="+45 12 34 56 78"
                />
              </template>
            </FdsFormgroup>
          </div>
        </div>
        <p class="story-hint">
          The formgroup component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how form structure adapts to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Validation states demonstration -->
    <Variant title="Validation States" icon="carbon:status-change">
      <div class="story-content">
        <div class="validation-demo">
          <h3 class="section-subtitle">Form Validation Demo</h3>
          
          <div class="form-fields">
            <FdsFormgroup :is-valid="emailValid || !formSubmitted">
              <template #default="{ formid, ariaDescribedby }">
                <FdsLabel :forId="formid" :required="true">Email Address</FdsLabel>
                <FdsHint>Must contain @ symbol</FdsHint>
                <FdsInput
                  :id="formid"
                  :aria-describedby="ariaDescribedby"
                  v-model="email"
                  type="email"
                  placeholder="user@example.com"
                />
                <FdsFejlmeddelelse v-if="!emailValid && formSubmitted">
                  Please enter a valid email address
                </FdsFejlmeddelelse>
              </template>
            </FdsFormgroup>

            <FdsFormgroup :is-valid="passwordValid || !formSubmitted">
              <template #default="{ formid, ariaDescribedby }">
                <FdsLabel :forId="formid" :required="true">Password</FdsLabel>
                <FdsHint>Must be at least 6 characters long</FdsHint>
                <FdsInput
                  :id="formid"
                  :aria-describedby="ariaDescribedby"
                  v-model="password"
                  type="password"
                  placeholder="Enter password"
                />
                <FdsFejlmeddelelse v-if="!passwordValid && formSubmitted">
                  Password must be at least 6 characters
                </FdsFejlmeddelelse>
              </template>
            </FdsFormgroup>
          </div>

          <div class="button-group">
            <FdsButton variant="primary" @click="validateForm">Validate Form</FdsButton>
            <FdsButton variant="secondary" @click="resetForm">Reset Form</FdsButton>
          </div>

          <div v-if="formSubmitted" class="validation-status">
            <p v-if="emailValid && passwordValid" class="success-message">
              ✅ Form is valid and ready for submission
            </p>
            <p v-else class="error-message">
              ❌ Please fix the errors above
            </p>
          </div>
        </div>
        <p class="story-hint">
          Try entering invalid data and clicking "Validate Form" to see error states.
          Valid email needs @ symbol, password needs 6+ characters.
        </p>
      </div>
    </Variant>

    <!-- Component integration patterns -->
    <Variant title="Component Integration" icon="carbon:integration">
      <div class="story-content">
        <div class="integration-examples">
          <h3 class="section-subtitle">Different Input Types</h3>
          
          <div class="form-examples">
            <FdsFormgroup>
              <template #default="{ formid, ariaDescribedby }">
                <FdsLabel :forId="formid">Search Query</FdsLabel>
                <FdsHint>Enter keywords to search</FdsHint>
                <FdsInput
                  :id="formid"
                  :aria-describedby="ariaDescribedby"
                  type="search"
                  placeholder="Type to search..."
                />
              </template>
            </FdsFormgroup>

            <FdsFormgroup>
              <template #default="{ formid, ariaDescribedby }">
                <FdsLabel :forId="formid">Website URL</FdsLabel>
                <FdsHint>Include https:// prefix</FdsHint>
                <FdsInput
                  :id="formid"
                  :aria-describedby="ariaDescribedby"
                  type="url"
                  placeholder="https://example.com"
                />
              </template>
            </FdsFormgroup>

            <FdsFormgroup>
              <template #default="{ formid, ariaDescribedby }">
                <FdsLabel :forId="formid">Amount</FdsLabel>
                <FdsHint>Enter amount in DKK</FdsHint>
                <FdsInput
                  :id="formid"
                  :aria-describedby="ariaDescribedby"
                  type="number"
                  prefix="DKK"
                  suffix=",00"
                  placeholder="1000"
                />
              </template>
            </FdsFormgroup>
          </div>
        </div>
        <p class="story-hint">
          Formgroup provides consistent structure and accessibility regardless of input type.
          All form controls inherit proper ARIA relationships automatically.
        </p>
      </div>
    </Variant>

    <!-- Accessibility demonstration -->
    <Variant title="Accessibility Features" icon="carbon:accessibility">
      <div class="story-content">
        <div class="accessibility-demo">
          <h3 class="section-subtitle">Screen Reader Support</h3>
          
          <FdsFormgroup id="accessible-example" :is-valid="false">
            <template #default="{ formid, ariaDescribedby }">
              <FdsLabel :forId="formid" :required="true">Username</FdsLabel>
              <FdsHint>Must be unique and 3-20 characters</FdsHint>
              <FdsInput
                :id="formid"
                :aria-describedby="ariaDescribedby"
                placeholder="Enter username"
                value="ab"
              />
              <FdsFejlmeddelelse>
                Username is too short (minimum 3 characters)
              </FdsFejlmeddelelse>
            </template>
          </FdsFormgroup>

          <div class="accessibility-info">
            <h4 class="info-title">Accessibility Features:</h4>
            <ul class="accessibility-list">
              <li>✅ Form controls are properly associated with labels</li>
              <li>✅ Hint text is linked via aria-describedby</li>
              <li>✅ Error messages are announced to screen readers</li>
              <li>✅ Required fields are indicated with "(skal udfyldes)"</li>
              <li>✅ Form group has aria-invalid when validation fails</li>
              <li>✅ Error messages include "Fejl:" prefix for screen readers</li>
            </ul>
          </div>
        </div>
        <p class="story-hint">
          All accessibility attributes are managed automatically. Use browser dev tools to inspect
          the ARIA relationships and see how form structure supports assistive technologies.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          labelText: 'Email Address',
          hintText: 'Enter your email address',
          inputType: 'email',
          inputValue: '',
          required: true,
          isValid: true,
          showError: false,
          errorMessage: 'Please enter a valid email address',
          placeholder: 'user@example.com'
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <FdsFormgroup :is-valid="state.isValid">
            <template #default="{ formid, ariaDescribedby }">
              <FdsLabel :forId="formid" :required="state.required">
                {{ state.labelText }}
              </FdsLabel>
              <FdsHint v-if="state.hintText">{{ state.hintText }}</FdsHint>
              <FdsInput
                :id="formid"
                :aria-describedby="ariaDescribedby"
                :type="state.inputType"
                :placeholder="state.placeholder"
                :modelValue="state.inputValue"
                @update:modelValue="(value) => state.inputValue = value"
              />
              <FdsFejlmeddelelse v-if="state.showError && !state.isValid">
                {{ state.errorMessage }}
              </FdsFejlmeddelelse>
            </template>
          </FdsFormgroup>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.labelText" title="Label Text" />
        
        <HstText v-model="state.hintText" title="Hint Text" />
        
        <HstSelect
          v-model="state.inputType"
          title="Input Type"
          :options="[
            { value: 'text', label: 'Text' },
            { value: 'email', label: 'Email' },
            { value: 'password', label: 'Password' },
            { value: 'tel', label: 'Telephone' },
            { value: 'url', label: 'URL' },
            { value: 'number', label: 'Number' },
            { value: 'search', label: 'Search' }
          ]"
        />
        
        <HstText v-model="state.inputValue" title="Input Value" />
        
        <HstText v-model="state.placeholder" title="Placeholder" />
        
        <HstCheckbox v-model="state.required" title="Required Field" />
        
        <HstCheckbox v-model="state.isValid" title="Is Valid" />
        
        <HstCheckbox v-model="state.showError" title="Show Error" />
        
        <HstText v-model="state.errorMessage" title="Error Message" />
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.variant-section {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  align-items: center;
  margin-top: 2.4rem;
}

/* Validation demo specific */
.validation-demo {
  max-width: 500px;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.validation-status {
  margin-top: 1.6rem;
  padding: 1.2rem;
  border-radius: 4px;
  font-size: 1.4rem;
}

.success-message {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  margin: 0;
}

.error-message {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  margin: 0;
}

/* Integration examples */
.integration-examples {
  max-width: 600px;
}

.form-examples {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

/* Accessibility demo */
.accessibility-demo {
  max-width: 600px;
}

.accessibility-info {
  margin-top: 2.4rem;
  padding: 1.6rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #e9ecef;
}

.info-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #333;
}

.accessibility-list {
  font-size: 1.4rem;
  line-height: 1.6;
  margin: 0;
  padding-left: 1.6rem;
}

.accessibility-list li {
  margin-bottom: 0.8rem;
}

/* Playground */
.playground {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 200px;
  max-width: 500px;
  margin: 0 auto;
}

/* Form spacing */
.story-content :deep(.form-group) {
  margin-bottom: 0;
}

.story-content :deep(.form-group + .form-group) {
  margin-top: 2.4rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem;
  }

  .variant-grid {
    grid-template-columns: 1fr;
  }

  .variant-section {
    gap: 1.2rem;
  }
}
</style>

<docs lang="md">
# FdsFormgroup

The formgroup component provides the essential structure for form fields in DKFDS. It manages validation state, accessibility relationships, and proper semantic grouping for form controls including labels, hints, inputs, and error messages.

## Usage

```vue
<template>
  <FdsFormgroup :is-valid="emailValid">
    <template #default="{ formid, ariaDescribedby, isValid }">
      <FdsLabel :forId="formid" :required="true">Email Address</FdsLabel>
      <FdsHint>We'll use this to contact you</FdsHint>
      <FdsInput
        :id="formid"
        :aria-describedby="ariaDescribedby"
        v-model="email"
        type="email"
      />
      <FdsFejlmeddelelse v-if="!isValid">
        Please enter a valid email address
      </FdsFejlmeddelelse>
    </template>
  </FdsFormgroup>
</template>

<script setup>
import {
  FdsFormgroup,
  FdsLabel,
  FdsHint,
  FdsInput,
  FdsFejlmeddelelse
} from '@madsb/dkfds-vue3'

const email = ref('')
const emailValid = ref(true)
</script>
```

## Props

| Prop      | Type      | Default | Description                                    |
| --------- | --------- | ------- | ---------------------------------------------- |
| `id`      | `string`  | -       | Unique identifier for the form group          |
| `isValid` | `boolean` | `true`  | Validation state affecting styling and ARIA   |

## Slot Props

| Prop              | Type      | Description                                        |
| ----------------- | --------- | -------------------------------------------------- |
| `formid`          | `string`  | Generated unique ID for form control association  |
| `ariaDescribedby` | `string`  | ARIA relationships for hint and error elements    |
| `isValid`         | `boolean` | Current validation state                           |

## Events

This component does not emit events directly. It provides context for child components.

## Accessibility

- Automatically manages `aria-invalid` attribute based on validation state
- Generates proper `aria-describedby` relationships for screen readers
- Provides context for child components to maintain accessibility
- Applies `form-error` class when validation fails
- Ensures proper label-input association through ID management
- Supports error message registration for form summary components

## Design Guidelines

- **Always use with form controls**: Formgroup provides essential structure for all form fields
- **Include all components**: Use FdsLabel, FdsHint, input component, and FdsFejlmeddelelse together
- **Validation timing**: Update `isValid` prop based on field validation state
- **Consistent structure**: Maintain the same component order (Label → Hint → Input → Error)
- **Required fields**: Use `required` prop on FdsLabel for proper indication
- **Error messages**: Show FdsFejlmeddelelse only when validation fails

## Component Integration

Formgroup works seamlessly with:
- **FdsLabel**: Automatic label association via `formid`
- **FdsHint**: Automatic ARIA description via `hintId`
- **FdsInput**: Automatic ARIA relationships via `ariaDescribedby`
- **FdsFejlmeddelelse**: Automatic error state management
- **Form validation libraries**: Compatible with validation state management

## Themes

The formgroup component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with proper spacing and validation states
- **VirkDK**: Business-oriented styling for Virk.dk with enhanced contrast
- **BorgerDK**: Citizen-oriented styling for Borger.dk with accessibility focus
</docs>