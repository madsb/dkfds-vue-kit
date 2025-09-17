<script setup lang="ts">
import { ref } from 'vue'
import { FdsSprogvaelger, type FdsLanguageItem } from '@madsb/dkfds-vue3'

// Demo state for interactive examples
const demoLanguages = ref<FdsLanguageItem[]>([
  { title: 'Dansk', active: true, lang: 'da', ariaLabel: 'Valgt sprog: Dansk' },
  { title: 'English', active: false, lang: 'en', ariaLabel: 'Vælg sprog: English' },
  { title: 'Deutsch', active: false, lang: 'de', ariaLabel: 'Vælg sprog: Deutsch' },
])

const handleLanguageChange = (language: any) => {
  console.log('Language changed to:', language.lang)
}

const handleLangCode = (lang: string) => {
  console.log('Language code:', lang)
}
</script>

<template>
  <Story title="Layout/Sprogvaelger" :layout="{ type: 'grid', width: '100%' }" icon="carbon:language">
    <!-- Showcase all language selector variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Nordic Languages</h3>
            <FdsSprogvaelger
              v-model="demoLanguages"
              @language-change="handleLanguageChange"
              @lang="handleLangCode"
            />
          </div>
          <div class="variant-section">
            <h3 class="section-title">European Languages</h3>
            <FdsSprogvaelger
              :model-value="[
                { title: 'Français', active: false, lang: 'fr', ariaLabel: 'Choisir la langue: Français' },
                { title: 'Español', active: false, lang: 'es', ariaLabel: 'Seleccionar idioma: Español' },
                { title: 'Italiano', active: true, lang: 'it', ariaLabel: 'Lingua selezionata: Italiano' },
                { title: 'Nederlands', active: false, lang: 'nl', ariaLabel: 'Taal selecteren: Nederlands' },
              ]"
            />
          </div>
          <div class="variant-section">
            <h3 class="section-title">With Custom URLs</h3>
            <FdsSprogvaelger
              :model-value="[
                { title: 'Dansk', active: true, lang: 'da', ariaLabel: 'Valgt sprog: Dansk', href: '/da' },
                { title: 'English', active: false, lang: 'en', ariaLabel: 'Select language: English', href: '/en' },
                { title: 'Svenska', active: false, lang: 'sv', ariaLabel: 'Välj språk: Svenska', href: '/sv' },
              ]"
              :prevent-default="false"
            />
          </div>
        </div>
        <p class="story-hint">
          The language selector follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how the component adapts to different contexts.
          Active languages are displayed first with a check mark icon.
        </p>
      </div>
    </Variant>

    <!-- Language switching behavior -->
    <Variant title="Interactive Switching" icon="carbon:touch-interaction">
      <div class="story-content">
        <div class="demo-container">
          <FdsSprogvaelger
            v-model="demoLanguages"
            :auto-set-lang="true"
            @language-change="handleLanguageChange"
            @lang="handleLangCode"
          />
          
          <div class="current-state">
            <h3 class="section-subtitle">Current Active Language</h3>
            <div class="language-display">
              {{ demoLanguages.find(l => l.active)?.title }} ({{ demoLanguages.find(l => l.active)?.lang }})
            </div>
          </div>
        </div>
        <p class="story-hint">
          Click any language to switch. This example has `autoSetLang` enabled, which updates the document's
          language attribute. Check the browser console to see emitted events.
        </p>
      </div>
    </Variant>

    <!-- Accessibility features -->
    <Variant title="Accessibility" icon="carbon:accessibility">
      <div class="story-content">
        <div class="accessibility-demo">
          <h3 class="section-subtitle">ARIA Labels and Screen Reader Support</h3>
          <FdsSprogvaelger
            :model-value="[
              { title: 'Dansk', active: true, lang: 'da', ariaLabel: 'Valgt sprog: Dansk' },
              { title: 'English', active: false, lang: 'en', ariaLabel: 'Select language: English' },
              { title: 'العربية', active: false, lang: 'ar', ariaLabel: 'اختر اللغة: العربية' },
            ]"
          />
          
          <div class="accessibility-info">
            <h4 class="info-title">Accessibility Features:</h4>
            <ul class="feature-list">
              <li>List has `aria-label="Vælg sprog fra listen"`</li>
              <li>Each link has descriptive `aria-label` with selection status</li>
              <li>Active language indicated with check mark icon (decorative)</li>
              <li>Proper language codes in `lang` attributes</li>
              <li>Keyboard navigation with Tab and Enter/Space</li>
              <li>Focus states clearly visible</li>
            </ul>
          </div>
        </div>
        <p class="story-hint">
          The component includes comprehensive accessibility features for screen readers.
          Test with keyboard navigation (Tab to focus, Enter/Space to activate).
        </p>
      </div>
    </Variant>

    <!-- Custom event handling -->
    <Variant title="Event Handling" icon="carbon:events">
      <div class="story-content">
        <div class="event-demo">
          <h3 class="section-subtitle">Custom Language Switching</h3>
          <FdsSprogvaelger
            :model-value="[
              { title: 'Dansk', active: false, lang: 'da', ariaLabel: 'Vælg sprog: Dansk' },
              { title: 'English', active: true, lang: 'en', ariaLabel: 'Selected language: English' },
              { title: 'Norsk', active: false, lang: 'no', ariaLabel: 'Velg språk: Norsk' },
            ]"
            :prevent-default="true"
            @language-change="(lang) => console.log('Custom handler:', lang)"
            @lang="(code) => console.log('Language code changed:', code)"
          />
          
          <div class="code-example">
            <h4 class="info-title">Event Usage:</h4>
            <pre class="code-block">@language-change="handleLanguageChange"
@lang="handleLangCode"
@update:modelValue="updateLanguages"</pre>
          </div>
        </div>
        <p class="story-hint">
          This example uses `preventDefault: true` to handle language switching with custom logic.
          Check the browser console to see the emitted events when clicking languages.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          languages: [
            { title: 'Dansk', active: true, lang: 'da', ariaLabel: 'Valgt sprog: Dansk' },
            { title: 'English', active: false, lang: 'en', ariaLabel: 'Select language: English' },
            { title: 'Deutsch', active: false, lang: 'de', ariaLabel: 'Wähle Sprache: Deutsch' },
          ],
          autoSetLang: false,
          preventDefault: true,
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <FdsSprogvaelger
            :model-value="state.languages"
            :auto-set-lang="state.autoSetLang"
            :prevent-default="state.preventDefault"
            @update:model-value="(newLangs) => { state.languages = newLangs }"
            @language-change="(lang) => console.log('Language changed:', lang)"
            @lang="(code) => console.log('Lang code:', code)"
          />
          
          <div class="playground-status">
            <p class="status-text">
              Active: {{ state.languages.find(l => l.active)?.title }}
            </p>
          </div>
        </div>
      </template>

      <template #controls="{ state }">
        <HstCheckbox v-model="state.autoSetLang" title="Auto Set Document Lang" />
        <HstCheckbox v-model="state.preventDefault" title="Prevent Default Navigation" />
        
        <div class="languages-editor">
          <h4>Languages</h4>
          <div v-for="(lang, index) in state.languages" :key="index" class="lang-editor">
            <HstText v-model="lang.title" :title="`Language ${index + 1} Title`" />
            <HstText v-model="lang.lang" :title="`Language ${index + 1} Code`" />
            <HstCheckbox v-model="lang.active" :title="`Active Language ${index + 1}`" @update:model-value="(active) => {
              if (active) {
                state.languages.forEach((l, i) => {
                  l.active = i === index
                })
              }
            }" />
          </div>
        </div>
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
/* Base styles with 10px font-size root */
.story-content {
  padding: 2.4rem;
  font-size: 1.6rem; /* 16px with 10px base */
  line-height: 1.5;
}

/* Typography */
.section-title {
  font-size: 1.6rem; /* 16px */
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #1a1a1a;
}

.section-subtitle {
  font-size: 1.4rem; /* 14px minimum */
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #333;
}

.story-hint {
  font-size: 1.4rem; /* 14px - readable minimum */
  color: #666;
  margin-top: 1.6rem;
  line-height: 1.6;
}

.info-title {
  font-size: 1.4rem; /* 14px */
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #333;
}

.status-text {
  font-size: 1.4rem; /* 14px */
  color: #333;
  margin: 1.2rem 0;
}

/* Layout structures */
.variant-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.variant-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.demo-container {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  max-width: 600px;
}

.current-state {
  padding: 1.6rem;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
}

.language-display {
  font-size: 1.6rem;
  font-weight: 600;
  color: #0056b3;
  margin-top: 0.8rem;
}

.accessibility-demo {
  max-width: 800px;
}

.accessibility-info {
  margin-top: 2.4rem;
  padding: 1.6rem;
  background-color: #f8f9fa;
  border-left: 4px solid #0056b3;
}

.feature-list {
  margin: 0;
  padding-left: 2.4rem;
  font-size: 1.4rem;
  line-height: 1.6;
}

.feature-list li {
  margin-bottom: 0.8rem;
}

.event-demo {
  max-width: 700px;
}

.code-example {
  margin-top: 2.4rem;
  padding: 1.6rem;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
}

.code-block {
  font-family: 'Courier New', monospace;
  font-size: 1.4rem;
  color: #333;
  margin: 0;
  white-space: pre-wrap;
}

.playground {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.playground-status {
  margin-top: 2.4rem;
  text-align: center;
}

.languages-editor {
  margin-top: 1.6rem;
}

.lang-editor {
  margin-bottom: 1.2rem;
  padding: 1.2rem;
  border: 1px solid #dee2e6;
  border-radius: 4px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem;
  }

  .variant-grid {
    grid-template-columns: 1fr;
  }

  .demo-container {
    gap: 1.6rem;
  }

  .accessibility-info,
  .code-example {
    padding: 1.2rem;
  }
}
</style>

<docs lang="md">
# FdsSprogvaelger

The language selector component (sprogvælger) provides language switching functionality following DKFDS v11 specifications. It displays available languages with the active language shown first and marked with a check icon.

## Usage

```vue
<template>
  <FdsSprogvaelger
    v-model="languages"
    @language-change="handleLanguageChange"
  />
</template>

<script setup>
import { ref } from 'vue'
import { FdsSprogvaelger } from '@madsb/dkfds-vue3'

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

| Prop            | Type                      | Default | Description                                        |
| --------------- | ------------------------- | ------- | -------------------------------------------------- |
| `modelValue`    | `ExtendedFdsLanguageItem[]` | -       | Array of available languages with selection state |
| `autoSetLang`   | `boolean`                 | `false` | Automatically set document language attribute      |
| `preventDefault` | `boolean`                | `true`  | Prevent default link navigation behavior          |

## Events

| Event              | Description                                    |
| ------------------ | ---------------------------------------------- |
| `update:modelValue` | Emitted when the language array is updated   |
| `language-change`  | Emitted when a language is selected          |
| `lang`             | Emitted when language code changes           |

## Language Item Structure

```typescript
interface FdsLanguageItem {
  title: string      // Display name (e.g., "Dansk", "English")
  active: boolean    // Whether this is the currently active language
  lang: string       // Language code (e.g., "da", "en")
  ariaLabel: string  // Accessibility label (e.g., "Valgt sprog: Dansk")
  href?: string      // Optional custom URL for navigation
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
<FdsSprogvaelger
  :model-value="languagesWithUrls"
  :prevent-default="false"
/>
```

### Event-Based Switching
```vue
<FdsSprogvaelger
  v-model="languages"
  :prevent-default="true"
  @language-change="switchLanguage"
/>
```

### Document Language Management
```vue
<FdsSprogvaelger
  v-model="languages"
  :auto-set-lang="true"
  @lang="updateAppLanguage"
/>
```

## Themes

The language selector automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
</docs>