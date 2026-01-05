import { Box, Heading, VStack, Text, SimpleGrid, HStack } from "@chakra-ui/react";

// Typography token data
const fontFamilies = [
  {
    name: "Heading",
    token: "fonts.heading",
    value: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  },
  {
    name: "Body",
    token: "fonts.body",
    value: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  },
  {
    name: "Mono",
    token: "fonts.mono",
    value: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
];

const fontSizes = [
  { token: "2xs", value: "0.625rem", size: "10px" },
  { token: "xs", value: "0.75rem", size: "12px" },
  { token: "sm", value: "0.875rem", size: "14px" },
  { token: "md", value: "1rem", size: "16px" },
  { token: "lg", value: "1.125rem", size: "18px" },
  { token: "xl", value: "1.25rem", size: "20px" },
  { token: "2xl", value: "1.5rem", size: "24px" },
  { token: "3xl", value: "1.875rem", size: "30px" },
  { token: "4xl", value: "2.25rem", size: "36px" },
  { token: "5xl", value: "3rem", size: "48px" },
  { token: "6xl", value: "3.75rem", size: "60px" },
  { token: "7xl", value: "4.5rem", size: "72px" },
  { token: "8xl", value: "6rem", size: "96px" },
  { token: "9xl", value: "8rem", size: "128px" },
];

const fontWeights = [
  { token: "thin", value: "100" },
  { token: "extralight", value: "200" },
  { token: "light", value: "300" },
  { token: "normal", value: "400" },
  { token: "medium", value: "500" },
  { token: "semibold", value: "600" },
  { token: "bold", value: "700" },
  { token: "extrabold", value: "800" },
  { token: "black", value: "900" },
];

const lineHeights = [
  { token: "none", value: "1", description: "No line height" },
  { token: "shorter", value: "1.25", description: "Tight line height" },
  { token: "short", value: "1.375", description: "Short line height" },
  { token: "base", value: "1.5", description: "Base line height" },
  { token: "tall", value: "1.625", description: "Tall line height" },
  { token: "taller", value: "2", description: "Extra tall line height" },
];

const letterSpacings = [
  { token: "tighter", value: "-0.05em" },
  { token: "tight", value: "-0.025em" },
  { token: "normal", value: "0" },
  { token: "wide", value: "0.025em" },
  { token: "wider", value: "0.05em" },
  { token: "widest", value: "0.1em" },
];

export default function TypographyPage() {
  return (
    <Box p={8}>
      <VStack gap={12} align="start" maxW="1200px" mx="auto">
        {/* Header */}
        <VStack gap={3} align="start">
          <Heading size="4xl">Typography</Heading>
          <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.400" }}>
            Complete reference for typography tokens including fonts, sizes, weights,
            line heights, and letter spacing.
          </Text>
        </VStack>

        {/* Font Families */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Font Families</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Available font family tokens for different text contexts.
            </Text>
          </VStack>

          <VStack gap={4} align="start" w="full">
            {fontFamilies.map((font) => (
              <Box
                key={font.token}
                w="full"
                p={6}
                borderWidth="1px"
                borderRadius="lg"
                borderColor={{ base: "gray.200", _dark: "gray.700" }}
              >
                <VStack gap={3} align="start">
                  <HStack justify="space-between" w="full">
                    <Text fontWeight="semibold" fontSize="lg">
                      {font.name}
                    </Text>
                    <Text fontSize="sm" color={{ base: "gray.500", _dark: "gray.500" }}>
                      {font.token}
                    </Text>
                  </HStack>
                  <Text
                    fontSize="2xl"
                    fontFamily={font.name === "Mono" ? "mono" : font.name === "Heading" ? "heading" : "body"}
                  >
                    The quick brown fox jumps over the lazy dog
                  </Text>
                  <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }} fontFamily="mono">
                    {font.value}
                  </Text>
                </VStack>
              </Box>
            ))}
          </VStack>
        </VStack>

        {/* Font Sizes */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Font Sizes</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Typography scale from 2xs (10px) to 9xl (128px).
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
            {fontSizes.map((size) => (
              <Box
                key={size.token}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                borderColor={{ base: "gray.200", _dark: "gray.700" }}
              >
                <HStack justify="space-between" align="start" gap={4}>
                  <VStack gap={1} align="start" flex="1">
                    <Text fontWeight="semibold">{size.token}</Text>
                    <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                      {size.value} ({size.size})
                    </Text>
                  </VStack>
                  <Text fontSize={size.token} lineHeight="1">
                    Aa
                  </Text>
                </HStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Font Weights */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Font Weights</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Font weight scale from thin (100) to black (900).
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4} w="full">
            {fontWeights.map((weight) => (
              <Box
                key={weight.token}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                borderColor={{ base: "gray.200", _dark: "gray.700" }}
              >
                <VStack gap={2} align="start">
                  <HStack justify="space-between" w="full">
                    <Text fontSize="sm" fontWeight="semibold">
                      {weight.token}
                    </Text>
                    <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                      {weight.value}
                    </Text>
                  </HStack>
                  <Text fontSize="xl" fontWeight={weight.token as any}>
                    The quick brown fox
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Line Heights */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Line Heights</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Line height tokens for controlling vertical spacing between lines of text.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
            {lineHeights.map((lineHeight) => (
              <Box
                key={lineHeight.token}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                borderColor={{ base: "gray.200", _dark: "gray.700" }}
              >
                <VStack gap={3} align="start">
                  <HStack justify="space-between" w="full">
                    <Text fontWeight="semibold">{lineHeight.token}</Text>
                    <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                      {lineHeight.value}
                    </Text>
                  </HStack>
                  <Text lineHeight={lineHeight.token as any}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Text>
                  <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                    {lineHeight.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Letter Spacing */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Letter Spacing</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Letter spacing tokens for controlling horizontal spacing between characters.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
            {letterSpacings.map((spacing) => (
              <Box
                key={spacing.token}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                borderColor={{ base: "gray.200", _dark: "gray.700" }}
              >
                <VStack gap={3} align="start">
                  <HStack justify="space-between" w="full">
                    <Text fontWeight="semibold">{spacing.token}</Text>
                    <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                      {spacing.value}
                    </Text>
                  </HStack>
                  <Text fontSize="lg" letterSpacing={spacing.token as any}>
                    THE QUICK BROWN FOX JUMPS
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
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
{`import { Box, Text } from "@chakra-ui/react";

// Font size and weight
<Text fontSize="2xl" fontWeight="bold">
  Large bold heading
</Text>

// Line height and letter spacing
<Text lineHeight="tall" letterSpacing="wide">
  Paragraph with increased line height and spacing
</Text>

// Font family
<Text fontFamily="mono" fontSize="sm">
  Code-like text using monospace font
</Text>

// Combining multiple tokens
<Text
  fontSize="lg"
  fontWeight="semibold"
  lineHeight="short"
  letterSpacing="tight"
>
  Custom styled text
</Text>`}
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
