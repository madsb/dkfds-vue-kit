<script setup lang="ts">
import { ref } from 'vue'
import {
  FdsPreview,
  FdsPreviewItem,
  FdsPreviewCode,
  FdsPreviewExample,
  FdsPre,
  FdsButton,
  FdsInput,
  FdsLabel,
  FdsFormgroup
} from '@madsb/dkfds-vue3'

// Demo state for interactive examples
const demoValue = ref('')
const codeSnippet = ref('<FdsButton variant="primary">Click me</FdsButton>')

const sampleJsonData = ref({
  name: 'John Doe',
  age: 30,
  city: 'Copenhagen',
  preferences: {
    theme: 'light',
    language: 'da'
  }
})

const handleDemoSubmit = () => {
  alert(`Submitted: ${demoValue.value}`)
}
</script>

<template>
  <Story
    title="Data Display/Preview"
    :layout="{ type: 'grid', width: '100%' }"
    icon="carbon:data-view"
  >
    <!-- Showcase all preview components working together -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Component Documentation</h3>
            <FdsPreview header="Button Component" href="#" link-text="View Documentation">
              <FdsPreviewItem>
                <p>Buttons trigger actions and navigation. They come in different variants for different purposes.</p>
              </FdsPreviewItem>
              <FdsPreviewExample>
                <FdsButton>Primary Button</FdsButton>
                <FdsButton variant="secondary">Secondary</FdsButton>
              </FdsPreviewExample>
              <FdsPreviewCode header="Vue Template">
                <FdsPre code="<FdsButton>Primary Button</FdsButton>" />
              </FdsPreviewCode>
            </FdsPreview>
          </div>
          
          <div class="variant-section">
            <h3 class="section-title">JSON Data Display</h3>
            <FdsPreview header="API Response Example">
              <FdsPreviewItem>
                <p>Preview JSON data with automatic formatting and syntax highlighting.</p>
              </FdsPreviewItem>
              <FdsPreviewCode header="JSON Response">
                <FdsPre :json="sampleJsonData" />
              </FdsPreviewCode>
            </FdsPreview>
          </div>
        </div>
        <p class="story-hint">
          The Preview components follow DKFDS v11 design specifications for documentation and code display. 
          Try switching themes using the global theme switcher to see how they adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Documentation patterns -->
    <Variant title="Documentation Patterns" icon="carbon:document">
      <div class="story-content">
        <FdsPreview header="Form Components" href="#forms" link-text="Form Documentation">
          <FdsPreviewItem>
            <h4 class="section-subtitle">Form Structure</h4>
            <p>Forms should use proper semantic structure with labels, inputs, and grouping.</p>
            <ul>
              <li>Always pair inputs with labels</li>
              <li>Use form groups for logical organization</li>
              <li>Provide helpful hints when needed</li>
            </ul>
          </FdsPreviewItem>
          
          <FdsPreviewExample>
            <FdsFormgroup>
              <FdsLabel for="demo-input">Email Address</FdsLabel>
              <FdsInput 
                id="demo-input" 
                type="email" 
                v-model="demoValue" 
                placeholder="user@example.com" 
              />
            </FdsFormgroup>
            <FdsButton @click="handleDemoSubmit" class="mt-3">Submit Form</FdsButton>
          </FdsPreviewExample>
          
          <FdsPreviewCode header="HTML Structure">
            <FdsPre code="<FdsFormgroup>\n  <FdsLabel for=\"email\">Email Address</FdsLabel>\n  <FdsInput id=\"email\" type=\"email\" />\n</FdsFormgroup>" />
          </FdsPreviewCode>
          
          <FdsPreviewCode header="Vue Script">
            <FdsPre code="<script setup>\nimport { ref } from 'vue'\nimport { FdsFormgroup, FdsLabel, FdsInput } from '@madsb/dkfds-vue3'\n\nconst email = ref('')\n</script>" />
          </FdsPreviewCode>
        </FdsPreview>
        
        <p class="story-hint">
          Documentation patterns combine descriptions, live examples, and code samples for comprehensive guides.
        </p>
      </div>
    </Variant>

    <!-- Code display modes -->
    <Variant title="Code Display Modes" icon="carbon:code">
      <div class="story-content">
        <div class="code-modes-grid">
          <div class="mode-section">
            <h3 class="section-title">Raw Code</h3>
            <FdsPreview header="HTML Code">
              <FdsPreviewCode>
                <FdsPre code="<div class=\"alert alert-success\">\n  <p>Operation completed successfully!</p>\n</div>" />
              </FdsPreviewCode>
            </FdsPreview>
          </div>
          
          <div class="mode-section">
            <h3 class="section-title">JSON Data</h3>
            <FdsPreview header="Configuration">
              <FdsPreviewCode header="config.json">
                <FdsPre :json="{ server: { port: 3000, host: 'localhost' }, database: { type: 'postgresql', url: 'postgres://localhost/mydb' } }" />
              </FdsPreviewCode>
            </FdsPreview>
          </div>
          
          <div class="mode-section">
            <h3 class="section-title">Slot Content</h3>
            <FdsPreview header="YAML Config">
              <FdsPreviewCode>
                <FdsPre>
server:
  host: localhost
  port: 3000
database:
  type: postgresql
  url: postgres://localhost/mydb
                </FdsPre>
              </FdsPreviewCode>
            </FdsPreview>
          </div>
        </div>
        
        <p class="story-hint">
          Code display supports multiple formats: raw strings, formatted JSON objects, and slot content.
        </p>
      </div>
    </Variant>

    <!-- Layout variations -->
    <Variant title="Layout Variations" icon="carbon:layout">
      <div class="story-content">
        <h3 class="section-title">Minimal Preview</h3>
        <FdsPreview header="Simple Example">
          <FdsPreviewExample>
            <FdsButton>Click Me</FdsButton>
          </FdsPreviewExample>
        </FdsPreview>
        
        <div class="divider" />
        
        <h3 class="section-title">Preview with Description Only</h3>
        <FdsPreview header="Usage Guidelines">
          <FdsPreviewItem>
            <p>This component is used for triggering actions in the user interface. It should be placed where users expect to find interactive elements.</p>
          </FdsPreviewItem>
        </FdsPreview>
        
        <div class="divider" />
        
        <h3 class="section-title">Code Only Preview</h3>
        <FdsPreview header="Implementation">
          <FdsPreviewCode header="TypeScript">
            <FdsPre code="interface ButtonProps {\n  variant?: 'primary' | 'secondary' | 'tertiary' | 'warning'\n  disabled?: boolean\n  onClick?: () => void\n}" />
          </FdsPreviewCode>
        </FdsPreview>
        
        <p class="story-hint">
          Preview components are flexible - use any combination of description, example, and code sections.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          header: 'Interactive Component',
          href: 'https://designsystem.dk',
          linkText: 'Design System',
          showDescription: true,
          showExample: true,
          showCode: true,
          codeHeader: 'Vue Template',
          descriptionText: 'This is an interactive preview component that you can customize.',
          exampleCode: '<FdsButton>Interactive Button</FdsButton>'
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <FdsPreview 
            :header="state.header" 
            :href="state.href || undefined"
            :link-text="state.linkText"
          >
            <FdsPreviewItem v-if="state.showDescription">
              <p>{{ state.descriptionText }}</p>
            </FdsPreviewItem>
            
            <FdsPreviewExample v-if="state.showExample">
              <FdsButton>{{ state.header }}</FdsButton>
            </FdsPreviewExample>
            
            <FdsPreviewCode v-if="state.showCode" :header="state.codeHeader">
              <FdsPre :code="state.exampleCode" />
            </FdsPreviewCode>
          </FdsPreview>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.header" title="Header" />
        
        <HstText v-model="state.href" title="Link URL" />
        
        <HstText v-model="state.linkText" title="Link Text" />
        
        <HstCheckbox v-model="state.showDescription" title="Show Description" />
        
        <HstCheckbox v-model="state.showExample" title="Show Example" />
        
        <HstCheckbox v-model="state.showCode" title="Show Code" />
        
        <HstText v-model="state.codeHeader" title="Code Header" :disabled="!state.showCode" />
        
        <HstTextarea v-model="state.descriptionText" title="Description Text" :disabled="!state.showDescription" />
        
        <HstTextarea v-model="state.exampleCode" title="Example Code" :disabled="!state.showCode" />
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.variant-section {
  display: flex;
  flex-direction: column;
}

.code-modes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.mode-section {
  display: flex;
  flex-direction: column;
}

.divider {
  margin: 2.4rem 0;
  border-top: 1px solid #e0e0e0;
}

.playground {
  display: flex;
  flex-direction: column;
  min-height: 200px;
}

/* Preview component spacing */
.story-content :deep(.component-preview) {
  margin-bottom: 2.4rem;
}

.story-content :deep(.component-preview:last-child) {
  margin-bottom: 0;
}

/* Form spacing in examples */
.story-content :deep(.mt-3) {
  margin-top: 1.2rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem;
  }

  .variant-grid {
    grid-template-columns: 1fr;
  }
  
  .code-modes-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<docs lang="md">
# FdsPreview

The Preview component system provides a comprehensive solution for documenting and showcasing components with live examples, descriptions, and code samples. It consists of four interconnected components that work together to create professional documentation layouts.

## Usage

```vue
<template>
  <FdsPreview header="Component Name" href="/docs" link-text="Documentation">
    <FdsPreviewItem>
      <p>Description of the component and its usage.</p>
    </FdsPreviewItem>
    
    <FdsPreviewExample>
      <FdsButton>Live Example</FdsButton>
    </FdsPreviewExample>
    
    <FdsPreviewCode header="HTML">
      <FdsPre code="<FdsButton>Live Example</FdsButton>" />
    </FdsPreviewCode>
  </FdsPreview>
</template>

<script setup>
import {
  FdsPreview,
  FdsPreviewItem,
  FdsPreviewExample,
  FdsPreviewCode,
  FdsPre,
  FdsButton
} from '@madsb/dkfds-vue3'
</script>
```

## Components

### FdsPreview Props

| Prop       | Type     | Default         | Description                                    |
| ---------- | -------- | --------------- | ---------------------------------------------- |
| `header`   | `string` | -               | Header text describing the preview content     |
| `href`     | `string` | -               | Optional URL for documentation link            |
| `linkText` | `string` | `'Design System'` | Text for the documentation link               |

### FdsPreviewCode Props

| Prop     | Type     | Default | Description                           |
| -------- | -------- | ------- | ------------------------------------- |
| `header` | `string` | `null`  | Optional header for the code section |

### FdsPreviewItem

Accepts any content through slots - typically used for descriptions, guidelines, and explanatory text.

### FdsPreviewExample

Container for live component demonstrations. Provides proper semantic labeling with `aria-label="Eksempel"`.

## Accessibility

- Preview containers include proper ARIA labeling
- Code sections are marked with `aria-hidden="true"` to avoid screen reader duplication
- Example sections are clearly labeled for assistive technologies
- All interactive elements maintain keyboard navigation support

## Design Guidelines

- **Use for documentation**: Perfect for component libraries, style guides, and API documentation
- **Combine flexibly**: Use any combination of description, example, and code sections
- **Keep examples focused**: Each preview should demonstrate one clear concept
- **Provide context**: Use headers and descriptions to explain the purpose and usage
- **Link to documentation**: Use href prop to link to comprehensive documentation

## Layout Patterns

### Full Documentation
```vue
<FdsPreview header="Component" href="/docs" link-text="Full Docs">
  <FdsPreviewItem><!-- Description --></FdsPreviewItem>
  <FdsPreviewExample><!-- Live example --></FdsPreviewExample>
  <FdsPreviewCode><!-- Code sample --></FdsPreviewCode>
</FdsPreview>
```

### Example Only
```vue
<FdsPreview header="Quick Demo">
  <FdsPreviewExample><!-- Live example --></FdsPreviewExample>
</FdsPreview>
```

### Code Documentation
```vue
<FdsPreview header="API Reference">
  <FdsPreviewCode header="TypeScript">
    <FdsPre code="interface Props { ... }" />
  </FdsPreviewCode>
</FdsPreview>
```

## Themes

The Preview component system automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with neutral backgrounds
- **VirkDK**: Business-oriented styling with professional appearance
- **BorgerDK**: Citizen-oriented styling with accessible design
</docs>