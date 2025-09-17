<script setup lang="ts">
import { ref } from 'vue'
import { FdsAccordion, FdsAccordionGroup } from '@madsb/dkfds-vue3'

// Demo state
const demoExpanded = ref(false)
const demoGroupExpanded = ref(false)
const eventLog = ref<string[]>([])

const handleAccordionOpen = () => {
  eventLog.value.unshift('Accordion opened')
}

const handleAccordionClose = () => {
  eventLog.value.unshift('Accordion closed')
}

const handleGroupToggle = (expanded: boolean) => {
  eventLog.value.unshift(`Group toggle: ${expanded ? 'All expanded' : 'All collapsed'}`)
}
</script>

<template>
  <Story title="Data Display/Accordion" :layout="{ type: 'grid', width: '100%' }" icon="carbon:data-view">
    <!-- Showcase all accordion variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Basic Accordion</h3>
            <FdsAccordion header="Basic Information">
              <p>This is the basic accordion content. It can contain any type of content including text, images, or other components.</p>
            </FdsAccordion>
          </div>
          
          <div class="variant-section">
            <h3 class="section-title">With Status Icons</h3>
            <FdsAccordion header="Success Section" variant="success" variant-text="Completed">
              <p>This accordion has a success status indicator with custom text.</p>
            </FdsAccordion>
            <FdsAccordion header="Warning Section" variant="warning" variant-text="2 issues">
              <p>This accordion shows a warning status with issue count.</p>
            </FdsAccordion>
            <FdsAccordion header="Error Section" variant="error">
              <p>This accordion displays an error status with default text.</p>
            </FdsAccordion>
          </div>
          
          <div class="variant-section">
            <h3 class="section-title">Accordion Group</h3>
            <FdsAccordionGroup>
              <FdsAccordion header="Section 1">
                <p>Content for the first section in the accordion group.</p>
              </FdsAccordion>
              <FdsAccordion header="Section 2">
                <p>Content for the second section in the accordion group.</p>
              </FdsAccordion>
              <FdsAccordion header="Section 3">
                <p>Content for the third section in the accordion group.</p>
              </FdsAccordion>
            </FdsAccordionGroup>
          </div>
        </div>
        <p class="story-hint">
          The Accordion component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how accordions adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Group features and bulk controls -->
    <Variant title="Group Controls" icon="carbon:list">
      <div class="story-content">
        <div class="group-demo">
          <h3 class="section-subtitle">With Bulk Controls</h3>
          <FdsAccordionGroup 
            v-model="demoGroupExpanded"
            expanded-text="Fold alle sammen"
            collapsed-text="Udvid alle"
            @toggle-all="handleGroupToggle"
          >
            <FdsAccordion header="Personal Information">
              <p>Name, address, and contact details form fields would go here.</p>
            </FdsAccordion>
            <FdsAccordion header="Employment Details">
              <p>Current job, salary, and work history information.</p>
            </FdsAccordion>
            <FdsAccordion header="Additional Information">
              <p>Optional fields and supplementary data collection.</p>
            </FdsAccordion>
          </FdsAccordionGroup>
        </div>
        
        <div class="divider" />
        
        <div class="group-demo">
          <h3 class="section-subtitle">Without Bulk Button</h3>
          <FdsAccordionGroup :show-bulk-button="false">
            <FdsAccordion header="Privacy Policy">
              <p>Details about how we collect and use your personal data.</p>
            </FdsAccordion>
            <FdsAccordion header="Terms of Service">
              <p>Legal terms and conditions for using our service.</p>
            </FdsAccordion>
          </FdsAccordionGroup>
        </div>
        
        <p class="story-hint">
          Accordion groups provide coordinated behavior. The bulk control button allows users to expand or collapse all sections at once.
        </p>
      </div>
    </Variant>

    <!-- Controlled state and events -->
    <Variant title="Controlled State" icon="carbon:touch-interaction">
      <div class="story-content">
        <div class="controlled-demo">
          <div class="controls">
            <button 
              class="fds-button fds-button--primary" 
              @click="demoExpanded = !demoExpanded"
            >
              {{ demoExpanded ? 'Collapse' : 'Expand' }} Accordion
            </button>
            <span class="state-indicator">State: {{ demoExpanded ? 'Expanded' : 'Collapsed' }}</span>
          </div>
          
          <FdsAccordion 
            v-model="demoExpanded"
            header="Controlled Accordion"
            @fds.accordion.open="handleAccordionOpen"
            @fds.accordion.close="handleAccordionClose"
          >
            <p>This accordion's expanded state is controlled by external buttons and v-model binding.</p>
            <p>It also demonstrates event handling for open and close actions.</p>
          </FdsAccordion>
          
          <div class="event-log">
            <h4 class="log-title">Event Log:</h4>
            <ul class="log-list">
              <li v-for="(event, index) in eventLog.slice(0, 5)" :key="index" class="log-item">
                {{ event }}
              </li>
              <li v-if="eventLog.length === 0" class="log-item empty">
                No events yet - interact with the accordion above
              </li>
            </ul>
          </div>
        </div>
        
        <p class="story-hint">
          Use v-model for two-way binding and listen to fds.accordion.open/close events for custom behavior. Keyboard navigation is supported with Tab, Enter, and Space keys.
        </p>
      </div>
    </Variant>

    <!-- Custom content examples -->
    <Variant title="Custom Content" icon="carbon:document">
      <div class="story-content">
        <div class="custom-content-demo">
          <FdsAccordion>
            <template #header>
              <span>Custom Header with <strong>Rich Formatting</strong> and <em>Emphasis</em></span>
            </template>
            <div class="rich-content">
              <h4>Rich Content Example</h4>
              <p>Accordions can contain any type of content:</p>
              <ul>
                <li>Lists and structured data</li>
                <li>Form fields and inputs</li>
                <li>Images and media</li>
                <li>Other components</li>
              </ul>
              <div class="content-grid">
                <div class="content-card">
                  <h5>Card 1</h5>
                  <p>Nested content example</p>
                </div>
                <div class="content-card">
                  <h5>Card 2</h5>
                  <p>Multiple columns work well</p>
                </div>
              </div>
            </div>
          </FdsAccordion>
          
          <FdsAccordion header="Form Example" variant="warning" variant-text="Required">
            <form class="example-form">
              <div class="form-group">
                <label for="demo-name" class="form-label">Name:</label>
                <input id="demo-name" type="text" class="form-input" placeholder="Enter your name" />
              </div>
              <div class="form-group">
                <label for="demo-email" class="form-label">Email:</label>
                <input id="demo-email" type="email" class="form-input" placeholder="Enter your email" />
              </div>
              <button type="button" class="fds-button fds-button--secondary">
                Save Information
              </button>
            </form>
          </FdsAccordion>
        </div>
        
        <p class="story-hint">
          Accordions support rich content including forms, media, and custom HTML. Use the header slot for custom header formatting.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          header: 'Playground Accordion',
          variant: null,
          variantText: '',
          headerTag: 'h2',
          expanded: false,
          content: 'This is the accordion content. You can customize all properties using the controls.',
          showGroup: false,
          showBulkButton: true,
          expandedText: 'Luk alle',
          collapsedText: 'Åbn alle'
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <div v-if="!state.showGroup" class="playground-accordion">
            <FdsAccordion
              v-model="state.expanded"
              :header="state.header"
              :variant="state.variant || null"
              :variant-text="state.variantText || undefined"
              :header-tag="state.headerTag"
            >
              {{ state.content }}
            </FdsAccordion>
          </div>
          
          <div v-else class="playground-group">
            <FdsAccordionGroup
              :show-bulk-button="state.showBulkButton"
              :expanded-text="state.expandedText"
              :collapsed-text="state.collapsedText"
            >
              <FdsAccordion :header="state.header">
                {{ state.content }}
              </FdsAccordion>
              <FdsAccordion header="Second Section">
                Additional content in the accordion group.
              </FdsAccordion>
              <FdsAccordion header="Third Section">
                More content to demonstrate group behavior.
              </FdsAccordion>
            </FdsAccordionGroup>
          </div>
          
          <div class="playground-status">
            <span class="status-label">Expanded: {{ state.expanded ? 'Yes' : 'No' }}</span>
          </div>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.header" title="Header Text" />
        
        <HstText v-model="state.content" title="Content" />
        
        <HstSelect
          v-model="state.variant"
          title="Variant"
          :options="[
            { value: null, label: 'None' },
            { value: 'success', label: 'Success' },
            { value: 'warning', label: 'Warning' },
            { value: 'error', label: 'Error' }
          ]"
        />
        
        <HstText 
          v-model="state.variantText" 
          title="Variant Text"
          :disabled="!state.variant"
        />
        
        <HstSelect
          v-model="state.headerTag"
          title="Header Tag"
          :options="[
            { value: 'h2', label: 'h2' },
            { value: 'h3', label: 'h3' },
            { value: 'h4', label: 'h4' },
            { value: 'h5', label: 'h5' },
            { value: 'h6', label: 'h6' }
          ]"
        />
        
        <HstCheckbox v-model="state.expanded" title="Expanded" :disabled="state.showGroup" />
        
        <HstCheckbox v-model="state.showGroup" title="Show as Group" />
        
        <HstCheckbox 
          v-model="state.showBulkButton" 
          title="Show Bulk Button"
          :disabled="!state.showGroup"
        />
        
        <HstText 
          v-model="state.expandedText" 
          title="Expanded Button Text"
          :disabled="!state.showGroup || !state.showBulkButton"
        />
        
        <HstText 
          v-model="state.collapsedText" 
          title="Collapsed Button Text"
          :disabled="!state.showGroup || !state.showBulkButton"
        />
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
  gap: 1.2rem;
}

.variant-section > :deep(.accordion),
.variant-section > :deep(.accordion-group) {
  margin-top: 0;
}

.group-demo {
  margin-bottom: 2.4rem;
}

.divider {
  margin: 2.4rem 0;
  border-top: 1px solid #e0e0e0;
}

/* Controlled demo styles */
.controlled-demo {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.controls {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex-wrap: wrap;
}

.state-indicator {
  font-size: 1.4rem;
  color: #666;
  padding: 0.8rem 1.2rem;
  background: #f5f5f5;
  border-radius: 0.4rem;
}

.event-log {
  margin-top: 2.4rem;
  padding: 1.6rem;
  background: #f9f9f9;
  border-radius: 0.8rem;
}

.log-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 1.2rem 0;
  color: #333;
}

.log-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.log-item {
  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid #e0e0e0;
}

.log-item:last-child {
  border-bottom: none;
}

.log-item.empty {
  color: #999;
  font-style: italic;
}

/* Custom content demo styles */
.custom-content-demo {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.rich-content h4 {
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0 0 1.2rem 0;
  color: #1a1a1a;
}

.rich-content h5 {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 0.8rem 0;
  color: #333;
}

.rich-content p {
  margin: 0 0 1.2rem 0;
}

.rich-content ul {
  margin: 0 0 1.6rem 0;
  padding-left: 2rem;
}

.rich-content li {
  margin-bottom: 0.4rem;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.6rem;
  margin-top: 1.6rem;
}

.content-card {
  padding: 1.6rem;
  background: #f8f8f8;
  border-radius: 0.8rem;
  border: 1px solid #e0e0e0;
}

.content-card h5 {
  margin-top: 0;
}

.content-card p {
  margin-bottom: 0;
}

/* Form example styles */
.example-form {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  max-width: 400px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.form-label {
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
}

.form-input {
  padding: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  font-size: 1.4rem;
}

.form-input:focus {
  outline: none;
  border-color: #0077c1;
  box-shadow: 0 0 0 3px rgba(0, 119, 193, 0.1);
}

/* Playground styles */
.playground {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  gap: 2.4rem;
}

.playground-accordion,
.playground-group {
  width: 100%;
  max-width: 600px;
}

.playground-status {
  display: flex;
  justify-content: center;
  gap: 1.6rem;
}

.status-label {
  font-size: 1.4rem;
  color: #666;
  padding: 0.8rem 1.2rem;
  background: #f5f5f5;
  border-radius: 0.4rem;
}

/* Button overrides for demo */
.story-content :deep(.fds-button) {
  margin: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem;
  }

  .variant-grid {
    grid-template-columns: 1fr;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .controls {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>

<docs lang="md">
# FdsAccordion

Collapsible content panels that allow users to show and hide sections of related information. The accordion follows DKFDS v11 specifications and provides accessible expand/collapse functionality with keyboard navigation support.

## Usage

```vue
<template>
  <!-- Basic accordion -->
  <FdsAccordion header="Section Title">
    Content that can be expanded or collapsed
  </FdsAccordion>
  
  <!-- Controlled accordion with v-model -->
  <FdsAccordion 
    v-model="isExpanded" 
    header="Controlled Section"
    @fds.accordion.open="handleOpen"
    @fds.accordion.close="handleClose"
  >
    Controlled content visibility
  </FdsAccordion>
  
  <!-- Accordion group for coordinated behavior -->
  <FdsAccordionGroup>
    <FdsAccordion header="Section 1">Content 1</FdsAccordion>
    <FdsAccordion header="Section 2">Content 2</FdsAccordion>
    <FdsAccordion header="Section 3">Content 3</FdsAccordion>
  </FdsAccordionGroup>
</template>

<script setup>
import { ref } from 'vue'
import { FdsAccordion, FdsAccordionGroup } from '@madsb/dkfds-vue3'

const isExpanded = ref(false)

const handleOpen = () => {
  console.log('Accordion opened')
}

const handleClose = () => {
  console.log('Accordion closed')
}
</script>
```

## Props

### FdsAccordion

| Prop         | Type                                        | Default | Description                                |
| ------------ | ------------------------------------------- | ------- | ------------------------------------------ |
| `header`     | `string`                                    | -       | Accordion header text                      |
| `modelValue` | `boolean`                                   | `false` | Controlled expanded state (v-model)        |
| `headerTag`  | `'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'`       | `'h2'`  | HTML heading tag for semantic structure    |
| `variant`    | `'success' \| 'warning' \| 'error' \| null` | `null`  | Status variant with icon                   |
| `variantText`| `string`                                    | -       | Custom text for status variants            |
| `id`         | `string`                                    | -       | Custom ID (auto-generated if not provided) |

### FdsAccordionGroup

| Prop              | Type      | Default     | Description                              |
| ----------------- | --------- | ----------- | ---------------------------------------- |
| `expandedText`    | `string`  | `'Luk alle'`| Text for bulk collapse button           |
| `collapsedText`   | `string`  | `'Åbn alle'`| Text for bulk expand button             |
| `showBulkButton`  | `boolean` | `true`      | Whether to show bulk control button      |
| `modelValue`      | `boolean` | -           | Controlled bulk expanded state (v-model) |

## Events

### FdsAccordion

| Event                 | Description                           |
| --------------------- | ------------------------------------- |
| `update:modelValue`   | Emitted when expanded state changes   |
| `fds.accordion.open`  | Emitted when accordion opens          |
| `fds.accordion.close` | Emitted when accordion closes         |

### FdsAccordionGroup

| Event               | Description                                   |
| ------------------- | --------------------------------------------- |
| `update:modelValue` | Emitted when bulk expanded state changes     |
| `toggle-all`        | Emitted when bulk toggle button is clicked   |

## Slots

### FdsAccordion

| Slot      | Description                                        |
| --------- | -------------------------------------------------- |
| `default` | Main accordion content                             |
| `header`  | Custom header content (overrides header prop)     |

### FdsAccordionGroup

| Slot      | Description                                        |
| --------- | -------------------------------------------------- |
| `default` | Child accordion components                         |
| `header`  | Custom header content (overrides bulk button)     |

## Accessibility

- Full keyboard navigation support (Tab, Enter, Space)
- Proper ARIA attributes (`aria-expanded`, `aria-controls`, `aria-hidden`)
- Semantic HTML with customizable heading levels
- Screen reader announcements for state changes
- Focus management when expanding/collapsing
- High contrast support for all themes

## Design Guidelines

- Use accordions to organize related content that doesn't need to be visible simultaneously
- Limit the number of accordion sections to avoid overwhelming users
- Use descriptive headers that clearly indicate the content within
- Consider using accordion groups for related sections with bulk controls
- Status variants (success, warning, error) help communicate section state
- Avoid nesting accordions too deeply for better usability

## Themes

The accordion component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with subtle borders and hover states
- **VirkDK**: Business-oriented styling optimized for professional use
- **BorgerDK**: Citizen-oriented styling with enhanced readability
</docs>