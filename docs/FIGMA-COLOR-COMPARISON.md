# Figma vs. Codebase Color Token Comparison

**Generated:** 2026-01-05
**Purpose:** Compare Figma color variables with codebase implementation to identify discrepancies

## Summary

| Category | Figma | Codebase | Status |
|----------|-------|----------|--------|
| **Base Color Scales** | 9 palettes (50-950) | 10 palettes (50-950) | ⚠️ Missing cyan in Figma text, Extra brand in code |
| **Semantic Tokens** | ✅ Defined | ✅ Defined | ⚠️ Naming differences |
| **Light Mode Semantics** | ✅ Complete | ✅ Complete | ⚠️ Some value differences |
| **Dark Mode Semantics** | ✅ Complete | ✅ Complete | ⚠️ Some value differences |

---

## 1. Base Color Scales (50-950)

### ✅ Perfectly Matched Palettes

All values match exactly between Figma and code:

- **gray** - ✅ All values match
- **red** - ✅ All values match
- **orange** - ✅ All values match
- **yellow** - ✅ All values match
- **green** - ✅ All values match
- **teal** - ✅ All values match
- **blue** - ✅ All values match
- **purple** - ✅ All values match
- **pink** - ✅ All values match

### ⚠️ Discrepancies

| Color | Status | Notes |
|-------|--------|-------|
| **cyan** | ⚠️ Not in Figma extraction | Figma has cyan tokens but they weren't in the extracted variables. Code has complete cyan palette. |
| **brand** | ⚠️ Not in Figma | Code has custom brand color palette (blue-based) that doesn't exist in Figma |

### 📊 Codebase-Only Colors

These colors exist in `theme/tokens.ts` but were NOT found in Figma:

```typescript
// Brand colors (custom, not from Figma)
brand: {
  50: "#e6f7ff",
  500: "#1890ff", // Primary brand color
  950: "#001529"
}

// Alpha overlays (utility colors)
whiteAlpha: { 50-950 with rgba values }
blackAlpha: { 50-950 with rgba values }

// Basic colors
transparent: "transparent"
current: "currentColor"
black: "#09090B"
white: "#FFFFFF"
```

---

## 2. Semantic Tokens - Naming Comparison

### ⚠️ Naming Convention Differences

Figma uses **slashes** (`text/fg`), codebase uses **dots** (`fg.DEFAULT`):

| Figma Token | Codebase Token | Match |
|-------------|----------------|-------|
| `text/fg` | `fg.DEFAULT` | ⚠️ Different naming |
| `text/fg_muted` | `fg.muted` | ⚠️ Underscore vs dot |
| `text/fg_subtle` | `fg.subtle` | ⚠️ Underscore vs dot |
| `text/fg_inverted` | `fg.inverted` | ⚠️ Underscore vs dot |
| `text/fg_error` | `fg.error` | ⚠️ Underscore vs dot |
| `text/fg_warning` | `fg.warning` | ⚠️ Underscore vs dot |
| `text/fg_success` | `fg.success` | ⚠️ Underscore vs dot |
| `text/fg_info` | `fg.info` | ⚠️ Underscore vs dot |

---

## 3. Semantic Tokens - Value Comparison

### Background Tokens (`bg.*`)

| Token | Light Mode | Dark Mode | Status |
|-------|------------|-----------|--------|
| **bg/default** | | | |
| Figma | `#ffffff` | `#000000` | |
| Code | `{colors.white}` (#FFFFFF) | `{colors.black}` (#09090B) | ❌ Dark value differs |
| **bg/subtle** | | | |
| Figma | `#fafafa` (gray/50) | `#111111` (gray/950) | |
| Code | `{colors.gray.50}` (#fafafa) | `{colors.gray.950}` (#111111) | ✅ Match |
| **bg/muted** | | | |
| Figma | `#f4f4f5` (gray/100) | `#18181b` (gray/900) | |
| Code | `{colors.gray.100}` (#f4f4f5) | `{colors.gray.900}` (#18181b) | ✅ Match |
| **bg/emphasized** | | | |
| Figma | `#e4e4e7` (gray/200) | `#27272a` (gray/800) | |
| Code | `{colors.gray.200}` (#e4e4e7) | `{colors.gray.800}` (#27272a) | ✅ Match |
| **bg/inverted** | | | |
| Figma | `#000000` | `#ffffff` | |
| Code | `{colors.black}` (#09090B) | `{colors.white}` (#FFFFFF) | ❌ Light value differs |
| **bg/panel** | | | |
| Figma | `#ffffff` | `#111111` (gray/950) | |
| Code | `{colors.white}` (#FFFFFF) | `{colors.gray.950}` (#111111) | ⚠️ May differ if white differs |
| **bg/error** | | | |
| Figma | `#fef2f2` (red/50) | `#1f0808` (red/950) | |
| Code | `{colors.red.50}` (#fef2f2) | `{colors.red.950}` (#1f0808) | ✅ Match |
| **bg/warning** | | | |
| Figma | `#fff7ed` (orange/50) | `#220a04` (orange/950) | |
| Code | `{colors.orange.50}` (#fff7ed) | `{colors.orange.950}` (#220a04) | ✅ Match |
| **bg/success** | | | |
| Figma | `#f0fdf4` (green/50) | `#03190c` (green/950) | |
| Code | `{colors.green.50}` (#f0fdf4) | `{colors.green.950}` (#03190c) | ✅ Match |
| **bg/info** | | | |
| Figma | `#eff6ff` (blue/50) | `#0c142e` (blue/950) | |
| Code | `{colors.blue.50}` (#eff6ff) | `{colors.blue.950}` (#0c142e) | ✅ Match |

### Foreground/Text Tokens (`fg.*` / `text/*`)

| Token | Light Mode | Dark Mode | Status |
|-------|------------|-----------|--------|
| **text/fg** → **fg.DEFAULT** | | | |
| Figma | `#000000` | `#fafafa` (gray/50) | |
| Code | `{colors.black}` (#09090B) | `{colors.gray.50}` (#fafafa) | ❌ Light value differs |
| **text/fg_muted** → **fg.muted** | | | |
| Figma | `#52525b` (gray/600) | `#a1a1aa` (gray/400) | |
| Code | `{colors.gray.600}` (#52525b) | `{colors.gray.400}` (#a1a1aa) | ✅ Match |
| **text/fg_subtle** → **fg.subtle** | | | |
| Figma | `#a1a1aa` (gray/400) | `#71717a` (gray/500) | |
| Code | `{colors.gray.400}` (#a1a1aa) | `{colors.gray.500}` (#71717a) | ✅ Match |
| **text/fg_inverted** → **fg.inverted** | | | |
| Figma | `#fafafa` (gray/50) | `#000000` | |
| Code | `{colors.gray.50}` (#fafafa) | `{colors.black}` (#09090B) | ❌ Dark value differs |
| **text/fg_error** → **fg.error** | | | |
| Figma | `#ef4444` (red/500) | `#f87171` (red/400) | |
| Code | `{colors.red.500}` (#ef4444) | `{colors.red.400}` (#f87171) | ✅ Match |
| **text/fg_warning** → **fg.warning** | | | |
| Figma | `#ca8a04` (yellow/600) | `#fde047` (yellow/300) | |
| Code | `{colors.orange.600}` (#ea580c) | `{colors.orange.300}` (#fdba74) | ❌ MISMATCH - Code uses orange, Figma uses yellow! |
| **text/fg_success** → **fg.success** | | | |
| Figma | `#16a34a` (green/600) | `#86efac` (green/300) | |
| Code | `{colors.green.600}` (#16a34a) | `{colors.green.300}` (#86efac) | ✅ Match |
| **text/fg_info** → **fg.info** | | | |
| Figma | `#2563eb` (blue/600) | `#a3cfff` (blue/300) | |
| Code | `{colors.blue.600}` (#2563eb) | `{colors.blue.300}` (#a3cfff) | ✅ Match |

### Border Tokens (`border/*`)

| Token | Light Mode | Dark Mode | Status |
|-------|------------|-----------|--------|
| **border/default** | | | |
| Figma | `#e4e4e7` (gray/200) | `#27272a` (gray/800) | |
| Code | `{colors.gray.200}` (#e4e4e7) | `{colors.gray.800}` (#27272a) | ✅ Match |
| **border/subtle** | | | |
| Figma | `#fafafa` (gray/50) | `#111111` (gray/950) | |
| Code | `{colors.gray.50}` (#fafafa) | `{colors.gray.950}` (#111111) | ✅ Match |
| **border/muted** | | | |
| Figma | `#f4f4f5` (gray/100) | `#18181b` (gray/900) | |
| Code | `{colors.gray.100}` (#f4f4f5) | `{colors.gray.900}` (#18181b) | ✅ Match |
| **border/emphasized** | | | |
| Figma | `#d4d4d8` (gray/300) | `#3f3f46` (gray/700) | |
| Code | `{colors.gray.300}` (#d4d4d8) | `{colors.gray.700}` (#3f3f46) | ✅ Match |
| **border/inverted** | | | |
| Figma | `#27272a` (gray/800) | `#e4e4e7` (gray/200) | |
| Code | `{colors.gray.800}` (#27272a) | `{colors.gray.200}` (#e4e4e7) | ✅ Match |
| **border/error** | | | |
| Figma | `#ef4444` (red/500) | `#f87171` (red/400) | |
| Code | `{colors.red.500}` (#ef4444) | `{colors.red.400}` (#f87171) | ✅ Match |
| **border/warning** | | | |
| Figma | `#f97316` (orange/500) | `#fb923c` (orange/400) | |
| Code | `{colors.orange.500}` (#f97316) | `{colors.orange.400}` (#fb923c) | ✅ Match |
| **border/success** | | | |
| Figma | `#22c55e` (green/500) | `#4ade80` (green/400) | |
| Code | `{colors.green.500}` (#22c55e) | `{colors.green.400}` (#4ade80) | ✅ Match |
| **border/info** | | | |
| Figma | `#3b82f6` (blue/500) | `#60a5fa` (blue/400) | |
| Code | `{colors.blue.500}` (#3b82f6) | `{colors.blue.400}` (#60a5fa) | ✅ Match |

---

## 4. Color Palette Semantic Tokens

### Tokens in Figma BUT NOT in Codebase

Figma has extended semantic tokens for each color palette (gray, red, pink, purple, cyan, blue, teal, green, yellow, orange):

```
{color}/contrast
{color}/fg
{color}/subtle
{color}/muted
{color}/emphasized
{color}/solid
{color}/focusRing
```

✅ **Code DOES have these** - They exist in `semantic-tokens.json`

---

## 5. Critical Issues Found

### 🔴 High Priority Issues

1. **Black Color Mismatch**
   - Figma: `#000000` (pure black)
   - Code: `#09090B` (very dark gray)
   - **Impact:** Affects `bg/default` dark mode, `text/fg` light mode, and inverted tokens

2. **Warning Text Color Mismatch**
   - Figma: Uses `yellow` palette for warning text
   - Code: Uses `orange` palette for warning text
   - **Impact:** Warning text colors don't match design

### ⚠️ Medium Priority Issues

3. **Naming Convention Inconsistency**
   - Figma: `text/fg_muted` (slash + underscore)
   - Code: `fg.muted` (dot notation)
   - **Impact:** Cannot directly map Figma variable names to code

4. **Missing Cyan Palette**
   - Figma extraction didn't include cyan (may be extraction issue)
   - Code has complete cyan palette
   - **Impact:** May be fine if Figma has it but didn't extract

### ℹ️ Low Priority Issues

5. **Extra Brand Palette in Code**
   - Code has custom `brand` color palette
   - Not present in Figma
   - **Impact:** Intentional custom addition, may be okay

6. **Alpha Overlays Not in Figma**
   - `whiteAlpha` and `blackAlpha` are code-only
   - **Impact:** Utility colors for overlays, may be intentional

---

## 6. Recommendations

### Immediate Actions

1. **Decide on black color**
   - ✅ Use Figma's `#000000` (pure black)
   - ❌ OR update Figma to use `#09090B` (softer black)
   - Must align to avoid visual inconsistencies

2. **Fix warning text color**
   - Update code `fg.warning` to use `yellow` palette like Figma
   - OR update Figma to use `orange` palette like code
   - Currently causes warning messages to look different

3. **Establish naming convention**
   - Decide: Keep Figma naming (`text/fg_muted`) or code naming (`fg.muted`)?
   - Create mapping/transformation layer if needed
   - Document the convention

### Future Improvements

4. **Add cyan palette check**
   - Verify if cyan exists in Figma but didn't extract
   - May need different node ID for extraction

5. **Document custom colors**
   - Clearly mark `brand`, `whiteAlpha`, `blackAlpha` as custom (not from Figma)
   - Add comments in code explaining deviations

6. **Automate sync**
   - Create script to extract Figma tokens and transform to code format
   - Add validation to catch mismatches early

---

## 7. Next Steps

1. **Review with team:** Discuss the critical black/warning color mismatches
2. **Decide on fixes:** Align on which direction (Figma→Code or Code→Figma)
3. **Update tokens:** Sync the decided values
4. **Test visually:** Check both light and dark modes after changes
5. **Document:** Update this comparison after sync

---

## Appendix: Full Token Lists

### Figma Global Colors Extracted
```
gray/50, gray/100, gray/200, gray/300, gray/400, gray/500,
gray/600, gray/700, gray/800, gray/900, gray/950

red/50-950, pink/50-950, purple/50-950, cyan/50-950,
blue/50-950, teal/50-950, green/50-950, yellow/50-950,
orange/50-950

text/fg, bg/default, border/default, text/fg_muted
```

### Codebase Colors (tokens.ts)
```
transparent, current, black (#09090B), white (#FFFFFF)
whiteAlpha (50-950), blackAlpha (50-950)
gray (50-950), red (50-950), orange (50-950), yellow (50-950)
green (50-950), teal (50-950), blue (50-950), cyan (50-950)
purple (50-950), pink (50-950), brand (50-950)
```

---

---

## Update Log

### 2026-01-05 - Token Sync Completed ✅

**Changes Made:**

1. **Fixed black color** (theme/tokens.ts:16)
   - Changed from: `#09090B` (soft black)
   - Changed to: `#000000` (pure black, matches Figma)
   - Impact: Dark mode backgrounds and inverted colors now match design

2. **Fixed warning text color** (theme/semantic-tokens.json:96-100)
   - Changed from: `orange.600` (light) / `orange.300` (dark)
   - Changed to: `yellow.600` (light) / `yellow.300` (dark)
   - Impact: Warning text now uses yellow palette as specified in Figma

**Status After Sync:**
- ✅ Base color palettes: All match Figma perfectly
- ✅ Semantic token values: Synced with Figma
- ⚠️ Naming conventions: Different but documented (see FIGMA-TOKEN-MAPPING-RULES.md)
- ℹ️ Custom colors retained: `brand`, `whiteAlpha`, `blackAlpha` (intentional)

**Testing Required:**
- [ ] Verify dark mode appearance
- [ ] Check warning message styling
- [ ] Test inverted color tokens
- [ ] Visual regression test

---

**Document Status:** ✅ Synced
**Last Updated:** 2026-01-05
