# FdsFileUpload

The file upload component provides comprehensive file upload functionality with validation, progress tracking, and accessibility support. It follows DKFDS v11 specifications for file input patterns and supports single or multiple file selection with configurable validation rules.

## Usage

```vue
<template>
  <FdsFileUpload
    label="Upload Documents"
    :accept="['.pdf', '.doc', '.docx']"
    :multiple="true"
    :max-file-size="5242880"
    hint="Select PDF or Word documents (max 5MB each)"
    @upload="handleFileUpload"
    @error="handleFileError"
  />
</template>

<script setup>
import { FdsFileUpload } from '@madsb/dkfds-vue3'

const handleFileUpload = (files) => {
  console.log('Files uploaded:', files)
  // Process uploaded files
}

const handleFileError = (error) => {
  console.error('Upload error:', error)
  // Handle error (show message, etc.)
}
</script>
```

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `id` | `string` | auto-generated | Unique identifier for the file input |
| `name` | `string` | `''` | Input name attribute for form submission |
| `label` | `string` | `'Vælg fil'` | Label text displayed above the input |
| `showLabel` | `boolean` | `true` | Whether to show the label element |
| `hint` | `string` | `''` | Hint text to provide guidance |
| `accept` | `string[]` | `['image/png', 'image/jpg', 'image/jpeg', '.pdf', '.doc', '.docx', '.odt']` | Accepted file types |
| `multiple` | `boolean` | `false` | Enable selection of multiple files |
| `maxFileSize` | `number` | `5242880` | Maximum file size in bytes (5MB) |
| `maxFiles` | `number` | `10` | Maximum number of files (when multiple) |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `required` | `boolean` | `false` | Whether the input is required |
| `error` | `string` | `''` | Error message to display |
| `removeContentHeaders` | `boolean` | `false` | Remove content headers from base64 data |
| `showFileList` | `boolean` | `true` | Display list of selected files |
| `removable` | `boolean` | `true` | Allow users to remove selected files |
| `requiredText` | `string` | `'Obligatorisk felt'` | Text for required field indicator |
| `ariaLive` | `'polite' \| 'assertive'` | `'polite'` | ARIA live region politeness |
| `fileListAriaLabel` | `string` | `'Valgte filer'` | ARIA label for file list |
| `removeFileText` | `string` | `'Fjern fil'` | Text for remove file button |

## Events

| Event | Description |
| ----- | ----------- |
| `blur` | Emitted when input loses focus |
| `focus` | Emitted when input gains focus |
| `upload` | Emitted when files are successfully processed |
| `error` | Emitted when validation or processing error occurs |
| `dirty` | Emitted when input becomes dirty (user interacted) |
| `remove-file` | Emitted when a file is removed from the list |

## Accessibility

- File input is properly labeled and associated with hint text
- Error messages are announced via ARIA live regions
- File list has appropriate ARIA labeling for screen readers
- Remove buttons include descriptive aria-labels with file names
- Keyboard navigation is fully supported for all interactive elements
- Required fields are clearly indicated with proper ARIA attributes

## File Validation

The component provides comprehensive file validation:

- **File Size**: Validates against `maxFileSize` limit
- **File Type**: Checks against `accept` array (MIME types or extensions)
- **File Count**: Enforces `maxFiles` limit when `multiple` is enabled
- **Custom Validation**: Extensible through error event handling

## Design Guidelines

- Use clear, descriptive labels that explain what files are expected
- Provide helpful hint text with file requirements (size, type, count)
- Show file validation rules upfront to prevent user errors
- Consider using specific file type restrictions rather than accepting all files
- Provide immediate feedback for validation errors
- Display selected files with names and sizes for user confirmation
- Allow file removal for better user control

## Common Patterns

### Document Upload
```vue
<FdsFileUpload
  label="Upload Supporting Documents"
  :accept="['.pdf', '.doc', '.docx']"
  :multiple="true"
  :max-file-size="10485760"
  hint="Upload PDF or Word documents (max 10MB each)"
/>
```

### Image Gallery
```vue
<FdsFileUpload
  label="Upload Images"
  :accept="['image/*']"
  :multiple="true"
  :max-files="5"
  hint="Select up to 5 images in any format"
/>
```

### Single Required File
```vue
<FdsFileUpload
  label="Upload CV"
  :accept="['.pdf']"
  :required="true"
  hint="PDF format required for CV submission"
/>
```

## Themes

The file upload component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with neutral colors
- **VirkDK**: Business-oriented styling for Virk.dk with corporate colors
- **BorgerDK**: Citizen-oriented styling for Borger.dk with accessible colors
