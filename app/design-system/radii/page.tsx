import { Box, Heading, VStack, Text, SimpleGrid, HStack } from "@chakra-ui/react";

// Border radius token data
const radiiTokens = [
  { token: "none", value: "0", px: "0px", description: "No rounding" },
  { token: "2xs", value: "0.0625rem", px: "1px" },
  { token: "xs", value: "0.125rem", px: "2px" },
  { token: "sm", value: "0.25rem", px: "4px" },
  { token: "md", value: "0.375rem", px: "6px" },
  { token: "lg", value: "0.5rem", px: "8px" },
  { token: "xl", value: "0.75rem", px: "12px" },
  { token: "2xl", value: "1rem", px: "16px" },
  { token: "3xl", value: "1.5rem", px: "24px" },
  { token: "4xl", value: "2rem", px: "32px" },
  { token: "full", value: "9999px", px: "9999px", description: "Fully rounded (pill shape)" },
];

interface RadiusBoxProps {
  token: string;
  value: string;
  px: string;
  description?: string;
}

function RadiusBox({ token, value, px, description }: RadiusBoxProps) {
  return (
    <VStack gap={3} align="start">
      <Box
        w="80px"
        h="80px"
        bg={{ base: "purple.400", _dark: "purple.600" }}
        borderRadius={token}
        borderWidth="1px"
        borderColor={{ base: "gray.300", _dark: "gray.600" }}
      />
      <VStack gap={0} align="start">
        <Text fontWeight="semibold" fontSize="sm">
          {token}
        </Text>
        <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
          {value} ({px})
        </Text>
        {description && (
          <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }} fontStyle="italic">
            {description}
          </Text>
        )}
      </VStack>
    </VStack>
  );
}

export default function RadiiPage() {
  return (
    <Box p={8}>
      <VStack gap={12} align="start" maxW="1200px" mx="auto">
        {/* Header */}
        <VStack gap={3} align="start">
          <Heading size="4xl">Border Radius</Heading>
          <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.400" }}>
            Border radius tokens for creating rounded corners on elements, from sharp edges
            to fully circular shapes.
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
              When to Use
            </Text>
            <Text fontSize="sm" color={{ base: "blue.800", _dark: "blue.300" }}>
              Use smaller radii (2xs-sm) for subtle rounding on inputs and cards. Medium
              radii (md-xl) work well for buttons and badges. Larger radii (2xl-4xl) create
              dramatic rounding for special elements. Use "full" for circular avatars, badges,
              and pill-shaped buttons.
            </Text>
          </VStack>
        </Box>

        {/* Radius Scale */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Border Radius Scale</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Visual representation of all available border radius tokens.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} gap={8} w="full">
            {radiiTokens.map((radius) => (
              <RadiusBox
                key={radius.token}
                token={radius.token}
                value={radius.value}
                px={radius.px}
                description={radius.description}
              />
            ))}
          </SimpleGrid>
        </VStack>

        {/* Common Use Cases */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Common Use Cases</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Examples of border radius applied to common UI elements.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Buttons */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Buttons</Heading>
                <HStack gap={3} wrap="wrap">
                  <Box
                    px={4}
                    py={2}
                    bg={{ base: "blue.500", _dark: "blue.600" }}
                    color="white"
                    borderRadius="sm"
                    fontSize="sm"
                  >
                    Small radius
                  </Box>
                  <Box
                    px={4}
                    py={2}
                    bg={{ base: "blue.500", _dark: "blue.600" }}
                    color="white"
                    borderRadius="md"
                    fontSize="sm"
                  >
                    Medium radius
                  </Box>
                  <Box
                    px={4}
                    py={2}
                    bg={{ base: "blue.500", _dark: "blue.600" }}
                    color="white"
                    borderRadius="full"
                    fontSize="sm"
                  >
                    Pill shape
                  </Box>
                </HStack>
              </VStack>
            </Box>

            {/* Cards */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Cards</Heading>
                <VStack gap={3} w="full">
                  <Box
                    p={4}
                    bg={{ base: "gray.100", _dark: "gray.800" }}
                    borderRadius="md"
                    w="full"
                  >
                    <Text fontSize="sm">Card with md radius</Text>
                  </Box>
                  <Box
                    p={4}
                    bg={{ base: "gray.100", _dark: "gray.800" }}
                    borderRadius="lg"
                    w="full"
                  >
                    <Text fontSize="sm">Card with lg radius</Text>
                  </Box>
                </VStack>
              </VStack>
            </Box>

            {/* Avatars */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Avatars</Heading>
                <HStack gap={4}>
                  <Box
                    w="40px"
                    h="40px"
                    bg={{ base: "green.400", _dark: "green.600" }}
                    borderRadius="full"
                  />
                  <Box
                    w="48px"
                    h="48px"
                    bg={{ base: "green.400", _dark: "green.600" }}
                    borderRadius="full"
                  />
                  <Box
                    w="56px"
                    h="56px"
                    bg={{ base: "green.400", _dark: "green.600" }}
                    borderRadius="full"
                  />
                </HStack>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  Using borderRadius="full"
                </Text>
              </VStack>
            </Box>

            {/* Images */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Images</Heading>
                <HStack gap={3}>
                  <Box
                    w="80px"
                    h="80px"
                    bg={{ base: "orange.300", _dark: "orange.700" }}
                    borderRadius="lg"
                  />
                  <Box
                    w="80px"
                    h="80px"
                    bg={{ base: "orange.300", _dark: "orange.700" }}
                    borderRadius="2xl"
                  />
                </HStack>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  lg and 2xl radius
                </Text>
              </VStack>
            </Box>
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
{`import { Box } from "@chakra-ui/react";

// Subtle rounding
<Box borderRadius="sm">Slightly rounded</Box>

// Medium rounding (most common)
<Box borderRadius="md">Moderately rounded</Box>
<Box borderRadius="lg">Large rounded</Box>

// Dramatic rounding
<Box borderRadius="2xl">Very rounded</Box>

// Pill shape / circular
<Box borderRadius="full">Fully rounded</Box>

// Specific corners
<Box borderTopRadius="lg">Top corners rounded</Box>
<Box borderBottomRadius="lg">Bottom corners rounded</Box>
<Box borderLeftRadius="lg">Left corners rounded</Box>
<Box borderRightRadius="lg">Right corners rounded</Box>`}
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
