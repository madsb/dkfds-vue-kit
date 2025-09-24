<script setup lang="ts">
import { ref, unref } from 'vue'
import type { Ref } from 'vue'
import { FdsModal, FdsButton } from '@madsb/dkfds-vue-kit'

// Demo state for interactions
const basicModalRef = ref<InstanceType<typeof FdsModal> | null>(null)
const largeContentModalRef = ref<InstanceType<typeof FdsModal> | null>(null)
const customModalRef = ref<InstanceType<typeof FdsModal> | null>(null)
const confirmModalRef = ref<InstanceType<typeof FdsModal> | null>(null)
const actionCount = ref(0)

const handleAccept = () => {
  actionCount.value++
}

const handleCancel = () => {
  actionCount.value++
}

const handleCustomAction = (action: string) => {
  actionCount.value++
  console.log(`Custom action: ${action}`)
}

const handleSaveAndClose = () => {
  handleCustomAction('save-close')
  customModalRef.value?.hideModal()
}

const handleSaveOnly = () => {
  handleCustomAction('save')
  customModalRef.value?.hideModal()
}

const handleDiscard = () => {
  handleCustomAction('discard')
  customModalRef.value?.hideModal()
}

type ModalInstance = InstanceType<typeof FdsModal> | null

const openModal = (modal: ModalInstance | Ref<ModalInstance>) => {
  unref(modal)?.showModal()
}
</script>

<template>
  <Story title="Feedback/Modal" icon="carbon:popup">
    <!-- Showcase all modal types -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Basic Modal</h3>
            <FdsButton variant="primary" @click="openModal(basicModalRef)"
              >Open Basic Modal</FdsButton
            >
            <FdsModal
              ref="basicModalRef"
              header="Basic Modal"
              accept-text="Confirm"
              cancel-text="Cancel"
              @accept="handleAccept"
              @cancel="handleCancel"
            >
              This is a basic modal with default actions.
            </FdsModal>
          </div>

          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">With Scrollable Content</h3>
            <FdsButton variant="secondary" @click="openModal(largeContentModalRef)"
              >Open Scrollable Modal</FdsButton
            >
            <FdsModal
              ref="largeContentModalRef"
              header="Terms and Conditions"
              accept-text="I Accept"
              cancel-text="Decline"
              @accept="handleAccept"
              @cancel="handleCancel"
            >
              <div>
                <p>
                  This modal contains a lot of content that demonstrates scrolling behavior within
                  the modal body.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium.
                </p>
                <p>
                  Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                  quia consequuntur magni dolores.
                </p>
              </div>
            </FdsModal>
          </div>

          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Custom Actions</h3>
            <FdsButton variant="tertiary" @click="openModal(customModalRef)"
              >Open Custom Modal</FdsButton
            >
            <FdsModal ref="customModalRef" header="Save Document">
              <p>Would you like to save your changes before closing?</p>
              <template #footer>
                <FdsButton variant="primary" @click="handleSaveAndClose">Save & Close</FdsButton>
                <FdsButton variant="secondary" @click="handleSaveOnly">Save Only</FdsButton>
                <FdsButton variant="tertiary" @click="handleDiscard">Discard</FdsButton>
              </template>
            </FdsModal>
          </div>

          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Non-Closeable</h3>
            <FdsButton variant="warning" @click="openModal(confirmModalRef)"
              >Critical Action</FdsButton
            >
            <FdsModal
              ref="confirmModalRef"
              header="Confirm Deletion"
              :closeable="false"
              accept-text="Delete"
              cancel-text="Keep"
              @accept="handleAccept"
              @cancel="handleCancel"
            >
              <p>
                <strong>Warning:</strong> This action cannot be undone. Are you sure you want to
                delete this item?
              </p>
            </FdsModal>
          </div>
        </div>

        <p class="mt-4 mb-0">
          The modal component follows DKFDS v11 design specifications with proper focus management
          and keyboard navigation. Try switching themes using the global theme switcher to see how
          modals adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Focus Management & Accessibility -->
    <Variant title="Accessibility Features" icon="carbon:accessibility">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Focus Management</h3>
          <p>Modals automatically manage focus and support keyboard navigation:</p>
          <ul>
            <li><strong>ESC Key:</strong> Closes closeable modals</li>
            <li><strong>Tab Navigation:</strong> Cycles through focusable elements within modal</li>
            <li><strong>Focus Trap:</strong> Prevents tabbing outside modal boundaries</li>
            <li><strong>Return Focus:</strong> Returns focus to triggering element when closed</li>
          </ul>

          <FdsButton variant="primary" @click="openModal(basicModalRef)"
            >Test Focus Management</FdsButton
          >
        </div>

        <hr class="my-6" />

        <div>
          <h3 class="h6 mb-2">ARIA Attributes</h3>
          <p>The modal includes proper ARIA labeling:</p>
          <ul>
            <li><code>aria-modal="true"</code> - Identifies the element as a modal</li>
            <li><code>aria-labelledby</code> - References the modal title for screen readers</li>
            <li><code>role="dialog"</code> - Provided by native HTML dialog element</li>
          </ul>
        </div>

        <p class="mt-4 mb-0">
          Try opening a modal and using keyboard navigation (Tab, Shift+Tab, ESC) to test
          accessibility features.
        </p>
      </div>
    </Variant>

    <!-- Different Modal Configurations -->
    <Variant title="Modal Configurations" icon="carbon:settings">
      <div class="container py-6">
        <div>
          <div>
            <h3 class="h6 mb-2">With Custom Header</h3>
            <FdsButton variant="secondary" @click="openModal(customModalRef)"
              >Custom Header</FdsButton
            >
          </div>

          <div>
            <h3 class="h6 mb-2">Action Confirmation</h3>
            <FdsButton variant="warning" @click="openModal(confirmModalRef)"
              >Destructive Action</FdsButton
            >
          </div>

          <div>
            <h3 class="h6 mb-2">Information Display</h3>
            <FdsButton variant="tertiary" @click="openModal(largeContentModalRef)"
              >Show Details</FdsButton
            >
          </div>
        </div>

        <hr class="my-6" />

        <div>
          <p class="h6 mb-2">Interaction Count: {{ actionCount }}</p>
          <p>Track user interactions with modal actions to understand usage patterns.</p>
        </div>

        <p class="mt-4 mb-0">
          Different modal configurations serve various purposes: confirmations, information display,
          multi-step workflows, and critical actions that require user attention.
        </p>
      </div>
    </Variant>

    <!-- Interactive Playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          header: 'Modal Title',
          closeable: true,
          acceptText: 'Confirm',
          cancelText: 'Cancel',
          content: 'This is the modal content that you can customize.',
          showFooter: true,
        })
      "
    >
      <template #default>
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <FdsButton variant="primary" @click="openModal(basicModalRef)">Open Modal</FdsButton>

          <p class="mt-4 mb-0">Actions triggered: {{ actionCount }}</p>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.header" title="Modal Header" />

        <HstTextarea v-model="state.content" title="Modal Content" />

        <HstCheckbox v-model="state.closeable" title="Closeable (ESC key and X button)" />

        <HstText v-model="state.acceptText" title="Accept Button Text" />

        <HstText v-model="state.cancelText" title="Cancel Button Text" />

        <HstCheckbox v-model="state.showFooter" title="Show Footer Actions" />
      </template>
    </Variant>
  </Story>
</template>
