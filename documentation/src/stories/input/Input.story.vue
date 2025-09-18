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
  suffixed: '25'
})

const handleInput = (value: string, field: string) => {
  demoValues.value[field] = value
}
</script>

<template>
  <Story title="Input/Input" :layout="{ type: 'grid', width: '100%' }" icon="carbon:text-input">
    <!-- Showcase all input types and features -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Text Input</h3>
            <FdsInput v-model="demoValues.text" placeholder="Enter text" />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Email Input</h3>
            <FdsInput v-model="demoValues.email" type="email" placeholder="Enter email" />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Password Input</h3>
            <FdsInput v-model="demoValues.password" type="password" placeholder="Enter password" />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Number Input</h3>
            <FdsInput v-model="demoValues.number" type="number" placeholder="Enter number" />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Tel Input</h3>
            <FdsInput v-model="demoValues.tel" type="tel" placeholder="Enter phone" />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Search Input</h3>
            <FdsInput v-model="demoValues.search" type="search" placeholder="Search..." />
          </div>
        </div>
        <p class="story-hint">
          The input component follows DKFDS v11 design specifications and supports multiple input types. 
          Try switching themes using the global theme switcher to see how inputs adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Input states and validation -->
    <Variant title="States" icon="carbon:status-change">
      <div class="story-content">
        <div class="states-grid">
          <div class="state-column">
            <h3 class="section-subtitle">Normal</h3>
            <FdsInput placeholder="Normal state" />
            <FdsInput value="With value" />
            <FdsInput placeholder="Focus me" />
          </div>
          <div class="state-column">
            <h3 class="section-subtitle">Disabled</h3>
            <FdsInput placeholder="Disabled empty" disabled />
            <FdsInput value="Disabled with value" disabled />
            <FdsInput placeholder="Cannot interact" disabled />
          </div>
          <div class="state-column">
            <h3 class="section-subtitle">Readonly</h3>
            <FdsInput value="Readonly value" readonly />
            <FdsInput value="Cannot edit" readonly />
            <FdsInput value="View only" readonly />
          </div>
        </div>
        <p class="story-hint">
          Inputs support normal, disabled, and readonly states. Disabled inputs prevent all interaction,
          while readonly inputs allow focus but prevent editing.
        </p>
      </div>
    </Variant>

    <!-- Prefix, suffix, and character limits -->
    <Variant title="Enhanced Features" icon="carbon:add-alt">
      <div class="story-content">
        <div class="feature-grid">
          <div class="feature-section">
            <h3 class="section-subtitle">With Prefix</h3>
            <FdsInput 
              v-model="demoValues.prefixed" 
              prefix="DKK" 
              type="number" 
              placeholder="0,00"
            />
            <FdsInput prefix="+" type="tel" placeholder="45 12 34 56 78" />
          </div>
          
          <div class="feature-section">
            <h3 class="section-subtitle">With Suffix</h3>
            <FdsInput 
              v-model="demoValues.suffixed" 
              suffix="km" 
              type="number" 
              placeholder="Distance"
            />
            <FdsInput suffix="%" type="number" placeholder="Percentage" />
          </div>
          
          <div class="feature-section">
            <h3 class="section-subtitle">Character Limit</h3>
            <FdsInput 
              v-model="demoValues.limited" 
              placeholder="Type to see character count"
              maxlength="50"
            />
            <FdsInputLimit v-model="demoValues.limited" :limit="50" />
          </div>

          <div class="feature-section">
            <h3 class="section-subtitle">Width Classes</h3>
            <FdsInput placeholder="Extra Small" width-class="input-width-xs" />
            <FdsInput placeholder="Small" width-class="input-width-s" />
            <FdsInput placeholder="Medium" width-class="input-width-m" />
            <FdsInput placeholder="Large" width-class="input-width-l" />
          </div>
        </div>
        <p class="story-hint">
          Inputs support prefixes and suffixes for currency, units, and context. 
          Character limits with FdsInputLimit provide real-time feedback and validation.
        </p>
      </div>
    </Variant>

    <!-- Width and responsive behavior -->
    <Variant title="Sizing & Responsive" icon="carbon:devices">
      <div class="story-content">
        <div class="sizing-demo">
          <h3 class="section-subtitle">Width Classes</h3>
          <div class="width-examples">
            <div class="width-example">
              <label class="width-label">Extra Small (XS)</label>
              <FdsInput placeholder="Width XS" width-class="input-width-xs" />
            </div>
            <div class="width-example">
              <label class="width-label">Small (S)</label>
              <FdsInput placeholder="Width S" width-class="input-width-s" />
            </div>
            <div class="width-example">
              <label class="width-label">Medium (M)</label>
              <FdsInput placeholder="Width M" width-class="input-width-m" />
            </div>
            <div class="width-example">
              <label class="width-label">Large (L)</label>
              <FdsInput placeholder="Width L" width-class="input-width-l" />
            </div>
            <div class="width-example">
              <label class="width-label">Default (Full Width)</label>
              <FdsInput placeholder="Full width input" />
            </div>
          </div>
        </div>
        <p class="story-hint">
          Use width classes to control input size. Inputs are responsive and adapt to container width.
          Resize the viewport to see how inputs adapt on mobile devices.
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
        <div class="story-content playground">
          <div class="playground-container">
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
          <p class="story-hint">
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

.states-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 3.2rem;
  margin-bottom: 2.4rem;
}

.state-column {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.feature-section {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.sizing-demo {
  max-width: 600px;
}

.width-examples {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.width-example {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.width-label {
  font-size: 1.4rem; /* 14px */
  font-weight: 500;
  color: #333;
}

.playground {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.playground-container {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 400px;
}

/* Input spacing */
.story-content :deep(.form-input),
.story-content :deep(.form-input-wrapper),
.story-content :deep(.form-input-prefix),
.story-content :deep(.form-input-suffix) {
  margin-top: 0;
  margin-bottom: 0;
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

  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<docs lang="md">
# FdsInput

The input component is a fundamental form element that provides text input functionality with support for multiple input types, prefixes, suffixes, and character limits. It follows DKFDS v11 design specifications and integrates seamlessly with form validation.

## Usage

```vue
<template>
  <FdsInput
    v-model="inputValue"
    type="text"
    placeholder="Enter text"
  />
</template>

<script setup>
import { ref } from 'vue'
import { FdsInput } from '@madsb/dkfds-vue3'

const inputValue = ref('')
</script>
```

## Props

| Prop         | Type     | Default | Description                                   |
| ------------ | -------- | ------- | --------------------------------------------- |
| `id`         | `string` | -       | Unique identifier for the input element       |
| `modelValue` | `string` | `''`    | The v-model binding value                     |
| `type`       | `string` | `'text'` | HTML input type (text, email, password, etc.) |
| `prefix`     | `string` | -       | Text displayed before the input field         |
| `suffix`     | `string` | -       | Text displayed after the input field          |
| `widthClass` | `string` | `''`    | Width class for controlling input size        |

## Events

| Event                 | Description                              |
| --------------------- | ---------------------------------------- |
| `update:modelValue`   | Emitted when input value changes         |
| `dirty`               | Emitted when input loses focus           |
| `input`               | Native input event pass-through          |

## Input Types

The component supports all standard HTML input types:

- **text**: Standard text input
- **email**: Email input with validation
- **password**: Password input with hidden text
- **number**: Numeric input
- **tel**: Telephone number input
- **search**: Search input
- **url**: URL input

## Width Classes

Control input width using DKFDS width utility classes:

- `input-width-xs`: Extra small width
- `input-width-s`: Small width
- `input-width-m`: Medium width
- `input-width-l`: Large width
- Default: Full container width

## Character Limits

Use FdsInputLimit component for character counting and validation:

```vue
<template>
  <FdsInput v-model="text" maxlength="100" />
  <FdsInputLimit v-model="text" :limit="100" />
</template>
```

## Accessibility

- Always associate inputs with labels using `for` attribute
- Use appropriate input types for better mobile experience
- Provide helpful placeholder text and validation messages
- Ensure sufficient color contrast for all states
- Support keyboard navigation (Tab, arrow keys)

## Design Guidelines

- Use appropriate input types for better user experience
- Provide clear labels and helper text
- Use prefixes and suffixes to provide context (currency, units)
- Implement character limits for fields with length constraints
- Group related inputs logically in forms
- Consider mobile responsiveness with appropriate width classes

## Integration with Forms

The input component integrates with FdsFormgroup for validation:

```vue
<template>
  <FdsFormgroup :error="emailError">
    <FdsLabel for="email">Email Address</FdsLabel>
    <FdsHint>We'll never share your email</FdsHint>
    <FdsInput 
      id="email" 
      v-model="email" 
      type="email" 
      placeholder="your@email.com"
    />
    <FdsFejlmeddelelse v-if="emailError">
      {{ emailError }}
    </FdsFejlmeddelelse>
  </FdsFormgroup>
</template>
```

## Themes

The input component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling with clean borders
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk

Try switching themes using the global theme switcher to see the visual differences.
</docs>
