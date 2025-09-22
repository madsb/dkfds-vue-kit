<script setup lang="ts">
import { ref } from 'vue'
import { FdsRadioGroup, FdsRadioItem } from '@madsb/dkfds-vue3'

// Demo state
const paymentMethod = ref('card')
const contactMethod = ref('email')
const newsletterFrequency = ref('weekly')
const serviceType = ref('')
const phoneNumber = ref('')
const otherService = ref('')

const handleRadioChange = () => {
  console.log('Radio selection changed')
}
</script>

<template>
  <Story title="Input/Radio" icon="carbon:radio-button">
    <!-- Showcase all radio group variants -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Basic Radio Group</h3>
            <FdsRadioGroup v-model="paymentMethod" label="Payment Method">
              <FdsRadioItem value="card">Credit Card</FdsRadioItem>
              <FdsRadioItem value="bank">Bank Transfer</FdsRadioItem>
              <FdsRadioItem value="cash">Cash</FdsRadioItem>
            </FdsRadioGroup>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">With Help Text</h3>
            <FdsRadioGroup
              v-model="contactMethod"
              label="Contact Method"
              help-text="Choose how we should contact you"
            >
              <FdsRadioItem value="email">Email</FdsRadioItem>
              <FdsRadioItem value="phone">Phone</FdsRadioItem>
              <FdsRadioItem value="mail">Postal Mail</FdsRadioItem>
            </FdsRadioGroup>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">With Disabled Options</h3>
            <FdsRadioGroup v-model="newsletterFrequency" label="Newsletter Frequency">
              <FdsRadioItem value="daily">Daily</FdsRadioItem>
              <FdsRadioItem value="weekly">Weekly</FdsRadioItem>
              <FdsRadioItem value="monthly" disabled>Monthly (Coming Soon)</FdsRadioItem>
              <FdsRadioItem value="never">Never</FdsRadioItem>
            </FdsRadioGroup>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Radio groups follow DKFDS v11 design specifications for single-choice selection. Try
          switching themes using the global theme switcher to see how radio buttons adapt to
          different contexts.
        </p>
      </div>
    </Variant>

    <!-- Conditional content demonstration -->
    <Variant title="With Conditional Content" icon="carbon:chevron-down">
      <div class="container py-6">
        <FdsRadioGroup v-model="serviceType" label="What type of service do you need?">
          <FdsRadioItem value="standard">Standard Service</FdsRadioItem>
          <FdsRadioItem value="priority">Priority Service</FdsRadioItem>
          <FdsRadioItem value="phone-support"
            >Phone Support
            <template #content>
              <div>
                <label for="phone-input" class="form-label">Phone Number</label>
                <input
                  id="phone-input"
                  v-model="phoneNumber"
                  type="tel"
                  class="form-input"
                  placeholder="Enter your phone number"
                />
              </div>
            </template>
          </FdsRadioItem>
          <FdsRadioItem value="other"
            >Other
            <template #content>
              <div>
                <label for="other-input" class="form-label">Please specify</label>
                <textarea
                  id="other-input"
                  v-model="otherService"
                  rows="3"
                  placeholder="Describe the service you need"
                ></textarea>
              </div>
            </template>
          </FdsRadioItem>
        </FdsRadioGroup>
        <p class="mt-4 mb-0">
          Radio items can reveal additional content when selected. This is useful for gathering
          conditional information based on the user's choice.
        </p>
      </div>
    </Variant>

    <!-- States demonstration -->
    <Variant title="States" icon="carbon:status-change">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-lg-4 mb-5">
            <h3 class="h6 mb-2">Normal State</h3>
            <FdsRadioGroup v-model="paymentMethod" label="Payment Options">
              <FdsRadioItem value="card">Credit Card</FdsRadioItem>
              <FdsRadioItem value="debit">Debit Card</FdsRadioItem>
              <FdsRadioItem value="paypal">PayPal</FdsRadioItem>
            </FdsRadioGroup>
          </div>
          <div class="col-12 col-lg-4 mb-5">
            <h3 class="h6 mb-2">With Disabled Options</h3>
            <FdsRadioGroup v-model="contactMethod" label="Notification Method">
              <FdsRadioItem value="email">Email</FdsRadioItem>
              <FdsRadioItem value="sms" disabled>SMS (Unavailable)</FdsRadioItem>
              <FdsRadioItem value="push" disabled>Push Notifications (Unavailable)</FdsRadioItem>
              <FdsRadioItem value="none">No Notifications</FdsRadioItem>
            </FdsRadioGroup>
          </div>
        </div>
        <p class="mt-4 mb-0">
          Radio buttons support various states including normal, selected, and disabled. Disabled
          options prevent selection and show appropriate visual feedback.
        </p>
      </div>
    </Variant>

    <!-- Accessibility demonstration -->
    <Variant title="Accessibility Features" icon="carbon:accessibility">
      <div class="container py-6">
        <FdsRadioGroup
          v-model="serviceType"
          label="Service Priority Level"
          help-text="Select the priority level for your service request. This affects processing time and cost."
        >
          <FdsRadioItem value="low">Low Priority (5-7 business days)</FdsRadioItem>
          <FdsRadioItem value="normal">Normal Priority (2-3 business days)</FdsRadioItem>
          <FdsRadioItem value="high">High Priority (Next business day)</FdsRadioItem>
          <FdsRadioItem value="urgent">Urgent (Same day)</FdsRadioItem>
        </FdsRadioGroup>

        <div>
          <h3 class="h6 mb-2">Keyboard Navigation</h3>
          <ul>
            <li><kbd>Tab</kbd> - Navigate to radio group</li>
            <li><kbd>↑/↓</kbd> or <kbd>←/→</kbd> - Navigate between options</li>
            <li><kbd>Space</kbd> - Select focused option</li>
          </ul>
        </div>
        <p class="mt-4 mb-0">
          Radio groups are fully accessible with ARIA labels, keyboard navigation, and screen reader
          support. The fieldset and legend provide proper grouping semantics.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          selectedValue: 'option2',
          label: 'Choose an option',
          helpText: 'Select one option from the list below',
          showHelpText: true,
          option1Text: 'First Option',
          option2Text: 'Second Option',
          option3Text: 'Third Option',
          option1Disabled: false,
          option2Disabled: false,
          option3Disabled: false,
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <FdsRadioGroup
            v-model="state.selectedValue"
            :label="state.label"
            :help-text="state.showHelpText ? state.helpText : ''"
            @update:model-value="handleRadioChange"
          >
            <FdsRadioItem value="option1" :disabled="state.option1Disabled">
              {{ state.option1Text }}
            </FdsRadioItem>
            <FdsRadioItem value="option2" :disabled="state.option2Disabled">
              {{ state.option2Text }}
            </FdsRadioItem>
            <FdsRadioItem value="option3" :disabled="state.option3Disabled">
              {{ state.option3Text }}
            </FdsRadioItem>
          </FdsRadioGroup>
          <p class="mt-4 mb-0">Selected value: {{ state.selectedValue }}</p>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.label" title="Group Label" />
        <HstText v-model="state.helpText" title="Help Text" />
        <HstCheckbox v-model="state.showHelpText" title="Show Help Text" />

        <div></div>

        <HstSelect
          v-model="state.selectedValue"
          title="Selected Value"
          :options="[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
          ]"
        />

        <div></div>

        <HstText v-model="state.option1Text" title="Option 1 Text" />
        <HstCheckbox v-model="state.option1Disabled" title="Option 1 Disabled" />

        <HstText v-model="state.option2Text" title="Option 2 Text" />
        <HstCheckbox v-model="state.option2Disabled" title="Option 2 Disabled" />

        <HstText v-model="state.option3Text" title="Option 3 Text" />
        <HstCheckbox v-model="state.option3Disabled" title="Option 3 Disabled" />
      </template>
    </Variant>
  </Story>
</template>
