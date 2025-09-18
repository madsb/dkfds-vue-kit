import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('..', import.meta.url))
const nodeModulesRoot = fileURLToPath(new URL('../node_modules', import.meta.url))

export default defineConfig({
  plugins: [HstVue()],
  
  setupFile: './histoire.setup.ts',
  
  storyMatch: [
    'src/stories/**/*.story.vue',
  ],
  
  tree: {
    groups: [
      {
        id: 'forms',
        title: 'Forms',
      },
      {
        id: 'input', 
        title: 'Input',
      },
      {
        id: 'navigation',
        title: 'Navigation',
      },
      {
        id: 'feedback',
        title: 'Feedback',
      },
      {
        id: 'data-display',
        title: 'Data Display',
      },
      {
        id: 'layout',
        title: 'Layout',
      },
    ],
  },
  
  theme: {
    title: 'DKFDS Vue 3 Components',
  },
  
  defaultStoryProps: {
    layout: {
      type: 'single',
      iframe: true,
    },
    responsiveDisabled: false,
    autoPropsDisabled: false,
  },
  
  backgroundPresets: [
    {
      label: 'White',
      color: '#ffffff',
    },
    {
      label: 'Gray 100',
      color: '#f5f5f5',
    },
    {
      label: 'Gray 200', 
      color: '#e0e0e0',
    },
    {
      label: 'DKFDS Background',
      color: '#f5f5f7',
    },
  ],
  
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      fs: {
        allow: [projectRoot, nodeModulesRoot],
      },
    },
  },
})
