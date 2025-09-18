<script setup lang="ts">
import { ref } from 'vue'
import { FdsTextarea } from '@madsb/dkfds-vue3'

// Demo state
const basicValue = ref('')
const expandingValue = ref('This is some initial text that demonstrates the auto-expanding feature.\n\nThe textarea will grow as you add more content, up to the maximum rows limit.')
const limitedValue = ref('This textarea has a character limit.')

const handleInput = (event: Event) => {
  console.log('Textarea input:', event)
}

const handleDirty = (isDirty: boolean) => {
  console.log('Textarea dirty state:', isDirty)
}
</script>

<template>
  <Story title="Input/Textarea" icon="carbon:text-input">
    <!-- Showcase all textarea variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Default (5 rows)</h3>
            <FdsTextarea v-model="basicValue" placeholder="Enter your text here..." />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Custom rows (3 rows)</h3>
            <FdsTextarea v-model="basicValue" :rows="3" placeholder="Smaller textarea..." />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">With character limit (150)</h3>
            <FdsTextarea v-model="limitedValue" :maxlength="150" placeholder="Max 150 characters..." />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Width sized (Large)</h3>
            <FdsTextarea v-model="basicValue" width-class="input--width-l" placeholder="Large width textarea..." />
          </div>
        </div>
        <p class="mt-4 mb-0">
          The textarea component follows DKFDS v11 design specifications with auto-expanding rows. Try switching themes using
          the global theme switcher to see how textareas adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Auto-expanding behavior -->
    <Variant title="Auto-Expanding" icon="carbon:expand-vertical">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Dynamic Row Expansion</h3>
          <FdsTextarea 
            v-model="expandingValue" 
            :rows="3" 
            :max-rows="8" 
            :rowlength="50"
            placeholder="Start typing to see the textarea expand..." 
          />
          <p class="mt-4 mb-0">Current rows: {{ Math.max(3, Math.min(8, expandingValue.split('\n').length)) }} (min: 3, max: 8)</p>
        </div>

        <hr class="my-6" />

        <h3 class="h6 mb-2">Different Row Configurations</h3>
        <div>
          <div>
            <label>Compact (2-4 rows)</label>
            <FdsTextarea v-model="basicValue" :rows="2" :max-rows="4" placeholder="Compact sizing..." />
          </div>
          <div>
            <label>Standard (5-10 rows)</label>
            <FdsTextarea v-model="basicValue" :rows="5" :max-rows="10" placeholder="Standard sizing..." />
          </div>
          <div>
            <label>Large (8-15 rows)</label>
            <FdsTextarea v-model="basicValue" :rows="8" :max-rows="15" placeholder="Large sizing..." />
          </div>
        </div>
      </div>
    </Variant>

    <!-- States demonstration -->
    <Variant title="States" icon="carbon:status-change">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-lg-4 mb-5">
            <h3 class="h6 mb-2">Normal</h3>
            <FdsTextarea v-model="basicValue" placeholder="Normal state" @input="handleInput" @dirty="handleDirty" />
          </div>
          <div class="col-12 col-lg-4 mb-5">
            <h3 class="h6 mb-2">Disabled</h3>
            <FdsTextarea v-model="basicValue" disabled placeholder="Disabled state" />
          </div>
          <div class="col-12 col-lg-4 mb-5">
            <h3 class="h6 mb-2">Readonly</h3>
            <FdsTextarea 
              model-value="This textarea is readonly and cannot be edited by the user. The content is displayed but not interactive."
              readonly 
              :rows="4"
            />
          </div>
        </div>

        <hr class="my-6" />

        <h3 class="h6 mb-2">Width Classes</h3>
        <div>
          <div>
            <label>Extra Small</label>
            <FdsTextarea v-model="basicValue" width-class="input--width-xs" :rows="2" placeholder="XS width" />
          </div>
          <div>
            <label>Small</label>
            <FdsTextarea v-model="basicValue" width-class="input--width-s" :rows="2" placeholder="S width" />
          </div>
          <div>
            <label>Medium</label>
            <FdsTextarea v-model="basicValue" width-class="input--width-m" :rows="2" placeholder="M width" />
          </div>
          <div>
            <label>Large</label>
            <FdsTextarea v-model="basicValue" width-class="input--width-l" :rows="2" placeholder="L width" />
          </div>
          <div>
            <label>Extra Large</label>
            <FdsTextarea v-model="basicValue" width-class="input--width-xl" :rows="2" placeholder="XL width" />
          </div>
        </div>
      </div>
    </Variant>

    <!-- Form integration -->
    <Variant title="Form Integration" icon="carbon:form">
      <div class="container py-6">
        <div>
          <div>
            <h3 class="h6 mb-2">With Label and Hint</h3>
            <div class="form-group">
              <label for="description-textarea" class="form-label">Project Description</label>
              <div class="form-hint">Describe your project goals and requirements (maximum 500 characters)</div>
              <FdsTextarea 
                id="description-textarea"
                v-model="limitedValue" 
                :maxlength="500" 
                :rows="4" 
                :max-rows="8"
                placeholder="Enter project description..."
                aria-describedby="description-hint description-limit"
              />
              <div id="description-limit">{{ limitedValue.length }}/500 characters</div>
            </div>
          </div>

          <div>
            <h3 class="h6 mb-2">Validation States</h3>
            <div>
              <div>
                <label class="form-label">Valid Input</label>
                <FdsTextarea 
                  model-value="This is a valid textarea input with proper content."
                  :rows="3" 

                />
                <div>Content looks good!</div>
              </div>
              <div>
                <label class="form-label">Invalid Input</label>
                <FdsTextarea 
                  model-value=""
                  :rows="3" 
                  placeholder="This field is required"

                />
                <div>This field is required</div>
              </div>
            </div>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Textareas integrate seamlessly with DKFDS form patterns. Use proper labels, hints, and validation messages for optimal accessibility.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          value: 'Edit this text to test the textarea behavior...\n\nTry adding more lines to see auto-expansion in action.',
          rows: 5,
          maxRows: 10,
          rowlength: 80,
          maxlength: undefined,
          widthClass: '',
          placeholder: 'Enter text here...',
          disabled: false,
          readonly: false,
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <FdsTextarea
            v-model="state.value"
            :rows="state.rows"
            :max-rows="state.maxRows"
            :rowlength="state.rowlength"
            :maxlength="state.maxlength || undefined"
            :width-class="state.widthClass"
            :placeholder="state.placeholder"
            :disabled="state.disabled"
            :readonly="state.readonly"
            @input="handleInput"
            @dirty="handleDirty"
          />
          <div>
            <p class="mt-4 mb-0">Character count: {{ state.value.length }}{{ state.maxlength ? `/${state.maxlength}` : '' }}</p>
            <p class="mt-4 mb-0">Lines: {{ state.value.split('\n').length }}</p>
            <p class="mt-4 mb-0">Calculated rows: {{ Math.max(state.rows, Math.min(state.maxRows, Math.max(state.value.split('\n').length, Math.floor(state.value.length / state.rowlength) + 1))) }}</p>
          </div>
        </div>
      </template>

      <template #controls="{ state }">
        <HstTextarea v-model="state.value" title="Text Content" :rows="3" />

        <HstNumber v-model="state.rows" title="Rows (minimum)" :min="1" :max="20" />

        <HstNumber v-model="state.maxRows" title="Max Rows" :min="1" :max="30" />

        <HstNumber v-model="state.rowlength" title="Row Length (chars)" :min="20" :max="200" />

        <HstNumber v-model="state.maxlength" title="Max Length (0 = no limit)" :min="0" :max="2000" />

        <HstSelect
          v-model="state.widthClass"
          title="Width Class"
          :options="[
            { value: '', label: 'Default' },
            { value: 'input--width-xs', label: 'Extra Small' },
            { value: 'input--width-s', label: 'Small' },
            { value: 'input--width-m', label: 'Medium' },
            { value: 'input--width-l', label: 'Large' },
            { value: 'input--width-xl', label: 'Extra Large' },
          ]"
        />

        <HstText v-model="state.placeholder" title="Placeholder" />

        <HstCheckbox v-model="state.disabled" title="Disabled" />

        <HstCheckbox v-model="state.readonly" title="Readonly" />
      </template>
    </Variant>
  </Story>
</template>
