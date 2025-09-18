<script setup lang="ts">
import { ref } from 'vue'
import { FdsTag } from '@madsb/dkfds-vue3'

// Demo state
const clickCount = ref(0)
const selectedTags = ref<string[]>([])
const removableTags = ref([
  { id: '1', name: 'Bornholm', active: true },
  { id: '2', name: 'Sjælland', active: true },
  { id: '3', name: 'Fyn', active: true },
  { id: '4', name: 'Jylland', active: true },
])

const handleTagClick = (formId: string) => {
  clickCount.value++
  console.log('Tag clicked:', formId)
}

const toggleTag = (tagName: string) => {
  if (selectedTags.value.includes(tagName)) {
    selectedTags.value = selectedTags.value.filter((t) => t !== tagName)
  } else {
    selectedTags.value.push(tagName)
  }
}

const removeTag = (tagId: string) => {
  const tag = removableTags.value.find((t) => t.id === tagId)
  if (tag) {
    tag.active = false
    setTimeout(() => {
      removableTags.value = removableTags.value.filter((t) => t.id !== tagId)
    }, 150)
  }
}
</script>

<template>
  <Story title="Data Display/Tag" icon="carbon:tag">
    <!-- Showcase all tag variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Standard Tags</h3>
            <div>
              <FdsTag>Bornholm</FdsTag>
              <FdsTag>Sjælland</FdsTag>
              <FdsTag>Fyn</FdsTag>
              <FdsTag>Jylland</FdsTag>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">With Icons</h3>
            <div>
              <FdsTag icon="star">Favorite</FdsTag>
              <FdsTag icon="bookmark">Bookmark</FdsTag>
              <FdsTag icon="check">Selected</FdsTag>
              <FdsTag icon="highlight-off">Removable</FdsTag>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Interactive Tags</h3>
            <div>
              <FdsTag @click="handleTagClick">Clickable</FdsTag>
              <FdsTag @click="handleTagClick">Interactive</FdsTag>
              <FdsTag @click="handleTagClick">Actionable</FdsTag>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Descriptive Tags</h3>
            <div>
              <FdsTag>JavaScript</FdsTag>
              <FdsTag>Vue 3</FdsTag>
              <FdsTag>TypeScript</FdsTag>
              <FdsTag>DKFDS</FdsTag>
            </div>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The tag component follows DKFDS v11 design specifications. Try switching themes using the
          global theme switcher to see how tags adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Filtering/Selection demonstration -->
    <Variant title="Filter Tags" icon="carbon:filter">
      <div class="container py-6">
        <h3 class="h6 mb-2">Select Categories</h3>
        <div>
          <FdsTag
            v-for="category in ['Technology', 'Design', 'Development', 'Accessibility', 'DKFDS']"
            :key="category"
            :class="{ 'tag-selected': selectedTags.includes(category) }"
            @click="toggleTag(category)"
          >
            {{ category }}
          </FdsTag>
        </div>

        <div>
          <h4 class="h6 mb-2">Selected Filters</h4>
          <div v-if="selectedTags.length > 0">
            <span v-for="tag in selectedTags" :key="tag">{{ tag }}</span>
          </div>
          <p v-else>No filters selected</p>
        </div>

        <p class="mt-4 mb-0">
          Click tags to toggle selection. This pattern is commonly used for filtering content or
          selecting categories in forms and search interfaces.
        </p>
      </div>
    </Variant>

    <!-- Removable tags demonstration -->
    <Variant title="Removable Tags" icon="carbon:close">
      <div class="container py-6">
        <h3 class="h6 mb-2">Manage Your Tags</h3>
        <div>
          <FdsTag
            v-for="tag in removableTags.filter((t) => t.active)"
            :key="tag.id"
            icon="close"
            @click="removeTag(tag.id)"
          >
            {{ tag.name }}
          </FdsTag>
        </div>

        <div v-if="removableTags.filter((t) => t.active).length === 0">
          <p>All tags have been removed.</p>
          <button
            @click="
              removableTags.forEach((t) => {
                t.active = true
              })
            "
          >
            Reset Tags
          </button>
        </div>

        <p class="mt-4 mb-0">
          Tags with close icons allow users to remove items from lists, clear filters, or dismiss
          categories. Click the × icon to remove a tag.
        </p>
      </div>
    </Variant>

    <!-- Use cases and patterns -->
    <Variant title="Common Patterns" icon="carbon:catalog">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Content Metadata</h3>
          <div>
            <h4>Article Title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <div>
              <FdsTag>Politik</FdsTag>
              <FdsTag>Økonomi</FdsTag>
              <FdsTag>Samfund</FdsTag>
            </div>
          </div>
        </div>

        <hr class="my-6" />

        <div>
          <h3 class="h6 mb-2">User Skills/Interests</h3>
          <div>
            <p><strong>Skills:</strong></p>
            <div>
              <FdsTag icon="check">Vue.js</FdsTag>
              <FdsTag icon="check">TypeScript</FdsTag>
              <FdsTag icon="check">Accessibility</FdsTag>
              <FdsTag icon="check">Design Systems</FdsTag>
            </div>
          </div>
        </div>

        <hr class="my-6" />

        <div>
          <h3 class="h6 mb-2">Status Indicators</h3>
          <div>
            <div>
              <span>Application Status:</span>
              <FdsTag>Under review</FdsTag>
            </div>
            <div>
              <span>Priority Level:</span>
              <FdsTag icon="warning">High</FdsTag>
            </div>
            <div>
              <span>Department:</span>
              <FdsTag>IT Department</FdsTag>
            </div>
          </div>
        </div>

        <p class="mt-4 mb-0">
          Tags work best as supplementary information. Use them to provide context, enable
          filtering, or indicate status without overwhelming the primary content.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          text: 'My Tag',
          icon: '',
          showClickCount: false,
          id: '',
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <FdsTag
            :id="state.id || undefined"
            :icon="state.icon || undefined"
            @click="handleTagClick"
          >
            {{ state.text }}
          </FdsTag>
          <p v-if="state.showClickCount" class="mt-4 mb-0">Click count: {{ clickCount }}</p>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.text" title="Tag Text" />

        <HstText v-model="state.icon" title="Icon Name" placeholder="e.g. star, bookmark, close" />

        <HstText v-model="state.id" title="Custom ID" placeholder="Optional custom ID" />

        <HstCheckbox v-model="state.showClickCount" title="Show Click Count" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
# FdsTag

Interactive labels for categorization, filtering, and content organization. Unlike badges, tags are typically user-interactive elements supporting selection, removal, and filtering operations. Designed for content management interfaces following DKFDS v11 specifications.

## Usage

```vue
<template>
  <FdsTag @click="handleTagClick"> Category Name </FdsTag>

  <!-- Removable tag with icon -->
  <FdsTag icon="highlight-off" @click="removeTag"> Removable Tag </FdsTag>
</template>

<script setup>
import { FdsTag } from '@madsb/dkfds-vue3'

const handleTagClick = (formId) => {
  console.log('Tag clicked:', formId)
}

const removeTag = (formId) => {
  // Handle tag removal
}
</script>
```

## Props

| Prop   | Type     | Default | Description                                      |
| ------ | -------- | ------- | ------------------------------------------------ |
| `icon` | `string` | -       | Icon name (commonly 'close', 'star', 'bookmark') |
| `id`   | `string` | -       | Custom ID (auto-generated if not provided)       |

## Events

| Event   | Description                                             |
| ------- | ------------------------------------------------------- |
| `click` | Emitted when tag is clicked, provides form ID parameter |

## Accessibility

- Tags are implemented as `<button>` elements for semantic correctness
- Icons have `aria-hidden="true"` and `focusable="false"` for screen readers
- Fully keyboard navigable (Tab, Enter, Space)
- Each tag gets a unique ID automatically if not provided
- For icon-only functionality, ensure the text content describes the action

## Design Guidelines

### When to Use

- Provide secondary, metadata-related information
- Enable content categorization and filtering
- Show user selections or applied filters
- Indicate removable items in lists
- Display status or category information

### When NOT to Use

- As primary navigation elements
- To replace systematic navigation
- For critical functionality (tags should be supplementary)
- When the information is essential to the user's core workflow

### Best Practices

- Use tags sparingly and meaningfully
- Use recognizable words from your solution's context
- Capitalize first letter, use lowercase for remaining text
- Provide clear visual feedback for interactive states
- Consider the removable pattern for user-generated content

## Common Patterns

### Content Metadata

Use tags to show categories, topics, or classifications for articles, documents, or other content.

### Filtering Interface

Allow users to select and deselect filter criteria using clickable tags with visual selection states.

### Removable Items

Use tags with close icons to represent items that can be removed from lists, selections, or filters.

### Status Indicators

Show current state, priority level, or processing status using descriptive tags.

## Themes

The tag component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling with neutral colors
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
</docs>
