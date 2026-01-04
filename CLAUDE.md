# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application with TypeScript, using Chakra UI v3 for the component library and design system. The project is uniquely configured to enable AI-driven design-to-code workflow through MCP (Model Context Protocol) server integration.

**Key Technologies:**
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Chakra UI v3** for UI components and design system
- **MCP Integration** for AI-assisted development

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Add Chakra UI component snippets
npx @chakra-ui/cli snippet add
```

## MCP Integration

This project uses two MCP servers to enable seamless design-to-code workflow:

### Chakra MCP Server
- **Purpose**: Provides access to Chakra UI component library, design tokens, and usage examples
- **Configuration**: Already configured in Claude Code
- **Available Tools**:
  - List available Chakra components
  - Get component props and TypeScript types
  - Access code examples and usage patterns
  - Query design tokens and theme configuration

### Figma MCP Server
- **Purpose**: Connects to the Figma design file for extracting designs and design tokens
- **Figma File**: [Chakra UI Figma Kit - MCP](https://www.figma.com/design/iHg4SHVX9tHc14nSlXq22y/Chakra-UI----Figma-Kit---MCP?node-id=580-1767&t=jWBz2Ye3RmtzVSMC-1)
- **Connection**: Running locally at http://127.0.0.1:3845/mcp
- **Usage**: Query Figma designs to extract component specifications, design tokens, and visual properties

## Design-to-Code Workflow

When implementing components from Figma:

1. **Extract Design Tokens**: Use Figma MCP to query the design file for colors, typography, spacing, and other design tokens
2. **Update Theme**: Add extracted tokens to [theme/tokens.ts](theme/tokens.ts) to maintain design system parity
3. **Query Chakra Components**: Use Chakra MCP to find appropriate Chakra UI components that match the Figma design
4. **Implement Components**: Create components in `/components` using Chakra UI, referencing the Figma design specifications
5. **Verify Design Alignment**: Compare implementation against Figma design to ensure visual accuracy

## Project Structure

```
/app                    # Next.js 15 App Router
  /layout.tsx           # Root layout with Chakra Provider
  /page.tsx             # Home page
/components
  /ui                   # Chakra UI base components and provider
    /provider.tsx       # Chakra provider with theme system
    /color-mode.tsx     # Color mode provider (dark/light theme)
  /[feature-name]       # Feature-specific components (organize by feature)
/theme
  /index.ts             # Chakra theme system configuration
  /tokens.ts            # Design tokens (sync with Figma)
/public                 # Static assets
```

## Theme System

The theme system is located in [theme/index.ts](theme/index.ts) and uses design tokens defined in [theme/tokens.ts](theme/tokens.ts).

**Important**: Design tokens in [theme/tokens.ts](theme/tokens.ts) should be kept in sync with the Figma design file. Use the Figma MCP server to extract and update these tokens.

**Customizing the theme**:
```typescript
// theme/tokens.ts
export const tokens = {
  colors: {
    brand: {
      primary: "#your-color",
    }
  },
  // ... other tokens
};
```

## Component Organization

Components should be organized by feature or domain, not by type:

```
/components
  /ui              # Chakra UI components (managed by CLI)
  /header          # Header-related components
  /dashboard       # Dashboard-related components
  /auth            # Authentication-related components
```

This structure mirrors the Figma file organization for easier design-to-code mapping.

## Chakra UI v3 Snippets

Chakra UI v3 uses a snippet-based approach for adding pre-built components:

```bash
# Interactive CLI to add components
npx @chakra-ui/cli snippet add
```

This will prompt you to select components to add to [components/ui](components/ui). These are pre-built, customizable Chakra components.

## TypeScript Configuration

The project uses strict TypeScript settings. All components should be properly typed. Chakra UI v3 provides excellent TypeScript support out of the box.

## Color Mode (Dark/Light Theme)

Dark and light mode are configured via [components/ui/color-mode.tsx](components/ui/color-mode.tsx) using `next-themes`. The theme preference persists across sessions.

**Available Components:**
- [ColorModeToggle](components/ui/color-mode-toggle.tsx) - Icon button toggle
- [ColorModeButton](components/ui/color-mode-button.tsx) - Text button toggle

**Usage:**
```tsx
import { ColorModeToggle } from "@/components/ui/color-mode-toggle";
<ColorModeToggle />
```

**Demo Pages:**
- Theme Toggle Demo: http://localhost:3000/theme-toggle-demo
- See [docs/dark-mode.md](docs/dark-mode.md) for complete documentation

## Best Practices

1. **Always use MCP servers**: Query Figma MCP for design specs and Chakra MCP for component usage before implementing
2. **Keep tokens in sync**: Update [theme/tokens.ts](theme/tokens.ts) when design tokens change in Figma
3. **Use Chakra components**: Leverage Chakra UI's built-in components rather than creating custom ones
4. **Follow Figma structure**: Organize components to match the Figma file structure for easier maintenance
5. **Verify design alignment**: Always compare implementation with Figma designs to ensure accuracy
