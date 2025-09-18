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
  <Story title="Input/FileUpload" icon="carbon:document-attachment">
    <!-- Showcase all file upload variants -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Single File</h3>
            <FdsFileUpload
              label="Upload Document"
              :accept="['.pdf', '.doc', '.docx']"
              hint="Select a PDF or Word document"
              @upload="handleFileUpload"
              @error="handleFileError"
            />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Multiple Images</h3>
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
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Required Upload</h3>
            <FdsFileUpload
              label="Required Files"
              :required="true"
              :accept="['.pdf', '.txt']"
              hint="This field is required"
              @upload="handleFileUpload"
              @error="handleFileError"
            />
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Disabled State</h3>
            <FdsFileUpload
              label="Upload Disabled"
              :disabled="true"
              hint="File upload is disabled"
            />
          </div>
        </div>
        <p class="mt-4 mb-0">
          The file upload component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how file uploads adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- File validation and size limits -->
    <Variant title="Validation & Limits" icon="carbon:rule">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Size Validation (Max 1MB)</h3>
          <FdsFileUpload
            label="Small Files Only"
            :max-file-size="1048576"
            hint="Maximum file size: 1MB"
            @upload="handleFileUpload"
            @error="handleFileError"
          />

          <hr class="my-6" />

          <h3 class="h6 mb-2">Type Restrictions</h3>
          <FdsFileUpload
            label="Images Only"
            :accept="['image/*']"
            :multiple="true"
            hint="Only image files are allowed"
            @upload="handleFileUpload"
            @error="handleFileError"
          />

          <hr class="my-6" />

          <h3 class="h6 mb-2">File Count Limit</h3>
          <FdsFileUpload
            label="Maximum 2 Files"
            :multiple="true"
            :max-files="2"
            hint="Select up to 2 files maximum"
            @upload="handleFileUpload"
            @error="handleFileError"
          />
        </div>

        <div v-if="uploadStatus">
          <p>{{ uploadStatus }}</p>
          <button type="button" @click="clearStatus">Clear Status</button>
        </div>

        <p class="mt-4 mb-0">
          Try uploading files that exceed the size limit, wrong file types, or too many files to see validation errors.
        </p>
      </div>
    </Variant>

    <!-- File list management -->
    <Variant title="File List Management" icon="carbon:list">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">With File Removal</h3>
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

          <hr class="my-6" />

          <h3 class="h6 mb-2">Hidden File List</h3>
          <FdsFileUpload
            label="No File List"
            :multiple="true"
            :show-file-list="false"
            hint="Files are uploaded but list is hidden"
            @upload="handleFileUpload"
            @error="handleFileError"
          />

          <hr class="my-6" />

          <h3 class="h6 mb-2">Non-removable Files</h3>
          <FdsFileUpload
            label="Fixed File List"
            :multiple="true"
            :removable="false"
            hint="Files cannot be removed once selected"
            @upload="handleFileUpload"
            @error="handleFileError"
          />
        </div>

        <div v-if="uploadedFiles.length > 0">
          <h3 class="h6 mb-2">Upload Summary</h3>
          <p>Total files uploaded: {{ uploadedFiles.length }}</p>
          <ul>
            <li v-for="(file, index) in uploadedFiles" :key="index">
              {{ file.filename }} ({{ file.size }} bytes)
            </li>
          </ul>
        </div>

        <p class="mt-4 mb-0">
          File list shows selected files with names, sizes, and optional remove buttons. Customize the display and behavior.
        </p>
      </div>
    </Variant>

    <!-- Error states and accessibility -->
    <Variant title="Error States" icon="carbon:warning">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">With Error Message</h3>
          <FdsFileUpload
            label="Upload with Error"
            error="Files are required for this application"
            hint="This field shows an error state"
            @upload="handleFileUpload"
            @error="handleFileError"
          />

          <hr class="my-6" />

          <h3 class="h6 mb-2">Assertive Error Announcements</h3>
          <FdsFileUpload
            label="Critical Upload"
            :required="true"
            aria-live="assertive"
            hint="Errors will be announced immediately"
            @upload="handleFileUpload"
            @error="handleFileError"
          />
        </div>

        <div v-if="errorMessages.length > 0">
          <h3 class="h6 mb-2">Error Log</h3>
          <ul>
            <li v-for="(error, index) in errorMessages" :key="index">
              {{ error }}
            </li>
          </ul>
          <button type="button" @click="errorMessages = []">Clear Errors</button>
        </div>

        <p class="mt-4 mb-0">
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
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
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

          <div v-if="uploadStatus">
            <p>{{ uploadStatus }}</p>
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
