import { Box, Heading, VStack, Text, SimpleGrid, Code } from "@chakra-ui/react";

export default function SemanticTokensPage() {
  return (
    <Box p={8}>
      <VStack gap={12} align="start" maxW="1200px" mx="auto">
        {/* Header */}
        <VStack gap={3} align="start">
          <Heading size="4xl">Semantic Tokens</Heading>
          <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.400" }}>
            Theme-aware color tokens that automatically adapt to light and dark modes.
            Use semantic tokens for consistent, maintainable theming across your application.
          </Text>
        </VStack>

        {/* Info Box */}
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
              Why Use Semantic Tokens?
            </Text>
            <Text fontSize="sm" color={{ base: "blue.800", _dark: "blue.300" }}>
              Semantic tokens like <Code fontSize="xs">bg</Code>, <Code fontSize="xs">fg</Code>,
              and <Code fontSize="xs">border</Code> automatically switch between light and dark
              values based on the active theme. This eliminates the need for conditional color
              values and makes your code cleaner and more maintainable.
            </Text>
          </VStack>
        </Box>

        {/* Background Tokens */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Background Colors</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Semantic background tokens for surfaces and containers.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
            <Box
              p={6}
              bg="bg"
              borderWidth="1px"
              borderColor="border"
              borderRadius="lg"
            >
              <VStack gap={2} align="start">
                <Code fontSize="sm">bg</Code>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Default background - Main canvas color
                </Text>
              </VStack>
            </Box>

            <Box
              p={6}
              bg="bg.subtle"
              borderWidth="1px"
              borderColor="border"
              borderRadius="lg"
            >
              <VStack gap={2} align="start">
                <Code fontSize="sm">bg.subtle</Code>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Subtle background - For secondary surfaces
                </Text>
              </VStack>
            </Box>

            <Box
              p={6}
              bg="bg.muted"
              borderWidth="1px"
              borderColor="border"
              borderRadius="lg"
            >
              <VStack gap={2} align="start">
                <Code fontSize="sm">bg.muted</Code>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Muted background - For disabled states
                </Text>
              </VStack>
            </Box>

            <Box
              p={6}
              bg="bg.emphasized"
              borderWidth="1px"
              borderColor="border"
              borderRadius="lg"
            >
              <VStack gap={2} align="start">
                <Code fontSize="sm">bg.emphasized</Code>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Emphasized background - For highlighted areas
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Foreground Tokens */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Foreground (Text) Colors</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Semantic text color tokens with proper contrast.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
            <Box
              p={6}
              borderWidth="1px"
              borderColor="border"
              borderRadius="lg"
              bg={{ base: "white", _dark: "gray.800" }}
            >
              <VStack gap={2} align="start">
                <Code fontSize="sm">fg</Code>
                <Text fontSize="sm" color="fg">
                  Default foreground - Primary text color
                </Text>
              </VStack>
            </Box>

            <Box
              p={6}
              borderWidth="1px"
              borderColor="border"
              borderRadius="lg"
              bg={{ base: "white", _dark: "gray.800" }}
            >
              <VStack gap={2} align="start">
                <Code fontSize="sm">fg.muted</Code>
                <Text fontSize="sm" color="fg.muted">
                  Muted foreground - Secondary text
                </Text>
              </VStack>
            </Box>

            <Box
              p={6}
              borderWidth="1px"
              borderColor="border"
              borderRadius="lg"
              bg={{ base: "white", _dark: "gray.800" }}
            >
              <VStack gap={2} align="start">
                <Code fontSize="sm">fg.subtle</Code>
                <Text fontSize="sm" color="fg.subtle">
                  Subtle foreground - Tertiary text
                </Text>
              </VStack>
            </Box>

            <Box
              p={6}
              borderWidth="1px"
              borderColor="border"
              borderRadius="lg"
              bg={{ base: "white", _dark: "gray.800" }}
            >
              <VStack gap={2} align="start">
                <Code fontSize="sm">fg.emphasized</Code>
                <Text fontSize="sm" color="fg.emphasized" fontWeight="semibold">
                  Emphasized foreground - High contrast text
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Border Tokens */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Border Colors</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Semantic border tokens for dividers and outlines.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
            <Box
              p={6}
              borderWidth="2px"
              borderColor="border"
              borderRadius="lg"
              bg={{ base: "white", _dark: "gray.800" }}
            >
              <VStack gap={2} align="start">
                <Code fontSize="sm">border</Code>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Default border - Standard borders
                </Text>
              </VStack>
            </Box>

            <Box
              p={6}
              borderWidth="2px"
              borderColor="border.muted"
              borderRadius="lg"
              bg={{ base: "white", _dark: "gray.800" }}
            >
              <VStack gap={2} align="start">
                <Code fontSize="sm">border.muted</Code>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Muted border - Subtle dividers
                </Text>
              </VStack>
            </Box>

            <Box
              p={6}
              borderWidth="2px"
              borderColor="border.subtle"
              borderRadius="lg"
              bg={{ base: "white", _dark: "gray.800" }}
            >
              <VStack gap={2} align="start">
                <Code fontSize="sm">border.subtle</Code>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Subtle border - Very light dividers
                </Text>
              </VStack>
            </Box>

            <Box
              p={6}
              borderWidth="2px"
              borderColor="border.emphasized"
              borderRadius="lg"
              bg={{ base: "white", _dark: "gray.800" }}
            >
              <VStack gap={2} align="start">
                <Code fontSize="sm">border.emphasized</Code>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Emphasized border - Strong outlines
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Status Colors */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Status Colors</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Semantic tokens for feedback states and alerts.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
            {/* Error */}
            <Box
              p={6}
              bg="bg.error"
              borderRadius="lg"
              borderWidth="1px"
              borderColor="border.error"
            >
              <VStack gap={2} align="start">
                <Code fontSize="sm" bg={{ base: "red.100", _dark: "red.950" }} px={2} py={1} borderRadius="sm">
                  bg.error + fg.error
                </Code>
                <Text fontSize="sm" color="fg.error" fontWeight="medium">
                  Error state - For error messages and destructive actions
                </Text>
              </VStack>
            </Box>

            {/* Warning */}
            <Box
              p={6}
              bg="bg.warning"
              borderRadius="lg"
              borderWidth="1px"
              borderColor="border.warning"
            >
              <VStack gap={2} align="start">
                <Code fontSize="sm" bg={{ base: "orange.100", _dark: "orange.950" }} px={2} py={1} borderRadius="sm">
                  bg.warning + fg.warning
                </Code>
                <Text fontSize="sm" color="fg.warning" fontWeight="medium">
                  Warning state - For cautionary messages
                </Text>
              </VStack>
            </Box>

            {/* Success */}
            <Box
              p={6}
              bg="bg.success"
              borderRadius="lg"
              borderWidth="1px"
              borderColor="border.success"
            >
              <VStack gap={2} align="start">
                <Code fontSize="sm" bg={{ base: "green.100", _dark: "green.950" }} px={2} py={1} borderRadius="sm">
                  bg.success + fg.success
                </Code>
                <Text fontSize="sm" color="fg.success" fontWeight="medium">
                  Success state - For success confirmations
                </Text>
              </VStack>
            </Box>

            {/* Info */}
            <Box
              p={6}
              bg="bg.info"
              borderRadius="lg"
              borderWidth="1px"
              borderColor="border.info"
            >
              <VStack gap={2} align="start">
                <Code fontSize="sm" bg={{ base: "blue.100", _dark: "blue.950" }} px={2} py={1} borderRadius="sm">
                  bg.info + fg.info
                </Code>
                <Text fontSize="sm" color="fg.info" fontWeight="medium">
                  Info state - For informational messages
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Usage Comparison */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Usage Comparison</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Semantic tokens vs. direct color values.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* With Semantic Tokens (Recommended) */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "green.200", _dark: "green.800" }}
              bg={{ base: "green.50", _dark: "green.950" }}
            >
              <VStack gap={4} align="start">
                <VStack gap={1} align="start">
                  <Text fontWeight="semibold" fontSize="sm" color={{ base: "green.900", _dark: "green.200" }}>
                    ✅ With Semantic Tokens (Recommended)
                  </Text>
                  <Text fontSize="xs" color={{ base: "green.700", _dark: "green.300" }}>
                    Automatically adapts to theme changes
                  </Text>
                </VStack>
                <Box
                  as="pre"
                  p={4}
                  bg={{ base: "gray.900", _dark: "gray.950" }}
                  color="gray.50"
                  borderRadius="md"
                  overflow="auto"
                  w="full"
                  fontSize="xs"
                >
{`<Box bg="bg.subtle" color="fg">
  Content
</Box>

<Box
  borderWidth="1px"
  borderColor="border"
>
  Border content
</Box>`}
                </Box>
              </VStack>
            </Box>

            {/* Without Semantic Tokens */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "red.200", _dark: "red.800" }}
              bg={{ base: "red.50", _dark: "red.950" }}
            >
              <VStack gap={4} align="start">
                <VStack gap={1} align="start">
                  <Text fontWeight="semibold" fontSize="sm" color={{ base: "red.900", _dark: "red.200" }}>
                    ❌ Without Semantic Tokens
                  </Text>
                  <Text fontSize="xs" color={{ base: "red.700", _dark: "red.300" }}>
                    Requires manual conditional values
                  </Text>
                </VStack>
                <Box
                  as="pre"
                  p={4}
                  bg={{ base: "gray.900", _dark: "gray.950" }}
                  color="gray.50"
                  borderRadius="md"
                  overflow="auto"
                  w="full"
                  fontSize="xs"
                >
{`<Box
  bg={{ base: "gray.50", _dark: "gray.900" }}
  color={{ base: "gray.900", _dark: "white" }}
>
  Content
</Box>

<Box
  borderWidth="1px"
  borderColor={{
    base: "gray.200",
    _dark: "gray.700"
  }}
>
  Border content
</Box>`}
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Common Patterns */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Common Patterns</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Real-world examples using semantic tokens.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Card Pattern */}
            <Box
              p={6}
              bg="bg.subtle"
              borderWidth="1px"
              borderColor="border"
              borderRadius="lg"
            >
              <VStack gap={3} align="start">
                <Heading size="md" color="fg.emphasized">Card Component</Heading>
                <Text fontSize="sm" color="fg.muted">
                  This card uses semantic tokens for all colors. It automatically
                  adapts to light and dark themes without any conditional logic.
                </Text>
                <Box
                  px={4}
                  py={2}
                  bg="bg.emphasized"
                  color="fg.emphasized"
                  borderRadius="md"
                  fontSize="sm"
                  fontWeight="medium"
                >
                  Action Button
                </Box>
              </VStack>
            </Box>

            {/* Alert Pattern */}
            <Box
              p={6}
              bg="bg.warning"
              borderWidth="1px"
              borderColor="border.warning"
              borderRadius="lg"
            >
              <VStack gap={2} align="start">
                <Heading size="md" color="fg.warning">⚠️ Warning Alert</Heading>
                <Text fontSize="sm" color="fg.warning">
                  Using status semantic tokens ensures consistent alert styling
                  across your entire application in both light and dark modes.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Best Practices */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Best Practices</Heading>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
            <Box
              p={5}
              borderLeftWidth="4px"
              borderLeftColor={{ base: "green.500", _dark: "green.400" }}
              bg={{ base: "green.50", _dark: "green.950" }}
              borderRadius="md"
            >
              <VStack gap={1} align="start">
                <Text fontWeight="semibold" fontSize="sm" color={{ base: "green.900", _dark: "green.200" }}>
                  ✅ Do: Use semantic tokens by default
                </Text>
                <Text fontSize="sm" color={{ base: "green.800", _dark: "green.300" }}>
                  Prefer <Code fontSize="xs">bg</Code>, <Code fontSize="xs">fg</Code>, <Code fontSize="xs">border</Code> for
                  theme-aware components
                </Text>
              </VStack>
            </Box>

            <Box
              p={5}
              borderLeftWidth="4px"
              borderLeftColor={{ base: "red.500", _dark: "red.400" }}
              bg={{ base: "red.50", _dark: "red.950" }}
              borderRadius="md"
            >
              <VStack gap={1} align="start">
                <Text fontWeight="semibold" fontSize="sm" color={{ base: "red.900", _dark: "red.200" }}>
                  ❌ Don't: Mix semantic and direct values
                </Text>
                <Text fontSize="sm" color={{ base: "red.800", _dark: "red.300" }}>
                  Be consistent - use either semantic or direct colors
                </Text>
              </VStack>
            </Box>

            <Box
              p={5}
              borderLeftWidth="4px"
              borderLeftColor={{ base: "green.500", _dark: "green.400" }}
              bg={{ base: "green.50", _dark: "green.950" }}
              borderRadius="md"
            >
              <VStack gap={1} align="start">
                <Text fontWeight="semibold" fontSize="sm" color={{ base: "green.900", _dark: "green.200" }}>
                  ✅ Do: Use status tokens for feedback
                </Text>
                <Text fontSize="sm" color={{ base: "green.800", _dark: "green.300" }}>
                  Leverage error, warning, success, info tokens
                </Text>
              </VStack>
            </Box>

            <Box
              p={5}
              borderLeftWidth="4px"
              borderLeftColor={{ base: "green.500", _dark: "green.400" }}
              bg={{ base: "green.50", _dark: "green.950" }}
              borderRadius="md"
            >
              <VStack gap={1} align="start">
                <Text fontWeight="semibold" fontSize="sm" color={{ base: "green.900", _dark: "green.200" }}>
                  ✅ Do: Use direct colors for brand elements
                </Text>
                <Text fontSize="sm" color={{ base: "green.800", _dark: "green.300" }}>
                  Brand colors like <Code fontSize="xs">blue.500</Code> can stay fixed across themes
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </VStack>
    </Box>
  );
}
