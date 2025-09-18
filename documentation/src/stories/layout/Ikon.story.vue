<script setup lang="ts">
import { ref } from 'vue'
import { FdsIkon } from '@madsb/dkfds-vue3'

// Demo state for interactive examples
const demoIcon = ref('home')
const demoSize = ref(false)
const demoDecorative = ref(true)
const demoLabel = ref('')

// Common icons used throughout DKFDS components
const commonIcons = [
  'home', 'account', 'arrow-back', 'arrow-forward', 'check', 'close', 'warning',
  'info', 'error', 'chevron-right', 'chevron-left', 'chevron-up', 'chevron-down',
  'download', 'save', 'delete', 'edit', 'search', 'menu', 'refresh',
  'first-page', 'last-page', 'star', 'bookmark', 'add', 'remove',
  'visibility', 'visibility-off', 'settings', 'help', 'calendar-month'
]

// Categorized icons for better organization
const iconCategories = {
  navigation: ['home', 'arrow-back', 'arrow-forward', 'chevron-right', 'chevron-left', 'chevron-up', 'chevron-down', 'menu'],
  actions: ['check', 'close', 'save', 'delete', 'edit', 'add', 'remove', 'refresh'],
  feedback: ['warning', 'info', 'error', 'help'],
  content: ['search', 'star', 'bookmark', 'calendar-month', 'download'],
  user: ['account', 'visibility', 'visibility-off', 'settings']
}
</script>

<template>
  <Story title="Layout/Ikon" :layout="{ type: 'grid', width: '100%' }" icon="carbon:image">
    <!-- Showcase all common DKFDS icons -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="icon-showcase">
          <h3 class="section-title">Common DKFDS Icons</h3>
          <div class="icon-grid">
            <div v-for="icon in commonIcons" :key="icon" class="icon-demo">
              <FdsIkon :icon="icon" :decorative="true" />
              <span class="icon-name">{{ icon }}</span>
            </div>
          </div>
        </div>
        <p class="story-hint">
          The icon component follows DKFDS v11 design specifications with Material Design icons. Try switching themes using
          the global theme switcher to see how icons adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Accessibility demonstration -->
    <Variant title="Accessibility" icon="carbon:accessibility">
      <div class="story-content">
        <div class="accessibility-examples">
          <h3 class="section-subtitle">Decorative Icons (Hidden from Screen Readers)</h3>
          <div class="example-group">
            <p>
              <FdsIkon icon="check" :decorative="true" :inline="true" />
              Task completed successfully
            </p>
            <p>
              <FdsIkon icon="warning" :decorative="true" :inline="true" />
              Please review the information below
            </p>
          </div>

          <div class="divider" />

          <h3 class="section-subtitle">Meaningful Icons (Screen Reader Accessible)</h3>
          <div class="example-group">
            <p>
              <FdsIkon 
                icon="error" 
                :decorative="false" 
                aria-label="Error: Invalid input detected"
                :inline="true" 
              />
              Form validation failed
            </p>
            <p>
              <FdsIkon 
                icon="help" 
                :decorative="false" 
                aria-label="Help: Click for additional information"
                :inline="true" 
              />
              Need assistance?
            </p>
          </div>
        </div>
        <p class="story-hint">
          Decorative icons use aria-hidden="true" and are hidden from screen readers. 
          Meaningful icons require aria-label and role="img" for accessibility.
        </p>
      </div>
    </Variant>

    <!-- Size and inline behavior -->
    <Variant title="Size & Inline Usage" icon="carbon:text-scale">
      <div class="story-content">
        <div class="size-examples">
          <h3 class="section-subtitle">Block Icons (Default)</h3>
          <div class="block-icons">
            <FdsIkon icon="home" :decorative="true" />
            <FdsIkon icon="account" :decorative="true" />
            <FdsIkon icon="settings" :decorative="true" />
          </div>

          <div class="divider" />

          <h3 class="section-subtitle">Inline Icons (Text Height)</h3>
          <div class="inline-examples">
            <p class="text-small">
              <FdsIkon icon="check" :decorative="true" :inline="true" />
              Small text with inline icon
            </p>
            <p class="text-normal">
              <FdsIkon icon="star" :decorative="true" :inline="true" />
              Normal text with inline icon
            </p>
            <p class="text-large">
              <FdsIkon icon="bookmark" :decorative="true" :inline="true" />
              Large text with inline icon
            </p>
          </div>
        </div>
        <p class="story-hint">
          Inline icons automatically scale with the surrounding text size. 
          Block icons maintain consistent size regardless of text context.
        </p>
      </div>
    </Variant>

    <!-- Categorized icons -->
    <Variant title="Icon Categories" icon="carbon:category">
      <div class="story-content">
        <div class="categories">
          <div v-for="(icons, category) in iconCategories" :key="category" class="category-section">
            <h3 class="section-subtitle">{{ category.charAt(0).toUpperCase() + category.slice(1) }}</h3>
            <div class="category-grid">
              <div v-for="icon in icons" :key="icon" class="icon-demo small">
                <FdsIkon :icon="icon" :decorative="true" />
                <span class="icon-name">{{ icon }}</span>
              </div>
            </div>
          </div>
        </div>
        <p class="story-hint">
          Icons are organized by usage category. All icons use Material Design symbols from the DKFDS icon set.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="() => ({
        icon: 'home',
        inline: false,
        decorative: true,
        ariaLabel: 'Example icon description'
      })"
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <div class="preview-area">
            <div class="icon-preview">
              <FdsIkon
                :icon="state.icon"
                :inline="state.inline"
                :decorative="state.decorative"
                :aria-label="!state.decorative ? state.ariaLabel : undefined"
              />
            </div>
            <div class="usage-context">
              <p class="context-text">
                <FdsIkon
                  :icon="state.icon"
                  :inline="true"
                  :decorative="state.decorative"
                  :aria-label="!state.decorative ? state.ariaLabel : undefined"
                />
                Example text showing inline usage
              </p>
            </div>
          </div>
        </div>
      </template>

      <template #controls="{ state }">
        <HstSelect
          v-model="state.icon"
          title="Icon Name"
          :options="commonIcons.map(icon => ({ value: icon, label: icon }))"
        />

        <HstCheckbox
          v-model="state.inline"
          title="Inline (scale with text)"
        />

        <HstCheckbox
          v-model="state.decorative"
          title="Decorative (aria-hidden)"
        />

        <HstText
          v-model="state.ariaLabel"
          title="ARIA Label"
          :disabled="state.decorative"
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

/* Icon showcase */
.icon-showcase {
  margin-bottom: 2.4rem;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.6rem;
  margin-bottom: 2.4rem;
}

.icon-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.2rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  text-align: center;
}

.icon-demo.small {
  padding: 0.8rem;
}

.icon-name {
  font-size: 1.2rem;
  color: #666;
  margin-top: 0.8rem;
  word-break: break-word;
}

/* Accessibility examples */
.accessibility-examples {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.example-group {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.example-group p {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0;
  padding: 1.2rem;
  background-color: #f8f9fa;
  border-radius: 4px;
}

/* Size examples */
.size-examples {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.block-icons {
  display: flex;
  gap: 1.6rem;
  align-items: center;
}

.inline-examples {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.text-small {
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0;
}

.text-normal {
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0;
}

.text-large {
  font-size: 2.0rem;
  display: flex;
  align-items: center;
  gap: 1.0rem;
  margin: 0;
}

/* Categories */
.categories {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.category-section {
  padding: 1.6rem;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1.2rem;
}

/* Playground */
.playground {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.preview-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  width: 100%;
  max-width: 600px;
}

.icon-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.4rem;
  border: 2px dashed #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.usage-context {
  width: 100%;
  padding: 1.6rem;
  background-color: #f8f9fa;
  border-radius: 6px;
}

.context-text {
  font-size: 1.6rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

/* Common elements */
.divider {
  margin: 2.4rem 0;
  border-top: 1px solid #e0e0e0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem;
  }

  .icon-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1.2rem;
  }

  .block-icons {
    justify-content: center;
  }

  .category-grid {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }

  .preview-area {
    gap: 1.6rem;
  }
}
</style>

<docs lang="md">
# FdsIkon

The icon component renders SVG icons from the DKFDS Material Design icon set with proper accessibility attributes. It supports both decorative and meaningful icons, inline sizing, and screen reader integration.

## Usage

```vue
<template>
  <!-- Decorative icon (hidden from screen readers) -->
  <FdsIkon icon="home" />
  
  <!-- Meaningful icon (accessible to screen readers) -->
  <FdsIkon 
    icon="warning" 
    :decorative="false" 
    aria-label="Warning: Please review your input" 
  />
  
  <!-- Inline icon that scales with text -->
  <p>
    <FdsIkon icon="check" :inline="true" />
    Task completed
  </p>
</template>

<script setup>
import { FdsIkon } from '@madsb/dkfds-vue3'
</script>
```

## Props

| Prop         | Type      | Default | Description                                                    |
| ------------ | --------- | ------- | -------------------------------------------------------------- |
| `icon`       | `string`  | `'home'`| Icon name from DKFDS Material Design icon set                 |
| `inline`     | `boolean` | `false` | Adjust icon to text height (inline display)                   |
| `ariaLabel`  | `string`  | -       | ARIA label for screen readers (required when decorative=false)|
| `decorative` | `boolean` | `true`  | Whether the icon is decorative (hidden from screen readers)   |

## Events

This component does not emit any events.

## Accessibility

- **Decorative icons** (default): Use `aria-hidden="true"` and are hidden from screen readers
- **Meaningful icons**: Set `decorative="false"` and provide `aria-label` for screen reader context
- **Role attribute**: Automatically set to `"img"` for meaningful icons with aria-label
- **Inline icons**: Scale with surrounding text for consistent visual alignment

### Examples:
```vue
<!-- Decorative: Icon adds visual interest but doesn't convey meaning -->
<FdsButton>
  <FdsIkon icon="save" :decorative="true" />
  Save Document
</FdsButton>

<!-- Meaningful: Icon conveys important information -->
<FdsIkon 
  icon="error" 
  :decorative="false" 
  aria-label="Error: Form validation failed" 
/>
```

## Design Guidelines

- **Use decorative icons** when the icon reinforces text content but doesn't add new meaning
- **Use meaningful icons** when the icon conveys important information not available in text
- **Inline icons** are perfect for text integration (checkmarks, status indicators)
- **Block icons** work well for buttons, cards, and standalone visual elements
- **Consistent sizing**: Icons maintain consistent visual weight across the interface

### When to Use:
- Status indicators and feedback messages
- Navigation and action buttons
- Visual reinforcement of content
- Text enhancement and emphasis

### When NOT to Use:
- As the sole means of conveying critical information
- Without proper accessibility attributes for meaningful icons
- In dense text where they create visual clutter

## Available Icons

The component uses the DKFDS Material Design icon set including:

**Navigation**: home, arrow-back, arrow-forward, chevron-* directions, menu
**Actions**: check, close, save, delete, edit, add, remove, refresh
**Feedback**: warning, info, error, help
**Content**: search, star, bookmark, calendar-month, download
**User**: account, visibility, settings

## Themes

The icon component automatically adapts to the selected theme:
- **Default**: Standard DKFDS icon styling
- **VirkDK**: Business-oriented icon presentation
- **BorgerDK**: Citizen-oriented icon styling

Icons maintain consistent visual weight and color inheritance across all themes.
</docs>