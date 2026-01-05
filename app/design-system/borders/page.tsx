import { Box, Heading, VStack, Text, SimpleGrid, HStack } from "@chakra-ui/react";

// Border width tokens
const borderTokens = [
  { token: "xs", value: "0.5px", description: "Hair-thin border" },
  { token: "sm", value: "1px", description: "Standard thin border" },
  { token: "md", value: "2px", description: "Medium border" },
  { token: "lg", value: "4px", description: "Thick border" },
  { token: "xl", value: "8px", description: "Very thick border" },
];

// Border styles
const borderStyles = [
  { name: "solid", description: "Continuous line" },
  { name: "dashed", description: "Dashed line" },
  { name: "dotted", description: "Dotted line" },
  { name: "double", description: "Double line" },
];

interface BorderWidthProps {
  token: string;
  value: string;
  description: string;
}

function BorderWidth({ token, value, description }: BorderWidthProps) {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      borderColor={{ base: "gray.200", _dark: "gray.700" }}
    >
      <VStack gap={3} align="start" w="full">
        <HStack justify="space-between" w="full">
          <Text fontWeight="semibold" fontSize="sm">
            {token}
          </Text>
          <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
            {value}
          </Text>
        </HStack>
        <Box
          h="2px"
          w="full"
          bg={{ base: "purple.500", _dark: "purple.400" }}
          style={{ height: value }}
        />
        <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
          {description}
        </Text>
      </VStack>
    </Box>
  );
}

export default function BordersPage() {
  return (
    <Box p={8}>
      <VStack gap={12} align="start" maxW="1200px" mx="auto">
        {/* Header */}
        <VStack gap={3} align="start">
          <Heading size="4xl">Borders</Heading>
          <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.400" }}>
            Border width and style tokens for creating visual boundaries and
            separations between elements.
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
              Best Practice
            </Text>
            <Text fontSize="sm" color={{ base: "blue.800", _dark: "blue.300" }}>
              Use sm (1px) for most borders as it's the web standard. Reserve thicker
              borders (md-xl) for emphasis or decorative elements. Combine border width,
              style, and semantic color tokens for flexible border styling.
            </Text>
          </VStack>
        </Box>

        {/* Border Widths */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Border Widths</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Available border width tokens from hair-thin to very thick.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4} w="full">
            {borderTokens.map((border) => (
              <BorderWidth
                key={border.token}
                token={border.token}
                value={border.value}
                description={border.description}
              />
            ))}
          </SimpleGrid>
        </VStack>

        {/* Border Styles */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Border Styles</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Different border styles for various visual effects.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {borderStyles.map((style) => (
              <Box
                key={style.name}
                p={6}
                borderWidth="2px"
                borderStyle={style.name as any}
                borderColor={{ base: "purple.500", _dark: "purple.400" }}
                borderRadius="md"
              >
                <VStack gap={2} align="start">
                  <Text fontWeight="semibold">{style.name}</Text>
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    {style.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Directional Borders */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Directional Borders</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Apply borders to specific sides of elements.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4} w="full">
            <Box
              p={6}
              borderTopWidth="4px"
              borderTopColor={{ base: "blue.500", _dark: "blue.400" }}
              bg={{ base: "gray.50", _dark: "gray.800" }}
              borderRadius="md"
            >
              <Text fontSize="sm" fontWeight="medium">
                Top Border
              </Text>
              <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                borderTopWidth
              </Text>
            </Box>

            <Box
              p={6}
              borderBottomWidth="4px"
              borderBottomColor={{ base: "green.500", _dark: "green.400" }}
              bg={{ base: "gray.50", _dark: "gray.800" }}
              borderRadius="md"
            >
              <Text fontSize="sm" fontWeight="medium">
                Bottom Border
              </Text>
              <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                borderBottomWidth
              </Text>
            </Box>

            <Box
              p={6}
              borderLeftWidth="4px"
              borderLeftColor={{ base: "purple.500", _dark: "purple.400" }}
              bg={{ base: "gray.50", _dark: "gray.800" }}
              borderRadius="md"
            >
              <Text fontSize="sm" fontWeight="medium">
                Left Border
              </Text>
              <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                borderLeftWidth
              </Text>
            </Box>

            <Box
              p={6}
              borderRightWidth="4px"
              borderRightColor={{ base: "orange.500", _dark: "orange.400" }}
              bg={{ base: "gray.50", _dark: "gray.800" }}
              borderRadius="md"
            >
              <Text fontSize="sm" fontWeight="medium">
                Right Border
              </Text>
              <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                borderRightWidth
              </Text>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Common Use Cases */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Common Use Cases</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Typical border applications in UI components.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Card Borders */}
            <Box
              p={6}
              borderWidth="sm"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start">
                <Heading size="md">Card with Border</Heading>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Using borderWidth="sm" (1px) for subtle separation
                </Text>
              </VStack>
            </Box>

            {/* Input Borders */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start" w="full">
                <Heading size="md">Input Fields</Heading>
                <Box
                  p={3}
                  borderWidth="sm"
                  borderRadius="md"
                  borderColor={{ base: "gray.300", _dark: "gray.600" }}
                  w="full"
                  _hover={{
                    borderColor: { base: "blue.500", _dark: "blue.400" },
                  }}
                  transition="border-color 0.2s"
                >
                  <Text fontSize="sm" color={{ base: "gray.400", _dark: "gray.500" }}>
                    Input placeholder
                  </Text>
                </Box>
              </VStack>
            </Box>

            {/* Dividers */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start" w="full">
                <Heading size="md">Dividers</Heading>
                <VStack gap={3} w="full">
                  <Text fontSize="sm">Content above</Text>
                  <Box
                    w="full"
                    borderBottomWidth="sm"
                    borderBottomColor={{ base: "gray.200", _dark: "gray.700" }}
                  />
                  <Text fontSize="sm">Content below</Text>
                </VStack>
              </VStack>
            </Box>

            {/* Accent Borders */}
            <Box
              p={6}
              borderLeftWidth="lg"
              borderLeftColor={{ base: "purple.500", _dark: "purple.400" }}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={2} align="start">
                <Heading size="md">Accent Border</Heading>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Thick left border for visual emphasis
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

// Standard border
<Box borderWidth="sm">1px border</Box>
<Box borderWidth="md">2px border</Box>

// Border with style
<Box borderWidth="sm" borderStyle="dashed">
  Dashed border
</Box>

// Border with color
<Box
  borderWidth="sm"
  borderColor={{ base: "gray.300", _dark: "gray.700" }}
>
  Border with color
</Box>

// Directional borders
<Box borderTopWidth="lg">Top border only</Box>
<Box borderBottomWidth="sm">Bottom border only</Box>
<Box borderLeftWidth="md">Left border only</Box>

// Shorthand (width + style)
<Box border="1px solid" borderColor="gray.200">
  Shorthand border
</Box>

// Hover state
<Box
  borderWidth="sm"
  borderColor="gray.300"
  _hover={{ borderColor: "blue.500" }}
>
  Interactive border
</Box>`}
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
