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
  <Story title="Input/ToggleSwitch" icon="carbon:toggle-on">
    <!-- Showcase all toggle switch variants -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Default</h3>
            <FdsToggleSwitch v-model="basicToggle" />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Custom Labels</h3>
            <FdsToggleSwitch v-model="customToggle" onText="Enabled" offText="Disabled" />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Disabled Off</h3>
            <FdsToggleSwitch :model-value="false" disabled />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Disabled On</h3>
            <FdsToggleSwitch :model-value="true" disabled />
          </div>
        </div>
        <p class="mt-4 mb-0">
          The toggle switch follows DKFDS v11 design specifications for binary controls. Try switching themes using
          the global theme switcher to see how the component adapts to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Custom content and labels -->
    <Variant title="Custom Content" icon="carbon:text-input">
      <div class="container py-6">
        <div>
          <div>
            <h3 class="h6 mb-2">With Slot Content</h3>
            <FdsToggleSwitch v-model="darkModeToggle">
              {{ darkModeToggle ? '🌙 Dark Mode On' : '☀️ Light Mode' }}
            </FdsToggleSwitch>
          </div>

          <div>
            <h3 class="h6 mb-2">Notification Settings</h3>
            <div>
              <div>
                <label>Email Notifications</label>
                <FdsToggleSwitch v-model="emailToggle" onText="On" offText="Off" />
              </div>
              <div>
                <label>SMS Notifications</label>
                <FdsToggleSwitch v-model="smsToggle" onText="On" offText="Off" />
              </div>
            </div>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Use slot content for dynamic labels or custom formatting. The toggle supports both prop-based and slot-based content.
        </p>
      </div>
    </Variant>

    <!-- States demonstration -->
    <Variant title="States" icon="carbon:status-change">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-lg-4 mb-5">
            <h3 class="h6 mb-2">Interactive</h3>
            <div>
              <div>
                <span>Off</span>
                <FdsToggleSwitch :model-value="false" @update:model-value="() => {}" />
              </div>
              <div>
                <span>On</span>
                <FdsToggleSwitch :model-value="true" @update:model-value="() => {}" />
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4 mb-5">
            <h3 class="h6 mb-2">Disabled</h3>
            <div>
              <div>
                <span>Off</span>
                <FdsToggleSwitch :model-value="false" disabled />
              </div>
              <div>
                <span>On</span>
                <FdsToggleSwitch :model-value="true" disabled />
              </div>
            </div>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Toggle switches support keyboard navigation (Tab to focus, Space/Enter to toggle). Disabled toggles prevent all interaction.
        </p>
      </div>
    </Variant>

    <!-- Accessibility features -->
    <Variant title="Accessibility" icon="carbon:accessibility">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">ARIA Attributes & Screen Reader Support</h3>
          <div>
            <div>
              <label for="toggle-1">Enable notifications</label>
              <FdsToggleSwitch id="toggle-1" v-model="notificationsToggle" />
              <small>Automatically includes role="switch" and aria-checked</small>
            </div>

            <div>
              <label for="toggle-2">Dark mode preference</label>
              <FdsToggleSwitch id="toggle-2" v-model="darkModeToggle" onText="Enabled" offText="Disabled" />
              <small>Custom text labels for better context</small>
            </div>
          </div>

          <div>
            <h4 class="h6 mb-2">Keyboard Navigation</h4>
            <ul>
              <li><kbd>Tab</kbd> - Move focus to the toggle switch</li>
              <li><kbd>Space</kbd> or <kbd>Enter</kbd> - Toggle the switch state</li>
              <li><kbd>Shift + Tab</kbd> - Move focus to previous element</li>
            </ul>
          </div>
        </div>
        <p class="mt-4 mb-0">
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
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
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
          <p>Current state: {{ state.modelValue ? 'On' : 'Off' }}</p>
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
