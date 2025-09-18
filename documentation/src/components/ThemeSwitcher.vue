<template>
  <div class="theme-switcher">
    <label for="theme-select" class="theme-label">Theme:</label>
    <select 
      id="theme-select" 
      v-model="theme" 
      class="theme-select"
    >
      <option v-for="themeOption in themes" :key="themeOption.value" :value="themeOption.value">
        {{ themeOption.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '../composables/useTheme'

const { theme, themes } = useTheme()
</script>

<style scoped>
.theme-switcher {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #f5f5f7;
  border-radius: 4px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.theme-label {
  font-size: 1.4rem; /* 14px with 10px base */
  font-weight: 500;
  color: #333;
}

.theme-select {
  padding: 0.4rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  font-size: 1.4rem; /* 14px with 10px base */
  cursor: pointer;
  min-width: 120px;
}

.theme-select:hover {
  border-color: #999;
}

.theme-select:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}
</style>