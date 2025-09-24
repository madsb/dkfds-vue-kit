<script setup lang="ts">
import { ref } from 'vue'
import { FdsAccordion, FdsAccordionGroup } from '@madsb/dkfds-vue-kit'

// Demo state
const demoExpanded = ref(false)
const demoGroupExpanded = ref(false)
</script>

<template>
  <Story title="Data Display/Accordion" icon="carbon:data-view">
    <!-- Showcase all accordion variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row mb-5">
          <div class="col-12">
            <h3 class="h5 mb-4 mt-0">Basic Accordion</h3>
            <FdsAccordion header="Basic Information">
              <p>
                This is the basic accordion content. It can contain any type of content including
                text, images, or other components.
              </p>
            </FdsAccordion>
          </div>
        </div>

        <div class="row mb-5">
          <div class="col-12">
            <h3 class="h5 mb-4">With Status Icons</h3>
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
        </div>

        <div class="row mb-5">
          <div class="col-12">
            <h3 class="h5 mb-4">Accordion Group</h3>
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

        <p class="mt-4 mb-0">
          The Accordion component follows DKFDS v11 design specifications. Try switching themes
          using the global theme switcher to see how accordions adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Group features and bulk controls -->
    <Variant title="Group Controls" icon="carbon:list">
      <div class="container py-6">
        <div>
          <h3 class="h5 mb-4">With Bulk Controls</h3>
          <FdsAccordionGroup
            v-model="demoGroupExpanded"
            expanded-text="Fold alle sammen"
            collapsed-text="Udvid alle"
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

        <hr class="my-6" />

        <div>
          <h3 class="h5 mb-4">Without Bulk Button</h3>
          <FdsAccordionGroup :show-bulk-button="false">
            <FdsAccordion header="Privacy Policy">
              <p>Details about how we collect and use your personal data.</p>
            </FdsAccordion>
            <FdsAccordion header="Terms of Service">
              <p>Legal terms and conditions for using our service.</p>
            </FdsAccordion>
          </FdsAccordionGroup>
        </div>

        <p class="mt-4 mb-0">
          Accordion groups provide coordinated behavior. The bulk control button allows users to
          expand or collapse all sections at once.
        </p>
      </div>
    </Variant>

    <!-- Controlled state -->
    <Variant title="Controlled State" icon="carbon:touch-interaction">
      <div class="container py-6">
        <div>
          <div class="mb-4 d-flex align-items-center justify-content-between">
            <button class="fds-button--primary mr-4" @click="demoExpanded = !demoExpanded">
              {{ demoExpanded ? 'Collapse' : 'Expand' }} Accordion
            </button>
            <span>State: {{ demoExpanded ? 'Expanded' : 'Collapsed' }}</span>
          </div>

          <FdsAccordion v-model="demoExpanded" header="Controlled Accordion">
            <p>
              This accordion's expanded state is controlled by external buttons and v-model binding.
            </p>
          </FdsAccordion>
        </div>

        <p class="mt-4 mb-0">
          Use v-model for two-way binding and listen to fds.accordion.open/close events for custom
          behavior. Keyboard navigation is supported with Tab, Enter, and Space keys.
        </p>
      </div>
    </Variant>

    <!-- Custom content examples -->
    <Variant title="Custom Content" icon="carbon:document">
      <div class="container py-6">
        <div>
          <FdsAccordion>
            <template #header>
              <span>Custom Header with <strong>Rich Formatting</strong> and <em>Emphasis</em></span>
            </template>
            <div>
              <h4>Rich Content Example</h4>
              <p>Accordions can contain any type of content:</p>
              <ul>
                <li>Lists and structured data</li>
                <li>Form fields and inputs</li>
                <li>Images and media</li>
                <li>Other components</li>
              </ul>
              <div>
                <div>
                  <h5>Card 1</h5>
                  <p>Nested content example</p>
                </div>
                <div>
                  <h5>Card 2</h5>
                  <p>Multiple columns work well</p>
                </div>
              </div>
            </div>
          </FdsAccordion>

          <FdsAccordion header="Form Example" variant="warning" variant-text="Required">
            <form>
              <div class="form-group">
                <label for="demo-name" class="form-label">Name:</label>
                <input
                  id="demo-name"
                  type="text"
                  class="form-input"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form-group">
                <label for="demo-email" class="form-label">Email:</label>
                <input
                  id="demo-email"
                  type="email"
                  class="form-input"
                  placeholder="Enter your email"
                />
              </div>
              <button type="button" class="fds-button--secondary">Save Information</button>
            </form>
          </FdsAccordion>
        </div>

        <p class="mt-4 mb-0">
          Accordions support rich content including forms, media, and custom HTML. Use the header
          slot for custom header formatting.
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
          content:
            'This is the accordion content. You can customize all properties using the controls.',
          showGroup: false,
          showBulkButton: true,
          expandedText: 'Luk alle',
          collapsedText: 'Åbn alle',
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <div v-if="!state.showGroup">
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

          <div v-else>
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

          <div>
            <span>Expanded: {{ state.expanded ? 'Yes' : 'No' }}</span>
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
            { value: 'error', label: 'Error' },
          ]"
        />

        <HstText v-model="state.variantText" title="Variant Text" :disabled="!state.variant" />

        <HstSelect
          v-model="state.headerTag"
          title="Header Tag"
          :options="[
            { value: 'h2', label: 'h2' },
            { value: 'h3', label: 'h3' },
            { value: 'h4', label: 'h4' },
            { value: 'h5', label: 'h5' },
            { value: 'h6', label: 'h6' },
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
