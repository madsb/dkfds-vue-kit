# Theme Switching in Histoire Documentation

The Histoire documentation site now supports dynamic theme switching between the three DKFDS themes:
- **Default** - Standard DKFDS theme
- **Virk.dk** - Business-oriented theme
- **Borger.dk** - Citizen-oriented theme

## How It Works

### 1. Theme Composable (`src/composables/useTheme.ts`)
- Manages theme state globally
- Persists theme selection in localStorage
- Dynamically loads/unloads CSS files
- Provides reactive theme state for components

### 2. Theme Switcher Component (`src/components/ThemeSwitcher.vue`)
- Simple dropdown selector for themes
- Automatically updates when theme changes
- Available globally in all stories

### 3. Theme CSS Files
- Located in `public/css/` directory
- Automatically copied from node_modules during build
- Served as static assets by Histoire

## Usage in Stories

### Basic Usage
```vue
<template>
  <Story title="My Component">
    <Variant title="Theme Demo">
      <div class="story-content">
        <ThemeSwitcher class="mb-4" />
        <!-- Your component here -->
        <YourComponent />
      </div>
    </Variant>
  </Story>
</template>
```

### Theme-Aware Components
Components automatically adapt to the selected theme since the CSS is loaded globally.

## Implementation Details

### Dynamic CSS Loading
When a theme is selected:
1. Previous theme CSS is removed from the DOM
2. New theme CSS is added via a `<link>` tag
3. Body class is updated (e.g., `theme-virkdk`)
4. Theme preference is saved to localStorage

### Build Process
The `copy-themes` script runs automatically when starting the dev server:
```bash
npm run copy-themes  # Copies DKFDS CSS files to public/css/
```

This is integrated into the dev and build scripts:
```json
{
  "scripts": {
    "dev": "npm run copy-themes && histoire dev",
    "build": "npm run copy-themes && histoire build"
  }
}
```

## Benefits

1. **Visual Testing**: See how components look in different themes
2. **Theme Persistence**: Theme selection is remembered across sessions
3. **No Style Conflicts**: Themes are properly isolated
4. **Easy Integration**: Theme switcher can be added to any story
5. **Production Ready**: Works in both dev and build modes

## Adding Theme Switcher to New Stories

Simply include the `<ThemeSwitcher />` component in your story:

```vue
<script setup lang="ts">
import { YourComponent } from '@madsb/dkfds-vue3'
</script>

<template>
  <Story title="Category/Component">
    <Variant title="With Theme Switcher">
      <div class="story-content">
        <ThemeSwitcher class="mb-4" />
        <YourComponent />
      </div>
    </Variant>
  </Story>
</template>
```

The component is globally registered, so no import is needed.