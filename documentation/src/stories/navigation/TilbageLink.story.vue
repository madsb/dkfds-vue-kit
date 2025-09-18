<script setup lang="ts">
import { ref } from 'vue'
import { FdsTilbageLink } from '@madsb/dkfds-vue3'

// Demo state
const clickCount = ref(0)
const handleClick = () => {
  clickCount.value++
}

const handleRouterExample = () => {
  console.log('Router navigation (would call $router.go(-1))')
  clickCount.value++
}

const handleCustomNavigation = (event: MouseEvent) => {
  console.log('Custom navigation logic')
  event.preventDefault()
  clickCount.value++
}
</script>

<template>
  <Story title="Navigation/TilbageLink" :layout="{ type: 'grid', width: '100%' }" icon="carbon:arrow-left">
    <!-- Showcase all tilbage link variants -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Default (Tilbage)</h3>
            <FdsTilbageLink @click="handleClick" />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Custom Text</h3>
            <FdsTilbageLink @click="handleClick">Tilbage til oversigt</FdsTilbageLink>
          </div>
          <div class="variant-section">
            <h3 class="section-title">With Href</h3>
            <FdsTilbageLink href="/previous-page" @click="handleClick">Tilbage til forrige trin</FdsTilbageLink>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Long Text</h3>
            <FdsTilbageLink @click="handleClick">Tilbage til ansøgningsoversigten</FdsTilbageLink>
          </div>
        </div>
        <p class="story-hint">
          The tilbage link follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how the tilbage link adapts to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Navigation patterns -->
    <Variant title="Navigation Patterns" icon="carbon:direction-left-01">
      <div class="story-content">
        <h3 class="section-subtitle">Browser History Navigation</h3>
        <FdsTilbageLink @click="handleRouterExample">Tilbage</FdsTilbageLink>
        <p class="pattern-description">Use with router.go(-1) or history.back() for browser navigation</p>

        <div class="divider" />

        <h3 class="section-subtitle">Custom Navigation Logic</h3>
        <FdsTilbageLink @click="handleCustomNavigation">Tilbage til start</FdsTilbageLink>
        <p class="pattern-description">Implement custom logic in the click handler</p>

        <div class="divider" />

        <h3 class="section-subtitle">Direct URL Navigation</h3>
        <FdsTilbageLink href="/dashboard">Tilbage til dashboard</FdsTilbageLink>
        <p class="pattern-description">Use href prop for direct URL navigation</p>

        <p class="story-hint">
          Click count: {{ clickCount }}. Position tilbage links at the top left of the page, 
          immediately under the header. Do not use with breadcrumbs as they serve similar purposes.
        </p>
      </div>
    </Variant>

    <!-- Usage contexts -->
    <Variant title="Usage Contexts" icon="carbon:flow">
      <div class="story-content">
        <div class="context-examples">
          <div class="context-example">
            <h3 class="section-subtitle">Multi-step Process</h3>
            <FdsTilbageLink @click="handleClick">Tilbage til trin 2</FdsTilbageLink>
            <p class="context-description">Navigate backwards in forms or wizards</p>
          </div>

          <div class="context-example">
            <h3 class="section-subtitle">Detail to List View</h3>
            <FdsTilbageLink @click="handleClick">Tilbage til søgeresultater</FdsTilbageLink>
            <p class="context-description">Return from detail view to listing page</p>
          </div>

          <div class="context-example">
            <h3 class="section-subtitle">Error Recovery</h3>
            <FdsTilbageLink @click="handleClick">Tilbage til sikker side</FdsTilbageLink>
            <p class="context-description">Provide safe navigation from error states</p>
          </div>
        </div>

        <p class="story-hint">
          Tilbage links are most effective in task-oriented workflows and hierarchical navigation.
          They provide a consistent way for users to backtrack through connected page sequences.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          text: 'Tilbage',
          href: 'javascript:void(0);',
          useHref: false,
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <FdsTilbageLink
            :href="state.useHref ? state.href : 'javascript:void(0);'"
            @click="handleClick"
          >
            {{ state.text }}
          </FdsTilbageLink>
          <p class="story-hint">Click count: {{ clickCount }}</p>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.text" title="Link Text" />
        
        <HstCheckbox v-model="state.useHref" title="Use Href (instead of click handler)" />
        
        <HstText 
          v-model="state.href" 
          title="Href URL" 
          :disabled="!state.useHref"
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

.pattern-description,
.context-description {
  font-size: 1.4rem; /* 14px */
  color: #666;
  margin-top: 0.8rem;
  margin-bottom: 1.6rem;
  font-style: italic;
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

.context-examples {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.context-example {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
# FdsTilbageLink

The tilbage link component provides consistent back navigation for multi-step processes and connected page sequences. It follows DKFDS v11 specifications with a chevron icon and customizable text.

## Usage

```vue
<template>
  <FdsTilbageLink @click="goBack">
    Tilbage til oversigt
  </FdsTilbageLink>
</template>

<script setup>
import { FdsTilbageLink } from '@madsb/dkfds-vue3'

const goBack = () => {
  // Custom back navigation logic
  // router.go(-1) or history.back()
}
</script>
```

## Props

| Prop   | Type     | Default                 | Description                                                    |
| ------ | -------- | ----------------------- | -------------------------------------------------------------- |
| `href` | `string` | `'javascript:void(0);'` | Link destination URL. Defaults to void to use click handler   |

## Events

| Event   | Description                                                           |
| ------- | --------------------------------------------------------------------- |
| `click` | Emitted when the tilbage link is clicked. Receives MouseEvent object |

## Accessibility

- The component includes proper semantic markup with anchor element
- Uses decorative chevron icon that doesn't interfere with screen readers
- Supports keyboard navigation (Tab, Enter) as standard link behavior
- Link text should be descriptive of the destination or action

## Design Guidelines

- Position tilbage links at the top left of the page, immediately under the header
- Use for multi-step processes, wizards, and hierarchical navigation
- **Do not use with breadcrumbs** - they serve similar navigation purposes
- Text should be concise but descriptive of the back destination
- Most effective in task-oriented workflows and connected page sequences

### When to Use

- Multi-step forms or wizards (e.g., "Tilbage til trin 2")
- Detail views that came from list views (e.g., "Tilbage til søgeresultater")
- Error recovery navigation (e.g., "Tilbage til sikker side")
- Task completion flows

### When NOT to Use

- On pages that already have breadcrumb navigation
- As the primary navigation method
- For unrelated page navigation (use regular links instead)

## Themes

The tilbage link automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with blue chevron and text
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
</docs>