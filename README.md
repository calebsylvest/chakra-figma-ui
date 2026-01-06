# Chakra UI Design System

A modern design system built with Next.js 15 and Chakra UI v3, featuring AI-powered design-to-code workflow through MCP (Model Context Protocol) integration.

**Live Demo:** http://localhost:3000 (when running locally)

---

## ✨ Features

- 🎨 **Chakra UI v3** - Modern component library with built-in dark mode
- 🎯 **Design-to-Code Workflow** - Sync design tokens directly from Figma
- 🤖 **MCP Integration** - Figma and Chakra UI MCP servers for AI-assisted development
- 📚 **Comprehensive Documentation** - Complete guides for tokens, components, and patterns
- 🌓 **Dark Mode** - Seamless light/dark theme switching
- 🔄 **Token Sync** - Automated design token extraction and transformation
- 📱 **Responsive** - Mobile-first design approach
- ⚡ **Next.js 15** - App Router, Server Components, and optimized performance

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Claude Code (for design token sync)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd chakra-ui

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **UI Library:** [Chakra UI v3](https://www.chakra-ui.com/)
- **Styling:** Emotion (CSS-in-JS)
- **Theme:** next-themes for dark mode
- **Language:** TypeScript
- **Icons:** react-icons (Lucide)
- **MCP Servers:** Figma Desktop, Chakra UI

---

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Add Chakra UI snippets
npx @chakra-ui/cli snippet add

# View token sync docs
npm run tokens:docs
```

---

## 📁 Project Structure

```
/
├── app/                          # Next.js 15 App Router
│   ├── design-system/           # Design system documentation pages
│   │   ├── colors/              # Color palette showcase
│   │   ├── components/          # Component examples
│   │   ├── semantic-tokens/     # Semantic token documentation
│   │   └── typography/          # Typography showcase
│   ├── layout.tsx               # Root layout with providers
│   └── page.tsx                 # Home page
├── components/
│   ├── ui/                      # Chakra UI base components (via CLI)
│   │   ├── provider.tsx         # Chakra provider with theme
│   │   └── color-mode.tsx       # Dark mode utilities
│   └── layout/                  # Layout components (navbar, sidebar)
├── theme/
│   ├── index.ts                 # Theme system configuration
│   ├── tokens.ts                # Design tokens (synced with Figma)
│   └── semantic-tokens.json     # Semantic tokens (light/dark)
├── scripts/
│   └── figma-token-utils.ts     # Token transformation utilities
├── docs/                        # Comprehensive documentation
│   ├── ROADMAP.md               # Project roadmap and milestones
│   ├── TODO.md                  # Task tracking
│   ├── SYNCING-TOKENS-FROM-FIGMA.md          # Token sync guide
│   ├── FIGMA-TOKEN-MAPPING-RULES.md          # Naming conventions
│   ├── FIGMA-COLOR-COMPARISON.md             # Token comparison
│   ├── customizing-tokens.md                 # Token customization
│   └── dark-mode.md                          # Dark mode setup
├── public/                      # Static assets
└── CLAUDE.md                    # AI development instructions
```

---

## 🎨 Design System

### Color Tokens

The design system uses a comprehensive color palette synced from Figma:

- **Base Colors:** 9 color scales (gray, red, orange, yellow, green, teal, blue, cyan, purple, pink)
- **Semantic Tokens:** Theme-aware tokens (bg, fg, border) with light/dark variants
- **Status Colors:** Error, warning, success, info states
- **Custom Colors:** Brand, alpha overlays

### Typography

- **Fonts:** Inter (heading, body), SF Mono (code)
- **Sizes:** 2xs to 9xl scale
- **Weights:** thin to black (100-900)

### Spacing & Sizing

- **Spacing Scale:** 0.5 to 96 (0.125rem to 24rem)
- **Container Sizes:** 3xs to 8xl
- **Border Radius:** 2xs to full

---

## 🔗 MCP Integration

This project uses two MCP servers for AI-assisted development:

### Figma MCP Server

**Purpose:** Extract design specifications and tokens from Figma
- **File:** [Chakra UI Figma Kit - MCP](https://www.figma.com/design/iHg4SHVX9tHc14nSlXq22y/Chakra-UI----Figma-Kit---MCP)
- **Connection:** http://127.0.0.1:3845/mcp
- **Features:** Design token extraction, component specs, visual properties

### Chakra UI MCP Server

**Purpose:** Access Chakra UI component library and documentation
- **Features:** Component props, code examples, usage patterns, design tokens

### Syncing Tokens from Figma

```bash
# In Claude Code:
"Sync color tokens from Figma following docs/SYNCING-TOKENS-FROM-FIGMA.md"
```

See [SYNCING-TOKENS-FROM-FIGMA.md](docs/SYNCING-TOKENS-FROM-FIGMA.md) for complete guide.

---

## 📖 Documentation

### Getting Started

- [Customizing Tokens](docs/customizing-tokens.md) - How to customize design tokens
- [Dark Mode Setup](docs/dark-mode.md) - Implementing dark/light themes

### Design System

- [Colors](http://localhost:3000/design-system/colors) - Color palette showcase
- [Semantic Tokens](http://localhost:3000/design-system/semantic-tokens) - Theme-aware tokens
- [Typography](http://localhost:3000/design-system/typography) - Font system
- [Components](http://localhost:3000/design-system/components) - Component library

### Token Sync Workflow

- [Syncing from Figma](docs/SYNCING-TOKENS-FROM-FIGMA.md) - Complete sync guide
- [Token Mapping Rules](docs/FIGMA-TOKEN-MAPPING-RULES.md) - Naming conventions
- [Token Comparison](docs/FIGMA-COLOR-COMPARISON.md) - Current state

### Project Planning

- [Roadmap](docs/ROADMAP.md) - Project vision and milestones
- [TODO](docs/TODO.md) - Task tracking and progress

---

## 🎯 Key Features

### Design-to-Code Workflow

1. **Design in Figma** - Update colors, components, or tokens in Figma
2. **Extract with MCP** - Use Claude Code to extract design tokens
3. **Auto-transform** - Naming conventions automatically converted
4. **Sync to Code** - Tokens updated in theme files
5. **Instant Preview** - See changes immediately in the app

### Dark Mode

Seamless theme switching powered by `next-themes`:

```tsx
import { ColorModeToggle } from "@/components/ui/color-mode-toggle";

<ColorModeToggle />
```

### Semantic Tokens

Theme-aware tokens that automatically adapt:

```tsx
// Automatically switches between light and dark values
<Box bg="bg.subtle" color="fg.muted">
  Content
</Box>
```

### Component Snippets

Add pre-built Chakra components:

```bash
npx @chakra-ui/cli snippet add
```

---

## 🤝 Contributing

### Adding Components

1. Use Chakra CLI to add component snippets to `components/ui/`
2. Create feature-specific components in `components/[feature]/`
3. Document usage in design system pages

### Syncing Tokens

When design tokens change in Figma:

1. Open Claude Code in the project
2. Request token sync: `"Sync color tokens from Figma"`
3. Review changes and approve
4. Test in browser (light and dark modes)
5. Commit changes

### Documentation

- Keep docs up to date as features are added
- Add examples to component pages
- Update TODO.md with progress

---

## 🧪 Testing

### Manual Testing

```bash
# Start dev server
npm run dev

# Test checklist:
# - Light mode appearance
# - Dark mode appearance
# - All components render correctly
# - No console errors
# - Responsive behavior
```

### Token Testing

After syncing tokens from Figma:

1. Check light mode colors
2. Toggle to dark mode
3. Verify semantic tokens work correctly
4. Test status colors (error, warning, success, info)

---

## 🚢 Deployment

### Build

```bash
npm run build
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your repository to Vercel for automatic deployments.

---

## 📝 License

[Add your license here]

---

## 🙏 Acknowledgments

- **Chakra UI Team** - For the amazing component library
- **Next.js Team** - For the powerful React framework
- **Figma** - For design collaboration tools
- **Claude Code** - For AI-assisted development workflow

---

## 📞 Support

- **Documentation:** [/docs](./docs)
- **Issues:** [Create an issue](https://github.com/your-repo/issues)
- **Discussions:** [GitHub Discussions](https://github.com/your-repo/discussions)

---

**Built with ❤️ using Next.js 15 + Chakra UI v3 + Claude Code**
