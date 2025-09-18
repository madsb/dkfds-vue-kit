<script setup lang="ts">
import { ref, computed } from 'vue'
import { FdsPaginering } from '@madsb/dkfds-vue3'

// Demo data for internal pagination
const generateItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    description: `This is the description for item ${i + 1}`,
  }))
}

const smallItems = ref(generateItems(25))
const mediumItems = ref(generateItems(100))
const largeItems = ref(generateItems(1000))

// External pagination state
const externalCurrentPage = ref(1)
const externalSkip = ref(0)
const externalTotalItems = 247

// Filtered page data
const currentPageData = ref([])

const handlePageData = (items: any[]) => {
  currentPageData.value = items
}

const handlePageChange = (page: number) => {
  console.log('Page changed to:', page)
}

const handleSkipChange = (skip: number) => {
  externalSkip.value = skip
  externalCurrentPage.value = Math.floor(skip / 20) + 1
}

const handleExternalPageChange = (page: number) => {
  externalCurrentPage.value = page
  externalSkip.value = (page - 1) * 20
}
</script>

<template>
  <Story title="Navigation/Paginering" :layout="{ type: 'grid', width: '100%' }" icon="carbon:page-number">
    <!-- Showcase all pagination variants -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Small Dataset (25 items)</h3>
            <FdsPaginering
              :list="smallItems"
              :page-size="5"
              :max-elements="5"
              @filtered-page="handlePageData"
              @page-change="handlePageChange"
            />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Medium Dataset (100 items)</h3>
            <FdsPaginering
              :list="mediumItems"
              :page-size="10"
              :max-elements="7"
              @filtered-page="handlePageData"
              @page-change="handlePageChange"
            />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">External Pagination (247 items)</h3>
            <FdsPaginering
              :total-items="247"
              :skip="0"
              :page-size="20"
              :max-elements="9"
              @skip="handleSkipChange"
              @page-change="handleExternalPageChange"
            />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Without First/Last Buttons</h3>
            <FdsPaginering
              :list="mediumItems"
              :page-size="15"
              :max-elements="5"
              :show-first-last="false"
              @filtered-page="handlePageData"
              @page-change="handlePageChange"
            />
          </div>
        </div>
        <p class="mt-4 mb-0">
          Pagination follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how pagination adapts to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Different page counts and ellipsis behavior -->
    <Variant title="Page Count Variations" icon="carbon:page-break">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Few Pages (No Ellipsis)</h3>
          <FdsPaginering
            :list="generateItems(30)"
            :page-size="10"
            :max-elements="7"
            @filtered-page="handlePageData"
            @page-change="handlePageChange"
          />
        </div>

        <hr class="my-6" />

        <div>
          <h3 class="h6 mb-2">Many Pages (With Ellipsis)</h3>
          <FdsPaginering
            :list="largeItems"
            :page-size="25"
            :max-elements="7"
            @filtered-page="handlePageData"
            @page-change="handlePageChange"
          />
        </div>

        <hr class="my-6" />

        <div>
          <h3 class="h6 mb-2">Compact View (Max 5 Elements)</h3>
          <FdsPaginering
            :list="largeItems"
            :page-size="50"
            :max-elements="5"
            @filtered-page="handlePageData"
            @page-change="handlePageChange"
          />
        </div>

        <p class="mt-4 mb-0">
          Ellipsis (...) appear automatically when there are more pages than maxElements allows.
          The component intelligently shows pages around the current page.
        </p>
      </div>
    </Variant>

    <!-- External vs Internal pagination modes -->
    <Variant title="Pagination Modes" icon="carbon:data-connected">
      <div class="container py-6">
        <div>
          <div>
            <h3 class="h6 mb-2">Internal Pagination Mode</h3>
            <p>
              Use when you have all data available. Component handles slicing internally.
            </p>
            <FdsPaginering
              :list="mediumItems"
              :page-size="12"
              @filtered-page="handlePageData"
              @page-change="handlePageChange"
            />
            <div>
              <strong>Current page items:</strong> {{ currentPageData.length }} items loaded
            </div>
          </div>

          <div>
            <h3 class="h6 mb-2">External Pagination Mode</h3>
            <p>
              Use with APIs. You handle data loading based on skip/page-change events.
            </p>
            <FdsPaginering
              :total-items="externalTotalItems"
              :skip="externalSkip"
              :page-size="20"
              @skip="handleSkipChange"
              @page-change="handleExternalPageChange"
            />
            <div>
              <strong>Current state:</strong> Page {{ externalCurrentPage }}, Skip {{ externalSkip }}
            </div>
          </div>
        </div>

        <p class="mt-4 mb-0">
          Internal mode: Use "list" prop. External mode: Use "totalItems" and "skip" props.
          Both modes emit page-change events for tracking.
        </p>
      </div>
    </Variant>

    <!-- Boundary states and accessibility -->
    <Variant title="States & Accessibility" icon="carbon:accessibility">
      <div class="container py-6">
        <div class="row">
          <div>
            <h3 class="h6 mb-2">First Page (Previous Disabled)</h3>
            <FdsPaginering
              :total-items="100"
              :skip="0"
              :page-size="10"
              :max-elements="7"
              @skip="handleSkipChange"
              @page-change="handlePageChange"
            />
            <p>Previous and First buttons are hidden when on first page.</p>
          </div>

          <div>
            <h3 class="h6 mb-2">Middle Page (All Controls Active)</h3>
            <FdsPaginering
              :total-items="200"
              :skip="50"
              :page-size="10"
              :max-elements="7"
              @skip="handleSkipChange"
              @page-change="handlePageChange"
            />
            <p>All navigation controls are available.</p>
          </div>

          <div>
            <h3 class="h6 mb-2">Single Page (No Pagination)</h3>
            <FdsPaginering
              :list="generateItems(5)"
              :page-size="10"
              @filtered-page="handlePageData"
              @page-change="handlePageChange"
            />
            <p>Pagination is hidden when all items fit on one page.</p>
          </div>
        </div>

        <div>
          <h3 class="h6 mb-2">Accessibility Features</h3>
          <ul>
            <li>ARIA labeling with "side X af Y" (page X of Y)</li>
            <li>Current page marked with aria-current="page"</li>
            <li>Screen reader announcements with aria-live</li>
            <li>Keyboard navigation support (Tab, Enter, Space)</li>
            <li>Mobile-friendly "Side X af Y" display</li>
          </ul>
        </div>

        <p class="mt-4 mb-0">
          Try navigating with keyboard (Tab, Enter) and notice the ARIA labels.
          The mobile display shows "Side X af Y" for better mobile UX.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          mode: 'internal',
          totalItems: 150,
          pageSize: 10,
          maxElements: 7,
          showFirstLast: true,
          currentSkip: 0,
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <div>
            <FdsPaginering
              v-if="state.mode === 'internal'"
              :list="generateItems(state.totalItems)"
              :page-size="state.pageSize"
              :max-elements="state.maxElements"
              :show-first-last="state.showFirstLast"
              @filtered-page="handlePageData"
              @page-change="handlePageChange"
            />
            <FdsPaginering
              v-else
              :total-items="state.totalItems"
              :skip="state.currentSkip"
              :page-size="state.pageSize"
              :max-elements="state.maxElements"
              :show-first-last="state.showFirstLast"
              @skip="(skip) => (state.currentSkip = skip)"
              @page-change="handlePageChange"
            />
          </div>
          
          <div>
            <p><strong>Total Items:</strong> {{ state.totalItems }}</p>
            <p><strong>Page Size:</strong> {{ state.pageSize }}</p>
            <p><strong>Total Pages:</strong> {{ Math.ceil(state.totalItems / state.pageSize) }}</p>
            <p v-if="state.mode === 'external'"><strong>Current Skip:</strong> {{ state.currentSkip }}</p>
          </div>
        </div>
      </template>

      <template #controls="{ state }">
        <HstSelect
          v-model="state.mode"
          title="Pagination Mode"
          :options="[
            { value: 'internal', label: 'Internal (with list)' },
            { value: 'external', label: 'External (with totalItems)' },
          ]"
        />

        <HstNumber
          v-model="state.totalItems"
          title="Total Items"
          :min="1"
          :max="10000"
          :step="10"
        />

        <HstNumber
          v-model="state.pageSize"
          title="Page Size"
          :min="1"
          :max="100"
          :step="5"
        />

        <HstNumber
          v-model="state.maxElements"
          title="Max Elements"
          :min="3"
          :max="15"
          :step="2"
        />

        <HstCheckbox
          v-model="state.showFirstLast"
          title="Show First/Last Buttons"
        />

        <HstNumber
          v-if="state.mode === 'external'"
          v-model="state.currentSkip"
          title="Skip (External Mode)"
          :min="0"
          :max="state.totalItems - state.pageSize"
          :step="state.pageSize"
        />
      </template>
    </Variant>
  </Story>
</template>


<docs lang="md">
# FdsPaginering

Pagination navigation component implementing DKFDS v11 specifications. Provides accessible pagination controls with support for large datasets, smart ellipsis handling, and keyboard navigation.

## Usage

```vue
<template>
  <!-- Internal pagination with array -->
  <FdsPaginering
    :list="items"
    :page-size="10"
    @filtered-page="handlePageData"
    @page-change="handlePageChange"
  />

  <!-- External pagination with total count -->
  <FdsPaginering
    :total-items="totalCount"
    :skip="currentSkip"
    :page-size="20"
    @skip="handleSkipChange"
    @page-change="handlePageChange"
  />
</template>

<script setup>
import { FdsPaginering } from '@madsb/dkfds-vue3'

const handlePageData = (items) => {
  // Handle filtered page items (internal mode)
}

const handlePageChange = (page) => {
  // Handle page change event
}

const handleSkipChange = (skip) => {
  // Handle skip change for API calls (external mode)
}
</script>
```

## Props

| Prop            | Type      | Default | Description                                                  |
| --------------- | --------- | ------- | ------------------------------------------------------------ |
| `list`          | `any[]`   | `[]`    | Array of items to paginate (internal mode)                  |
| `skip`          | `number`  | `0`     | Number of items to skip (external pagination)               |
| `pageSize`      | `number`  | `10`    | Number of items per page                                     |
| `maxElements`   | `number`  | `7`     | Maximum number of visible page elements (includes ellipsis) |
| `showFirstLast` | `boolean` | `true`  | Show first/last navigation buttons                           |
| `id`            | `string`  | auto    | Unique identifier for the pagination component               |
| `totalItems`    | `number`  | `0`     | Total number of items (external pagination)                 |

## Events

| Event          | Payload      | Description                                         |
| -------------- | ------------ | --------------------------------------------------- |
| `filteredPage` | `items: any[]` | Emitted with current page items (internal mode)    |
| `skip`         | `skip: number` | Emitted when skip value changes (external mode)    |
| `page-change`  | `page: number` | Emitted when page changes (1-based page number)    |

## Pagination Modes

### Internal Pagination
Use when you have all data available. The component handles slicing internally:
- Provide `list` prop with all items
- Listen to `filteredPage` event for current page items
- Component automatically hides when items fit on one page

### External Pagination
Use with APIs where you load data per page:
- Provide `totalItems` and `skip` props
- Listen to `skip` and `page-change` events
- You handle the data loading based on skip value

## Accessibility

- ARIA navigation landmark with descriptive label
- Current page marked with `aria-current="page"`
- Screen reader announcements with `aria-live="polite"`
- Descriptive ARIA labels for all navigation buttons
- Full keyboard navigation support (Tab, Enter, Space)
- Mobile-friendly "Side X af Y" display
- Hidden pagination when only one page exists

## Design Guidelines

- Use for datasets with more items than can comfortably fit on one page
- Keep page sizes reasonable (10-50 items depending on content)
- Consider using `showFirstLast={false}` for simpler navigation
- Adjust `maxElements` based on available space (5-9 recommended)
- For very large datasets, consider server-side pagination with external mode
- Provide clear loading states when using external pagination

## Keyboard Navigation

- **Tab**: Navigate between pagination controls
- **Enter/Space**: Activate pagination buttons
- **Arrow keys**: Navigate within pagination controls (browser default)

## Themes

The pagination component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
</docs>