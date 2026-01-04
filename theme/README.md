# Chakra UI Theme Reference

This directory contains theme configuration and token reference files.

## Files

### `index.ts`
Main theme configuration. Exports both the custom `system` and the `defaultSystem` for reference.

### `tokens.ts`
Custom design tokens for this project. Extend this file with tokens from your Figma design.

### `default-tokens.json`
Complete dump of Chakra UI's default token system (technical format).

### `default-tokens-readable.json`
Readable format of default tokens organized by category:
- **colors**: All color tokens including semantic colors
- **spacing**: Spacing scale (0-96)
- **fontSizes**: Typography size scale
- **fontWeights**: Font weight values
- **fonts**: Font family definitions
- **lineHeights**: Line height scale
- **letterSpacings**: Letter spacing values
- **radii**: Border radius values
- **shadows**: Box shadow definitions
- **borders**: Border definitions
- **sizes**: Size scale values
- **zIndex**: Z-index scale
- **durations**: Animation duration values
- **easings**: Animation easing functions
- **animations**: Animation definitions
- **blurs**: Blur effect values
- **breakpoints**: Responsive breakpoints

## Usage

### Referencing Default Tokens in Custom Theme

```typescript
import { defaultSystem } from "@/theme";

// Access default tokens
const defaultColors = defaultSystem.tokens.colors;
const defaultSpacing = defaultSystem.tokens.spacing;
```

### Extending Tokens

```typescript
// In tokens.ts
export const tokens = {
  colors: {
    brand: {
      primary: "#your-color",
      secondary: "#another-color",
    }
  },
  // Add more custom tokens
};
```

### Viewing Tokens in Browser

Visit `/theme-explorer` route to see all default tokens in a visual format.

## Syncing with Figma

Use the Figma MCP server to extract design tokens from your Figma file and update `tokens.ts` accordingly.

```bash
# Example workflow:
# 1. Use Figma MCP to get colors from Figma
# 2. Update tokens.ts with extracted values
# 3. Tokens automatically apply via the theme system
```

## Reference

See [default-tokens-readable.json](default-tokens-readable.json) for the complete list of available default tokens.
