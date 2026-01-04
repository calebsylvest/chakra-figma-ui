# Dark Mode / Light Mode Toggle

Complete guide to using the dark/light mode toggle in your app.

## Components Available

### 1. ColorModeToggle (Icon Button)
Icon-only toggle button - minimal and clean.

```tsx
import { ColorModeToggle } from "@/components/ui/color-mode-toggle";

<ColorModeToggle />
```

**Location:** [components/ui/color-mode-toggle.tsx](../components/ui/color-mode-toggle.tsx)

### 2. ColorModeButton (Text Button)
Button with text label - more explicit.

```tsx
import { ColorModeButton } from "@/components/ui/color-mode-button";

<ColorModeButton />
```

**Location:** [components/ui/color-mode-button.tsx](../components/ui/color-mode-button.tsx)

## How It Works

1. **next-themes**: Manages theme state and localStorage persistence
2. **Chakra UI**: Automatically applies dark mode color variants
3. **Provider**: Wraps the app in [components/ui/color-mode.tsx](../components/ui/color-mode.tsx)

## Usage in Components

All Chakra color values automatically adapt to the active theme:

```tsx
// Light mode: light gray background
// Dark mode: dark gray background (automatic)
<Box bg="gray.50">
  <Text color="gray.600">Adapts to theme</Text>
</Box>
```

## Theme Persistence

Theme preference is automatically saved to localStorage and persists across:
- Page reloads
- Browser sessions
- Different pages in your app

## System Preference

The theme system respects the user's system preference by default (via `next-themes`).

## Customizing Dark Mode Colors

Chakra UI automatically generates dark mode variants, but you can customize them:

```typescript
// In theme/tokens.ts or theme/index.ts
export const system = createSystem(defaultConfig, {
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: { value: { _light: "white", _dark: "gray.900" } },
          subtle: { value: { _light: "gray.50", _dark: "gray.800" } },
        },
      },
    },
  },
});
```

## Testing Dark Mode

Visit these pages to see dark mode in action:

- **Home**: http://localhost:3000
- **Demo Page**: http://localhost:3000/theme-toggle-demo
- **Token Demo**: http://localhost:3000/token-demo

## Adding to Navigation

Typical placement in a header/navbar:

```tsx
import { ColorModeToggle } from "@/components/ui/color-mode-toggle";

export function Header() {
  return (
    <Box as="header" p={4}>
      <HStack justify="space-between">
        <Heading>My App</Heading>
        <ColorModeToggle />
      </HStack>
    </Box>
  );
}
```

## Icons

Using `react-icons` (Lucide icons):
- **Light mode**: Moon icon (`LuMoon`)
- **Dark mode**: Sun icon (`LuSun`)

To use different icons, modify the component and import from `react-icons`.

## Hydration

Both components handle hydration properly using:
- `useState` and `useEffect` to avoid SSR mismatch
- Placeholder rendering during initial mount
- `suppressHydrationWarning` on the `<html>` tag

## Programmatic Theme Control

Access theme programmatically using `useTheme`:

```tsx
"use client";

import { useTheme } from "next-themes";

export function MyComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme("dark")}>
      Go Dark
    </button>
  );
}
```

## Available Themes

By default, two themes are available:
- `"light"`
- `"dark"`

You can add more themes if needed by configuring `next-themes`.

## Best Practices

1. **Use semantic colors**: Prefer `gray.50` over hardcoded colors
2. **Test both modes**: Always check components in light AND dark mode
3. **Avoid absolute colors**: Don't use `bg="#fff"` - use token-based colors
4. **Check contrast**: Ensure text is readable in both modes

## Common Patterns

### Cards that adapt
```tsx
<Card.Root>
  <Card.Body>
    Content automatically adapts
  </Card.Body>
</Card.Root>
```

### Conditional styling
```tsx
<Box
  bg={{ _light: "white", _dark: "gray.800" }}
  color={{ _light: "black", _dark: "white" }}
>
  Custom theme-specific styling
</Box>
```

### Using color mode in logic
```tsx
"use client";

import { useTheme } from "next-themes";

export function MyComponent() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return <div>{isDark ? "Dark mode content" : "Light mode content"}</div>;
}
```
