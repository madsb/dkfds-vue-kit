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
  <Story title="Input/Button" icon="carbon:button-centered">
    <!-- Showcase all button variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Primary</h3>
            <FdsButton variant="primary">Primary Button</FdsButton>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Secondary</h3>
            <FdsButton variant="secondary">Secondary Button</FdsButton>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Tertiary</h3>
            <FdsButton variant="tertiary">Tertiary Button</FdsButton>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Warning</h3>
            <FdsButton variant="warning">Warning Button</FdsButton>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The button component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how buttons adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Icon variations -->
    <Variant title="With Icons" icon="carbon:add-alt">
      <div class="container py-6">
        <div class="button-group">
          <FdsButton icon="save" variant="primary">Save Document</FdsButton>
          <FdsButton icon="download" variant="secondary">Download File</FdsButton>
          <FdsButton icon="arrow-forward" icon-right variant="primary">Continue</FdsButton>
          <FdsButton icon="arrow-back" variant="tertiary">Go Back</FdsButton>
        </div>

        <hr class="my-6" />

        <h3 class="h6 mb-2">Icon Only Buttons</h3>
        <div class="button-group">
          <FdsButton variant="primary" icon="save" icon-only aria-label="Save" />
          <FdsButton variant="secondary" icon="download" icon-only aria-label="Download" />
          <FdsButton variant="tertiary" icon="refresh" icon-only aria-label="Refresh" />
          <FdsButton variant="warning" icon="delete" icon-only aria-label="Delete" />
        </div>
        <p class="mt-4 mb-0">Icon-only buttons must include an aria-label for accessibility.</p>
      </div>
    </Variant>

    <!-- States demonstration -->
    <Variant title="States" icon="carbon:status-change">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-lg-6 mb-5">
            <h3 class="h6 mb-2">Normal</h3>
            <div class="d-flex flex-column">
              <FdsButton class="mb-3" variant="primary" @click="handleClick">Primary</FdsButton>
              <FdsButton class="mb-3" variant="secondary">Secondary</FdsButton>
              <FdsButton class="mb-3" variant="tertiary">Tertiary</FdsButton>
              <FdsButton variant="warning">Warning</FdsButton>
            </div>
          </div>
          <div class="col-12 col-lg-6 mb-5">
            <h3 class="h6 mb-2">Disabled</h3>
            <div class="d-flex flex-column">
              <FdsButton class="mb-3" variant="primary" disabled>Primary</FdsButton>
              <FdsButton class="mb-3" variant="secondary" disabled>Secondary</FdsButton>
              <FdsButton class="mb-3" variant="tertiary" disabled>Tertiary</FdsButton>
              <FdsButton variant="warning" disabled>Warning</FdsButton>
            </div>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Click count: {{ clickCount }} - Disabled buttons prevent interaction.
        </p>
      </div>
    </Variant>

    <!-- Responsive behavior -->
    <Variant title="Responsive" icon="carbon:devices">
      <div class="container py-6">
        <div class="d-flex flex-column align-items-start">
          <FdsButton class="mb-3" variant="primary" full-width-mobile>Submit Form</FdsButton>
          <FdsButton variant="secondary" full-width-mobile>Cancel</FdsButton>
        </div>
        <p class="mt-4 mb-0">
          Resize the viewport to mobile size (< 768px) to see buttons expand to full width.
        </p>

        <hr class="my-6" />

        <h3 class="h6 mb-2">Button Group Layout</h3>
        <div class="button-group">
          <FdsButton variant="tertiary">Draft</FdsButton>
          <FdsButton variant="secondary">Preview</FdsButton>
          <FdsButton variant="primary">Publish</FdsButton>
        </div>
        <p class="mt-4 mb-0">
          Button groups automatically adjust spacing and layout on mobile devices.
        </p>
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
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
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
          <p class="mt-4 mb-0">Click count: {{ clickCount }}</p>
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
