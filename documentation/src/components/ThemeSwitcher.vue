<template>
  <div
    ref="switcherRef"
    :class="['theme-switcher', `theme-switcher--${theme}` , { 'is-open': isOpen }]"
    :style="paletteStyle"
  >
    <button
      type="button"
      class="theme-toggle"
      @click="toggle"
      aria-label="Change theme"
      :aria-expanded="isOpen.toString()"
      aria-haspopup="true"
    >
      <span class="theme-toggle__icon" aria-hidden="true">
        <span class="theme-dot theme-dot--default"></span>
        <span class="theme-dot theme-dot--virk"></span>
        <span class="theme-dot theme-dot--borger"></span>
      </span>
    </button>

    <transition name="theme-menu">
      <div
        v-if="isOpen"
        class="theme-menu"
        role="menu"
        aria-label="Theme selection"
      >
        <p class="theme-menu__title">Choose a theme</p>
        <ul class="theme-menu__list" role="listbox">
          <li v-for="themeOption in themedOptions" :key="themeOption.value">
            <button
              type="button"
              class="theme-option"
              :class="{ 'is-active': theme === themeOption.value }"
              role="option"
              :aria-selected="(theme === themeOption.value).toString()"
              @click="changeTheme(themeOption.value)"
              :style="{
                '--option-swatch': themeOption.palette.swatch,
                '--option-accent': themeOption.palette.accent,
                '--option-text': themeOption.palette.text
              }"
            >
              <span class="theme-option__swatch" aria-hidden="true"></span>
              <span class="theme-option__label">{{ themeOption.label }}</span>
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useTheme } from '../composables/useTheme'
import type { DKFDSTheme } from '../composables/useTheme'

const { theme, themes, setTheme } = useTheme()

const isOpen = ref(false)
const switcherRef = ref<HTMLElement | null>(null)

const themePalette: Record<DKFDSTheme, { swatch: string; accent: string; text: string }> = {
  default: {
    swatch: 'linear-gradient(135deg, #6e7075, #3c4043)',
    accent: 'rgba(60, 64, 67, 0.22)',
    text: '#2b2f33'
  },
  virkdk: {
    swatch: 'linear-gradient(135deg, #0f4fa3, #1f6ad6)',
    accent: 'rgba(17, 82, 158, 0.22)',
    text: '#103b7a'
  },
  borgerdk: {
    swatch: 'linear-gradient(135deg, #0f6d3f, #2eb872)',
    accent: 'rgba(15, 109, 63, 0.22)',
    text: '#0c4f2f'
  }
}

const themedOptions = computed(() =>
  themes.map(option => ({
    ...option,
    palette: themePalette[option.value]
  }))
)

const activePalette = computed(() => themePalette[theme.value])

const paletteStyle = computed(() => ({
  '--theme-swatch': activePalette.value.swatch,
  '--theme-accent': activePalette.value.accent,
  '--theme-text': activePalette.value.text
}))

const close = () => {
  isOpen.value = false
}

const toggle = () => {
  isOpen.value = !isOpen.value
}

const changeTheme = (value: DKFDSTheme) => {
  setTheme(value)
  close()
}

const handleClickOutside = (event: MouseEvent | TouchEvent) => {
  if (!isOpen.value) {
    return
  }

  const target = event.target as Node | null
  if (target && switcherRef.value && !switcherRef.value.contains(target)) {
    close()
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    close()
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
  document.addEventListener('touchstart', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
  document.removeEventListener('touchstart', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.theme-switcher {
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #ffffff;
  transition: transform 120ms ease;
}

.theme-switcher.is-open {
  transform: translateY(-0.4rem);
}

.theme-toggle {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border: none;
  border-radius: 999px;
  padding: 0.6rem 1.2rem;
  background: var(--theme-swatch);
  box-shadow: 0 6px 18px var(--theme-accent);
  color: #ffffff;
  font-size: 1.2rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  transition: transform 160ms ease, box-shadow 160ms ease, filter 160ms ease;
  backdrop-filter: blur(4px);
}

.theme-toggle:hover {
  transform: translateY(-0.2rem);
  box-shadow: 0 10px 26px var(--theme-accent);
  filter: brightness(1.03);
}

.theme-toggle:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.8);
  outline-offset: 3px;
}

.theme-toggle__icon {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.theme-dot {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  opacity: 0.65;
  transition: opacity 160ms ease, transform 160ms ease;
}

.theme-switcher--default .theme-dot--default,
.theme-switcher--virkdk .theme-dot--virk,
.theme-switcher--borgerdk .theme-dot--borger {
  opacity: 1;
  transform: scale(1.15);
}

.theme-dot--default {
  background: linear-gradient(135deg, #6e7075, #3c4043);
}

.theme-dot--virk {
  background: linear-gradient(135deg, #0f4fa3, #1f6ad6);
}

.theme-dot--borger {
  background: linear-gradient(135deg, #0f6d3f, #2eb872);
}

.theme-menu {
  position: absolute;
  right: 0;
  bottom: calc(100% + 1.2rem);
  background: rgba(255, 255, 255, 0.96);
  border-radius: 1.2rem;
  padding: 1.2rem 1.4rem;
  min-width: 18rem;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.14);
  color: #0b2540;
}

.theme-menu::before {
  content: '';
  position: absolute;
  bottom: -0.6rem;
  right: 1.8rem;
  width: 1.2rem;
  height: 1.2rem;
  background: inherit;
  transform: rotate(45deg);
  border-radius: 0.2rem;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.1);
}

.theme-menu__title {
  margin: 0 0 0.8rem;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.theme-menu__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.6rem;
}

.theme-option {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border: none;
  background: rgba(15, 23, 42, 0.04);
  color: #0b2540;
  border-radius: 0.8rem;
  padding: 0.6rem 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease, box-shadow 160ms ease;
}

.theme-option:hover {
  transform: translateX(0.2rem);
  background: rgba(15, 23, 42, 0.07);
}

.theme-option:focus-visible {
  outline: 2px solid rgba(18, 64, 122, 0.4);
  outline-offset: 2px;
}

.theme-option.is-active {
  background: var(--option-accent);
  color: var(--option-text);
  box-shadow: 0 6px 18px var(--option-accent);
}

.theme-option__swatch {
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  background: var(--option-swatch);
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.2);
}

.theme-option__label {
  flex: 1;
  text-align: left;
}

.theme-menu-enter-active,
.theme-menu-leave-active {
  transition: opacity 140ms ease, transform 140ms ease;
}

.theme-menu-enter-from,
.theme-menu-leave-to {
  opacity: 0;
  transform: translateY(0.4rem);
}

@media (max-width: 600px) {
  .theme-toggle {
    padding: 0.6rem 0.9rem;
    font-size: 1rem;
  }

  .theme-menu {
    min-width: 16rem;
    bottom: calc(100% + 0.8rem);
  }
}
</style>
