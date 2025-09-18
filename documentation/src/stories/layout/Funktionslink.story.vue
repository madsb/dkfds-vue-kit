<script setup lang="ts">
import { ref } from 'vue'
import { FdsFunktionslink } from '@madsb/dkfds-vue3'

// Demo state
const clickCount = ref(0)
const handleClick = () => {
  clickCount.value++
}
</script>

<template>
  <Story title="Layout/Funktionslink" :layout="{ type: 'grid', width: '100%' }" icon="carbon:link">
    <!-- Showcase all function link variants -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Basic Links</h3>
            <div>
              <FdsFunktionslink href="/page1">Simple Link</FdsFunktionslink>
              <FdsFunktionslink href="/page2" title="Navigate to page 2">Link with Title</FdsFunktionslink>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">With Icons</h3>
            <div>
              <FdsFunktionslink href="/help" icon="help">Get Help</FdsFunktionslink>
              <FdsFunktionslink href="/download" icon="download">Download File</FdsFunktionslink>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">External Links</h3>
            <div>
              <FdsFunktionslink
                href="https://designsystem.dk"
                target="_blank"
                rel="noopener noreferrer"
                icon="open-in-new"
                icon-right
              >
                Design System
              </FdsFunktionslink>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Buttons</h3>
            <div>
              <FdsFunktionslink type="button" @click="handleClick">Click Action</FdsFunktionslink>
              <FdsFunktionslink type="button" icon="edit">Edit Item</FdsFunktionslink>
            </div>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The function link component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how links adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Icons and positioning -->
    <Variant title="Icons & Positioning" icon="carbon:add-alt">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Icon Positions</h3>
          <div>
            <FdsFunktionslink href="/previous" icon="arrow-back">Previous</FdsFunktionslink>
            <FdsFunktionslink href="/next" icon="arrow-forward" icon-right>Next</FdsFunktionslink>
          </div>
        </div>

        <hr class="my-6" />

        <div>
          <h3 class="h6 mb-2">Common Icon Types</h3>
          <div>
            <FdsFunktionslink href="/settings" icon="settings">Settings</FdsFunktionslink>
            <FdsFunktionslink href="/profile" icon="account">My Profile</FdsFunktionslink>
            <FdsFunktionslink href="/support" icon="help-circle">Support</FdsFunktionslink>
            <FdsFunktionslink type="button" icon="refresh" @click="handleClick">Refresh</FdsFunktionslink>
          </div>
        </div>

        <hr class="my-6" />

        <div>
          <h3 class="h6 mb-2">Action Icons</h3>
          <div>
            <FdsFunktionslink type="button" icon="save" @click="handleClick">Save Changes</FdsFunktionslink>
            <FdsFunktionslink type="button" icon="delete" @click="handleClick">Delete Item</FdsFunktionslink>
            <FdsFunktionslink href="/print" icon="printer">Print Page</FdsFunktionslink>
            <FdsFunktionslink href="/share" icon="share" icon-right>Share</FdsFunktionslink>
          </div>
        </div>

        <p class="mt-4 mb-0">
          Icons help users quickly understand the purpose of function links. Position icons before text for actions
          and after text for navigation or external links.
        </p>
      </div>
    </Variant>

    <!-- States and accessibility -->
    <Variant title="States & Accessibility" icon="carbon:accessibility-alt">
      <div class="container py-6">
        <div>
          <div class="col-12 col-lg-4 mb-5">
            <h3 class="h6 mb-2">Normal State</h3>
            <div>
              <FdsFunktionslink href="/normal" @click="handleClick">Normal Link</FdsFunktionslink>
              <FdsFunktionslink type="button" icon="check" @click="handleClick">Normal Button</FdsFunktionslink>
            </div>
          </div>
          <div class="col-12 col-lg-4 mb-5">
            <h3 class="h6 mb-2">Disabled State</h3>
            <div>
              <FdsFunktionslink type="button" disabled>Disabled Button</FdsFunktionslink>
              <FdsFunktionslink
                type="button"
                icon="edit"
                disabled
                title="Edit is currently disabled"
              >
                Disabled with Icon
              </FdsFunktionslink>
            </div>
          </div>
        </div>

        <hr class="my-6" />

        <div>
          <h3 class="h6 mb-2">Accessibility Examples</h3>
          <div>
            <FdsFunktionslink
              href="https://external-site.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Opens in a new window"
              icon="open-in-new"
              icon-right
            >
              External Resource
            </FdsFunktionslink>
            <FdsFunktionslink
              type="button"
              icon="download"
              title="Download will start immediately"
              @click="handleClick"
            >
              Download Document
            </FdsFunktionslink>
            <FdsFunktionslink
              href="/help"
              title="Get help and support information"
              icon="help-circle"
            >
              Help Center
            </FdsFunktionslink>
          </div>
        </div>

        <p class="mt-4 mb-0">
          Click count: {{ clickCount }} - Use title attributes to provide additional context. 
          Always include rel="noopener noreferrer" for external links with target="_blank".
        </p>
      </div>
    </Variant>

    <!-- Usage patterns -->
    <Variant title="Usage Patterns" icon="carbon:app-connectivity">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Navigation Pattern</h3>
          <nav>
            <FdsFunktionslink href="/dashboard" icon="home">Dashboard</FdsFunktionslink>
            <FdsFunktionslink href="/profile" icon="account">My Profile</FdsFunktionslink>
            <FdsFunktionslink href="/settings" icon="settings">Settings</FdsFunktionslink>
            <FdsFunktionslink href="/logout" icon="logout">Sign Out</FdsFunktionslink>
          </nav>
        </div>

        <hr class="my-6" />

        <div>
          <h3 class="h6 mb-2">Action Pattern</h3>
          <div>
            <FdsFunktionslink type="button" icon="add" @click="handleClick">Add New</FdsFunktionslink>
            <FdsFunktionslink type="button" icon="edit" @click="handleClick">Edit Selected</FdsFunktionslink>
            <FdsFunktionslink type="button" icon="delete" @click="handleClick">Delete</FdsFunktionslink>
          </div>
        </div>

        <hr class="my-6" />

        <div>
          <h3 class="h6 mb-2">Mixed Context</h3>
          <div>
            <FdsFunktionslink href="/guide" icon="book">User Guide</FdsFunktionslink>
            <FdsFunktionslink
              href="https://support.example.com"
              target="_blank"
              rel="noopener noreferrer"
              icon="open-in-new"
              icon-right
            >
              External Support
            </FdsFunktionslink>
            <FdsFunktionslink type="button" icon="contact-support" @click="handleClick">Contact Us</FdsFunktionslink>
          </div>
        </div>

        <p class="mt-4 mb-0">
          Function links adapt automatically between anchor and button elements based on whether
          an href is provided. This ensures semantic correctness and proper accessibility.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          text: 'Function Link',
          type: 'auto',
          href: '/example',
          icon: '',
          iconRight: false,
          disabled: false,
          target: '',
          rel: '',
          title: '',
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <FdsFunktionslink
            :type="state.type !== 'auto' ? state.type : undefined"
            :href="state.type === 'button' ? undefined : state.href || undefined"
            :icon="state.icon || undefined"
            :icon-right="state.iconRight"
            :disabled="state.disabled"
            :target="state.target || undefined"
            :rel="state.rel || undefined"
            :title="state.title || undefined"
            @click="handleClick"
          >
            {{ state.text }}
          </FdsFunktionslink>
          <p class="mt-4 mb-0">
            Click count: {{ clickCount }}
            <br>
            Element type: {{ state.type === 'auto' ? (state.type === 'button' ? 'button' : 'anchor') : state.type }}
          </p>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.text" title="Link Text" />

        <HstSelect
          v-model="state.type"
          title="Element Type"
          :options="[
            { value: 'auto', label: 'Auto-detect' },
            { value: 'link', label: 'Link (anchor)' },
            { value: 'button', label: 'Button' },
          ]"
        />

        <HstText
          v-model="state.href"
          title="Link URL (href)"
          :disabled="state.type === 'button'"
        />

        <HstText v-model="state.icon" title="Icon Name" />

        <HstCheckbox
          v-model="state.iconRight"
          title="Icon on Right"
          :disabled="!state.icon"
        />

        <HstCheckbox
          v-model="state.disabled"
          title="Disabled"
          :disabled="state.type === 'link'"
        />

        <HstText
          v-model="state.target"
          title="Target (_blank, _self, etc.)"
          :disabled="state.type === 'button'"
        />

        <HstText
          v-model="state.rel"
          title="Rel (noopener noreferrer)"
          :disabled="state.type === 'button'"
        />

        <HstText v-model="state.title" title="Title (tooltip)" />
      </template>
    </Variant>
  </Story>
</template>


<docs lang="md">
# FdsFunktionslink

The function link component is a versatile link/button element that automatically adapts between anchor and button elements based on props. It supports icons, accessibility attributes, and various link behaviors for functional actions in DKFDS applications.

## Usage

```vue
<template>
  <!-- Basic link -->
  <FdsFunktionslink href="/help">
    Get Help
  </FdsFunktionslink>

  <!-- Button with icon -->
  <FdsFunktionslink
    type="button"
    icon="download"
    @click="downloadFile"
  >
    Download
  </FdsFunktionslink>

  <!-- External link with security -->
  <FdsFunktionslink
    href="https://external-site.com"
    target="_blank"
    rel="noopener noreferrer"
    icon="open-in-new"
    icon-right
  >
    External Resource
  </FdsFunktionslink>
</template>

<script setup>
import { FdsFunktionslink } from '@madsb/dkfds-vue3'

const downloadFile = () => {
  // Handle download action
}
</script>
```

## Props

| Prop        | Type                                    | Default     | Description                                           |
| ----------- | --------------------------------------- | ----------- | ----------------------------------------------------- |
| `icon`      | `string`                                | -           | Icon name from DKFDS icon set                        |
| `iconRight` | `boolean`                               | `false`     | Position icon on the right side                      |
| `href`      | `string`                                | -           | URL for link navigation (creates anchor element)     |
| `type`      | `'link' \| 'button'`                     | auto-detect | Force specific element type                           |
| `title`     | `string`                                | -           | Title attribute for accessibility                     |
| `disabled`  | `boolean`                               | `false`     | Disabled state (only for button type)                |
| `target`    | `'_blank' \| '_self' \| '_parent' \| '_top'` | -           | Target attribute for links                            |
| `rel`       | `string`                                | -           | Rel attribute for links (use 'noopener noreferrer')  |

## Events

| Event   | Description                                    |
| ------- | ---------------------------------------------- |
| `click` | Emitted when the link or button is clicked    |

## Auto-Detection Logic

The component automatically determines the element type:
- **Anchor element**: When `href` prop is provided
- **Button element**: When no `href` prop is provided
- **Override**: Use `type` prop to force specific element type

## Accessibility

- Automatically applies correct semantic element (anchor vs button)
- Use `title` attribute to provide additional context
- For external links, always include `rel="noopener noreferrer"` with `target="_blank"`
- Icons are automatically marked as decorative
- Disabled state only applies to button elements
- Keyboard navigation is fully supported (Tab, Enter, Space for buttons)

## Design Guidelines

- **Use for functional actions**: Navigation, file operations, external links
- **Icon placement**: Icons before text for actions, after text for navigation/external
- **External links**: Always use appropriate security attributes
- **Button vs Link**: Use button for actions, anchor for navigation
- **Disabled state**: Only available for button type, provide helpful title text
- **Consistent iconography**: Use DKFDS Material Design icons consistently

## Themes

The function link component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
</docs>