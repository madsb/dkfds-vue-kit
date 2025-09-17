<script setup lang="ts">
import { ref } from 'vue'
import { FdsBreadcrumb } from '@madsb/dkfds-vue3'
import type { BreadcrumbItem } from '@madsb/dkfds-vue3'

// Demo state for interaction tracking
const clickCount = ref(0)
const lastClickedItem = ref<string | null>(null)

// Handle breadcrumb clicks
const handleBreadcrumbClick = (event: MouseEvent, item: BreadcrumbItem, index: number) => {
  clickCount.value++
  lastClickedItem.value = `${item.text} (index ${index})`
  console.log('Breadcrumb clicked:', item)
}

// Sample breadcrumb data sets
const basicItems: BreadcrumbItem[] = [
  { text: 'Forside', href: '/' },
  { text: 'Komponenter', href: '/komponenter' },
  { text: 'Brødkrumme' },
]

const shortPath: BreadcrumbItem[] = [
  { text: 'Hjem', href: '/' },
  { text: 'Aktuel side' },
]

const mediumPath: BreadcrumbItem[] = [
  { text: 'Forside', href: '/' },
  { text: 'Borgerservice', href: '/borger' },
  { text: 'Ansøgninger', href: '/borger/ansogninger' },
  { text: 'Byggetilladelse', href: '/borger/ansogninger/byg' },
  { text: 'Ansøgningsformular' },
]

const longPath: BreadcrumbItem[] = [
  { text: 'Forside', href: '/' },
  { text: 'Virksomhed', href: '/virk' },
  { text: 'Registrering og tilladelser', href: '/virk/registrering' },
  { text: 'Miljøgodkendelser', href: '/virk/registrering/miljoe' },
  { text: 'Ansøgning om miljøgodkendelse', href: '/virk/registrering/miljoe/ansogning' },
  { text: 'Virksomhedsoplysninger', href: '/virk/registrering/miljoe/ansogning/oplysninger' },
  { text: 'Kontaktinformation' },
]

const routerItems: BreadcrumbItem[] = [
  { text: 'Forside', to: '/' },
  { text: 'Bruger', to: { name: 'user', params: { id: '123' } } },
  { text: 'Profil', to: '/user/123/profile' },
  { text: 'Indstillinger' },
]

const externalItems: BreadcrumbItem[] = [
  { text: 'Borger.dk', href: 'https://borger.dk', external: true },
  { text: 'Min side', href: '/min-side' },
  { text: 'Mine data' },
]
</script>

<template>
  <Story
    title="Navigation/Breadcrumb"
    :layout="{ type: 'grid', width: '100%' }"
    icon="carbon:breadcrumb"
  >
    <!-- Showcase all breadcrumb variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Short Path</h3>
            <FdsBreadcrumb :items="shortPath" />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Basic Path</h3>
            <FdsBreadcrumb :items="basicItems" />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Medium Path</h3>
            <FdsBreadcrumb :items="mediumPath" />
          </div>
          <div class="variant-section">
            <h3 class="section-title">With Container</h3>
            <FdsBreadcrumb :items="basicItems" :container="true" />
          </div>
        </div>
        <p class="story-hint">
          Breadcrumb navigation follows DKFDS v11 design specifications with chevron separators and proper semantic structure. The last item is automatically marked as the current page and rendered without a link. Try switching themes using the global theme switcher to see how breadcrumbs adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Different path lengths and structures -->
    <Variant title="Path Lengths" icon="carbon:tree-view">
      <div class="story-content">
        <div class="path-examples">
          <div class="path-example">
            <h3 class="section-subtitle">Short (2 levels)</h3>
            <FdsBreadcrumb :items="shortPath" @item-click="handleBreadcrumbClick" />
          </div>
          
          <div class="path-example">
            <h3 class="section-subtitle">Medium (5 levels)</h3>
            <FdsBreadcrumb :items="mediumPath" @item-click="handleBreadcrumbClick" />
          </div>
          
          <div class="path-example">
            <h3 class="section-subtitle">Long (7 levels)</h3>
            <FdsBreadcrumb :items="longPath" @item-click="handleBreadcrumbClick" />
          </div>
        </div>
        
        <div v-if="clickCount > 0" class="interaction-feedback">
          <p class="story-hint">
            Clicks: {{ clickCount }} | Last clicked: {{ lastClickedItem }}
          </p>
        </div>
        
        <p class="story-hint">
          Breadcrumbs automatically handle different path lengths. Long paths wrap naturally on mobile devices while maintaining proper semantic structure and accessibility.
        </p>
      </div>
    </Variant>

    <!-- Router integration and link types -->
    <Variant title="Link Types" icon="carbon:link">
      <div class="story-content">
        <div class="link-examples">
          <div class="link-example">
            <h3 class="section-subtitle">Native Links (href)</h3>
            <FdsBreadcrumb :items="basicItems" @item-click="handleBreadcrumbClick" />
            <p class="example-note">Standard anchor tags with href attributes</p>
          </div>
          
          <div class="link-example">
            <h3 class="section-subtitle">Vue Router Links (to)</h3>
            <FdsBreadcrumb :items="routerItems" @item-click="handleBreadcrumbClick" />
            <p class="example-note">Uses router-link when 'to' property is present</p>
          </div>
          
          <div class="link-example">
            <h3 class="section-subtitle">Mixed External/Internal</h3>
            <FdsBreadcrumb :items="externalItems" @item-click="handleBreadcrumbClick" />
            <p class="example-note">External links open in new tab with proper rel attributes</p>
          </div>
          
          <div class="link-example">
            <h3 class="section-subtitle">Force Native Links</h3>
            <FdsBreadcrumb :items="routerItems" :use-native-links="true" @item-click="handleBreadcrumbClick" />
            <p class="example-note">Uses anchor tags even when Vue Router is available</p>
          </div>
        </div>
        
        <p class="story-hint">
          The component automatically detects Vue Router and uses router-link when appropriate. External links are properly marked and opened in new tabs.
        </p>
      </div>
    </Variant>

    <!-- Accessibility features -->
    <Variant title="Accessibility" icon="carbon:accessibility">
      <div class="story-content">
        <div class="accessibility-examples">
          <div class="accessibility-example">
            <h3 class="section-subtitle">Default Danish Label</h3>
            <FdsBreadcrumb :items="basicItems" />
            <p class="example-note">aria-label="Brødkrumme" (default)</p>
          </div>
          
          <div class="accessibility-example">
            <h3 class="section-subtitle">Custom ARIA Label</h3>
            <FdsBreadcrumb :items="basicItems" aria-label="Navigationssti" />
            <p class="example-note">Custom aria-label for different contexts</p>
          </div>
          
          <div class="accessibility-example">
            <h3 class="section-subtitle">English Context</h3>
            <FdsBreadcrumb 
              :items="[{ text: 'Home', href: '/' }, { text: 'Services', href: '/services' }, { text: 'Current Page' }]"
              aria-label="Breadcrumb navigation"
            />
            <p class="example-note">Proper English labeling for international use</p>
          </div>
        </div>
        
        <div class="accessibility-info">
          <h3 class="section-subtitle">Accessibility Features</h3>
          <ul class="feature-list">
            <li>Semantic <code>&lt;nav&gt;</code> landmark with descriptive aria-label</li>
            <li>Ordered list <code>&lt;ol&gt;</code> structure for proper hierarchy</li>
            <li>Current page marked with <code>aria-current="page"</code></li>
            <li>Decorative chevron icons with <code>aria-hidden="true"</code></li>
            <li>Full keyboard navigation support (Tab, Enter)</li>
            <li>Screen reader friendly text and structure</li>
          </ul>
        </div>
        
        <p class="story-hint">
          Test with keyboard navigation: Use Tab to navigate between breadcrumb links, Enter to activate. Screen readers will announce the navigation structure and current page properly.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          pathLength: 'basic',
          ariaLabel: 'Brødkrumme',
          container: false,
          useNativeLinks: false,
          includeExternal: false,
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <FdsBreadcrumb
            :items="getPlaygroundItems(state)"
            :aria-label="state.ariaLabel"
            :container="state.container"
            :use-native-links="state.useNativeLinks"
            @item-click="handleBreadcrumbClick"
          />
          
          <div v-if="clickCount > 0" class="playground-feedback">
            <p class="story-hint">
              Interactions: {{ clickCount }} | Last: {{ lastClickedItem }}
            </p>
          </div>
        </div>
      </template>

      <template #controls="{ state }">
        <HstSelect
          v-model="state.pathLength"
          title="Path Length"
          :options="[
            { value: 'short', label: 'Short (2 levels)' },
            { value: 'basic', label: 'Basic (3 levels)' },
            { value: 'medium', label: 'Medium (5 levels)' },
            { value: 'long', label: 'Long (7 levels)' },
          ]"
        />

        <HstText v-model="state.ariaLabel" title="ARIA Label" />

        <HstCheckbox v-model="state.container" title="Container Layout" />

        <HstCheckbox v-model="state.useNativeLinks" title="Force Native Links" />

        <HstCheckbox v-model="state.includeExternal" title="Include External Link" />
      </template>
    </Variant>
  </Story>
</template>

<script>
// Helper function for playground
function getPlaygroundItems(state: any) {
  const itemSets = {
    short: shortPath,
    basic: basicItems,
    medium: mediumPath,
    long: longPath,
  }
  
  let items = [...itemSets[state.pathLength as keyof typeof itemSets]]
  
  if (state.includeExternal && items.length > 1) {
    // Insert external link as second item
    items.splice(1, 0, {
      text: 'External Site',
      href: 'https://example.com',
      external: true,
    })
  }
  
  return items
}
</script>

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

.example-note {
  font-size: 1.4rem; /* 14px */
  color: #666;
  margin-top: 0.8rem;
  font-style: italic;
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

.path-examples,
.link-examples,
.accessibility-examples {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.path-example,
.link-example,
.accessibility-example {
  padding: 1.6rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: #fafafa;
}

.interaction-feedback {
  margin: 1.6rem 0;
  padding: 1.2rem;
  background-color: #f0f7ff;
  border: 1px solid #b3d9ff;
  border-radius: 4px;
}

.accessibility-info {
  margin-top: 2.4rem;
  padding: 1.6rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.feature-list {
  margin: 1.2rem 0 0 1.6rem;
  font-size: 1.4rem;
  line-height: 1.6;
}

.feature-list li {
  margin-bottom: 0.8rem;
}

.feature-list code {
  background-color: #f0f0f0;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 1.3rem;
}

.playground {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  gap: 1.6rem;
}

.playground-feedback {
  padding: 1.2rem;
  background-color: #f0f7ff;
  border: 1px solid #b3d9ff;
  border-radius: 4px;
  text-align: center;
}

/* Ensure proper breadcrumb spacing */
.story-content :deep(.breadcrumbs) {
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
  
  .path-examples,
  .link-examples,
  .accessibility-examples {
    gap: 1.6rem;
  }
  
  .path-example,
  .link-example,
  .accessibility-example {
    padding: 1.2rem;
  }
}
</style>

<docs lang="md">
# FdsBreadcrumb

Breadcrumb navigation component that provides hierarchical navigation with support for Vue Router integration, automatic current page detection, and full accessibility features. Follows DKFDS v11 breadcrumb design patterns.

## Usage

```vue
<template>
  <FdsBreadcrumb 
    :items="breadcrumbItems" 
    @item-click="handleBreadcrumbClick"
  />
</template>

<script setup>
import { FdsBreadcrumb } from '@madsb/dkfds-vue3'
import type { BreadcrumbItem } from '@madsb/dkfds-vue3'

const breadcrumbItems: BreadcrumbItem[] = [
  { text: 'Forside', href: '/' },
  { text: 'Komponenter', href: '/komponenter' },
  { text: 'Aktuel side' }, // Current page (no href)
]

const handleBreadcrumbClick = (event, item, index) => {
  console.log('Breadcrumb clicked:', item)
}
</script>
```

## Props

| Prop              | Type              | Default        | Description                                                    |
| ----------------- | ----------------- | -------------- | -------------------------------------------------------------- |
| `items`           | `BreadcrumbItem[]` | **required**   | Array of breadcrumb items representing navigation hierarchy    |
| `ariaLabel`       | `string`          | `'Brødkrumme'` | ARIA label for the navigation element                         |
| `container`       | `boolean`         | `false`        | Add container class for standard DKFDS layout                 |
| `useNativeLinks`  | `boolean`         | `false`        | Force use of anchor tags even when Vue Router is available    |

### BreadcrumbItem Interface

```typescript
interface BreadcrumbItem {
  text: string                    // Display text for the breadcrumb
  href?: string                   // URL for standard navigation
  to?: string | Record<string, any> // Vue Router location object
  external?: boolean              // Force external link behavior
  data?: any                      // Custom data for event handlers
}
```

## Events

| Event        | Payload                                          | Description                            |
| ------------ | ------------------------------------------------ | -------------------------------------- |
| `item-click` | `(event: MouseEvent, item: BreadcrumbItem, index: number)` | Emitted when a breadcrumb link is clicked |

## Navigation Behavior

### Automatic Link Detection
- Items with `href` use standard anchor tags
- Items with `to` use Vue Router links (when available)
- Items marked `external: true` always use anchor tags with `target="_blank"`
- Last item is treated as current page and rendered without a link

### Vue Router Integration
- Automatically detects Vue Router availability
- Uses `<router-link>` for items with `to` property
- Falls back to standard anchors when router unavailable
- Respects `useNativeLinks` prop to force anchor tag usage

## Accessibility

### Semantic Structure
- Uses semantic `<nav>` element with descriptive aria-label
- Implements proper ordered list `<ol>` hierarchy
- Current page marked with `aria-current="page"`
- Decorative separator icons are hidden from screen readers

### Keyboard Navigation
- Full keyboard support with Tab navigation
- Links activate with Enter or Space keys
- Focus indicators follow DKFDS accessibility standards
- Screen reader announces navigation context and hierarchy

### ARIA Support
- Configurable aria-label (defaults to Danish "Brødkrumme")
- Proper landmark navigation structure
- Current page identification for assistive technology

## Design Guidelines

### When to Use
- Multi-level site hierarchies (3+ levels recommended)
- Complex application navigation flows
- When users need to understand their current location
- E-commerce category navigation
- Document or content hierarchies

### When NOT to Use
- Single-level pages or simple sites
- Mobile-first designs where space is critical
- Linear processes where back navigation is handled differently
- When the hierarchy doesn't match user mental models

### Best Practices
- Keep breadcrumb text concise but descriptive
- Ensure breadcrumb hierarchy matches site structure
- Place consistently at top of page content
- Don't duplicate current page in main navigation
- Limit to essential levels (avoid overly deep hierarchies)

### Content Guidelines
- Use clear, descriptive labels that match page titles
- Maintain consistency with main navigation terminology
- Consider abbreviation for very long category names
- Ensure labels work in both desktop and mobile contexts

## Mobile Behavior

- Breadcrumbs wrap naturally on small screens
- Text remains readable at minimum 14px size
- Touch targets meet accessibility requirements
- Long paths may require horizontal scrolling

## Themes

The breadcrumb component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with blue links
- **VirkDK**: Business-oriented styling for Virk.dk context
- **BorgerDK**: Citizen-oriented styling for Borger.dk context

All themes maintain proper contrast ratios and accessibility standards.
</docs>