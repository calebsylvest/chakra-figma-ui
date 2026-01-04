import { createSystem, defaultConfig, defaultSystem } from "@chakra-ui/react";
import { tokens } from "./tokens";

// You can export the defaultSystem to see all default tokens
export { defaultSystem };

// Create custom system extending the default
export const system = createSystem(defaultConfig, {
  theme: {
    tokens,
    // You can also extend other aspects:
    // semanticTokens: {},
    // recipes: {},
    // textStyles: {},
  },
});
