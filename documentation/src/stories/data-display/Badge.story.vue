<script setup lang="ts">
import { ref } from 'vue'
import { FdsBadge } from '@madsb/dkfds-vue3'

// Demo state
const notificationCount = ref(3)
const handleNotificationClick = () => {
  notificationCount.value = Math.max(0, notificationCount.value - 1)
}
</script>

<template>
  <Story title="Data Display/Badge" icon="carbon:status">
    <!-- Showcase all badge variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Default</h3>
            <FdsBadge>New</FdsBadge>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Success</h3>
            <FdsBadge variant="success">Approved</FdsBadge>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Info</h3>
            <FdsBadge variant="info">Under Review</FdsBadge>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Warning</h3>
            <FdsBadge variant="warning">Pending</FdsBadge>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Error</h3>
            <FdsBadge variant="error">Rejected</FdsBadge>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The badge component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how badges adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Status indicators in context -->
    <Variant title="Status Indicators" icon="carbon:status-change">
      <div class="container py-6">
        <div>
          <div>
            <h4>Application Status</h4>
            <p>Your application is <FdsBadge variant="success">Approved</FdsBadge></p>
          </div>
          <div>
            <h4>Document Review</h4>
            <p>Status: <FdsBadge variant="info">Under Review</FdsBadge></p>
          </div>
          <div>
            <h4>Payment Status</h4>
            <p>Payment is <FdsBadge variant="warning">Pending</FdsBadge></p>
          </div>
          <div>
            <h4>Verification Failed</h4>
            <p>Document <FdsBadge variant="error">Rejected</FdsBadge></p>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Badges provide visual feedback for process states and document status.
        </p>
      </div>
    </Variant>

    <!-- Semantic emphasis and content labels -->
    <Variant title="Content Labels" icon="carbon:label">
      <div class="container py-6">
        <div>
          <div>
            <h4>
              Important Service Update
              <FdsBadge tag="strong" variant="warning">Urgent</FdsBadge>
            </h4>
            <p>New regulations effective immediately.</p>
          </div>

          <div>
            <h4>
              Digital Tax Services
              <FdsBadge variant="info">New</FdsBadge>
            </h4>
            <p>Submit your tax return online.</p>
          </div>

          <div>
            <h4>
              Service Maintenance Complete
              <FdsBadge variant="success">Resolved</FdsBadge>
            </h4>
            <p>All services are now operational.</p>
          </div>

          <div>
            <button @click="handleNotificationClick">
              Notifications
              <FdsBadge variant="error">{{ notificationCount }}</FdsBadge>
            </button>
            <p>Click to dismiss notifications ({{ notificationCount }} remaining)</p>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Use the tag prop with "strong" for emphasized badges, and numeric badges for counts or quantities.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          text: 'Badge',
          variant: null,
          tag: 'span',
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <FdsBadge
            :variant="state.variant"
            :tag="state.tag"
          >
            {{ state.text }}
          </FdsBadge>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.text" title="Badge Text" />

        <HstSelect
          v-model="state.variant"
          title="Variant"
          :options="[
            { value: null, label: 'Default' },
            { value: 'success', label: 'Success' },
            { value: 'info', label: 'Info' },
            { value: 'warning', label: 'Warning' },
            { value: 'error', label: 'Error' },
          ]"
        />

        <HstSelect
          v-model="state.tag"
          title="HTML Tag"
          :options="[
            { value: 'span', label: 'Span (Regular)' },
            { value: 'strong', label: 'Strong (Emphasized)' },
          ]"
        />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
# FdsBadge

Small labels used to highlight new, important, or status-related content. Designed for supplementary information that needs visual emphasis without being the primary focus. The badge component follows DKFDS v11 design specifications and supports semantic variants for contextual meaning.

## Usage

```vue
<template>
  <div>
    <!-- Basic badge -->
    <FdsBadge>New</FdsBadge>

    <!-- Status badges -->
    <FdsBadge variant="success">Approved</FdsBadge>
    <FdsBadge variant="warning">Pending</FdsBadge>
    <FdsBadge variant="error">Rejected</FdsBadge>

    <!-- Emphasized badge -->
    <FdsBadge tag="strong" variant="warning">Important</FdsBadge>
  </div>
</template>

<script setup>
import { FdsBadge } from '@madsb/dkfds-vue3'
</script>
```

## Props

| Prop      | Type                                           | Default | Description                                                    |
| --------- | ---------------------------------------------- | ------- | -------------------------------------------------------------- |
| `tag`     | `'span' \| 'strong'`                          | `'span'` | HTML element type for semantic meaning                         |
| `variant` | `'success' \| 'info' \| 'warning' \| 'error' \| null` | `null`   | Visual variant indicating semantic status or importance level  |

## Events

This component does not emit any events.

## Accessibility

- Use the `tag` prop with `'strong'` for badges that convey important or emphasized information
- Ensure badge content is concise and meaningful for screen readers
- Avoid using badges as the sole means of conveying critical information
- Consider color contrast requirements - all variants meet WCAG AA standards
- Badge content should be descriptive (e.g., "Under Review" rather than just "Yellow")

## Design Guidelines

- **Use sparingly** - Too many badges can reduce their effectiveness
- **Be descriptive** - Use clear, meaningful text rather than vague labels
- **Choose appropriate variants**:
  - `success` for completed, approved, or positive states
  - `info` for neutral information or new content
  - `warning` for caution, pending, or attention-needed states
  - `error` for failures, rejections, or critical issues
  - Default (no variant) for general labels and counts
- **Semantic HTML** - Use `tag="strong"` for emphasized or important badges
- **Context matters** - Place badges near related content for clear association
- **Consistent usage** - Use the same variant for similar states throughout your application

## Common Use Cases

- **Status indicators**: Application status, document states, process stages
- **Content labels**: New articles, featured content, categories
- **Notification counts**: Unread messages, pending tasks, alerts
- **System states**: Online/offline status, connection states
- **Process feedback**: Success confirmations, error states, warnings

## Themes

The badge component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with neutral colors
- **VirkDK**: Business-oriented styling optimized for Virk.dk
- **BorgerDK**: Citizen-oriented styling optimized for Borger.dk
</docs>