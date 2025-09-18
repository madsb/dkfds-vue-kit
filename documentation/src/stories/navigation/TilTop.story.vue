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
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Default</h3>
            <div class="demo-container">
              <FdsTilTop />
              <p class="demo-note">Standard back to top button</p>
            </div>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Custom Text</h3>
            <div class="demo-container">
              <FdsTilTop 
                visible-text="Tilbage til top"
                screen-reader-text="Spring til toppen af siden"
              />
              <p class="demo-note">Custom Danish text</p>
            </div>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Slot Content</h3>
            <div class="demo-container">
              <FdsTilTop screen-reader-text="Gå til toppen">
                Op
              </FdsTilTop>
              <p class="demo-note">Using slot for custom content</p>
            </div>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Custom Threshold</h3>
            <div class="demo-container">
              <FdsTilTop :threshold="400" visible-text="Top" />
              <p class="demo-note">Lower threshold (400px)</p>
            </div>
          </div>
        </div>
        <div class="scroll-demo">
          <button @click="simulateScroll" class="demo-button">
            Scroll Down to Show Buttons
          </button>
        </div>
        <p class="story-hint">
          The back to top component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how the component adapts to different contexts.
          Scroll down to see the buttons appear when the threshold is reached.
        </p>
      </div>
    </Variant>

    <!-- Visibility and Scroll Behavior -->
    <Variant title="Visibility & Scroll" icon="carbon:view">
      <div class="story-content">
        <div class="scroll-behavior-demo">
          <h3 class="section-subtitle">Scroll Threshold Demonstration</h3>
          <div class="threshold-examples">
            <div class="threshold-item">
              <p><strong>Default (2 screen heights):</strong></p>
              <FdsTilTop visible-text="Standard" />
            </div>
            <div class="threshold-item">
              <p><strong>Low threshold (300px):</strong></p>
              <FdsTilTop :threshold="300" visible-text="Low" />
            </div>
            <div class="threshold-item">
              <p><strong>High threshold (1200px):</strong></p>
              <FdsTilTop :threshold="1200" visible-text="High" />
            </div>
          </div>
          
          <div class="scroll-spacer">
            <p>Scroll down to see different threshold behaviors...</p>
            <div class="spacer-content">
              <p>Keep scrolling...</p>
              <p>The buttons will appear at different scroll positions</p>
              <p>based on their threshold settings.</p>
            </div>
          </div>
        </div>
        <p class="story-hint">
          The component appears when the user scrolls past the threshold. Default threshold
          is 2 viewport heights, but can be customized. Buttons use smooth scrolling behavior.
        </p>
      </div>
    </Variant>

    <!-- Responsive Behavior -->
    <Variant title="Responsive Design" icon="carbon:devices">
      <div class="story-content">
        <div class="responsive-demo">
          <h3 class="section-subtitle">Desktop vs Mobile Display</h3>
          <div class="responsive-examples">
            <div class="desktop-view">
              <h4 class="demo-label">Desktop (≥768px)</h4>
              <div class="device-mockup desktop">
                <FdsTilTop visible-text="Til toppen" />
                <p class="device-note">Shows icon + text</p>
              </div>
            </div>
            <div class="mobile-view">
              <h4 class="demo-label">Mobile (<768px)</h4>
              <div class="device-mockup mobile">
                <FdsTilTop visible-text="Til toppen" />
                <p class="device-note">Shows icon only</p>
              </div>
            </div>
          </div>
        </div>
        <div class="divider" />
        <div class="positioning-demo">
          <h3 class="section-subtitle">Fixed Positioning</h3>
          <p>The button is positioned fixed in the bottom-right corner and doesn't interfere with page content.</p>
          <FdsTilTop :threshold="100" visible-text="Demo Button" />
        </div>
        <p class="story-hint">
          Resize the browser window to see responsive behavior. On mobile devices, only the icon
          is visible to save space. The button maintains proper touch targets and accessibility.
        </p>
      </div>
    </Variant>

    <!-- Accessibility Features -->
    <Variant title="Accessibility" icon="carbon:accessibility">
      <div class="story-content">
        <div class="accessibility-demo">
          <h3 class="section-subtitle">Screen Reader Support</h3>
          <div class="a11y-examples">
            <div class="a11y-item">
              <h4 class="demo-label">Default Screen Reader Text</h4>
              <FdsTilTop />
              <p class="a11y-note">Announces: "Til toppen af siden"</p>
            </div>
            <div class="a11y-item">
              <h4 class="demo-label">Custom Screen Reader Text</h4>
              <FdsTilTop 
                screen-reader-text="Spring tilbage til toppen af dokumentet"
                visible-text="Top"
              />
              <p class="a11y-note">Announces: "Spring tilbage til toppen af dokumentet"</p>
            </div>
          </div>
          
          <div class="divider" />
          
          <h3 class="section-subtitle">Keyboard Navigation</h3>
          <div class="keyboard-demo">
            <FdsTilTop :threshold="50" screen-reader-text="Test keyboard navigation" />
            <div class="keyboard-instructions">
              <p><strong>Keyboard Support:</strong></p>
              <ul>
                <li><kbd>Tab</kbd> - Focus the button when visible</li>
                <li><kbd>Enter</kbd> or <kbd>Space</kbd> - Activate scroll to top</li>
                <li><kbd>Shift + Tab</kbd> - Move focus to previous element</li>
              </ul>
            </div>
          </div>
        </div>
        <p class="story-hint">
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
        <div class="story-content playground">
          <div class="playground-demo">
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
            
            <div class="playground-info">
              <p>Current threshold: {{ state.threshold }}px</p>
              <p>Scroll down to see the button appear</p>
              <button @click="simulateScroll" class="demo-button">
                Scroll to Test Threshold
              </button>
              <button @click="scrollToTop" class="demo-button">
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

.demo-label {
  font-size: 1.4rem; /* 14px */
  font-weight: 500;
  margin-bottom: 0.8rem;
  color: #555;
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

.variant-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.demo-container {
  position: relative;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px dashed #ccc;
  border-radius: 4px;
  padding: 1.6rem;
  background: #fafafa;
}

.demo-note {
  font-size: 1.4rem;
  color: #666;
  margin-top: 0.8rem;
  text-align: center;
}

.scroll-demo {
  text-align: center;
  margin: 2.4rem 0;
}

.demo-button {
  background: #0059b3;
  color: white;
  border: none;
  padding: 1.2rem 2.4rem;
  border-radius: 4px;
  font-size: 1.4rem;
  cursor: pointer;
  margin: 0.8rem;
}

.demo-button:hover {
  background: #004494;
}

/* Scroll behavior demo */
.scroll-behavior-demo {
  margin-bottom: 2.4rem;
}

.threshold-examples {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 2.4rem;
}

.threshold-item {
  padding: 1.6rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background: #f9f9f9;
}

.scroll-spacer {
  min-height: 150vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
  padding: 4.8rem 2.4rem;
  border-radius: 8px;
}

.spacer-content {
  margin-top: 2.4rem;
}

.spacer-content p {
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
  color: #666;
}

/* Responsive demo */
.responsive-examples {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem;
  margin-bottom: 2.4rem;
}

.device-mockup {
  padding: 1.6rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.desktop {
  background: #f5f5f5;
  min-width: 200px;
}

.mobile {
  background: #f0f0f0;
  max-width: 120px;
  margin: 0 auto;
}

.device-note {
  font-size: 1.4rem;
  color: #666;
  margin-top: 1.2rem;
  text-align: center;
}

.positioning-demo {
  padding: 2.4rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background: #fafafa;
}

/* Accessibility demo */
.a11y-examples {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.a11y-item {
  padding: 1.6rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background: #f9f9f9;
}

.a11y-note {
  font-size: 1.4rem;
  color: #0059b3;
  font-style: italic;
  margin-top: 0.8rem;
}

.keyboard-demo {
  padding: 2.4rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background: #f5f5f5;
}

.keyboard-instructions {
  margin-top: 1.6rem;
}

.keyboard-instructions ul {
  list-style: none;
  padding: 0;
  margin: 1.2rem 0;
}

.keyboard-instructions li {
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
}

kbd {
  background: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 0.2rem 0.4rem;
  font-size: 1.2rem;
  font-family: monospace;
}

/* Playground */
.playground {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.playground-demo {
  text-align: center;
  width: 100%;
  max-width: 600px;
}

.playground-info {
  margin-top: 2.4rem;
  padding: 1.6rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background: #f9f9f9;
}

.playground-info p {
  font-size: 1.4rem;
  color: #666;
  margin-bottom: 0.8rem;
}

.divider {
  margin: 2.4rem 0;
  border-top: 1px solid #e0e0e0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem;
  }

  .variant-grid {
    grid-template-columns: 1fr;
  }

  .responsive-examples {
    grid-template-columns: 1fr;
  }

  .mobile {
    max-width: 100px;
  }
}
</style>

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