# FdsCookiemeddelelse

The cookie notice component provides a GDPR-compliant interface for obtaining user consent for cookie usage. It follows DKFDS v11 design specifications and includes proper accessibility attributes, semantic structure, and customizable content slots.

## Usage

```vue
<template>
  <FdsCookiemeddelelse
    @accept="handleCookieAccept"
    @cancel="handleCookieReject"
  />
</template>

<script setup>
import { FdsCookiemeddelelse } from '@madsb/dkfds-vue3'

const handleCookieAccept = () => {
  console.log('Cookies accepted')
  // Store consent and hide notice
}

const handleCookieReject = () => {
  console.log('Cookies rejected')
  // Store rejection and hide notice
}
</script>
```

## Props

| Prop     | Type     | Default                           | Description                                    |
| -------- | -------- | --------------------------------- | ---------------------------------------------- |
| `header` | `string` | `'Fortæl os om du accepterer cookies'` | Header text for the cookie notice             |

## Events

| Event    | Parameters | Description                        |
| -------- | ---------- | ---------------------------------- |
| `accept` | `boolean`  | Emitted when user accepts cookies  |
| `cancel` | `boolean`  | Emitted when user rejects cookies  |

## Slots

| Slot      | Description                                    |
| --------- | ---------------------------------------------- |
| `header`  | Custom header content (overrides header prop) |
| `default` | Custom message content                         |
| `actions` | Custom action buttons                          |

## Accessibility

- Uses `role="complementary"` for proper semantic meaning
- Includes `aria-labelledby` and `aria-describedby` for screen reader support
- Header and content are properly associated with ARIA attributes
- Keyboard navigation is fully supported (Tab, Enter, Space)
- Default buttons have clear, descriptive text

## Design Guidelines

- **Position**: Typically fixed at the bottom of the viewport to remain visible
- **Content**: Keep message clear and concise, explaining cookie usage
- **Actions**: Provide clear accept/reject options, consider "customize" for GDPR compliance
- **Links**: Include link to privacy policy or detailed cookie information
- **Dismissal**: Hide the notice after user interaction and store their preference
- **GDPR Compliance**: Ensure reject option is as prominent as accept option

## GDPR Considerations

- **Granular Consent**: Consider offering specific cookie category choices
- **Equal Prominence**: Accept and reject options should be equally visible
- **Clear Information**: Explain what cookies are used for and by whom
- **Easy Withdrawal**: Provide mechanism to change consent later
- **Privacy Policy**: Link to detailed privacy and cookie policies

## Themes

The cookie notice component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
