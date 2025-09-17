<script setup lang="ts">
import { ref } from 'vue'
import { FdsDetaljer, FdsFormgroup, FdsLabel, FdsInput, FdsHint } from '@madsb/dkfds-vue3'

// Demo state
const expandCount = ref(0)
const handleToggle = () => {
  expandCount.value++
}
</script>

<template>
  <Story title="Data Display/Detaljer" :layout="{ type: 'grid', width: '100%' }" icon="carbon:chevron-down">
    <!-- Showcase all detaljer variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Default</h3>
            <FdsDetaljer>
              <p>This is hidden content that can be revealed by clicking the summary.</p>
            </FdsDetaljer>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Custom Header</h3>
            <FdsDetaljer header="Frequently Asked Questions">
              <p>Here are common questions about our service:</p>
              <ul>
                <li>Question 1: Answer goes here</li>
                <li>Question 2: Another answer</li>
              </ul>
            </FdsDetaljer>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Rich Header</h3>
            <FdsDetaljer>
              <template #header>
                <strong>Advanced Settings</strong>
                <span class="text-muted"> (Optional)</span>
              </template>
              <p>Configuration options for advanced users.</p>
            </FdsDetaljer>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Form Content</h3>
            <FdsDetaljer header="Additional Information">
              <FdsFormgroup>
                <FdsLabel for="extra-info">Extra Details</FdsLabel>
                <FdsHint>This field is optional</FdsHint>
                <FdsInput id="extra-info" placeholder="Enter additional details" />
              </FdsFormgroup>
            </FdsDetaljer>
          </div>
        </div>
        <p class="story-hint">
          The detaljer component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how the component adapts to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Content types demonstration -->
    <Variant title="Content Types" icon="carbon:document">
      <div class="story-content">
        <div class="content-demo">
          <FdsDetaljer header="Text Content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
        <p class="story-hint">
          Detaljer can contain any type of content: paragraphs, lists, forms, or mixed content types.
        </p>
      </div>
    </Variant>

    <!-- Multiple sections pattern -->
    <Variant title="FAQ Pattern" icon="carbon:help">
      <div class="story-content">
        <h3 class="section-subtitle">Frequently Asked Questions</h3>
        <div class="faq-sections">
          <FdsDetaljer header="How do I create an account?">
            <p>To create an account, click the "Sign Up" button and fill out the registration form with your email address and chosen password.</p>
            <p>You will receive a confirmation email within a few minutes. Click the link in the email to activate your account.</p>
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
            <p>Yes, we take data security seriously. All data is encrypted both in transit and at rest using industry-standard encryption protocols.</p>
            <p>We are GDPR compliant and regularly undergo security audits to ensure your information remains protected.</p>
          </FdsDetaljer>
        </div>
        <p class="story-hint">
          This pattern is common for FAQ sections where users can expand only the questions they're interested in.
          Click to expand sections and press Enter or Space on focused summary elements.
        </p>
      </div>
    </Variant>

    <!-- Accessibility demonstration -->
    <Variant title="Accessibility Features" icon="carbon:accessibility">
      <div class="story-content">
        <div class="accessibility-demo">
          <FdsDetaljer header="Keyboard Navigation Test" @toggle="handleToggle">
            <p>This section demonstrates keyboard accessibility:</p>
            <ul>
              <li><strong>Tab:</strong> Navigate to the summary element</li>
              <li><strong>Enter/Space:</strong> Toggle the expanded state</li>
              <li><strong>Tab:</strong> Continue to content inside when expanded</li>
            </ul>
            <p>The native HTML details/summary elements provide built-in keyboard support and screen reader compatibility.</p>
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
            <p>No additional ARIA attributes are needed as the semantic HTML provides all necessary information.</p>
          </FdsDetaljer>
        </div>
        <p class="story-hint">
          Toggle count: {{ expandCount }}. Use Tab to navigate and Enter/Space to expand. The native details element provides excellent accessibility support.
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
        <div class="story-content playground">
          <FdsDetaljer
            :header="!state.useSlot ? state.header : undefined"
            @toggle="handleToggle"
          >
            <template v-if="state.useSlot" #header>
              <span v-if="state.richHeader">
                <strong>{{ state.header }}</strong>
                <span class="text-muted"> (expandable)</span>
              </span>
              <span v-else>{{ state.header }}</span>
            </template>
            {{ state.content }}
          </FdsDetaljer>
          <p class="story-hint">Toggle count: {{ expandCount }}</p>
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

.content-demo {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.faq-sections {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 2.4rem;
}

.accessibility-demo {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.playground {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

/* Text styling for rich content */
.text-muted {
  color: #666;
  font-weight: normal;
}

/* Ensure proper spacing in details content */
.story-content :deep(.details-text) {
  margin-top: 1.6rem;
}

.story-content :deep(.details-text h4) {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  margin-top: 0;
  color: #333;
}

.story-content :deep(.details-text ul) {
  margin: 1.2rem 0;
  padding-left: 2.4rem;
}

.story-content :deep(.details-text li) {
  margin-bottom: 0.8rem;
}

.story-content :deep(.details-text p) {
  margin: 1.2rem 0;
}

.story-content :deep(.details-text p:first-child) {
  margin-top: 0;
}

.story-content :deep(.details-text p:last-child) {
  margin-bottom: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem;
  }

  .variant-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<docs lang="md">
# FdsDetaljer

A collapsible details component that uses native HTML5 details/summary elements for progressive disclosure of information. Perfect for FAQ sections, optional form fields, and any content that doesn't need to be visible by default.

## Usage

```vue
<template>
  <FdsDetaljer header="More Information">
    This content is hidden by default and can be expanded by the user.
  </FdsDetaljer>
</template>

<script setup>
import { FdsDetaljer } from '@madsb/dkfds-vue3'
</script>
```

## Props

| Prop     | Type     | Default            | Description                                    |
| -------- | -------- | ------------------ | ---------------------------------------------- |
| `header` | `string` | `'Mere information'` | Header text displayed in the clickable summary |

## Slots

| Slot     | Description                                    |
| -------- | ---------------------------------------------- |
| `default` | Content that can be expanded/collapsed         |
| `header`  | Custom header content (overrides header prop) |

## Events

| Event    | Description                                  |
| -------- | -------------------------------------------- |
| `toggle` | Emitted when the details section is toggled |

## Accessibility

- Uses semantic HTML5 `<details>` and `<summary>` elements for optimal screen reader support
- Built-in keyboard navigation: Tab to focus, Enter/Space to toggle
- Screen readers automatically announce the expandable state
- No additional ARIA attributes needed - semantic HTML provides everything
- Content is properly associated with its toggle control

## Design Guidelines

- **Use for optional information** that doesn't need to be visible by default
- **Perfect for FAQ sections** where users can expand only relevant questions
- **Ideal for progressive disclosure** in forms with optional advanced settings
- **Group related details sections** for better organization
- **Keep headers concise** but descriptive enough to indicate the content
- **Avoid nesting details** elements deeply as it can confuse navigation

## Common Patterns

### FAQ Section
```vue
<FdsDetaljer header="How do I create an account?">
  To create an account, click the "Sign Up" button...
</FdsDetaljer>

<FdsDetaljer header="What payment methods do you accept?">
  We accept credit cards, PayPal, and bank transfers...
</FdsDetaljer>
```

### Optional Form Fields
```vue
<FdsDetaljer header="Advanced Settings">
  <FdsFormgroup>
    <FdsLabel for="advanced-option">Advanced Option</FdsLabel>
    <FdsInput id="advanced-option" />
  </FdsFormgroup>
</FdsDetaljer>
```

### Rich Header Content
```vue
<FdsDetaljer>
  <template #header>
    <strong>Important Notice</strong>
    <span class="text-muted">(Please read)</span>
  </template>
  Important information content...
</FdsDetaljer>
```

## Themes

The component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with subtle borders and spacing
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
</docs>