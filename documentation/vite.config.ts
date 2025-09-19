import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // Manually resolve DKFDS CSS files since they're not in the package exports
      'dkfds/dist/css/dkfds.css': resolve(__dirname, '../node_modules/dkfds/dist/css/dkfds.css'),
      'dkfds/dist/css/dkfds.min.css': resolve(
        __dirname,
        '../node_modules/dkfds/dist/css/dkfds.min.css',
      ),
    },
  },
  optimizeDeps: {
    exclude: ['dkfds'],
  },
})
