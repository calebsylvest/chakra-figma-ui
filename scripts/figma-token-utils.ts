/**
 * Figma Token Transformation Utilities
 *
 * Utilities for transforming Figma variable names and values to Chakra UI token format.
 * Used in the Figma-to-Code token sync workflow.
 */

/**
 * Transform Figma variable name to Chakra token path
 *
 * Examples:
 *   text/fg -> fg
 *   text/fg_muted -> fg.muted
 *   bg/default -> bg
 *   gray/500 -> gray.500
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

  // Join with slashes
  return parts.join('/');
}

/**
 * Set a nested value in an object using dot notation path
 */
function setNestedValue(obj: any, path: string, value: any): void {
  const parts = path.split('.');
  let current = obj;

  for (let i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]]) {
      current[parts[i]] = {};
    }
    current = current[parts[i]];
  }

  current[parts[parts.length - 1]] = value;
}

/**
 * Transform Figma MCP response to Chakra base tokens format
 *
 * @param figmaTokens - Raw response from Figma MCP get_variable_defs
 * @returns Nested token object ready for theme/tokens.ts
 */
export function transformToBaseTokens(
  figmaTokens: Record<string, string>
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
    current[finalKey] = { value };
  }

  return chakraTokens;
}

/**
 * Transform Figma MCP responses to Chakra semantic tokens format
 *
 * @param lightTokens - Tokens from Light Mode Semantic Tokens frame
 * @param darkTokens - Tokens from Dark Mode Semantic Tokens frame
 * @returns Semantic tokens with _light/_dark conditions
 */
export function transformToSemanticTokens(
  lightTokens: Record<string, string>,
  darkTokens: Record<string, string>
): Record<string, any> {
  const semanticTokens: Record<string, any> = {};

  // Process all unique token names from both light and dark
  const allTokenNames = new Set([
    ...Object.keys(lightTokens),
    ...Object.keys(darkTokens),
  ]);

  for (const figmaName of allTokenNames) {
    const chakraPath = figmaToChakra(figmaName);
    const lightValue = lightTokens[figmaName];
    const darkValue = darkTokens[figmaName];

    // Skip if token doesn't exist in both modes
    if (!lightValue || !darkValue) {
      console.warn(`Token ${figmaName} missing in ${!lightValue ? 'light' : 'dark'} mode`);
      continue;
    }

    // Check if value is a reference to another token
    const lightRef = convertToTokenReference(lightValue);
    const darkRef = convertToTokenReference(darkValue);

    const parts = chakraPath.split('.');
    let current = semanticTokens;

    for (let i = 0; i < parts.length - 1; i++) {
      if (!current[parts[i]]) {
        current[parts[i]] = {};
      }
      current = current[parts[i]];
    }

    const finalKey = parts[parts.length - 1];
    current[finalKey] = {
      value: {
        _light: lightRef,
        _dark: darkRef,
      },
    };
  }

  return semanticTokens;
}

/**
 * Convert a color hex value to a token reference if it matches a known token
 *
 * @param value - Hex color value
 * @returns Token reference string or original value
 */
function convertToTokenReference(value: string): string {
  // Known color mappings (from the base color palette)
  const colorMap: Record<string, string> = {
    // Whites and blacks
    '#ffffff': '{colors.white}',
    '#000000': '{colors.black}',

    // Gray scale
    '#fafafa': '{colors.gray.50}',
    '#f4f4f5': '{colors.gray.100}',
    '#e4e4e7': '{colors.gray.200}',
    '#d4d4d8': '{colors.gray.300}',
    '#a1a1aa': '{colors.gray.400}',
    '#71717a': '{colors.gray.500}',
    '#52525b': '{colors.gray.600}',
    '#3f3f46': '{colors.gray.700}',
    '#27272a': '{colors.gray.800}',
    '#18181b': '{colors.gray.900}',
    '#111111': '{colors.gray.950}',

    // Red scale
    '#fef2f2': '{colors.red.50}',
    '#fee2e2': '{colors.red.100}',
    '#fecaca': '{colors.red.200}',
    '#fca5a5': '{colors.red.300}',
    '#f87171': '{colors.red.400}',
    '#ef4444': '{colors.red.500}',
    '#dc2626': '{colors.red.600}',
    '#991919': '{colors.red.700}',
    '#511111': '{colors.red.800}',
    '#300c0c': '{colors.red.900}',
    '#1f0808': '{colors.red.950}',

    // Orange scale
    '#fff7ed': '{colors.orange.50}',
    '#ffedd5': '{colors.orange.100}',
    '#fed7aa': '{colors.orange.200}',
    '#fdba74': '{colors.orange.300}',
    '#fb923c': '{colors.orange.400}',
    '#f97316': '{colors.orange.500}',
    '#ea580c': '{colors.orange.600}',
    '#92310a': '{colors.orange.700}',
    '#6c2710': '{colors.orange.800}',
    '#3b1106': '{colors.orange.900}',
    '#220a04': '{colors.orange.950}',

    // Yellow scale
    '#fefce8': '{colors.yellow.50}',
    '#fef9c3': '{colors.yellow.100}',
    '#fef08a': '{colors.yellow.200}',
    '#fde047': '{colors.yellow.300}',
    '#facc15': '{colors.yellow.400}',
    '#eab308': '{colors.yellow.500}',
    '#ca8a04': '{colors.yellow.600}',
    '#845209': '{colors.yellow.700}',
    '#713f12': '{colors.yellow.800}',
    '#422006': '{colors.yellow.900}',
    '#281304': '{colors.yellow.950}',

    // Green scale
    '#f0fdf4': '{colors.green.50}',
    '#dcfce7': '{colors.green.100}',
    '#bbf7d0': '{colors.green.200}',
    '#86efac': '{colors.green.300}',
    '#4ade80': '{colors.green.400}',
    '#22c55e': '{colors.green.500}',
    '#16a34a': '{colors.green.600}',
    '#116932': '{colors.green.700}',
    '#124a28': '{colors.green.800}',
    '#042713': '{colors.green.900}',
    '#03190c': '{colors.green.950}',

    // Blue scale
    '#eff6ff': '{colors.blue.50}',
    '#dbeafe': '{colors.blue.100}',
    '#bfdbfe': '{colors.blue.200}',
    '#a3cfff': '{colors.blue.300}',
    '#60a5fa': '{colors.blue.400}',
    '#3b82f6': '{colors.blue.500}',
    '#2563eb': '{colors.blue.600}',
    '#173da6': '{colors.blue.700}',
    '#1a3478': '{colors.blue.800}',
    '#14204a': '{colors.blue.900}',
    '#0c142e': '{colors.blue.950}',

    // Teal scale
    '#f0fdfa': '{colors.teal.50}',
    '#ccfbf1': '{colors.teal.100}',
    '#99f6e4': '{colors.teal.200}',
    '#5eead4': '{colors.teal.300}',
    '#2dd4bf': '{colors.teal.400}',
    '#14b8a6': '{colors.teal.500}',
    '#0d9488': '{colors.teal.600}',
    '#0c5d56': '{colors.teal.700}',
    '#114240': '{colors.teal.800}',
    '#032726': '{colors.teal.900}',
    '#021716': '{colors.teal.950}',

    // Cyan scale
    '#ecfeff': '{colors.cyan.50}',
    '#cffafe': '{colors.cyan.100}',
    '#a5f3fc': '{colors.cyan.200}',
    '#67e8f9': '{colors.cyan.300}',
    '#22d3ee': '{colors.cyan.400}',
    '#06b6d4': '{colors.cyan.500}',
    '#0891b2': '{colors.cyan.600}',
    '#0c5c72': '{colors.cyan.700}',
    '#134152': '{colors.cyan.800}',
    '#072a38': '{colors.cyan.900}',
    '#051b24': '{colors.cyan.950}',

    // Purple scale
    '#faf5ff': '{colors.purple.50}',
    '#f3e8ff': '{colors.purple.100}',
    '#e9d5ff': '{colors.purple.200}',
    '#d8b4fe': '{colors.purple.300}',
    '#c084fc': '{colors.purple.400}',
    '#a855f7': '{colors.purple.500}',
    '#9333ea': '{colors.purple.600}',
    '#641ba3': '{colors.purple.700}',
    '#4a1772': '{colors.purple.800}',
    '#2f0553': '{colors.purple.900}',
    '#1a032e': '{colors.purple.950}',

    // Pink scale
    '#fdf2f8': '{colors.pink.50}',
    '#fce7f3': '{colors.pink.100}',
    '#fbcfe8': '{colors.pink.200}',
    '#f9a8d4': '{colors.pink.300}',
    '#f472b6': '{colors.pink.400}',
    '#ec4899': '{colors.pink.500}',
    '#db2777': '{colors.pink.600}',
    '#a41752': '{colors.pink.700}',
    '#6d0e34': '{colors.pink.800}',
    '#45061f': '{colors.pink.900}',
    '#2c0514': '{colors.pink.950}',
  };

  // Return token reference if found, otherwise return original value
  return colorMap[value.toLowerCase()] || value;
}

/**
 * Format tokens as TypeScript code for theme/tokens.ts
 */
export function formatAsTokensTS(tokens: Record<string, any>, indent = 2): string {
  const spaces = ' '.repeat(indent);
  let result = '';

  for (const [key, value] of Object.entries(tokens)) {
    if (typeof value === 'object' && value.value !== undefined) {
      // Leaf node with value
      result += `${spaces}${key}: { value: "${value.value}" },\n`;
    } else {
      // Nested object
      result += `${spaces}${key}: {\n`;
      result += formatAsTokensTS(value, indent + 2);
      result += `${spaces}},\n`;
    }
  }

  return result;
}

/**
 * Format semantic tokens as JSON
 */
export function formatAsSemanticJSON(tokens: Record<string, any>): string {
  return JSON.stringify(tokens, null, 2);
}

// Export types for better IDE support
export interface FigmaTokensResponse {
  [key: string]: string;
}

export interface ChakraTokenValue {
  value: string | { _light: string; _dark: string };
}

export interface ChakraTokens {
  [key: string]: ChakraTokenValue | ChakraTokens;
}
