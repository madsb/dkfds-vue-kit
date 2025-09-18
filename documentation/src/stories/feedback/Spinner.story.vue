<script setup lang="ts">
import { ref } from 'vue'
import { FdsSpinner } from '@madsb/dkfds-vue3'

// Demo state for status updates
const loadingText = ref('Loading content...')
const isLoading = ref(true)
const simulationCount = ref(0)

const simulateLoading = async () => {
  simulationCount.value++
  isLoading.value = true
  loadingText.value = 'Initializing...'
  
  await new Promise(resolve => setTimeout(resolve, 1000))
  loadingText.value = 'Processing data...'
  
  await new Promise(resolve => setTimeout(resolve, 1500))
  loadingText.value = 'Finalizing...'
  
  await new Promise(resolve => setTimeout(resolve, 800))
  isLoading.value = false
  loadingText.value = 'Complete!'
  
  setTimeout(() => {
    loadingText.value = 'Loading content...'
  }, 2000)
}
</script>

<template>
  <Story title="Feedback/Spinner" :layout="{ type: 'grid', width: '100%' }" icon="carbon:circle-dash">
    <!-- Showcase all spinner variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Large Spinner</h3>
            <FdsSpinner size="large" sr-only-text="Loading content..." />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Small Spinner</h3>
            <FdsSpinner size="small" sr-only-text="Loading..." />
          </div>
          <div class="variant-section">
            <h3 class="section-title">With Status Text</h3>
            <FdsSpinner size="large" aria-live="polite">
              Loading your data...
            </FdsSpinner>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Light Variant</h3>
            <div class="dark-background">
              <FdsSpinner variant="light" size="large" sr-only-text="Loading..." />
            </div>
          </div>
        </div>
        <p class="story-hint">
          The spinner component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how spinners adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Size variations and inline usage -->
    <Variant title="Sizes & Context" icon="carbon:fit-to-width">
      <div class="story-content">
        <div class="size-demo">
          <h3 class="section-subtitle">Standalone Spinners</h3>
          <div class="spinner-row">
            <div class="spinner-item">
              <span class="size-label">Small</span>
              <FdsSpinner size="small" sr-only-text="Loading small content" />
            </div>
            <div class="spinner-item">
              <span class="size-label">Large</span>
              <FdsSpinner size="large" sr-only-text="Loading large content" />
            </div>
          </div>
          
          <div class="divider" />
          
          <h3 class="section-subtitle">Inline Usage</h3>
          <div class="inline-examples">
            <p class="inline-text">
              Processing your request 
              <FdsSpinner size="small" sr-only-text="Processing" />
              please wait...
            </p>
            <div class="button-with-spinner">
              <span>Saving changes</span>
              <FdsSpinner size="small" sr-only-text="Saving" />
            </div>
          </div>
          
          <div class="divider" />
          
          <h3 class="section-subtitle">Centered Layout</h3>
          <div class="centered-demo">
            <FdsSpinner size="large" :centered="true" aria-live="polite">
              Loading application data...
            </FdsSpinner>
          </div>
        </div>
        <p class="story-hint">
          Small spinners work well inline with text or in buttons, while large spinners are better
          for prominent loading states. Use the centered prop for full-width container layouts.
        </p>
      </div>
    </Variant>

    <!-- Accessibility and status text demonstration -->
    <Variant title="Accessibility Features" icon="carbon:text-creation">
      <div class="story-content">
        <div class="accessibility-demo">
          <h3 class="section-subtitle">Screen Reader Support</h3>
          <div class="demo-row">
            <div class="demo-item">
              <h4 class="demo-title">SR-Only Text</h4>
              <FdsSpinner size="large" sr-only-text="Loading user profile data" />
              <p class="demo-description">Hidden text for screen readers when no visible status is shown</p>
            </div>
            <div class="demo-item">
              <h4 class="demo-title">ARIA Live Region</h4>
              <FdsSpinner size="large" aria-live="assertive">
                Processing payment...
              </FdsSpinner>
              <p class="demo-description">Visible status text with live region announcements</p>
            </div>
          </div>
          
          <div class="divider" />
          
          <h3 class="section-subtitle">Dynamic Status Updates</h3>
          <div class="loading-simulation">
            <FdsSpinner 
              v-if="isLoading" 
              size="large" 
              :centered="true" 
              aria-live="polite"
            >
              {{ loadingText }}
            </FdsSpinner>
            <div v-else class="completion-message">
              <span class="success-icon">✓</span>
              {{ loadingText }}
            </div>
            <button 
              type="button" 
              class="demo-button"
              @click="simulateLoading"
              :disabled="isLoading"
            >
              {{ isLoading ? 'Loading...' : 'Start Loading Simulation' }}
            </button>
          </div>
        </div>
        <p class="story-hint">
          Screen readers announce status updates through ARIA live regions. Use 'polite' for
          non-urgent updates and 'assertive' for critical information that should interrupt.
          Simulation count: {{ simulationCount }}
        </p>
      </div>
    </Variant>

    <!-- Context and overlay demonstrations -->
    <Variant title="Usage Contexts" icon="carbon:layers">
      <div class="story-content">
        <div class="context-demo">
          <h3 class="section-subtitle">Light Background</h3>
          <div class="light-context">
            <FdsSpinner size="large" variant="default">
              Loading on light background...
            </FdsSpinner>
          </div>
          
          <div class="divider" />
          
          <h3 class="section-subtitle">Dark Background</h3>
          <div class="dark-context">
            <FdsSpinner size="large" variant="light">
              Loading on dark background...
            </FdsSpinner>
          </div>
          
          <div class="divider" />
          
          <h3 class="section-subtitle">Modal Overlay</h3>
          <div class="modal-overlay-demo">
            <div class="modal-content">
              <h4 class="modal-title">Processing Request</h4>
              <FdsSpinner size="large" :centered="true" aria-live="polite">
                Please wait while we process your submission...
              </FdsSpinner>
            </div>
          </div>
          
          <div class="divider" />
          
          <h3 class="section-subtitle">Card Loading</h3>
          <div class="card-demo">
            <div class="card-header">
              <h4 class="card-title">Recent Activity</h4>
            </div>
            <div class="card-body">
              <FdsSpinner size="small" :centered="true">
                Loading activity data...
              </FdsSpinner>
            </div>
          </div>
        </div>
        <p class="story-hint">
          Use the appropriate variant based on background color. The light variant provides
          better visibility on dark backgrounds, while default works well on light backgrounds.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          size: 'large',
          variant: 'default',
          statusText: 'Loading content...',
          hasStatusText: true,
          srOnlyText: 'Loading...',
          centered: false,
          ariaLive: 'polite',
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <div class="playground-spinner" :class="{ 'dark-bg': state.variant === 'light' }">
            <FdsSpinner
              :size="state.size"
              :variant="state.variant"
              :sr-only-text="state.hasStatusText ? undefined : state.srOnlyText"
              :centered="state.centered"
              :aria-live="state.ariaLive"
            >
              {{ state.hasStatusText ? state.statusText : '' }}
            </FdsSpinner>
          </div>
          <p class="story-hint">
            Configure the spinner properties using the controls to explore different combinations.
            Screen readers will announce status text based on the aria-live setting.
          </p>
        </div>
      </template>

      <template #controls="{ state }">
        <HstSelect
          v-model="state.size"
          title="Size"
          :options="[
            { value: 'small', label: 'Small' },
            { value: 'large', label: 'Large' },
          ]"
        />

        <HstSelect
          v-model="state.variant"
          title="Variant"
          :options="[
            { value: 'default', label: 'Default' },
            { value: 'light', label: 'Light' },
          ]"
        />

        <HstCheckbox v-model="state.hasStatusText" title="Show Status Text" />
        
        <HstText 
          v-model="state.statusText" 
          title="Status Text" 
          :disabled="!state.hasStatusText"
        />
        
        <HstText 
          v-model="state.srOnlyText" 
          title="Screen Reader Text" 
          :disabled="state.hasStatusText"
        />

        <HstSelect
          v-model="state.ariaLive"
          title="ARIA Live"
          :options="[
            { value: 'polite', label: 'Polite' },
            { value: 'assertive', label: 'Assertive' },
            { value: 'off', label: 'Off' },
          ]"
          :disabled="!state.hasStatusText"
        />

        <HstCheckbox v-model="state.centered" title="Centered" />
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.variant-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.6rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

.dark-background {
  background: #2c3e50;
  padding: 2.4rem;
  border-radius: 4px;
  display: flex;
  justify-content: center;
}

/* Size demonstration */
.size-demo {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.spinner-row {
  display: flex;
  gap: 4.8rem;
  justify-content: center;
  margin-bottom: 2.4rem;
}

.spinner-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
}

.size-label {
  font-size: 1.4rem;
  font-weight: 500;
  color: #666;
}

.inline-examples {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
}

.inline-text {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.6rem;
  margin: 0;
}

.button-with-spinner {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.6rem;
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1.4rem;
}

.centered-demo {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 4.8rem 2.4rem;
  background: #fafafa;
}

/* Accessibility demonstration */
.accessibility-demo {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.demo-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.4rem;
}

.demo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background: #fafafa;
}

.demo-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 1.2rem 0;
  color: #333;
}

.demo-description {
  font-size: 1.4rem;
  color: #666;
  text-align: center;
  margin: 1.2rem 0 0 0;
  line-height: 1.5;
}

.loading-simulation {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  padding: 2.4rem;
  background: #f8f9fa;
  border-radius: 4px;
  min-height: 120px;
  justify-content: center;
}

.completion-message {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.6rem;
  color: #2e7d32;
  font-weight: 500;
}

.success-icon {
  color: #2e7d32;
  font-weight: bold;
  font-size: 1.8rem;
}

.demo-button {
  padding: 0.8rem 1.6rem;
  border: 1px solid #0056b3;
  border-radius: 4px;
  background: #007bff;
  color: white;
  cursor: pointer;
  font-size: 1.4rem;
  transition: all 0.2s ease;
}

.demo-button:hover:not(:disabled) {
  background: #0056b3;
  border-color: #004085;
}

.demo-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background: #6c757d;
  border-color: #6c757d;
}

/* Context demonstration */
.context-demo {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.light-context {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  padding: 3.2rem;
  border-radius: 4px;
  display: flex;
  justify-content: center;
}

.dark-context {
  background: #2c3e50;
  padding: 3.2rem;
  border-radius: 4px;
  display: flex;
  justify-content: center;
}

.modal-overlay-demo {
  background: rgba(0, 0, 0, 0.5);
  padding: 4.8rem;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 2.4rem;
  border-radius: 8px;
  min-width: 300px;
  text-align: center;
}

.modal-title {
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0 0 1.6rem 0;
  color: #1a1a1a;
}

.card-demo {
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background: white;
}

.card-header {
  padding: 1.6rem 2.0rem;
  border-bottom: 1px solid #e0e0e0;
  background: #f8f9fa;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
  color: #1a1a1a;
}

.card-body {
  padding: 3.2rem 2.0rem;
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

.playground-spinner {
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.4rem;
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  transition: all 0.2s ease;
}

.playground-spinner.dark-bg {
  background: #2c3e50;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem;
  }

  .variant-grid {
    grid-template-columns: 1fr;
  }

  .spinner-row {
    gap: 2.4rem;
  }

  .demo-row {
    grid-template-columns: 1fr;
  }

  .modal-overlay-demo {
    padding: 2.4rem;
  }

  .modal-content {
    min-width: auto;
    max-width: 100%;
  }
}
</style>

<docs lang="md">
# FdsSpinner

The spinner component provides visual feedback for loading states with accessibility support and multiple size variants. It follows DKFDS v11 design specifications and includes proper ARIA live regions for screen readers.

## Usage

```vue
<template>
  <!-- Basic spinner with screen reader text -->
  <FdsSpinner sr-only-text="Loading content..." />
  
  <!-- Spinner with visible status text -->
  <FdsSpinner aria-live="polite">
    Loading your data...
  </FdsSpinner>
  
  <!-- Small spinner for inline use -->
  <FdsSpinner size="small" sr-only-text="Processing..." />
</template>

<script setup>
import { FdsSpinner } from '@madsb/dkfds-vue3'
</script>
```

## Props

| Prop         | Type                              | Default     | Description                                               |
| ------------ | --------------------------------- | ----------- | --------------------------------------------------------- |
| `size`       | `'small' \| 'large'`               | `'large'`   | Size variant affecting visual dimensions                  |
| `variant`    | `'default' \| 'light'`             | `'default'` | Color variant for different background contexts          |
| `srOnlyText` | `string`                          | -           | Screen reader text when no visible status is shown      |
| `centered`   | `boolean`                         | `false`     | Whether to center spinner horizontally in container     |
| `ariaLive`   | `'polite' \| 'assertive' \| 'off'` | `'polite'`  | ARIA live region politeness for status announcements   |

## Slots

| Slot      | Description                                              |
| --------- | -------------------------------------------------------- |
| `default` | Status text content displayed next to spinner          |

## Accessibility

- Uses ARIA live regions to announce status updates to screen readers
- Supports both visible status text and screen reader only text
- `aria-live="polite"` waits for screen reader to pause before announcing
- `aria-live="assertive"` interrupts screen reader for urgent updates
- Spinner element is hidden from screen readers when status text is present
- Proper semantic markup ensures compatibility with assistive technologies

## Design Guidelines

- **Small spinners** work well inline with text or in buttons
- **Large spinners** are better for prominent loading states and full-page loading
- Use **default variant** on light backgrounds
- Use **light variant** on dark backgrounds for better visibility
- Always provide either `sr-only-text` or visible status text for accessibility
- Use `aria-live="polite"` for non-urgent updates (default)
- Use `aria-live="assertive"` for critical updates that require immediate attention
- Center spinners in containers when they represent the primary loading state
- Consider context when choosing between standalone spinners and those with status text

## Usage Patterns

### Inline Loading
```vue
<p>Processing your request <FdsSpinner size="small" sr-only-text="Processing" /> please wait...</p>
```

### Button Loading State
```vue
<button :disabled="loading">
  <FdsSpinner v-if="loading" size="small" sr-only-text="Saving" />
  {{ loading ? 'Saving...' : 'Save Changes' }}
</button>
```

### Full-Page Loading
```vue
<FdsSpinner 
  size="large" 
  :centered="true" 
  aria-live="polite"
>
  Loading application data...
</FdsSpinner>
```

### Modal Loading
```vue
<FdsSpinner 
  size="large" 
  :centered="true" 
  aria-live="assertive"
>
  Processing your submission...
</FdsSpinner>
```

## Themes

The spinner component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with theme-appropriate colors
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
</docs>