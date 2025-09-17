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
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Info</h3>
            <FdsAlert variant="info" show-icon>
              Information about the current process or status.
            </FdsAlert>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Success</h3>
            <FdsAlert variant="success" show-icon>
              Operation completed successfully.
            </FdsAlert>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Warning</h3>
            <FdsAlert variant="warning" show-icon>
              Please review this information carefully.
            </FdsAlert>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Error</h3>
            <FdsAlert variant="error" show-icon>
              An error occurred that requires your attention.
            </FdsAlert>
          </div>
        </div>
        <p class="story-hint">
          The alert component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how alerts adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Alert types with headers and different configurations -->
    <Variant title="Alert Types" icon="carbon:notification">
      <div class="story-content">
        <div class="alert-stack">
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
        <p class="story-hint">
          Alerts with headers provide clear context and hierarchy. Error and warning alerts
          automatically use role="alert" for screen readers.
        </p>
      </div>
    </Variant>

    <!-- Closeable alerts demonstration -->
    <Variant title="Closeable Alerts" icon="carbon:close">
      <div class="story-content">
        <div class="alert-stack">
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
        
        <p class="story-hint">
          Closeable alerts allow users to dismiss notifications. Click "Reset Alerts" to restore dismissed alerts.
          The close button includes both icon and text for accessibility.
        </p>
      </div>
    </Variant>

    <!-- Content layouts and customization -->
    <Variant title="Content Layouts" icon="carbon:text-creation">
      <div class="story-content">
        <div class="alert-stack">
          <h3 class="section-subtitle">Without Icons</h3>
          <FdsAlert variant="info">
            Clean alert without icon for minimal design needs.
          </FdsAlert>
          
          <div class="divider" />
          
          <h3 class="section-subtitle">Rich Content</h3>
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
          
          <div class="divider" />
          
          <h3 class="section-subtitle">Custom Header Slot</h3>
          <FdsAlert variant="success" show-icon>
            <template #header>
              <h2 class="custom-header">
                <span class="header-icon">✓</span>
                Application Approved
              </h2>
            </template>
            Your application has been approved and processed. The next steps have been sent to your registered email address.
          </FdsAlert>
        </div>
        <p class="story-hint">
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
        <div class="story-content playground">
          <FdsAlert
            :key="`playground-${resetCount}`"
            :variant="state.variant"
            :header="state.hasHeader ? state.header : null"
            :show-icon="state.showIcon"
            :closeable="state.closeable"
          >
            {{ state.content }}
          </FdsAlert>
          <p class="story-hint">
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
  align-items: flex-start;
}

.alert-stack {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 2.4rem;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  align-items: center;
  margin-bottom: 1.6rem;
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

/* Custom header styling for demonstration */
.custom-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0;
  font-size: 1.6rem;
  font-weight: 600;
}

.header-icon {
  color: #2e7d32;
  font-weight: bold;
}

/* Basic button styling for reset button */
.button {
  padding: 0.8rem 1.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  color: #333;
  cursor: pointer;
  font-size: 1.4rem;
  transition: all 0.2s ease;
}

.button:hover:not(:disabled) {
  background: #f5f5f5;
  border-color: #999;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.button-secondary {
  background: #f8f9fa;
  border-color: #6c757d;
  color: #6c757d;
}

.button-secondary:hover:not(:disabled) {
  background: #e9ecef;
  border-color: #5a6268;
  color: #5a6268;
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