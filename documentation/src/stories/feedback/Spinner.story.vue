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
  <Story title="Feedback/Spinner" icon="carbon:circle-dash">
    <!-- Showcase all spinner variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Large Spinner</h3>
            <FdsSpinner size="large" sr-only-text="Loading content..." />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Small Spinner</h3>
            <FdsSpinner size="small" sr-only-text="Loading..." />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">With Status Text</h3>
            <FdsSpinner size="large" aria-live="polite">
              Loading your data...
            </FdsSpinner>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Light Variant</h3>
            <div>
              <FdsSpinner variant="light" size="large" sr-only-text="Loading..." />
            </div>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The spinner component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how spinners adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Size variations and inline usage -->
    <Variant title="Sizes & Context" icon="carbon:fit-to-width">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Standalone Spinners</h3>
          <div>
            <div>
              <span>Small</span>
              <FdsSpinner size="small" sr-only-text="Loading small content" />
            </div>
            <div>
              <span>Large</span>
              <FdsSpinner size="large" sr-only-text="Loading large content" />
            </div>
          </div>

          <hr class="my-6" />

          <h3 class="h6 mb-2">Inline Usage</h3>
          <div>
            <p>
              Processing your request 
              <FdsSpinner size="small" sr-only-text="Processing" />
              please wait...
            </p>
            <div>
              <span>Saving changes</span>
              <FdsSpinner size="small" sr-only-text="Saving" />
            </div>
          </div>

          <hr class="my-6" />

          <h3 class="h6 mb-2">Centered Layout</h3>
          <div>
            <FdsSpinner size="large" :centered="true" aria-live="polite">
              Loading application data...
            </FdsSpinner>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Small spinners work well inline with text or in buttons, while large spinners are better
          for prominent loading states. Use the centered prop for full-width container layouts.
        </p>
      </div>
    </Variant>

    <!-- Accessibility and status text demonstration -->
    <Variant title="Accessibility Features" icon="carbon:text-creation">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Screen Reader Support</h3>
          <div>
            <div>
              <h4>SR-Only Text</h4>
              <FdsSpinner size="large" sr-only-text="Loading user profile data" />
              <p>Hidden text for screen readers when no visible status is shown</p>
            </div>
            <div>
              <h4>ARIA Live Region</h4>
              <FdsSpinner size="large" aria-live="assertive">
                Processing payment...
              </FdsSpinner>
              <p>Visible status text with live region announcements</p>
            </div>
          </div>

          <hr class="my-6" />

          <h3 class="h6 mb-2">Dynamic Status Updates</h3>
          <div>
            <FdsSpinner 
              v-if="isLoading" 
              size="large" 
              :centered="true" 
              aria-live="polite"
            >
              {{ loadingText }}
            </FdsSpinner>
            <div v-else>
              <span>✓</span>
              {{ loadingText }}
            </div>
            <button 
              type="button" 

              @click="simulateLoading"
              :disabled="isLoading"
            >
              {{ isLoading ? 'Loading...' : 'Start Loading Simulation' }}
            </button>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Screen readers announce status updates through ARIA live regions. Use 'polite' for
          non-urgent updates and 'assertive' for critical information that should interrupt.
          Simulation count: {{ simulationCount }}
        </p>
      </div>
    </Variant>

    <!-- Context and overlay demonstrations -->
    <Variant title="Usage Contexts" icon="carbon:layers">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Light Background</h3>
          <div>
            <FdsSpinner size="large" variant="default">
              Loading on light background...
            </FdsSpinner>
          </div>

          <hr class="my-6" />

          <h3 class="h6 mb-2">Dark Background</h3>
          <div>
            <FdsSpinner size="large" variant="light">
              Loading on dark background...
            </FdsSpinner>
          </div>

          <hr class="my-6" />

          <h3 class="h6 mb-2">Modal Overlay</h3>
          <div>
            <div class="modal-content">
              <h4 class="modal-title">Processing Request</h4>
              <FdsSpinner size="large" :centered="true" aria-live="polite">
                Please wait while we process your submission...
              </FdsSpinner>
            </div>
          </div>

          <hr class="my-6" />

          <h3 class="h6 mb-2">Card Loading</h3>
          <div>
            <div>
              <h4>Recent Activity</h4>
            </div>
            <div>
              <FdsSpinner size="small" :centered="true">
                Loading activity data...
              </FdsSpinner>
            </div>
          </div>
        </div>
        <p class="mt-4 mb-0">
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
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <div :class="{ 'dark-bg': state.variant === 'light' }">
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
          <p class="mt-4 mb-0">
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
