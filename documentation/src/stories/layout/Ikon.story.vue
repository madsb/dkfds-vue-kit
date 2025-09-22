<script setup lang="ts">
import { FdsIkon } from '@madsb/dkfds-vue3'

// Common icons used throughout DKFDS components
const commonIcons = [
  'home',
  'account',
  'arrow-back',
  'arrow-forward',
  'check',
  'close',
  'warning',
  'info',
  'error',
  'chevron-right',
  'chevron-left',
  'chevron-up',
  'chevron-down',
  'download',
  'save',
  'delete',
  'edit',
  'search',
  'menu',
  'refresh',
  'first-page',
  'last-page',
  'star',
  'bookmark',
  'add',
  'remove',
  'visibility',
  'visibility-off',
  'settings',
  'help',
  'calendar-month',
]

// Categorized icons for better organization
const iconCategories = {
  navigation: [
    'home',
    'arrow-back',
    'arrow-forward',
    'chevron-right',
    'chevron-left',
    'chevron-up',
    'chevron-down',
    'menu',
  ],
  actions: ['check', 'close', 'save', 'delete', 'edit', 'add', 'remove', 'refresh'],
  feedback: ['warning', 'info', 'error', 'help'],
  content: ['search', 'star', 'bookmark', 'calendar-month', 'download'],
  user: ['account', 'visibility', 'visibility-off', 'settings'],
}
</script>

<template>
  <Story title="Layout/Ikon" icon="carbon:image">
    <!-- Showcase all common DKFDS icons -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div>
          <h3 class="h5 mb-2">Common DKFDS Icons</h3>
          <div>
            <div v-for="icon in commonIcons" :key="icon">
              <FdsIkon :icon="icon" :decorative="true" />
              <span>{{ icon }}</span>
            </div>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The icon component follows DKFDS v11 design specifications with Material Design icons. Try
          switching themes using the global theme switcher to see how icons adapt to different
          contexts.
        </p>
      </div>
    </Variant>

    <!-- Accessibility demonstration -->
    <Variant title="Accessibility" icon="carbon:accessibility">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Decorative Icons (Hidden from Screen Readers)</h3>
          <div>
            <p>
              <FdsIkon icon="check" :decorative="true" :inline="true" />
              Task completed successfully
            </p>
            <p>
              <FdsIkon icon="warning" :decorative="true" :inline="true" />
              Please review the information below
            </p>
          </div>

          <hr class="my-6" />

          <h3 class="h6 mb-2">Meaningful Icons (Screen Reader Accessible)</h3>
          <div>
            <p>
              <FdsIkon
                icon="error"
                :decorative="false"
                aria-label="Error: Invalid input detected"
                :inline="true"
              />
              Form validation failed
            </p>
            <p>
              <FdsIkon
                icon="help"
                :decorative="false"
                aria-label="Help: Click for additional information"
                :inline="true"
              />
              Need assistance?
            </p>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Decorative icons use aria-hidden="true" and are hidden from screen readers. Meaningful
          icons require aria-label and role="img" for accessibility.
        </p>
      </div>
    </Variant>

    <!-- Size and inline behavior -->
    <Variant title="Size & Inline Usage" icon="carbon:text-scale">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Block Icons (Default)</h3>
          <div>
            <FdsIkon icon="home" :decorative="true" />
            <FdsIkon icon="account" :decorative="true" />
            <FdsIkon icon="settings" :decorative="true" />
          </div>

          <hr class="my-6" />

          <h3 class="h6 mb-2">Inline Icons (Text Height)</h3>
          <div>
            <p class="small-text">
              <FdsIkon icon="check" :decorative="true" :inline="true" />
              Small text with inline icon
            </p>
            <p>
              <FdsIkon icon="star" :decorative="true" :inline="true" />
              Normal text with inline icon
            </p>
            <p class="displayheading-1">
              <FdsIkon icon="bookmark" :decorative="true" :inline="true" />
              Large text with inline icon
            </p>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Inline icons automatically scale with the surrounding text size. Block icons maintain
          consistent size regardless of text context.
        </p>
      </div>
    </Variant>

    <!-- Categorized icons -->
    <Variant title="Icon Categories" icon="carbon:category">
      <div class="container py-6">
        <div>
          <div v-for="(icons, category) in iconCategories" :key="category">
            <h3 class="h6 mb-2">{{ category.charAt(0).toUpperCase() + category.slice(1) }}</h3>
            <div>
              <div v-for="icon in icons" :key="icon" class="small">
                <FdsIkon :icon="icon" :decorative="true" />
                <span>{{ icon }}</span>
              </div>
            </div>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Icons are organized by usage category. All icons use Material Design symbols from the
          DKFDS icon set.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          icon: 'home',
          inline: false,
          decorative: true,
          ariaLabel: 'Example icon description',
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <div>
            <div>
              <FdsIkon
                :icon="state.icon"
                :inline="state.inline"
                :decorative="state.decorative"
                :aria-label="!state.decorative ? state.ariaLabel : undefined"
              />
            </div>
            <div>
              <p>
                <FdsIkon
                  :icon="state.icon"
                  :inline="true"
                  :decorative="state.decorative"
                  :aria-label="!state.decorative ? state.ariaLabel : undefined"
                />
                Example text showing inline usage
              </p>
            </div>
          </div>
        </div>
      </template>

      <template #controls="{ state }">
        <HstSelect
          v-model="state.icon"
          title="Icon Name"
          :options="commonIcons.map((icon) => ({ value: icon, label: icon }))"
        />

        <HstCheckbox v-model="state.inline" title="Inline (scale with text)" />

        <HstCheckbox v-model="state.decorative" title="Decorative (aria-hidden)" />

        <HstText v-model="state.ariaLabel" title="ARIA Label" :disabled="state.decorative" />
      </template>
    </Variant>
  </Story>
</template>
