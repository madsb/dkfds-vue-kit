<script setup lang="ts">
import { ref } from 'vue'
import { FdsNavLink } from '@madsb/dkfds-vue-kit'

// Demo state for interactions
const clickCount = ref(0)
const currentRoute = ref('/dashboard')

const handleNavClick = (href: string, _event: MouseEvent) => {
  clickCount.value++
  if (href !== '#') {
    currentRoute.value = href
  }
}
</script>

<template>
  <Story title="Navigation/NavLink" icon="carbon:link">
    <!-- Showcase all nav link variants -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Basic Links</h3>
            <div>
              <FdsNavLink
                href="/home"
                :current="currentRoute === '/home'"
                @click="(e) => handleNavClick('/home', e)"
              >
                Home
              </FdsNavLink>
              <FdsNavLink
                href="/about"
                :current="currentRoute === '/about'"
                @click="(e) => handleNavClick('/about', e)"
              >
                About
              </FdsNavLink>
              <FdsNavLink
                href="/contact"
                :current="currentRoute === '/contact'"
                @click="(e) => handleNavClick('/contact', e)"
              >
                Contact
              </FdsNavLink>
            </div>
          </div>

          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">With Icons</h3>
            <div>
              <FdsNavLink
                href="/dashboard"
                icon="dashboard"
                :current="currentRoute === '/dashboard'"
                @click="(e) => handleNavClick('/dashboard', e)"
              >
                Dashboard
              </FdsNavLink>
              <FdsNavLink
                href="/settings"
                icon="settings"
                :current="currentRoute === '/settings'"
                @click="(e) => handleNavClick('/settings', e)"
              >
                Settings
              </FdsNavLink>
              <FdsNavLink
                href="/profile"
                icon="person"
                :current="currentRoute === '/profile'"
                @click="(e) => handleNavClick('/profile', e)"
              >
                Profile
              </FdsNavLink>
            </div>
          </div>

          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">With Hints</h3>
            <div>
              <FdsNavLink
                href="/reports"
                hint="View analytics and reports"
                :current="currentRoute === '/reports'"
                @click="(e) => handleNavClick('/reports', e)"
              >
                Reports
              </FdsNavLink>
              <FdsNavLink
                href="/users"
                hint="Manage user accounts"
                :current="currentRoute === '/users'"
                @click="(e) => handleNavClick('/users', e)"
              >
                User Management
              </FdsNavLink>
            </div>
          </div>

          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Disabled State</h3>
            <div>
              <FdsNavLink href="/admin" :disabled="true"> Admin Panel </FdsNavLink>
              <FdsNavLink href="/premium" icon="star" hint="Premium feature" :disabled="true">
                Premium Features
              </FdsNavLink>
            </div>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The nav link component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how navigation links adapt to different contexts. Current
          route: {{ currentRoute }} • Clicks: {{ clickCount }}
        </p>
      </div>
    </Variant>

    <!-- States demonstration -->
    <Variant title="States" icon="carbon:status-change">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-lg-4 mb-5">
            <h3 class="h6 mb-2">Normal</h3>
            <FdsNavLink href="/normal" @click="(e) => handleNavClick('/normal', e)">
              Normal Link
            </FdsNavLink>
            <FdsNavLink
              href="/with-icon"
              icon="home"
              @click="(e) => handleNavClick('/with-icon', e)"
            >
              With Icon
            </FdsNavLink>
            <FdsNavLink
              href="/with-hint"
              hint="Additional information"
              @click="(e) => handleNavClick('/with-hint', e)"
            >
              With Hint
            </FdsNavLink>
          </div>
          <div class="col-12 col-lg-4 mb-5">
            <h3 class="h6 mb-2">Current</h3>
            <FdsNavLink href="/current" :current="true"> Current Page </FdsNavLink>
            <FdsNavLink href="/current-icon" icon="star" :current="true">
              Current with Icon
            </FdsNavLink>
            <FdsNavLink href="/current-hint" hint="You are here" :current="true">
              Current with Hint
            </FdsNavLink>
          </div>
          <div class="col-12 col-lg-4 mb-5">
            <h3 class="h6 mb-2">Disabled</h3>
            <FdsNavLink href="/disabled" :disabled="true"> Disabled Link </FdsNavLink>
            <FdsNavLink href="/disabled-icon" icon="lock" :disabled="true">
              Disabled with Icon
            </FdsNavLink>
            <FdsNavLink href="/disabled-hint" hint="Access restricted" :disabled="true">
              Disabled with Hint
            </FdsNavLink>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Navigation links automatically handle accessibility attributes including aria-current for
          current page and aria-disabled for disabled states. Click count: {{ clickCount }}
        </p>
      </div>
    </Variant>

    <!-- Navigation patterns -->
    <Variant title="Navigation Patterns" icon="carbon:navigation">
      <div class="container py-6">
        <h3 class="h6 mb-2">Sidebar Navigation</h3>
        <div>
          <nav aria-label="Main navigation">
            <FdsNavLink
              href="/dashboard"
              icon="dashboard"
              :current="currentRoute === '/dashboard'"
              @click="(e) => handleNavClick('/dashboard', e)"
            >
              Dashboard
            </FdsNavLink>
            <FdsNavLink
              href="/projects"
              icon="folder"
              :current="currentRoute === '/projects'"
              @click="(e) => handleNavClick('/projects', e)"
            >
              Projects
            </FdsNavLink>
            <FdsNavLink
              href="/tasks"
              icon="checklist"
              hint="Manage your tasks"
              :current="currentRoute === '/tasks'"
              @click="(e) => handleNavClick('/tasks', e)"
            >
              Tasks
            </FdsNavLink>
            <FdsNavLink
              href="/reports"
              icon="bar-chart"
              hint="Analytics and insights"
              :current="currentRoute === '/reports'"
              @click="(e) => handleNavClick('/reports', e)"
            >
              Reports
            </FdsNavLink>
            <FdsNavLink
              href="/settings"
              icon="settings"
              :current="currentRoute === '/settings'"
              @click="(e) => handleNavClick('/settings', e)"
            >
              Settings
            </FdsNavLink>
          </nav>
        </div>

        <hr class="my-6" />

        <h3 class="h6 mb-2">External Links</h3>
        <div>
          <FdsNavLink href="https://designsystem.dk" target="_blank" icon="launch">
            DKFDS Documentation
          </FdsNavLink>
          <FdsNavLink href="https://github.com" target="_blank" icon="logo-github">
            GitHub Repository
          </FdsNavLink>
        </div>

        <p class="mt-4 mb-0">
          Navigation links can be used in sidebars, menus, or as standalone elements. They
          automatically prevent default navigation when href is '#' and emit click events for SPA
          routing.
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
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
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
          <p class="mt-4 mb-0">Click count: {{ clickCount }}</p>
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
