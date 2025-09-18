<script setup lang="ts">
import { ref } from 'vue'
import { FdsTilTop } from '@madsb/dkfds-vue3'

// Demo state for scroll simulation
const scrollCount = ref(0)
const customThreshold = ref(800)

// Simulate scroll to demonstrate visibility
const simulateScroll = () => {
  scrollCount.value++
  // Scroll down to make the button visible
  window.scrollTo({
    top: window.innerHeight * 2.5,
    behavior: 'smooth'
  })
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <Story
    title="Navigation/TilTop"
    :layout="{ type: 'grid', width: '100%' }"
    icon="carbon:arrow-up"
  >
    <!-- Showcase all variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Default</h3>
            <div>
              <FdsTilTop />
              <p>Standard back to top button</p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Custom Text</h3>
            <div>
              <FdsTilTop 
                visible-text="Tilbage til top"
                screen-reader-text="Spring til toppen af siden"
              />
              <p>Custom Danish text</p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Slot Content</h3>
            <div>
              <FdsTilTop screen-reader-text="Gå til toppen">
                Op
              </FdsTilTop>
              <p>Using slot for custom content</p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Custom Threshold</h3>
            <div>
              <FdsTilTop :threshold="400" visible-text="Top" />
              <p>Lower threshold (400px)</p>
            </div>
          </div>
        </div>
        <div>
          <button @click="simulateScroll">
            Scroll Down to Show Buttons
          </button>
        </div>
        <p class="mt-4 mb-0">
          The back to top component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how the component adapts to different contexts.
          Scroll down to see the buttons appear when the threshold is reached.
        </p>
      </div>
    </Variant>

    <!-- Visibility and Scroll Behavior -->
    <Variant title="Visibility & Scroll" icon="carbon:view">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Scroll Threshold Demonstration</h3>
          <div>
            <div>
              <p><strong>Default (2 screen heights):</strong></p>
              <FdsTilTop visible-text="Standard" />
            </div>
            <div>
              <p><strong>Low threshold (300px):</strong></p>
              <FdsTilTop :threshold="300" visible-text="Low" />
            </div>
            <div>
              <p><strong>High threshold (1200px):</strong></p>
              <FdsTilTop :threshold="1200" visible-text="High" />
            </div>
          </div>
          
          <div>
            <p>Scroll down to see different threshold behaviors...</p>
            <div>
              <p>Keep scrolling...</p>
              <p>The buttons will appear at different scroll positions</p>
              <p>based on their threshold settings.</p>
            </div>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The component appears when the user scrolls past the threshold. Default threshold
          is 2 viewport heights, but can be customized. Buttons use smooth scrolling behavior.
        </p>
      </div>
    </Variant>

    <!-- Responsive Behavior -->
    <Variant title="Responsive Design" icon="carbon:devices">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Desktop vs Mobile Display</h3>
          <div>
            <div class="desktop-view">
              <h4>Desktop (≥768px)</h4>
              <div>
                <FdsTilTop visible-text="Til toppen" />
                <p>Shows icon + text</p>
              </div>
            </div>
            <div class="mobile-view">
              <h4>Mobile (<768px)</h4>
              <div class="mobile">
                <FdsTilTop visible-text="Til toppen" />
                <p>Shows icon only</p>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6" />
        <div>
          <h3 class="h6 mb-2">Fixed Positioning</h3>
          <p>The button is positioned fixed in the bottom-right corner and doesn't interfere with page content.</p>
          <FdsTilTop :threshold="100" visible-text="Demo Button" />
        </div>
        <p class="mt-4 mb-0">
          Resize the browser window to see responsive behavior. On mobile devices, only the icon
          is visible to save space. The button maintains proper touch targets and accessibility.
        </p>
      </div>
    </Variant>

    <!-- Accessibility Features -->
    <Variant title="Accessibility" icon="carbon:accessibility">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Screen Reader Support</h3>
          <div>
            <div>
              <h4>Default Screen Reader Text</h4>
              <FdsTilTop />
              <p>Announces: "Til toppen af siden"</p>
            </div>
            <div>
              <h4>Custom Screen Reader Text</h4>
              <FdsTilTop 
                screen-reader-text="Spring tilbage til toppen af dokumentet"
                visible-text="Top"
              />
              <p>Announces: "Spring tilbage til toppen af dokumentet"</p>
            </div>
          </div>
          
          <hr class="my-6" />
          
          <h3 class="h6 mb-2">Keyboard Navigation</h3>
          <div>
            <FdsTilTop :threshold="50" screen-reader-text="Test keyboard navigation" />
            <div>
              <p><strong>Keyboard Support:</strong></p>
              <ul>
                <li><kbd>Tab</kbd> - Focus the button when visible</li>
                <li><kbd>Enter</kbd> or <kbd>Space</kbd> - Activate scroll to top</li>
                <li><kbd>Shift + Tab</kbd> - Move focus to previous element</li>
              </ul>
            </div>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The component provides excellent accessibility with proper ARIA labeling, keyboard navigation,
          and screen reader support. The icon is marked as decorative to avoid redundant announcements.
        </p>
      </div>
    </Variant>

    <!-- Interactive Playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="() => ({
        visibleText: 'Til toppen',
        screenReaderText: 'Til toppen af siden',
        threshold: 400,
        useSlot: false,
        slotContent: 'Op'
      })"
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <div>
            <FdsTilTop
              v-if="!state.useSlot"
              :visible-text="state.visibleText"
              :screen-reader-text="state.screenReaderText"
              :threshold="state.threshold"
            />
            <FdsTilTop
              v-else
              :screen-reader-text="state.screenReaderText"
              :threshold="state.threshold"
            >
              {{ state.slotContent }}
            </FdsTilTop>
            
            <div>
              <p>Current threshold: {{ state.threshold }}px</p>
              <p>Scroll down to see the button appear</p>
              <button @click="simulateScroll">
                Scroll to Test Threshold
              </button>
              <button @click="scrollToTop">
                Scroll to Top
              </button>
            </div>
          </div>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.visibleText" title="Visible Text" />
        <HstText v-model="state.screenReaderText" title="Screen Reader Text" />
        <HstNumber v-model="state.threshold" title="Threshold (px)" :min="100" :max="2000" :step="50" />
        <HstCheckbox v-model="state.useSlot" title="Use Slot Content" />
        <HstText v-if="state.useSlot" v-model="state.slotContent" title="Slot Content" />
      </template>
    </Variant>
  </Story>
</template>


<docs lang="md">
# FdsTilTop

The back to top component provides smooth scroll-to-top functionality with intelligent visibility management. It follows DKFDS v11 tilbage-til-toppen specifications and appears after the user scrolls down a configurable distance.

## Usage

```vue
<template>
  <FdsTilTop />
</template>

<script setup>
import { FdsTilTop } from '@madsb/dkfds-vue3'
</script>
```

## Props

| Prop               | Type     | Default                | Description                                              |
| ------------------ | -------- | ---------------------- | -------------------------------------------------------- |
| `screenReaderText` | `string` | `'Til toppen af siden'` | Hidden text announced by screen readers                  |
| `visibleText`      | `string` | `'Til toppen'`         | Text displayed alongside icon on desktop                 |
| `threshold`        | `number` | `undefined`            | Custom scroll threshold in pixels (default: 2x viewport) |

## Slots

| Slot      | Description                                      |
| --------- | ------------------------------------------------ |
| `default` | Custom content to display instead of visibleText |

## Accessibility

- Uses semantic `<a>` element with proper href attribute for better accessibility
- Includes hidden screen reader text via `sr-only` class
- Icon is marked as decorative to avoid redundant screen reader announcements
- Fully keyboard navigable (Tab, Enter, Space key support)
- Maintains proper focus management and touch targets on mobile devices
- Provides clear context about the button's purpose through screen reader text

## Design Guidelines

- **When to use**: On long pages where users need easy navigation back to top
- **Positioning**: Fixed in bottom-right corner, doesn't interfere with content
- **Visibility**: Appears only after significant scrolling (default: 2 viewport heights)
- **Responsive**: Shows icon + text on desktop, icon only on mobile
- **Smooth scrolling**: Uses native `scroll-behavior: smooth` for better UX
- **Performance**: Uses passive event listeners for optimal scroll performance

## Behavior

- **Threshold**: Becomes visible after scrolling past threshold (default: 2x viewport height)
- **Responsive text**: Text hidden on mobile (<768px) to save space
- **Smooth scrolling**: Scrolls smoothly to top using native browser behavior
- **Event handling**: Uses passive listeners for better scroll performance
- **Auto-hide**: Automatically hides when near top of page

## Themes

The component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling
- **VirkDK**: Business-oriented styling for Virk.dk  
- **BorgerDK**: Citizen-oriented styling for Borger.dk
</docs>