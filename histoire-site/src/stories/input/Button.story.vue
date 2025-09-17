<script setup lang="ts">
import { ref } from 'vue'
import { FdsButton } from '@madsb/dkfds-vue3'

// Demo state
const clickCount = ref(0)
const handleClick = () => {
  clickCount.value++
}
</script>

<template>
  <Story title="Input/Button" :layout="{ type: 'grid', width: '100%' }" icon="carbon:button-centered">
    <!-- Showcase all button variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Primary</h3>
            <FdsButton variant="primary">Primary Button</FdsButton>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Secondary</h3>
            <FdsButton variant="secondary">Secondary Button</FdsButton>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Tertiary</h3>
            <FdsButton variant="tertiary">Tertiary Button</FdsButton>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Warning</h3>
            <FdsButton variant="warning">Warning Button</FdsButton>
          </div>
        </div>
        <p class="story-hint">
          The button component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how buttons adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Icon variations -->
    <Variant title="With Icons" icon="carbon:add-alt">
      <div class="story-content">
        <div class="button-group">
          <FdsButton icon="save" variant="primary">Save Document</FdsButton>
          <FdsButton icon="download" variant="secondary">Download File</FdsButton>
          <FdsButton icon="arrow-forward" icon-right variant="primary">Continue</FdsButton>
          <FdsButton icon="arrow-back" variant="tertiary">Go Back</FdsButton>
        </div>

        <div class="divider" />

        <h3 class="section-subtitle">Icon Only Buttons</h3>
        <div class="button-group horizontal">
          <FdsButton variant="primary" icon="save" icon-only aria-label="Save" />
          <FdsButton variant="secondary" icon="download" icon-only aria-label="Download" />
          <FdsButton variant="tertiary" icon="refresh" icon-only aria-label="Refresh" />
          <FdsButton variant="warning" icon="delete" icon-only aria-label="Delete" />
        </div>
        <p class="story-hint">Icon-only buttons must include an aria-label for accessibility.</p>
      </div>
    </Variant>

    <!-- States demonstration -->
    <Variant title="States" icon="carbon:status-change">
      <div class="story-content">
        <div class="states-grid">
          <div class="state-column">
            <h3 class="section-subtitle">Normal</h3>
            <FdsButton variant="primary" @click="handleClick">Primary</FdsButton>
            <FdsButton variant="secondary">Secondary</FdsButton>
            <FdsButton variant="tertiary">Tertiary</FdsButton>
            <FdsButton variant="warning">Warning</FdsButton>
          </div>
          <div class="state-column">
            <h3 class="section-subtitle">Disabled</h3>
            <FdsButton variant="primary" disabled>Primary</FdsButton>
            <FdsButton variant="secondary" disabled>Secondary</FdsButton>
            <FdsButton variant="tertiary" disabled>Tertiary</FdsButton>
            <FdsButton variant="warning" disabled>Warning</FdsButton>
          </div>
        </div>
        <p class="story-hint">Click count: {{ clickCount }} - Disabled buttons prevent interaction.</p>
      </div>
    </Variant>

    <!-- Responsive behavior -->
    <Variant title="Responsive" icon="carbon:devices">
      <div class="story-content">
        <div class="responsive-demo">
          <FdsButton variant="primary" full-width-mobile>Submit Form</FdsButton>
          <FdsButton variant="secondary" full-width-mobile>Cancel</FdsButton>
        </div>
        <p class="story-hint">Resize the viewport to mobile size (< 768px) to see buttons expand to full width.</p>

        <div class="divider" />

        <h3 class="section-subtitle">Button Group Layout</h3>
        <div class="button-group">
          <FdsButton variant="tertiary">Draft</FdsButton>
          <FdsButton variant="secondary">Preview</FdsButton>
          <FdsButton variant="primary">Publish</FdsButton>
        </div>
        <p class="story-hint">Button groups automatically adjust spacing and layout on mobile devices.</p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          text: 'Click Me',
          variant: 'primary',
          icon: '',
          iconRight: false,
          iconOnly: false,
          fullWidthMobile: false,
          disabled: false,
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <FdsButton
            :variant="state.variant"
            :icon="state.icon"
            :icon-right="state.iconRight"
            :icon-only="state.iconOnly"
            :full-width-mobile="state.fullWidthMobile"
            :disabled="state.disabled"
            :aria-label="state.iconOnly ? state.text : undefined"
            @click="handleClick"
          >
            {{ !state.iconOnly ? state.text : '' }}
          </FdsButton>
          <p class="story-hint">Click count: {{ clickCount }}</p>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.text" title="Button Text" />

        <HstSelect
          v-model="state.variant"
          title="Variant"
          :options="[
            { value: 'primary', label: 'Primary' },
            { value: 'secondary', label: 'Secondary' },
            { value: 'tertiary', label: 'Tertiary' },
            { value: 'warning', label: 'Warning' },
          ]"
        />

        <HstText v-model="state.icon" title="Icon Name" />

        <HstCheckbox
          v-model="state.iconRight"
          title="Icon on Right"
          :disabled="!state.icon || state.iconOnly"
        />

        <HstCheckbox v-model="state.iconOnly" title="Icon Only" :disabled="!state.icon" />

        <HstCheckbox v-model="state.fullWidthMobile" title="Full Width on Mobile" />

        <HstCheckbox v-model="state.disabled" title="Disabled" />
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
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  align-items: center;
}

.button-group.horizontal {
  gap: 0.8rem;
}

.states-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 3.2rem;
  margin-bottom: 2.4rem;
}

.state-column {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.responsive-demo {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
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

/* Ensure proper button spacing */
.story-content :deep(.button) {
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

  .states-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<docs lang="md">
# FdsButton

The button component is used to trigger actions in forms, dialogs, and more. It follows the DKFDS v11 design specifications and adapts to different theme contexts (Default, VirkDK, BorgerDK).

## Usage

```vue
<template>
  <FdsButton variant="primary" @click="handleClick">
    Click me
  </FdsButton>
</template>

<script setup>
import { FdsButton } from '@madsb/dkfds-vue3'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

## Props

| Prop              | Type                                                  | Default     | Description                                     |
| ----------------- | ----------------------------------------------------- | ----------- | ----------------------------------------------- |
| `variant`         | `'primary' \| 'secondary' \| 'tertiary' \| 'warning'` | `'primary'` | Visual style of the button                      |
| `icon`            | `string`                                              | -           | Icon name from DKFDS icon set                   |
| `iconRight`       | `boolean`                                             | `false`     | Position icon on the right side                 |
| `iconOnly`        | `boolean`                                             | `false`     | Style as icon-only button (requires aria-label) |
| `fullWidthMobile` | `boolean`                                             | `false`     | Make button full width on mobile devices        |
| `disabled`        | `boolean`                                             | `false`     | Disable the button                              |

## Events

| Event   | Description                        |
| ------- | ---------------------------------- |
| `click` | Emitted when the button is clicked |

## Accessibility

- Always provide descriptive text for the button action
- For icon-only buttons, always include an `aria-label` attribute
- Ensure sufficient color contrast for all button variants
- Keyboard navigation is fully supported (Tab, Enter, Space)

## Design Guidelines

- **Primary buttons** should be used for main actions (only one per screen)
- **Secondary buttons** are for secondary actions
- **Tertiary buttons** are for less prominent actions
- **Warning buttons** should be used for destructive actions
- Group related actions together
- Consider mobile responsiveness with `fullWidthMobile` prop

## Themes

The button component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
</docs>