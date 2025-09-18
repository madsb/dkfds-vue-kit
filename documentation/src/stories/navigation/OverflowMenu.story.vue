<script setup lang="ts">
import { ref } from 'vue'
import { FdsOverflowMenu } from '@madsb/dkfds-vue3'

// Demo state for interactions
const actionCount = ref(0)
const handleAction = (action: string) => {
  actionCount.value++
  console.log(`Action performed: ${action}`)
}

const menuItems = ref([
  { id: 'edit', title: 'Rediger', icon: 'edit' },
  { id: 'copy', title: 'Kopier', icon: 'copy' },
  { id: 'share', title: 'Del', icon: 'share' },
  { id: 'delete', title: 'Slet', icon: 'delete' },
])
</script>

<template>
  <Story title="Navigation/OverflowMenu" :layout="{ type: 'grid', width: '100%' }" icon="carbon:menu">
    <!-- Showcase all overflow menu variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Standard Menu</h3>
            <FdsOverflowMenu header="Actions">
              <li><button type="button">Rediger</button></li>
              <li><button type="button">Del</button></li>
              <li><button type="button">Slet</button></li>
            </FdsOverflowMenu>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Left Position</h3>
            <FdsOverflowMenu header="Flere muligheder" position="left">
              <li><a href="#edit">Rediger dokument</a></li>
              <li><a href="#copy">Kopier link</a></li>
              <li><a href="#delete">Slet</a></li>
            </FdsOverflowMenu>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Custom Icon</h3>
            <FdsOverflowMenu header="Indstillinger" icon="settings" icon-position="left">
              <li><button type="button">Profil</button></li>
              <li><button type="button">Notifikationer</button></li>
              <li><button type="button">Log ud</button></li>
            </FdsOverflowMenu>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Table Actions</h3>
            <div>
              <span>Bruger: John Doe</span>
              <FdsOverflowMenu header="Handlinger" position="right">
                <li><button type="button">Se profil</button></li>
                <li><button type="button">Send besked</button></li>
                <li><button type="button">Blokér bruger</button></li>
              </FdsOverflowMenu>
            </div>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The overflow menu follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how it adapts to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Different trigger button styles -->
    <Variant title="Trigger Buttons" icon="carbon:touch-interaction">
      <div class="container py-6">
        <div class="button-group">
          <FdsOverflowMenu header="Standard trigger">
            <li><button type="button">Action 1</button></li>
            <li><button type="button">Action 2</button></li>
          </FdsOverflowMenu>

          <FdsOverflowMenu header="Mere" icon="more-horiz">
            <li><button type="button">Vis flere</button></li>
            <li><button type="button">Skjul</button></li>
          </FdsOverflowMenu>

          <FdsOverflowMenu icon="menu" icon-position="left">
            <template #header>Menu</template>
            <li><button type="button">Start</button></li>
            <li><button type="button">Om</button></li>
            <li><button type="button">Kontakt</button></li>
          </FdsOverflowMenu>
        </div>

        <hr class="my-6" />

        <h3 class="h6 mb-2">Icon Position Variations</h3>
        <div class="button-group">
          <FdsOverflowMenu header="Icon Right" icon="chevron-down" icon-position="right">
            <li><button type="button">Download</button></li>
            <li><button type="button">Eksporter</button></li>
          </FdsOverflowMenu>

          <FdsOverflowMenu header="Icon Left" icon="chevron-down" icon-position="left">
            <li><button type="button">Importer</button></li>
            <li><button type="button">Upload</button></li>
          </FdsOverflowMenu>
        </div>
        <p class="mt-4 mb-0">
          Different trigger button styles with various icon positions and header text combinations.
        </p>
      </div>
    </Variant>

    <!-- Menu positioning and content types -->
    <Variant title="Positioning & Content" icon="carbon:direction-right-02">
      <div class="container py-6">
        <div>
          <div>
            <h3 class="h6 mb-2">Left Position Menu</h3>
            <FdsOverflowMenu header="Vælg handling" position="left" @open="handleAction('menu-opened')">
              <li><a href="#profile">Min profil</a></li>
              <li><a href="#settings">Indstillinger</a></li>
              <li><button type="button" @click="handleAction('logout')">Log ud</button></li>
            </FdsOverflowMenu>
          </div>

          <div>
            <h3 class="h6 mb-2">Right Position Menu</h3>
            <FdsOverflowMenu header="Dokumenthandlinger" position="right">
              <li><button type="button" @click="handleAction('edit')">Rediger</button></li>
              <li><button type="button" @click="handleAction('version')">Se versioner</button></li>
              <li><button type="button" @click="handleAction('download')">Download</button></li>
              <li><button type="button" @click="handleAction('delete')">Slet</button></li>
            </FdsOverflowMenu>
          </div>
        </div>

        <hr class="my-6" />

        <h3 class="h6 mb-2">Mixed Content Types</h3>
        <FdsOverflowMenu header="Blandet indhold">
          <li><a href="#view">Vis detaljer</a></li>
          <li><button type="button" @click="handleAction('share')">Del med andre</button></li>
          <li><a href="#download" download>Download PDF</a></li>
          <li><button type="button" disabled>Arkiver (ikke tilgængelig)</button></li>
        </FdsOverflowMenu>
        
        <p class="mt-4 mb-0">
          Actions performed: {{ actionCount }}. Menus can contain both links and buttons, with different positioning options.
        </p>
      </div>
    </Variant>

    <!-- Keyboard navigation and accessibility -->
    <Variant title="Keyboard Navigation" icon="carbon:keyboard">
      <div class="container py-6">
        <div>
          <FdsOverflowMenu 
            header="Tastatur navigering" 
            id="keyboard-menu"
            @open="handleAction('keyboard-menu-opened')"
            @close="handleAction('keyboard-menu-closed')"
          >
            <li><button type="button" @click="handleAction('first')">Første handling</button></li>
            <li><button type="button" @click="handleAction('second')">Anden handling</button></li>
            <li><a href="#third" @click="handleAction('third')">Tredje handling</a></li>
            <li><button type="button" @click="handleAction('fourth')">Fjerde handling</button></li>
          </FdsOverflowMenu>
        </div>

        <div>
          <h3 class="h6 mb-2">Keyboard Instructions</h3>
          <ul>
            <li><kbd>Tab</kbd> - Navigér til menu trigger knap</li>
            <li><kbd>Enter</kbd> eller <kbd>Space</kbd> - Åbn/luk menu</li>
            <li><kbd>Escape</kbd> - Luk menu og returner fokus til trigger</li>
            <li><kbd>Tab</kbd> (i åben menu) - Navigér gennem menu elementer</li>
          </ul>
        </div>

        <p class="mt-4 mb-0">
          Actions performed: {{ actionCount }}. Try using keyboard navigation to interact with the menu.
          The menu follows WCAG guidelines for accessible dropdown navigation.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          header: 'Overflow menu',
          icon: 'more-vert',
          iconPosition: 'right',
          position: 'right',
          menuItemCount: 3,
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <FdsOverflowMenu
            :header="state.header"
            :icon="state.icon"
            :icon-position="state.iconPosition"
            :position="state.position"
            @open="handleAction('playground-opened')"
            @close="handleAction('playground-closed')"
            @toggle="(isOpen) => handleAction(`playground-${isOpen ? 'opened' : 'closed'}`)"
          >
            <li v-for="n in state.menuItemCount" :key="n">
              <button type="button" @click="handleAction(`item-${n}`)">
                Menu punkt {{ n }}
              </button>
            </li>
          </FdsOverflowMenu>
          <p class="mt-4 mb-0">Actions performed: {{ actionCount }}</p>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.header" title="Header Text" />

        <HstSelect
          v-model="state.icon"
          title="Icon"
          :options="[
            { value: 'more-vert', label: 'More Vertical' },
            { value: 'more-horiz', label: 'More Horizontal' },
            { value: 'menu', label: 'Menu' },
            { value: 'settings', label: 'Settings' },
            { value: 'chevron-down', label: 'Chevron Down' },
            { value: 'dots-horizontal', label: 'Dots Horizontal' },
          ]"
        />

        <HstSelect
          v-model="state.iconPosition"
          title="Icon Position"
          :options="[
            { value: 'left', label: 'Left' },
            { value: 'right', label: 'Right' },
          ]"
        />

        <HstSelect
          v-model="state.position"
          title="Menu Position"
          :options="[
            { value: 'left', label: 'Left' },
            { value: 'right', label: 'Right' },
          ]"
        />

        <HstSlider
          v-model="state.menuItemCount"
          title="Menu Items Count"
          :min="1"
          :max="6"
          :step="1"
        />
      </template>
    </Variant>
  </Story>
</template>


<docs lang="md">
# FdsOverflowMenu

The overflow menu component provides a space-saving way to display additional actions or options when interface space is limited. It follows DKFDS v11 design specifications and provides accessible dropdown functionality with keyboard navigation support.

## Usage

```vue
<template>
  <FdsOverflowMenu header="Actions" @open="handleMenuOpen">
    <li><button type="button" @click="handleEdit">Rediger</button></li>
    <li><button type="button" @click="handleShare">Del</button></li>
    <li><button type="button" @click="handleDelete">Slet</button></li>
  </FdsOverflowMenu>
</template>

<script setup>
import { FdsOverflowMenu } from '@madsb/dkfds-vue3'

const handleMenuOpen = () => {
  console.log('Menu opened')
}

const handleEdit = () => {
  console.log('Edit action')
}
</script>
```

## Props

| Prop           | Type                | Default         | Description                                         |
| -------------- | ------------------- | --------------- | --------------------------------------------------- |
| `header`       | `string`            | `'Overflow menu'` | Header text displayed on the menu trigger button   |
| `id`           | `string`            | auto-generated  | Unique identifier for ARIA relationships            |
| `icon`         | `string`            | `'more-vert'`   | Icon identifier from DKFDS icon set                |
| `iconPosition` | `'left' \| 'right'` | `'right'`       | Position of icon relative to header text           |
| `position`     | `'left' \| 'right'` | `'right'`       | Dropdown menu positioning relative to trigger      |

## Events

| Event    | Payload     | Description                                      |
| -------- | ----------- | ------------------------------------------------ |
| `open`   | -           | Emitted when the overflow menu opens             |
| `close`  | -           | Emitted when the overflow menu closes            |
| `toggle` | `isOpen: boolean` | Emitted when menu state changes with new state  |

## Slots

| Slot        | Description                                    |
| ----------- | ---------------------------------------------- |
| `default`   | Menu items content (should contain `<li>` elements) |
| `header`    | Custom header content for the trigger button  |
| `icon-left` | Custom icon content positioned on the left    |
| `icon-right`| Custom icon content positioned on the right   |

## Accessibility

- **ARIA Support**: Full ARIA labeling with `aria-expanded`, `aria-controls`, `aria-haspopup`, and `aria-hidden`
- **Keyboard Navigation**: 
  - `Tab` - Navigate to/from trigger button
  - `Enter`/`Space` - Open/close menu
  - `Escape` - Close menu and return focus to trigger
- **Focus Management**: Proper focus handling on open/close with focus return
- **Screen Reader**: Announces menu state changes and available actions
- **Click Outside**: Automatically closes menu when clicking outside

## Design Guidelines

- **Use for**: Secondary actions, contextual menus, table row actions, card actions
- **Avoid for**: Primary navigation, single actions that fit in the interface
- **Content**: Mix buttons and links as needed, group related actions
- **Positioning**: Use `position="left"` near right edge, `position="right"` otherwise
- **Menu Items**: Keep to 6 items or fewer for optimal usability
- **Destructive Actions**: Use error styling (`text-error` class) for delete actions

## Common Patterns

### Table Row Actions
```vue
<FdsOverflowMenu header="Handlinger" position="right">
  <li><button @click="viewDetails">Se detaljer</button></li>
  <li><button @click="editItem">Rediger</button></li>
  <li><button @click="deleteItem">Slet</button></li>
</FdsOverflowMenu>
```

### Card Actions
```vue
<FdsOverflowMenu header="Mere" position="left">
  <li><a href="/share">Del</a></li>
  <li><button @click="favorite">Tilføj til favoritter</button></li>
  <li><button @click="archive">Arkiver</button></li>
</FdsOverflowMenu>
```

### Custom Icon and Header
```vue
<FdsOverflowMenu icon="settings" icon-position="left">
  <template #header>Indstillinger</template>
  <li><button @click="preferences">Præferencer</button></li>
  <li><button @click="logout">Log ud</button></li>
</FdsOverflowMenu>
```

## Themes

The overflow menu component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with proper contrast and spacing
- **VirkDK**: Business-oriented styling for Virk.dk with corporate styling
- **BorgerDK**: Citizen-oriented styling for Borger.dk with accessible design
</docs>