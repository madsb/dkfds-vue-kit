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
  FdsFormgroup,
} from '@madsb/dkfds-vue3'

// Demo state for interactive examples
const demoValue = ref('')
const sampleJsonData = ref({
  name: 'John Doe',
  age: 30,
  city: 'Copenhagen',
  preferences: {
    theme: 'light',
    language: 'da',
  },
})

const handleDemoSubmit = () => {
  alert(`Submitted: ${demoValue.value}`)
}

const previewButtonExample = '<FdsButton>Primary Button</FdsButton>'

const previewFormMarkup = `<FdsFormgroup>
  <FdsLabel for=\"email\">Email Address</FdsLabel>
  <FdsInput id=\"email\" type=\"email\" />
</FdsFormgroup>`

const previewVueScript = `<script setup lang=\"ts\">
import { ref } from 'vue'
import { FdsFormgroup, FdsLabel, FdsInput } from '@madsb/dkfds-vue3'

const email = ref('')
<\/script>`

const htmlAlertSnippet = `<div class=\"alert alert-success\">
  <p>Operation completed successfully!</p>
</div>`

const tsInterfaceSnippet = `interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'warning'
  disabled?: boolean
  onClick?: () => void
}`

const getPreviewPlaygroundState = () => ({
  header: 'Interactive Component',
  href: 'https://designsystem.dk',
  linkText: 'Design System',
  showDescription: true,
  showExample: true,
  showCode: true,
  codeHeader: 'Vue Template',
  descriptionText: 'This is an interactive preview component that you can customize.',
  exampleCode: '<FdsButton>Interactive Button</FdsButton>',
})
</script>

<template>
  <Story title="Data Display/Preview" icon="carbon:data-view">
    <!-- Showcase all preview components working together -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Component Documentation</h3>
            <FdsPreview header="Button Component" href="#" link-text="View Documentation">
              <FdsPreviewItem>
                <p>
                  Buttons trigger actions and navigation. They come in different variants for
                  different purposes.
                </p>
              </FdsPreviewItem>
              <FdsPreviewExample>
                <FdsButton>Primary Button</FdsButton>
                <FdsButton variant="secondary">Secondary</FdsButton>
              </FdsPreviewExample>
              <FdsPreviewCode header="Vue Template">
                <FdsPre :code="previewButtonExample" />
              </FdsPreviewCode>
            </FdsPreview>
          </div>

          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">JSON Data Display</h3>
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
        <p class="mt-4 mb-0">
          The Preview components follow DKFDS v11 design specifications for documentation and code
          display. Try switching themes using the global theme switcher to see how they adapt to
          different contexts.
        </p>
      </div>
    </Variant>

    <!-- Documentation patterns -->
    <Variant title="Documentation Patterns" icon="carbon:document">
      <div class="container py-6">
        <FdsPreview header="Form Components" href="#forms" link-text="Form Documentation">
          <FdsPreviewItem>
            <h4 class="h6 mb-2">Form Structure</h4>
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
            <FdsPre :code="previewFormMarkup" />
          </FdsPreviewCode>

          <FdsPreviewCode header="Vue Script">
            <FdsPre :code="previewVueScript" />
          </FdsPreviewCode>
        </FdsPreview>

        <p class="mt-4 mb-0">
          Documentation patterns combine descriptions, live examples, and code samples for
          comprehensive guides.
        </p>
      </div>
    </Variant>

    <!-- Code display modes -->
    <Variant title="Code Display Modes" icon="carbon:code">
      <div class="container py-6">
        <div>
          <div>
            <h3 class="h5 mb-2">Raw Code</h3>
            <FdsPreview header="HTML Code">
              <FdsPreviewCode>
                <FdsPre :code="htmlAlertSnippet" />
              </FdsPreviewCode>
            </FdsPreview>
          </div>

          <div>
            <h3 class="h5 mb-2">JSON Data</h3>
            <FdsPreview header="Configuration">
              <FdsPreviewCode header="config.json">
                <FdsPre
                  :json="{
                    server: { port: 3000, host: 'localhost' },
                    database: { type: 'postgresql', url: 'postgres://localhost/mydb' },
                  }"
                />
              </FdsPreviewCode>
            </FdsPreview>
          </div>

          <div>
            <h3 class="h5 mb-2">Slot Content</h3>
            <FdsPreview header="YAML Config">
              <FdsPreviewCode>
                <FdsPre>
                  server: host: localhost port: 3000 database: type: postgresql url:
                  postgres://localhost/mydb
                </FdsPre>
              </FdsPreviewCode>
            </FdsPreview>
          </div>
        </div>

        <p class="mt-4 mb-0">
          Code display supports multiple formats: raw strings, formatted JSON objects, and slot
          content.
        </p>
      </div>
    </Variant>

    <!-- Layout variations -->
    <Variant title="Layout Variations" icon="carbon:layout">
      <div class="container py-6">
        <h3 class="h5 mb-2">Minimal Preview</h3>
        <FdsPreview header="Simple Example">
          <FdsPreviewExample>
            <FdsButton>Click Me</FdsButton>
          </FdsPreviewExample>
        </FdsPreview>

        <hr class="my-6" />

        <h3 class="h5 mb-2">Preview with Description Only</h3>
        <FdsPreview header="Usage Guidelines">
          <FdsPreviewItem>
            <p>
              This component is used for triggering actions in the user interface. It should be
              placed where users expect to find interactive elements.
            </p>
          </FdsPreviewItem>
        </FdsPreview>

        <hr class="my-6" />

        <h3 class="h5 mb-2">Code Only Preview</h3>
        <FdsPreview header="Implementation">
          <FdsPreviewCode header="TypeScript">
            <FdsPre :code="tsInterfaceSnippet" />
          </FdsPreviewCode>
        </FdsPreview>

        <p class="mt-4 mb-0">
          Preview components are flexible - use any combination of description, example, and code
          sections.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant title="Playground" icon="carbon:game-console" :init-state="getPreviewPlaygroundState">
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
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

        <HstTextarea
          v-model="state.descriptionText"
          title="Description Text"
          :disabled="!state.showDescription"
        />

        <HstTextarea v-model="state.exampleCode" title="Example Code" :disabled="!state.showCode" />
      </template>
    </Variant>
  </Story>
</template>
