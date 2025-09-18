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
  <Story title="Feedback/Tooltip" icon="carbon:information">
    <!-- Showcase all tooltip variants -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Click Trigger</h3>
            <FdsTooltip
              content="This tooltip is triggered by clicking. It's ideal for mobile devices and touch interfaces."
              trigger="click"
              position="above"
            />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Hover Trigger</h3>
            <FdsTooltip
              content="This tooltip appears on hover. It provides quick contextual information for desktop users."
              trigger="hover"
              position="above"
            />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Custom Icon</h3>
            <FdsTooltip
              content="This tooltip uses a custom info icon instead of the default help icon."
              trigger="click"
              icon="info"
              position="below"
            />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Below Position</h3>
            <FdsTooltip
              content="This tooltip appears below the trigger button when there's sufficient space."
              trigger="hover"
              position="below"
            />
          </div>
        </div>
        <p class="mt-4 mb-0">
          The tooltip component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how tooltips adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Trigger methods demonstration -->
    <Variant title="Trigger Methods" icon="carbon:touch-interaction">
      <div class="container py-6">
        <div>
          <div>
            <h3 class="h6 mb-2">Click Trigger (Recommended)</h3>
            <div>
              <FdsTooltip
                content="Click triggers are more accessible and work better on touch devices. They stay open until dismissed."
                trigger="click"
                position="above"
              />
              <span>Help with click trigger</span>
            </div>
            <p>
              Click triggers provide better accessibility and mobile experience. The tooltip remains visible until
              explicitly dismissed.
            </p>
          </div>

          <hr class="my-6" />

          <div>
            <h3 class="h6 mb-2">Hover Trigger</h3>
            <div>
              <FdsTooltip
                content="Hover triggers show on mouse hover and keyboard focus. They hide when focus is lost."
                trigger="hover"
                position="above"
              />
              <span>Help with hover trigger</span>
            </div>
            <p>
              Hover triggers respond to mouse hover and keyboard focus. They provide immediate feedback
              but may be less accessible on touch devices.
            </p>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Use click triggers for better accessibility and mobile support. Hover triggers work well for
          desktop-only applications.
        </p>
      </div>
    </Variant>

    <!-- Positioning demonstration -->
    <Variant title="Positioning" icon="carbon:direction-curve">
      <div class="container py-6">
        <div>
          <div>
            <h3 class="h6 mb-2">Above Position (Default)</h3>
            <div>
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

          <hr class="my-6" />

          <div>
            <h3 class="h6 mb-2">Below Position</h3>
            <div>
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
        <p class="mt-4 mb-0">
          The tooltip automatically adjusts position based on available screen space. The position prop
          serves as a preference rather than a strict requirement.
        </p>
      </div>
    </Variant>

    <!-- Accessibility features -->
    <Variant title="Accessibility" icon="carbon:accessibility">
      <div class="container py-6">
        <div>
          <div>
            <h3 class="h6 mb-2">Keyboard Navigation</h3>
            <div>
              <FdsTooltip
                content="Press Tab to focus this tooltip trigger, then Enter or Space to activate it."
                trigger="click"
                aria-label="Show keyboard help"
              />
              <span>Keyboard accessible tooltip</span>
            </div>
            <p>
              Tooltip triggers are fully keyboard accessible. Use Tab to navigate, Enter/Space to activate click triggers.
              Hover triggers activate on focus.
            </p>
          </div>

          <hr class="my-6" />

          <div>
            <h3 class="h6 mb-2">Custom ARIA Labels</h3>
            <div>
              <FdsTooltip
                content="This tooltip provides additional context about the form field requirements."
                trigger="click"
                aria-label="Show field requirements"
                icon="info"
              />
              <span>Field with custom ARIA label</span>
            </div>
            <p>
              Use custom aria-label props to provide meaningful descriptions for screen readers.
              The default label is "Vis hjælpetekst" (Show help text).
            </p>
          </div>

          <hr class="my-6" />

          <div>
            <h3 class="h6 mb-2">Disabled State</h3>
            <div>
              <FdsTooltip
                content="This tooltip is disabled and cannot be activated."
                trigger="click"
                :disabled="true"
              />
              <span>Disabled tooltip</span>
            </div>
            <p>
              Disabled tooltips provide visual feedback that help is not available in the current context.
            </p>
          </div>
        </div>
        <p class="mt-4 mb-0">
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
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
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
          <div>
            <p class="mt-4 mb-0">
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
