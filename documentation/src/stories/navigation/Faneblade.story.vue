<script setup lang="ts">
import { ref } from 'vue'
import {
  FdsFaneblade,
  FdsFanebladeNav,
  FdsFanebladeNavItem,
  FdsFanebladeTab,
  FdsFanebladePanel,
} from '@madsb/dkfds-vue3'

// Demo state for tabpanel example
const activeTab = ref('overview')
const setActiveTab = (tabId: string) => {
  activeTab.value = tabId
}

// Demo state for navigation example
const activeNavSection = ref('/profile')
const handleNavClick = (event: MouseEvent) => {
  event.preventDefault()
  const target = event.target as HTMLAnchorElement
  activeNavSection.value = target.getAttribute('href') || ''
}

// Sample content for different tabs
const tabContent = {
  overview: 'This is the overview section with general information about the case.',
  documents: 'Here you can find all documents related to this case, including forms and attachments.',
  timeline: 'This timeline shows all activities and status changes for the case.',
  contact: 'Contact information for case handlers and relevant departments.'
}
</script>

<template>
  <Story title="Navigation/Faneblade" :layout="{ type: 'grid', width: '100%' }" icon="carbon:tabs">
    <!-- Showcase all faneblade components in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Navigation Tabs</h3>
            <fds-faneblade-nav aria-label="User profile sections">
              <fds-faneblade-nav-item
                href="/profile"
                label="Profile"
                icon="user"
                :active="activeNavSection === '/profile'"
                @click="handleNavClick"
              />
              <fds-faneblade-nav-item
                href="/settings"
                label="Settings"
                icon="settings"
                :active="activeNavSection === '/settings'"
                @click="handleNavClick"
              />
              <fds-faneblade-nav-item
                href="/notifications"
                label="Notifications"
                icon="notification"
                :active="activeNavSection === '/notifications'"
                @click="handleNavClick"
              />
            </fds-faneblade-nav>
            <p class="nav-status">Active: {{ activeNavSection }}</p>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Content Tabs</h3>
            <fds-faneblade>
              <template #tabs>
                <fds-faneblade-tab
                  id="info"
                  label="Information"
                  icon="information"
                  :active="activeTab === 'info'"
                  @click="setActiveTab"
                />
                <fds-faneblade-tab
                  id="details"
                  label="Details"
                  :active="activeTab === 'details'"
                  @click="setActiveTab"
                />
              </template>
              <template #panels>
                <fds-faneblade-panel id="info" :active="activeTab === 'info'">
                  <p>General information content goes here.</p>
                </fds-faneblade-panel>
                <fds-faneblade-panel id="details" :active="activeTab === 'details'">
                  <p>Detailed information content goes here.</p>
                </fds-faneblade-panel>
              </template>
            </fds-faneblade>
          </div>
        </div>
        <p class="story-hint">
          The faneblade components follow DKFDS v11 design specifications with full keyboard navigation support.
          Try switching themes using the global theme switcher to see how tabs adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Navigation tabs demonstration -->
    <Variant title="Navigation Tabs" icon="carbon:menu">
      <div class="story-content">
        <h3 class="section-title">Page Navigation</h3>
        <fds-faneblade-nav aria-label="Case management sections">
          <fds-faneblade-nav-item
            href="/case/overview"
            label="Overview"
            :active="activeNavSection === '/case/overview'"
            @click="handleNavClick"
          />
          <fds-faneblade-nav-item
            href="/case/documents"
            label="Documents"
            icon="document"
            :active="activeNavSection === '/case/documents'"
            @click="handleNavClick"
          />
          <fds-faneblade-nav-item
            href="/case/timeline"
            label="Timeline"
            icon="time"
            :active="activeNavSection === '/case/timeline'"
            @click="handleNavClick"
          />
          <fds-faneblade-nav-item
            href="/case/contact"
            label="Contact"
            icon="email"
            :active="activeNavSection === '/case/contact'"
            @click="handleNavClick"
          />
        </fds-faneblade-nav>
        
        <div class="demo-content">
          <h4 class="section-subtitle">Current Section: {{ activeNavSection }}</h4>
          <p>Navigation tabs are ideal for linking to different pages or major sections of an application.</p>
        </div>
        
        <p class="story-hint">
          Navigation tabs use semantic anchor links with proper ARIA attributes.
          Click events are prevented here for demo purposes.
        </p>
      </div>
    </Variant>

    <!-- Content tabs with panels -->
    <Variant title="Content Tabs" icon="carbon:data-view">
      <div class="story-content">
        <h3 class="section-title">Tabbed Content Interface</h3>
        <fds-faneblade>
          <template #tabs>
            <fds-faneblade-tab
              id="overview"
              label="Overview"
              icon="dashboard"
              :active="activeTab === 'overview'"
              @click="setActiveTab"
            />
            <fds-faneblade-tab
              id="documents"
              label="Documents"
              icon="document"
              :active="activeTab === 'documents'"
              @click="setActiveTab"
            />
            <fds-faneblade-tab
              id="timeline"
              label="Timeline"
              icon="time"
              :active="activeTab === 'timeline'"
              @click="setActiveTab"
            />
            <fds-faneblade-tab
              id="contact"
              label="Contact"
              icon="email"
              :active="activeTab === 'contact'"
              @click="setActiveTab"
            />
          </template>
          <template #panels>
            <fds-faneblade-panel
              v-for="(content, tabId) in tabContent"
              :key="tabId"
              :id="tabId"
              :active="activeTab === tabId"
            >
              <div class="panel-content">
                <h4 class="section-subtitle">{{ tabId.charAt(0).toUpperCase() + tabId.slice(1) }}</h4>
                <p>{{ content }}</p>
                <div class="panel-actions">
                  <button class="button button--secondary">Edit</button>
                  <button class="button button--tertiary">Export</button>
                </div>
              </div>
            </fds-faneblade-panel>
          </template>
        </fds-faneblade>
        
        <p class="story-hint">
          Content tabs use proper ARIA tabpanel/tab relationships. Panels are hidden when inactive
          and support keyboard navigation with Tab and arrow keys.
        </p>
      </div>
    </Variant>

    <!-- Accessibility and keyboard navigation -->
    <Variant title="Keyboard Navigation" icon="carbon:keyboard">
      <div class="story-content">
        <div class="accessibility-demo">
          <h3 class="section-title">Accessibility Features</h3>
          
          <div class="demo-section">
            <h4 class="section-subtitle">Tab Navigation</h4>
            <fds-faneblade>
              <template #tabs>
                <fds-faneblade-tab
                  id="feature1"
                  label="Feature 1"
                  :active="activeTab === 'feature1'"
                  @click="setActiveTab"
                />
                <fds-faneblade-tab
                  id="feature2"
                  label="Feature 2"
                  :active="activeTab === 'feature2'"
                  @click="setActiveTab"
                />
                <fds-faneblade-tab
                  id="feature3"
                  label="Feature 3"
                  :active="activeTab === 'feature3'"
                  @click="setActiveTab"
                />
              </template>
              <template #panels>
                <fds-faneblade-panel id="feature1" :active="activeTab === 'feature1'">
                  <p>This panel is accessible via keyboard navigation. Press Tab to focus, then use arrow keys.</p>
                </fds-faneblade-panel>
                <fds-faneblade-panel id="feature2" :active="activeTab === 'feature2'">
                  <p>Screen readers announce the tab relationship and current selection state.</p>
                </fds-faneblade-panel>
                <fds-faneblade-panel id="feature3" :active="activeTab === 'feature3'">
                  <p>Each panel has proper ARIA labelling and keyboard focus management.</p>
                </fds-faneblade-panel>
              </template>
            </fds-faneblade>
          </div>
          
          <div class="keyboard-help">
            <h4 class="section-subtitle">Keyboard Instructions</h4>
            <ul>
              <li><strong>Tab:</strong> Move between tab groups and into panel content</li>
              <li><strong>Arrow Keys:</strong> Navigate between tabs within a group</li>
              <li><strong>Enter/Space:</strong> Activate the focused tab</li>
              <li><strong>Home/End:</strong> Jump to first/last tab in group</li>
            </ul>
          </div>
        </div>
        
        <p class="story-hint">
          All faneblade components support full keyboard navigation and screen reader accessibility.
          Try using Tab and arrow keys to navigate the tabs above.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          navLabel: 'Application sections',
          showIcons: true,
          tabType: 'content',
          activeDemo: 'demo1'
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <div v-if="state.tabType === 'navigation'">
            <h4 class="section-subtitle">Navigation Tabs</h4>
            <fds-faneblade-nav :aria-label="state.navLabel">
              <fds-faneblade-nav-item
                href="/demo1"
                label="Demo 1"
                :icon="state.showIcons ? 'dashboard' : undefined"
                :active="state.activeDemo === 'demo1'"
                @click="(e) => { e.preventDefault(); state.activeDemo = 'demo1' }"
              />
              <fds-faneblade-nav-item
                href="/demo2"
                label="Demo 2"
                :icon="state.showIcons ? 'settings' : undefined"
                :active="state.activeDemo === 'demo2'"
                @click="(e) => { e.preventDefault(); state.activeDemo = 'demo2' }"
              />
              <fds-faneblade-nav-item
                href="/demo3"
                label="Demo 3"
                :icon="state.showIcons ? 'user' : undefined"
                :active="state.activeDemo === 'demo3'"
                @click="(e) => { e.preventDefault(); state.activeDemo = 'demo3' }"
              />
            </fds-faneblade-nav>
            <p class="demo-result">Active navigation: {{ state.activeDemo }}</p>
          </div>
          
          <div v-else>
            <h4 class="section-subtitle">Content Tabs</h4>
            <fds-faneblade>
              <template #tabs>
                <fds-faneblade-tab
                  id="demo1"
                  label="Demo 1"
                  :icon="state.showIcons ? 'dashboard' : undefined"
                  :active="state.activeDemo === 'demo1'"
                  @click="() => state.activeDemo = 'demo1'"
                />
                <fds-faneblade-tab
                  id="demo2"
                  label="Demo 2"
                  :icon="state.showIcons ? 'settings' : undefined"
                  :active="state.activeDemo === 'demo2'"
                  @click="() => state.activeDemo = 'demo2'"
                />
                <fds-faneblade-tab
                  id="demo3"
                  label="Demo 3"
                  :icon="state.showIcons ? 'user' : undefined"
                  :active="state.activeDemo === 'demo3'"
                  @click="() => state.activeDemo = 'demo3'"
                />
              </template>
              <template #panels>
                <fds-faneblade-panel id="demo1" :active="state.activeDemo === 'demo1'">
                  <p>This is the first demo panel with customizable content.</p>
                </fds-faneblade-panel>
                <fds-faneblade-panel id="demo2" :active="state.activeDemo === 'demo2'">
                  <p>This is the second demo panel showing different content.</p>
                </fds-faneblade-panel>
                <fds-faneblade-panel id="demo3" :active="state.activeDemo === 'demo3'">
                  <p>This is the third demo panel for testing purposes.</p>
                </fds-faneblade-panel>
              </template>
            </fds-faneblade>
          </div>
        </div>
      </template>

      <template #controls="{ state }">
        <HstSelect
          v-model="state.tabType"
          title="Tab Type"
          :options="[
            { value: 'content', label: 'Content Tabs (with panels)' },
            { value: 'navigation', label: 'Navigation Tabs (links)' },
          ]"
        />
        
        <HstText v-model="state.navLabel" title="Navigation ARIA Label" />
        
        <HstCheckbox v-model="state.showIcons" title="Show Icons" />
        
        <HstSelect
          v-model="state.activeDemo"
          title="Active Tab"
          :options="[
            { value: 'demo1', label: 'Demo 1' },
            { value: 'demo2', label: 'Demo 2' },
            { value: 'demo3', label: 'Demo 3' },
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.variant-section {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.demo-content {
  margin-top: 2.4rem;
  padding: 1.6rem;
  background: #f8f9fa;
  border-radius: 0.4rem;
}

.demo-section {
  margin-bottom: 2.4rem;
}

.panel-content {
  padding: 1.6rem 0;
}

.panel-actions {
  margin-top: 1.6rem;
  display: flex;
  gap: 1.2rem;
}

.nav-status {
  margin-top: 1.2rem;
  padding: 0.8rem;
  background: #e9ecef;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  color: #495057;
}

.demo-result {
  margin-top: 1.6rem;
  padding: 1.2rem;
  background: #e3f2fd;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  color: #1565c0;
}

.accessibility-demo {
  max-width: 600px;
}

.keyboard-help {
  margin-top: 2.4rem;
  padding: 1.6rem;
  background: #f8f9fa;
  border-radius: 0.4rem;
  border-left: 0.4rem solid #007bff;
}

.keyboard-help ul {
  margin: 0;
  padding-left: 2.4rem;
  font-size: 1.4rem;
  line-height: 1.6;
}

.keyboard-help li {
  margin-bottom: 0.8rem;
}

.playground {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 300px;
  width: 100%;
}

/* Ensure proper component spacing */
.story-content :deep(.tab-container) {
  margin-bottom: 1.6rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem;
  }

  .variant-grid {
    grid-template-columns: 1fr;
  }

  .panel-actions {
    flex-direction: column;
  }
}
</style>

<docs lang="md">
# FdsFaneblade

Tab navigation components implementing DKFDS v11 specifications. The faneblade system includes multiple components for different use cases: navigation tabs for page sections and content tabs with panels for in-page content switching.

## Usage

### Content Tabs (with panels)

```vue
<template>
  <fds-faneblade>
    <template #tabs>
      <fds-faneblade-tab
        id="overview"
        label="Overview"
        icon="dashboard"
        :active="activeTab === 'overview'"
        @click="setActiveTab"
      />
      <fds-faneblade-tab
        id="details"
        label="Details"
        :active="activeTab === 'details'"
        @click="setActiveTab"
      />
    </template>
    <template #panels>
      <fds-faneblade-panel id="overview" :active="activeTab === 'overview'">
        <h2>Overview Content</h2>
        <p>Content for the overview tab...</p>
      </fds-faneblade-panel>
      <fds-faneblade-panel id="details" :active="activeTab === 'details'">
        <h2>Details Content</h2>
        <p>Content for the details tab...</p>
      </fds-faneblade-panel>
    </template>
  </fds-faneblade>
</template>

<script setup>
import { ref } from 'vue'
import { FdsFaneblade, FdsFanebladeTab, FdsFanebladePanel } from '@madsb/dkfds-vue3'

const activeTab = ref('overview')
const setActiveTab = (tabId) => {
  activeTab.value = tabId
}
</script>
```

### Navigation Tabs (links)

```vue
<template>
  <fds-faneblade-nav aria-label="Main navigation">
    <fds-faneblade-nav-item
      href="/profile"
      label="Profile"
      icon="user"
      :active="$route.path === '/profile'"
    />
    <fds-faneblade-nav-item
      href="/settings"
      label="Settings"
      icon="settings"
      :active="$route.path === '/settings'"
    />
  </fds-faneblade-nav>
</template>

<script setup>
import { FdsFanebladeNav, FdsFanebladeNavItem } from '@madsb/dkfds-vue3'
</script>
```

## Components

### FdsFaneblade

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| - | - | - | Container for tabs and panels using slots |

**Slots:**
- `tabs` - Contains fds-faneblade-tab components
- `panels` - Contains fds-faneblade-panel components

### FdsFanebladeTab

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `id` | `string` | - | Unique identifier linking to panel |
| `label` | `string` | - | Tab button text |
| `active` | `boolean` | `false` | Whether tab is currently active |
| `icon` | `string` | - | Optional DKFDS icon identifier |

**Events:**
- `click` - Emitted with tab id when clicked

### FdsFanebladePanel

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `id` | `string` | - | Identifier matching corresponding tab |
| `active` | `boolean` | `false` | Whether panel is currently visible |

### FdsFanebladeNav

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `ariaLabel` | `string` | - | ARIA label for navigation context |

### FdsFanebladeNavItem

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `href` | `string` | - | Link destination URL |
| `label` | `string` | - | Link text |
| `active` | `boolean` | `false` | Whether item is currently active |
| `icon` | `string` | - | Optional DKFDS icon identifier |

**Events:**
- `click` - Emitted with click event for navigation handling

## Accessibility

- **Full keyboard navigation** with Tab, Arrow keys, Enter, Space, Home, End
- **Screen reader support** with proper ARIA tablist/tab/tabpanel relationships
- **Focus management** with automatic focus handling on tab activation
- **Active state indication** with aria-selected and aria-current attributes
- **Semantic navigation** structure for navigation tabs with nav element

## Keyboard Navigation

- **Tab:** Move focus between tab groups and into panel content
- **Left/Right Arrow:** Navigate between tabs within a group
- **Enter/Space:** Activate the focused tab
- **Home:** Jump to first tab in group
- **End:** Jump to last tab in group

## Design Guidelines

- **Navigation tabs** are ideal for linking to different pages or major application sections
- **Content tabs** should be used for switching between related content within the same page
- **Limit to 5-7 tabs** maximum to avoid cognitive overload
- **Use descriptive labels** that clearly indicate the content or destination
- **Group related tabs** logically and consider user workflow
- **Provide visual icons** when they add clarity to the tab purpose

## Themes

The faneblade components automatically adapt to the selected theme:
- **Default**: Standard DKFDS styling with blue accent
- **VirkDK**: Business-oriented styling for Virk.dk with corporate colors
- **BorgerDK**: Citizen-oriented styling for Borger.dk with accessible design
</docs>