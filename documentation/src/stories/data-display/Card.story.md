# FdsCard & FdsCardGroup

Card and card group components for displaying content in organized, clickable containers following DKFDS v11 specifications. Cards support both static content display and navigation functionality with intelligent link handling.

## Usage

### Basic Card
```vue
<template>
  <FdsCard
    header="Card Title"
    subheader="Category"
  >
    This is the main content of the card.
  </FdsCard>
</template>

<script setup>
import { FdsCard } from '@madsb/dkfds-vue3'
</script>
```

### Navigation Card
```vue
<template>
  <FdsCard
    header="Article Title"
    subheader="News"
    :to="{ name: 'article', params: { id: 123 } }"
  >
    Click this entire card to navigate to the article.
  </FdsCard>
</template>
```

### Card with Image and Actions
```vue
<template>
  <FdsCard
    header="Product Name"
    subheader="Category"
  >
    <template #image>
      <img src="/product-image.jpg" alt="Product preview" />
    </template>
    Product description and details.
    <template #actions>
      <FdsButton variant="primary">Buy Now</FdsButton>
      <FdsButton variant="secondary">Learn More</FdsButton>
    </template>
  </FdsCard>
</template>
```

### Card Groups
```vue
<template>
  <!-- Default responsive grid -->
  <FdsCardGroup>
    <FdsCard header="Card 1">Content</FdsCard>
    <FdsCard header="Card 2">Content</FdsCard>
    <FdsCard header="Card 3">Content</FdsCard>
  </FdsCardGroup>

  <!-- Equal height cards -->
  <FdsCardGroup type="deck">
    <FdsCard header="Short">Brief content</FdsCard>
    <FdsCard header="Long">Much longer content...</FdsCard>
  </FdsCardGroup>

  <!-- Masonry layout -->
  <FdsCardGroup type="columns">
    <FdsCard header="News 1">Content</FdsCard>
    <FdsCard header="News 2">Content</FdsCard>
  </FdsCardGroup>
</template>
```

## FdsCard Props

| Prop        | Type                               | Default | Description                                    |
| ----------- | ---------------------------------- | ------- | ---------------------------------------------- |
| `header`    | `string`                          | -       | Main heading text for the card                |
| `headerTag` | `'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h2'`  | HTML heading tag level for semantic structure |
| `subheader` | `string`                          | -       | Secondary text displayed above main header    |
| `to`        | `string \| Record<string, any>`    | -       | Navigation destination (URL or router object) |
| `external`  | `boolean`                         | `false` | Force external link behavior                   |
| `icon`      | `string`                          | -       | Icon for navigation cards                      |
| `variant`   | `'long'`                          | -       | Visual variant affecting layout                |

## FdsCardGroup Props

| Prop   | Type                             | Default | Description                           |
| ------ | -------------------------------- | ------- | ------------------------------------- |
| `type` | `'deck' \| 'columns' \| null`     | `null`  | Layout type for card arrangement      |

## Card Slots

| Slot      | Description                                    |
| --------- | ---------------------------------------------- |
| `image`   | Visual content displayed at the top of card   |
| `header`  | Custom header content (overrides header prop) |
| `content` | Named slot for main content                   |
| `default` | Default slot for main content                 |
| `actions` | Footer area for buttons and actions           |

## Events

| Event   | Description                              |
| ------- | ---------------------------------------- |
| `click` | Emitted when navigation card is clicked  |

## Accessibility

- Cards use semantic HTML (`<section>` for content, `<a>` or `<router-link>` for navigation)
- Header tags maintain proper document hierarchy
- Navigation cards are fully keyboard accessible
- Images should include appropriate alt text
- Action buttons maintain focus order and keyboard navigation

## Design Guidelines

### When to Use Cards
- Displaying related information as a cohesive unit
- Creating navigational elements to other pages or sections
- Organizing content in dashboard or listing interfaces
- Presenting products, articles, or services

### Card Groups
- **Default**: Responsive grid that adapts to viewport
- **Deck**: Use when cards should have equal heights
- **Columns**: Use for content feeds or masonry-style layouts

### Navigation Cards
- Entire card becomes clickable when `to` prop is provided
- Automatically detects internal vs external links
- Shows appropriate icons (arrow-forward for internal, open-in-new for external)
- Supports both string URLs and Vue Router location objects

### Content Organization
- Use `subheader` for categories, dates, or tags
- Place primary actions in the `actions` slot
- Use appropriate header tag levels for document hierarchy
- Keep content concise and scannable

## Themes

The card components automatically adapt to the selected theme:
- **Default**: Standard DKFDS styling with neutral colors
- **VirkDK**: Business-oriented styling for Virk.dk with professional appearance
- **BorgerDK**: Citizen-oriented styling for Borger.dk with accessible design
