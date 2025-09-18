<script setup lang="ts">
import { ref } from 'vue'
import { FdsTilbageLink } from '@madsb/dkfds-vue3'

// Demo state
const clickCount = ref(0)
const handleClick = () => {
  clickCount.value++
}

const handleRouterExample = () => {
  console.log('Router navigation (would call $router.go(-1))')
  clickCount.value++
}

const handleCustomNavigation = (event: MouseEvent) => {
  console.log('Custom navigation logic')
  event.preventDefault()
  clickCount.value++
}
</script>

<template>
  <Story title="Navigation/TilbageLink" icon="carbon:arrow-left">
    <!-- Showcase all tilbage link variants -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Default (Tilbage)</h3>
            <FdsTilbageLink @click="handleClick" />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Custom Text</h3>
            <FdsTilbageLink @click="handleClick">Tilbage til oversigt</FdsTilbageLink>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">With Href</h3>
            <FdsTilbageLink href="/previous-page" @click="handleClick">Tilbage til forrige trin</FdsTilbageLink>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Long Text</h3>
            <FdsTilbageLink @click="handleClick">Tilbage til ansøgningsoversigten</FdsTilbageLink>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The tilbage link follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how the tilbage link adapts to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Navigation patterns -->
    <Variant title="Navigation Patterns" icon="carbon:direction-left-01">
      <div class="container py-6">
        <h3 class="h6 mb-2">Browser History Navigation</h3>
        <FdsTilbageLink @click="handleRouterExample">Tilbage</FdsTilbageLink>
        <p>Use with router.go(-1) or history.back() for browser navigation</p>

        <hr class="my-6" />

        <h3 class="h6 mb-2">Custom Navigation Logic</h3>
        <FdsTilbageLink @click="handleCustomNavigation">Tilbage til start</FdsTilbageLink>
        <p>Implement custom logic in the click handler</p>

        <hr class="my-6" />

        <h3 class="h6 mb-2">Direct URL Navigation</h3>
        <FdsTilbageLink href="/dashboard">Tilbage til dashboard</FdsTilbageLink>
        <p>Use href prop for direct URL navigation</p>

        <p class="mt-4 mb-0">
          Click count: {{ clickCount }}. Position tilbage links at the top left of the page, 
          immediately under the header. Do not use with breadcrumbs as they serve similar purposes.
        </p>
      </div>
    </Variant>

    <!-- Usage contexts -->
    <Variant title="Usage Contexts" icon="carbon:flow">
      <div class="container py-6">
        <div>
          <div>
            <h3 class="h6 mb-2">Multi-step Process</h3>
            <FdsTilbageLink @click="handleClick">Tilbage til trin 2</FdsTilbageLink>
            <p>Navigate backwards in forms or wizards</p>
          </div>

          <div>
            <h3 class="h6 mb-2">Detail to List View</h3>
            <FdsTilbageLink @click="handleClick">Tilbage til søgeresultater</FdsTilbageLink>
            <p>Return from detail view to listing page</p>
          </div>

          <div>
            <h3 class="h6 mb-2">Error Recovery</h3>
            <FdsTilbageLink @click="handleClick">Tilbage til sikker side</FdsTilbageLink>
            <p>Provide safe navigation from error states</p>
          </div>
        </div>

        <p class="mt-4 mb-0">
          Tilbage links are most effective in task-oriented workflows and hierarchical navigation.
          They provide a consistent way for users to backtrack through connected page sequences.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          text: 'Tilbage',
          href: 'javascript:void(0);',
          useHref: false,
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <FdsTilbageLink
            :href="state.useHref ? state.href : 'javascript:void(0);'"
            @click="handleClick"
          >
            {{ state.text }}
          </FdsTilbageLink>
          <p class="mt-4 mb-0">Click count: {{ clickCount }}</p>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.text" title="Link Text" />

        <HstCheckbox v-model="state.useHref" title="Use Href (instead of click handler)" />

        <HstText 
          v-model="state.href" 
          title="Href URL" 
          :disabled="!state.useHref"
        />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
# FdsTilbageLink

The tilbage link component provides consistent back navigation for multi-step processes and connected page sequences. It follows DKFDS v11 specifications with a chevron icon and customizable text.

## Usage

```vue
<template>
  <FdsTilbageLink @click="goBack">
    Tilbage til oversigt
  </FdsTilbageLink>
</template>

<script setup>
import { FdsTilbageLink } from '@madsb/dkfds-vue3'

const goBack = () => {
  // Custom back navigation logic
  // router.go(-1) or history.back()
}
</script>
```

## Props

| Prop   | Type     | Default                 | Description                                                    |
| ------ | -------- | ----------------------- | -------------------------------------------------------------- |
| `href` | `string` | `'javascript:void(0);'` | Link destination URL. Defaults to void to use click handler   |

## Events

| Event   | Description                                                           |
| ------- | --------------------------------------------------------------------- |
| `click` | Emitted when the tilbage link is clicked. Receives MouseEvent object |

## Accessibility

- The component includes proper semantic markup with anchor element
- Uses decorative chevron icon that doesn't interfere with screen readers
- Supports keyboard navigation (Tab, Enter) as standard link behavior
- Link text should be descriptive of the destination or action

## Design Guidelines

- Position tilbage links at the top left of the page, immediately under the header
- Use for multi-step processes, wizards, and hierarchical navigation
- **Do not use with breadcrumbs** - they serve similar navigation purposes
- Text should be concise but descriptive of the back destination
- Most effective in task-oriented workflows and connected page sequences

### When to Use

- Multi-step forms or wizards (e.g., "Tilbage til trin 2")
- Detail views that came from list views (e.g., "Tilbage til søgeresultater")
- Error recovery navigation (e.g., "Tilbage til sikker side")
- Task completion flows

### When NOT to Use

- On pages that already have breadcrumb navigation
- As the primary navigation method
- For unrelated page navigation (use regular links instead)

## Themes

The tilbage link automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with blue chevron and text
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
</docs>