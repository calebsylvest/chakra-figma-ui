# Customizing Design Tokens

This guide shows you how to customize Chakra UI design tokens for your project.

## Token Structure

All tokens follow this format:

```typescript
{
  tokenName: { value: "your-value" }
}
```

## Available Token Categories

### Colors
```typescript
colors: {
  brand: {
    500: { value: "#1890ff" },
  },
  customColor: { value: "#abc123" },
}
```

**Usage:**
```tsx
<Box bg="brand.500" />
<Text color="customColor" />
<Badge colorPalette="brand" />
```

### Fonts
```typescript
fonts: {
  heading: { value: "Inter, sans-serif" },
  body: { value: "Inter, sans-serif" },
  mono: { value: "Fira Code, monospace" },
}
```

**Usage:**
```tsx
<Heading fontFamily="heading" />
<Text fontFamily="body" />
```

### Font Sizes
```typescript
fontSizes: {
  xs: { value: "0.75rem" },
  sm: { value: "0.875rem" },
  md: { value: "1rem" },
  // ... etc
}
```

**Usage:**
```tsx
<Text fontSize="md" />
```

### Spacing
```typescript
spacing: {
  1: { value: "0.25rem" },
  128: { value: "32rem" },
}
```

**Usage:**
```tsx
<Box p={4} m={2} gap={6} />
```

### Border Radius
```typescript
radii: {
  sm: { value: "0.25rem" },
  md: { value: "0.5rem" },
  lg: { value: "1rem" },
  full: { value: "9999px" },
}
```

**Usage:**
```tsx
<Box borderRadius="lg" />
```

### Shadows
```typescript
shadows: {
  sm: { value: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
  md: { value: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" },
  brand: { value: "0 4px 14px 0 rgba(24, 144, 255, 0.39)" },
}
```

**Usage:**
```tsx
<Box boxShadow="brand" />
```

### Font Weights
```typescript
fontWeights: {
  normal: { value: "400" },
  medium: { value: "500" },
  semibold: { value: "600" },
  bold: { value: "700" },
}
```

**Usage:**
```tsx
<Text fontWeight="semibold" />
```

## How to Override Default Tokens

To change a default token value, simply redefine it in `theme/tokens.ts`:

```typescript
export const tokens = {
  colors: {
    // Override default gray
    gray: {
      500: { value: "#custom-gray-color" },
    },
  },

  radii: {
    // Make all border radius more rounded
    md: { value: "1rem" }, // default is 0.375rem
  },
};
```

## How to Add New Tokens

Add completely new tokens by defining them in the appropriate category:

```typescript
export const tokens = {
  colors: {
    // New color palette
    accent: {
      50: { value: "#fff0f0" },
      500: { value: "#ff5050" },
      900: { value: "#5c0000" },
    },
  },

  spacing: {
    // New spacing values
    128: { value: "32rem" },
  },
};
```

## Token Value Formats

### Colors
- Hex: `"#1890ff"`
- RGB: `"rgb(24, 144, 255)"`
- RGBA: `"rgba(24, 144, 255, 0.5)"`
- HSL: `"hsl(207, 100%, 55%)"`

### Sizes/Spacing
- Rem: `"1rem"`
- Pixels: `"16px"`
- Em: `"1.5em"`
- Percent: `"50%"`

### Fonts
- Font families: `"Inter, sans-serif"`
- Multiple fallbacks: `"'SF Pro Display', -apple-system, sans-serif"`

## Example: Complete Custom Theme

```typescript
export const tokens = {
  colors: {
    brand: {
      50: { value: "#e6f7ff" },
      500: { value: "#1890ff" }, // Primary
      900: { value: "#002766" },
    },
    success: { value: "#52c41a" },
    warning: { value: "#faad14" },
    danger: { value: "#ff4d4f" },
  },

  fonts: {
    heading: { value: "Montserrat, sans-serif" },
    body: { value: "Open Sans, sans-serif" },
    mono: { value: "Fira Code, monospace" },
  },

  fontSizes: {
    hero: { value: "4rem" },
  },

  spacing: {
    content: { value: "1200px" },
  },

  radii: {
    card: { value: "1rem" },
    button: { value: "0.5rem" },
  },

  shadows: {
    card: { value: "0 10px 40px rgba(0,0,0,0.1)" },
  },
};
```

**Usage:**
```tsx
<Box
  maxW="content"
  p={8}
  bg="brand.500"
  color="white"
  borderRadius="card"
  boxShadow="card"
>
  <Heading fontSize="hero" fontFamily="heading">
    Welcome
  </Heading>
  <Text fontFamily="body" color="success">
    Custom themed content
  </Text>
</Box>
```

## Tips

1. **Use semantic naming**: Name tokens by their purpose, not appearance
   - ✅ `primary`, `secondary`, `brand`
   - ❌ `blue`, `lightBlue`

2. **Create color scales**: Use 50-950 scales for flexibility
   ```typescript
   brand: {
     50: { value: "#lightest" },
     500: { value: "#base" },
     950: { value: "#darkest" },
   }
   ```

3. **Reference default tokens**: Check `theme/default-tokens-readable.json` to see what's available

4. **Test in browser**: Visit `/token-demo` to see your tokens in action

5. **Use the theme explorer**: Visit `/theme-explorer` to browse all tokens

## Extracting from Figma

Use the Figma MCP server to automatically extract design tokens:

```bash
# In Claude Code, use Figma MCP to:
# 1. Query your Figma file for colors, typography, spacing
# 2. Convert Figma variables to token format
# 3. Update theme/tokens.ts with extracted values
```

This ensures your code stays in sync with your designs!
