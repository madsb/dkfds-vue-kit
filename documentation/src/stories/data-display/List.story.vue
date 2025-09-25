<script setup lang="ts">
import { ref } from 'vue'
import { FdsList, FdsListItem } from '@madsb/dkfds-vue-kit'

// Demo state
const selectedItem = ref('')
const handleItemClick = (item: string) => {
  selectedItem.value = item
}
</script>

<template>
  <Story title="Data Display/List" icon="carbon:list">
    <!-- Showcase all list variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Basic Unordered</h3>
            <FdsList>
              <FdsListItem>First item</FdsListItem>
              <FdsListItem>Second item</FdsListItem>
              <FdsListItem>Third item</FdsListItem>
            </FdsList>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Ordered List</h3>
            <FdsList :ordered="true">
              <FdsListItem>Step one</FdsListItem>
              <FdsListItem>Step two</FdsListItem>
              <FdsListItem>Step three</FdsListItem>
            </FdsList>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Bordered</h3>
            <FdsList variant="bordered">
              <FdsListItem>Bordered item</FdsListItem>
              <FdsListItem>Another item</FdsListItem>
              <FdsListItem>Third item</FdsListItem>
            </FdsList>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">No Bullet</h3>
            <FdsList variant="nobullet">
              <FdsListItem>Clean item</FdsListItem>
              <FdsListItem>Another item</FdsListItem>
              <FdsListItem>Final item</FdsListItem>
            </FdsList>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The list component follows DKFDS v11 design specifications. Try switching themes using the
          global theme switcher to see how lists adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- List types and nesting -->
    <Variant title="List Types & Nesting" icon="carbon:list-numbered">
      <div class="container py-6">
        <div>
          <div>
            <h3 class="h6 mb-2">Nested Unordered Lists</h3>
            <FdsList>
              <FdsListItem>Main topic one</FdsListItem>
              <FdsListItem>
                Main topic two
                <FdsList>
                  <FdsListItem>Subtopic A</FdsListItem>
                  <FdsListItem>Subtopic B</FdsListItem>
                  <FdsListItem>
                    Subtopic C
                    <FdsList>
                      <FdsListItem>Sub-subtopic 1</FdsListItem>
                      <FdsListItem>Sub-subtopic 2</FdsListItem>
                    </FdsList>
                  </FdsListItem>
                </FdsList>
              </FdsListItem>
              <FdsListItem>Main topic three</FdsListItem>
            </FdsList>
          </div>

          <div>
            <h3 class="h6 mb-2">Nested Ordered Lists</h3>
            <FdsList :ordered="true">
              <FdsListItem>Complete the form</FdsListItem>
              <FdsListItem>
                Review your information
                <FdsList :ordered="true">
                  <FdsListItem>Check personal details</FdsListItem>
                  <FdsListItem>Verify contact information</FdsListItem>
                  <FdsListItem>Confirm address</FdsListItem>
                </FdsList>
              </FdsListItem>
              <FdsListItem>Submit application</FdsListItem>
            </FdsList>
          </div>
        </div>

        <hr class="my-6" />

        <h3 class="h6 mb-2">Mixed List Types</h3>
        <FdsList>
          <FdsListItem>Available services:</FdsListItem>
          <FdsListItem>
            Digital services
            <FdsList :ordered="true">
              <FdsListItem>Online application</FdsListItem>
              <FdsListItem>Document upload</FdsListItem>
              <FdsListItem>Status tracking</FdsListItem>
            </FdsList>
          </FdsListItem>
          <FdsListItem>Contact options</FdsListItem>
        </FdsList>

        <p class="mt-4 mb-0">
          Lists can be nested and mixed to create complex content hierarchies.
        </p>
      </div>
    </Variant>

    <!-- Interactive list with states -->
    <Variant title="List Items with States" icon="carbon:status-change">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Navigation List with States</h3>
          <FdsList variant="nobullet">
            <FdsListItem>
              <a href="#home">Home</a>
            </FdsListItem>
            <FdsListItem variant="current">
              <span>Current Page</span>
            </FdsListItem>
            <FdsListItem>
              <a href="#services">Services</a>
            </FdsListItem>
            <FdsListItem variant="active">
              <a href="#active">Active Link</a>
            </FdsListItem>
            <FdsListItem variant="disabled">
              <span>Disabled Item</span>
            </FdsListItem>
          </FdsList>
        </div>

        <hr class="my-6" />

        <div>
          <h3 class="h6 mb-2">Interactive List Items</h3>
          <FdsList variant="bordered">
            <FdsListItem
              :flex="true"
              :justify-between="true"
              style="cursor: pointer; padding: 1.2rem"
              :class="{ active: selectedItem === 'dashboard' }"
              @click="handleItemClick('dashboard')"
            >
              <span>Dashboard</span>
              <span v-if="selectedItem === 'dashboard'">✓</span>
            </FdsListItem>
            <FdsListItem
              :flex="true"
              :justify-between="true"
              style="cursor: pointer; padding: 1.2rem"
              :class="{ active: selectedItem === 'profile' }"
              @click="handleItemClick('profile')"
            >
              <span>Profile Settings</span>
              <span v-if="selectedItem === 'profile'">✓</span>
            </FdsListItem>
            <FdsListItem
              :flex="true"
              :justify-between="true"
              style="cursor: pointer; padding: 1.2rem"
              :class="{ active: selectedItem === 'notifications' }"
              @click="handleItemClick('notifications')"
            >
              <span>Notifications</span>
              <span v-if="selectedItem === 'notifications'">✓</span>
            </FdsListItem>
          </FdsList>
          <p class="mt-4 mb-0">Selected: {{ selectedItem || 'None' }}</p>
        </div>
      </div>
    </Variant>

    <!-- Layout and styling variants -->
    <Variant title="Layout & Styling" icon="carbon:layout">
      <div class="container py-6">
        <div>
          <div>
            <h3 class="h6 mb-2">Flex Layout with Content</h3>
            <FdsList variant="bordered">
              <FdsListItem :flex="true" :justify-between="true">
                <div>
                  <strong>Application #12345</strong>
                  <div style="font-size: 1.4rem; color: #666">Submitted 2024-01-15</div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.8rem">
                  <span style="color: #28a745; font-size: 1.4rem">Approved</span>
                  <button style="padding: 0.4rem 0.8rem; font-size: 1.2rem">View</button>
                </div>
              </FdsListItem>
              <FdsListItem :flex="true" :justify-between="true">
                <div>
                  <strong>Application #12346</strong>
                  <div style="font-size: 1.4rem; color: #666">Submitted 2024-01-16</div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.8rem">
                  <span style="color: #ffc107; font-size: 1.4rem">Pending</span>
                  <button style="padding: 0.4rem 0.8rem; font-size: 1.2rem">View</button>
                </div>
              </FdsListItem>
            </FdsList>
          </div>

          <div>
            <h3 class="h6 mb-2">Unstyled for Custom Design</h3>
            <FdsList variant="unstyled" :no-top-margin="true">
              <FdsListItem role="none">
                <div>
                  <h4 style="margin: 0 0 0.8rem 0; font-size: 1.6rem">Custom Card 1</h4>
                  <p style="margin: 0; color: #666; font-size: 1.4rem">
                    Custom styled content without default list styling.
                  </p>
                </div>
              </FdsListItem>
              <FdsListItem role="none">
                <div>
                  <h4 style="margin: 0 0 0.8rem 0; font-size: 1.6rem">Custom Card 2</h4>
                  <p style="margin: 0; color: #666; font-size: 1.4rem">
                    Another card with custom styling.
                  </p>
                </div>
              </FdsListItem>
            </FdsList>
          </div>
        </div>

        <hr class="my-6" />

        <h3 class="h6 mb-2">Overflow Menu Style</h3>
        <FdsList variant="overflow" style="max-width: 200px; border: 1px solid #ddd">
          <FdsListItem
            style="padding: 0.8rem 1.2rem; cursor: pointer"
            @click="handleItemClick('edit')"
          >
            <span>Edit</span>
          </FdsListItem>
          <FdsListItem
            style="padding: 0.8rem 1.2rem; cursor: pointer"
            @click="handleItemClick('duplicate')"
          >
            <span>Duplicate</span>
          </FdsListItem>
          <FdsListItem
            style="padding: 0.8rem 1.2rem; cursor: pointer"
            @click="handleItemClick('delete')"
          >
            <span style="color: #dc3545">Delete</span>
          </FdsListItem>
        </FdsList>

        <p class="mt-4 mb-0">
          Lists support various layouts and styling options for different use cases.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          variant: null,
          ordered: false,
          noTopMargin: false,
          noBottomMargin: false,
          itemVariant: null,
          flex: false,
          justifyBetween: false,
          itemCount: 3,
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <FdsList
            :variant="state.variant"
            :ordered="state.ordered"
            :no-top-margin="state.noTopMargin"
            :no-bottom-margin="state.noBottomMargin"
          >
            <FdsListItem
              v-for="i in state.itemCount"
              :key="i"
              :variant="state.itemVariant"
              :flex="state.flex"
              :justify-between="state.justifyBetween"
            >
              <span>List item {{ i }}</span>
              <span v-if="state.flex && state.justifyBetween">→</span>
            </FdsListItem>
          </FdsList>
        </div>
      </template>

      <template #controls="{ state }">
        <HstSelect
          v-model="state.variant"
          title="List Variant"
          :options="[
            { value: null, label: 'Default' },
            { value: 'bordered', label: 'Bordered' },
            { value: 'unstyled', label: 'Unstyled' },
            { value: 'nobullet', label: 'No Bullet' },
            { value: 'overflow', label: 'Overflow' },
          ]"
        />

        <HstCheckbox v-model="state.ordered" title="Ordered List (ol)" />

        <HstCheckbox v-model="state.noTopMargin" title="No Top Margin" />

        <HstCheckbox v-model="state.noBottomMargin" title="No Bottom Margin" />

        <HstSelect
          v-model="state.itemVariant"
          title="Item Variant"
          :options="[
            { value: null, label: 'Default' },
            { value: 'current', label: 'Current' },
            { value: 'active', label: 'Active' },
            { value: 'disabled', label: 'Disabled' },
          ]"
        />

        <HstCheckbox v-model="state.flex" title="Flex Layout" />

        <HstCheckbox
          v-model="state.justifyBetween"
          title="Justify Between"
          :disabled="!state.flex"
        />

        <HstNumber v-model="state.itemCount" title="Number of Items" :min="1" :max="10" />
      </template>
    </Variant>
  </Story>
</template>
