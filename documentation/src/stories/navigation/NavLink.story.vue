<script setup lang="ts">
import { ref } from 'vue'
import { FdsNavLink } from '@madsb/dkfds-vue3'

// Demo state for interactions
const clickCount = ref(0)
const currentRoute = ref('/dashboard')

const handleNavClick = (href: string, event: MouseEvent) => {
  clickCount.value++
  if (href !== '#') {
    currentRoute.value = href
  }
}
</script>

<template>
  <Story title="Navigation/NavLink" :layout="{ type: 'grid', width: '100%' }" icon="carbon:link">
    <!-- Showcase all nav link variants -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Basic Links</h3>
            <div class="nav-links">
              <FdsNavLink href="/home" :current="currentRoute === '/home'" @click="(e) => handleNavClick('/home', e)">
                Home
              </FdsNavLink>
              <FdsNavLink href="/about" :current="currentRoute === '/about'" @click="(e) => handleNavClick('/about', e)">
                About
              </FdsNavLink>
              <FdsNavLink href="/contact" :current="currentRoute === '/contact'" @click="(e) => handleNavClick('/contact', e)">
                Contact
              </FdsNavLink>
            </div>
          </div>

          <div class="variant-section">
            <h3 class="section-title">With Icons</h3>
            <div class="nav-links">
              <FdsNavLink href="/dashboard" icon="dashboard" :current="currentRoute === '/dashboard'" @click="(e) => handleNavClick('/dashboard', e)">
                Dashboard
              </FdsNavLink>
              <FdsNavLink href="/settings" icon="settings" :current="currentRoute === '/settings'" @click="(e) => handleNavClick('/settings', e)">
                Settings
              </FdsNavLink>
              <FdsNavLink href="/profile" icon="person" :current="currentRoute === '/profile'" @click="(e) => handleNavClick('/profile', e)">
                Profile
              </FdsNavLink>
            </div>
          </div>

          <div class="variant-section">
            <h3 class="section-title">With Hints</h3>
            <div class="nav-links">
              <FdsNavLink href="/reports" hint="View analytics and reports" :current="currentRoute === '/reports'" @click="(e) => handleNavClick('/reports', e)">
                Reports
              </FdsNavLink>
              <FdsNavLink href="/users" hint="Manage user accounts" :current="currentRoute === '/users'" @click="(e) => handleNavClick('/users', e)">
                User Management
              </FdsNavLink>
            </div>
          </div>

          <div class="variant-section">
            <h3 class="section-title">Disabled State</h3>
            <div class="nav-links">
              <FdsNavLink href="/admin" :disabled="true">
                Admin Panel
              </FdsNavLink>
              <FdsNavLink href="/premium" icon="star" hint="Premium feature" :disabled="true">
                Premium Features
              </FdsNavLink>
            </div>
          </div>
        </div>
        <p class="story-hint">
          The nav link component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how navigation links adapt to different contexts.
          Current route: {{ currentRoute }} • Clicks: {{ clickCount }}
        </p>
      </div>
    </Variant>

    <!-- States demonstration -->
    <Variant title="States" icon="carbon:status-change">
      <div class="story-content">
        <div class="states-grid">
          <div class="state-column">
            <h3 class="section-subtitle">Normal</h3>
            <FdsNavLink href="/normal" @click="(e) => handleNavClick('/normal', e)">
              Normal Link
            </FdsNavLink>
            <FdsNavLink href="/with-icon" icon="home" @click="(e) => handleNavClick('/with-icon', e)">
              With Icon
            </FdsNavLink>
            <FdsNavLink href="/with-hint" hint="Additional information" @click="(e) => handleNavClick('/with-hint', e)">
              With Hint
            </FdsNavLink>
          </div>
          <div class="state-column">
            <h3 class="section-subtitle">Current</h3>
            <FdsNavLink href="/current" :current="true">
              Current Page
            </FdsNavLink>
            <FdsNavLink href="/current-icon" icon="star" :current="true">
              Current with Icon
            </FdsNavLink>
            <FdsNavLink href="/current-hint" hint="You are here" :current="true">
              Current with Hint
            </FdsNavLink>
          </div>
          <div class="state-column">
            <h3 class="section-subtitle">Disabled</h3>
            <FdsNavLink href="/disabled" :disabled="true">
              Disabled Link
            </FdsNavLink>
            <FdsNavLink href="/disabled-icon" icon="lock" :disabled="true">
              Disabled with Icon
            </FdsNavLink>
            <FdsNavLink href="/disabled-hint" hint="Access restricted" :disabled="true">
              Disabled with Hint
            </FdsNavLink>
          </div>
        </div>
        <p class="story-hint">
          Navigation links automatically handle accessibility attributes including aria-current for current page
          and aria-disabled for disabled states. Click count: {{ clickCount }}
        </p>
      </div>
    </Variant>

    <!-- Navigation patterns -->
    <Variant title="Navigation Patterns" icon="carbon:navigation">
      <div class="story-content">
        <h3 class="section-subtitle">Sidebar Navigation</h3>
        <div class="sidebar-demo">
          <nav aria-label="Main navigation" class="nav-sidebar">
            <FdsNavLink href="/dashboard" icon="dashboard" :current="currentRoute === '/dashboard'" @click="(e) => handleNavClick('/dashboard', e)">
              Dashboard
            </FdsNavLink>
            <FdsNavLink href="/projects" icon="folder" :current="currentRoute === '/projects'" @click="(e) => handleNavClick('/projects', e)">
              Projects
            </FdsNavLink>
            <FdsNavLink href="/tasks" icon="checklist" hint="Manage your tasks" :current="currentRoute === '/tasks'" @click="(e) => handleNavClick('/tasks', e)">
              Tasks
            </FdsNavLink>
            <FdsNavLink href="/reports" icon="bar-chart" hint="Analytics and insights" :current="currentRoute === '/reports'" @click="(e) => handleNavClick('/reports', e)">
              Reports
            </FdsNavLink>
            <FdsNavLink href="/settings" icon="settings" :current="currentRoute === '/settings'" @click="(e) => handleNavClick('/settings', e)">
              Settings
            </FdsNavLink>
          </nav>
        </div>

        <div class="divider" />

        <h3 class="section-subtitle">External Links</h3>
        <div class="nav-links">
          <FdsNavLink href="https://designsystem.dk" target="_blank" icon="launch">
            DKFDS Documentation
          </FdsNavLink>
          <FdsNavLink href="https://github.com" target="_blank" icon="logo-github">
            GitHub Repository
          </FdsNavLink>
        </div>

        <p class="story-hint">
          Navigation links can be used in sidebars, menus, or as standalone elements. They automatically
          prevent default navigation when href is '#' and emit click events for SPA routing.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          text: 'Navigation Link',
          href: '/example',
          current: false,
          disabled: false,
          icon: '',
          hint: '',
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <nav aria-label="Example navigation">
            <FdsNavLink
              :href="state.href"
              :current="state.current"
              :disabled="state.disabled"
              :icon="state.icon || undefined"
              :hint="state.hint || undefined"
              @click="(e) => handleNavClick(state.href, e)"
            >
              {{ state.text }}
            </FdsNavLink>
          </nav>
          <p class="story-hint">Click count: {{ clickCount }}</p>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.text" title="Link Text" />
        <HstText v-model="state.href" title="Href" />
        <HstCheckbox v-model="state.current" title="Current Page" />
        <HstCheckbox v-model="state.disabled" title="Disabled" />
        <HstText v-model="state.icon" title="Icon Name" />
        <HstText v-model="state.hint" title="Hint Text" />
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

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
}

.states-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3.2rem;
  margin-bottom: 2.4rem;
}

.state-column {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.sidebar-demo {
  max-width: 300px;
  margin-bottom: 2.4rem;
}

.nav-sidebar {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1.6rem;
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 0.4rem;
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

/* Navigation link spacing */
.story-content :deep(.nav-link) {
  margin: 0;
  display: block;
  width: 100%;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem;
  }

  .variant-grid {
    grid-template-columns: 1fr;
  }

  .states-grid {
    grid-template-columns: 1fr;
  }

  .sidebar-demo {
    max-width: 100%;
  }
}
</style>

<docs lang="md">
# FdsNavLink

Flexible navigation link component implementing DKFDS v11 navigation specifications. Suitable for sidebar navigation, menus, and general navigation contexts with support for current page indication, disabled states, icons, and hint text.

## Usage

```vue
<template>
  <FdsNavLink 
    href="/dashboard" 
    :current="$route.path === '/dashboard'"
    icon="dashboard"
    hint="Main overview page"
    @click="handleNavigation"
  >
    Dashboard
  </FdsNavLink>
</template>

<script setup>
import { FdsNavLink } from '@madsb/dkfds-vue3'

const handleNavigation = (event) => {
  // Handle navigation in SPA
  console.log('Navigating to dashboard')
}
</script>
```

## Props

| Prop       | Type      | Default | Description                                               |
| ---------- | --------- | ------- | --------------------------------------------------------- |
| `href`     | `string`  | `'#'`   | Link destination URL (relative or absolute)               |
| `current`  | `boolean` | `false` | Whether this is the current page/section                 |
| `disabled` | `boolean` | `false` | Whether the link is disabled                             |
| `icon`     | `string`  | -       | Optional DKFDS icon identifier                           |
| `hint`     | `string`  | -       | Optional hint/description text below the link           |

## Events

| Event   | Description                                                     |
| ------- | --------------------------------------------------------------- |
| `click` | Emitted when the link is clicked (even when href is '#')      |

## Accessibility

- Automatically sets `aria-current="page"` for current page links
- Sets `aria-disabled="true"` for disabled links
- Disabled links render as `<span>` elements instead of `<a>` tags
- Icons are marked as decorative with `aria-hidden="true"`
- Supports keyboard navigation (Tab, Enter)
- Proper semantic HTML structure for screen readers

## Design Guidelines

- Use for primary navigation elements in sidebars, menus, and breadcrumbs
- Mark the current page/section with the `current` prop
- Use icons consistently throughout navigation sections
- Provide hint text for complex or less obvious navigation options
- Use disabled state for restricted access or unavailable features
- Group related navigation links together in semantic containers

## Navigation Patterns

- **Sidebar Navigation**: Stack vertically with consistent spacing
- **Menu Systems**: Use within FdsMenu components for structured navigation
- **External Links**: Automatically handles external link styling and behavior
- **SPA Integration**: Prevents default navigation when href is '#' for client-side routing

## Themes

The navigation link component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with subtle hover states
- **VirkDK**: Business-oriented styling optimized for Virk.dk
- **BorgerDK**: Citizen-friendly styling optimized for Borger.dk
</docs>