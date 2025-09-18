<script setup lang="ts">
import { ref } from 'vue'
import { FdsFejlopsummering, FdsFormgroup, FdsLabel, FdsInput, FdsTextarea, FdsDropdown, FdsButton } from '@madsb/dkfds-vue3'

// Demo state for form validation examples
const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
  country: ''
})

// Error state management
const errors = ref([
  { id: 'name-field', message: 'Navn er påkrævet' },
  { id: 'email-field', message: 'E-mail skal have et gyldigt format' },
  { id: 'phone-field', message: 'Telefonnummer skal være mindst 8 cifre' }
])

const singleError = ref([
  { id: 'email-field', message: 'E-mail-adressen er ikke gyldig' }
])

const validationErrors = ref([
  { id: 'username-field', message: 'Brugernavn skal være mindst 3 karakterer' },
  { id: 'password-field', message: 'Adgangskode skal være mindst 8 karakterer' },
  { id: 'confirm-password-field', message: 'Adgangskoder stemmer ikke overens' },
  { id: 'terms-field', message: 'Du skal acceptere vilkårene' }
])

// Handle error click events
const handleErrorClick = (fieldId: string) => {
  console.log('Error clicked for field:', fieldId)
}

// Countries for dropdown demo
// Helper function for playground error generation
const getPlaygroundErrors = (type: string, count: number) => {
  const errorSets = {
    validation: [
      { id: 'name-field', message: 'Navn er påkrævet' },
      { id: 'email-field', message: 'E-mail skal have et gyldigt format' },
      { id: 'phone-field', message: 'Telefonnummer skal være mindst 8 cifre' },
      { id: 'message-field', message: 'Besked skal være mindst 10 karakterer' },
      { id: 'terms-field', message: 'Du skal acceptere vilkårene' }
    ],
    login: [
      { id: 'username-field', message: 'Brugernavn er påkrævet' },
      { id: 'password-field', message: 'Adgangskode er påkrævet' },
      { id: 'captcha-field', message: 'CAPTCHA er ikke korrekt' },
      { id: 'remember-field', message: 'Vælg huskningsmulighed' },
      { id: 'account-field', message: 'Konto er midlertidigt spærret' }
    ],
    contact: [
      { id: 'subject-field', message: 'Emne er påkrævet' },
      { id: 'contact-email-field', message: 'Kontakt e-mail er påkrævet' },
      { id: 'department-field', message: 'Vælg afdeling' },
      { id: 'priority-field', message: 'Vælg prioritet' },
      { id: 'description-field', message: 'Beskrivelse skal være mindst 20 karakterer' }
    ]
  }

  return errorSets[type]?.slice(0, count) || []
}
</script>

<template>
  <Story title="Feedback/Fejlopsummering" :layout="{ type: 'grid', width: '100%' }" icon="carbon:warning">
    <!-- Showcase all error summary variations -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Single Error</h3>
            <FdsFejlopsummering :errors="singleError" />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Multiple Errors</h3>
            <FdsFejlopsummering :errors="errors" />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Custom Header</h3>
            <FdsFejlopsummering 
              :errors="errors" 
              header="Ret følgende fejl"
            />
          </div>
          <div class="variant-section">
            <h3 class="section-title">No Errors</h3>
            <FdsFejlopsummering :errors="[]" />
            <p class="variant-note">Hidden when no errors</p>
          </div>
        </div>
        <p class="story-hint">
          The error summary component follows DKFDS v11 design specifications and provides accessible navigation to form errors. 
          Try switching themes using the global theme switcher to see how the component adapts to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Form integration with error navigation -->
    <Variant title="Form Integration" icon="carbon:form">
      <div class="story-content">
        <FdsFejlopsummering 
          :errors="validationErrors"
          header="Der er {{ validationErrors.length }} fejl i formularen"
          @error-clicked="handleErrorClick"
        />
        
        <div class="form-demo">
          <FdsFormgroup id="username-field">
            <FdsLabel for="username-input">Brugernavn *</FdsLabel>
            <FdsInput 
              id="username-input" 
              v-model="formData.name" 
              :error="true"
              aria-describedby="username-error"
            />
            <div id="username-error" class="form-error">Brugernavn skal være mindst 3 karakterer</div>
          </FdsFormgroup>

          <FdsFormgroup id="password-field">
            <FdsLabel for="password-input">Adgangskode *</FdsLabel>
            <FdsInput 
              id="password-input" 
              type="password"
              :error="true"
              aria-describedby="password-error"
            />
            <div id="password-error" class="form-error">Adgangskode skal være mindst 8 karakterer</div>
          </FdsFormgroup>

          <FdsFormgroup id="confirm-password-field">
            <FdsLabel for="confirm-password-input">Bekræft adgangskode *</FdsLabel>
            <FdsInput 
              id="confirm-password-input" 
              type="password"
              :error="true"
              aria-describedby="confirm-password-error"
            />
            <div id="confirm-password-error" class="form-error">Adgangskoder stemmer ikke overens</div>
          </FdsFormgroup>

          <FdsFormgroup id="terms-field">
            <label class="checkbox-label">
              <input type="checkbox" id="terms-checkbox" aria-describedby="terms-error">
              Jeg accepterer vilkårene og betingelserne *
            </label>
            <div id="terms-error" class="form-error">Du skal acceptere vilkårene</div>
          </FdsFormgroup>
        </div>

        <p class="story-hint">
          Click on error links in the summary to navigate directly to the problematic form fields. 
          The component uses smooth scrolling and proper focus management for optimal user experience.
        </p>
      </div>
    </Variant>

    <!-- Accessibility features demonstration -->
    <Variant title="Accessibility Features" icon="carbon:accessibility">
      <div class="story-content">
        <div class="accessibility-demo">
          <h3 class="section-subtitle">ARIA Live Region</h3>
          <FdsFejlopsummering 
            :errors="errors"
            header="Fejl opdaget i formularen"
          />
          
          <div class="aria-info">
            <h4 class="info-title">Accessibility Features:</h4>
            <ul class="feature-list">
              <li><strong>Navigation Landmark:</strong> Uses &lt;nav&gt; with aria-labelledby</li>
              <li><strong>Alert Role:</strong> Error container has role="alert" for screen readers</li>
              <li><strong>Focus Management:</strong> Error links focus target form fields</li>
              <li><strong>Keyboard Navigation:</strong> Full keyboard accessibility with Tab and Enter</li>
              <li><strong>Screen Reader:</strong> Icon has aria-label="Fejl" and decorative="false"</li>
            </ul>
          </div>

          <div class="keyboard-demo">
            <h4 class="info-title">Keyboard Navigation:</h4>
            <div class="keyboard-instructions">
              <div class="key-combo">
                <kbd>Tab</kbd> - Navigate between error links
              </div>
              <div class="key-combo">
                <kbd>Enter</kbd> / <kbd>Space</kbd> - Activate error link to focus field
              </div>
              <div class="key-combo">
                <kbd>Shift + Tab</kbd> - Navigate backwards
              </div>
            </div>
          </div>
        </div>
        
        <p class="story-hint">
          The component meets WCAG 2.1 AA accessibility standards with proper ARIA attributes, 
          keyboard navigation, and screen reader support.
        </p>
      </div>
    </Variant>

    <!-- Custom header slot demonstration -->
    <Variant title="Custom Headers" icon="carbon:text-highlight">
      <div class="story-content">
        <div class="custom-header-demo">
          <div class="header-example">
            <h3 class="section-subtitle">With Custom Slot</h3>
            <FdsFejlopsummering :errors="errors">
              <template #header>
                <span class="custom-header">
                  ⚠️ <strong>{{ errors.length }}</strong> fejl fundet - ret dem nedenfor
                </span>
              </template>
            </FdsFejlopsummering>
          </div>

          <div class="divider" />

          <div class="header-example">
            <h3 class="section-subtitle">Dynamic Count</h3>
            <FdsFejlopsummering 
              :errors="validationErrors"
              :header="`Formular validation: ${validationErrors.length} fejl`"
            />
          </div>

          <div class="divider" />

          <div class="header-example">
            <h3 class="section-subtitle">Contextual Message</h3>
            <FdsFejlopsummering 
              :errors="singleError"
              header="Login mislykket - ret følgende fejl"
            />
          </div>
        </div>
        
        <p class="story-hint">
          Use custom headers to provide context-specific error messages that help users understand 
          what went wrong and what they need to do to fix it.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="() => ({
        header: 'Der er problemer',
        errorCount: 2,
        autoCollect: true,
        customHeader: false,
        errorType: 'validation'
      })"
    >
      <template #default="{ state }">
        <div class="story-content playground">
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
            { value: 'contact', label: 'Contact Form' }
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

.variant-note {
  font-size: 1.4rem;
  color: #888;
  font-style: italic;
  margin-top: 0.8rem;
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

/* Form demo styles */
.form-demo {
  max-width: 500px;
  margin-top: 2.4rem;
}

.form-demo .fds-formgroup {
  margin-bottom: 2.4rem;
}

.form-error {
  font-size: 1.4rem;
  color: #cc0000;
  margin-top: 0.8rem;
}

.checkbox-label {
  font-size: 1.4rem;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  margin: 0;
  flex-shrink: 0;
}

/* Accessibility demo styles */
.accessibility-demo {
  max-width: 600px;
}

.aria-info {
  background: #f8f9fa;
  padding: 1.6rem;
  border-radius: 4px;
  margin: 1.6rem 0;
}

.info-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #333;
}

.feature-list {
  font-size: 1.4rem;
  line-height: 1.6;
  margin: 0;
  padding-left: 1.6rem;
}

.feature-list li {
  margin-bottom: 0.8rem;
}

.keyboard-demo {
  background: #fff;
  border: 1px solid #e0e0e0;
  padding: 1.6rem;
  border-radius: 4px;
  margin-top: 1.6rem;
}

.keyboard-instructions {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.key-combo {
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  gap: 1.2rem;
}

kbd {
  background: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 0.4rem 0.8rem;
  font-family: monospace;
  font-size: 1.2rem;
  min-width: 2.4rem;
  text-align: center;
  display: inline-block;
}

/* Custom header demo styles */
.custom-header-demo {
  max-width: 600px;
}

.header-example {
  margin-bottom: 1.6rem;
}

.custom-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.6rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem;
  }

  .variant-grid {
    grid-template-columns: 1fr;
  }

  .form-demo,
  .accessibility-demo,
  .custom-header-demo {
    max-width: 100%;
  }

  .keyboard-instructions {
    gap: 0.8rem;
  }

  .key-combo {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }
}
</style>

<docs lang="md">
# FdsFejlopsummering

The error summary component provides a centralized display of form validation errors with direct navigation to problematic fields. It implements DKFDS v11 specifications for accessible error handling and helps users quickly identify and resolve form issues.

## Usage

```vue
<template>
  <FdsFejlopsummering
    :errors="[
      { id: 'email-field', message: 'E-mail er påkrævet' },
      { id: 'password-field', message: 'Adgangskode skal være mindst 8 karakterer' }
    ]"
    @error-clicked="handleErrorClick"
  />
</template>

<script setup>
import { FdsFejlopsummering } from '@madsb/dkfds-vue3'

const handleErrorClick = (fieldId) => {
  console.log('Navigating to field:', fieldId)
}
</script>
```

## Props

| Prop          | Type        | Default           | Description                                                |
| ------------- | ----------- | ----------------- | ---------------------------------------------------------- |
| `header`      | `string`    | 'Der er problemer'| Main heading text for the error summary section           |
| `id`          | `string`    | -                 | Unique identifier for the container (auto-generated)      |
| `errors`      | `ErrorItem[]` | `[]`            | Manual list of error items to display                     |
| `autoCollect` | `boolean`   | `true`            | Whether to automatically collect errors from child components |

### ErrorItem Interface

```typescript
interface ErrorItem {
  id: string        // Unique identifier matching the form field ID
  message: string   // Human-readable error message to display
  element?: HTMLElement // Optional reference to the form element
}
```

## Events

| Event          | Description                                              |
| -------------- | -------------------------------------------------------- |
| `error-clicked` | Emitted when a user clicks on an error link (fieldId: string) |

## Slots

| Slot     | Description                                    |
| -------- | ---------------------------------------------- |
| `header` | Custom content for the error summary header   |
| `default`| Additional error items or custom content      |

## Accessibility

- Uses semantic `<nav>` element with `aria-labelledby` for proper navigation landmark
- Error container has `role="alert"` to announce errors to screen readers
- Error links provide smooth scrolling and focus management to target fields
- Keyboard navigation fully supported with Tab, Enter, and Space keys
- Error icon includes `aria-label="Fejl"` and `decorative="false"` for screen readers
- Meets WCAG 2.1 AA accessibility standards

## Form Integration

The component can automatically collect errors from child form components when `autoCollect` is enabled:

```vue
<FdsFejlopsummering :auto-collect="true">
  <FdsFormgroup id="username" :error="usernameError">
    <FdsInput v-model="username" />
  </FdsFormgroup>
</FdsFejlopsummering>
```

## Design Guidelines

- **Always place at the top** of forms to provide immediate feedback
- **Use clear, actionable messages** that tell users exactly what to fix
- **Ensure error IDs match** form field IDs for proper navigation
- **Test with keyboard navigation** to verify accessibility
- **Consider error priority** - show most critical errors first
- **Provide context** with custom headers when needed

## Error Message Best Practices

- Be specific: "E-mail skal have et gyldigt format" not "Ugyldig input"
- Be actionable: Tell users what to do, not just what's wrong
- Be consistent: Use the same language patterns across all errors
- Be helpful: Provide examples when formats are expected

## Themes

The component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with red error colors
- **VirkDK**: Business-oriented styling for Virk.dk with consistent error handling
- **BorgerDK**: Citizen-oriented styling for Borger.dk with accessible error presentation
</docs>