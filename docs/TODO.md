# Design System Tasks

Active tasks and checklist for building the Chakra UI design system with AI-powered design-to-code workflow.

**Last Updated:** 2026-01-05

## How to Use This File

- ✅ Completed tasks (for reference)
- ⬜ Pending tasks (ready to work on)
- 🚧 In progress
- ❌ Blocked or cancelled

Tasks are organized by priority and category. Focus on **High Priority** items first.

---

## 🔥 High Priority: Design-to-Code Workflow

### MCP Integration
- ✅ Install and configure Figma MCP server globally
- ✅ Install and configure Chakra UI MCP server
- ✅ Verify MCP connection and available tools
- ⬜ Document MCP setup process in README
- ⬜ Test Figma design extraction workflow

### Design Token Extraction
- ⬜ Extract complete color palette from Figma
  - Primary/brand colors
  - Semantic colors (bg, fg, border)
  - Status colors (error, warning, success, info)
  - Gray scale (50-950)
- ⬜ Extract typography tokens from Figma
  - Font families
  - Font sizes
  - Font weights
  - Line heights
  - Letter spacing
- ⬜ Extract spacing tokens from Figma
  - Padding values
  - Margin values
  - Gap values
- ⬜ Extract sizing tokens from Figma
  - Width values
  - Height values
  - Max/min constraints
- ⬜ Extract other design tokens
  - Border radius
  - Shadows
  - Transitions/animations
  - Z-index layers

### Token Integration
- ⬜ Update `theme/tokens.ts` with extracted tokens
- ⬜ Create token validation script
- ⬜ Test tokens in light mode
- ⬜ Test tokens in dark mode
- ⬜ Document token naming conventions
- ⬜ Create token usage examples

### Code Connect Setup
- ⬜ Map Figma Button component to code
- ⬜ Map Figma Input component to code
- ⬜ Establish naming conventions (Figma ↔ code)
- ⬜ Document Code Connect workflow
- ⬜ Create Code Connect mapping template

---

## 📦 Medium Priority: Design System Components

### Component Audit
- ⬜ Create inventory of all Figma components
- ⬜ Compare Figma components vs. implemented
- ⬜ Identify gaps and missing components
- ⬜ Prioritize component implementation order
- ⬜ Create component implementation checklist

### Core Component Implementation
**Forms:**
- ⬜ Button (all variants and sizes)
- ⬜ Input (with validation states)
- ⬜ Textarea
- ⬜ Select / NativeSelect
- ⬜ Checkbox
- ⬜ Radio
- ⬜ Switch
- ⬜ Field components (Field.Root, Field.Label, etc.)

**Layout:**
- ⬜ Card (with Header, Body, Footer)
- ⬜ Container
- ⬜ Stack (HStack, VStack)
- ⬜ Grid / SimpleGrid
- ⬜ Flex layouts

**Navigation:**
- ⬜ Header/Navbar component
- ⬜ Sidebar navigation
- ⬜ Breadcrumbs
- ⬜ Tabs
- ⬜ Pagination

**Feedback:**
- ⬜ Alert
- ⬜ Toast
- ⬜ Badge
- ⬜ Progress indicators
- ⬜ Spinner/Loader

**Overlay:**
- ⬜ Modal/Dialog
- ⬜ Drawer
- ⬜ Popover
- ⬜ Tooltip
- ⬜ Menu/Dropdown

### Component Documentation Pages
- ⬜ Create component usage examples
- ⬜ Document component props and API
- ⬜ Add accessibility guidelines
- ⬜ Create interactive demos
- ⬜ Add "when to use" guidance

---

## 📚 Medium Priority: Documentation

### Completed Documentation
- ✅ Dark mode / light mode toggle guide
- ✅ Customizing design tokens guide
- ✅ Semantic tokens documentation page
- ✅ CLAUDE.md (AI development instructions)
- ✅ Theme README and COLORS reference

### Documentation To Create
- ⬜ Getting Started guide
  - Installation steps
  - Quick start tutorial
  - First component example
- ⬜ Project README.md
  - Project overview
  - Tech stack
  - Development commands
  - Contributing guidelines
- ⬜ Component API References
  - Auto-generate from TypeScript types
  - Usage examples for each component
  - Props tables
- ⬜ Design Principles guide
  - Design philosophy
  - When to use which component
  - Composition patterns
- ⬜ Migration Guide (if applicable)
  - Upgrading from older versions
  - Breaking changes
  - Deprecation notices

### Documentation Pages (in app)
- ⬜ Create design system home page improvements
- ⬜ Add component showcase page
- ⬜ Create patterns and compositions page
- ⬜ Add playground/sandbox page

### MCP Workflow Documentation
- ⬜ Document Figma extraction workflow
- ⬜ Document token sync process
- ⬜ Create video tutorial (optional)
- ⬜ Document Code Connect setup

---

## 🧹 Low Priority: Clean-up & Maintenance

### Repository Organization
- ⬜ Review and update .gitignore
- ⬜ Add .mcp.json to git (if needed for team)
- ⬜ Organize /docs folder structure
- ⬜ Clean up unused files
- ⬜ Review and update CLAUDE.md

### Code Quality
- ⬜ Set up ESLint rules for design system
- ⬜ Add Prettier configuration
- ⬜ Set up pre-commit hooks
- ⬜ Add TypeScript strict mode (if not enabled)
- ⬜ Remove any console.logs

### Configuration Files
- ⬜ Review next.config.js settings
- ⬜ Review tsconfig.json settings
- ⬜ Review package.json scripts
- ⬜ Add useful dev scripts (e.g., token extraction)

### Build & Deploy
- ⬜ Test production build
- ⬜ Optimize bundle size
- ⬜ Set up deployment (Vercel/Netlify)
- ⬜ Configure environment variables

---

## 🎯 Quick Wins (Can Do Anytime)

- ⬜ Add more color examples to colors page
- ⬜ Create keyboard shortcut reference
- ⬜ Add "copy code" buttons to examples
- ⬜ Improve mobile responsiveness of docs
- ⬜ Add dark mode screenshots to docs
- ⬜ Create component status badges (✅ stable, 🚧 beta, ⬜ planned)
- ⬜ Add search functionality to docs
- ⬜ Create quick reference cheat sheet

---

## 🚫 Blocked / Needs Discussion

- None currently

---

## 📝 Notes & Ideas

### Future Enhancements
- Consider Storybook integration for component testing
- Explore Figma plugin for reverse sync (code → Figma)
- Add component usage analytics
- Create design system CLI tool
- Build component generator from Figma

### Questions to Answer
- Should we version the design system separately?
- What's the release cadence?
- How do we handle breaking changes?
- Who reviews component implementations?

---

## Recent Progress

**2026-01-05:**
- ✅ Reorganized design system pages
- ✅ Moved semantic tokens under design-system section
- ✅ Improved form validation with Field.Root pattern
- ✅ Removed standalone demo pages
- ✅ Updated navigation structure

**2026-01-04:**
- ✅ Set up Figma MCP server globally
- ✅ Verified Figma MCP connection
- ✅ Extracted sample design tokens from Figma
- ✅ Created ROADMAP.md and TODO.md

**Initial Setup:**
- ✅ Next.js 15 + Chakra UI v3 project setup
- ✅ MCP server integration configured
- ✅ Basic theme system with dark mode
- ✅ Initial documentation structure

---

## Contributing

When working on tasks:
1. Move task to 🚧 In Progress when starting
2. Update task to ✅ when complete
3. Add notes in "Recent Progress" section
4. Update "Last Updated" date at top
5. Create git commit referencing task

**Task Format:**
- Keep tasks specific and actionable
- Break large tasks into smaller subtasks
- Add context or links where helpful
- Use priority labels to guide work order
