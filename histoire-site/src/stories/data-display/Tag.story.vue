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
  { id: '4', name: 'Jylland', active: true }
])

const handleTagClick = (formId: string) => {
  clickCount.value++
  console.log('Tag clicked:', formId)
}

const toggleTag = (tagName: string) => {
  if (selectedTags.value.includes(tagName)) {
    selectedTags.value = selectedTags.value.filter(t => t !== tagName)
  } else {
    selectedTags.value.push(tagName)
  }
}

const removeTag = (tagId: string) => {
  const tag = removableTags.value.find(t => t.id === tagId)
  if (tag) {
    tag.active = false
    setTimeout(() => {
      removableTags.value = removableTags.value.filter(t => t.id !== tagId)
    }, 150)
  }
}
</script>

<template>
  <Story title="Data Display/Tag" :layout="{ type: 'grid', width: '100%' }" icon="carbon:tag">
    <!-- Showcase all tag variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Standard Tags</h3>
            <div class="tag-group">
              <FdsTag>Bornholm</FdsTag>
              <FdsTag>Sjælland</FdsTag>
              <FdsTag>Fyn</FdsTag>
              <FdsTag>Jylland</FdsTag>
            </div>
          </div>
          <div class="variant-section">
            <h3 class="section-title">With Icons</h3>
            <div class="tag-group">
              <FdsTag icon="star">Favorite</FdsTag>
              <FdsTag icon="bookmark">Bookmark</FdsTag>
              <FdsTag icon="check">Selected</FdsTag>
              <FdsTag icon="highlight-off">Removable</FdsTag>
            </div>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Interactive Tags</h3>
            <div class="tag-group">
              <FdsTag @click="handleTagClick">Clickable</FdsTag>
              <FdsTag @click="handleTagClick">Interactive</FdsTag>
              <FdsTag @click="handleTagClick">Actionable</FdsTag>
            </div>
          </div>
          <div class="variant-section">
            <h3 class="section-title">Descriptive Tags</h3>
            <div class="tag-group">
              <FdsTag>JavaScript</FdsTag>
              <FdsTag>Vue 3</FdsTag>
              <FdsTag>TypeScript</FdsTag>
              <FdsTag>DKFDS</FdsTag>
            </div>
          </div>
        </div>
        <p class="story-hint">
          The tag component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how tags adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Filtering/Selection demonstration -->
    <Variant title="Filter Tags" icon="carbon:filter">
      <div class="story-content">
        <h3 class="section-subtitle">Select Categories</h3>
        <div class="tag-group">
          <FdsTag 
            v-for="category in ['Technology', 'Design', 'Development', 'Accessibility', 'DKFDS']"
            :key="category"
            :class="{ 'tag-selected': selectedTags.includes(category) }"
            @click="toggleTag(category)"
          >
            {{ category }}
          </FdsTag>
        </div>
        
        <div class="filter-results">
          <h4 class="section-subtitle">Selected Filters</h4>
          <div v-if="selectedTags.length > 0" class="selected-tags">
            <span v-for="tag in selectedTags" :key="tag" class="selected-tag">{{ tag }}</span>
          </div>
          <p v-else class="no-selection">No filters selected</p>
        </div>

        <p class="story-hint">
          Click tags to toggle selection. This pattern is commonly used for filtering content
          or selecting categories in forms and search interfaces.
        </p>
      </div>
    </Variant>

    <!-- Removable tags demonstration -->
    <Variant title="Removable Tags" icon="carbon:close">
      <div class="story-content">
        <h3 class="section-subtitle">Manage Your Tags</h3>
        <div class="tag-group">
          <FdsTag 
            v-for="tag in removableTags.filter(t => t.active)"
            :key="tag.id"
            icon="highlight-off"
            @click="removeTag(tag.id)"
          >
            {{ tag.name }}
          </FdsTag>
        </div>

        <div v-if="removableTags.filter(t => t.active).length === 0" class="empty-state">
          <p>All tags have been removed.</p>
          <button 
            class="reset-button"
            @click="removableTags.forEach(t => { t.active = true })"
          >
            Reset Tags
          </button>
        </div>

        <p class="story-hint">
          Tags with close icons allow users to remove items from lists, clear filters,
          or dismiss categories. Click the × icon to remove a tag.
        </p>
      </div>
    </Variant>

    <!-- Use cases and patterns -->
    <Variant title="Common Patterns" icon="carbon:catalog">
      <div class="story-content">
        <div class="pattern-section">
          <h3 class="section-subtitle">Content Metadata</h3>
          <div class="content-card">
            <h4>Article Title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <div class="tag-group metadata">
              <FdsTag>Politik</FdsTag>
              <FdsTag>Økonomi</FdsTag>
              <FdsTag>Samfund</FdsTag>
            </div>
          </div>
        </div>

        <div class="divider" />

        <div class="pattern-section">
          <h3 class="section-subtitle">User Skills/Interests</h3>
          <div class="profile-section">
            <p><strong>Skills:</strong></p>
            <div class="tag-group">
              <FdsTag icon="check">Vue.js</FdsTag>
              <FdsTag icon="check">TypeScript</FdsTag>
              <FdsTag icon="check">Accessibility</FdsTag>
              <FdsTag icon="check">Design Systems</FdsTag>
            </div>
          </div>
        </div>

        <div class="divider" />

        <div class="pattern-section">
          <h3 class="section-subtitle">Status Indicators</h3>
          <div class="status-section">
            <div class="status-row">
              <span>Application Status:</span>
              <FdsTag>Under review</FdsTag>
            </div>
            <div class="status-row">
              <span>Priority Level:</span>
              <FdsTag icon="warning">High</FdsTag>
            </div>
            <div class="status-row">
              <span>Department:</span>
              <FdsTag>IT Department</FdsTag>
            </div>
          </div>
        </div>

        <p class="story-hint">
          Tags work best as supplementary information. Use them to provide context,
          enable filtering, or indicate status without overwhelming the primary content.
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
          id: ''
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <FdsTag
            :icon="state.icon || undefined"
            :id="state.id || undefined"
            @click="handleTagClick"
          >
            {{ state.text }}
          </FdsTag>
          <p v-if="state.showClickCount" class="story-hint">Click count: {{ clickCount }}</p>
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
  font-size: 1.4rem; /* 14px */
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

/* Layout structures */
.variant-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.variant-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.tag-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;
}

.tag-group.metadata {
  margin-top: 1.2rem;
}

/* Tag states and interactions */
:deep(.tag-selected) {
  background-color: #0059b3;
  color: white;
}

:deep(.tag-selected:hover) {
  background-color: #004494;
}

/* Filter results */
.filter-results {
  margin-top: 2.4rem;
  padding: 1.6rem;
  background-color: #f8f9fa;
  border-radius: 0.4rem;
}

.selected-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.selected-tag {
  background-color: #e3f2fd;
  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  color: #1565c0;
  border: 1px solid #bbdefb;
}

.no-selection {
  color: #666;
  font-style: italic;
  margin: 0;
}

/* Content examples */
.content-card {
  padding: 1.6rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.4rem;
  background-color: #fff;
}

.content-card h4 {
  margin: 0 0 0.8rem 0;
  font-size: 1.6rem;
  color: #1a1a1a;
}

.content-card p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}

.profile-section {
  padding: 1.6rem;
  background-color: #f8f9fa;
  border-radius: 0.4rem;
}

.profile-section p {
  margin: 0 0 1.2rem 0;
  font-weight: 600;
}

.status-section {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.status-row {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.status-row span {
  font-weight: 600;
  min-width: 12rem;
}

/* Pattern sections */
.pattern-section {
  margin-bottom: 2.4rem;
}

.pattern-section:last-child {
  margin-bottom: 0;
}

.divider {
  margin: 2.4rem 0;
  border-top: 1px solid #e0e0e0;
}

/* Empty state */
.empty-state {
  text-align: center;
  padding: 2.4rem;
  color: #666;
}

.reset-button {
  margin-top: 1.2rem;
  padding: 0.8rem 1.6rem;
  background-color: #0059b3;
  color: white;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: 1.4rem;
}

.reset-button:hover {
  background-color: #004494;
}

.playground {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem;
  }

  .variant-grid {
    grid-template-columns: 1fr;
  }

  .status-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }

  .status-row span {
    min-width: auto;
  }
}
</style>

<docs lang="md">
# FdsTag

Interactive labels for categorization, filtering, and content organization. Unlike badges, tags are typically user-interactive elements supporting selection, removal, and filtering operations. Designed for content management interfaces following DKFDS v11 specifications.

## Usage

```vue
<template>
  <FdsTag @click="handleTagClick">
    Category Name
  </FdsTag>

  <!-- Removable tag with icon -->
  <FdsTag icon="highlight-off" @click="removeTag">
    Removable Tag
  </FdsTag>
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

| Prop   | Type     | Default | Description                                           |
| ------ | -------- | ------- | ----------------------------------------------------- |
| `icon` | `string` | -       | Icon name (commonly 'close', 'star', 'bookmark')     |
| `id`   | `string` | -       | Custom ID (auto-generated if not provided)           |

## Events

| Event   | Description                                              |
| ------- | -------------------------------------------------------- |
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