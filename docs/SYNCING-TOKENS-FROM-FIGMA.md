# Syncing Design Tokens from Figma

Complete guide to extracting and syncing design tokens from Figma to your codebase using Claude Code and MCP.

**Last Updated:** 2026-01-05

---

## Prerequisites

### 1. Figma MCP Server (Required)

You must have the Figma MCP server installed and configured:

```bash
# Check if Figma MCP is configured
claude mcp list

# Should show: figma-desktop
```

If not installed, follow the setup in [MCP-SETUP-PROGRESS.md](../MCP-SETUP-PROGRESS.md).

### 2. Figma File Access

You need access to the design file:
- **File:** [Chakra UI Figma Kit - MCP](https://www.figma.com/design/iHg4SHVX9tHc14nSlXq22y/Chakra-UI----Figma-Kit---MCP)
- **Required Frames:**
  - Global Color Tokens (node-id=12-185)
  - Light Mode Semantic Tokens (node-id=12-961)
  - Dark Mode Semantic Tokens (node-id=31-1290)

### 3. Claude Code

Open Claude Code in your project directory:

```bash
cd /path/to/chakra-ui
claude
```

---

## Token Sync Workflow

### Step 1: Extract Tokens from Figma

Use Claude Code with Figma MCP to extract design tokens.

**In Claude Code, run:**

```
Extract color tokens from Figma using these node IDs:
- Global Colors: 12:185
- Light Semantics: 12:961
- Dark Semantics: 31:1290
```

Claude will use the `mcp__figma-desktop__get_variable_defs` tool to extract tokens from each frame.

**Example Output:**

```json
{
  "gray/400": "#a1a1aa",
  "text/fg": "#000000",
  "bg/default": "#ffffff"
}
```

### Step 2: Review Extracted Tokens

Claude will show you the extracted tokens and compare them with your current codebase.

**Review the comparison** to identify:
- ✅ Tokens that match
- ⚠️ Tokens with differences
- ❌ Critical mismatches

### Step 3: Apply Naming Transformations

Tokens are automatically transformed using the mapping rules in [FIGMA-TOKEN-MAPPING-RULES.md](./FIGMA-TOKEN-MAPPING-RULES.md):

```
Figma              → Code
---------------------------
text/fg            → fg
text/fg_muted      → fg.muted
bg/default         → bg
gray/500           → gray.500
```

The transformation utilities are in [scripts/figma-token-utils.ts](../scripts/figma-token-utils.ts).

### Step 4: Update Theme Files

Claude will update your theme files:

**Base Color Tokens** → `theme/tokens.ts`
```typescript
gray: {
  400: { value: "#a1a1aa" }
}
```

**Semantic Tokens** → `theme/semantic-tokens.json`
```json
{
  "fg": {
    "muted": {
      "value": {
        "_light": "{colors.gray.600}",
        "_dark": "{colors.gray.400}"
      }
    }
  }
}
```

### Step 5: Verify Changes

After sync, verify the changes:

```bash
# Start dev server
npm run dev

# Open in browser
open http://localhost:3000
```

Check:
- [ ] Colors look correct in light mode
- [ ] Colors look correct in dark mode
- [ ] No visual regressions
- [ ] No console errors

---

## Quick Sync Commands

### Color Tokens Only

In Claude Code:

```
Sync color tokens from Figma:
- Extract from frames 12:185, 12:961, 31:1290
- Compare with current code
- Update theme/tokens.ts and semantic-tokens.json
```

### All Tokens (Future)

Once typography, spacing, etc. are set up:

```
Sync all design tokens from Figma
```

---

## Figma Frame Node IDs

Keep these handy for token extraction:

| Frame | Node ID | Purpose |
|-------|---------|---------|
| **Global Color Tokens** | `12:185` | Base color palettes (50-950) |
| **Light Mode Semantic Tokens** | `12:961` | Semantic tokens for light mode |
| **Dark Mode Semantic Tokens** | `31:1290` | Semantic tokens for dark mode |
| **Typography Tokens** | TBD | Font families, sizes, weights |
| **Spacing Tokens** | TBD | Padding, margin, gap values |
| **Sizing Tokens** | TBD | Width, height constraints |

---

## Transformation Rules

### Naming Convention

Figma uses slashes and underscores, code uses dots:

```typescript
// Figma format
text/fg_muted

// Code format
fg.muted
```

See [FIGMA-TOKEN-MAPPING-RULES.md](./FIGMA-TOKEN-MAPPING-RULES.md) for complete mapping rules.

### Value References

Semantic tokens reference base tokens:

```json
// Light mode uses gray.600
{
  "fg": {
    "muted": {
      "value": {
        "_light": "{colors.gray.600}"
      }
    }
  }
}
```

The utility functions automatically detect and convert hex values to token references.

---

## Testing Token Changes

### Round-Trip Test

To verify the sync workflow:

1. **Change a color in Figma** (pick a safe one like `gray/400`)
2. **Re-extract tokens** using Claude Code
3. **Verify detection** - Claude should show the change
4. **Update code** - Let Claude apply the change
5. **Test in browser** - Visual verification
6. **Revert in Figma** - Change back to original
7. **Re-sync** - Verify it updates back

This validates the bi-directional workflow.

### What to Test

After syncing tokens:

- **Light mode backgrounds** - Check bg tokens
- **Dark mode backgrounds** - Toggle and verify
- **Text colors** - All fg tokens
- **Borders** - Subtle, muted, emphasized
- **Status colors** - Error, warning, success, info
- **Interactive states** - Hover, focus, active

---

## Troubleshooting

### Issue: "Nothing is selected" Error

**Cause:** No node selected in Figma desktop app

**Solution:** Provide the specific node ID in your request:

```
Extract tokens from Figma node 12:185
```

### Issue: Tokens Don't Match Figma

**Cause:** May have custom code-only tokens or outdated values

**Solution:** Check [FIGMA-COLOR-COMPARISON.md](./FIGMA-COLOR-COMPARISON.md) for known differences. Custom tokens like `brand`, `whiteAlpha`, `blackAlpha` are intentional.

### Issue: Wrong Token References

**Cause:** Hex values not converting to token references

**Solution:** Update the `convertToTokenReference()` function in [scripts/figma-token-utils.ts](../scripts/figma-token-utils.ts) with the hex value mapping.

### Issue: Naming Convention Conflicts

**Cause:** Figma uses different naming than expected

**Solution:** Update transformation rules in `figmaToChakra()` function.

---

## Best Practices

### 1. Sync Regularly

Sync tokens whenever:
- Designer updates colors in Figma
- New semantic tokens are added
- Design system evolves

Don't wait for major changes - small frequent syncs are easier.

### 2. Review Before Applying

Always review the comparison before updating code:
- Check for unexpected changes
- Verify critical tokens
- Ensure no breaking changes

### 3. Test After Sync

Always test both light and dark modes after syncing:
- Visual regression check
- Component library review
- Edge cases and interactions

### 4. Commit Separately

Make token sync commits separate from feature work:

```bash
git add theme/tokens.ts theme/semantic-tokens.json
git commit -m "Sync design tokens from Figma

- Update gray scale values
- Fix warning color to use yellow
- Sync semantic token references

🤖 Generated with Claude Code"
```

### 5. Document Changes

Update [FIGMA-COLOR-COMPARISON.md](./FIGMA-COLOR-COMPARISON.md) after each sync with:
- What changed
- Why it changed
- Impact on the UI

---

## Automation Roadmap

### Current State (Manual)

Tokens are synced manually using Claude Code:
1. Request extraction in Claude
2. Review comparison
3. Approve changes
4. Claude updates files

### Future Automation

Potential improvements:
- **CLI tool** - `npm run sync-tokens`
- **Pre-commit hook** - Warn if tokens drift
- **CI check** - Validate token consistency
- **Auto-PR** - Create PR when Figma changes detected

---

## Reference Documents

- [FIGMA-TOKEN-MAPPING-RULES.md](./FIGMA-TOKEN-MAPPING-RULES.md) - Naming transformation rules
- [FIGMA-COLOR-COMPARISON.md](./FIGMA-COLOR-COMPARISON.md) - Current token comparison
- [customizing-tokens.md](./customizing-tokens.md) - How to use tokens in code
- [scripts/figma-token-utils.ts](../scripts/figma-token-utils.ts) - Transformation utilities

---

## Example: Complete Color Token Sync

Here's a complete example of syncing color tokens:

### 1. In Claude Code:

```
Sync color tokens from Figma.

Use these node IDs:
- Global colors: 12:185
- Light semantics: 12:961
- Dark semantics: 31:1290

Compare with current theme/tokens.ts and semantic-tokens.json,
then update if there are changes.
```

### 2. Claude Extracts:

```
Extracted 150+ color tokens from Figma
Found 2 differences:
- black: #09090B → #000000
- fg.warning: orange → yellow
```

### 3. Review & Approve:

```
Yes, sync those changes
```

### 4. Claude Updates:

```
✅ Updated theme/tokens.ts - black color
✅ Updated semantic-tokens.json - warning fg color
```

### 5. Test:

```bash
npm run dev
# Check localhost:3000 in light/dark modes
```

### 6. Commit:

```bash
git add theme/
git commit -m "Sync color tokens from Figma"
```

---

## FAQ

**Q: How often should I sync tokens?**
A: Whenever the design team updates Figma. Weekly or bi-weekly for active projects.

**Q: What if I have custom tokens not in Figma?**
A: Keep them! Custom tokens like `brand`, `whiteAlpha`, `blackAlpha` can coexist. Document them clearly.

**Q: Can I sync only specific tokens?**
A: Yes, extract only the frames you need and update only those sections.

**Q: What if Figma and code conflict?**
A: Figma is the source of truth for design tokens. Resolve by updating code to match Figma, or discuss with designers if the Figma value seems wrong.

**Q: How do I add new token types?**
A: Add new Figma frames for the token type, extract using MCP, add to the appropriate theme file, document the node ID.

---

**Status:** ✅ Production Ready
**Last Sync:** 2026-01-05
**Next Review:** When Figma design tokens are updated
