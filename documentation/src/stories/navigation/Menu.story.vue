<script setup lang="ts">
import { ref } from 'vue'
import { FdsMenu, FdsMenuItem } from '@madsb/dkfds-vue3'

// Demo state for interactions
const currentPage = ref('dashboard')
const expandedSubmenu = ref(false)
const showSettingsSubmenu = ref(false)
const currentStep = ref(2)

const handleNavigation = (id?: string) => {
  if (id) {
    currentPage.value = id
  }
}

const toggleSubmenu = () => {
  expandedSubmenu.value = !expandedSubmenu.value
}

const toggleSettings = () => {
  showSettingsSubmenu.value = !showSettingsSubmenu.value
}
</script>

<template>
  <Story title="Navigation/Menu" icon="carbon:menu">
    <!-- Showcase all menu variants -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Sidebar Menu</h3>
            <FdsMenu variant="sidemenu" aria-label="Main navigation">
              <FdsMenuItem href="/dashboard" :current="true">
                Dashboard
              </FdsMenuItem>
              <FdsMenuItem href="/reports">
                Reports
              </FdsMenuItem>
              <FdsMenuItem href="/settings">
                Settings
              </FdsMenuItem>
            </FdsMenu>
          </div>

          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">With Hints</h3>
            <FdsMenu variant="sidemenu" aria-label="Application navigation">
              <FdsMenuItem 
                href="/analytics" 
                hint="View performance metrics and insights"
                :current="true"
              >
                Analytics
              </FdsMenuItem>
              <FdsMenuItem 
                href="/users" 
                hint="Manage user accounts and permissions"
              >
                User Management
              </FdsMenuItem>
            </FdsMenu>
          </div>

          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Numbered Steps</h3>
            <FdsMenu aria-label="Application process">
              <FdsMenuItem :index="1" href="/step1" :current="true">
                Personal Information
              </FdsMenuItem>
              <FdsMenuItem :index="2" href="/step2">
                Document Upload
              </FdsMenuItem>
              <FdsMenuItem :index="3" href="/step3">
                Review & Submit
              </FdsMenuItem>
            </FdsMenu>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The menu components follow DKFDS v11 navigation specifications. Try switching themes using
          the global theme switcher to see how menus adapt to different contexts. Sidebar menus 
          provide semantic navigation landmarks with proper ARIA support.
        </p>
      </div>
    </Variant>

    <!-- Submenu structures -->
    <Variant title="With Submenus" icon="carbon:tree-view">
      <div class="container py-6">
        <h3 class="h5 mb-2">Nested Navigation Structure</h3>
        <FdsMenu variant="sidemenu" aria-label="Application navigation">
          <FdsMenuItem href="/dashboard" :current="currentPage === 'dashboard'" id="dashboard" @navigate="handleNavigation">
            Dashboard
          </FdsMenuItem>

          <FdsMenuItem 
            href="/settings" 
            :expanded="showSettingsSubmenu" 
            id="settings"
            @click="toggleSettings"
          >
            Settings
            <template #submenu>
              <FdsMenu variant="submenu">
                <FdsMenuItem 
                  href="/settings/profile" 
                  :current="currentPage === 'profile'" 
                  id="profile"
                  @navigate="handleNavigation"
                >
                  Profile Settings
                </FdsMenuItem>
                <FdsMenuItem 
                  href="/settings/security" 
                  :current="currentPage === 'security'" 
                  id="security"
                  @navigate="handleNavigation"
                >
                  Security
                </FdsMenuItem>
                <FdsMenuItem 
                  href="/settings/notifications" 
                  :current="currentPage === 'notifications'" 
                  id="notifications"
                  @navigate="handleNavigation"
                >
                  Notifications
                </FdsMenuItem>
              </FdsMenu>
            </template>
          </FdsMenuItem>

          <FdsMenuItem href="/help" :current="currentPage === 'help'" id="help" @navigate="handleNavigation">
            Help & Support
          </FdsMenuItem>
        </FdsMenu>

        <p class="mt-4 mb-0">
          Click "Settings" to toggle the submenu visibility. Submenus use the variant="submenu" 
          and are placed within the submenu slot of parent menu items. Current page: {{ currentPage }}
        </p>
      </div>
    </Variant>

    <!-- Numbered navigation for processes -->
    <Variant title="Process Steps" icon="carbon:process">
      <div class="container py-6">
        <h3 class="h5 mb-2">Step-by-Step Navigation</h3>
        <FdsMenu aria-label="Application process steps">
          <FdsMenuItem 
            :index="1" 
            href="/step1" 
            :current="currentStep === 1"
            hint="Enter your personal details"
          >
            Personal Information
          </FdsMenuItem>
          <FdsMenuItem 
            :index="2" 
            href="/step2" 
            :current="currentStep === 2"
            hint="Upload required documents"
          >
            Document Upload
          </FdsMenuItem>
          <FdsMenuItem 
            :index="3" 
            href="/step3" 
            :current="currentStep === 3"
            hint="Verify information before submitting"
          >
            Review & Submit
          </FdsMenuItem>
          <FdsMenuItem 
            :index="4" 
            href="/step4" 
            :current="currentStep === 4"
            hint="Application confirmation"
          >
            Confirmation
          </FdsMenuItem>
        </FdsMenu>

        <hr class="my-6" />

        <h3 class="h6 mb-2">Step Navigation</h3>
        <div class="button-group">
          <button 
            type="button" 
            class="button button-secondary" 
            :disabled="currentStep === 1"
            @click="currentStep = Math.max(1, currentStep - 1)"
          >
            Previous Step
          </button>
          <button 
            type="button" 
            class="button button-primary" 
            :disabled="currentStep === 4"
            @click="currentStep = Math.min(4, currentStep + 1)"
          >
            Next Step
          </button>
        </div>

        <p class="mt-4 mb-0">
          Current step: {{ currentStep }}. Numbered menu items automatically display step numbers 
          and can include hint text for additional context. Use the buttons to simulate step progression.
        </p>
      </div>
    </Variant>

    <!-- Menu states and interactions -->
    <Variant title="States & Accessibility" icon="carbon:touch-interaction">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-lg-4 mb-5">
            <h3 class="h6 mb-2">Current Page States</h3>
            <FdsMenu variant="sidemenu" aria-label="State demonstration">
              <FdsMenuItem href="/page1" :current="true">
                Current Page (Active)
              </FdsMenuItem>
              <FdsMenuItem href="/page2">
                Regular Page
              </FdsMenuItem>
              <FdsMenuItem href="/page3" :active="true">
                Active Item (No Submenu)
              </FdsMenuItem>
            </FdsMenu>
          </div>

          <div class="col-12 col-lg-4 mb-5">
            <h3 class="h6 mb-2">Expanded States</h3>
            <FdsMenu variant="sidemenu" aria-label="Expansion demonstration">
              <FdsMenuItem 
                href="/parent1" 
                :expanded="expandedSubmenu"
                @click="toggleSubmenu"
              >
                Parent Item ({{ expandedSubmenu ? 'Expanded' : 'Collapsed' }})
                <template #submenu>
                  <FdsMenu variant="submenu">
                    <FdsMenuItem href="/child1">
                      Child Item 1
                    </FdsMenuItem>
                    <FdsMenuItem href="/child2">
                      Child Item 2
                    </FdsMenuItem>
                  </FdsMenu>
                </template>
              </FdsMenuItem>
              <FdsMenuItem href="/parent2">
                Regular Parent Item
              </FdsMenuItem>
            </FdsMenu>
          </div>
        </div>

        <hr class="my-6" />

        <h3 class="h6 mb-2">Accessibility Features</h3>
        <ul>
          <li><strong>Keyboard Navigation:</strong> Tab through menu items, Enter/Space to activate</li>
          <li><strong>ARIA Labels:</strong> Sidebar menus include navigation landmarks</li>
          <li><strong>Current Page:</strong> Uses aria-current="page" for screen readers</li>
          <li><strong>Semantic Structure:</strong> Proper nav/ul/li hierarchy for assistive technology</li>
        </ul>

        <p class="mt-4 mb-0">
          Menu items support keyboard navigation and include proper ARIA attributes. 
          Click the expandable item to toggle submenu visibility. Screen readers will 
          announce navigation landmarks and current page status.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          variant: 'sidemenu',
          ariaLabel: 'Navigation menu',
          itemText: 'Menu Item',
          href: '/example',
          current: false,
          expanded: false,
          withHint: false,
          hint: 'Optional description text',
          withIndex: false,
          index: 1,
          withSubmenu: false,
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <FdsMenu 
            :variant="state.variant" 
            :aria-label="state.variant === 'sidemenu' ? state.ariaLabel : undefined"
          >
            <FdsMenuItem
              :href="state.href"
              :current="state.current"
              :expanded="state.expanded"
              :hint="state.withHint ? state.hint : undefined"
              :index="state.withIndex ? state.index : null"
            >
              {{ state.itemText }}
              <template v-if="state.withSubmenu" #submenu>
                <FdsMenu variant="submenu">
                  <FdsMenuItem href="/sub1">
                    Submenu Item 1
                  </FdsMenuItem>
                  <FdsMenuItem href="/sub2">
                    Submenu Item 2
                  </FdsMenuItem>
                </FdsMenu>
              </template>
            </FdsMenuItem>

            <FdsMenuItem href="/other" :current="!state.current">
              Other Menu Item
            </FdsMenuItem>
          </FdsMenu>
        </div>
      </template>

      <template #controls="{ state }">
        <HstSelect
          v-model="state.variant"
          title="Menu Variant"
          :options="[
            { value: 'sidemenu', label: 'Sidebar Menu' },
            { value: 'submenu', label: 'Submenu' },
          ]"
        />

        <HstText v-model="state.ariaLabel" title="ARIA Label" />

        <HstText v-model="state.itemText" title="Menu Item Text" />

        <HstText v-model="state.href" title="Link URL" />

        <HstCheckbox v-model="state.current" title="Current Page" />

        <HstCheckbox v-model="state.expanded" title="Expanded State" />

        <HstCheckbox v-model="state.withHint" title="Include Hint Text" />

        <HstText v-model="state.hint" title="Hint Text" :disabled="!state.withHint" />

        <HstCheckbox v-model="state.withIndex" title="Include Index Number" />

        <HstNumber v-model="state.index" title="Index Number" :disabled="!state.withIndex" />

        <HstCheckbox v-model="state.withSubmenu" title="Include Submenu" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
# FdsMenu & FdsMenuItem

Navigation menu components implementing DKFDS v11 specifications for creating accessible navigation structures. The menu system supports sidebar navigation, nested submenus, numbered items, and proper semantic structure.

## Usage

```vue
<template>
  <!-- Basic sidebar menu -->
  <FdsMenu variant="sidemenu" aria-label="Main navigation">
    <FdsMenuItem href="/dashboard" :current="true">
      Dashboard
    </FdsMenuItem>
    <FdsMenuItem href="/reports">
      Reports
    </FdsMenuItem>
  </FdsMenu>

  <!-- Menu with submenus -->
  <FdsMenu variant="sidemenu" aria-label="Application navigation">
    <FdsMenuItem href="/settings" :expanded="showSubmenu">
      Settings
      <template #submenu>
        <FdsMenu variant="submenu">
          <FdsMenuItem href="/settings/profile">Profile</FdsMenuItem>
          <FdsMenuItem href="/settings/security">Security</FdsMenuItem>
        </FdsMenu>
      </template>
    </FdsMenuItem>
  </FdsMenu>

  <!-- Numbered process steps -->
  <FdsMenu aria-label="Application process">
    <FdsMenuItem :index="1" href="/step1" :current="true">
      Personal Information
    </FdsMenuItem>
    <FdsMenuItem :index="2" href="/step2" hint="Upload documents">
      Document Upload
    </FdsMenuItem>
  </FdsMenu>
</template>

<script setup>
import { FdsMenu, FdsMenuItem } from '@madsb/dkfds-vue3'
</script>
```

## FdsMenu Props

| Prop        | Type                       | Default     | Description                                       |
| ----------- | -------------------------- | ----------- | ------------------------------------------------- |
| `variant`   | `'sidemenu' \| 'submenu'`  | `'sidemenu'` | Menu type - sidemenu creates nav element          |
| `ariaLabel` | `string`                   | -           | ARIA label for navigation (required for sidemenu) |

## FdsMenuItem Props

| Prop       | Type      | Default | Description                                        |
| ---------- | --------- | ------- | -------------------------------------------------- |
| `id`       | `string`  | -       | Unique identifier for navigation events            |
| `active`   | `boolean` | `false` | Active state for expanded styling                  |
| `href`     | `string`  | -       | Link destination URL                               |
| `index`    | `number`  | `null`  | Optional numeric prefix (e.g., "1. Dashboard")    |
| `current`  | `boolean` | `false` | Marks item as current page                         |
| `expanded` | `boolean` | `false` | Controls submenu visibility                        |
| `hint`     | `string`  | -       | Optional descriptive text below menu item         |

## FdsMenuItem Events

| Event      | Description                              |
| ---------- | ---------------------------------------- |
| `navigate` | Emitted when menu item is navigated to  |
| `click`    | Emitted when menu item is clicked        |

## FdsMenuItem Slots

| Slot      | Description                              |
| --------- | ---------------------------------------- |
| `default` | Menu item text content                   |
| `submenu` | Submenu content (FdsMenu with variant="submenu") |

## Accessibility

- **Keyboard Navigation**: Full keyboard support with Tab, Enter, and Space keys
- **ARIA Landmarks**: Sidebar menus create navigation landmarks for screen readers
- **Current Page**: Uses `aria-current="page"` to identify current location
- **Semantic Structure**: Proper nav/ul/li hierarchy for assistive technology
- **Focus Management**: Keyboard focus is properly managed through menu items
- **Screen Reader Support**: Menu structure and states are announced to screen readers

## Design Guidelines

- **Sidebar Menus**: Use `variant="sidemenu"` for main navigation with proper ARIA labels
- **Submenus**: Use `variant="submenu"` for nested navigation within parent items
- **Current Page**: Always mark the current page with the `current` prop
- **Numbered Items**: Use the `index` prop for step-by-step processes
- **Hint Text**: Provide additional context with the `hint` prop when helpful
- **Expandable Menus**: Use the `expanded` prop to control submenu visibility
- **Semantic HTML**: Always provide meaningful `aria-label` for sidebar menus

## Navigation Patterns

- **Single Level**: Simple list of navigation links
- **Nested Structure**: Parent items with submenu children
- **Process Steps**: Numbered items for sequential workflows
- **Mixed Content**: Combine regular items with expandable sections

## Themes

The menu components automatically adapt to the selected theme:
- **Default**: Standard DKFDS styling with appropriate contrast
- **VirkDK**: Business-oriented styling for Virk.dk applications
- **BorgerDK**: Citizen-oriented styling for Borger.dk services
</docs>