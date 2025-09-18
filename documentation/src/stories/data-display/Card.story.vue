<script setup lang="ts">
import { ref } from 'vue'
import { FdsCard, FdsCardGroup, FdsButton } from '@madsb/dkfds-vue3'

// Demo state
const clickCount = ref(0)
const handleCardClick = () => {
  clickCount.value++
}
</script>

<template>
  <Story title="Data Display/Card" icon="carbon:data-view">
    <!-- Showcase all card variants in one view -->
    <Variant title="Showcase" icon="carbon:grid">
      <div class="container py-6">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Basic Card</h3>
            <FdsCard
              header="Card Title"
              subheader="Category"
            >
              This is a basic card with header, subheader, and content.
            </FdsCard>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Navigation Card</h3>
            <FdsCard
              header="Article Title"
              subheader="News"
              to="#article-link"
            >
              Click this card to navigate to an article.
            </FdsCard>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Card with Image</h3>
            <FdsCard
              header="Visual Content"
              subheader="Media"
            >
              <template #image>
                <div style="width: 100%; height: 120px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600;">
                  Image Placeholder
                </div>
              </template>
              Card with visual content and image slot.
            </FdsCard>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mb-5">
            <h3 class="h5 mb-2">Card with Actions</h3>
            <FdsCard
              header="Interactive Card"
              subheader="Actions"
            >
              This card includes action buttons in the footer.
              <template #actions>
                <FdsButton variant="primary" @click="handleCardClick">Primary Action</FdsButton>
                <FdsButton variant="secondary">Secondary</FdsButton>
              </template>
            </FdsCard>
          </div>
        </div>
        <p class="mt-4 mb-0">
          The card component follows DKFDS v11 design specifications. Try switching themes using
          the global theme switcher to see how cards adapt to different contexts.
        </p>
      </div>
    </Variant>

    <!-- Card group layouts -->
    <Variant title="Card Groups" icon="carbon:grid">
      <div class="container py-6">
        <h3 class="h6 mb-2">Default Layout</h3>
        <FdsCardGroup>
          <FdsCard header="Service 1" subheader="Category" to="#service-1">
            Description of the first service with clickable navigation.
          </FdsCard>
          <FdsCard header="Service 2" subheader="Category" to="#service-2">
            Description of the second service.
          </FdsCard>
          <FdsCard header="Service 3" subheader="Category" to="#service-3">
            Description of the third service with longer content that demonstrates how cards handle varying content lengths.
          </FdsCard>
        </FdsCardGroup>

        <hr class="my-6" />

        <h3 class="h6 mb-2">Deck Layout (Equal Heights)</h3>
        <FdsCardGroup type="deck">
          <FdsCard header="Short Content" subheader="Brief">
            Brief description.
          </FdsCard>
          <FdsCard header="Medium Content" subheader="Moderate">
            This card has a moderate amount of content that extends to multiple lines for demonstration.
          </FdsCard>
          <FdsCard header="Long Content" subheader="Extended">
            This card contains much more content that spans several lines and demonstrates how the deck layout ensures all cards maintain equal heights regardless of content length.
          </FdsCard>
        </FdsCardGroup>

        <hr class="my-6" />

        <h3 class="h6 mb-2">Columns Layout (Masonry)</h3>
        <FdsCardGroup type="columns">
          <FdsCard header="News Article" subheader="Today">
            Latest news content with natural height.
          </FdsCard>
          <FdsCard header="Quick Update" subheader="2 hours ago">
            Brief update.
          </FdsCard>
          <FdsCard header="Feature Story" subheader="Yesterday">
            Longer feature story with detailed content that spans multiple lines and demonstrates masonry-style layout.
          </FdsCard>
          <FdsCard header="Breaking News" subheader="1 hour ago">
            Important breaking news announcement.
          </FdsCard>
        </FdsCardGroup>

        <p class="mt-4 mb-0">
          Card groups provide responsive layouts. Resize the viewport to see how cards adapt.
          Click count: {{ clickCount }}
        </p>
      </div>
    </Variant>

    <!-- External and navigation cards -->
    <Variant title="Navigation & Links" icon="carbon:arrow-forward">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Internal Navigation</h3>
          <FdsCardGroup>
            <FdsCard
              header="Dashboard"
              subheader="Overview"
              to="#dashboard"
              icon="arrow-forward"
            >
              View your dashboard with latest statistics and information.
            </FdsCard>
            <FdsCard
              header="Settings"
              subheader="Configuration"
              to="#settings"
            >
              Manage your account settings and preferences.
            </FdsCard>
          </FdsCardGroup>

          <hr class="my-6" />

          <h3 class="h6 mb-2">External Links</h3>
          <FdsCardGroup>
            <FdsCard
              header="DKFDS Documentation"
              subheader="External Resource"
              to="https://designsystem.dk"
              icon="open-in-new"
            >
              Visit the official Danish Design System documentation.
            </FdsCard>
            <FdsCard
              header="GitHub Repository"
              subheader="Source Code"
              to="https://github.com/example/repo"
            >
              View the source code and contribute to the project.
            </FdsCard>
          </FdsCardGroup>

          <hr class="my-6" />

          <h3 class="h6 mb-2">Long Variant</h3>
          <FdsCard
            variant="long"
            header="Detailed Information Card"
            subheader="Documentation"
            header-tag="h3"
          >
            <template #image>
              <div style="width: 100%; height: 200px; background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 1.8rem;">
                Hero Image
              </div>
            </template>
            The long variant provides an extended layout perfect for detailed content, featured articles, or prominent information that needs more visual space and attention. This variant works well for hero sections and detailed explanations.
            <template #actions>
              <FdsButton variant="primary">Read More</FdsButton>
              <FdsButton variant="tertiary">Share</FdsButton>
            </template>
          </FdsCard>
        </div>
        <p class="mt-4 mb-0">
          Navigation cards automatically detect internal vs external links and show appropriate icons.
        </p>
      </div>
    </Variant>

    <!-- Card states and variations -->
    <Variant title="Content Variations" icon="carbon:document">
      <div class="container py-6">
        <div>
          <h3 class="h6 mb-2">Different Content Types</h3>
          <FdsCardGroup type="deck">
            <FdsCard header="Image Card">
              <template #image>
                <div style="width: 100%; height: 150px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600;">
                  Visual Content
                </div>
              </template>
              Card featuring visual content with image slot.
            </FdsCard>

            <FdsCard header="Text Only" subheader="Simple">
              This card contains only text content without any additional visual elements or actions.
            </FdsCard>

            <FdsCard header="Rich Content" subheader="Interactive">
              <p style="margin-bottom: 1.2rem;">This card demonstrates rich content with multiple elements.</p>
              <ul style="margin-bottom: 1.2rem; padding-left: 2rem;">
                <li>Feature one</li>
                <li>Feature two</li>
                <li>Feature three</li>
              </ul>
              <template #actions>
                <FdsButton variant="primary">Learn More</FdsButton>
              </template>
            </FdsCard>
          </FdsCardGroup>

          <hr class="my-6" />

          <h3 class="h6 mb-2">Header Hierarchy</h3>
          <FdsCardGroup>
            <FdsCard header="H2 Header" header-tag="h2" subheader="Default">
              Default semantic heading level (h2) for main content sections.
            </FdsCard>
            <FdsCard header="H3 Header" header-tag="h3" subheader="Subsection">
              H3 heading for subsection content within a page.
            </FdsCard>
            <FdsCard header="H4 Header" header-tag="h4" subheader="Detail">
              H4 heading for detailed subsections or nested content.
            </FdsCard>
          </FdsCardGroup>
        </div>
        <p class="mt-4 mb-0">
          Choose appropriate heading levels for semantic document structure and accessibility.
        </p>
      </div>
    </Variant>

    <!-- Interactive playground -->
    <Variant
      title="Playground"
      icon="carbon:game-console"
      :init-state="
        () => ({
          header: 'Card Title',
          subheader: 'Category',
          content: 'This is the card content that can be customized.',
          variant: null,
          headerTag: 'h2',
          to: '',
          icon: '',
          external: false,
          showImage: false,
          showActions: false,
        })
      "
    >
      <template #default="{ state }">
        <div class="container py-6 d-flex flex-column align-items-center justify-content-center">
          <FdsCard
            :header="state.header"
            :subheader="state.subheader"
            :variant="state.variant || undefined"
            :header-tag="state.headerTag"
            :to="state.to || undefined"
            :icon="state.icon || undefined"
            :external="state.external"
          >
            <template v-if="state.showImage" #image>
              <div style="width: 100%; height: 120px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600;">
                Demo Image
              </div>
            </template>
            {{ state.content }}
            <template v-if="state.showActions" #actions>
              <FdsButton variant="primary" @click="handleCardClick">Action</FdsButton>
            </template>
          </FdsCard>
          <p class="mt-4 mb-0">Click count: {{ clickCount }}</p>
        </div>
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.header" title="Header Text" />
        <HstText v-model="state.subheader" title="Subheader Text" />
        <HstTextarea v-model="state.content" title="Content" />

        <HstSelect
          v-model="state.variant"
          title="Variant"
          :options="[
            { value: null, label: 'Default' },
            { value: 'long', label: 'Long' },
          ]"
        />

        <HstSelect
          v-model="state.headerTag"
          title="Header Tag"
          :options="[
            { value: 'h2', label: 'H2' },
            { value: 'h3', label: 'H3' },
            { value: 'h4', label: 'H4' },
            { value: 'h5', label: 'H5' },
            { value: 'h6', label: 'H6' },
          ]"
        />

        <HstText v-model="state.to" title="Navigation Link (to)" />
        <HstText v-model="state.icon" title="Icon Name" />
        <HstCheckbox v-model="state.external" title="External Link" />
        <HstCheckbox v-model="state.showImage" title="Show Image" />
        <HstCheckbox v-model="state.showActions" title="Show Actions" />
      </template>
    </Variant>
  </Story>
</template>
