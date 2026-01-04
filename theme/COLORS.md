# Color Palette Reference

All Chakra UI color palettes are now available in your theme with complete 50-950 scales.

## Available Color Palettes

### Base Colors
- `transparent` - Transparent
- `current` - Current color
- `black` - #09090B
- `white` - #FFFFFF

### Alpha Colors (for overlays)
- `whiteAlpha.50` through `whiteAlpha.950` - White with varying opacity (4% to 95%)
- `blackAlpha.50` through `blackAlpha.950` - Black with varying opacity (4% to 95%)

### Color Scales (50-950)

Each color below has 11 shades from 50 (lightest) to 950 (darkest):

- **Gray** - Neutral grays (#fafafa to #111111)
- **Red** - Error, danger states (#fef2f2 to #1f0808)
- **Orange** - Warnings, highlights (#fff7ed to #220a04)
- **Yellow** - Caution, alerts (#fefce8 to #281304)
- **Green** - Success, positive (#f0fdf4 to #03190c)
- **Teal** - Accent, calm (#f0fdfa to #021716)
- **Blue** - Primary, info (#eff6ff to #0c142e)
- **Cyan** - Accent, links (#ecfeff to #051b24)
- **Purple** - Premium, creative (#faf5ff to #1a032e)
- **Pink** - Playful, feminine (#fdf2f8 to #2c0514)
- **Brand** - Custom brand color (#e6f7ff to #001529) ⭐

## Usage Examples

### Direct color values
```tsx
<Box bg="red.500" color="white">Error</Box>
<Text color="green.600">Success</Text>
<Badge bg="yellow.100" color="yellow.800">Warning</Badge>
```

### Using colorPalette prop
```tsx
<Button colorPalette="blue">Primary Button</Button>
<Badge colorPalette="green">Success Badge</Badge>
<Alert colorPalette="red">Error Alert</Alert>
```

### Overlays and transparency
```tsx
<Box bg="blackAlpha.600">Dark overlay</Box>
<Box bg="whiteAlpha.800">Light overlay</Box>
```

## Recommended Usage

### 500 Shade
The `500` shade is typically the "base" color of each palette and works well for:
- Primary buttons
- Links
- Icons
- Accent colors

### Lighter Shades (50-300)
Use for:
- Backgrounds
- Hover states
- Subtle accents
- Light mode surfaces

### Darker Shades (700-950)
Use for:
- Text on light backgrounds
- Dark mode surfaces
- Strong emphasis
- Borders

## Semantic Color Mapping

Consider mapping semantic meanings to colors:

```typescript
// In your components or theme
const semanticColors = {
  error: "red.500",
  warning: "yellow.500",
  success: "green.500",
  info: "blue.500",
  primary: "brand.500",
  secondary: "gray.500",
};
```

## Visual Reference

Visit **http://localhost:3000/token-demo** to see all colors displayed visually with their shade values.

## Customizing Colors

To override any color, edit [theme/tokens.ts](theme/tokens.ts):

```typescript
export const tokens = {
  colors: {
    // Override existing color
    blue: {
      500: { value: "#your-custom-blue" },
    },

    // Or add new color palette
    accent: {
      50: { value: "#lightest" },
      500: { value: "#base" },
      950: { value: "#darkest" },
    },
  },
};
```

## Extracting from Figma

Use Figma MCP to extract colors from your Figma design file and replace these values to match your brand exactly.
