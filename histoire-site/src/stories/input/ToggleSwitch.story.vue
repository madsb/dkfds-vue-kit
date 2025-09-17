<script setup lang="ts">
import { ref } from 'vue'
import { FdsToggleSwitch } from '@madsb/dkfds-vue3'

// Demo state
const basicToggle = ref(false)
const customToggle = ref(true)
const disabledToggle = ref(false)
const notificationsToggle = ref(true)
const darkModeToggle = ref(false)
const emailToggle = ref(false)
const smsToggle = ref(true)

const handleToggle = (value: boolean) => {
  console.log('Toggle changed:', value)
}
</script>

<template>
  <Story title="Input/ToggleSwitch" :layout="{ type: 'grid', width: '100%' }" icon="carbon:toggle-on">
    <!-- Showcase all toggle switch variants -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Default</h3>
            <FdsToggleSwitch v-model="basicToggle" />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Custom Labels</h3>
            <FdsToggleSwitch v-model="customToggle" onText="Enabled" offText="Disabled" />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Disabled Off</h3>
            <FdsToggleSwitch :model-value="false" disabled />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Disabled On</h3>
            <FdsToggleSwitch :model-value="true" disabled />
          </div>
        </div>
        <p class="story-hint">
          The toggle switch follows DKFDS v11 design specifications for binary controls. Try switching themes using
          the global theme switcher to see how the component adapts to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Custom content and labels -->
    <Variant title="Custom Content" icon="carbon:text-input">
      <div class="story-content">
        <div class="toggle-examples">
          <div class="toggle-example">
            <h3 class="section-subtitle">With Slot Content</h3>
            <FdsToggleSwitch v-model="darkModeToggle">
              {{ darkModeToggle ? '🌙 Dark Mode On' : '☀️ Light Mode' }}
            </FdsToggleSwitch>
          </div>
          
          <div class="toggle-example">
            <h3 class="section-subtitle">Notification Settings</h3>
            <div class="settings-list">
              <div class="setting-item">
                <label class="setting-label">Email Notifications</label>
                <FdsToggleSwitch v-model="emailToggle" onText="On" offText="Off" />
              </div>
              <div class="setting-item">
                <label class="setting-label">SMS Notifications</label>
                <FdsToggleSwitch v-model="smsToggle" onText="On" offText="Off" />
              </div>
            </div>
          </div>
        </div>
        <p class="story-hint">
          Use slot content for dynamic labels or custom formatting. The toggle supports both prop-based and slot-based content.
        </p>
      </div>
    </Variant>

    <!-- States demonstration -->
    <Variant title="States" icon="carbon:status-change">
      <div class="story-content">
        <div class="states-grid">
          <div class="state-column">
            <h3 class="section-subtitle">Interactive</h3>
            <div class="state-group">
              <div class="state-item">
                <span class="state-label">Off</span>
                <FdsToggleSwitch :model-value="false" @update:model-value="() => {}" />
              </div>
              <div class="state-item">
                <span class="state-label">On</span>
                <FdsToggleSwitch :model-value="true" @update:model-value="() => {}" />
              </div>
            </div>
          </div>
          <div class="state-column">
            <h3 class="section-subtitle">Disabled</h3>
            <div class="state-group">
              <div class="state-item">
                <span class="state-label">Off</span>
                <FdsToggleSwitch :model-value="false" disabled />
              </div>
              <div class="state-item">
                <span class="state-label">On</span>
                <FdsToggleSwitch :model-value="true" disabled />
              </div>
            </div>
          </div>
        </div>
        <p class="story-hint">
          Toggle switches support keyboard navigation (Tab to focus, Space/Enter to toggle). Disabled toggles prevent all interaction.
        </p>
      </div>
    </Variant>

    <!-- Accessibility features -->
    <Variant title="Accessibility" icon="carbon:accessibility">
      <div class="story-content">
        <div class="accessibility-demo">
          <h3 class="section-subtitle">ARIA Attributes & Screen Reader Support</h3>
          <div class="a11y-examples">
            <div class="a11y-example">
              <label class="a11y-label" for="toggle-1">Enable notifications</label>
              <FdsToggleSwitch id="toggle-1" v-model="notificationsToggle" />
              <small class="a11y-description">Automatically includes role="switch" and aria-checked</small>
            </div>
            
            <div class="a11y-example">
              <label class="a11y-label" for="toggle-2">Dark mode preference</label>
              <FdsToggleSwitch id="toggle-2" v-model="darkModeToggle" onText="Enabled" offText="Disabled" />
              <small class="a11y-description">Custom text labels for better context</small>
            </div>
          </div>
          
          <div class="keyboard-info">
            <h4 class="section-subtitle">Keyboard Navigation</h4>
            <ul class="keyboard-list">
              <li><kbd>Tab</kbd> - Move focus to the toggle switch</li>
              <li><kbd>Space</kbd> or <kbd>Enter</kbd> - Toggle the switch state</li>
              <li><kbd>Shift + Tab</kbd> - Move focus to previous element</li>
            </ul>
          </div>
        </div>
        <p class="story-hint">
          Toggle switches automatically provide proper ARIA attributes and keyboard support. Always pair with descriptive labels for optimal accessibility.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          modelValue: false,
          disabled: false,
          onText: 'Til',
          offText: 'Fra',
          customContent: false,
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <FdsToggleSwitch
            :model-value="state.modelValue"
            :disabled="state.disabled"
            :on-text="state.onText"
            :off-text="state.offText"
            @update:model-value="(value) => { state.modelValue = value; handleToggle(value); }"
          >
            <template v-if="state.customContent">
              {{ state.modelValue ? '✅ Feature Active' : '❌ Feature Inactive' }}
            </template>
          </FdsToggleSwitch>
          <p class="playground-status">Current state: {{ state.modelValue ? 'On' : 'Off' }}</p>
        </div>
      </template>

      <template #controls="{ state }">
        <HstCheckbox v-model="state.modelValue" title="Current State (On/Off)" />
        
        <HstCheckbox v-model="state.disabled" title="Disabled" />
        
        <HstText v-model="state.onText" title="On Text" />
        
        <HstText v-model="state.offText" title="Off Text" />
        
        <HstCheckbox v-model="state.customContent" title="Use Custom Slot Content" />
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

.toggle-examples {
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
}

.toggle-example {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.settings-list {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  max-width: 400px;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

.setting-label {
  font-size: 1.4rem;
  font-weight: 500;
  color: #333;
}

.states-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3.2rem;
  margin-bottom: 2.4rem;
}

.state-column {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.state-group {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.state-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
}

.state-label {
  font-size: 1.4rem;
  color: #666;
  min-width: 60px;
}

.accessibility-demo {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.a11y-examples {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.a11y-example {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.6rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  max-width: 400px;
}

.a11y-label {
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  cursor: pointer;
}

.a11y-description {
  font-size: 1.2rem;
  color: #666;
  font-style: italic;
}

.keyboard-info {
  background: #f8f9fa;
  padding: 1.6rem;
  border-radius: 4px;
}

.keyboard-list {
  margin: 0;
  padding-left: 1.6rem;
  font-size: 1.4rem;
  line-height: 1.6;
}

.keyboard-list li {
  margin-bottom: 0.8rem;
}

kbd {
  background: #e9ecef;
  border: 1px solid #adb5bd;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), inset 0 0 0 2px #fff;
  color: #495057;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1;
  padding: 2px 4px;
  white-space: nowrap;
}

.playground {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  gap: 1.6rem;
}

.playground-status {
  font-size: 1.4rem;
  color: #666;
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

  .toggle-examples {
    gap: 2.4rem;
  }

  .setting-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
  }
}
</style>

<docs lang="md">
# FdsToggleSwitch

The toggle switch component provides a binary on/off control following DKFDS v11 specifications. It offers an intuitive alternative to checkboxes for settings and preferences, with proper accessibility support and customizable labels.

## Usage

```vue
<template>
  <FdsToggleSwitch v-model="isEnabled" />
</template>

<script setup>
import { ref } from 'vue'
import { FdsToggleSwitch } from '@madsb/dkfds-vue3'

const isEnabled = ref(false)
</script>
```

## Props

| Prop         | Type      | Default   | Description                                        |
| ------------ | --------- | --------- | -------------------------------------------------- |
| `id`         | `string`  | -         | Unique identifier (auto-generated if not provided) |
| `modelValue` | `boolean` | `false`   | Two-way binding value for toggle state            |
| `disabled`   | `boolean` | `false`   | Whether the toggle is disabled                     |
| `onText`     | `string`  | `'Til'`   | Text displayed when toggle is on (Danish default) |
| `offText`    | `string`  | `'Fra'`   | Text displayed when toggle is off (Danish default)|
| `class`      | `string`  | `''`      | Additional CSS classes                             |

## Events

| Event               | Description                                      |
| ------------------- | ------------------------------------------------ |
| `update:modelValue` | Emitted when toggle state changes (for v-model) |
| `click`             | Emitted on click with the original DOM event    |

## Accessibility

- Uses `role="switch"` for proper semantic meaning
- Automatically provides `aria-checked` attribute
- Supports keyboard navigation (Tab, Space, Enter)
- Can be associated with labels using `for` attribute
- Works with form groups for additional context
- Disabled state prevents interaction and keyboard focus

## Design Guidelines

- Use for binary on/off controls and settings
- Prefer over checkboxes for immediate state changes
- Always provide clear labels or context
- Group related toggles in settings panels
- Consider using custom slot content for dynamic labels
- Ensure sufficient spacing in lists of toggle switches

## Examples

### With Custom Labels
```vue
<FdsToggleSwitch 
  v-model="notifications" 
  onText="Enabled" 
  offText="Disabled" 
/>
```

### With Custom Content
```vue
<FdsToggleSwitch v-model="darkMode">
  {{ darkMode ? '🌙 Dark Mode' : '☀️ Light Mode' }}
</FdsToggleSwitch>
```

### In Form Group
```vue
<FdsFormgroup>
  <template #default="{ formid, ariaDescribedby }">
    <FdsLabel :for-id="formid">Email Notifications</FdsLabel>
    <FdsHint>Receive updates about your account</FdsHint>
    <FdsToggleSwitch 
      :id="formid" 
      v-model="emailNotifications" 
    />
  </template>
</FdsFormgroup>
```

## Themes

The toggle switch component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with blue accent
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
</docs>