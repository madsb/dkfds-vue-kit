<script setup lang="ts">
import { ref } from 'vue'
import {
  FdsFormgroup,
  FdsLabel,
  FdsHint,
  FdsFejlmeddelelse,
  FdsInput,
  FdsButton,
} from '@madsb/dkfds-vue-kit'

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
  <Story title="Forms/Formgroup" icon="carbon:form">
    <!-- Showcase all formgroup variants -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Basic Structure</h3>
            <FdsFormgroup>
              <template #default="{ formid, ariaDescribedby }">
                <FdsLabel :forId="formid">Full Name</FdsLabel>
                <FdsHint>Enter your first and last name</FdsHint>
                <FdsInput :id="formid" :aria-describedby="ariaDescribedby" placeholder="John Doe" />
              </template>
            </FdsFormgroup>
          </div>

          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Required Field</h3>
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

          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">With Error</h3>
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

          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Optional Field</h3>
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
        <p class="mt-4 mb-0">
          The formgroup component follows DKFDS v11 design specifications. Try switching themes
          using the global theme switcher to see how form structure adapts to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Validation states demonstration -->
    <Variant title="Validation States" icon="carbon:status-change">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Form Validation Demo</h3>

          <div>
            <FdsFormgroup :is-valid="emailValid || !formSubmitted">
              <template #default="{ formid, ariaDescribedby }">
                <FdsLabel :forId="formid" :required="true">Email Address</FdsLabel>
                <FdsHint>Must contain @ symbol</FdsHint>
                <FdsInput
                  :id="formid"
                  v-model="email"
                  :aria-describedby="ariaDescribedby"
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
                  v-model="password"
                  :aria-describedby="ariaDescribedby"
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

          <div v-if="formSubmitted">
            <p v-if="emailValid && passwordValid">✅ Form is valid and ready for submission</p>
            <p v-else>❌ Please fix the errors above</p>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Try entering invalid data and clicking "Validate Form" to see error states. Valid email
          needs @ symbol, password needs 6+ characters.
        </p>
      </div>
    </Variant>

    <!-- Component integration patterns -->
    <Variant title="Component Integration" icon="carbon:integration">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Different Input Types</h3>

          <div>
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
        <p class="mt-4 mb-0">
          Formgroup provides consistent structure and accessibility regardless of input type. All
          form controls inherit proper ARIA relationships automatically.
        </p>
      </div>
    </Variant>

    <!-- Accessibility demonstration -->
    <Variant title="Accessibility Features" icon="carbon:accessibility">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Screen Reader Support</h3>

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
              <FdsFejlmeddelelse> Username is too short (minimum 3 characters) </FdsFejlmeddelelse>
            </template>
          </FdsFormgroup>

          <div>
            <h4>Accessibility Features:</h4>
            <ul>
              <li>✅ Form controls are properly associated with labels</li>
              <li>✅ Hint text is linked via aria-describedby</li>
              <li>✅ Error messages are announced to screen readers</li>
              <li>✅ Required fields are indicated with "(skal udfyldes)"</li>
              <li>✅ Form group has aria-invalid when validation fails</li>
              <li>✅ Error messages include "Fejl:" prefix for screen readers</li>
            </ul>
          </div>
        </div>
        <p class="mt-4 mb-0">
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
          placeholder: 'user@example.com',
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
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
                @update:modelValue="(value) => (state.inputValue = value)"
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
            { value: 'search', label: 'Search' },
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
