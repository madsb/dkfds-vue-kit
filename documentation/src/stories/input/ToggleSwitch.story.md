# FdsToggleSwitch

The toggle switch component provides a binary on/off control following DKFDS v11 specifications. It offers an intuitive alternative to checkboxes for settings and preferences, with proper accessibility support and customizable labels.

## Usage

```vue
<template>
  <FdsToggleSwitch v-model="isEnabled" />
</template>

<script setup>
import { ref } from 'vue'
import { FdsToggleSwitch } from '@madsb/dkfds-vue3'

const isEnabled = ref(false)
</script>
```

## Props

| Prop         | Type      | Default | Description                                        |
| ------------ | --------- | ------- | -------------------------------------------------- |
| `id`         | `string`  | -       | Unique identifier (auto-generated if not provided) |
| `modelValue` | `boolean` | `false` | Two-way binding value for toggle state             |
| `disabled`   | `boolean` | `false` | Whether the toggle is disabled                     |
| `onText`     | `string`  | `'Til'` | Text displayed when toggle is on (Danish default)  |
| `offText`    | `string`  | `'Fra'` | Text displayed when toggle is off (Danish default) |
| `class`      | `string`  | `''`    | Additional CSS classes                             |

## Events

| Event               | Description                                     |
| ------------------- | ----------------------------------------------- |
| `update:modelValue` | Emitted when toggle state changes (for v-model) |
| `click`             | Emitted on click with the original DOM event    |

## Accessibility

- Uses `role="switch"` for proper semantic meaning
- Automatically provides `aria-checked` attribute
- Supports keyboard navigation (Tab, Space, Enter)
- Can be associated with labels using `for` attribute
- Works with form groups for additional context
- Disabled state prevents interaction and keyboard focus

## Design Guidelines

- Use for binary on/off controls and settings
- Prefer over checkboxes for immediate state changes
- Always provide clear labels or context
- Group related toggles in settings panels
- Consider using custom slot content for dynamic labels
- Ensure sufficient spacing in lists of toggle switches

## Examples

### With Custom Labels

```vue
<FdsToggleSwitch v-model="notifications" onText="Enabled" offText="Disabled" />
```

### With Custom Content

```vue
<FdsToggleSwitch v-model="darkMode">
  {{ darkMode ? '🌙 Dark Mode' : '☀️ Light Mode' }}
</FdsToggleSwitch>
```

### In Form Group

```vue
<FdsFormgroup>
  <template #default="{ formid, ariaDescribedby }">
    <FdsLabel :for-id="formid">Email Notifications</FdsLabel>
    <FdsHint>Receive updates about your account</FdsHint>
    <FdsToggleSwitch 
      :id="formid" 
      v-model="emailNotifications" 
    />
  </template>
</FdsFormgroup>
```

## Themes

The toggle switch component automatically adapts to the selected theme:

- **Default**: Standard DKFDS styling with blue accent
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
