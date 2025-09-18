<script setup lang="ts">
import { ref } from 'vue'
import { FdsAlert } from '@madsb/dkfds-vue3'

// Demo state for interactions
const dismissedAlerts = ref<Set<string>>(new Set())
const resetCount = ref(0)

const handleAlertClose = (alertId: string) => {
  dismissedAlerts.value.add(alertId)
}

const resetAlerts = () => {
  dismissedAlerts.value.clear()
  resetCount.value++
}

const isAlertVisible = (alertId: string) => {
  return !dismissedAlerts.value.has(alertId)
}
</script>

<template>
  <Story title="Feedback/Alert" :layout="{ type: 'grid', width: '100%' }" icon="carbon:warning">
    <!-- Showcase all alert variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Info</h3>
            <FdsAlert variant="info" show-icon>
              Information about the current process or status.
            </FdsAlert>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Success</h3>
            <FdsAlert variant="success" show-icon>
              Operation completed successfully.
            </FdsAlert>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Warning</h3>
            <FdsAlert variant="warning" show-icon>
              Please review this information carefully.
            </FdsAlert>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Error</h3>
            <FdsAlert variant="error" show-icon>
              An error occurred that requires your attention.
            </FdsAlert>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The alert component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how alerts adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Alert types with headers and different configurations -->
    <Variant title="Alert Types" icon="carbon:notification">
      <div class="container py-6">
        <div>
          <FdsAlert variant="info" header="Information" show-icon>
            Your application has been received and is being processed. You will receive updates via email.
          </FdsAlert>
          
          <FdsAlert variant="success" header="Payment Confirmed" show-icon>
            Your payment of 1,250 DKK has been processed successfully. Receipt #12345 has been sent to your email.
          </FdsAlert>
          
          <FdsAlert variant="warning" header="Action Required" show-icon>
            Your session will expire in 5 minutes. Please save your work or extend your session.
          </FdsAlert>
          
          <FdsAlert variant="error" header="Validation Error" show-icon>
            Please correct the following errors before submitting:
            <br>• Email address is required
            <br>• Phone number format is invalid
          </FdsAlert>
        </div>
        <p class="mt-4 mb-0">
          Alerts with headers provide clear context and hierarchy. Error and warning alerts
          automatically use role="alert" for screen readers.
        </p>
      </div>
    </Variant>

    <!-- Closeable alerts demonstration -->
    <Variant title="Closeable Alerts" icon="carbon:close">
      <div class="container py-6">
        <div>
          <FdsAlert 
            v-if="isAlertVisible('closeable-info')" 
            variant="info" 
            header="Dismissible Information" 
            show-icon 
            closeable 
            @close="handleAlertClose('closeable-info')"
          >
            This alert can be dismissed by clicking the close button.
          </FdsAlert>
          
          <FdsAlert 
            v-if="isAlertVisible('closeable-success')" 
            variant="success" 
            show-icon 
            closeable 
            @close="handleAlertClose('closeable-success')"
          >
            File uploaded successfully. You can dismiss this notification.
          </FdsAlert>
          
          <FdsAlert 
            v-if="isAlertVisible('closeable-warning')" 
            variant="warning" 
            header="Temporary Notice" 
            show-icon 
            closeable 
            @close="handleAlertClose('closeable-warning')"
          >
            This feature will be temporarily unavailable for maintenance on Sunday.
          </FdsAlert>
        </div>
        
        <div class="button-group">
          <button 
            type="button" 
            class="button button-secondary" 
            @click="resetAlerts"
            :disabled="dismissedAlerts.size === 0"
          >
            Reset Alerts
          </button>
        </div>
        
        <p class="mt-4 mb-0">
          Closeable alerts allow users to dismiss notifications. Click "Reset Alerts" to restore dismissed alerts.
          The close button includes both icon and text for accessibility.
        </p>
      </div>
    </Variant>

    <!-- Content layouts and customization -->
    <Variant title="Content Layouts" icon="carbon:text-creation">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Without Icons</h3>
          <FdsAlert variant="info">
            Clean alert without icon for minimal design needs.
          </FdsAlert>
          
          <hr class="my-6" />
          
          <h3 class="h6 mb-2">Rich Content</h3>
          <FdsAlert variant="warning" header="Document Requirements" show-icon>
            <template #default>
              Please ensure your document meets these requirements:
              <br><br>
              <strong>Format:</strong> PDF, DOC, or DOCX
              <br><strong>Size:</strong> Maximum 10 MB
              <br><strong>Content:</strong> Must include official letterhead
              <br><br>
              <em>Documents not meeting these requirements will be rejected.</em>
            </template>
          </FdsAlert>
          
          <hr class="my-6" />
          
          <h3 class="h6 mb-2">Custom Header Slot</h3>
          <FdsAlert variant="success" show-icon>
            <template #header>
              <h2>
                <span>✓</span>
                Application Approved
              </h2>
            </template>
            Your application has been approved and processed. The next steps have been sent to your registered email address.
          </FdsAlert>
        </div>
        <p class="mt-4 mb-0">
          Alerts support rich content including HTML formatting, custom headers via slots,
          and can be used with or without icons depending on design needs.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          variant: 'info',
          header: 'Alert Header',
          content: 'This is the alert message content.',
          showIcon: true,
          closeable: false,
          hasHeader: true,
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <FdsAlert
            :key="`playground-${resetCount}`"
            :variant="state.variant"
            :header="state.hasHeader ? state.header : null"
            :show-icon="state.showIcon"
            :closeable="state.closeable"
          >
            {{ state.content }}
          </FdsAlert>
          <p class="mt-4 mb-0">
            Configure the alert properties using the controls to explore different combinations.
          </p>
        </div>
      </template>

      <template #controls="{ state }">
        <HstSelect
          v-model="state.variant"
          title="Variant"
          :options="[
            { value: 'info', label: 'Info' },
            { value: 'success', label: 'Success' },
            { value: 'warning', label: 'Warning' },
            { value: 'error', label: 'Error' },
          ]"
        />

        <HstCheckbox v-model="state.hasHeader" title="Show Header" />
        
        <HstText 
          v-model="state.header" 
          title="Header Text" 
          :disabled="!state.hasHeader"
        />

        <HstTextarea v-model="state.content" title="Alert Content" />

        <HstCheckbox v-model="state.showIcon" title="Show Icon" />

        <HstCheckbox v-model="state.closeable" title="Closeable" />
      </template>
    </Variant>
  </Story>
</template>


<docs lang="md">
# FdsAlert

The alert component displays important messages to users with different severity levels. It follows DKFDS v11 design specifications and provides proper accessibility features for screen readers.

## Usage

```vue
<template>
  <FdsAlert variant="success" show-icon>
    Your changes have been saved successfully.
  </FdsAlert>
</template>

<script setup>
import { FdsAlert } from '@madsb/dkfds-vue3'
</script>
```

## Props

| Prop       | Type                                              | Default | Description                                       |
| ---------- | ------------------------------------------------- | ------- | ------------------------------------------------- |
| `variant`  | `'info' \| 'success' \| 'warning' \| 'error'`      | `'info'` | Alert type determining visual style and meaning   |
| `header`   | `string \| null`                                  | `null`  | Optional header text displayed above content     |
| `showIcon` | `boolean`                                         | `false` | Whether to display an icon matching the variant  |
| `closeable`| `boolean`                                         | `false` | Whether the alert can be dismissed by user       |

## Events

| Event   | Description                                    |
| ------- | ---------------------------------------------- |
| `close` | Emitted when user closes a closeable alert    |

## Slots

| Slot     | Description                                    |
| -------- | ---------------------------------------------- |
| `default`| Main alert content                            |
| `header` | Custom header content (overrides header prop) |
| `button` | Custom close button content                   |

## Accessibility

- Error and warning alerts automatically use `role="alert"` for immediate screen reader announcement
- Icons include appropriate `aria-label` attributes in Danish
- Close buttons include both icon and text for clarity
- Supports keyboard navigation for all interactive elements
- High contrast colors ensure readability across themes

## Design Guidelines

- **Info alerts** for general information and status updates
- **Success alerts** for completed actions and confirmations
- **Warning alerts** for important notices requiring attention
- **Error alerts** for problems that need immediate user action
- Use headers to provide clear context for the alert content
- Keep alert messages concise and actionable
- Use closeable alerts for non-critical notifications
- Group related alerts together when multiple messages are needed

## Themes

The alert component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with neutral colors
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
</docs>