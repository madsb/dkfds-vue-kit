<script setup lang="ts">
import { ref } from 'vue'
import { FdsFileUpload } from '@madsb/dkfds-vue3'

// Demo state
const uploadedFiles = ref<any[]>([])
const errorMessages = ref<string[]>([])
const uploadStatus = ref('')

const handleFileUpload = (files: any[]) => {
  uploadedFiles.value = [...uploadedFiles.value, ...files]
  uploadStatus.value = `Successfully uploaded ${files.length} file(s)`
  console.log('Files uploaded:', files)
}

const handleFileError = (error: any) => {
  errorMessages.value = [...errorMessages.value, error.message]
  uploadStatus.value = `Error: ${error.message}`
  console.error('File upload error:', error)
}

const handleFileRemove = (index: number, file: File) => {
  uploadStatus.value = `Removed file: ${file.name}`
  console.log('File removed:', file.name)
}

const clearStatus = () => {
  uploadStatus.value = ''
  errorMessages.value = []
}
</script>

<template>
  <Story title="Input/FileUpload" :layout="{ type: 'grid', width: '100%' }" icon="carbon:document-attachment">
    <!-- Showcase all file upload variants -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="story-content">
        <div class="variant-grid">
          <div class="variant-section">
            <h3 class="section-title">Single File</h3>
            <FdsFileUpload
              label="Upload Document"
              :accept="['.pdf', '.doc', '.docx']"
              hint="Select a PDF or Word document"
              @upload="handleFileUpload"
              @error="handleFileError"
            />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Multiple Images</h3>
            <FdsFileUpload
              label="Upload Images"
              :accept="['image/png', 'image/jpeg', 'image/jpg']"
              :multiple="true"
              :max-files="3"
              hint="Select up to 3 images (PNG, JPEG)"
              @upload="handleFileUpload"
              @error="handleFileError"
            />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Required Upload</h3>
            <FdsFileUpload
              label="Required Files"
              :required="true"
              :accept="['.pdf', '.txt']"
              hint="This field is required"
              @upload="handleFileUpload"
              @error="handleFileError"
            />
          </div>
          <div class="variant-section">
            <h3 class="section-title">Disabled State</h3>
            <FdsFileUpload
              label="Upload Disabled"
              :disabled="true"
              hint="File upload is disabled"
            />
          </div>
        </div>
        <p class="story-hint">
          The file upload component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how file uploads adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- File validation and size limits -->
    <Variant title="Validation & Limits" icon="carbon:rule">
      <div class="story-content">
        <div class="validation-demo">
          <h3 class="section-subtitle">Size Validation (Max 1MB)</h3>
          <FdsFileUpload
            label="Small Files Only"
            :max-file-size="1048576"
            hint="Maximum file size: 1MB"
            @upload="handleFileUpload"
            @error="handleFileError"
          />

          <div class="divider" />

          <h3 class="section-subtitle">Type Restrictions</h3>
          <FdsFileUpload
            label="Images Only"
            :accept="['image/*']"
            :multiple="true"
            hint="Only image files are allowed"
            @upload="handleFileUpload"
            @error="handleFileError"
          />

          <div class="divider" />

          <h3 class="section-subtitle">File Count Limit</h3>
          <FdsFileUpload
            label="Maximum 2 Files"
            :multiple="true"
            :max-files="2"
            hint="Select up to 2 files maximum"
            @upload="handleFileUpload"
            @error="handleFileError"
          />
        </div>

        <div v-if="uploadStatus" class="status-display">
          <p class="upload-status">{{ uploadStatus }}</p>
          <button type="button" class="clear-status-btn" @click="clearStatus">Clear Status</button>
        </div>

        <p class="story-hint">
          Try uploading files that exceed the size limit, wrong file types, or too many files to see validation errors.
        </p>
      </div>
    </Variant>

    <!-- File list management -->
    <Variant title="File List Management" icon="carbon:list">
      <div class="story-content">
        <div class="file-list-demo">
          <h3 class="section-subtitle">With File Removal</h3>
          <FdsFileUpload
            label="Manage Files"
            :multiple="true"
            :removable="true"
            :show-file-list="true"
            remove-file-text="Remove this file"
            file-list-aria-label="Uploaded files list"
            hint="Upload files and remove them individually"
            @upload="handleFileUpload"
            @error="handleFileError"
            @remove-file="handleFileRemove"
          />

          <div class="divider" />

          <h3 class="section-subtitle">Hidden File List</h3>
          <FdsFileUpload
            label="No File List"
            :multiple="true"
            :show-file-list="false"
            hint="Files are uploaded but list is hidden"
            @upload="handleFileUpload"
            @error="handleFileError"
          />

          <div class="divider" />

          <h3 class="section-subtitle">Non-removable Files</h3>
          <FdsFileUpload
            label="Fixed File List"
            :multiple="true"
            :removable="false"
            hint="Files cannot be removed once selected"
            @upload="handleFileUpload"
            @error="handleFileError"
          />
        </div>

        <div v-if="uploadedFiles.length > 0" class="uploaded-summary">
          <h3 class="section-subtitle">Upload Summary</h3>
          <p class="file-count">Total files uploaded: {{ uploadedFiles.length }}</p>
          <ul class="uploaded-files-list">
            <li v-for="(file, index) in uploadedFiles" :key="index" class="uploaded-file">
              {{ file.filename }} ({{ file.size }} bytes)
            </li>
          </ul>
        </div>

        <p class="story-hint">
          File list shows selected files with names, sizes, and optional remove buttons. Customize the display and behavior.
        </p>
      </div>
    </Variant>

    <!-- Error states and accessibility -->
    <Variant title="Error States" icon="carbon:warning">
      <div class="story-content">
        <div class="error-demo">
          <h3 class="section-subtitle">With Error Message</h3>
          <FdsFileUpload
            label="Upload with Error"
            error="Files are required for this application"
            hint="This field shows an error state"
            @upload="handleFileUpload"
            @error="handleFileError"
          />

          <div class="divider" />

          <h3 class="section-subtitle">Assertive Error Announcements</h3>
          <FdsFileUpload
            label="Critical Upload"
            :required="true"
            aria-live="assertive"
            hint="Errors will be announced immediately"
            @upload="handleFileUpload"
            @error="handleFileError"
          />
        </div>

        <div v-if="errorMessages.length > 0" class="error-log">
          <h3 class="section-subtitle">Error Log</h3>
          <ul class="error-list">
            <li v-for="(error, index) in errorMessages" :key="index" class="error-item">
              {{ error }}
            </li>
          </ul>
          <button type="button" class="clear-errors-btn" @click="errorMessages = []">Clear Errors</button>
        </div>

        <p class="story-hint">
          Error states provide clear feedback with ARIA announcements. Try uploading invalid files to trigger errors.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          label: 'Upload Files',
          hint: 'Select files to upload',
          multiple: false,
          required: false,
          disabled: false,
          showLabel: true,
          showFileList: true,
          removable: true,
          maxFileSize: 5242880,
          maxFiles: 10,
          accept: ['.pdf', '.doc', '.docx', 'image/*'],
          error: '',
          removeContentHeaders: false,
        })
      "
    >
      <template #default="{ state }">
        <div class="story-content playground">
          <FdsFileUpload
            :label="state.label"
            :hint="state.hint"
            :multiple="state.multiple"
            :required="state.required"
            :disabled="state.disabled"
            :show-label="state.showLabel"
            :show-file-list="state.showFileList"
            :removable="state.removable"
            :max-file-size="state.maxFileSize"
            :max-files="state.maxFiles"
            :accept="state.accept"
            :error="state.error"
            :remove-content-headers="state.removeContentHeaders"
            @upload="handleFileUpload"
            @error="handleFileError"
            @remove-file="handleFileRemove"
          />

          <div v-if="uploadStatus" class="playground-status">
            <p class="status-message">{{ uploadStatus }}</p>
          </div>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.label" title="Label Text" />

        <HstText v-model="state.hint" title="Hint Text" />

        <HstCheckbox v-model="state.multiple" title="Multiple Files" />

        <HstCheckbox v-model="state.required" title="Required" />

        <HstCheckbox v-model="state.disabled" title="Disabled" />

        <HstCheckbox v-model="state.showLabel" title="Show Label" />

        <HstCheckbox v-model="state.showFileList" title="Show File List" />

        <HstCheckbox 
          v-model="state.removable" 
          title="Removable Files" 
          :disabled="!state.showFileList" 
        />

        <HstNumber 
          v-model="state.maxFileSize" 
          title="Max File Size (bytes)" 
          :step="1024" 
        />

        <HstNumber 
          v-model="state.maxFiles" 
          title="Max Files" 
          :disabled="!state.multiple" 
        />

        <HstJson v-model="state.accept" title="Accepted Types" />

        <HstText v-model="state.error" title="Error Message" />

        <HstCheckbox v-model="state.removeContentHeaders" title="Remove Content Headers" />
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.4rem;
  margin-bottom: 2.4rem;
}

.variant-section {
  display: flex;
  flex-direction: column;
}

.validation-demo,
.file-list-demo,
.error-demo {
  max-width: 600px;
}

.divider {
  margin: 2.4rem 0;
  border-top: 1px solid #e0e0e0;
}

/* Status and feedback displays */
.status-display {
  margin-top: 2.4rem;
  padding: 1.6rem;
  background-color: #f5f5f5;
  border-radius: 4px;
  border-left: 4px solid #0077c8;
}

.upload-status {
  font-size: 1.4rem;
  margin: 0 0 1.2rem 0;
  color: #333;
}

.clear-status-btn,
.clear-errors-btn {
  font-size: 1.4rem;
  padding: 0.8rem 1.6rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.clear-status-btn:hover,
.clear-errors-btn:hover {
  background-color: #f9f9f9;
}

.uploaded-summary {
  margin-top: 2.4rem;
  padding: 1.6rem;
  background-color: #f0f8ff;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
}

.file-count {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 1.2rem 0;
  color: #0077c8;
}

.uploaded-files-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.uploaded-file {
  font-size: 1.4rem;
  padding: 0.4rem 0;
  color: #333;
}

.error-log {
  margin-top: 2.4rem;
  padding: 1.6rem;
  background-color: #ffeaea;
  border-radius: 4px;
  border-left: 4px solid #d32f2f;
}

.error-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.2rem 0;
}

.error-item {
  font-size: 1.4rem;
  padding: 0.4rem 0;
  color: #d32f2f;
}

.playground {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 200px;
}

.playground-status {
  margin-top: 1.6rem;
  padding: 1.2rem;
  background-color: #f0f8ff;
  border-radius: 4px;
  width: 100%;
}

.status-message {
  font-size: 1.4rem;
  margin: 0;
  color: #0077c8;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story-content {
    padding: 1.6rem;
  }

  .variant-grid {
    grid-template-columns: 1fr;
  }

  .validation-demo,
  .file-list-demo,
  .error-demo {
    max-width: 100%;
  }
}
</style>

<docs lang="md">
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
</docs>