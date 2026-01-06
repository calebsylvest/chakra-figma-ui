/**
 * Design Tokens
 *
 * These tokens should be kept in sync with the Figma design file:
 * https://www.figma.com/design/iHg4SHVX9tHc14nSlXq22y/Chakra-UI----Figma-Kit---MCP
 *
 * Use the Figma MCP server to extract design tokens from the Figma file
 * and update these values accordingly.
 */

export const tokens = {
  colors: {
    // Base colors
    transparent: { value: "transparent" },
    current: { value: "currentColor" },
    black: { value: "#000000" }, // Synced with Figma
    white: { value: "#FFFFFF" },

    // White alpha (for overlays)
    whiteAlpha: {
      50: { value: "rgba(255, 255, 255, 0.04)" },
      100: { value: "rgba(255, 255, 255, 0.06)" },
      200: { value: "rgba(255, 255, 255, 0.08)" },
      300: { value: "rgba(255, 255, 255, 0.16)" },
      400: { value: "rgba(255, 255, 255, 0.24)" },
      500: { value: "rgba(255, 255, 255, 0.36)" },
      600: { value: "rgba(255, 255, 255, 0.48)" },
      700: { value: "rgba(255, 255, 255, 0.64)" },
      800: { value: "rgba(255, 255, 255, 0.80)" },
      900: { value: "rgba(255, 255, 255, 0.92)" },
      950: { value: "rgba(255, 255, 255, 0.95)" },
    },

    // Black alpha (for overlays)
    blackAlpha: {
      50: { value: "rgba(0, 0, 0, 0.04)" },
      100: { value: "rgba(0, 0, 0, 0.06)" },
      200: { value: "rgba(0, 0, 0, 0.08)" },
      300: { value: "rgba(0, 0, 0, 0.16)" },
      400: { value: "rgba(0, 0, 0, 0.24)" },
      500: { value: "rgba(0, 0, 0, 0.36)" },
      600: { value: "rgba(0, 0, 0, 0.48)" },
      700: { value: "rgba(0, 0, 0, 0.64)" },
      800: { value: "rgba(0, 0, 0, 0.80)" },
      900: { value: "rgba(0, 0, 0, 0.92)" },
      950: { value: "rgba(0, 0, 0, 0.95)" },
    },

    // Gray scale
    gray: {
      50: { value: "#fafafa" },
      100: { value: "#f4f4f5" },
      200: { value: "#e4e4e7" },
      300: { value: "#d4d4d8" },
      400: { value: "#a1a1aa" },
      500: { value: "#71717a" },
      600: { value: "#52525b" },
      700: { value: "#3f3f46" },
      800: { value: "#27272a" },
      900: { value: "#18181b" },
      950: { value: "#111111" },
    },

    // Red palette
    red: {
      50: { value: "#fef2f2" },
      100: { value: "#fee2e2" },
      200: { value: "#fecaca" },
      300: { value: "#fca5a5" },
      400: { value: "#f87171" },
      500: { value: "#ef4444" },
      600: { value: "#dc2626" },
      700: { value: "#991919" },
      800: { value: "#511111" },
      900: { value: "#300c0c" },
      950: { value: "#1f0808" },
    },

    // Orange palette
    orange: {
      50: { value: "#fff7ed" },
      100: { value: "#ffedd5" },
      200: { value: "#fed7aa" },
      300: { value: "#fdba74" },
      400: { value: "#fb923c" },
      500: { value: "#f97316" },
      600: { value: "#ea580c" },
      700: { value: "#92310a" },
      800: { value: "#6c2710" },
      900: { value: "#3b1106" },
      950: { value: "#220a04" },
    },

    // Yellow palette
    yellow: {
      50: { value: "#fefce8" },
      100: { value: "#fef9c3" },
      200: { value: "#fef08a" },
      300: { value: "#fde047" },
      400: { value: "#facc15" },
      500: { value: "#eab308" },
      600: { value: "#ca8a04" },
      700: { value: "#845209" },
      800: { value: "#713f12" },
      900: { value: "#422006" },
      950: { value: "#281304" },
    },

    // Green palette
    green: {
      50: { value: "#f0fdf4" },
      100: { value: "#dcfce7" },
      200: { value: "#bbf7d0" },
      300: { value: "#86efac" },
      400: { value: "#4ade80" },
      500: { value: "#22c55e" },
      600: { value: "#16a34a" },
      700: { value: "#116932" },
      800: { value: "#124a28" },
      900: { value: "#042713" },
      950: { value: "#03190c" },
    },

    // Teal palette
    teal: {
      50: { value: "#f0fdfa" },
      100: { value: "#ccfbf1" },
      200: { value: "#99f6e4" },
      300: { value: "#5eead4" },
      400: { value: "#2dd4bf" },
      500: { value: "#14b8a6" },
      600: { value: "#0d9488" },
      700: { value: "#0c5d56" },
      800: { value: "#114240" },
      900: { value: "#032726" },
      950: { value: "#021716" },
    },

    // Blue palette
    blue: {
      50: { value: "#eff6ff" },
      100: { value: "#dbeafe" },
      200: { value: "#bfdbfe" },
      300: { value: "#a3cfff" },
      400: { value: "#60a5fa" },
      500: { value: "#3b82f6" },
      600: { value: "#2563eb" },
      700: { value: "#173da6" },
      800: { value: "#1a3478" },
      900: { value: "#14204a" },
      950: { value: "#0c142e" },
    },

    // Cyan palette
    cyan: {
      50: { value: "#ecfeff" },
      100: { value: "#cffafe" },
      200: { value: "#a5f3fc" },
      300: { value: "#67e8f9" },
      400: { value: "#22d3ee" },
      500: { value: "#06b6d4" },
      600: { value: "#0891b2" },
      700: { value: "#0c5c72" },
      800: { value: "#134152" },
      900: { value: "#072a38" },
      950: { value: "#051b24" },
    },

    // Purple palette
    purple: {
      50: { value: "#faf5ff" },
      100: { value: "#f3e8ff" },
      200: { value: "#e9d5ff" },
      300: { value: "#d8b4fe" },
      400: { value: "#c084fc" },
      500: { value: "#a855f7" },
      600: { value: "#9333ea" },
      700: { value: "#641ba3" },
      800: { value: "#4a1772" },
      900: { value: "#2f0553" },
      950: { value: "#1a032e" },
    },

    // Pink palette
    pink: {
      50: { value: "#fdf2f8" },
      100: { value: "#fce7f3" },
      200: { value: "#fbcfe8" },
      300: { value: "#f9a8d4" },
      400: { value: "#f472b6" },
      500: { value: "#ec4899" },
      600: { value: "#db2777" },
      700: { value: "#a41752" },
      800: { value: "#6d0e34" },
      900: { value: "#45061f" },
      950: { value: "#2c0514" },
    },

    // Custom brand colors
    brand: {
      50: { value: "#e6f7ff" },
      100: { value: "#bae7ff" },
      200: { value: "#91d5ff" },
      300: { value: "#69c0ff" },
      400: { value: "#40a9ff" },
      500: { value: "#1890ff" }, // Primary brand color
      600: { value: "#096dd9" },
      700: { value: "#0050b3" },
      800: { value: "#003a8c" },
      900: { value: "#002766" },
      950: { value: "#001529" },
    },
  },

  // Font families
  fonts: {
    heading: { value: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif' },
    body: { value: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif' },
    mono: { value: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' },
  },

  // Font sizes
  fontSizes: {
    "2xs": { value: "0.625rem" },
    xs: { value: "0.75rem" },
    sm: { value: "0.875rem" },
    md: { value: "1rem" },
    lg: { value: "1.125rem" },
    xl: { value: "1.25rem" },
    "2xl": { value: "1.5rem" },
    "3xl": { value: "1.875rem" },
    "4xl": { value: "2.25rem" },
    "5xl": { value: "3rem" },
    "6xl": { value: "3.75rem" },
    "7xl": { value: "4.5rem" },
    "8xl": { value: "6rem" },
    "9xl": { value: "8rem" },
  },

  // Font weights
  fontWeights: {
    thin: { value: "100" },
    extralight: { value: "200" },
    light: { value: "300" },
    normal: { value: "400" },
    medium: { value: "500" },
    semibold: { value: "600" },
    bold: { value: "700" },
    extrabold: { value: "800" },
    black: { value: "900" },
  },

  // Line heights
  lineHeights: {
    shorter: { value: "1.25" },
    short: { value: "1.375" },
    moderate: { value: "1.5" },
    tall: { value: "1.625" },
    taller: { value: "2" },
  },

  // Letter spacing
  letterSpacings: {
    tighter: { value: "-0.05em" },
    tight: { value: "-0.025em" },
    wide: { value: "0.025em" },
    wider: { value: "0.05em" },
    widest: { value: "0.1em" },
  },

  // Spacing scale (for padding, margin, gap, etc.)
  spacing: {
    "0.5": { value: "0.125rem" },
    "1": { value: "0.25rem" },
    "1.5": { value: "0.375rem" },
    "2": { value: "0.5rem" },
    "2.5": { value: "0.625rem" },
    "3": { value: "0.75rem" },
    "3.5": { value: "0.875rem" },
    "4": { value: "1rem" },
    "4.5": { value: "1.125rem" },
    "5": { value: "1.25rem" },
    "6": { value: "1.5rem" },
    "7": { value: "1.75rem" },
    "8": { value: "2rem" },
    "9": { value: "2.25rem" },
    "10": { value: "2.5rem" },
    "11": { value: "2.75rem" },
    "12": { value: "3rem" },
    "14": { value: "3.5rem" },
    "16": { value: "4rem" },
    "20": { value: "5rem" },
    "24": { value: "6rem" },
    "28": { value: "7rem" },
    "32": { value: "8rem" },
    "36": { value: "9rem" },
    "40": { value: "10rem" },
    "44": { value: "11rem" },
    "48": { value: "12rem" },
    "52": { value: "13rem" },
    "56": { value: "14rem" },
    "60": { value: "15rem" },
    "64": { value: "16rem" },
    "72": { value: "18rem" },
    "80": { value: "20rem" },
    "96": { value: "24rem" },
  },

  // Border radius
  radii: {
    none: { value: "0" },
    "2xs": { value: "0.0625rem" },
    xs: { value: "0.125rem" },
    sm: { value: "0.25rem" },
    md: { value: "0.375rem" },
    lg: { value: "0.5rem" },
    xl: { value: "0.75rem" },
    "2xl": { value: "1rem" },
    "3xl": { value: "1.5rem" },
    "4xl": { value: "2rem" },
    full: { value: "9999px" },
  },

  // Border widths
  borders: {
    xs: { value: "0.5px solid" },
    sm: { value: "1px solid" },
    md: { value: "2px solid" },
    lg: { value: "4px solid" },
    xl: { value: "8px solid" },
  },

  // Sizes (for width, height, maxW, etc.)
  sizes: {
    "0.5": { value: "0.125rem" },
    "1": { value: "0.25rem" },
    "1.5": { value: "0.375rem" },
    "2": { value: "0.5rem" },
    "2.5": { value: "0.625rem" },
    "3": { value: "0.75rem" },
    "3.5": { value: "0.875rem" },
    "4": { value: "1rem" },
    "4.5": { value: "1.125rem" },
    "5": { value: "1.25rem" },
    "6": { value: "1.5rem" },
    "7": { value: "1.75rem" },
    "8": { value: "2rem" },
    "9": { value: "2.25rem" },
    "10": { value: "2.5rem" },
    "11": { value: "2.75rem" },
    "12": { value: "3rem" },
    "14": { value: "3.5rem" },
    "16": { value: "4rem" },
    "20": { value: "5rem" },
    "24": { value: "6rem" },
    "28": { value: "7rem" },
    "32": { value: "8rem" },
    "36": { value: "9rem" },
    "40": { value: "10rem" },
    "44": { value: "11rem" },
    "48": { value: "12rem" },
    "52": { value: "13rem" },
    "56": { value: "14rem" },
    "60": { value: "15rem" },
    "64": { value: "16rem" },
    "72": { value: "18rem" },
    "80": { value: "20rem" },
    "96": { value: "24rem" },
    // Container sizes
    "3xs": { value: "14rem" },
    "2xs": { value: "16rem" },
    xs: { value: "20rem" },
    sm: { value: "24rem" },
    md: { value: "28rem" },
    lg: { value: "32rem" },
    xl: { value: "36rem" },
    "2xl": { value: "42rem" },
    "3xl": { value: "48rem" },
    "4xl": { value: "56rem" },
    "5xl": { value: "64rem" },
    "6xl": { value: "72rem" },
    "7xl": { value: "80rem" },
    "8xl": { value: "90rem" },
    // Fractional sizes
    "1/2": { value: "50%" },
    "1/3": { value: "33.333333%" },
    "2/3": { value: "66.666667%" },
    "1/4": { value: "25%" },
    "3/4": { value: "75%" },
    "1/5": { value: "20%" },
    "2/5": { value: "40%" },
    "3/5": { value: "60%" },
    "4/5": { value: "80%" },
    // Special values
    full: { value: "100%" },
    min: { value: "min-content" },
    max: { value: "max-content" },
    fit: { value: "fit-content" },
  },

  // Z-index layers
  zIndex: {
    hide: { value: "-1" },
    base: { value: "0" },
    docked: { value: "10" },
    dropdown: { value: "1000" },
    sticky: { value: "1100" },
    banner: { value: "1200" },
    overlay: { value: "1300" },
    modal: { value: "1400" },
    popover: { value: "1500" },
    skipLink: { value: "1600" },
    toast: { value: "1700" },
    tooltip: { value: "1800" },
  },

  // Animation durations
  durations: {
    fastest: { value: "50ms" },
    faster: { value: "100ms" },
    fast: { value: "150ms" },
    normal: { value: "200ms" },
    slow: { value: "300ms" },
    slower: { value: "400ms" },
    slowest: { value: "500ms" },
  },

  // Animation easings
  easings: {
    linear: { value: "linear" },
    in: { value: "cubic-bezier(0.4, 0, 1, 1)" },
    out: { value: "cubic-bezier(0, 0, 0.2, 1)" },
    "in-out": { value: "cubic-bezier(0.4, 0, 0.2, 1)" },
  },

  // Blur effects
  blurs: {
    sm: { value: "4px" },
    md: { value: "8px" },
    lg: { value: "12px" },
    xl: { value: "16px" },
    "2xl": { value: "24px" },
    "3xl": { value: "40px" },
  },

  // Aspect ratios
  aspectRatios: {
    square: { value: "1 / 1" },
    landscape: { value: "4 / 3" },
    portrait: { value: "3 / 4" },
    wide: { value: "16 / 9" },
    ultrawide: { value: "21 / 9" },
    golden: { value: "1.618 / 1" },
  },

  // Box shadows (add custom shadows here)
  shadows: {
    // Example custom shadow
    // brand: { value: "0 4px 14px 0 rgba(24, 144, 255, 0.39)" },
  },
};
