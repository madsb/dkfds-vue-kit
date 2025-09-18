# Histoire Story Guidelines for DKFDS Vue 3 Components

This document defines the mandatory requirements and guidelines for creating Histoire stories in the DKFDS Vue 3 component library. All stories MUST adhere to these standards to ensure consistency, accessibility, and quality.

## 📋 Mandatory Requirements

### File Structure and Naming

1. **Location**: All story files MUST be placed in `histoire-site/src/stories/[category]/`
2. **Naming**: Files MUST follow the pattern: `ComponentName.story.vue`
3. **Categories**: Stories MUST be organized into one of these categories:
   - `forms/` - Form structure components (formgroup, label, hint)
   - `input/` - Input components (input, checkbox, radio, dropdown)
   - `navigation/` - Navigation components (breadcrumb, menu, tabs)
   - `feedback/` - User feedback components (alert, toast, modal, spinner)
   - `data-display/` - Data presentation (accordion, card, table, list)
   - `layout/` - Layout components (button, cookie notice, language selector)

### Import Requirements

```vue
<script setup lang="ts">
import { ref } from 'vue' // Required for reactive state
import { FdsComponentName } from '@madsb/dkfds-vue3' // Always use named imports

// Demo state MUST be defined if component has interactions
const demoState = ref(initialValue)
const handleAction = () => {
  // Event handlers for demonstrations
}
</script>
```

### Story Component Structure

```vue
<Story
  title="Category/ComponentName"  <!-- MUST match category structure -->
  :layout="{ type: 'grid', width: '100%' }"  <!-- Required for proper layout -->
  icon="carbon:appropriate-icon"  <!-- MUST use Carbon icon -->
>
```

## 🎯 Story Variant Rules

### Maximum Variants
- **STRICT LIMIT**: 5 variants maximum per component
- **REQUIRED**: Every story MUST include a "Playground" variant

### Required Variant Structure

1. **Variant 1: Showcase** (MANDATORY)
   - Title: "Showcase"
   - Icon: "carbon:grid"
   - Purpose: Display all component variants/types in one view
   - MUST use `variant-grid` class for layout

2. **Variants 2-4: Feature Demonstrations** (3 maximum)
   - Focus on specific features or use cases
   - Each variant MUST have a distinct purpose
   - Avoid overlapping demonstrations

3. **Variant 5: Playground** (MANDATORY)
   - Title: "Playground"
   - Icon: "carbon:game-console"
   - MUST include interactive controls
   - MUST use `:init-state` with all relevant props

### Content Wrapper Requirements

Every variant content MUST be wrapped in:
```vue
<div class="story-content">
  <!-- Component demonstrations -->
</div>
```

## 📐 Typography Rules (10px Base)

### Minimum Font Sizes
- **Body text**: `1.6rem` (16px) - Standard content
- **Hints/Labels**: `1.4rem` (14px) - Absolute minimum for readability
- **NEVER use**: Sizes below `1.4rem` (14px)

### Required CSS Classes

```css
.story-content {
  padding: 2.4rem;
  font-size: 1.6rem; /* MANDATORY: 16px base */
  line-height: 1.5;
}

.section-title {
  font-size: 1.6rem; /* 16px */
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #1a1a1a;
}

.section-subtitle {
  font-size: 1.4rem; /* 14px minimum */
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #333;
}

.story-hint {
  font-size: 1.4rem; /* 14px minimum */
  color: #666;
  margin-top: 1.6rem;
  line-height: 1.6;
}
```

## 🎨 Layout Standards

### Grid Layouts
```css
.variant-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}
```

### Button Groups
```css
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  align-items: center;
}
```

### Responsive Requirements
```css
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem; /* Reduce padding on mobile */
  }
  .variant-grid {
    grid-template-columns: 1fr; /* Single column on mobile */
  }
}
```

## 🎭 Theme Integration

### Global Theme Switcher
- Theme switcher is **automatically provided** in the top-right corner
- **DO NOT** create per-story theme variants
- **DO NOT** include ThemeSwitcher component in individual stories
- **DO** mention theme switching capability in story hints

### Theme-Aware Documentation
Include this note in the first variant's hint:
```vue
<p class="story-hint">
  The [component] follows DKFDS v11 design specifications. Try switching themes using
  the global theme switcher to see how [component] adapts to different contexts.
</p>
```

## ♿ Accessibility Requirements

### ARIA Labels
- Icon-only buttons MUST include `aria-label`
- Form inputs MUST have associated labels
- Complex components MUST include keyboard navigation examples

### Keyboard Navigation
- Include keyboard interaction examples where applicable
- Document supported keyboard shortcuts in story hints

### Example:
```vue
<FdsButton
  variant="primary"
  icon="save"
  icon-only
  aria-label="Save document" <!-- REQUIRED for icon-only -->
/>
```

## 📝 Documentation Block Requirements

Every story MUST include a `<docs>` block with:

```markdown
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

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `propName` | `type` | `default` | Description |

## Events

| Event | Description |
| ----- | ----------- |
| `eventName` | Description |

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

## 🚨 Anti-Patterns (What NOT to Do)

### ❌ DON'T:
1. Create more than 5 variants
2. Include theme switching as a variant
3. Use font sizes below 1.4rem (14px)
4. Forget the `story-content` wrapper
5. Create overly complex demonstrations
6. Include redundant variants
7. Use inline styles (except for demo-specific needs)
8. Forget accessibility attributes
9. Mix component categories
10. Use non-Carbon icons

### ✅ DO:
1. Keep variants focused and purposeful
2. Use the global theme switcher
3. Maintain minimum 1.4rem font size
4. Always wrap content in `story-content`
5. Start simple, build complexity progressively
6. Ensure each variant has unique value
7. Use the provided CSS classes
8. Include comprehensive accessibility features
9. Follow the category structure
10. Use appropriate Carbon icons

## 🎯 Icon Selection Guide

### Category Icons
- **Forms**: `carbon:form`, `carbon:document`
- **Input**: `carbon:text-input`, `carbon:checkbox`, `carbon:radio-button`
- **Navigation**: `carbon:menu`, `carbon:breadcrumb`, `carbon:tabs`
- **Feedback**: `carbon:warning`, `carbon:information`, `carbon:notification`
- **Data Display**: `carbon:table`, `carbon:list`, `carbon:data-view`
- **Layout**: `carbon:grid`, `carbon:template`, `carbon:layout`

### Variant Icons
- **Showcase**: `carbon:grid` (always)
- **States**: `carbon:status-change`
- **Responsive**: `carbon:devices`
- **Icons/Imagery**: `carbon:image`, `carbon:add-alt`
- **Interaction**: `carbon:touch-interaction`
- **Playground**: `carbon:game-console` (always)

## 🏃 Performance Considerations

1. **Limit Demo Complexity**: Don't create demos with 100+ items
2. **Lazy Load Heavy Content**: Use v-if for conditionally heavy content
3. **Optimize Images**: Use appropriate sizes and formats
4. **Avoid Infinite Loops**: Be careful with reactive state updates
5. **Test on Mobile**: Ensure smooth performance on mobile devices

## 📋 Story Creation Checklist

Before submitting a story, ensure:

- [ ] File is in correct category folder
- [ ] Maximum 5 variants (including mandatory Showcase and Playground)
- [ ] All text ≥ 1.4rem (14px)
- [ ] Content wrapped in `story-content` div
- [ ] Includes comprehensive `<docs>` block
- [ ] Uses appropriate Carbon icons
- [ ] Includes accessibility attributes
- [ ] Responsive styles included
- [ ] Theme switching mentioned in first hint
- [ ] Playground has all relevant controls
- [ ] No duplicate or redundant variants
- [ ] Follows progressive complexity pattern

## 🔄 Progressive Complexity Pattern

Structure your variants from simple to complex:

1. **Showcase**: Overview of all types (simplest view)
2. **Basic Feature**: Core functionality demonstration
3. **Advanced Feature**: More complex use cases
4. **Edge Cases**: Special states or behaviors
5. **Playground**: Full interactive control (most complex)

## 📚 Example References

The optimized `Button.story.vue` serves as the reference implementation. When creating new stories:

1. Copy the Button story structure
2. Adapt the variants to your component's features
3. Maintain the same CSS structure
4. Follow the same documentation pattern
5. Keep the same level of quality and attention to detail

## 🚀 Quick Start Template

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { FdsComponentName } from '@madsb/dkfds-vue3'

const demoState = ref(false)
const handleAction = () => {
  demoState.value = !demoState.value
}
</script>

<template>
  <Story title="Category/ComponentName" :layout="{ type: 'grid', width: '100%' }" icon="carbon:icon">
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <!-- Show all variants -->
        </div>
        <p class="story-hint">
          The component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how it adapts to different contexts.
        </p>
      </div>
    </Variant>

    <!-- 2-3 feature variants -->

    <Variant title="Playground" icon="carbon:game-console" :init-state="() => ({ /* props */ })">
      <!-- Interactive playground -->
    </Variant>
  </Story>
</template>

<style scoped>
/* Copy standard styles from Button.story.vue */
</style>

<docs lang="md">
<!-- Documentation following the required structure -->
</docs>
```

---

**Remember**: These guidelines ensure consistency, accessibility, and quality across all component stories. When in doubt, refer to the optimized `Button.story.vue` as the gold standard.