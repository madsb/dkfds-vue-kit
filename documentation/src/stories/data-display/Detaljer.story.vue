<script setup lang="ts">
import { ref } from 'vue'
import { FdsDetaljer, FdsFormgroup, FdsLabel, FdsInput, FdsHint } from '@madsb/dkfds-vue-kit'

// Demo state
const expandCount = ref(0)
const handleToggle = () => {
  expandCount.value++
}
</script>

<template>
  <Story title="Data Display/Detaljer" icon="carbon:chevron-down">
    <!-- Showcase all detaljer variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Default</h3>
            <FdsDetaljer>
              <p>This is hidden content that can be revealed by clicking the summary.</p>
            </FdsDetaljer>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Custom Header</h3>
            <FdsDetaljer header="Frequently Asked Questions">
              <p>Here are common questions about our service:</p>
              <ul>
                <li>Question 1: Answer goes here</li>
                <li>Question 2: Another answer</li>
              </ul>
            </FdsDetaljer>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Rich Header</h3>
            <FdsDetaljer>
              <template #header>
                <strong>Advanced Settings</strong>
                <span> (Optional)</span>
              </template>
              <p>Configuration options for advanced users.</p>
            </FdsDetaljer>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Form Content</h3>
            <FdsDetaljer header="Additional Information">
              <FdsFormgroup>
                <FdsLabel for="extra-info">Extra Details</FdsLabel>
                <FdsHint>This field is optional</FdsHint>
                <FdsInput id="extra-info" placeholder="Enter additional details" />
              </FdsFormgroup>
            </FdsDetaljer>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The detaljer component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how the component adapts to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Content types demonstration -->
    <Variant title="Content Types" icon="carbon:document">
      <div class="container py-6">
        <div>
          <FdsDetaljer header="Text Content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </FdsDetaljer>

          <FdsDetaljer header="List Content">
            <h4>Service Features:</h4>
            <ul>
              <li>Feature 1 - Basic functionality</li>
              <li>Feature 2 - Advanced options</li>
              <li>Feature 3 - Premium services</li>
              <li>Feature 4 - Support and documentation</li>
            </ul>
          </FdsDetaljer>

          <FdsDetaljer header="Mixed Content">
            <h4>About This Service</h4>
            <p>Our service provides comprehensive solutions for your needs:</p>
            <ul>
              <li><strong>Security:</strong> Enterprise-grade protection</li>
              <li><strong>Performance:</strong> Optimized for speed</li>
              <li><strong>Support:</strong> 24/7 customer assistance</li>
            </ul>
            <p><em>Contact us for more information about pricing and availability.</em></p>
          </FdsDetaljer>
        </div>
        <p class="mt-4 mb-0">
          Detaljer can contain any type of content: paragraphs, lists, forms, or mixed content
          types.
        </p>
      </div>
    </Variant>

    <!-- Multiple sections pattern -->
    <Variant title="FAQ Pattern" icon="carbon:help">
      <div class="container py-6">
        <h3 class="h6 mb-2">Frequently Asked Questions</h3>
        <div>
          <FdsDetaljer header="How do I create an account?">
            <p>
              To create an account, click the "Sign Up" button and fill out the registration form
              with your email address and chosen password.
            </p>
            <p>
              You will receive a confirmation email within a few minutes. Click the link in the
              email to activate your account.
            </p>
          </FdsDetaljer>

          <FdsDetaljer header="What payment methods do you accept?">
            <p>We accept the following payment methods:</p>
            <ul>
              <li>Credit cards (Visa, MasterCard, American Express)</li>
              <li>PayPal</li>
              <li>Bank transfer</li>
              <li>Mobile payment (MobilePay, Swish)</li>
            </ul>
          </FdsDetaljer>

          <FdsDetaljer header="How can I contact customer support?">
            <p>You can reach our customer support team through:</p>
            <ul>
              <li>Email: support@example.dk</li>
              <li>Phone: +45 12 34 56 78 (Mon-Fri 9-17)</li>
              <li>Live chat on this website</li>
            </ul>
            <p>We aim to respond to all inquiries within 24 hours.</p>
          </FdsDetaljer>

          <FdsDetaljer header="Is my data secure?">
            <p>
              Yes, we take data security seriously. All data is encrypted both in transit and at
              rest using industry-standard encryption protocols.
            </p>
            <p>
              We are GDPR compliant and regularly undergo security audits to ensure your information
              remains protected.
            </p>
          </FdsDetaljer>
        </div>
        <p class="mt-4 mb-0">
          This pattern is common for FAQ sections where users can expand only the questions they're
          interested in. Click to expand sections and press Enter or Space on focused summary
          elements.
        </p>
      </div>
    </Variant>

    <!-- Accessibility demonstration -->
    <Variant title="Accessibility Features" icon="carbon:accessibility">
      <div class="container py-6">
        <div>
          <FdsDetaljer header="Keyboard Navigation Test" @toggle="handleToggle">
            <p>This section demonstrates keyboard accessibility:</p>
            <ul>
              <li><strong>Tab:</strong> Navigate to the summary element</li>
              <li><strong>Enter/Space:</strong> Toggle the expanded state</li>
              <li><strong>Tab:</strong> Continue to content inside when expanded</li>
            </ul>
            <p>
              The native HTML details/summary elements provide built-in keyboard support and screen
              reader compatibility.
            </p>
          </FdsDetaljer>

          <FdsDetaljer>
            <template #header>
              <span role="img" aria-label="Important information">⚠️</span>
              Screen Reader Compatibility
            </template>
            <p>Screen readers will announce:</p>
            <ul>
              <li>The summary text as a button</li>
              <li>The current expanded/collapsed state</li>
              <li>Content changes when toggled</li>
            </ul>
            <p>
              No additional ARIA attributes are needed as the semantic HTML provides all necessary
              information.
            </p>
          </FdsDetaljer>
        </div>
        <p class="mt-4 mb-0">
          Toggle count: {{ expandCount }}. Use Tab to navigate and Enter/Space to expand. The native
          details element provides excellent accessibility support.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          header: 'More Information',
          content: 'This is expandable content that can be revealed by clicking the header above.',
          useSlot: false,
          richHeader: false,
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <FdsDetaljer :header="!state.useSlot ? state.header : undefined" @toggle="handleToggle">
            <template v-if="state.useSlot" #header>
              <span v-if="state.richHeader">
                <strong>{{ state.header }}</strong>
                <span> (expandable)</span>
              </span>
              <span v-else>{{ state.header }}</span>
            </template>
            {{ state.content }}
          </FdsDetaljer>
          <p class="mt-4 mb-0">Toggle count: {{ expandCount }}</p>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.header" title="Header Text" />

        <HstText v-model="state.content" title="Content" />

        <HstCheckbox v-model="state.useSlot" title="Use Header Slot" />

        <HstCheckbox
          v-model="state.richHeader"
          title="Rich Header Content"
          :disabled="!state.useSlot"
        />
      </template>
    </Variant>
  </Story>
</template>
