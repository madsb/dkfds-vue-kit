import { defineSetupVue3 } from '@histoire/plugin-vue'
import { h } from 'vue'
import type { App } from 'vue'
import { FdsIconCollection } from '@madsb/dkfds-vue3'
import ThemeSwitcher from './src/components/ThemeSwitcher.vue'

// Import default DKFDS styles initially - theme switcher will handle dynamic loading
import 'dkfds/dist/css/dkfds.css'

// Import component library styles
import '@madsb/dkfds-vue3/dist/dkfds-vue3.css'

// Import custom theme overrides for Histoire UI
import './src/assets/histoire-theme.css'

export const setupVue3 = defineSetupVue3(({ app, addWrapper }: { app: App; addWrapper: any }) => {
  // Register global components
  app.component('ThemeSwitcher', ThemeSwitcher)
  app.component('FdsIconCollection', FdsIconCollection)
  
  // Set global properties if needed
  app.config.globalProperties.$isDocs = true
  
  // Add a wrapper that includes FdsIconCollection for all stories
  addWrapper({
    render() {
      return h('div', [
        h(FdsIconCollection),
        h('div', this.$slots.default?.())
      ])
    }
  })
})