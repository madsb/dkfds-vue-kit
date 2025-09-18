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
  <Story title="Layout/Sprogvaelger" icon="carbon:language">
    <!-- Showcase all language selector variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Nordic Languages</h3>
            <FdsSprogvaelger
              v-model="demoLanguages"
              @language-change="handleLanguageChange"
              @lang="handleLangCode"
            />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">European Languages</h3>
            <FdsSprogvaelger
              :model-value="[
                { title: 'Français', active: false, lang: 'fr', ariaLabel: 'Choisir la langue: Français' },
                { title: 'Español', active: false, lang: 'es', ariaLabel: 'Seleccionar idioma: Español' },
                { title: 'Italiano', active: true, lang: 'it', ariaLabel: 'Lingua selezionata: Italiano' },
                { title: 'Nederlands', active: false, lang: 'nl', ariaLabel: 'Taal selecteren: Nederlands' },
              ]"
            />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">With Custom URLs</h3>
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
        <p class="mt-4 mb-0">
          The language selector follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how the component adapts to different contexts.
          Active languages are displayed first with a check mark icon.
        </p>
      </div>
    </Variant>

    <!-- Language switching behavior -->
    <Variant title="Interactive Switching" icon="carbon:touch-interaction">
      <div class="container py-6">
        <div>
          <FdsSprogvaelger
            v-model="demoLanguages"
            :auto-set-lang="true"
            @language-change="handleLanguageChange"
            @lang="handleLangCode"
          />

          <div>
            <h3 class="h6 mb-2">Current Active Language</h3>
            <div>
              {{ demoLanguages.find(l => l.active)?.title }} ({{ demoLanguages.find(l => l.active)?.lang }})
            </div>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Click any language to switch. This example has `autoSetLang` enabled, which updates the document's
          language attribute. Check the browser console to see emitted events.
        </p>
      </div>
    </Variant>

    <!-- Accessibility features -->
    <Variant title="Accessibility" icon="carbon:accessibility">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">ARIA Labels and Screen Reader Support</h3>
          <FdsSprogvaelger
            :model-value="[
              { title: 'Dansk', active: true, lang: 'da', ariaLabel: 'Valgt sprog: Dansk' },
              { title: 'English', active: false, lang: 'en', ariaLabel: 'Select language: English' },
              { title: 'العربية', active: false, lang: 'ar', ariaLabel: 'اختر اللغة: العربية' },
            ]"
          />

          <div>
            <h4>Accessibility Features:</h4>
            <ul>
              <li>List has `aria-label="Vælg sprog fra listen"`</li>
              <li>Each link has descriptive `aria-label` with selection status</li>
              <li>Active language indicated with check mark icon (decorative)</li>
              <li>Proper language codes in `lang` attributes</li>
              <li>Keyboard navigation with Tab and Enter/Space</li>
              <li>Focus states clearly visible</li>
            </ul>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The component includes comprehensive accessibility features for screen readers.
          Test with keyboard navigation (Tab to focus, Enter/Space to activate).
        </p>
      </div>
    </Variant>

    <!-- Custom event handling -->
    <Variant title="Event Handling" icon="carbon:events">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Custom Language Switching</h3>
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

          <div>
            <h4>Event Usage:</h4>
            <pre>@language-change="handleLanguageChange"
@lang="handleLangCode"
@update:modelValue="updateLanguages"</pre>
          </div>
        </div>
        <p class="mt-4 mb-0">
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
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <FdsSprogvaelger
            :model-value="state.languages"
            :auto-set-lang="state.autoSetLang"
            :prevent-default="state.preventDefault"
            @update:model-value="(newLangs) => { state.languages = newLangs }"
            @language-change="(lang) => console.log('Language changed:', lang)"
            @lang="(code) => console.log('Lang code:', code)"
          />

          <div>
            <p>
              Active: {{ state.languages.find(l => l.active)?.title }}
            </p>
          </div>
        </div>
      </template>

      <template #controls="{ state }">
        <HstCheckbox v-model="state.autoSetLang" title="Auto Set Document Lang" />
        <HstCheckbox v-model="state.preventDefault" title="Prevent Default Navigation" />

        <div>
          <h4>Languages</h4>
          <div v-for="(lang, index) in state.languages" :key="index">
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
