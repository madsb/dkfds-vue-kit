# FdsPreview

The Preview component system provides a comprehensive solution for documenting and showcasing components with live examples, descriptions, and code samples. It consists of four interconnected components that work together to create professional documentation layouts.

## Usage

```vue
<template>
  <FdsPreview header="Component Name" href="/docs" link-text="Documentation">
    <FdsPreviewItem>
      <p>Description of the component and its usage.</p>
    </FdsPreviewItem>
    
    <FdsPreviewExample>
      <FdsButton>Live Example</FdsButton>
    </FdsPreviewExample>
    
    <FdsPreviewCode header="HTML">
      <FdsPre code="<FdsButton>Live Example</FdsButton>" />
    </FdsPreviewCode>
  </FdsPreview>
</template>

<script setup>
import {
  FdsPreview,
  FdsPreviewItem,
  FdsPreviewExample,
  FdsPreviewCode,
  FdsPre,
  FdsButton
} from '@madsb/dkfds-vue3'
</script>
```

## Components

### FdsPreview Props

| Prop       | Type     | Default         | Description                                    |
| ---------- | -------- | --------------- | ---------------------------------------------- |
| `header`   | `string` | -               | Header text describing the preview content     |
| `href`     | `string` | -               | Optional URL for documentation link            |
| `linkText` | `string` | `'Design System'` | Text for the documentation link               |

### FdsPreviewCode Props

| Prop     | Type     | Default | Description                           |
| -------- | -------- | ------- | ------------------------------------- |
| `header` | `string` | `null`  | Optional header for the code section |

### FdsPreviewItem

Accepts any content through slots - typically used for descriptions, guidelines, and explanatory text.

### FdsPreviewExample

Container for live component demonstrations. Provides proper semantic labeling with `aria-label="Eksempel"`.

## Accessibility

- Preview containers include proper ARIA labeling
- Code sections are marked with `aria-hidden="true"` to avoid screen reader duplication
- Example sections are clearly labeled for assistive technologies
- All interactive elements maintain keyboard navigation support

## Design Guidelines

- **Use for documentation**: Perfect for component libraries, style guides, and API documentation
- **Combine flexibly**: Use any combination of description, example, and code sections
- **Keep examples focused**: Each preview should demonstrate one clear concept
- **Provide context**: Use headers and descriptions to explain the purpose and usage
- **Link to documentation**: Use href prop to link to comprehensive documentation

## Layout Patterns

### Full Documentation
```vue
<FdsPreview header="Component" href="/docs" link-text="Full Docs">
  <FdsPreviewItem><!-- Description --></FdsPreviewItem>
  <FdsPreviewExample><!-- Live example --></FdsPreviewExample>
  <FdsPreviewCode><!-- Code sample --></FdsPreviewCode>
</FdsPreview>
```

### Example Only
```vue
<FdsPreview header="Quick Demo">
  <FdsPreviewExample><!-- Live example --></FdsPreviewExample>
</FdsPreview>
```

### Code Documentation
```vue
<FdsPreview header="API Reference">
  <FdsPreviewCode header="TypeScript">
    <FdsPre code="interface Props { ... }" />
  </FdsPreviewCode>
</FdsPreview>
```

## Themes

The Preview component system automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with neutral backgrounds
- **VirkDK**: Business-oriented styling with professional appearance
- **BorgerDK**: Citizen-oriented styling with accessible design
