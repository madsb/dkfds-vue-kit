import { ref, computed, watch, onMounted } from 'vue'

export type DKFDSTheme = 'default' | 'virkdk' | 'borgerdk'

const THEME_STORAGE_KEY = 'dkfds-theme'
const currentTheme = ref<DKFDSTheme>('default')

// CSS file paths for each theme (served from public directory)
const themePaths = {
  'default': '/css/dkfds.css',
  'virkdk': '/css/dkfds-virkdk.css',
  'borgerdk': '/css/dkfds-borgerdk.css'
} as const

export function useTheme() {
  const theme = computed({
    get: () => currentTheme.value,
    set: (value: DKFDSTheme) => {
      currentTheme.value = value
      localStorage.setItem(THEME_STORAGE_KEY, value)
      applyTheme(value)
    }
  })

  const themes: { value: DKFDSTheme; label: string }[] = [
    { value: 'default', label: 'Default' },
    { value: 'virkdk', label: 'Virk.dk' },
    { value: 'borgerdk', label: 'Borger.dk' }
  ]

  function applyTheme(themeName: DKFDSTheme) {
    // Remove existing theme stylesheets
    const existingThemeLinks = document.querySelectorAll('link[data-theme="dkfds"]')
    existingThemeLinks.forEach(link => link.remove())

    // Add new theme stylesheet
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = themePaths[themeName]
    link.setAttribute('data-theme', 'dkfds')
    document.head.appendChild(link)

    // Also update body class for theme-specific styling if needed
    document.body.classList.remove('theme-default', 'theme-virkdk', 'theme-borgerdk')
    document.body.classList.add(`theme-${themeName}`)
  }

  function initializeTheme() {
    // Load theme from localStorage or use default
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as DKFDSTheme | null
    if (savedTheme && themes.some(t => t.value === savedTheme)) {
      currentTheme.value = savedTheme
      applyTheme(savedTheme)
    } else {
      applyTheme('default')
    }
  }

  onMounted(() => {
    initializeTheme()
  })

  // Watch for theme changes
  watch(currentTheme, (newTheme) => {
    applyTheme(newTheme)
  })

  return {
    theme,
    themes,
    setTheme: (newTheme: DKFDSTheme) => {
      theme.value = newTheme
    }
  }
}