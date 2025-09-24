# FdsToast

The toast component provides contextual feedback messages to users with different severity levels (info, success, warning, error). It features automatic dismissal, manual close functionality, and proper ARIA support for screen readers, following DKFDS v11 specifications.

## Usage

```vue
<template>
  <FdsToastContainer>
    <FdsToast
      type="success"
      heading="Success!"
      message="Your data has been saved successfully."
      :visible="showToast"
      @close="showToast = false"
    />
  </FdsToastContainer>

  <!-- Or use the useToast composable -->
  <button @click="showSuccessToast">Show Toast</button>
</template>

<script setup>
import { ref } from 'vue'
import { FdsToast, FdsToastContainer, useToast } from '@madsb/dkfds-vue-kit'

const showToast = ref(false)
const { showSuccess } = useToast()

const showSuccessToast = () => {
  showSuccess('Operation completed successfully!', {
    heading: 'Success',
    autoDismiss: 3000,
  })
}
</script>
```

## Props

### FdsToast

| Prop          | Type                                          | Default   | Description                                    |
| ------------- | --------------------------------------------- | --------- | ---------------------------------------------- |
| `type`        | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'`  | Semantic type affecting icon and styling       |
| `heading`     | `string`                                      | -         | Main heading text displayed prominently        |
| `message`     | `string`                                      | -         | Detailed message text                          |
| `closable`    | `boolean`                                     | `true`    | Whether users can manually dismiss the toast   |
| `id`          | `string`                                      | generated | Unique identifier for the toast element        |
| `autoDismiss` | `number`                                      | `0`       | Auto-dismiss timeout in milliseconds (0 = off) |
| `visible`     | `boolean`                                     | `false`   | Controls toast visibility state                |

### FdsToastContainer

| Prop | Type     | Default   | Description                               |
| ---- | -------- | --------- | ----------------------------------------- |
| `id` | `string` | generated | Unique identifier for the toast container |

## Events

### FdsToast

| Event            | Description                                               |
| ---------------- | --------------------------------------------------------- |
| `close`          | Emitted when toast is closed manually or programmatically |
| `click`          | Emitted when the toast content area is clicked            |
| `update:visible` | Emitted when toast visibility changes (v-model support)   |

## useToast Composable

The `useToast` composable provides programmatic control for creating toast notifications:

```typescript
const {
  showToast, // Show custom toast
  showInfo, // Show info toast
  showSuccess, // Show success toast
  showWarning, // Show warning toast
  showError, // Show error toast
  removeToast, // Remove specific toast
  clearAllToasts, // Remove all toasts
  toasts, // Reactive list of active toasts
} = useToast()
```

### useToast Methods

| Method           | Parameters                    | Description                 |
| ---------------- | ----------------------------- | --------------------------- |
| `showToast`      | `(options: ToastOptions)`     | Show a custom toast         |
| `showInfo`       | `(message: string, options?)` | Show info toast             |
| `showSuccess`    | `(message: string, options?)` | Show success toast          |
| `showWarning`    | `(message: string, options?)` | Show warning toast          |
| `showError`      | `(message: string, options?)` | Show error toast            |
| `removeToast`    | `(id: string)`                | Remove specific toast by ID |
| `clearAllToasts` | `()`                          | Remove all active toasts    |

## Accessibility

- Toast container uses `aria-live="assertive"` for immediate screen reader announcements
- Each toast type includes appropriate semantic labels ("Information", "Success", "Warning", "Error")
- Close buttons include proper ARIA attributes for screen reader context
- Keyboard navigation fully supported (Tab, Enter, Space for close button)
- Automatic focus management when toasts appear and disappear

## Design Guidelines

- **Info toasts** for neutral information that doesn't require immediate action
- **Success toasts** for positive feedback after successful operations
- **Warning toasts** for important notices that need user attention
- **Error toasts** for problems that require user action to resolve
- Use auto-dismiss for non-critical messages (3-5 seconds recommended)
- Allow manual dismissal for important messages that users may need to reference
- Limit the number of simultaneous toasts to avoid overwhelming users
- Position toasts prominently but not blocking critical interface elements

## Themes

The toast component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling with appropriate color coding
- **VirkDK**: Business-oriented styling for Virk.dk contexts
- **BorgerDK**: Citizen-oriented styling for Borger.dk contexts
