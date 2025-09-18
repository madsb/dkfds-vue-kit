# FdsPre

The Pre component displays preformatted text and code blocks following DKFDS v11 specifications. It supports syntax highlighting, automatic JSON formatting, and provides scrollable containers for long content. Perfect for technical documentation, code examples, and structured data display.

## Usage

```vue
<template>
  <!-- Code string -->
  <FdsPre
    header="JavaScript Example"
    code="const hello = 'world';"
  />

  <!-- JSON object -->
  <FdsPre
    header="API Response"
    :json="{ status: 'success', data: userInfo }"
  />

  <!-- Slot content -->
  <FdsPre header="Configuration">
    server:
      host: localhost
      port: 3000
  </FdsPre>
</template>

<script setup>
import { FdsPre } from '@madsb/dkfds-vue3'

const userInfo = { id: 1, name: 'Anders' }
</script>
```

## Props

| Prop     | Type             | Default | Description                                           |
| -------- | ---------------- | ------- | ----------------------------------------------------- |
| `json`   | `object \| null` | -       | JavaScript object to display as formatted JSON       |
| `code`   | `string \| null` | -       | Raw code string to display with monospace formatting |
| `header` | `string`         | -       | Optional header text displayed above the code block  |

## Content Priority

When multiple content sources are provided:
1. `json` prop takes precedence over `code` prop
2. `code` prop takes precedence over slot content
3. Slot content is used when neither `json` nor `code` are provided

## Features

- **Automatic JSON Formatting**: Objects are stringified with proper 2-space indentation
- **Monospace Font**: Uses system monospace fonts for consistent code display
- **Scrollable Content**: Long content scrolls horizontally to prevent layout issues
- **Large Content Warning**: Shows warning for JSON content exceeding 65,535 characters
- **Accessibility**: Proper semantic markup with fieldset and legend structure

## Accessibility

- Uses semantic `<fieldset>` and `<legend>` elements for proper structure
- Monospace font ensures consistent character spacing for code readability
- Scrollable container maintains keyboard navigation within code blocks
- Screen readers properly announce the header context before code content

## Design Guidelines

- **Use for Code**: Display programming code, configuration files, and structured text
- **Use for Data**: Show JSON responses, CSV data, and formatted output
- **Use for Logs**: Display application logs and command line output
- **Provide Context**: Always include descriptive headers for code blocks
- **Consider Length**: Long content automatically scrolls but may need pagination
- **Maintain Formatting**: Preserves exact whitespace and indentation

## Content Types

- **Programming Languages**: JavaScript, Python, HTML, CSS, etc.
- **Data Formats**: JSON, XML, CSV, YAML
- **System Output**: Log files, command line output, error messages
- **Configuration**: Environment files, server configurations

## Themes

The Pre component automatically adapts to the selected theme:
- **Default**: Standard DKFDS styling with light background
- **VirkDK**: Business-oriented styling for Virk.dk
- **BorgerDK**: Citizen-oriented styling for Borger.dk
