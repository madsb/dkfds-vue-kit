# Histoire Story Template for DKFDS Vue 3 Components

This template provides the optimized structure for creating component stories in Histoire.

## Key Principles

1. **5 Focused Variants Maximum**: Keep stories concise and purposeful
2. **Progressive Complexity**: Start simple, build to complex use cases
3. **Proper Typography**: Use rem units with 10px base (min 1.4rem for text)
4. **Global Theme Switcher**: Already available in top-right corner
5. **Accessibility Focus**: Include ARIA examples where relevant

## Template Structure

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { FdsComponentName } from '@madsb/dkfds-vue3'

// Demo state and handlers
const demoState = ref(/* initial state */)
const handleAction = () => {
  // Handle interactions
}
</script>

<template>
  <Story
    title="Category/ComponentName"
    :layout="{ type: 'grid', width: '100%' }"
    icon="carbon:appropriate-icon"
  >
    <!-- Variant 1: Showcase - All variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <!-- Show all main variants/types -->
        </div>
        <p class="story-hint">
          Brief description of the component and theme switching capability.
        </p>
      </div>
    </Variant>

    <!-- Variant 2-4: Feature-specific demonstrations -->
    <Variant title="Feature Name" icon="carbon:appropriate-icon">
      <div class="story-content">
        <!-- Focused demonstration of specific feature -->
        <p class="story-hint">
          Helpful context or usage notes.
        </p>
      </div>
    </Variant>

    <!-- Variant 5: Interactive Playground (always include) -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="() => ({
        // Initial state for controls
        prop1: 'default value',
        prop2: false,
        prop3: 'option1'
      })"
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <FdsComponentName
            :prop1="state.prop1"
            :prop2="state.prop2"
            :prop3="state.prop3"
            @event="handleAction"
          >
            <!-- Content -->
          </FdsComponentName>
        </div>
      </template>

      <template #controls="{ state }">
        <!-- Histoire controls for interactive playground -->
        <HstText v-model="state.prop1" title="Property 1" />
        <HstCheckbox v-model="state.prop2" title="Property 2" />
        <HstSelect
          v-model="state.prop3"
          title="Property 3"
          :options="[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
          ]"
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.4rem;
  margin-bottom: 2.4rem;
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

/* Component-specific styles */
/* Add any component-specific styles here */

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem;
  }

  .variant-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<docs lang="md">
# FdsComponentName

Brief description of the component and its purpose in DKFDS.

## Usage

```vue
<template>
  <FdsComponentName prop="value">
    Content
  </FdsComponentName>
</template>

<script setup>
import { FdsComponentName } from '@madsb/dkfds-vue3'
</script>
```

## Props

| Prop   | Type   | Default | Description |
| ------ | ------ | ------- | ----------- |
| `prop` | `type` | -       | Description |

## Events

| Event   | Description |
| ------- | ----------- |
| `event` | Description |

## Accessibility

- Key accessibility considerations
- ARIA requirements
- Keyboard navigation details

## Design Guidelines

- When to use this component
- Best practices
- Common patterns

## Themes

The component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
</docs>
```

## Variant Ideas by Component Type

### Form Components
1. **Showcase**: All states and variations
2. **Validation**: Error states and messages
3. **Interaction**: Focus, disabled, readonly states
4. **Layout**: Different form layouts
5. **Playground**: Interactive controls

### Navigation Components
1. **Showcase**: All navigation types
2. **Responsive**: Mobile vs desktop behavior
3. **States**: Active, hover, focus states
4. **Nested**: Sub-navigation examples
5. **Playground**: Interactive controls

### Data Display Components
1. **Showcase**: Different display modes
2. **Content Types**: Various content examples
3. **Interactive**: Expandable, sortable features
4. **Responsive**: Mobile adaptations
5. **Playground**: Interactive controls

### Feedback Components
1. **Showcase**: All feedback types
2. **States**: Success, warning, error, info
3. **Actions**: Dismissible, actionable feedback
4. **Positioning**: Different positions/layouts
5. **Playground**: Interactive controls

## Font Size Quick Reference (10px base)

- `1.2rem` = 12px (too small, avoid)
- `1.4rem` = 14px (minimum for body text)
- `1.6rem` = 16px (standard body text)
- `1.8rem` = 18px (large text)
- `2.0rem` = 20px (small headings)
- `2.4rem` = 24px (headings)

## Icon Selection Guide

Use Carbon icons that best represent the component:
- Forms: `carbon:text-input`, `carbon:checkbox`, `carbon:radio-button`
- Navigation: `carbon:menu`, `carbon:breadcrumb`, `carbon:tabs`
- Data: `carbon:table`, `carbon:list`, `carbon:data-table`
- Feedback: `carbon:warning`, `carbon:information`, `carbon:checkmark-filled`
- Layout: `carbon:grid`, `carbon:column`, `carbon:template`

## Best Practices

1. **Keep it Simple**: Don't over-demonstrate - show key features clearly
2. **Real-World Examples**: Use realistic content and scenarios
3. **Progressive Disclosure**: Start with basics, add complexity in later variants
4. **Accessibility First**: Always include proper ARIA labels and keyboard support
5. **Theme Awareness**: Mention theme adaptability in descriptions
6. **Mobile Consideration**: Test and document mobile behavior
7. **Performance**: Don't create overly complex demos that slow down the browser