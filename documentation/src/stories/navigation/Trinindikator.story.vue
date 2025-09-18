<script setup lang="ts">
import { ref } from 'vue'
import { FdsTrinindikatorGroup, FdsTrinindikatorStep } from '@madsb/dkfds-vue3'

// Demo state
const currentStep = ref(2)
const interactiveCurrentStep = ref(3)
const maxCompletedStep = ref(3)

// Step configurations
const basicSteps = [
  { number: 1, title: 'Personlige oplysninger' },
  { number: 2, title: 'Dokumenter' },
  { number: 3, title: 'Gennemse' },
  { number: 4, title: 'Bekræftelse' }
]

const detailedSteps = [
  { number: 1, title: 'Start ansøgning', info: 'Grundlæggende oplysninger' },
  { number: 2, title: 'Upload dokumenter', info: 'Påkrævede dokumenter og billeder' },
  { number: 3, title: 'Validering', info: 'System validerer dine oplysninger' },
  { number: 4, title: 'Godkendelse', info: 'Afventer godkendelse' },
  { number: 5, title: 'Færdig', info: 'Ansøgning er fuldført' }
]

const errorSteps = [
  { number: 1, title: 'Persondata', completed: true },
  { number: 2, title: 'Upload dokumenter', error: true, info: 'Manglende dokumenter' },
  { number: 3, title: 'Gennemse', disabled: true },
  { number: 4, title: 'Send ansøgning', disabled: true }
]

// Event handlers
const handleStepClick = (stepNumber: number) => {
  if (stepNumber <= maxCompletedStep.value) {
    interactiveCurrentStep.value = stepNumber
  }
}

const handleModalOpen = () => {
  console.log('Mobile modal opened')
}

const handleModalClose = () => {
  console.log('Mobile modal closed')
}
</script>

<template>
  <Story title="Navigation/Trinindikator" :layout="{ type: 'grid', width: '100%' }" icon="carbon:flow">
    <!-- Showcase all trinindikator variants -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Basic Steps</h3>
            <FdsTrinindikatorGroup
              :current-step="2"
              :total-steps="4"
              aria-label="Basic application process"
            >
              <FdsTrinindikatorStep
                v-for="step in basicSteps"
                :key="step.number"
                :step-number="step.number"
                :title="step.title"
                :is-current="step.number === 2"
                :is-completed="step.number < 2"
              />
            </FdsTrinindikatorGroup>
          </div>
          
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">With Step Information</h3>
            <FdsTrinindikatorGroup
              :current-step="3"
              :total-steps="5"
              :show-step-info="true"
              aria-label="Detailed application process"
            >
              <FdsTrinindikatorStep
                v-for="step in detailedSteps"
                :key="step.number"
                :step-number="step.number"
                :title="step.title"
                :step-info="step.info"
                :is-current="step.number === 3"
                :is-completed="step.number < 3"
              />
            </FdsTrinindikatorGroup>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The trinindikator component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how step indicators adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Different step states -->
    <Variant title="Step States" icon="carbon:status-change">
      <div class="container py-6">
        <h3 class="h6 mb-2">Error State Example</h3>
        <FdsTrinindikatorGroup
          :current-step="2"
          :total-steps="4"
          aria-label="Process with validation error"
        >
          <FdsTrinindikatorStep
            v-for="step in errorSteps"
            :key="step.number"
            :step-number="step.number"
            :title="step.title"
            :step-info="step.info"
            :is-current="step.number === 2"
            :is-completed="step.completed || false"
            :has-error="step.error || false"
            :disabled="step.disabled || false"
          />
        </FdsTrinindikatorGroup>
        
        <hr class="my-6" />
        
        <h3 class="h6 mb-2">Progress States</h3>
        <div>
          <div>
            <h4>Step 1: Beginning</h4>
            <FdsTrinindikatorGroup
              :current-step="1"
              :total-steps="4"
              aria-label="Process at start"
            >
              <FdsTrinindikatorStep
                v-for="step in basicSteps"
                :key="step.number"
                :step-number="step.number"
                :title="step.title"
                :is-current="step.number === 1"
                :is-completed="false"
              />
            </FdsTrinindikatorGroup>
          </div>
          
          <div>
            <h4>Step 4: Completion</h4>
            <FdsTrinindikatorGroup
              :current-step="4"
              :total-steps="4"
              aria-label="Process completed"
            >
              <FdsTrinindikatorStep
                v-for="step in basicSteps"
                :key="step.number"
                :step-number="step.number"
                :title="step.title"
                :is-current="step.number === 4"
                :is-completed="step.number < 4"
              />
            </FdsTrinindikatorGroup>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Steps can show different states: current (highlighted), completed (checkmark), 
          error (warning icon), and disabled (grayed out).
        </p>
      </div>
    </Variant>

    <!-- Interactive step navigation -->
    <Variant title="Interactive Navigation" icon="carbon:touch-interaction">
      <div class="container py-6">
        <FdsTrinindikatorGroup
          :current-step="interactiveCurrentStep"
          :total-steps="5"
          :clickable-steps="true"
          aria-label="Interactive application process"
          @step-click="handleStepClick"
          @modal-open="handleModalOpen"
          @modal-close="handleModalClose"
        >
          <FdsTrinindikatorStep
            v-for="step in detailedSteps"
            :key="step.number"
            :step-number="step.number"
            :title="step.title"
            :step-info="step.info"
            :is-current="step.number === interactiveCurrentStep"
            :is-completed="step.number < interactiveCurrentStep"
            :clickable="step.number <= maxCompletedStep"
            :disabled="step.number > maxCompletedStep"
            @click="handleStepClick"
          />
        </FdsTrinindikatorGroup>
        
        <div>
          <button 
            class="button button-secondary"
            @click="interactiveCurrentStep = Math.max(1, interactiveCurrentStep - 1)"
            :disabled="interactiveCurrentStep === 1"
          >
            Forrige
          </button>
          <button 
            class="button button-primary"
            @click="() => {
              interactiveCurrentStep = Math.min(5, interactiveCurrentStep + 1)
              maxCompletedStep = Math.max(maxCompletedStep, interactiveCurrentStep)
            }"
            :disabled="interactiveCurrentStep === 5"
          >
            Næste
          </button>
        </div>
        <p class="mt-4 mb-0">
          Click on completed steps to navigate. Use the buttons to progress through the steps.
          On mobile, tap "Trin X af Y" to see the full step modal.
        </p>
      </div>
    </Variant>

    <!-- Responsive behavior -->
    <Variant title="Responsive Behavior" icon="carbon:devices">
      <div class="container py-6">
        <p>
          <strong>Desktop:</strong> Full step indicator visible<br>
          <strong>Mobile:</strong> Compact button that opens modal when tapped
        </p>
        
        <FdsTrinindikatorGroup
          :current-step="currentStep"
          :total-steps="4"
          modal-title="Ansøgningsproces"
          close-button-text="Tilbage til skema"
          aria-label="Responsive step indicator"
        >
          <FdsTrinindikatorStep
            v-for="step in basicSteps"
            :key="step.number"
            :step-number="step.number"
            :title="step.title"
            :is-current="step.number === currentStep"
            :is-completed="step.number < currentStep"
          />
        </FdsTrinindikatorGroup>
        
        <div>
          <p>Simulate mobile view by resizing your browser window to less than 768px wide.</p>
          <div>
            <button class="step-indicator-button" style="position: relative; z-index: 1;">
              <span>Trin <strong>{{ currentStep }}</strong> af {{ basicSteps.length }}</span>
            </button>
            <p>↑ This is how it appears on mobile screens</p>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The component automatically adapts to screen size. On mobile devices, 
          the full step list is hidden and accessible via a modal dialog for better usability.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          currentStep: 2,
          totalSteps: 4,
          clickableSteps: true,
          showStepInfo: false,
          modalTitle: 'Trinvisning',
          ariaLabel: 'Trinindikator playground',
          step1Title: 'Første trin',
          step2Title: 'Andet trin',
          step3Title: 'Tredje trin',
          step4Title: 'Fjerde trin',
          step1Info: '',
          step2Info: '',
          step3Info: '',
          step4Info: '',
          step1HasError: false,
          step2HasError: false,
          step3HasError: false,
          step4HasError: false,
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <FdsTrinindikatorGroup
            :current-step="state.currentStep"
            :total-steps="state.totalSteps"
            :clickable-steps="state.clickableSteps"
            :show-step-info="state.showStepInfo"
            :modal-title="state.modalTitle"
            :aria-label="state.ariaLabel"
          >
            <FdsTrinindikatorStep
              :step-number="1"
              :title="state.step1Title"
              :step-info="state.step1Info"
              :is-current="state.currentStep === 1"
              :is-completed="state.currentStep > 1"
              :has-error="state.step1HasError"
              :clickable="state.clickableSteps"
            />
            <FdsTrinindikatorStep
              :step-number="2"
              :title="state.step2Title"
              :step-info="state.step2Info"
              :is-current="state.currentStep === 2"
              :is-completed="state.currentStep > 2"
              :has-error="state.step2HasError"
              :clickable="state.clickableSteps"
            />
            <FdsTrinindikatorStep
              :step-number="3"
              :title="state.step3Title"
              :step-info="state.step3Info"
              :is-current="state.currentStep === 3"
              :is-completed="state.currentStep > 3"
              :has-error="state.step3HasError"
              :clickable="state.clickableSteps"
            />
            <FdsTrinindikatorStep
              :step-number="4"
              :title="state.step4Title"
              :step-info="state.step4Info"
              :is-current="state.currentStep === 4"
              :is-completed="false"
              :has-error="state.step4HasError"
              :clickable="state.clickableSteps"
            />
          </FdsTrinindikatorGroup>
        </div>
      </template>

      <template #controls="{ state }">
        <HstNumber 
          v-model="state.currentStep" 
          title="Current Step" 
          :min="1" 
          :max="state.totalSteps"
        />
        
        <HstNumber 
          v-model="state.totalSteps" 
          title="Total Steps" 
          :min="1" 
          :max="10"
        />
        
        <HstCheckbox v-model="state.clickableSteps" title="Clickable Steps" />
        
        <HstCheckbox v-model="state.showStepInfo" title="Show Step Info" />
        
        <HstText v-model="state.modalTitle" title="Modal Title" />
        
        <HstText v-model="state.ariaLabel" title="ARIA Label" />
        
        <HstText v-model="state.step1Title" title="Step 1 Title" />
        <HstText v-model="state.step1Info" title="Step 1 Info" v-if="state.showStepInfo" />
        <HstCheckbox v-model="state.step1HasError" title="Step 1 Error" />
        
        <HstText v-model="state.step2Title" title="Step 2 Title" />
        <HstText v-model="state.step2Info" title="Step 2 Info" v-if="state.showStepInfo" />
        <HstCheckbox v-model="state.step2HasError" title="Step 2 Error" />
        
        <HstText v-model="state.step3Title" title="Step 3 Title" />
        <HstText v-model="state.step3Info" title="Step 3 Info" v-if="state.showStepInfo" />
        <HstCheckbox v-model="state.step3HasError" title="Step 3 Error" />
        
        <HstText v-model="state.step4Title" title="Step 4 Title" />
        <HstText v-model="state.step4Info" title="Step 4 Info" v-if="state.showStepInfo" />
        <HstCheckbox v-model="state.step4HasError" title="Step 4 Error" />
      </template>
    </Variant>
  </Story>
</template>


<docs lang="md">
# FdsTrinindikatorGroup & FdsTrinindikatorStep

Step indicator components implementing DKFDS v11 specifications for multi-step processes. The group component provides responsive behavior with desktop and mobile views, while individual step components handle different states and interactions.

## Usage

```vue
<template>
  <FdsTrinindikatorGroup
    :current-step="currentStep"
    :total-steps="4"
    :clickable-steps="true"
    aria-label="Application process"
    @step-click="handleStepNavigation"
  >
    <FdsTrinindikatorStep
      v-for="step in steps"
      :key="step.number"
      :step-number="step.number"
      :title="step.title"
      :step-info="step.description"
      :is-current="step.number === currentStep"
      :is-completed="step.number < currentStep"
      :has-error="step.hasValidationError"
      :clickable="step.number <= maxAccessibleStep"
      @click="navigateToStep"
    />
  </FdsTrinindikatorGroup>
</template>

<script setup>
import { FdsTrinindikatorGroup, FdsTrinindikatorStep } from '@madsb/dkfds-vue3'

const currentStep = ref(2)
const steps = [
  { number: 1, title: 'Personoplysninger', description: 'Grundlæggende data' },
  { number: 2, title: 'Dokumenter', description: 'Upload påkrævede filer' },
  { number: 3, title: 'Gennemse', description: 'Kontroller dine oplysninger' },
  { number: 4, title: 'Bekræftelse', description: 'Afslut ansøgningen' }
]

const handleStepNavigation = (stepNumber) => {
  // Handle step navigation logic
  currentStep.value = stepNumber
}
</script>
```

## FdsTrinindikatorGroup Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `id` | `string` | auto-generated | Unique identifier for the step indicator |
| `currentStep` | `number` | `1` | Current active step (1-based) |
| `totalSteps` | `number` | `0` | Total number of steps |
| `ariaLabel` | `string` | `'Trinindikator'` | ARIA label for navigation |
| `responsive` | `boolean` | `true` | Enable responsive behavior |
| `showStepInfo` | `boolean` | `false` | Show additional step information |
| `clickableSteps` | `boolean` | `false` | Enable step click interactions |
| `modalTitle` | `string` | `'Trin'` | Title for mobile modal |
| `closeButtonText` | `string` | `'Luk'` | Close button text for mobile modal |

## FdsTrinindikatorStep Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `stepNumber` | `number` | required | Step number (1-based) |
| `title` | `string` | required | Step title |
| `stepInfo` | `string` | `''` | Additional step information |
| `isCurrent` | `boolean` | `false` | Whether this is the current step |
| `isCompleted` | `boolean` | `false` | Whether this step is completed |
| `hasError` | `boolean` | `false` | Whether the step has an error |
| `disabled` | `boolean` | `false` | Whether the step is disabled |
| `clickable` | `boolean` | `false` | Whether the step is clickable |
| `errorIconLabel` | `string` | `'Fejl'` | ARIA label for error icon |
| `completedIconLabel` | `string` | `'Færdig'` | ARIA label for completed icon |
| `ariaLabel` | `string` | auto-generated | Custom ARIA label for the step |

## Events

### FdsTrinindikatorGroup Events

| Event | Description |
| ----- | ----------- |
| `step-click` | Emitted when a step is clicked (stepNumber: number) |
| `modal-open` | Emitted when mobile modal opens |
| `modal-close` | Emitted when mobile modal closes |

### FdsTrinindikatorStep Events

| Event | Description |
| ----- | ----------- |
| `click` | Emitted when step is clicked (stepNumber: number, event: MouseEvent) |

## Accessibility

- Full keyboard navigation support (Tab, Enter, Space)
- Comprehensive ARIA labeling including step states
- Screen reader announces current step, completion status, and errors
- Mobile modal follows dialog accessibility patterns
- Focus management when navigating between steps
- Error states are clearly announced to assistive technology

## Design Guidelines

- Use step indicators for multi-step processes (3+ steps)
- Always show users their current position and progress
- Make completed steps clickable for easy navigation
- Provide clear error states with descriptive messages
- Use step information sparingly to avoid clutter
- Consider mobile experience with the automatic responsive behavior
- Ensure step titles are concise but descriptive

## Responsive Behavior

- **Desktop (≥768px)**: Full step indicator with all steps visible
- **Mobile (<768px)**: Compact button showing "Step X of Y" that opens modal
- Modal provides full step list with same functionality as desktop
- Automatic responsive behavior requires no additional configuration

## Themes

The trinindikator components automatically adapt to the selected theme:
- **Default**: Standard DKFDS styling with government colors
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
</docs>