# FdsModal

The modal component creates accessible dialog overlays for displaying important information, collecting user input, or confirming actions. Built with the native HTML dialog element and following DKFDS v11 specifications.

## Usage

```vue
<template>
  <FdsButton @click="openModal">Open Modal</FdsButton>

  <FdsModal
    ref="modalRef"
    header="Confirm Action"
    accept-text="Confirm"
    cancel-text="Cancel"
    @accept="handleConfirm"
    @cancel="handleCancel"
  >
    Are you sure you want to proceed with this action?
  </FdsModal>
</template>

<script setup>
import { ref } from 'vue'
import { FdsModal, FdsButton } from '@madsb/dkfds-vue3'

const modalRef = ref(null)

const openModal = () => {
  modalRef.value.showModal()
}

const handleConfirm = () => {
  console.log('User confirmed')
}

const handleCancel = () => {
  console.log('User cancelled')
}
</script>
```

## Props

| Prop         | Type      | Default     | Description                                      |
| ------------ | --------- | ----------- | ------------------------------------------------ |
| `header`     | `string`  | -           | Modal header text displayed as title            |
| `id`         | `string`  | -           | Unique identifier (auto-generated if not set)   |
| `closeable`  | `boolean` | `true`      | Allow closing with ESC key and X button         |
| `acceptText` | `string`  | `'Godkend'` | Text for the primary action button              |
| `cancelText` | `string`  | `'Annuller'`| Text for the cancel button                      |

## Events

| Event    | Description                              |
| -------- | ---------------------------------------- |
| `accept` | Emitted when accept button is clicked    |
| `cancel` | Emitted when cancel button is clicked    |
| `close`  | Emitted when modal is closed by any means|

## Slots

| Slot     | Description                              |
| -------- | ---------------------------------------- |
| `default`| Main modal content                       |
| `header` | Custom header content                    |
| `footer` | Custom footer actions                    |

## Methods

| Method      | Description                              |
| ----------- | ---------------------------------------- |
| `showModal` | Opens the modal dialog                   |
| `hideModal` | Closes the modal dialog                  |

## Accessibility

- **Focus Management**: Automatically traps focus within modal and returns to trigger element when closed
- **Keyboard Navigation**: Supports ESC to close (if closeable), Tab/Shift+Tab for navigation
- **ARIA Labels**: Includes proper `aria-modal`, `aria-labelledby`, and `role` attributes
- **Screen Reader Support**: Modal title is properly associated with dialog content
- **Native Dialog**: Uses HTML dialog element for native browser accessibility support

## Design Guidelines

- Use modals sparingly - they interrupt user workflow
- **Confirmation Dialogs**: For destructive or irreversible actions
- **Information Display**: When content requires focused attention
- **Form Workflows**: For multi-step processes that need isolation
- Keep modal content concise and focused on single task
- Provide clear action buttons with descriptive text
- Consider mobile viewport constraints

## Best Practices

- Always provide a way to dismiss the modal (closeable or cancel button)
- Use descriptive button text instead of generic "OK"/"Cancel"
- For critical actions, consider making modal non-closeable
- Test keyboard navigation and screen reader compatibility
- Ensure modal content is readable at mobile sizes
- Avoid nesting modals within other modals

## Themes

The modal component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with neutral background
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
