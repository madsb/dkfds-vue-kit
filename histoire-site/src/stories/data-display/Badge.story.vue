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
  <Story title="Data Display/Badge" :layout="{ type: 'grid', width: '100%' }" icon="carbon:status">
    <!-- Showcase all badge variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Default</h3>
            <FdsBadge>New</FdsBadge>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Success</h3>
            <FdsBadge variant="success">Approved</FdsBadge>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Info</h3>
            <FdsBadge variant="info">Under Review</FdsBadge>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Warning</h3>
            <FdsBadge variant="warning">Pending</FdsBadge>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Error</h3>
            <FdsBadge variant="error">Rejected</FdsBadge>
          </div>
        </div>
        <p class="story-hint">
          The badge component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how badges adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Status indicators in context -->
    <Variant title="Status Indicators" icon="carbon:status-change">
      <div class="story-content">
        <div class="status-examples">
          <div class="status-item">
            <h4 class="status-title">Application Status</h4>
            <p>Your application is <FdsBadge variant="success">Approved</FdsBadge></p>
          </div>
          <div class="status-item">
            <h4 class="status-title">Document Review</h4>
            <p>Status: <FdsBadge variant="info">Under Review</FdsBadge></p>
          </div>
          <div class="status-item">
            <h4 class="status-title">Payment Status</h4>
            <p>Payment is <FdsBadge variant="warning">Pending</FdsBadge></p>
          </div>
          <div class="status-item">
            <h4 class="status-title">Verification Failed</h4>
            <p>Document <FdsBadge variant="error">Rejected</FdsBadge></p>
          </div>
        </div>
        <p class="story-hint">
          Badges provide visual feedback for process states and document status.
        </p>
      </div>
    </Variant>

    <!-- Semantic emphasis and content labels -->
    <Variant title="Content Labels" icon="carbon:label">
      <div class="story-content">
        <div class="content-examples">
          <div class="article-card">
            <h4 class="article-title">
              Important Service Update
              <FdsBadge tag="strong" variant="warning">Urgent</FdsBadge>
            </h4>
            <p>New regulations effective immediately.</p>
          </div>
          
          <div class="article-card">
            <h4 class="article-title">
              Digital Tax Services
              <FdsBadge variant="info">New</FdsBadge>
            </h4>
            <p>Submit your tax return online.</p>
          </div>

          <div class="article-card">
            <h4 class="article-title">
              Service Maintenance Complete
              <FdsBadge variant="success">Resolved</FdsBadge>
            </h4>
            <p>All services are now operational.</p>
          </div>

          <div class="notification-example">
            <button @click="handleNotificationClick" class="notification-button">
              Notifications
              <FdsBadge variant="error">{{ notificationCount }}</FdsBadge>
            </button>
            <p class="notification-hint">Click to dismiss notifications ({{ notificationCount }} remaining)</p>
          </div>
        </div>
        <p class="story-hint">
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
        <div class="story-content playground">
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
  align-items: flex-start;
  gap: 1.2rem;
}

/* Status examples */
.status-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.status-item {
  padding: 1.6rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.4rem;
  background: #fafafa;
}

.status-title {
  font-size: 1.4rem; /* 14px */
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #333;
}

.status-item p {
  margin: 0;
  font-size: 1.4rem; /* 14px */
  color: #666;
}

/* Content examples */
.content-examples {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.article-card {
  padding: 1.6rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.4rem;
  background: #fff;
}

.article-title {
  font-size: 1.6rem; /* 16px */
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
}

.article-card p {
  margin: 0;
  font-size: 1.4rem; /* 14px */
  color: #666;
}

/* Notification example */
.notification-example {
  padding: 1.6rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.4rem;
  background: #f9f9f9;
}

.notification-button {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem 1.6rem;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: 1.4rem; /* 14px */
  font-weight: 500;
  color: #333;
  transition: background-color 0.2s;
}

.notification-button:hover {
  background: #f5f5f5;
}

.notification-hint {
  margin: 1.2rem 0 0 0;
  font-size: 1.4rem; /* 14px */
  color: #666;
  font-style: italic;
}

.playground {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem;
  }

  .variant-grid {
    grid-template-columns: 1fr;
  }

  .status-examples {
    grid-template-columns: 1fr;
  }

  .article-title {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

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