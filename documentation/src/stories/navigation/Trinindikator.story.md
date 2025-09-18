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
