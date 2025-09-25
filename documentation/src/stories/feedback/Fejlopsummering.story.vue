<script setup lang="ts">
import { ref } from 'vue'
import { FdsFejlopsummering, FdsFormgroup, FdsLabel, FdsInput } from '@madsb/dkfds-vue-kit'

// Demo state for form validation examples
const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
  country: '',
})

// Error state management
const errors = ref([
  { id: 'name-field', message: 'Navn er påkrævet' },
  { id: 'email-field', message: 'E-mail skal have et gyldigt format' },
  { id: 'phone-field', message: 'Telefonnummer skal være mindst 8 cifre' },
])

const singleError = ref([{ id: 'email-field', message: 'E-mail-adressen er ikke gyldig' }])

const validationErrors = ref([
  { id: 'username-field', message: 'Brugernavn skal være mindst 3 karakterer' },
  { id: 'password-field', message: 'Adgangskode skal være mindst 8 karakterer' },
  { id: 'confirm-password-field', message: 'Adgangskoder stemmer ikke overens' },
  { id: 'terms-field', message: 'Du skal acceptere vilkårene' },
])

// Handle error click events
const handleErrorClick = (fieldId: string) => {
  console.log('Error clicked for field:', fieldId)
}

// Countries for dropdown demo
// Helper function for playground error generation
const getPlaygroundErrors = (type: string, count: number) => {
  const errorSets: Record<string, { id: string; message: string }[]> = {
    validation: [
      { id: 'name-field', message: 'Navn er påkrævet' },
      { id: 'email-field', message: 'E-mail skal have et gyldigt format' },
      { id: 'phone-field', message: 'Telefonnummer skal være mindst 8 cifre' },
      { id: 'message-field', message: 'Besked skal være mindst 10 karakterer' },
      { id: 'terms-field', message: 'Du skal acceptere vilkårene' },
    ],
    login: [
      { id: 'username-field', message: 'Brugernavn er påkrævet' },
      { id: 'password-field', message: 'Adgangskode er påkrævet' },
      { id: 'captcha-field', message: 'CAPTCHA er ikke korrekt' },
      { id: 'remember-field', message: 'Vælg huskningsmulighed' },
      { id: 'account-field', message: 'Konto er midlertidigt spærret' },
    ],
    contact: [
      { id: 'subject-field', message: 'Emne er påkrævet' },
      { id: 'contact-email-field', message: 'Kontakt e-mail er påkrævet' },
      { id: 'department-field', message: 'Vælg afdeling' },
      { id: 'priority-field', message: 'Vælg prioritet' },
      { id: 'description-field', message: 'Beskrivelse skal være mindst 20 karakterer' },
    ],
  }

  return errorSets[type]?.slice(0, count) || []
}
</script>

<template>
  <Story title="Feedback/Fejlopsummering" icon="carbon:warning">
    <!-- Showcase all error summary variations -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Single Error</h3>
            <FdsFejlopsummering :errors="singleError" />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Multiple Errors</h3>
            <FdsFejlopsummering :errors="errors" />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Custom Header</h3>
            <FdsFejlopsummering :errors="errors" header="Ret følgende fejl" />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">No Errors</h3>
            <FdsFejlopsummering :errors="[]" />
            <p>Hidden when no errors</p>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The error summary component follows DKFDS v11 design specifications and provides
          accessible navigation to form errors. Try switching themes using the global theme switcher
          to see how the component adapts to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Form integration with error navigation -->
    <Variant title="Form Integration" icon="carbon:form">
      <div class="container py-6">
        <FdsFejlopsummering
          :errors="validationErrors"
          header="Der er {{ validationErrors.length }} fejl i formularen"
          @error-clicked="handleErrorClick"
        />

        <div>
          <FdsFormgroup id="username-field">
            <FdsLabel for="username-input">Brugernavn *</FdsLabel>
            <FdsInput
              id="username-input"
              v-model="formData.name"
              :error="true"
              aria-describedby="username-error"
            />
            <div id="username-error" class="form-error">
              Brugernavn skal være mindst 3 karakterer
            </div>
          </FdsFormgroup>

          <FdsFormgroup id="password-field">
            <FdsLabel for="password-input">Adgangskode *</FdsLabel>
            <FdsInput
              id="password-input"
              type="password"
              :error="true"
              aria-describedby="password-error"
            />
            <div id="password-error" class="form-error">
              Adgangskode skal være mindst 8 karakterer
            </div>
          </FdsFormgroup>

          <FdsFormgroup id="confirm-password-field">
            <FdsLabel for="confirm-password-input">Bekræft adgangskode *</FdsLabel>
            <FdsInput
              id="confirm-password-input"
              type="password"
              :error="true"
              aria-describedby="confirm-password-error"
            />
            <div id="confirm-password-error" class="form-error">
              Adgangskoder stemmer ikke overens
            </div>
          </FdsFormgroup>

          <FdsFormgroup id="terms-field">
            <label>
              <input id="terms-checkbox" type="checkbox" aria-describedby="terms-error" />
              Jeg accepterer vilkårene og betingelserne *
            </label>
            <div id="terms-error" class="form-error">Du skal acceptere vilkårene</div>
          </FdsFormgroup>
        </div>

        <p class="mt-4 mb-0">
          Click on error links in the summary to navigate directly to the problematic form fields.
          The component uses smooth scrolling and proper focus management for optimal user
          experience.
        </p>
      </div>
    </Variant>

    <!-- Accessibility features demonstration -->
    <Variant title="Accessibility Features" icon="carbon:accessibility">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">ARIA Live Region</h3>
          <FdsFejlopsummering :errors="errors" header="Fejl opdaget i formularen" />

          <div>
            <h4>Accessibility Features:</h4>
            <ul>
              <li><strong>Navigation Landmark:</strong> Uses &lt;nav&gt; with aria-labelledby</li>
              <li>
                <strong>Alert Role:</strong> Error container has role="alert" for screen readers
              </li>
              <li><strong>Focus Management:</strong> Error links focus target form fields</li>
              <li>
                <strong>Keyboard Navigation:</strong> Full keyboard accessibility with Tab and Enter
              </li>
              <li>
                <strong>Screen Reader:</strong> Icon has aria-label="Fejl" and decorative="false"
              </li>
            </ul>
          </div>

          <div>
            <h4>Keyboard Navigation:</h4>
            <div>
              <div><kbd>Tab</kbd> - Navigate between error links</div>
              <div><kbd>Enter</kbd> / <kbd>Space</kbd> - Activate error link to focus field</div>
              <div><kbd>Shift + Tab</kbd> - Navigate backwards</div>
            </div>
          </div>
        </div>

        <p class="mt-4 mb-0">
          The component meets WCAG 2.1 AA accessibility standards with proper ARIA attributes,
          keyboard navigation, and screen reader support.
        </p>
      </div>
    </Variant>

    <!-- Custom header slot demonstration -->
    <Variant title="Custom Headers" icon="carbon:text-highlight">
      <div class="container py-6">
        <div>
          <div>
            <h3 class="h6 mb-2">With Custom Slot</h3>
            <FdsFejlopsummering :errors="errors">
              <template #header>
                <span>
                  ⚠️ <strong>{{ errors.length }}</strong> fejl fundet - ret dem nedenfor
                </span>
              </template>
            </FdsFejlopsummering>
          </div>

          <hr class="my-6" />

          <div>
            <h3 class="h6 mb-2">Dynamic Count</h3>
            <FdsFejlopsummering
              :errors="validationErrors"
              :header="`Formular validation: ${validationErrors.length} fejl`"
            />
          </div>

          <hr class="my-6" />

          <div>
            <h3 class="h6 mb-2">Contextual Message</h3>
            <FdsFejlopsummering
              :errors="singleError"
              header="Login mislykket - ret følgende fejl"
            />
          </div>
        </div>

        <p class="mt-4 mb-0">
          Use custom headers to provide context-specific error messages that help users understand
          what went wrong and what they need to do to fix it.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          header: 'Der er problemer',
          errorCount: 2,
          autoCollect: true,
          customHeader: false,
          errorType: 'validation',
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <FdsFejlopsummering
            :header="state.customHeader ? state.header : undefined"
            :errors="getPlaygroundErrors(state.errorType, state.errorCount)"
            :auto-collect="state.autoCollect"
            @error-clicked="handleErrorClick"
          >
            <template v-if="state.customHeader" #header>
              <strong>{{ state.header }}</strong>
            </template>
          </FdsFejlopsummering>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.header" title="Header Text" />

        <HstCheckbox v-model="state.customHeader" title="Use Custom Header" />

        <HstSelect
          v-model="state.errorType"
          title="Error Type"
          :options="[
            { value: 'validation', label: 'Form Validation' },
            { value: 'login', label: 'Login Errors' },
            { value: 'contact', label: 'Contact Form' },
          ]"
        />

        <HstSlider
          v-model="state.errorCount"
          title="Number of Errors"
          :min="0"
          :max="5"
          :step="1"
        />

        <HstCheckbox v-model="state.autoCollect" title="Auto Collect Errors" />
      </template>
    </Variant>
  </Story>
</template>
