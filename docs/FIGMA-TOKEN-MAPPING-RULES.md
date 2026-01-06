# Figma to Code Token Mapping Rules

**Purpose:** Define transformation rules for converting Figma variable names to Chakra UI code token names.

**Problem:** Figma variables cannot use dots (`.`) in names, so they use slashes (`/`) and underscores (`_`). Chakra UI uses dot notation for token hierarchy.

---

## Transformation Rules

### Rule 1: Namespace Mapping

Map Figma namespaces to Chakra namespaces:

| Figma Namespace | Chakra Namespace | Example |
|-----------------|------------------|---------|
| `text/*` | `fg.*` | `text/fg` → `fg` |
| `bg/*` | `bg.*` | `bg/default` → `bg` |
| `border/*` | `border.*` | `border/error` → `border.error` |
| `{color}/*` | `{color}.*` | `gray/500` → `gray.500` |

### Rule 2: Slash to Dot Conversion

Replace forward slashes (`/`) with dots (`.`):

```
gray/500     → gray.500
red/fg       → red.fg
border/error → border.error
```

### Rule 3: Underscore Handling

Underscores (`_`) in token names are converted during slash-to-dot transformation:

```
text/fg_muted    → fg.muted
text/fg_subtle   → fg.subtle
bg/emphasized    → bg.emphasized
```

The underscore serves as a word separator in Figma but becomes part of the final segment name in code.

### Rule 4: Default Token Naming

Tokens ending in `/default` or matching their namespace become `.DEFAULT` in code, or can be the base name:

```
bg/default     → bg.DEFAULT  (or just `bg` with value)
border/default → border.DEFAULT (or just `border`)
```

For Chakra, we use the base name without `.DEFAULT` suffix for the default variant.

---

## Complete Mapping Examples

### Base Color Palettes

```
Figma          → Chakra Code
-----------------------------------
gray/50        → gray.50
gray/500       → gray.500
gray/950       → gray.950

red/100        → red.100
blue/600       → blue.600
green/300      → green.300
```

### Semantic Tokens - Background

```
Figma          → Chakra Code
-----------------------------------
bg/default     → bg (or bg.DEFAULT)
bg/subtle      → bg.subtle
bg/muted       → bg.muted
bg/emphasized  → bg.emphasized
bg/inverted    → bg.inverted
bg/panel       → bg.panel
bg/error       → bg.error
bg/warning     → bg.warning
bg/success     → bg.success
bg/info        → bg.info
```

### Semantic Tokens - Text/Foreground

```
Figma              → Chakra Code
-----------------------------------
text/fg            → fg (or fg.DEFAULT)
text/fg_muted      → fg.muted
text/fg_subtle     → fg.subtle
text/fg_inverted   → fg.inverted
text/fg_error      → fg.error
text/fg_warning    → fg.warning
text/fg_success    → fg.success
text/fg_info       → fg.info
```

**Note:** `text/` namespace is renamed to `fg` (foreground) in Chakra.

### Semantic Tokens - Border

```
Figma              → Chakra Code
-----------------------------------
border/default     → border (or border.DEFAULT)
border/subtle      → border.subtle
border/muted       → border.muted
border/emphasized  → border.emphasized
border/inverted    → border.inverted
border/error       → border.error
border/warning     → border.warning
border/success     → border.success
border/info        → border.info
```

### Color Palette Semantic Tokens

```
Figma              → Chakra Code
-----------------------------------
gray/contrast      → gray.contrast
gray/fg            → gray.fg
gray/subtle        → gray.subtle
gray/muted         → gray.muted
gray/emphasized    → gray.emphasized
gray/solid         → gray.solid
gray/focusRing     → gray.focusRing

red/fg             → red.fg
red/subtle         → red.subtle
red/solid          → red.solid
... (same pattern for all color palettes)
```

---

## Transformation Algorithm

### Pseudocode

```typescript
function transformFigmaTokenName(figmaToken: string): string {
  // Split by forward slash
  const parts = figmaToken.split('/');

  // Handle namespace transformation
  if (parts[0] === 'text') {
    parts[0] = 'fg'; // Rename text namespace to fg
  }

  // Join with dots
  let chakraToken = parts.join('.');

  // Handle default case
  if (chakraToken.endsWith('.default')) {
    // Remove .default suffix for base token
    chakraToken = chakraToken.replace('.default', '');
  }

  // Handle underscore in final segment
  // (underscores remain as part of the segment name)

  return chakraToken;
}

// Examples:
transformFigmaTokenName('text/fg')          // 'fg'
transformFigmaTokenName('text/fg_muted')    // 'fg.muted'
transformFigmaTokenName('bg/default')       // 'bg'
transformFigmaTokenName('border/error')     // 'border.error'
transformFigmaTokenName('gray/500')         // 'gray.500'
transformFigmaTokenName('red/focusRing')    // 'red.focusRing'
```

### Implementation Function

```typescript
/**
 * Transform Figma variable name to Chakra token path
 */
export function figmaToChakra(figmaVar: string): string {
  const parts = figmaVar.split('/');

  // Special namespace mappings
  const namespaceMap: Record<string, string> = {
    'text': 'fg',
  };

  // Apply namespace transformation
  if (parts[0] in namespaceMap) {
    parts[0] = namespaceMap[parts[0]];
  }

  // Join with dots
  let result = parts.join('.');

  // Remove .default suffix (use base token name instead)
  if (result.endsWith('.default')) {
    result = result.replace('.default', '');
  }

  return result;
}

/**
 * Transform Chakra token path back to Figma variable name
 */
export function chakraToFigma(chakraToken: string): string {
  const parts = chakraToken.split('.');

  // Reverse namespace mappings
  const reverseMap: Record<string, string> = {
    'fg': 'text',
  };

  // Apply reverse namespace transformation
  if (parts[0] in reverseMap) {
    parts[0] = reverseMap[parts[0]];
  }

  // Handle default case
  if (parts.length === 1 && ['bg', 'fg', 'border'].includes(parts[0])) {
    parts.push('default');
  }

  // Join with slashes (underscores stay as-is in the segment)
  return parts.join('/');
}
```

---

## Semantic Token Structure

### Light Mode Mapping

For semantic tokens, we also need to map Figma's separate light/dark definitions to Chakra's conditional format:

```typescript
// Figma provides separate variables:
// - From "Light Mode Semantic Tokens" frame
// - From "Dark Mode Semantic Tokens" frame

// Chakra format:
{
  "bg": {
    "value": {
      "_light": "#ffffff",  // from Figma light frame
      "_dark": "#000000"    // from Figma dark frame
    }
  }
}
```

### Transformation Strategy

1. Extract tokens from Light Mode frame → Light values
2. Extract tokens from Dark Mode frame → Dark values
3. Match tokens by name (after transformation)
4. Combine into Chakra's `{ _light, _dark }` format

---

## MCP Response Handling

### Expected MCP Response Format

When calling `get_variable_defs` on Figma frames, we receive:

```json
{
  "text/fg": "#000000",
  "text/fg_muted": "#52525b",
  "bg/default": "#ffffff",
  "gray/500": "#71717a"
}
```

### Transformation Pipeline

```typescript
function transformMCPResponse(
  figmaTokens: Record<string, string>,
  mode: 'light' | 'dark'
): Record<string, any> {
  const chakraTokens: Record<string, any> = {};

  for (const [figmaName, value] of Object.entries(figmaTokens)) {
    const chakraPath = figmaToChakra(figmaName);
    const parts = chakraPath.split('.');

    // Build nested structure
    let current = chakraTokens;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!current[parts[i]]) {
        current[parts[i]] = {};
      }
      current = current[parts[i]];
    }

    const finalKey = parts[parts.length - 1];

    // Store value
    if (mode) {
      // Semantic token with mode
      if (!current[finalKey]) {
        current[finalKey] = { value: {} };
      }
      current[finalKey].value[`_${mode}`] = value;
    } else {
      // Base token
      current[finalKey] = { value };
    }
  }

  return chakraTokens;
}
```

---

## Usage in Sync Workflow

### Step 1: Extract from Figma

```typescript
// Get variables from three Figma frames
const globalColors = await figmaMCP.getVariableDefs('12:185');
const lightSemantics = await figmaMCP.getVariableDefs('12:961');
const darkSemantics = await figmaMCP.getVariableDefs('31:1290');
```

### Step 2: Transform

```typescript
// Transform base colors
const baseColors = transformMCPResponse(globalColors);

// Transform semantic tokens (merge light + dark)
const lightTokens = transformMCPResponse(lightSemantics, 'light');
const darkTokens = transformMCPResponse(darkSemantics, 'dark');
const semanticTokens = mergeSemanticTokens(lightTokens, darkTokens);
```

### Step 3: Generate Code

```typescript
// Update theme/tokens.ts with base colors
// Update semantic tokens structure with merged light/dark values
```

---

## Special Cases

### 1. Color Palette Base Values

Figma may define `gray/500` as a raw color value:
```
gray/500 → #71717a
```

Chakra expects:
```typescript
gray: {
  500: { value: "#71717a" }
}
```

### 2. Semantic Token References

Figma light mode may reference another token:
```
text/fg_muted → gray/600
```

Chakra should store as reference:
```typescript
fg: {
  muted: {
    value: {
      _light: "{colors.gray.600}",
      _dark: "{colors.gray.400}"
    }
  }
}
```

The transformation should detect if a value matches a known token pattern and convert to reference format.

---

## Testing the Transformation

### Test Cases

```typescript
describe('figmaToChakra', () => {
  test('base color palette', () => {
    expect(figmaToChakra('gray/500')).toBe('gray.500');
    expect(figmaToChakra('red/100')).toBe('red.100');
  });

  test('text namespace to fg', () => {
    expect(figmaToChakra('text/fg')).toBe('fg');
    expect(figmaToChakra('text/fg_muted')).toBe('fg.muted');
    expect(figmaToChakra('text/fg_subtle')).toBe('fg.subtle');
  });

  test('bg tokens', () => {
    expect(figmaToChakra('bg/default')).toBe('bg');
    expect(figmaToChakra('bg/subtle')).toBe('bg.subtle');
    expect(figmaToChakra('bg/error')).toBe('bg.error');
  });

  test('border tokens', () => {
    expect(figmaToChakra('border/default')).toBe('border');
    expect(figmaToChakra('border/emphasized')).toBe('border.emphasized');
  });

  test('color semantics', () => {
    expect(figmaToChakra('gray/fg')).toBe('gray.fg');
    expect(figmaToChakra('red/focusRing')).toBe('red.focusRing');
  });
});
```

---

## Documentation for Team

### For Designers (Figma)

**Naming Convention:**
- Use forward slashes (`/`) to create hierarchy: `category/token`
- Use underscores (`_`) for multi-word names: `fg_muted`
- Use these prefixes:
  - `text/` for text colors
  - `bg/` for backgrounds
  - `border/` for borders
  - `{color}/` for color-specific tokens

**Examples:**
```
text/fg
text/fg_muted
bg/default
bg/subtle
border/error
gray/500
red/fg
```

### For Developers (Code)

**Naming Convention:**
- Use dot notation (`.`) for hierarchy: `category.token`
- Same multi-word names work: `muted`
- Use these namespaces:
  - `fg.*` for text colors (maps from Figma's `text/`)
  - `bg.*` for backgrounds
  - `border.*` for borders
  - `{color}.*` for color-specific tokens

**Examples:**
```typescript
fg
fg.muted
bg
bg.subtle
border.error
gray.500
red.fg
```

---

## Next Steps

1. **Create transformation utility** - Implement the functions above
2. **Test transformations** - Verify all token names convert correctly
3. **Integrate with sync workflow** - Use in automated token extraction
4. **Document exceptions** - Track any special cases that don't fit the rules

---

**Status:** ✅ Mapping rules defined
**Last Updated:** 2026-01-05
