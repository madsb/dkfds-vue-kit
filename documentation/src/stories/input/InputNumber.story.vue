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
  <Story title="Input/InputNumber" :layout="{ type: 'grid', width: '100%' }" icon="carbon:text-input">
    <!-- Showcase all input variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Basic Number</h3>
            <FdsInputNumber v-model="age" :min="0" :max="120" />
          </div>
          <div class="variant-section">
            <h3 class="section-title">With Suffix</h3>
            <FdsInputNumber v-model="age" :min="0" :max="120" suffix="år" />
          </div>
          <div class="variant-section">
            <h3 class="section-title">With Prefix</h3>
            <FdsInputNumber v-model="price" prefix="kr." :step="0.01" :min="0" />
          </div>
          <div class="variant-section">
            <h3 class="section-title">With Step</h3>
            <FdsInputNumber v-model="percentage" :min="0" :max="100" :step="5" suffix="%" />
          </div>
        </div>
        <p class="story-hint">
          The number input component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how it adapts to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Width and sizing variations -->
    <Variant title="Width Sizing" icon="carbon:ruler">
      <div class="story-content">
        <div class="width-demo">
          <div class="width-example">
            <h3 class="section-subtitle">Extra Small</h3>
            <FdsInputNumber v-model="quantity" width-class="input--width-xs" :min="1" suffix="stk" />
          </div>
          <div class="width-example">
            <h3 class="section-subtitle">Small</h3>
            <FdsInputNumber v-model="age" width-class="input--width-s" :min="0" :max="120" suffix="år" />
          </div>
          <div class="width-example">
            <h3 class="section-subtitle">Medium</h3>
            <FdsInputNumber v-model="price" width-class="input--width-m" prefix="kr." :step="0.01" />
          </div>
          <div class="width-example">
            <h3 class="section-subtitle">Large</h3>
            <FdsInputNumber v-model="temperature" width-class="input--width-l" suffix="°C" :step="0.5" />
          </div>
          <div class="width-example">
            <h3 class="section-subtitle">Extra Large</h3>
            <FdsInputNumber v-model="percentage" width-class="input--width-xl" :min="0" :max="100" suffix="%" />
          </div>
        </div>
        <p class="story-hint">
          Use width classes to control input sizing: xs, s, m, l, xl. Choose appropriate width based on expected content length.
        </p>
      </div>
    </Variant>

    <!-- States and validation -->
    <Variant title="States & Validation" icon="carbon:status-change">
      <div class="story-content">
        <div class="states-grid">
          <div class="state-column">
            <h3 class="section-subtitle">Normal</h3>
            <FdsInputNumber v-model="age" :min="18" :max="65" suffix="år" placeholder="Enter age" />
            <FdsInputNumber v-model="price" prefix="kr." :step="0.01" :min="0" placeholder="0.00" />
          </div>
          <div class="state-column">
            <h3 class="section-subtitle">Disabled</h3>
            <FdsInputNumber v-model="age" :min="18" :max="65" suffix="år" disabled />
            <FdsInputNumber v-model="price" prefix="kr." :step="0.01" :min="0" disabled />
          </div>
          <div class="state-column">
            <h3 class="section-subtitle">With Constraints</h3>
            <FdsInputNumber 
              v-model="validationValue" 
              :min="1" 
              :max="10" 
              :step="1" 
              suffix="items"
              @dirty="handleDirty"
              @input="handleInput"
            />
            <small class="constraint-info">Min: 1, Max: 10, Step: 1</small>
          </div>
        </div>
        <p class="story-hint">
          Number inputs support min/max validation, step increments, and disabled states. 
          Use browser controls or arrow keys to increment/decrement values.
        </p>
      </div>
    </Variant>

    <!-- Keyboard and accessibility -->
    <Variant title="Accessibility" icon="carbon:accessibility">
      <div class="story-content">
        <div class="accessibility-demo">
          <div class="demo-section">
            <h3 class="section-subtitle">Keyboard Navigation</h3>
            <FdsInputNumber 
              v-model="quantity" 
              :min="1" 
              :max="99" 
              :step="1" 
              suffix="items"
              aria-label="Quantity selection"
            />
            <div class="keyboard-info">
              <strong>Keyboard controls:</strong>
              <ul>
                <li><kbd>↑</kbd> / <kbd>↓</kbd> arrow keys: Increment/decrement by step</li>
                <li><kbd>Tab</kbd>: Navigate to next field</li>
                <li><kbd>Enter</kbd>: Submit form (if in form context)</li>
                <li>Direct typing: Override current value</li>
              </ul>
            </div>
          </div>
          
          <div class="demo-section">
            <h3 class="section-subtitle">Focus Behavior</h3>
            <FdsInputNumber 
              v-model="temperature" 
              :min="-50" 
              :max="50" 
              :step="0.5" 
              suffix="°C"
              placeholder="Temperature"
            />
            <p class="accessibility-note">
              Clicking or tabbing into the field automatically selects all text for easy replacement.
            </p>
          </div>
        </div>
        <p class="story-hint">
          Number inputs provide full keyboard accessibility with arrow key support for increment/decrement operations.
          Focus selection makes value replacement convenient for users.
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
        <div class="story-content playground">
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
          <p class="story-hint">Current value: {{ state.value }}</p>
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
            { value: 'input--width-xs', label: 'Extra Small' },
            { value: 'input--width-s', label: 'Small' },
            { value: 'input--width-m', label: 'Medium' },
            { value: 'input--width-l', label: 'Large' },
            { value: 'input--width-xl', label: 'Extra Large' },
          ]"
        />
        
        <HstText v-model="state.placeholder" title="Placeholder" />
        
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

.width-demo {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.width-example {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
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

.constraint-info {
  font-size: 1.4rem;
  color: #666;
  font-style: italic;
}

.accessibility-demo {
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
}

.demo-section {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.keyboard-info {
  font-size: 1.4rem;
  color: #333;
  line-height: 1.6;
}

.keyboard-info ul {
  margin: 0.8rem 0;
  padding-left: 2.4rem;
}

.keyboard-info li {
  margin: 0.4rem 0;
}

.keyboard-info kbd {
  background: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 0.2rem 0.4rem;
  font-family: monospace;
  font-size: 1.2rem;
}

.accessibility-note {
  font-size: 1.4rem;
  color: #666;
  font-style: italic;
}

.playground {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
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

  .width-demo {
    gap: 1.6rem;
  }
}
</style>

<docs lang="md">
# FdsInputNumber

The number input component provides a specialized input field for numeric values with built-in validation, increment/decrement controls, and DKFDS v11 styling. It supports min/max constraints, step values, prefix/suffix text, and keyboard accessibility.

## Usage

```vue
<template>
  <FdsInputNumber
    v-model="age"
    :min="18"
    :max="100"
    suffix="years"
    @dirty="validateAge"
  />
</template>

<script setup>
import { ref } from 'vue'
import { FdsInputNumber } from '@madsb/dkfds-vue3'

const age = ref(25)

const validateAge = (isDirty) => {
  if (isDirty) {
    // Perform validation
  }
}
</script>
```

## Props

| Prop         | Type              | Default     | Description                                    |
| ------------ | ----------------- | ----------- | ---------------------------------------------- |
| `id`         | `string`          | -           | Unique identifier (auto-generated if omitted) |
| `modelValue` | `number \| string` | `''`        | The v-model value for two-way data binding    |
| `suffix`     | `string`          | -           | Text displayed after the input (e.g., "kr.") |
| `prefix`     | `string`          | -           | Text displayed before the input               |
| `min`        | `number`          | -           | Minimum allowed value                         |
| `max`        | `number`          | -           | Maximum allowed value                         |
| `step`       | `number \| string` | -           | Step value for increment/decrement operations |
| `widthClass` | `string`          | `''`        | CSS class for input width sizing             |

## Events

| Event                  | Description                                        |
| ---------------------- | -------------------------------------------------- |
| `update:modelValue`    | Emitted when the input value changes              |
| `dirty`                | Emitted when input loses focus (useful for validation) |
| `input`                | Emitted on input event with raw DOM event         |

## Width Classes

Use these predefined width classes to control input sizing:

- `input--width-xs` - Extra small width
- `input--width-s` - Small width  
- `input--width-m` - Medium width
- `input--width-l` - Large width
- `input--width-xl` - Extra large width

## Accessibility

- **Keyboard Navigation**: Full support for arrow keys (↑/↓) to increment/decrement values
- **Focus Behavior**: Automatically selects all text when focused for easy value replacement
- **Screen Readers**: Properly announces min/max constraints and current values
- **ARIA Support**: Integrates with form groups for coordinated accessibility
- **Validation**: Browser-native validation for min/max constraints

### Keyboard Controls

- **↑/↓ Arrow Keys**: Increment/decrement by step value
- **Tab**: Navigate to next form field
- **Enter**: Submit form (when in form context)
- **Direct Typing**: Replace current value

## Design Guidelines

- Use **prefix/suffix** to clarify units or context (e.g., "kr.", "%", "years")
- Set appropriate **min/max values** to guide user input and prevent errors
- Choose **step values** that match expected precision (e.g., 0.01 for currency)
- Use **width classes** to match expected content length
- Consider **placeholder text** to show expected format
- Integrate with **form groups** for proper labeling and validation

### When to Use

- Age, quantity, price, or percentage inputs
- Settings that require numeric values with constraints
- Forms where users need to increment/decrement values
- Any numeric input that benefits from validation

### When NOT to Use

- Free-form text input (use FdsInput instead)
- Phone numbers or IDs (use FdsInput with type="tel")
- Large numbers that don't need increment controls

## Themes

The component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with blue focus states
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
</docs>