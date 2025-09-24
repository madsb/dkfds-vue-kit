# FdsSprogvaelger

The language selector component (sprogvælger) provides language switching functionality following DKFDS v11 specifications. It displays available languages with the active language shown first and marked with a check icon.

## Usage

```vue
<template>
  <FdsSprogvaelger v-model="languages" @language-change="handleLanguageChange" />
</template>

<script setup>
import { ref } from 'vue'
import { FdsSprogvaelger } from '@madsb/dkfds-vue-kit'

const languages = ref([
  { title: 'Dansk', active: true, lang: 'da', ariaLabel: 'Valgt sprog: Dansk' },
  { title: 'English', active: false, lang: 'en', ariaLabel: 'Select language: English' },
  { title: 'Deutsch', active: false, lang: 'de', ariaLabel: 'Wähle Sprache: Deutsch' },
])

const handleLanguageChange = (language) => {
  console.log('Language changed to:', language.lang)
}
</script>
```

## Props

| Prop             | Type                        | Default | Description                                       |
| ---------------- | --------------------------- | ------- | ------------------------------------------------- |
| `modelValue`     | `ExtendedFdsLanguageItem[]` | -       | Array of available languages with selection state |
| `autoSetLang`    | `boolean`                   | `false` | Automatically set document language attribute     |
| `preventDefault` | `boolean`                   | `true`  | Prevent default link navigation behavior          |

## Events

| Event               | Description                                |
| ------------------- | ------------------------------------------ |
| `update:modelValue` | Emitted when the language array is updated |
| `language-change`   | Emitted when a language is selected        |
| `lang`              | Emitted when language code changes         |

## Language Item Structure

```typescript
interface FdsLanguageItem {
  title: string // Display name (e.g., "Dansk", "English")
  active: boolean // Whether this is the currently active language
  lang: string // Language code (e.g., "da", "en")
  ariaLabel: string // Accessibility label (e.g., "Valgt sprog: Dansk")
  href?: string // Optional custom URL for navigation
}
```

## Accessibility

- The language list includes `aria-label="Vælg sprog fra listen"`
- Each language link has a descriptive `aria-label` indicating selection status
- Active language is visually indicated with a check mark icon
- Language codes are properly set in `lang` attributes
- Full keyboard navigation support (Tab, Enter, Space)
- Screen reader announces language changes and selection states

## Design Guidelines

- **Active Language First**: The currently active language is always displayed first
- **Visual Indication**: Active language shows a check mark icon
- **Descriptive Labels**: Use clear, localized aria-labels for each language
- **Language Codes**: Always provide correct ISO language codes
- **Navigation Handling**: Choose between URL-based or event-based language switching
- **Document Language**: Consider enabling `autoSetLang` for proper document language attributes

## Event Handling Patterns

### URL-Based Navigation

```vue
<FdsSprogvaelger :model-value="languagesWithUrls" :prevent-default="false" />
```

### Event-Based Switching

```vue
<FdsSprogvaelger v-model="languages" :prevent-default="true" @language-change="switchLanguage" />
```

### Document Language Management

```vue
<FdsSprogvaelger v-model="languages" :auto-set-lang="true" @lang="updateAppLanguage" />
```

## Themes

The language selector automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
