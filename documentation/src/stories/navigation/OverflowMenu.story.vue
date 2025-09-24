<script setup lang="ts">
import { ref } from 'vue'
import { FdsOverflowMenu } from '@madsb/dkfds-vue-kit'

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
  <Story title="Navigation/OverflowMenu" icon="carbon:menu">
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
          The overflow menu follows DKFDS v11 design specifications. Try switching themes using the
          global theme switcher to see how it adapts to different contexts.
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
            <FdsOverflowMenu
              header="Vælg handling"
              position="left"
              @open="handleAction('menu-opened')"
            >
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
          Actions performed: {{ actionCount }}. Menus can contain both links and buttons, with
          different positioning options.
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
          Actions performed: {{ actionCount }}. Try using keyboard navigation to interact with the
          menu. The menu follows WCAG guidelines for accessible dropdown navigation.
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
              <button type="button" @click="handleAction(`item-${n}`)">Menu punkt {{ n }}</button>
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
