<script setup lang="ts">
import { ref } from 'vue'
import { FdsList, FdsListItem } from '@madsb/dkfds-vue3'

// Demo state
const selectedItem = ref('')
const handleItemClick = (item: string) => {
  selectedItem.value = item
}
</script>

<template>
  <Story title="DataDisplay/List" :layout="{ type: 'grid', width: '100%' }" icon="carbon:list">
    <!-- Showcase all list variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Basic Unordered</h3>
            <FdsList>
              <FdsListItem>First item</FdsListItem>
              <FdsListItem>Second item</FdsListItem>
              <FdsListItem>Third item</FdsListItem>
            </FdsList>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Ordered List</h3>
            <FdsList :ordered="true">
              <FdsListItem>Step one</FdsListItem>
              <FdsListItem>Step two</FdsListItem>
              <FdsListItem>Step three</FdsListItem>
            </FdsList>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Bordered</h3>
            <FdsList variant="bordered">
              <FdsListItem>Bordered item</FdsListItem>
              <FdsListItem>Another item</FdsListItem>
              <FdsListItem>Third item</FdsListItem>
            </FdsList>
          </div>
          <div class="variant-section">
            <h3 class="section-title">No Bullet</h3>
            <FdsList variant="nobullet">
              <FdsListItem>Clean item</FdsListItem>
              <FdsListItem>Another item</FdsListItem>
              <FdsListItem>Final item</FdsListItem>
            </FdsList>
          </div>
        </div>
        <p class="story-hint">
          The list component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how lists adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- List types and nesting -->
    <Variant title="List Types & Nesting" icon="carbon:list-numbered">
      <div class="story-content">
        <div class="list-types-grid">
          <div class="list-example">
            <h3 class="section-subtitle">Nested Unordered Lists</h3>
            <FdsList>
              <FdsListItem>Main topic one</FdsListItem>
              <FdsListItem>
                Main topic two
                <FdsList>
                  <FdsListItem>Subtopic A</FdsListItem>
                  <FdsListItem>Subtopic B</FdsListItem>
                  <FdsListItem>
                    Subtopic C
                    <FdsList>
                      <FdsListItem>Sub-subtopic 1</FdsListItem>
                      <FdsListItem>Sub-subtopic 2</FdsListItem>
                    </FdsList>
                  </FdsListItem>
                </FdsList>
              </FdsListItem>
              <FdsListItem>Main topic three</FdsListItem>
            </FdsList>
          </div>
          
          <div class="list-example">
            <h3 class="section-subtitle">Nested Ordered Lists</h3>
            <FdsList :ordered="true">
              <FdsListItem>Complete the form</FdsListItem>
              <FdsListItem>
                Review your information
                <FdsList :ordered="true">
                  <FdsListItem>Check personal details</FdsListItem>
                  <FdsListItem>Verify contact information</FdsListItem>
                  <FdsListItem>Confirm address</FdsListItem>
                </FdsList>
              </FdsListItem>
              <FdsListItem>Submit application</FdsListItem>
            </FdsList>
          </div>
        </div>

        <div class="divider" />

        <h3 class="section-subtitle">Mixed List Types</h3>
        <FdsList>
          <FdsListItem>Available services:</FdsListItem>
          <FdsListItem>
            Digital services
            <FdsList :ordered="true">
              <FdsListItem>Online application</FdsListItem>
              <FdsListItem>Document upload</FdsListItem>
              <FdsListItem>Status tracking</FdsListItem>
            </FdsList>
          </FdsListItem>
          <FdsListItem>Contact options</FdsListItem>
        </FdsList>
        
        <p class="story-hint">Lists can be nested and mixed to create complex content hierarchies.</p>
      </div>
    </Variant>

    <!-- Interactive list with states -->
    <Variant title="List Items with States" icon="carbon:status-change">
      <div class="story-content">
        <div class="states-demo">
          <h3 class="section-subtitle">Navigation List with States</h3>
          <FdsList variant="nobullet">
            <FdsListItem>
              <a href="#home">Home</a>
            </FdsListItem>
            <FdsListItem variant="current">
              <span>Current Page</span>
            </FdsListItem>
            <FdsListItem>
              <a href="#services">Services</a>
            </FdsListItem>
            <FdsListItem variant="active">
              <a href="#active">Active Link</a>
            </FdsListItem>
            <FdsListItem variant="disabled">
              <span>Disabled Item</span>
            </FdsListItem>
          </FdsList>
        </div>

        <div class="divider" />

        <div class="states-demo">
          <h3 class="section-subtitle">Interactive List Items</h3>
          <FdsList variant="bordered">
            <FdsListItem 
              :flex="true" 
              :justify-between="true"
              style="cursor: pointer; padding: 1.2rem;"
              @click="handleItemClick('dashboard')"
              :class="{ active: selectedItem === 'dashboard' }"
            >
              <span>Dashboard</span>
              <span v-if="selectedItem === 'dashboard'">✓</span>
            </FdsListItem>
            <FdsListItem 
              :flex="true" 
              :justify-between="true"
              style="cursor: pointer; padding: 1.2rem;"
              @click="handleItemClick('profile')"
              :class="{ active: selectedItem === 'profile' }"
            >
              <span>Profile Settings</span>
              <span v-if="selectedItem === 'profile'">✓</span>
            </FdsListItem>
            <FdsListItem 
              :flex="true" 
              :justify-between="true"
              style="cursor: pointer; padding: 1.2rem;"
              @click="handleItemClick('notifications')"
              :class="{ active: selectedItem === 'notifications' }"
            >
              <span>Notifications</span>
              <span v-if="selectedItem === 'notifications'">✓</span>
            </FdsListItem>
          </FdsList>
          <p class="story-hint">Selected: {{ selectedItem || 'None' }}</p>
        </div>
      </div>
    </Variant>

    <!-- Layout and styling variants -->
    <Variant title="Layout & Styling" icon="carbon:layout">
      <div class="story-content">
        <div class="layout-examples">
          <div class="layout-example">
            <h3 class="section-subtitle">Flex Layout with Content</h3>
            <FdsList variant="bordered">
              <FdsListItem :flex="true" :justify-between="true">
                <div>
                  <strong>Application #12345</strong>
                  <div style="font-size: 1.4rem; color: #666;">Submitted 2024-01-15</div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.8rem;">
                  <span style="color: #28a745; font-size: 1.4rem;">Approved</span>
                  <button style="padding: 0.4rem 0.8rem; font-size: 1.2rem;">View</button>
                </div>
              </FdsListItem>
              <FdsListItem :flex="true" :justify-between="true">
                <div>
                  <strong>Application #12346</strong>
                  <div style="font-size: 1.4rem; color: #666;">Submitted 2024-01-16</div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.8rem;">
                  <span style="color: #ffc107; font-size: 1.4rem;">Pending</span>
                  <button style="padding: 0.4rem 0.8rem; font-size: 1.2rem;">View</button>
                </div>
              </FdsListItem>
            </FdsList>
          </div>

          <div class="layout-example">
            <h3 class="section-subtitle">Unstyled for Custom Design</h3>
            <FdsList variant="unstyled" :no-top-margin="true">
              <FdsListItem role="none">
                <div class="custom-card">
                  <h4 style="margin: 0 0 0.8rem 0; font-size: 1.6rem;">Custom Card 1</h4>
                  <p style="margin: 0; color: #666; font-size: 1.4rem;">Custom styled content without default list styling.</p>
                </div>
              </FdsListItem>
              <FdsListItem role="none">
                <div class="custom-card">
                  <h4 style="margin: 0 0 0.8rem 0; font-size: 1.6rem;">Custom Card 2</h4>
                  <p style="margin: 0; color: #666; font-size: 1.4rem;">Another card with custom styling.</p>
                </div>
              </FdsListItem>
            </FdsList>
          </div>
        </div>

        <div class="divider" />

        <h3 class="section-subtitle">Overflow Menu Style</h3>
        <FdsList variant="overflow" style="max-width: 200px; border: 1px solid #ddd;">
          <FdsListItem style="padding: 0.8rem 1.2rem; cursor: pointer;" @click="handleItemClick('edit')">
            <span>Edit</span>
          </FdsListItem>
          <FdsListItem style="padding: 0.8rem 1.2rem; cursor: pointer;" @click="handleItemClick('duplicate')">
            <span>Duplicate</span>
          </FdsListItem>
          <FdsListItem style="padding: 0.8rem 1.2rem; cursor: pointer;" @click="handleItemClick('delete')">
            <span style="color: #dc3545;">Delete</span>
          </FdsListItem>
        </FdsList>

        <p class="story-hint">Lists support various layouts and styling options for different use cases.</p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          variant: null,
          ordered: false,
          noTopMargin: false,
          noBottomMargin: false,
          itemVariant: null,
          flex: false,
          justifyBetween: false,
          itemCount: 3,
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <FdsList
            :variant="state.variant"
            :ordered="state.ordered"
            :no-top-margin="state.noTopMargin"
            :no-bottom-margin="state.noBottomMargin"
          >
            <FdsListItem
              v-for="i in state.itemCount"
              :key="i"
              :variant="state.itemVariant"
              :flex="state.flex"
              :justify-between="state.justifyBetween"
            >
              <span>List item {{ i }}</span>
              <span v-if="state.flex && state.justifyBetween">→</span>
            </FdsListItem>
          </FdsList>
        </div>
      </template>

      <template #controls="{ state }">
        <HstSelect
          v-model="state.variant"
          title="List Variant"
          :options="[
            { value: null, label: 'Default' },
            { value: 'bordered', label: 'Bordered' },
            { value: 'unstyled', label: 'Unstyled' },
            { value: 'nobullet', label: 'No Bullet' },
            { value: 'overflow', label: 'Overflow' },
          ]"
        />

        <HstCheckbox v-model="state.ordered" title="Ordered List (ol)" />

        <HstCheckbox v-model="state.noTopMargin" title="No Top Margin" />

        <HstCheckbox v-model="state.noBottomMargin" title="No Bottom Margin" />

        <HstSelect
          v-model="state.itemVariant"
          title="Item Variant"
          :options="[
            { value: null, label: 'Default' },
            { value: 'current', label: 'Current' },
            { value: 'active', label: 'Active' },
            { value: 'disabled', label: 'Disabled' },
          ]"
        />

        <HstCheckbox v-model="state.flex" title="Flex Layout" />

        <HstCheckbox 
          v-model="state.justifyBetween" 
          title="Justify Between" 
          :disabled="!state.flex"
        />

        <HstNumber
          v-model="state.itemCount"
          title="Number of Items"
          :min="1"
          :max="10"
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.variant-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.list-types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3.2rem;
  margin-bottom: 2.4rem;
}

.list-example {
  display: flex;
  flex-direction: column;
}

.states-demo {
  margin-bottom: 2.4rem;
}

.layout-examples {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.layout-example {
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
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

/* Custom card styling for unstyled list example */
.custom-card {
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 0.4rem;
  padding: 1.6rem;
  margin-bottom: 1.2rem;
}

/* Interactive list item styling */
.story-content :deep(li.active) {
  background-color: #e3f2fd;
  font-weight: 600;
}

/* Ensure proper list styling */
.story-content :deep(ul),
.story-content :deep(ol) {
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

  .list-types-grid {
    grid-template-columns: 1fr;
  }

  .layout-examples {
    gap: 1.6rem;
  }
}
</style>

<docs lang="md">
# FdsList & FdsListItem

Flexible list components implementing DKFDS v11 specifications for organizing and displaying content in ordered or unordered lists. Supports multiple visual variants, nesting, and flexible layouts for different design contexts.

## Usage

```vue
<template>
  <!-- Basic unordered list -->
  <FdsList>
    <FdsListItem>First item</FdsListItem>
    <FdsListItem>Second item</FdsListItem>
    <FdsListItem>Third item</FdsListItem>
  </FdsList>

  <!-- Ordered list with numbering -->
  <FdsList :ordered="true">
    <FdsListItem>Step one</FdsListItem>
    <FdsListItem>Step two</FdsListItem>
    <FdsListItem>Step three</FdsListItem>
  </FdsList>

  <!-- Bordered list with flex items -->
  <FdsList variant="bordered">
    <FdsListItem :flex="true" :justify-between="true">
      <span>Item name</span>
      <button>Action</button>
    </FdsListItem>
  </FdsList>
</template>

<script setup>
import { FdsList, FdsListItem } from '@madsb/dkfds-vue3'
</script>
```

## Props

### FdsList Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `variant` | `'bordered' \| 'unstyled' \| 'nobullet' \| 'overflow' \| null` | `null` | Visual variant controlling list appearance |
| `ordered` | `boolean` | `false` | Render as ordered list (ol) with numbering |
| `noTopMargin` | `boolean` | `false` | Remove top margin for tight layouts |
| `noBottomMargin` | `boolean` | `false` | Remove bottom margin for tight layouts |

### FdsListItem Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `variant` | `'current' \| 'active' \| 'disabled'` | - | Visual state of the list item |
| `role` | `'none'` | - | ARIA role for accessibility customization |
| `flex` | `boolean` | `false` | Apply flexbox layout to the item |
| `justifyBetween` | `boolean` | `false` | Apply justify-content-between (requires flex) |

## Events

Both components inherit standard DOM events through `v-bind="$attrs"`.

## Accessibility

- Use ordered lists (`ordered="true"`) for sequential content like steps or rankings
- Use unordered lists for general collections of items
- The `current` variant indicates the current page/section in navigation
- Use `role="none"` on list items when removing list semantics for custom layouts
- Ensure adequate color contrast for all list variants
- Support keyboard navigation for interactive list items

## Design Guidelines

- **Basic lists**: Use default styling for simple content organization
- **Bordered lists**: Use for structured content that needs visual separation
- **No bullet lists**: Use for navigation menus or clean layouts
- **Overflow lists**: Use for dropdown menus and overflow contexts
- **Nested lists**: Support hierarchical content with proper indentation
- **Flex layouts**: Use for complex content arrangements within list items

## List Variants

- **Default**: Standard bullet points or numbers with DKFDS spacing
- **Bordered**: Adds borders between items for structured content
- **Unstyled**: Removes all default styling for custom designs
- **No bullet**: Removes bullets/numbers while maintaining semantics
- **Overflow**: Optimized for dropdown and menu contexts

## Item States

- **Default**: Standard list item appearance
- **Current**: Indicates the current page or active section
- **Active**: Highlights selected or focused items
- **Disabled**: Shows inactive or unavailable items

## Themes

The list components automatically adapt to the selected theme:
- **Default**: Standard DKFDS styling with proper spacing and typography
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
</docs>