<script setup lang="ts">
import { ref } from 'vue'
import { FdsToast, FdsToastContainer, useToast } from '@madsb/dkfds-vue3'

// Demo state
const showBasicToast = ref(false)
const showSuccessToast = ref(false)
const showWarningToast = ref(false)
const showErrorToast = ref(false)
const showInfoToast = ref(false)
const showAutoToast = ref(false)
const showStackedToasts = ref(false)
const stackedToastCount = ref(0)

// useToast for programmatic control
const { showInfo, showSuccess, showWarning, showError, clearAllToasts } = useToast()

// Event handlers
const handleShowBasic = () => {
  showBasicToast.value = true
}

const handleShowSuccess = () => {
  showSuccessToast.value = true
}

const handleShowWarning = () => {
  showWarningToast.value = true
}

const handleShowError = () => {
  showErrorToast.value = true
}

const handleShowInfo = () => {
  showInfoToast.value = true
}

const handleShowAuto = () => {
  showAutoToast.value = true
}

const handleShowStacked = () => {
  stackedToastCount.value++
  showStackedToasts.value = true
  setTimeout(() => {
    showStackedToasts.value = false
  }, 100)
}

const handleShowProgrammatic = () => {
  showSuccess('Operation completed successfully!', {
    heading: 'Success',
    autoDismiss: 3000,
  })
}

const handleShowMultiple = () => {
  showInfo('Processing your request...', { heading: 'Info' })
  setTimeout(() => {
    showSuccess('Request processed successfully!', { heading: 'Complete' })
  }, 1500)
}

const handleClearAll = () => {
  clearAllToasts()
  showBasicToast.value = false
  showSuccessToast.value = false
  showWarningToast.value = false
  showErrorToast.value = false
  showInfoToast.value = false
  showAutoToast.value = false
  showStackedToasts.value = false
}
</script>

<template>
  <Story title="Feedback/Toast" :layout="{ type: 'grid', width: '100%' }" icon="carbon:notification">
    <!-- Showcase all toast types in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Info</h3>
            <FdsToastContainer>
              <FdsToast
                type="info"
                heading="Information"
                message="This is an information message"
                :visible="true"
                :closable="false"
              />
            </FdsToastContainer>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Success</h3>
            <FdsToastContainer>
              <FdsToast
                type="success"
                heading="Success"
                message="Operation completed successfully"
                :visible="true"
                :closable="false"
              />
            </FdsToastContainer>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Warning</h3>
            <FdsToastContainer>
              <FdsToast
                type="warning"
                heading="Warning"
                message="Please review your input"
                :visible="true"
                :closable="false"
              />
            </FdsToastContainer>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Error</h3>
            <FdsToastContainer>
              <FdsToast
                type="error"
                heading="Error"
                message="Something went wrong"
                :visible="true"
                :closable="false"
              />
            </FdsToastContainer>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The toast component follows DKFDS v11 design specifications for contextual feedback.
          Try switching themes using the global theme switcher to see how toasts adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Interactive demo with closable toasts -->
    <Variant title="Interactive Toasts" icon="carbon:touch-interaction">
      <div class="container py-6">
        <div class="button-group">
          <button @click="handleShowInfo">Show Info Toast</button>
          <button @click="handleShowSuccess">Show Success Toast</button>
          <button @click="handleShowWarning">Show Warning Toast</button>
          <button @click="handleShowError">Show Error Toast</button>
          <button @click="handleClearAll">Clear All</button>
        </div>

        <FdsToastContainer>
          <FdsToast
            v-if="showInfoToast"
            type="info"
            heading="Information"
            message="This toast can be manually closed"
            :visible="showInfoToast"
            @close="showInfoToast = false"
          />
          <FdsToast
            v-if="showSuccessToast"
            type="success"
            heading="Success"
            message="Your changes have been saved successfully"
            :visible="showSuccessToast"
            @close="showSuccessToast = false"
          />
          <FdsToast
            v-if="showWarningToast"
            type="warning"
            heading="Warning"
            message="Please verify your information before proceeding"
            :visible="showWarningToast"
            @close="showWarningToast = false"
          />
          <FdsToast
            v-if="showErrorToast"
            type="error"
            heading="Error"
            message="Unable to connect to server. Please try again later"
            :visible="showErrorToast"
            @close="showErrorToast = false"
          />
        </FdsToastContainer>

        <p class="mt-4 mb-0">
          Click the buttons to show different toast types. Each toast can be manually closed using the close button.
        </p>
      </div>
    </Variant>

    <!-- Auto-dismiss and useToast composable demo -->
    <Variant title="Auto-dismiss & useToast" icon="carbon:timer">
      <div class="container py-6">
        <div class="button-group">
          <button @click="handleShowAuto">Auto-dismiss Toast (3s)</button>
          <button @click="handleShowProgrammatic">Programmatic Toast</button>
          <button @click="handleShowMultiple">Sequential Toasts</button>
          <button @click="handleClearAll">Clear All</button>
        </div>

        <FdsToastContainer>
          <FdsToast
            v-if="showAutoToast"
            type="success"
            heading="Auto-dismiss"
            message="This toast will close automatically after 3 seconds"
            :visible="showAutoToast"
            :auto-dismiss="3000"
            @close="showAutoToast = false"
          />
        </FdsToastContainer>

        <hr class="my-6" />

        <h3 class="h6 mb-2">useToast Composable Examples</h3>
        <div>
          <pre><code>const { showSuccess, showError } = useToast()

// Show programmatic toast
showSuccess('Operation completed!', {
  heading: 'Success',
  autoDismiss: 3000
})</code></pre>
        </div>

        <p class="mt-4 mb-0">
          The useToast composable provides programmatic control for creating toast notifications anywhere in your application.
          Auto-dismiss toasts automatically close after the specified timeout.
        </p>
      </div>
    </Variant>

    <!-- Stacking and positioning demo -->
    <Variant title="Stacking & Positioning" icon="carbon:layers">
      <div class="container py-6">
        <div class="button-group">
          <button @click="handleShowStacked">Add Stacked Toast</button>
          <button @click="handleClearAll">Clear All</button>
        </div>

        <p>Stacked toasts: {{ stackedToastCount }}</p>

        <FdsToastContainer>
          <FdsToast
            v-for="n in stackedToastCount"
            :key="n"
            type="info"
            :heading="`Toast ${n}`"
            :message="`This is stacked toast number ${n}`"
            :visible="true"
            @close="stackedToastCount--"
          />
        </FdsToastContainer>

        <hr class="my-6" />

        <h3 class="h6 mb-2">Positioning Guidelines</h3>
        <ul>
          <li>Toasts appear in a container with proper ARIA live regions</li>
          <li>Multiple toasts stack vertically within the container</li>
          <li>Container is positioned at the top of the main content area</li>
          <li>Each toast maintains its own interactive state</li>
        </ul>

        <p class="mt-4 mb-0">
          Multiple toasts stack vertically and maintain their individual state. The toast container manages
          the proper ARIA announcements for screen readers.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          type: 'info',
          heading: 'Toast Heading',
          message: 'This is a toast message that you can customize.',
          closable: true,
          autoDismiss: 0,
          visible: false,
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <div>
            <button @click="state.visible = true" :disabled="state.visible">
              Show Toast
            </button>
            <button @click="state.visible = false" :disabled="!state.visible">
              Hide Toast
            </button>
          </div>

          <FdsToastContainer>
            <FdsToast
              :type="state.type"
              :heading="state.heading"
              :message="state.message"
              :closable="state.closable"
              :auto-dismiss="state.autoDismiss"
              :visible="state.visible"
              @close="state.visible = false"
            />
          </FdsToastContainer>
        </div>
      </template>

      <template #controls="{ state }">
        <HstSelect
          v-model="state.type"
          title="Type"
          :options="[
            { value: 'info', label: 'Info' },
            { value: 'success', label: 'Success' },
            { value: 'warning', label: 'Warning' },
            { value: 'error', label: 'Error' },
          ]"
        />

        <HstText v-model="state.heading" title="Heading" />

        <HstTextarea v-model="state.message" title="Message" />

        <HstCheckbox v-model="state.closable" title="Closable" />

        <HstNumber
          v-model="state.autoDismiss"
          title="Auto-dismiss (ms)"
          :min="0"
          :max="10000"
          :step="500"
        />
      </template>
    </Variant>
  </Story>
</template>


<docs lang="md">
# FdsToast

The toast component provides contextual feedback messages to users with different severity levels (info, success, warning, error). It features automatic dismissal, manual close functionality, and proper ARIA support for screen readers, following DKFDS v11 specifications.

## Usage

```vue
<template>
  <FdsToastContainer>
    <FdsToast
      type="success"
      heading="Success!"
      message="Your data has been saved successfully."
      :visible="showToast"
      @close="showToast = false"
    />
  </FdsToastContainer>

  <!-- Or use the useToast composable -->
  <button @click="showSuccessToast">Show Toast</button>
</template>

<script setup>
import { ref } from 'vue'
import { FdsToast, FdsToastContainer, useToast } from '@madsb/dkfds-vue3'

const showToast = ref(false)
const { showSuccess } = useToast()

const showSuccessToast = () => {
  showSuccess('Operation completed successfully!', {
    heading: 'Success',
    autoDismiss: 3000
  })
}
</script>
```

## Props

### FdsToast

| Prop          | Type                                      | Default   | Description                                    |
| ------------- | ----------------------------------------- | --------- | ---------------------------------------------- |
| `type`        | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'`  | Semantic type affecting icon and styling       |
| `heading`     | `string`                                  | -         | Main heading text displayed prominently       |
| `message`     | `string`                                  | -         | Detailed message text                          |
| `closable`    | `boolean`                                 | `true`    | Whether users can manually dismiss the toast  |
| `id`          | `string`                                  | generated | Unique identifier for the toast element       |
| `autoDismiss` | `number`                                  | `0`       | Auto-dismiss timeout in milliseconds (0 = off) |
| `visible`     | `boolean`                                 | `false`   | Controls toast visibility state                |

### FdsToastContainer

| Prop | Type     | Default   | Description                               |
| ---- | -------- | --------- | ----------------------------------------- |
| `id` | `string` | generated | Unique identifier for the toast container |

## Events

### FdsToast

| Event            | Description                                          |
| ---------------- | ---------------------------------------------------- |
| `close`          | Emitted when toast is closed manually or programmatically |
| `click`          | Emitted when the toast content area is clicked      |
| `update:visible` | Emitted when toast visibility changes (v-model support) |

## useToast Composable

The `useToast` composable provides programmatic control for creating toast notifications:

```typescript
const {
  showToast,      // Show custom toast
  showInfo,       // Show info toast
  showSuccess,    // Show success toast
  showWarning,    // Show warning toast
  showError,      // Show error toast
  removeToast,    // Remove specific toast
  clearAllToasts, // Remove all toasts
  toasts          // Reactive list of active toasts
} = useToast()
```

### useToast Methods

| Method          | Parameters                        | Description                    |
| --------------- | --------------------------------- | ------------------------------ |
| `showToast`     | `(options: ToastOptions)`         | Show a custom toast            |
| `showInfo`      | `(message: string, options?)`     | Show info toast                |
| `showSuccess`   | `(message: string, options?)`     | Show success toast             |
| `showWarning`   | `(message: string, options?)`     | Show warning toast             |
| `showError`     | `(message: string, options?)`     | Show error toast               |
| `removeToast`   | `(id: string)`                    | Remove specific toast by ID    |
| `clearAllToasts`| `()`                              | Remove all active toasts       |

## Accessibility

- Toast container uses `aria-live="assertive"` for immediate screen reader announcements
- Each toast type includes appropriate semantic labels ("Information", "Success", "Warning", "Error")
- Close buttons include proper ARIA attributes for screen reader context
- Keyboard navigation fully supported (Tab, Enter, Space for close button)
- Automatic focus management when toasts appear and disappear

## Design Guidelines

- **Info toasts** for neutral information that doesn't require immediate action
- **Success toasts** for positive feedback after successful operations
- **Warning toasts** for important notices that need user attention
- **Error toasts** for problems that require user action to resolve
- Use auto-dismiss for non-critical messages (3-5 seconds recommended)
- Allow manual dismissal for important messages that users may need to reference
- Limit the number of simultaneous toasts to avoid overwhelming users
- Position toasts prominently but not blocking critical interface elements

## Themes

The toast component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with appropriate color coding
- **VirkDK**: Business-oriented styling for Virk.dk contexts
- **BorgerDK**: Citizen-oriented styling for Borger.dk contexts
</docs>