import { Box, Heading, VStack, Text, SimpleGrid, HStack, Stack } from "@chakra-ui/react";

// Color palette data
const colorPalettes = [
  {
    name: "Gray",
    key: "gray",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Red",
    key: "red",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Orange",
    key: "orange",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Yellow",
    key: "yellow",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Green",
    key: "green",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Teal",
    key: "teal",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Blue",
    key: "blue",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Cyan",
    key: "cyan",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Purple",
    key: "purple",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Pink",
    key: "pink",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
];

// Semantic color tokens
const semanticTokens = [
  {
    category: "Background",
    tokens: [
      { name: "bg", description: "Default background color" },
      { name: "bg.subtle", description: "Subtle background color" },
      { name: "bg.muted", description: "Muted background color" },
      { name: "bg.emphasized", description: "Emphasized background color" },
      { name: "bg.panel", description: "Panel background color" },
    ],
  },
  {
    category: "Foreground",
    tokens: [
      { name: "fg", description: "Default foreground (text) color" },
      { name: "fg.muted", description: "Muted foreground color" },
      { name: "fg.subtle", description: "Subtle foreground color" },
    ],
  },
  {
    category: "Border",
    tokens: [
      { name: "border", description: "Default border color" },
      { name: "border.muted", description: "Muted border color" },
      { name: "border.emphasized", description: "Emphasized border color" },
    ],
  },
  {
    category: "Status",
    tokens: [
      { name: "bg.error / fg.error", description: "Error state colors" },
      { name: "bg.warning / fg.warning", description: "Warning state colors" },
      { name: "bg.success / fg.success", description: "Success state colors" },
      { name: "bg.info / fg.info", description: "Info state colors" },
    ],
  },
];

interface ColorSwatchProps {
  color: string;
  label: string;
  shade: number;
}

function ColorSwatch({ color, label, shade }: ColorSwatchProps) {
  const isDark = shade >= 500;

  return (
    <VStack gap={0} align="stretch">
      <Box
        bg={color}
        h="60px"
        borderRadius="md"
        borderWidth="1px"
        borderColor={{ base: "gray.200", _dark: "gray.700" }}
      />
      <VStack gap={0} align="start" py={2}>
        <Text fontSize="sm" fontWeight="medium">
          {label}
        </Text>
        <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
          {shade}
        </Text>
      </VStack>
    </VStack>
  );
}

export default function ColorsPage() {
  return (
    <Box p={8}>
      <VStack gap={12} align="start" maxW="1200px" mx="auto">
        {/* Header */}
        <VStack gap={3} align="start">
          <Heading size="4xl">Colors</Heading>
          <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.400" }}>
            Chakra UI includes a comprehensive color palette with semantic tokens
            that automatically adapt to light and dark modes.
          </Text>
        </VStack>

        {/* Semantic Tokens Section */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Semantic Tokens</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Use semantic tokens for theme-aware colors that automatically adapt to light and dark modes.
            </Text>
          </VStack>

          <Box
            w="full"
            p={6}
            bg={{ base: "blue.50", _dark: "blue.950" }}
            borderRadius="lg"
            borderWidth="1px"
            borderColor={{ base: "blue.200", _dark: "blue.800" }}
          >
            <VStack gap={2} align="start">
              <Text fontWeight="semibold" color={{ base: "blue.900", _dark: "blue.200" }}>
                Best Practice
              </Text>
              <Text fontSize="sm" color={{ base: "blue.800", _dark: "blue.300" }}>
                Prefer semantic tokens like <Box as="code" px={1} bg={{ base: "blue.100", _dark: "blue.900" }} borderRadius="sm">bg.subtle</Box> over
                direct color tokens like <Box as="code" px={1} bg={{ base: "blue.100", _dark: "blue.900" }} borderRadius="sm">gray.50</Box> when building
                components that should adapt to theme changes.
              </Text>
            </VStack>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {semanticTokens.map((category) => (
              <Box
                key={category.category}
                p={6}
                borderWidth="1px"
                borderRadius="lg"
                borderColor={{ base: "gray.200", _dark: "gray.700" }}
              >
                <VStack gap={4} align="start">
                  <Heading size="md">{category.category}</Heading>
                  <VStack gap={3} align="start" w="full">
                    {category.tokens.map((token) => {
                      // Extract the base token name for applying colors
                      const tokenName = token.name.split(' ')[0].replace('/', '.');

                      // Determine if this is a bg, fg, or border token
                      const isBg = tokenName.startsWith('bg');
                      const isFg = tokenName.startsWith('fg');
                      const isBorder = tokenName.startsWith('border');

                      return (
                        <Box
                          key={token.name}
                          w="full"
                          p={3}
                          borderRadius="md"
                          bg={isBg ? tokenName : undefined}
                          color={isFg ? tokenName : undefined}
                          borderWidth={isBorder ? "2px" : "1px"}
                          borderColor={isBorder ? tokenName : { base: "gray.200", _dark: "gray.700" }}
                        >
                          <Text fontWeight="medium" fontSize="sm">
                            {token.name}
                          </Text>
                          <Text fontSize="xs" color={isFg ? undefined : { base: "gray.600", _dark: "gray.400" }}>
                            {token.description}
                          </Text>
                        </Box>
                      );
                    })}
                  </VStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Color Palettes Section */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Color Palettes</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Each color palette includes 11 shades from 50 (lightest) to 950 (darkest).
            </Text>
          </VStack>

          <VStack gap={8} align="start" w="full">
            {colorPalettes.map((palette) => (
              <Box key={palette.key} w="full">
                <Heading size="lg" mb={4}>
                  {palette.name}
                </Heading>
                <SimpleGrid columns={{ base: 3, sm: 4, md: 6, lg: 11 }} gap={4}>
                  {palette.shades.map((shade) => (
                    <ColorSwatch
                      key={shade}
                      color={`${palette.key}.${shade}`}
                      label={`${palette.key}.${shade}`}
                      shade={shade}
                    />
                  ))}
                </SimpleGrid>
              </Box>
            ))}
          </VStack>
        </VStack>

        {/* Alpha Colors Section */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Alpha Colors</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Semi-transparent variants for overlays and subtle effects.
            </Text>
          </VStack>

          <VStack gap={6} w="full">
            <Box w="full">
              <Heading size="lg" mb={4}>
                White Alpha
              </Heading>
              <SimpleGrid columns={{ base: 3, sm: 4, md: 6 }} gap={4}>
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <ColorSwatch
                    key={shade}
                    color={`whiteAlpha.${shade}`}
                    label={`whiteAlpha.${shade}`}
                    shade={shade}
                  />
                ))}
              </SimpleGrid>
            </Box>

            <Box w="full">
              <Heading size="lg" mb={4}>
                Black Alpha
              </Heading>
              <SimpleGrid columns={{ base: 3, sm: 4, md: 6 }} gap={4}>
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <ColorSwatch
                    key={shade}
                    color={`blackAlpha.${shade}`}
                    label={`blackAlpha.${shade}`}
                    shade={shade}
                  />
                ))}
              </SimpleGrid>
            </Box>
          </VStack>
        </VStack>

        {/* Usage Example */}
        <Box
          w="full"
          p={6}
          bg={{ base: "gray.50", _dark: "gray.900" }}
          borderRadius="lg"
        >
          <VStack gap={4} align="start">
            <Heading size="lg">Usage Example</Heading>
            <Box
              as="pre"
              p={4}
              bg={{ base: "gray.900", _dark: "gray.950" }}
              color="gray.50"
              borderRadius="md"
              overflow="auto"
              w="full"
              fontSize="sm"
            >
{`import { Box } from "@chakra-ui/react";

// Using semantic tokens (recommended)
<Box bg="bg.subtle" color="fg.muted">
  This adapts to theme automatically
</Box>

// Using direct color tokens
<Box bg="gray.100" color="gray.600">
  Specific color regardless of theme
</Box>

// Using with conditions for dark mode
<Box bg={{ base: "gray.50", _dark: "gray.900" }}>
  Custom light/dark mode colors
</Box>`}
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
