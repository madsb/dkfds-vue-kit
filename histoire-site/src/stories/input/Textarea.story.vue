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
  <Story title="Input/Textarea" :layout="{ type: 'grid', width: '100%' }" icon="carbon:text-input">
    <!-- Showcase all textarea variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Default (5 rows)</h3>
            <FdsTextarea v-model="basicValue" placeholder="Enter your text here..." />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Custom rows (3 rows)</h3>
            <FdsTextarea v-model="basicValue" :rows="3" placeholder="Smaller textarea..." />
          </div>
          <div class="variant-section">
            <h3 class="section-title">With character limit (150)</h3>
            <FdsTextarea v-model="limitedValue" :maxlength="150" placeholder="Max 150 characters..." />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Width sized (Large)</h3>
            <FdsTextarea v-model="basicValue" width-class="input--width-l" placeholder="Large width textarea..." />
          </div>
        </div>
        <p class="story-hint">
          The textarea component follows DKFDS v11 design specifications with auto-expanding rows. Try switching themes using
          the global theme switcher to see how textareas adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Auto-expanding behavior -->
    <Variant title="Auto-Expanding" icon="carbon:expand-vertical">
      <div class="story-content">
        <div class="expanding-demo">
          <h3 class="section-subtitle">Dynamic Row Expansion</h3>
          <FdsTextarea 
            v-model="expandingValue" 
            :rows="3" 
            :max-rows="8" 
            :rowlength="50"
            placeholder="Start typing to see the textarea expand..." 
          />
          <p class="story-hint">Current rows: {{ Math.max(3, Math.min(8, expandingValue.split('\n').length)) }} (min: 3, max: 8)</p>
        </div>

        <div class="divider" />

        <h3 class="section-subtitle">Different Row Configurations</h3>
        <div class="row-configs">
          <div class="config-item">
            <label class="config-label">Compact (2-4 rows)</label>
            <FdsTextarea v-model="basicValue" :rows="2" :max-rows="4" placeholder="Compact sizing..." />
          </div>
          <div class="config-item">
            <label class="config-label">Standard (5-10 rows)</label>
            <FdsTextarea v-model="basicValue" :rows="5" :max-rows="10" placeholder="Standard sizing..." />
          </div>
          <div class="config-item">
            <label class="config-label">Large (8-15 rows)</label>
            <FdsTextarea v-model="basicValue" :rows="8" :max-rows="15" placeholder="Large sizing..." />
          </div>
        </div>
      </div>
    </Variant>

    <!-- States demonstration -->
    <Variant title="States" icon="carbon:status-change">
      <div class="story-content">
        <div class="states-grid">
          <div class="state-column">
            <h3 class="section-subtitle">Normal</h3>
            <FdsTextarea v-model="basicValue" placeholder="Normal state" @input="handleInput" @dirty="handleDirty" />
          </div>
          <div class="state-column">
            <h3 class="section-subtitle">Disabled</h3>
            <FdsTextarea v-model="basicValue" disabled placeholder="Disabled state" />
          </div>
          <div class="state-column">
            <h3 class="section-subtitle">Readonly</h3>
            <FdsTextarea 
              model-value="This textarea is readonly and cannot be edited by the user. The content is displayed but not interactive."
              readonly 
              :rows="4"
            />
          </div>
        </div>

        <div class="divider" />

        <h3 class="section-subtitle">Width Classes</h3>
        <div class="width-demo">
          <div class="width-item">
            <label class="config-label">Extra Small</label>
            <FdsTextarea v-model="basicValue" width-class="input--width-xs" :rows="2" placeholder="XS width" />
          </div>
          <div class="width-item">
            <label class="config-label">Small</label>
            <FdsTextarea v-model="basicValue" width-class="input--width-s" :rows="2" placeholder="S width" />
          </div>
          <div class="width-item">
            <label class="config-label">Medium</label>
            <FdsTextarea v-model="basicValue" width-class="input--width-m" :rows="2" placeholder="M width" />
          </div>
          <div class="width-item">
            <label class="config-label">Large</label>
            <FdsTextarea v-model="basicValue" width-class="input--width-l" :rows="2" placeholder="L width" />
          </div>
          <div class="width-item">
            <label class="config-label">Extra Large</label>
            <FdsTextarea v-model="basicValue" width-class="input--width-xl" :rows="2" placeholder="XL width" />
          </div>
        </div>
      </div>
    </Variant>

    <!-- Form integration -->
    <Variant title="Form Integration" icon="carbon:form">
      <div class="story-content">
        <div class="form-examples">
          <div class="form-example">
            <h3 class="section-subtitle">With Label and Hint</h3>
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
              <div id="description-limit" class="character-count">{{ limitedValue.length }}/500 characters</div>
            </div>
          </div>

          <div class="form-example">
            <h3 class="section-subtitle">Validation States</h3>
            <div class="validation-examples">
              <div class="validation-item">
                <label class="form-label">Valid Input</label>
                <FdsTextarea 
                  model-value="This is a valid textarea input with proper content."
                  :rows="3" 
                  class="form-input--valid"
                />
                <div class="validation-message validation-message--success">Content looks good!</div>
              </div>
              <div class="validation-item">
                <label class="form-label">Invalid Input</label>
                <FdsTextarea 
                  model-value=""
                  :rows="3" 
                  placeholder="This field is required"
                  class="form-input--error"
                />
                <div class="validation-message validation-message--error">This field is required</div>
              </div>
            </div>
          </div>
        </div>
        <p class="story-hint">
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
        <div class="story-content playground">
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
          <div class="playground-info">
            <p class="story-hint">Character count: {{ state.value.length }}{{ state.maxlength ? `/${state.maxlength}` : '' }}</p>
            <p class="story-hint">Lines: {{ state.value.split('\n').length }}</p>
            <p class="story-hint">Calculated rows: {{ Math.max(state.rows, Math.min(state.maxRows, Math.max(state.value.split('\n').length, Math.floor(state.value.length / state.rowlength) + 1))) }}</p>
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.variant-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.expanding-demo {
  max-width: 600px;
  margin-bottom: 2.4rem;
}

.row-configs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.4rem;
}

.config-item {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.config-label {
  font-size: 1.4rem;
  font-weight: 500;
  color: #333;
}

.states-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3.2rem;
  margin-bottom: 2.4rem;
}

.state-column {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.width-demo {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.width-item {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.form-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3.2rem;
}

.form-example {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.form-label {
  font-size: 1.6rem;
  font-weight: 600;
  color: #1a1a1a;
}

.form-hint {
  font-size: 1.4rem;
  color: #666;
  line-height: 1.4;
}

.character-count {
  font-size: 1.4rem;
  color: #666;
  text-align: right;
}

.validation-examples {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.validation-item {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.validation-message {
  font-size: 1.4rem;
  line-height: 1.4;
}

.validation-message--success {
  color: #28a745;
}

.validation-message--error {
  color: #dc3545;
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
  min-height: 300px;
  gap: 1.6rem;
}

.playground-info {
  text-align: center;
}

.playground-info .story-hint {
  margin-top: 0.4rem;
}

/* Form input state classes for demonstration */
:deep(.form-input--valid) {
  border-color: #28a745;
}

:deep(.form-input--error) {
  border-color: #dc3545;
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

  .form-examples {
    grid-template-columns: 1fr;
  }

  .row-configs {
    grid-template-columns: 1fr;
  }

  .width-demo {
    gap: 1.2rem;
  }
}
</style>

<docs lang="md">
# FdsTextarea

The textarea component provides a multi-line text input with automatic row sizing, character limits, and proper accessibility attributes. It follows DKFDS v11 design specifications and adapts to different theme contexts.

## Usage

```vue
<template>
  <FdsTextarea 
    v-model="description" 
    :rows="5" 
    :maxlength="500" 
    placeholder="Enter your description..."
    @dirty="validateInput"
  />
</template>

<script setup>
import { ref } from 'vue'
import { FdsTextarea } from '@madsb/dkfds-vue3'

const description = ref('')

const validateInput = (isDirty) => {
  console.log('User has interacted with textarea:', isDirty)
}
</script>
```

## Props

| Prop         | Type     | Default | Description                                              |
| ------------ | -------- | ------- | -------------------------------------------------------- |
| `modelValue` | `string` | -       | The v-model value for two-way data binding (required)   |
| `id`         | `string` | -       | Unique identifier (auto-generated if not provided)      |
| `rows`       | `number` | `5`     | Number of visible text rows (minimum height)            |
| `maxRows`    | `number` | `10`    | Maximum number of rows for auto-resize                  |
| `rowlength`  | `number` | `80`    | Characters per row for auto-resize calculation          |
| `maxlength`  | `number` | -       | Maximum character length allowed                         |
| `widthClass` | `string` | `''`    | CSS class for width sizing (input--width-xs to xl)      |

## Events

| Event               | Description                                                |
| ------------------- | ---------------------------------------------------------- |
| `update:modelValue` | Emitted when textarea value changes (v-model)             |
| `dirty`             | Emitted when textarea loses focus (useful for validation) |
| `input`             | Emitted on input event (provides raw DOM event)           |

## Width Classes

The textarea supports DKFDS width classes for consistent sizing:

- `input--width-xs` - Extra small width
- `input--width-s` - Small width  
- `input--width-m` - Medium width
- `input--width-l` - Large width
- `input--width-xl` - Extra large width

## Auto-Expanding Behavior

The textarea automatically adjusts its height based on content:

- **Minimum rows**: Set by the `rows` prop
- **Maximum rows**: Limited by the `maxRows` prop  
- **Calculation**: Based on newlines and character count using `rowlength`
- **Dynamic sizing**: Grows and shrinks as content changes

## Form Integration

The textarea works seamlessly with DKFDS form components:

```vue
<FdsFormgroup>
  <template #default="{ formid, ariaDescribedby }">
    <FdsLabel :for="formid" required>Description</FdsLabel>
    <FdsHint>Provide a detailed description (max 500 characters)</FdsHint>
    <FdsTextarea 
      :id="formid"
      v-model="description"
      :maxlength="500"
      :aria-describedby="ariaDescribedby"
    />
    <FdsInputLimit v-model="description" :limit="500" />
    <FdsFejlmeddelelse v-if="hasError">Description is required</FdsFejlmeddelelse>
  </template>
</FdsFormgroup>
```

## Accessibility

- Always provide a descriptive label using `FdsLabel` or `aria-label`
- Use `aria-describedby` to associate hints and error messages
- The `maxlength` attribute provides native browser validation
- Keyboard navigation is fully supported (Tab, Shift+Tab)
- Screen readers announce character limits and current count

## Design Guidelines

- **Use for multi-line input**: Comments, descriptions, feedback, messages
- **Set appropriate sizing**: Use `rows` and `maxRows` based on expected content length
- **Provide character limits**: Use `maxlength` for validation and `FdsInputLimit` for user feedback
- **Choose appropriate width**: Use `widthClass` to match form layout and content needs
- **Enable auto-expansion**: Let textareas grow with content for better user experience

## Themes

The textarea component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with neutral colors
- **VirkDK**: Business-oriented styling for Virk.dk with professional appearance
- **BorgerDK**: Citizen-oriented styling for Borger.dk with accessible design
</docs>