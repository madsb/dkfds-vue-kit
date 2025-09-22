import { ref, computed, watch, onMounted } from 'vue'
import { resolveThemeUrl } from '../utils/themeAssets'
import type { DKFDSTheme } from '../utils/themeAssets'

export type { DKFDSTheme } from '../utils/themeAssets'

const THEME_STORAGE_KEY = 'dkfds-theme'
const currentTheme = ref<DKFDSTheme>('default')

export function useTheme() {
  const theme = computed({
    get: () => currentTheme.value,
    set: (value: DKFDSTheme) => {
      currentTheme.value = value
      if (typeof window !== 'undefined') {
        localStorage.setItem(THEME_STORAGE_KEY, value)
      }
    },
  })

  const themes: { value: DKFDSTheme; label: string }[] = [
    { value: 'default', label: 'Default' },
    { value: 'virkdk', label: 'Virk.dk' },
    { value: 'borgerdk', label: 'Borger.dk' },
  ]

  async function applyTheme(themeName: DKFDSTheme) {
    if (typeof document === 'undefined') {
      return
    }

    const href = await resolveThemeUrl(themeName)

    const existingThemeLinks = document.querySelectorAll('link[data-theme="dkfds"]')
    existingThemeLinks.forEach((link) => link.remove())

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    link.setAttribute('data-theme', 'dkfds')
    document.head.appendChild(link)

    document.body.classList.remove('theme-default', 'theme-virkdk', 'theme-borgerdk')
    document.body.classList.add(`theme-${themeName}`)
  }

  async function initializeTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as DKFDSTheme | null
    if (savedTheme && themes.some((t) => t.value === savedTheme)) {
      currentTheme.value = savedTheme
    } else {
      currentTheme.value = 'default'
      localStorage.setItem(THEME_STORAGE_KEY, 'default')
    }
  }

  onMounted(() => {
    void initializeTheme()
  })

  if (typeof window !== 'undefined') {
    watch(
      currentTheme,
      (newTheme) => {
        void applyTheme(newTheme)
      },
      { immediate: true },
    )
  }

  return {
    theme,
    themes,
    setTheme: (newTheme: DKFDSTheme) => {
      theme.value = newTheme
    },
  }
}
