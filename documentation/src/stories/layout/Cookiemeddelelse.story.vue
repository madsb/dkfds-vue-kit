<script setup lang="ts">
import { ref } from 'vue'
import { FdsCookiemeddelelse, FdsButton } from '@madsb/dkfds-vue3'

// Demo state for interactions
const acceptedCount = ref(0)
const rejectedCount = ref(0)
const isVisible = ref(true)

const handleAccept = () => {
  acceptedCount.value++
  isVisible.value = false
  // Show the cookie notice again after 2 seconds for demo purposes
  setTimeout(() => {
    isVisible.value = true
  }, 2000)
}

const handleCancel = () => {
  rejectedCount.value++
  isVisible.value = false
  // Show the cookie notice again after 2 seconds for demo purposes
  setTimeout(() => {
    isVisible.value = true
  }, 2000)
}

const handleCustomAction = (action: string) => {
  console.log(`Custom action: ${action}`)
}
</script>

<template>
  <Story title="Layout/Cookiemeddelelse" :layout="{ type: 'grid', width: '100%' }" icon="carbon:cookie">
    <!-- Showcase all cookie notice variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Default</h3>
            <FdsCookiemeddelelse />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Custom Header</h3>
            <FdsCookiemeddelelse header="Cookie Preferences" />
          </div>
          <div class="variant-section">
            <h3 class="section-title">English Content</h3>
            <FdsCookiemeddelelse header="Cookie Notice">
              <p>We use cookies to improve your experience and analyze site usage. All collected data is anonymized.</p>
              <a href="#">Read our privacy policy</a>
            </FdsCookiemeddelelse>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Custom Actions</h3>
            <FdsCookiemeddelelse>
              <template #actions>
                <div class="button-group">
                  <FdsButton variant="primary">Accept All</FdsButton>
                  <FdsButton variant="secondary">Customize</FdsButton>
                  <FdsButton variant="tertiary">Reject All</FdsButton>
                </div>
              </template>
            </FdsCookiemeddelelse>
          </div>
        </div>
        <p class="story-hint">
          The cookie notice component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how the component adapts to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Interactive demonstration with events -->
    <Variant title="Interactive Demo" icon="carbon:touch-interaction">
      <div class="story-content">
        <div v-if="isVisible" class="demo-container">
          <FdsCookiemeddelelse
            @accept="handleAccept"
            @cancel="handleCancel"
          />
        </div>
        <div v-else class="demo-feedback">
          <p>Cookie notice dismissed. It will reappear in 2 seconds for demo purposes.</p>
        </div>
        
        <div class="demo-stats">
          <p><strong>Statistics:</strong></p>
          <ul>
            <li>Accepted: {{ acceptedCount }} times</li>
            <li>Rejected: {{ rejectedCount }} times</li>
          </ul>
        </div>
        
        <p class="story-hint">
          Click the accept or reject buttons to see the event handling in action. The cookie notice will
          reappear after 2 seconds for demonstration purposes.
        </p>
      </div>
    </Variant>

    <!-- Accessibility and GDPR compliance -->
    <Variant title="Accessibility & GDPR" icon="carbon:accessibility">
      <div class="story-content">
        <div class="accessibility-demo">
          <h3 class="section-subtitle">ARIA Attributes</h3>
          <FdsCookiemeddelelse header="Accessible Cookie Notice" />
          
          <div class="divider" />
          
          <h3 class="section-subtitle">GDPR Compliant Options</h3>
          <FdsCookiemeddelelse header="Data Collection Consent">
            <p>We process personal data to provide our services and improve user experience. 
               Your consent helps us:</p>
            <ul>
              <li>Analyze website usage with Google Analytics</li>
              <li>Remember your preferences</li>
              <li>Provide personalized content</li>
            </ul>
            <p><a href="#privacy">Read our full privacy policy</a> for detailed information.</p>
            
            <template #actions>
              <div class="gdpr-actions">
                <FdsButton variant="primary" @click="handleCustomAction('accept-all')">
                  Accept All Cookies
                </FdsButton>
                <FdsButton variant="secondary" @click="handleCustomAction('necessary-only')">
                  Necessary Cookies Only
                </FdsButton>
                <FdsButton variant="tertiary" @click="handleCustomAction('customize')">
                  Customize Settings
                </FdsButton>
              </div>
            </template>
          </FdsCookiemeddelelse>
        </div>
        
        <p class="story-hint">
          The component includes proper ARIA attributes for screen readers: role="complementary",
          aria-labelledby, and aria-describedby. Navigate with Tab and use Enter or Space to activate buttons.
        </p>
      </div>
    </Variant>

    <!-- Positioning and layout demonstration -->
    <Variant title="Positioning & Layout" icon="carbon:layout">
      <div class="story-content">
        <div class="positioning-demo">
          <h3 class="section-subtitle">Fixed Bottom Position</h3>
          <p>Cookie notices are typically positioned at the bottom of the viewport:</p>
          
          <div class="mockup-container">
            <div class="mockup-viewport">
              <div class="mockup-header">Website Header</div>
              <div class="mockup-content">
                <p>Main website content...</p>
                <p>More content...</p>
              </div>
              <div class="mockup-cookie-notice">
                <FdsCookiemeddelelse />
              </div>
            </div>
          </div>
          
          <div class="divider" />
          
          <h3 class="section-subtitle">Responsive Behavior</h3>
          <p>On mobile devices, the cookie notice adapts to smaller screens:</p>
          
          <div class="mobile-demo">
            <FdsCookiemeddelelse header="Mobile Cookie Notice" />
          </div>
        </div>
        
        <p class="story-hint">
          Cookie notices should be positioned to not obstruct important content while remaining clearly visible.
          The component automatically adapts button layouts on mobile devices.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          header: 'Fortæl os om du accepterer cookies',
          customContent: false,
          contentText: 'Vi indsamler statistik ved hjælp af cookies. Alle indsamlede data anonymiseres.',
          showLink: true,
          linkText: 'Læs mere om vores brug af cookies',
          customActions: false,
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <FdsCookiemeddelelse
            :header="state.header"
            @accept="handleAccept"
            @cancel="handleCancel"
          >
            <template v-if="state.customContent">
              <p>{{ state.contentText }}</p>
              <a v-if="state.showLink" href="#">{{ state.linkText }}</a>
            </template>
            
            <template v-if="state.customActions" #actions>
              <div class="button-group">
                <FdsButton variant="primary" @click="handleCustomAction('accept-all')">
                  Accept All
                </FdsButton>
                <FdsButton variant="secondary" @click="handleCustomAction('settings')">
                  Settings
                </FdsButton>
                <FdsButton variant="tertiary" @click="handleCustomAction('reject')">
                  Reject
                </FdsButton>
              </div>
            </template>
          </FdsCookiemeddelelse>
          
          <div class="playground-stats">
            <p>Events fired - Accepted: {{ acceptedCount }}, Rejected: {{ rejectedCount }}</p>
          </div>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.header" title="Header Text" />
        
        <HstCheckbox v-model="state.customContent" title="Custom Content" />
        
        <HstTextarea
          v-if="state.customContent"
          v-model="state.contentText"
          title="Content Text"
          :rows="3"
        />
        
        <HstCheckbox
          v-if="state.customContent"
          v-model="state.showLink"
          title="Show Link"
        />
        
        <HstText
          v-if="state.customContent && state.showLink"
          v-model="state.linkText"
          title="Link Text"
        />
        
        <HstCheckbox v-model="state.customActions" title="Custom Actions" />
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
  gap: 1.2rem;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  align-items: center;
}

.gdpr-actions {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

/* Demo-specific styles */
.demo-container {
  border: 2px dashed #e0e0e0;
  border-radius: 8px;
  padding: 1.6rem;
  margin-bottom: 2.4rem;
}

.demo-feedback {
  background: #f5f5f5;
  padding: 1.6rem;
  border-radius: 8px;
  margin-bottom: 2.4rem;
  text-align: center;
}

.demo-stats {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.6rem;
  margin-bottom: 1.6rem;
}

.demo-stats ul {
  list-style: none;
  padding: 0;
  margin: 0.8rem 0 0;
}

.demo-stats li {
  padding: 0.4rem 0;
  font-size: 1.4rem;
}

/* Positioning demo styles */
.mockup-container {
  margin: 2.4rem 0;
}

.mockup-viewport {
  position: relative;
  border: 2px solid #333;
  border-radius: 8px;
  height: 300px;
  background: #f9f9f9;
  overflow: hidden;
}

.mockup-header {
  background: #333;
  color: white;
  padding: 1.2rem;
  font-size: 1.4rem;
  font-weight: 600;
}

.mockup-content {
  padding: 1.6rem;
  font-size: 1.4rem;
}

.mockup-cookie-notice {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.mobile-demo {
  max-width: 375px;
  margin: 1.6rem auto;
  border: 2px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
}

/* Accessibility demo styles */
.accessibility-demo {
  max-width: 600px;
}

.accessibility-demo ul {
  margin: 1.2rem 0;
  padding-left: 2.4rem;
}

.accessibility-demo li {
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
}

.divider {
  margin: 2.4rem 0;
  border-top: 1px solid #e0e0e0;
}

.playground {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  min-height: 200px;
}

.playground-stats {
  background: #f5f5f5;
  padding: 1.2rem;
  border-radius: 6px;
  font-size: 1.4rem;
  text-align: center;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem;
  }

  .variant-grid {
    grid-template-columns: 1fr;
  }

  .gdpr-actions {
    gap: 0.8rem;
  }

  .button-group {
    flex-direction: column;
    align-items: stretch;
  }

  .mockup-viewport {
    height: 250px;
  }
}
</style>

<docs lang="md">
# FdsCookiemeddelelse

The cookie notice component provides a GDPR-compliant interface for obtaining user consent for cookie usage. It follows DKFDS v11 design specifications and includes proper accessibility attributes, semantic structure, and customizable content slots.

## Usage

```vue
<template>
  <FdsCookiemeddelelse
    @accept="handleCookieAccept"
    @cancel="handleCookieReject"
  />
</template>

<script setup>
import { FdsCookiemeddelelse } from '@madsb/dkfds-vue3'

const handleCookieAccept = () => {
  console.log('Cookies accepted')
  // Store consent and hide notice
}

const handleCookieReject = () => {
  console.log('Cookies rejected')
  // Store rejection and hide notice
}
</script>
```

## Props

| Prop     | Type     | Default                           | Description                                    |
| -------- | -------- | --------------------------------- | ---------------------------------------------- |
| `header` | `string` | `'Fortæl os om du accepterer cookies'` | Header text for the cookie notice             |

## Events

| Event    | Parameters | Description                        |
| -------- | ---------- | ---------------------------------- |
| `accept` | `boolean`  | Emitted when user accepts cookies  |
| `cancel` | `boolean`  | Emitted when user rejects cookies  |

## Slots

| Slot      | Description                                    |
| --------- | ---------------------------------------------- |
| `header`  | Custom header content (overrides header prop) |
| `default` | Custom message content                         |
| `actions` | Custom action buttons                          |

## Accessibility

- Uses `role="complementary"` for proper semantic meaning
- Includes `aria-labelledby` and `aria-describedby` for screen reader support
- Header and content are properly associated with ARIA attributes
- Keyboard navigation is fully supported (Tab, Enter, Space)
- Default buttons have clear, descriptive text

## Design Guidelines

- **Position**: Typically fixed at the bottom of the viewport to remain visible
- **Content**: Keep message clear and concise, explaining cookie usage
- **Actions**: Provide clear accept/reject options, consider "customize" for GDPR compliance
- **Links**: Include link to privacy policy or detailed cookie information
- **Dismissal**: Hide the notice after user interaction and store their preference
- **GDPR Compliance**: Ensure reject option is as prominent as accept option

## GDPR Considerations

- **Granular Consent**: Consider offering specific cookie category choices
- **Equal Prominence**: Accept and reject options should be equally visible
- **Clear Information**: Explain what cookies are used for and by whom
- **Easy Withdrawal**: Provide mechanism to change consent later
- **Privacy Policy**: Link to detailed privacy and cookie policies

## Themes

The cookie notice component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
</docs>