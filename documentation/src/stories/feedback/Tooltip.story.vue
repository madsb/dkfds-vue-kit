<script setup lang="ts">
import { ref } from 'vue'
import { FdsTooltip } from '@madsb/dkfds-vue3'

// Demo state
const showCount = ref(0)
const hideCount = ref(0)
const handleShow = () => {
  showCount.value++
}
const handleHide = () => {
  hideCount.value++
}
</script>

<template>
  <Story title="Feedback/Tooltip" :layout="{ type: 'grid', width: '100%' }" icon="carbon:information">
    <!-- Showcase all tooltip variants -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Click Trigger</h3>
            <FdsTooltip
              content="This tooltip is triggered by clicking. It's ideal for mobile devices and touch interfaces."
              trigger="click"
              position="above"
            />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Hover Trigger</h3>
            <FdsTooltip
              content="This tooltip appears on hover. It provides quick contextual information for desktop users."
              trigger="hover"
              position="above"
            />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Custom Icon</h3>
            <FdsTooltip
              content="This tooltip uses a custom info icon instead of the default help icon."
              trigger="click"
              icon="info"
              position="below"
            />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Below Position</h3>
            <FdsTooltip
              content="This tooltip appears below the trigger button when there's sufficient space."
              trigger="hover"
              position="below"
            />
          </div>
        </div>
        <p class="story-hint">
          The tooltip component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how tooltips adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Trigger methods demonstration -->
    <Variant title="Trigger Methods" icon="carbon:touch-interaction">
      <div class="story-content">
        <div class="trigger-demo">
          <div class="trigger-group">
            <h3 class="section-subtitle">Click Trigger (Recommended)</h3>
            <div class="tooltip-examples">
              <FdsTooltip
                content="Click triggers are more accessible and work better on touch devices. They stay open until dismissed."
                trigger="click"
                position="above"
              />
              <span class="demo-label">Help with click trigger</span>
            </div>
            <p class="demo-description">
              Click triggers provide better accessibility and mobile experience. The tooltip remains visible until
              explicitly dismissed.
            </p>
          </div>

          <div class="divider" />

          <div class="trigger-group">
            <h3 class="section-subtitle">Hover Trigger</h3>
            <div class="tooltip-examples">
              <FdsTooltip
                content="Hover triggers show on mouse hover and keyboard focus. They hide when focus is lost."
                trigger="hover"
                position="above"
              />
              <span class="demo-label">Help with hover trigger</span>
            </div>
            <p class="demo-description">
              Hover triggers respond to mouse hover and keyboard focus. They provide immediate feedback
              but may be less accessible on touch devices.
            </p>
          </div>
        </div>
        <p class="story-hint">
          Use click triggers for better accessibility and mobile support. Hover triggers work well for
          desktop-only applications.
        </p>
      </div>
    </Variant>

    <!-- Positioning demonstration -->
    <Variant title="Positioning" icon="carbon:direction-curve">
      <div class="story-content">
        <div class="positioning-demo">
          <div class="position-row">
            <h3 class="section-subtitle">Above Position (Default)</h3>
            <div class="position-examples">
              <FdsTooltip
                content="This tooltip appears above the trigger. This is the default position and works well in most layouts."
                trigger="click"
                position="above"
              />
              <FdsTooltip
                content="Multiple tooltips with above positioning maintain consistent visual hierarchy."
                trigger="hover"
                position="above"
                icon="info"
              />
            </div>
          </div>

          <div class="divider" />

          <div class="position-row">
            <h3 class="section-subtitle">Below Position</h3>
            <div class="position-examples">
              <FdsTooltip
                content="This tooltip appears below the trigger. Use when there's limited space above or for visual balance."
                trigger="click"
                position="below"
              />
              <FdsTooltip
                content="Below positioning works well for headers and navigation elements."
                trigger="hover"
                position="below"
                icon="info"
              />
            </div>
          </div>
        </div>
        <p class="story-hint">
          The tooltip automatically adjusts position based on available screen space. The position prop
          serves as a preference rather than a strict requirement.
        </p>
      </div>
    </Variant>

    <!-- Accessibility features -->
    <Variant title="Accessibility" icon="carbon:accessibility">
      <div class="story-content">
        <div class="accessibility-demo">
          <div class="accessibility-section">
            <h3 class="section-subtitle">Keyboard Navigation</h3>
            <div class="keyboard-examples">
              <FdsTooltip
                content="Press Tab to focus this tooltip trigger, then Enter or Space to activate it."
                trigger="click"
                aria-label="Show keyboard help"
              />
              <span class="demo-label">Keyboard accessible tooltip</span>
            </div>
            <p class="demo-description">
              Tooltip triggers are fully keyboard accessible. Use Tab to navigate, Enter/Space to activate click triggers.
              Hover triggers activate on focus.
            </p>
          </div>

          <div class="divider" />

          <div class="accessibility-section">
            <h3 class="section-subtitle">Custom ARIA Labels</h3>
            <div class="aria-examples">
              <FdsTooltip
                content="This tooltip provides additional context about the form field requirements."
                trigger="click"
                aria-label="Show field requirements"
                icon="info"
              />
              <span class="demo-label">Field with custom ARIA label</span>
            </div>
            <p class="demo-description">
              Use custom aria-label props to provide meaningful descriptions for screen readers.
              The default label is "Vis hjælpetekst" (Show help text).
            </p>
          </div>

          <div class="divider" />

          <div class="accessibility-section">
            <h3 class="section-subtitle">Disabled State</h3>
            <div class="disabled-examples">
              <FdsTooltip
                content="This tooltip is disabled and cannot be activated."
                trigger="click"
                :disabled="true"
              />
              <span class="demo-label">Disabled tooltip</span>
            </div>
            <p class="demo-description">
              Disabled tooltips provide visual feedback that help is not available in the current context.
            </p>
          </div>
        </div>
        <p class="story-hint">
          All tooltips support keyboard navigation and screen readers. Press Escape to close any open tooltip.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          content: 'This is a customizable tooltip that you can modify using the controls below.',
          trigger: 'click',
          position: 'above',
          icon: 'help',
          disabled: false,
          forceVisible: false,
          isLabel: false,
          ariaLabel: '',
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <FdsTooltip
            :content="state.content"
            :trigger="state.trigger"
            :position="state.position"
            :icon="state.icon"
            :disabled="state.disabled"
            :force-visible="state.forceVisible"
            :is-label="state.isLabel"
            :aria-label="state.ariaLabel || undefined"
            @show="handleShow"
            @hide="handleHide"
          />
          <div class="event-counter">
            <p class="story-hint">
              Show events: {{ showCount }} | Hide events: {{ hideCount }}
            </p>
          </div>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.content" title="Tooltip Content" />

        <HstSelect
          v-model="state.trigger"
          title="Trigger Method"
          :options="[
            { value: 'click', label: 'Click (Recommended)' },
            { value: 'hover', label: 'Hover' },
          ]"
        />

        <HstSelect
          v-model="state.position"
          title="Position"
          :options="[
            { value: 'above', label: 'Above (Default)' },
            { value: 'below', label: 'Below' },
          ]"
        />

        <HstSelect
          v-model="state.icon"
          title="Icon"
          :options="[
            { value: 'help', label: 'Help (Default)' },
            { value: 'info', label: 'Info' },
            { value: 'warning', label: 'Warning' },
            { value: 'question', label: 'Question' },
          ]"
        />

        <HstText v-model="state.ariaLabel" title="Custom ARIA Label" />

        <HstCheckbox v-model="state.disabled" title="Disabled" />

        <HstCheckbox v-model="state.forceVisible" title="Force Visible (Debug)" />

        <HstCheckbox
          v-model="state.isLabel"
          title="Use as Label (aria-labelledby)"
          :disabled="state.trigger !== 'hover'"
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

.demo-description {
  font-size: 1.4rem; /* 14px */
  color: #555;
  margin-top: 0.8rem;
  line-height: 1.5;
}

.demo-label {
  font-size: 1.4rem; /* 14px */
  color: #333;
  margin-left: 0.8rem;
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

.trigger-demo {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.trigger-group {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.tooltip-examples {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.positioning-demo {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.position-row {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.position-examples {
  display: flex;
  align-items: center;
  gap: 2.4rem;
}

.accessibility-demo {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.accessibility-section {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.keyboard-examples,
.aria-examples,
.disabled-examples {
  display: flex;
  align-items: center;
  gap: 0.8rem;
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
  gap: 2.4rem;
}

.event-counter {
  text-align: center;
}

/* Tooltip-specific styles */
.story-content :deep(.tooltip-wrapper) {
  margin: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem;
  }

  .variant-grid {
    grid-template-columns: 1fr;
  }

  .position-examples {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
  }

  .tooltip-examples,
  .keyboard-examples,
  .aria-examples,
  .disabled-examples {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
}
</style>

<docs lang="md">
# FdsTooltip

The tooltip component provides contextual help information through an accessible interface with click or hover triggers. It follows DKFDS v11 specifications and is designed primarily for help icons but can be adapted for other contextual information needs.

## Usage

```vue
<template>
  <FdsTooltip
    content="This field is required for processing your application"
    trigger="click"
    position="above"
  />
</template>

<script setup>
import { FdsTooltip } from '@madsb/dkfds-vue3'
</script>
```

## Props

| Prop          | Type                   | Default   | Description                                                      |
| ------------- | ---------------------- | --------- | ---------------------------------------------------------------- |
| `content`     | `string`               | -         | Tooltip text content to display (required)                      |
| `position`    | `'above' \| 'below'`    | `'above'` | Position of tooltip relative to the trigger button              |
| `trigger`     | `'hover' \| 'click'`    | `'click'` | Interaction method to trigger tooltip display                   |
| `icon`        | `string`               | `'help'`  | Icon name to display in the tooltip button                      |
| `disabled`    | `boolean`              | `false`   | Disable tooltip interaction completely                          |
| `forceVisible`| `boolean`              | `false`   | Force tooltip to remain visible regardless of trigger           |
| `isLabel`     | `boolean`              | `false`   | Use tooltip content as aria-label instead of aria-describedby   |
| `id`          | `string`               | -         | Custom ID for the tooltip element (auto-generated if not provided) |
| `ariaLabel`   | `string`               | -         | Custom aria-label text for the tooltip trigger button          |

## Events

| Event    | Description                                           |
| -------- | ----------------------------------------------------- |
| `show`   | Emitted when tooltip becomes visible                 |
| `hide`   | Emitted when tooltip is hidden/dismissed             |
| `toggle` | Emitted when visibility changes (provides boolean)   |

## Accessibility

- Tooltips are fully keyboard accessible with Tab navigation
- Click triggers can be activated with Enter or Space keys
- Hover triggers activate automatically on keyboard focus
- Screen readers receive appropriate ARIA attributes (aria-describedby or aria-labelledby)
- Escape key dismisses any open tooltip
- Icon-only buttons include appropriate ARIA labels
- Supports high contrast and reduced motion preferences

## Design Guidelines

- **Use click triggers** for better mobile and accessibility support
- **Keep content concise** - tooltips should provide brief, helpful context
- **Position thoughtfully** - above is default, but below works well for headers
- **Consider mobile users** - hover triggers don't work well on touch devices
- **Provide meaningful icons** - help icon is default, but info/warning may be more appropriate
- **Don't overuse** - too many tooltips can overwhelm users
- **Test with keyboard** - ensure all tooltips are accessible via keyboard navigation

## Themes

The tooltip component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with neutral colors
- **VirkDK**: Business-oriented styling for Virk.dk with professional appearance
- **BorgerDK**: Citizen-oriented styling for Borger.dk with accessible, friendly design
</docs>