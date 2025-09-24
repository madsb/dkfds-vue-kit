<script setup lang="ts">
import { ref } from 'vue'
import {
  FdsFaneblade,
  FdsFanebladeNav,
  FdsFanebladeNavItem,
  FdsFanebladeTab,
  FdsFanebladePanel,
} from '@madsb/dkfds-vue-kit'

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
  documents:
    'Here you can find all documents related to this case, including forms and attachments.',
  timeline: 'This timeline shows all activities and status changes for the case.',
  contact: 'Contact information for case handlers and relevant departments.',
}
</script>

<template>
  <Story title="Navigation/Faneblade" icon="carbon:tabs">
    <!-- Showcase all faneblade components in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Navigation Tabs</h3>
            <fds-faneblade-nav aria-label="User profile sections">
              <fds-faneblade-nav-item
                href="/profile"
                label="Profile"
                icon="account"
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
                icon="notifications"
                :active="activeNavSection === '/notifications'"
                @click="handleNavClick"
              />
            </fds-faneblade-nav>
            <p>Active: {{ activeNavSection }}</p>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Content Tabs</h3>
            <fds-faneblade>
              <template #tabs>
                <fds-faneblade-tab
                  id="info"
                  label="Information"
                  icon="info"
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
        <p class="mt-4 mb-0">
          The faneblade components follow DKFDS v11 design specifications with full keyboard
          navigation support. Try switching themes using the global theme switcher to see how tabs
          adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Navigation tabs demonstration -->
    <Variant title="Navigation Tabs" icon="carbon:menu">
      <div class="container py-6">
        <h3 class="h5 mb-2">Page Navigation</h3>
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

        <div>
          <h4 class="h6 mb-2">Current Section: {{ activeNavSection }}</h4>
          <p>
            Navigation tabs are ideal for linking to different pages or major sections of an
            application.
          </p>
        </div>

        <p class="mt-4 mb-0">
          Navigation tabs use semantic anchor links with proper ARIA attributes. Click events are
          prevented here for demo purposes.
        </p>
      </div>
    </Variant>

    <!-- Content tabs with panels -->
    <Variant title="Content Tabs" icon="carbon:data-view">
      <div class="container py-6">
        <h3 class="h5 mb-2">Tabbed Content Interface</h3>
        <fds-faneblade>
          <template #tabs>
            <fds-faneblade-tab
              id="overview"
              label="Overview"
              icon="home"
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
              :id="tabId"
              :key="tabId"
              :active="activeTab === tabId"
            >
              <div>
                <h4 class="h6 mb-2">{{ tabId.charAt(0).toUpperCase() + tabId.slice(1) }}</h4>
                <p>{{ content }}</p>
                <div>
                  <button class="button button--secondary">Edit</button>
                  <button class="button button--tertiary">Export</button>
                </div>
              </div>
            </fds-faneblade-panel>
          </template>
        </fds-faneblade>

        <p class="mt-4 mb-0">
          Content tabs use proper ARIA tabpanel/tab relationships. Panels are hidden when inactive
          and support keyboard navigation with Tab and arrow keys.
        </p>
      </div>
    </Variant>

    <!-- Accessibility and keyboard navigation -->
    <Variant title="Keyboard Navigation" icon="carbon:keyboard">
      <div class="container py-6">
        <div>
          <h3 class="h5 mb-2">Accessibility Features</h3>

          <div>
            <h4 class="h6 mb-2">Tab Navigation</h4>
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
                  <p>
                    This panel is accessible via keyboard navigation. Press Tab to focus, then use
                    arrow keys.
                  </p>
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

          <div>
            <h4 class="h6 mb-2">Keyboard Instructions</h4>
            <ul>
              <li><strong>Tab:</strong> Move between tab groups and into panel content</li>
              <li><strong>Arrow Keys:</strong> Navigate between tabs within a group</li>
              <li><strong>Enter/Space:</strong> Activate the focused tab</li>
              <li><strong>Home/End:</strong> Jump to first/last tab in group</li>
            </ul>
          </div>
        </div>

        <p class="mt-4 mb-0">
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
          activeDemo: 'demo1',
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <div v-if="state.tabType === 'navigation'">
            <h4 class="h6 mb-2">Navigation Tabs</h4>
            <fds-faneblade-nav :aria-label="state.navLabel">
              <fds-faneblade-nav-item
                href="/demo1"
                label="Demo 1"
                :icon="state.showIcons ? 'home' : undefined"
                :active="state.activeDemo === 'demo1'"
                @click="
                  (e) => {
                    e.preventDefault()
                    state.activeDemo = 'demo1'
                  }
                "
              />
              <fds-faneblade-nav-item
                href="/demo2"
                label="Demo 2"
                :icon="state.showIcons ? 'settings' : undefined"
                :active="state.activeDemo === 'demo2'"
                @click="
                  (e) => {
                    e.preventDefault()
                    state.activeDemo = 'demo2'
                  }
                "
              />
              <fds-faneblade-nav-item
                href="/demo3"
                label="Demo 3"
                :icon="state.showIcons ? 'account' : undefined"
                :active="state.activeDemo === 'demo3'"
                @click="
                  (e) => {
                    e.preventDefault()
                    state.activeDemo = 'demo3'
                  }
                "
              />
            </fds-faneblade-nav>
            <p>Active navigation: {{ state.activeDemo }}</p>
          </div>

          <div v-else>
            <h4 class="h6 mb-2">Content Tabs</h4>
            <fds-faneblade>
              <template #tabs>
                <fds-faneblade-tab
                  id="demo1"
                  label="Demo 1"
                  :icon="state.showIcons ? 'dashboard' : undefined"
                  :active="state.activeDemo === 'demo1'"
                  @click="() => (state.activeDemo = 'demo1')"
                />
                <fds-faneblade-tab
                  id="demo2"
                  label="Demo 2"
                  :icon="state.showIcons ? 'settings' : undefined"
                  :active="state.activeDemo === 'demo2'"
                  @click="() => (state.activeDemo = 'demo2')"
                />
                <fds-faneblade-tab
                  id="demo3"
                  label="Demo 3"
                  :icon="state.showIcons ? 'user' : undefined"
                  :active="state.activeDemo === 'demo3'"
                  @click="() => (state.activeDemo = 'demo3')"
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
