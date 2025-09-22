<script setup lang="ts">
import { ref } from 'vue'
import { FdsInput, FdsInputLimit } from '@madsb/dkfds-vue3'

// Demo state
const demoValues = ref({
  text: '',
  email: '',
  password: '',
  number: '',
  tel: '',
  search: '',
  limited: '',
  prefixed: '123',
  suffixed: '25',
})

const handleInput = (value: string, field: string) => {
  // @ts-ignore
  demoValues.value[field] = value
}
</script>

<template>
  <Story title="Input/Input" icon="carbon:text-input">
    <!-- Showcase all input types and features -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Text Input</h3>
            <FdsInput v-model="demoValues.text" placeholder="Enter text" />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Email Input</h3>
            <FdsInput v-model="demoValues.email" type="email" placeholder="Enter email" />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Password Input</h3>
            <FdsInput v-model="demoValues.password" type="password" placeholder="Enter password" />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Number Input</h3>
            <FdsInput v-model="demoValues.number" type="number" placeholder="Enter number" />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Tel Input</h3>
            <FdsInput v-model="demoValues.tel" type="tel" placeholder="Enter phone" />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Search Input</h3>
            <FdsInput v-model="demoValues.search" type="search" placeholder="Search..." />
          </div>
        </div>
        <p class="mt-4 mb-0">
          The input component follows DKFDS v11 design specifications and supports multiple input
          types. Try switching themes using the global theme switcher to see how inputs adapt to
          different contexts.
        </p>
      </div>
    </Variant>

    <!-- Input states and validation -->
    <Variant title="States" icon="carbon:status-change">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-lg-4 mb-5">
            <h3 class="h6 mb-2">Normal</h3>
            <FdsInput placeholder="Normal state" />
            <FdsInput value="With value" />
            <FdsInput placeholder="Focus me" />
          </div>
          <div class="col-12 col-lg-4 mb-5">
            <h3 class="h6 mb-2">Disabled</h3>
            <FdsInput placeholder="Disabled empty" disabled />
            <FdsInput value="Disabled with value" disabled />
            <FdsInput placeholder="Cannot interact" disabled />
          </div>
          <div class="col-12 col-lg-4 mb-5">
            <h3 class="h6 mb-2">Readonly</h3>
            <FdsInput value="Readonly value" readonly />
            <FdsInput value="Cannot edit" readonly />
            <FdsInput value="View only" readonly />
          </div>
        </div>
        <p class="mt-4 mb-0">
          Inputs support normal, disabled, and readonly states. Disabled inputs prevent all
          interaction, while readonly inputs allow focus but prevent editing.
        </p>
      </div>
    </Variant>

    <!-- Prefix, suffix, and character limits -->
    <Variant title="Enhanced Features" icon="carbon:add-alt">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h6 mb-2">With Prefix</h3>
            <FdsInput v-model="demoValues.prefixed" prefix="DKK" type="number" placeholder="0,00" />
            <FdsInput prefix="+" type="tel" placeholder="45 12 34 56 78" />
          </div>

          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h6 mb-2">With Suffix</h3>
            <FdsInput
              v-model="demoValues.suffixed"
              suffix="km"
              type="number"
              placeholder="Distance"
            />
            <FdsInput suffix="%" type="number" placeholder="Percentage" />
          </div>

          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h6 mb-2">Character Limit</h3>
            <FdsInput
              v-model="demoValues.limited"
              placeholder="Type to see character count"
              maxlength="50"
            />
            <FdsInputLimit v-model="demoValues.limited" :limit="50" />
          </div>

          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h6 mb-2">Width Classes</h3>
            <FdsInput placeholder="Extra Small" width-class="input-width-xs" />
            <FdsInput placeholder="Small" width-class="input-width-s" />
            <FdsInput placeholder="Medium" width-class="input-width-m" />
            <FdsInput placeholder="Large" width-class="input-width-l" />
          </div>
        </div>
        <p class="mt-4 mb-0">
          Inputs support prefixes and suffixes for currency, units, and context. Character limits
          with FdsInputLimit provide real-time feedback and validation.
        </p>
      </div>
    </Variant>

    <!-- Width and responsive behavior -->
    <Variant title="Sizing & Responsive" icon="carbon:devices">
      <div class="container py-6">
        <div class="d-flex flex-column">
          <h3 class="h6 mb-2">Width Classes</h3>
          <div class="row">
            <div class="col-12 col-md-6 col-xl-4 mb-4">
              <label class="h6 mb-2">Extra Small (XS)</label>
              <FdsInput placeholder="Width XS" width-class="input-width-xs" />
            </div>
            <div class="col-12 col-md-6 col-xl-4 mb-4">
              <label class="h6 mb-2">Small (S)</label>
              <FdsInput placeholder="Width S" width-class="input-width-s" />
            </div>
            <div class="col-12 col-md-6 col-xl-4 mb-4">
              <label class="h6 mb-2">Medium (M)</label>
              <FdsInput placeholder="Width M" width-class="input-width-m" />
            </div>
            <div class="col-12 col-md-6 col-xl-4 mb-4">
              <label class="h6 mb-2">Large (L)</label>
              <FdsInput placeholder="Width L" width-class="input-width-l" />
            </div>
            <div class="col-12 col-md-6 col-xl-4 mb-4">
              <label class="h6 mb-2">Default (Full Width)</label>
              <FdsInput placeholder="Full width input" />
            </div>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Use width classes to control input size. Inputs are responsive and adapt to container
          width. Resize the viewport to see how inputs adapt on mobile devices.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          value: '',
          type: 'text',
          placeholder: 'Enter text...',
          prefix: '',
          suffix: '',
          widthClass: '',
          disabled: false,
          readonly: false,
          maxlength: '',
          showLimit: false,
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <div class="w-100 d-flex flex-column align-items-center">
            <FdsInput
              v-model="state.value"
              :type="state.type"
              :placeholder="state.placeholder"
              :prefix="state.prefix || undefined"
              :suffix="state.suffix || undefined"
              :width-class="state.widthClass"
              :disabled="state.disabled"
              :readonly="state.readonly"
              :maxlength="state.maxlength || undefined"
            />
            <FdsInputLimit
              v-if="state.showLimit && state.maxlength"
              v-model="state.value"
              :limit="parseInt(state.maxlength)"
            />
          </div>
          <p class="mt-4 mb-0">
            Current value: "{{ state.value }}" ({{ state.value?.length || 0 }} characters)
          </p>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.value" title="Value" />

        <HstSelect
          v-model="state.type"
          title="Input Type"
          :options="[
            { value: 'text', label: 'Text' },
            { value: 'email', label: 'Email' },
            { value: 'password', label: 'Password' },
            { value: 'number', label: 'Number' },
            { value: 'tel', label: 'Telephone' },
            { value: 'search', label: 'Search' },
            { value: 'url', label: 'URL' },
          ]"
        />

        <HstText v-model="state.placeholder" title="Placeholder" />

        <HstText v-model="state.prefix" title="Prefix" />

        <HstText v-model="state.suffix" title="Suffix" />

        <HstSelect
          v-model="state.widthClass"
          title="Width Class"
          :options="[
            { value: '', label: 'Default (Full)' },
            { value: 'input-width-xs', label: 'Extra Small' },
            { value: 'input-width-s', label: 'Small' },
            { value: 'input-width-m', label: 'Medium' },
            { value: 'input-width-l', label: 'Large' },
          ]"
        />

        <HstText v-model="state.maxlength" title="Max Length (number)" />

        <HstCheckbox v-model="state.showLimit" title="Show Character Limit" />

        <HstCheckbox v-model="state.disabled" title="Disabled" />

        <HstCheckbox v-model="state.readonly" title="Readonly" />
      </template>
    </Variant>
  </Story>
</template>
