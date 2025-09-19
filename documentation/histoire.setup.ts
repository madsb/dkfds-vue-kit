import { defineSetupVue3 } from '@histoire/plugin-vue'
import { h } from 'vue'
import type { App } from 'vue'
import { FdsIconCollection } from '@madsb/dkfds-vue3'
import ThemeSwitcher from './src/components/ThemeSwitcher.vue'
import { resolveThemeUrl } from './src/utils/themeAssets'

// Import custom theme overrides for Histoire UI
import './src/assets/histoire-theme.css'

const isStoryFrame = typeof window !== 'undefined' && window.self !== window.top

async function ensureStoryStyles() {
  if (!isStoryFrame) {
    return
  }

  await import('@madsb/dkfds-vue3/dist/dkfds-vue3.css')

  if (!document.querySelector('link[data-theme="dkfds"]')) {
    const href = await resolveThemeUrl('default')
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    link.setAttribute('data-theme', 'dkfds')
    document.head.appendChild(link)
    document.body.classList.add('theme-default')
  }
}

export const setupVue3 = defineSetupVue3(
  async ({ app, addWrapper }: { app: App; addWrapper: any }) => {
    if (!isStoryFrame) {
      return
    }

    await ensureStoryStyles()

    // Register global components
    app.component('ThemeSwitcher', ThemeSwitcher)
    app.component('FdsIconCollection', FdsIconCollection)

    // Set global properties if needed
    app.config.globalProperties.$isDocs = true

    // Add a wrapper that includes FdsIconCollection and global theme switcher for all stories
    addWrapper({
      render() {
        return h('div', { class: 'histoire-wrapper' }, [
          h(FdsIconCollection),
          h('div', { class: 'global-theme-controls' }, [h(ThemeSwitcher)]),
          h('div', { class: 'story-container' }, this.$slots.default?.()),
        ])
      },
    })
  },
)
