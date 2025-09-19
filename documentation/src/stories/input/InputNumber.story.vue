<script setup lang="ts">
import { ref } from 'vue'
import { FdsInputNumber } from '@madsb/dkfds-vue3'

// Demo state
const age = ref(25)
const price = ref(199.99)
const quantity = ref(1)
const percentage = ref(50)
const temperature = ref(20)
const validationValue = ref(5)

const handleInput = (event: Event) => {
  console.log('Input event:', event)
}

const handleDirty = (isDirty: boolean) => {
  console.log('Field is dirty:', isDirty)
}
</script>

<template>
  <Story title="Input/InputNumber" icon="carbon:text-input">
    <!-- Showcase all input variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Basic Number</h3>
            <FdsInputNumber v-model="age" :min="0" :max="120" />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">With Suffix</h3>
            <FdsInputNumber v-model="age" :min="0" :max="120" suffix="år" />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">With Prefix</h3>
            <FdsInputNumber v-model="price" prefix="kr." :step="0.01" :min="0" />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">With Step</h3>
            <FdsInputNumber v-model="percentage" :min="0" :max="100" :step="5" suffix="%" />
          </div>
        </div>
        <p class="mt-4 mb-0">
          The number input component follows DKFDS v11 design specifications. Try switching themes
          using the global theme switcher to see how it adapts to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Width and sizing variations -->
    <Variant title="Width Sizing" icon="carbon:ruler">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-4 mb-5">
            <h3 class="h6 mb-2">Extra Small</h3>
            <FdsInputNumber v-model="quantity" width-class="input-width-xs" :min="1" suffix="stk" />
          </div>
          <div class="col-12 col-md-6 col-xl-4 mb-5">
            <h3 class="h6 mb-2">Small</h3>
            <FdsInputNumber
              v-model="age"
              width-class="input-width-s"
              :min="0"
              :max="120"
              suffix="år"
            />
          </div>
          <div class="col-12 col-md-6 col-xl-4 mb-5">
            <h3 class="h6 mb-2">Medium</h3>
            <FdsInputNumber v-model="price" width-class="input-width-m" prefix="kr." :step="0.01" />
          </div>
          <div class="col-12 col-md-6 col-xl-4 mb-5">
            <h3 class="h6 mb-2">Large</h3>
            <FdsInputNumber
              v-model="temperature"
              width-class="input-width-l"
              suffix="°C"
              :step="0.5"
            />
          </div>
          <div class="col-12 col-md-6 col-xl-4 mb-5">
            <h3 class="h6 mb-2">Extra Large</h3>
            <FdsInputNumber
              v-model="percentage"
              width-class="input-width-xl"
              :min="0"
              :max="100"
              suffix="%"
            />
          </div>
        </div>
        <p class="mt-4 mb-0">
          Use width classes to control input sizing: xs, s, m, l, xl. Choose appropriate width based
          on expected content length.
        </p>
      </div>
    </Variant>

    <!-- States and validation -->
    <Variant title="States & Validation" icon="carbon:status-change">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-lg-4 mb-5">
            <h3 class="h6 mb-2">Normal</h3>
            <FdsInputNumber v-model="age" :min="18" :max="65" suffix="år" placeholder="Enter age" />
            <div class="mt-4">
              <FdsInputNumber
                v-model="price"
                prefix="kr."
                :step="0.01"
                :min="0"
                placeholder="0.00"
              />
            </div>
          </div>
          <div class="col-12 col-lg-4 mb-5">
            <h3 class="h6 mb-2">Disabled</h3>
            <div>
              <FdsInputNumber v-model="age" :min="18" :max="65" suffix="år" disabled />
            </div>
            <div class="mt-4">
              <FdsInputNumber v-model="price" prefix="kr." :step="0.01" :min="0" disabled />
            </div>
          </div>
          <div class="col-12 col-lg-4 mb-5">
            <h3 class="h6 mb-2">With Constraints</h3>
            <FdsInputNumber
              v-model="validationValue"
              :min="1"
              :max="10"
              :step="1"
              suffix="items"
              @dirty="handleDirty"
              @input="handleInput"
            />
            <p class="mt-2 mb-0">Min: 1, Max: 10, Step: 1</p>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Number inputs support min/max validation, step increments, and disabled states. Use
          browser controls or arrow keys to increment/decrement values.
        </p>
      </div>
    </Variant>

    <!-- Keyboard and accessibility -->
    <Variant title="Accessibility" icon="carbon:accessibility">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-lg-6 mb-6">
            <h3 class="h6 mb-2">Keyboard Navigation</h3>
            <FdsInputNumber
              v-model="quantity"
              :min="1"
              :max="99"
              :step="1"
              suffix="items"
              aria-label="Quantity selection"
            />
            <div class="mt-3">
              <strong class="d-block mb-2">Keyboard controls:</strong>
              <ul class="mb-0">
                <li><kbd>↑</kbd> / <kbd>↓</kbd> arrow keys: Increment/decrement by step</li>
                <li><kbd>Tab</kbd>: Navigate to next field</li>
                <li><kbd>Enter</kbd>: Submit form (if in form context)</li>
                <li>Direct typing: Override current value</li>
              </ul>
            </div>
          </div>

          <div class="col-12 col-lg-6 mb-6">
            <h3 class="h6 mb-2">Focus Behavior</h3>
            <FdsInputNumber
              v-model="temperature"
              :min="-50"
              :max="50"
              :step="0.5"
              suffix="°C"
              placeholder="Temperature"
            />
            <p class="mt-3 mb-0">
              Clicking or tabbing into the field automatically selects all text for easy
              replacement.
            </p>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Number inputs provide full keyboard accessibility with arrow key support for
          increment/decrement operations. Focus selection makes value replacement convenient for
          users.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          value: 42,
          prefix: '',
          suffix: '',
          min: undefined,
          max: undefined,
          step: undefined,
          widthClass: '',
          disabled: false,
          placeholder: 'Enter number',
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <FdsInputNumber
            v-model="state.value"
            :prefix="state.prefix || undefined"
            :suffix="state.suffix || undefined"
            :min="state.min"
            :max="state.max"
            :step="state.step"
            :width-class="state.widthClass || undefined"
            :disabled="state.disabled"
            :placeholder="state.placeholder"
            @input="handleInput"
            @dirty="handleDirty"
          />
          <p class="mt-3 mb-0">Current value: {{ state.value }}</p>
        </div>
      </template>

      <template #controls="{ state }">
        <HstNumber v-model="state.value" title="Value" />

        <HstText v-model="state.prefix" title="Prefix" />

        <HstText v-model="state.suffix" title="Suffix" />

        <HstNumber v-model="state.min" title="Min Value" />

        <HstNumber v-model="state.max" title="Max Value" />

        <HstNumber v-model="state.step" title="Step" :step="0.01" />

        <HstSelect
          v-model="state.widthClass"
          title="Width Class"
          :options="[
            { value: '', label: 'Default' },
            { value: 'input-width-xs', label: 'Extra Small' },
            { value: 'input-width-s', label: 'Small' },
            { value: 'input-width-m', label: 'Medium' },
            { value: 'input-width-l', label: 'Large' },
            { value: 'input-width-xl', label: 'Extra Large' },
          ]"
        />

        <HstText v-model="state.placeholder" title="Placeholder" />

        <HstCheckbox v-model="state.disabled" title="Disabled" />
      </template>
    </Variant>
  </Story>
</template>
