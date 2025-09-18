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
  <Story title="Layout/Cookiemeddelelse" icon="carbon:cookie">
    <!-- Showcase all cookie notice variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Default</h3>
            <FdsCookiemeddelelse />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Custom Header</h3>
            <FdsCookiemeddelelse header="Cookie Preferences" />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">English Content</h3>
            <FdsCookiemeddelelse header="Cookie Notice">
              <p>We use cookies to improve your experience and analyze site usage. All collected data is anonymized.</p>
              <a href="#">Read our privacy policy</a>
            </FdsCookiemeddelelse>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Custom Actions</h3>
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
        <p class="mt-4 mb-0">
          The cookie notice component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how the component adapts to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Interactive demonstration with events -->
    <Variant title="Interactive Demo" icon="carbon:touch-interaction">
      <div class="container py-6">
        <div v-if="isVisible">
          <FdsCookiemeddelelse
            @accept="handleAccept"
            @cancel="handleCancel"
          />
        </div>
        <div v-else>
          <p>Cookie notice dismissed. It will reappear in 2 seconds for demo purposes.</p>
        </div>

        <div>
          <p><strong>Statistics:</strong></p>
          <ul>
            <li>Accepted: {{ acceptedCount }} times</li>
            <li>Rejected: {{ rejectedCount }} times</li>
          </ul>
        </div>

        <p class="mt-4 mb-0">
          Click the accept or reject buttons to see the event handling in action. The cookie notice will
          reappear after 2 seconds for demonstration purposes.
        </p>
      </div>
    </Variant>

    <!-- Accessibility and GDPR compliance -->
    <Variant title="Accessibility & GDPR" icon="carbon:accessibility">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">ARIA Attributes</h3>
          <FdsCookiemeddelelse header="Accessible Cookie Notice" />

          <hr class="my-6" />

          <h3 class="h6 mb-2">GDPR Compliant Options</h3>
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
              <div>
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

        <p class="mt-4 mb-0">
          The component includes proper ARIA attributes for screen readers: role="complementary",
          aria-labelledby, and aria-describedby. Navigate with Tab and use Enter or Space to activate buttons.
        </p>
      </div>
    </Variant>

    <!-- Positioning and layout demonstration -->
    <Variant title="Positioning & Layout" icon="carbon:layout">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Fixed Bottom Position</h3>
          <p>Cookie notices are typically positioned at the bottom of the viewport:</p>

          <div>
            <div>
              <div>Website Header</div>
              <div>
                <p>Main website content...</p>
                <p>More content...</p>
              </div>
              <div>
                <FdsCookiemeddelelse />
              </div>
            </div>
          </div>

          <hr class="my-6" />

          <h3 class="h6 mb-2">Responsive Behavior</h3>
          <p>On mobile devices, the cookie notice adapts to smaller screens:</p>

          <div>
            <FdsCookiemeddelelse header="Mobile Cookie Notice" />
          </div>
        </div>

        <p class="mt-4 mb-0">
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
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
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

          <div>
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