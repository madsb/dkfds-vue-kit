<script setup lang="ts">
import { ref } from 'vue'
import { FdsButton } from '@madsb/dkfds-vue3'

// Story metadata
const clickCount = ref(0)
const handleClick = () => {
  clickCount.value++
}
</script>

<template>
  <Story 
    title="Input/Button" 
    :layout="{ type: 'grid', width: '100%' }"
    icon="carbon:button-centered"
  >
    <Variant title="Theme Comparison" icon="carbon:color-palette">
      <div class="story-content">
        <ThemeSwitcher class="mb-6" />
        <div class="button-row">
          <FdsButton variant="primary">Primary Button</FdsButton>
          <FdsButton variant="secondary">Secondary Button</FdsButton>
          <FdsButton variant="tertiary">Tertiary Button</FdsButton>
        </div>
        <p class="mt-4 theme-info">
          Switch between Default, Virk.dk, and Borger.dk themes to see the different styling
        </p>
      </div>
    </Variant>

    <Variant title="Default" icon="carbon:dot-mark">
      <div class="story-content">
        <FdsButton @click="handleClick">
          Default Button
        </FdsButton>
        <p class="mt-4">Click count: {{ clickCount }}</p>
      </div>
    </Variant>

    <Variant title="Variants" icon="carbon:color-palette">
      <div class="story-content space-y-4">
        <div>
          <FdsButton variant="primary">Primary Button</FdsButton>
        </div>
        <div>
          <FdsButton variant="secondary">Secondary Button</FdsButton>
        </div>
        <div>
          <FdsButton variant="tertiary">Tertiary Button</FdsButton>
        </div>
        <div>
          <FdsButton variant="warning">Warning Button</FdsButton>
        </div>
      </div>
    </Variant>

    <Variant title="With Icons" icon="carbon:add-alt">
      <div class="story-content space-y-4">
        <div>
          <FdsButton icon="save">
            Save Document
          </FdsButton>
        </div>
        <div>
          <FdsButton icon="download" variant="secondary">
            Download File
          </FdsButton>
        </div>
        <div>
          <FdsButton icon="arrow-forward" icon-right variant="primary">
            Continue
          </FdsButton>
        </div>
        <div>
          <FdsButton icon="arrow-back" variant="tertiary">
            Go Back
          </FdsButton>
        </div>
      </div>
    </Variant>

    <Variant title="Icon Only" icon="carbon:icon-scale">
      <div class="story-content space-x-4">
        <FdsButton 
          variant="primary" 
          icon="save" 
          icon-only 
          aria-label="Save"
        />
        <FdsButton 
          variant="secondary" 
          icon="download" 
          icon-only 
          aria-label="Download"
        />
        <FdsButton 
          variant="tertiary" 
          icon="refresh" 
          icon-only 
          aria-label="Refresh"
        />
        <FdsButton 
          variant="warning" 
          icon="delete" 
          icon-only 
          aria-label="Delete"
        />
      </div>
    </Variant>

    <Variant title="Disabled States" icon="carbon:stop-sign">
      <div class="story-content space-y-4">
        <div>
          <FdsButton variant="primary" disabled>
            Disabled Primary
          </FdsButton>
        </div>
        <div>
          <FdsButton variant="secondary" disabled>
            Disabled Secondary
          </FdsButton>
        </div>
        <div>
          <FdsButton variant="tertiary" disabled>
            Disabled Tertiary
          </FdsButton>
        </div>
        <div>
          <FdsButton variant="warning" disabled>
            Disabled Warning
          </FdsButton>
        </div>
      </div>
    </Variant>

    <Variant title="Full Width Mobile" icon="carbon:mobile">
      <div class="story-content">
        <p class="mb-4">Resize the viewport to mobile size to see the effect:</p>
        <FdsButton variant="primary" full-width-mobile>
          Submit Form
        </FdsButton>
      </div>
    </Variant>

    <Variant title="Button Groups" icon="carbon:group-objects">
      <div class="story-content space-y-6">
        <div class="button-row">
          <FdsButton variant="primary">Save</FdsButton>
          <FdsButton variant="secondary">Cancel</FdsButton>
        </div>
        
        <div class="button-row">
          <FdsButton variant="secondary" icon="arrow-back">Previous</FdsButton>
          <FdsButton variant="primary" icon="arrow-forward" icon-right>Next</FdsButton>
        </div>
        
        <div class="button-row">
          <FdsButton variant="tertiary">Draft</FdsButton>
          <FdsButton variant="secondary">Preview</FdsButton>
          <FdsButton variant="primary">Publish</FdsButton>
        </div>
      </div>
    </Variant>

    <Variant title="Playground" icon="carbon:game-console" :init-state="() => ({
      text: 'Click Me',
      variant: 'primary',
      icon: '',
      iconRight: false,
      iconOnly: false,
      fullWidthMobile: false,
      disabled: false,
    })">
      <template #default="{ state }">
        <div class="story-content">
          <FdsButton
            :variant="state.variant"
            :icon="state.icon"
            :icon-right="state.iconRight"
            :icon-only="state.iconOnly"
            :full-width-mobile="state.fullWidthMobile"
            :disabled="state.disabled"
            :aria-label="state.iconOnly ? state.text : undefined"
          >
            {{ !state.iconOnly ? state.text : '' }}
          </FdsButton>
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
        
        <HstCheckbox
          v-model="state.iconOnly"
          title="Icon Only"
          :disabled="!state.icon"
        />
        
        <HstCheckbox
          v-model="state.fullWidthMobile"
          title="Full Width on Mobile"
        />
        
        <HstCheckbox
          v-model="state.disabled"
          title="Disabled"
        />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
.story-content {
  padding: 2rem;
}

.space-y-4 > * + * {
  margin-top: 1rem;
}

.space-x-4 > * + * {
  margin-left: 1rem;
}

.space-y-6 > * + * {
  margin-top: 1.5rem;
}

.button-row {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.mt-4 {
  margin-top: 1rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.theme-info {
  font-size: 0.875rem;
  color: #666;
  font-style: italic;
}

/* Ensure proper button spacing in the story */
.story-content :deep(.button) {
  margin: 0;
}
</style>

<docs lang="md">
# FdsButton

The button component is used to trigger actions in forms, dialogs, and more. It follows the DKFDS v11 design specifications.

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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'warning'` | `'primary'` | Visual style of the button |
| `icon` | `string` | - | Icon name from DKFDS icon set |
| `iconRight` | `boolean` | `false` | Position icon on the right side |
| `iconOnly` | `boolean` | `false` | Style as icon-only button (requires aria-label) |
| `fullWidthMobile` | `boolean` | `false` | Make button full width on mobile devices |
| `disabled` | `boolean` | `false` | Disable the button |

## Events

| Event | Description |
|-------|-------------|
| `click` | Emitted when the button is clicked |

## Accessibility

- Always provide descriptive text for the button action
- For icon-only buttons, always include an `aria-label` attribute
- Ensure sufficient color contrast for all button variants
- Keyboard navigation is fully supported

## Design Guidelines

- **Primary buttons** should be used for the main action on a page
- **Secondary buttons** are for secondary actions
- **Tertiary buttons** are for less important actions
- **Warning buttons** should be used for destructive actions
- Only use one primary button per screen/section
- Group related actions together

## Related Components

- [FdsModal](/components/feedback/modal) - Often triggered by buttons
- [FdsFormgroup](/components/forms/formgroup) - Buttons are commonly used in forms
</docs>