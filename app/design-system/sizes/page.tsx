import { Box, Heading, VStack, Text, SimpleGrid, HStack } from "@chakra-ui/react";

// Numerical sizes (subset for display)
const numericalSizes = [
  { token: "0", rem: "0rem", px: "0px" },
  { token: "1", rem: "0.25rem", px: "4px" },
  { token: "2", rem: "0.5rem", px: "8px" },
  { token: "3", rem: "0.75rem", px: "12px" },
  { token: "4", rem: "1rem", px: "16px" },
  { token: "6", rem: "1.5rem", px: "24px" },
  { token: "8", rem: "2rem", px: "32px" },
  { token: "12", rem: "3rem", px: "48px" },
  { token: "16", rem: "4rem", px: "64px" },
  { token: "24", rem: "6rem", px: "96px" },
  { token: "32", rem: "8rem", px: "128px" },
  { token: "48", rem: "12rem", px: "192px" },
  { token: "64", rem: "16rem", px: "256px" },
  { token: "96", rem: "24rem", px: "384px" },
];

// Container sizes
const containerSizes = [
  { token: "3xs", value: "14rem", px: "224px" },
  { token: "2xs", value: "16rem", px: "256px" },
  { token: "xs", value: "20rem", px: "320px" },
  { token: "sm", value: "24rem", px: "384px" },
  { token: "md", value: "28rem", px: "448px" },
  { token: "lg", value: "32rem", px: "512px" },
  { token: "xl", value: "36rem", px: "576px" },
  { token: "2xl", value: "42rem", px: "672px" },
  { token: "3xl", value: "48rem", px: "768px" },
  { token: "4xl", value: "56rem", px: "896px" },
  { token: "5xl", value: "64rem", px: "1024px" },
  { token: "6xl", value: "72rem", px: "1152px" },
  { token: "7xl", value: "80rem", px: "1280px" },
  { token: "8xl", value: "90rem", px: "1440px" },
];

// Fractional sizes
const fractionalSizes = [
  { token: "1/2", value: "50%" },
  { token: "1/3", value: "33.333333%" },
  { token: "2/3", value: "66.666667%" },
  { token: "1/4", value: "25%" },
  { token: "3/4", value: "75%" },
  { token: "1/5", value: "20%" },
  { token: "2/5", value: "40%" },
  { token: "3/5", value: "60%" },
  { token: "4/5", value: "80%" },
];

// Special sizes
const specialSizes = [
  { token: "full", value: "100%", description: "Full width/height" },
  { token: "min", value: "min-content", description: "Minimum content size" },
  { token: "max", value: "max-content", description: "Maximum content size" },
  { token: "fit", value: "fit-content", description: "Fit to content" },
  { token: "prose", value: "65ch", description: "Optimal reading width" },
];

interface SizeRowProps {
  token: string;
  rem: string;
  px: string;
}

function SizeRow({ token, rem, px }: SizeRowProps) {
  return (
    <Box w="full">
      <HStack gap={6} align="center" w="full">
        <Text fontWeight="semibold" fontSize="sm" minW="12">
          {token}
        </Text>
        <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }} minW="16">
          {rem}
        </Text>
        <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }} minW="12">
          {px}
        </Text>
        <Box
          h="24px"
          bg={{ base: "cyan.400", _dark: "cyan.600" }}
          borderRadius="sm"
          style={{
            width: `${parseFloat(token) * 4}px`,
            maxWidth: "100%",
          }}
        />
      </HStack>
    </Box>
  );
}

export default function SizesPage() {
  return (
    <Box p={8}>
      <VStack gap={12} align="start" maxW="1200px" mx="auto">
        {/* Header */}
        <VStack gap={3} align="start">
          <Heading size="4xl">Sizes</Heading>
          <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.400" }}>
            Width and height sizing tokens for consistent dimensions across your application.
            Includes numerical, container, fractional, and special sizing values.
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
              Sizes vs Spacing
            </Text>
            <Text fontSize="sm" color={{ base: "blue.800", _dark: "blue.300" }}>
              While sizes and spacing share many numerical values, use sizes for width/height
              properties and spacing for margin/padding. Container sizes (xs-8xl) are unique
              to sizing and great for max-width containers.
            </Text>
          </VStack>
        </Box>

        {/* Numerical Sizes */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Numerical Sizes</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Core sizing scale matching the spacing system (showing key values).
            </Text>
          </VStack>

          <VStack gap={4} w="full">
            {numericalSizes.map((size) => (
              <SizeRow
                key={size.token}
                token={size.token}
                rem={size.rem}
                px={size.px}
              />
            ))}
          </VStack>
        </VStack>

        {/* Container Sizes */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Container Sizes</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Named sizes perfect for setting max-width on layout containers.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4} w="full">
            {containerSizes.map((size) => (
              <Box
                key={size.token}
                p={4}
                borderWidth="1px"
                borderRadius="md"
                borderColor={{ base: "gray.200", _dark: "gray.700" }}
              >
                <VStack gap={2} align="start">
                  <HStack justify="space-between" w="full">
                    <Text fontWeight="semibold" fontSize="sm">
                      {size.token}
                    </Text>
                    <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                      {size.value}
                    </Text>
                  </HStack>
                  <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                    {size.px}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Fractional Sizes */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Fractional Sizes</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Percentage-based sizes for responsive layouts.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} gap={4} w="full">
            {fractionalSizes.map((size) => (
              <Box
                key={size.token}
                p={4}
                borderWidth="1px"
                borderRadius="md"
                borderColor={{ base: "gray.200", _dark: "gray.700" }}
              >
                <VStack gap={1} align="start">
                  <Text fontWeight="semibold" fontSize="sm">
                    {size.token}
                  </Text>
                  <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                    {size.value}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Special Sizes */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Special Values</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Utility sizing values for specific use cases.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
            {specialSizes.map((size) => (
              <Box
                key={size.token}
                p={4}
                borderWidth="1px"
                borderRadius="md"
                borderColor={{ base: "gray.200", _dark: "gray.700" }}
              >
                <VStack gap={2} align="start">
                  <HStack justify="space-between" w="full">
                    <Text fontWeight="semibold">{size.token}</Text>
                    <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                      {size.value}
                    </Text>
                  </HStack>
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    {size.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Common Use Cases */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Common Use Cases</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Practical examples of size tokens in layouts.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Fixed Width Container */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start">
                <Heading size="md">Fixed Width</Heading>
                <Box
                  w={64}
                  p={4}
                  bg={{ base: "blue.100", _dark: "blue.900" }}
                  borderRadius="md"
                >
                  <Text fontSize="sm">w={"{64}"} (256px)</Text>
                </Box>
              </VStack>
            </Box>

            {/* Max Width Container */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start" w="full">
                <Heading size="md">Max Width</Heading>
                <Box
                  maxW="md"
                  p={4}
                  bg={{ base: "green.100", _dark: "green.900" }}
                  borderRadius="md"
                  w="full"
                >
                  <Text fontSize="sm">maxW="md" (448px)</Text>
                </Box>
              </VStack>
            </Box>

            {/* Fractional Width */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start" w="full">
                <Heading size="md">Fractional Width</Heading>
                <HStack w="full" gap={2}>
                  <Box
                    w="1/2"
                    p={4}
                    bg={{ base: "purple.100", _dark: "purple.900" }}
                    borderRadius="md"
                  >
                    <Text fontSize="xs">1/2</Text>
                  </Box>
                  <Box
                    w="1/2"
                    p={4}
                    bg={{ base: "purple.100", _dark: "purple.900" }}
                    borderRadius="md"
                  >
                    <Text fontSize="xs">1/2</Text>
                  </Box>
                </HStack>
              </VStack>
            </Box>

            {/* Icons/Avatars */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start">
                <Heading size="md">Icons/Avatars</Heading>
                <HStack gap={3}>
                  <Box
                    w={8}
                    h={8}
                    bg={{ base: "orange.400", _dark: "orange.600" }}
                    borderRadius="md"
                  />
                  <Box
                    w={12}
                    h={12}
                    bg={{ base: "orange.400", _dark: "orange.600" }}
                    borderRadius="md"
                  />
                  <Box
                    w={16}
                    h={16}
                    bg={{ base: "orange.400", _dark: "orange.600" }}
                    borderRadius="md"
                  />
                </HStack>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  32px, 48px, 64px
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

// Numerical sizes
<Box w={64} h={32}>Fixed 256px × 128px</Box>

// Container sizes
<Box maxW="lg">Max width 512px</Box>
<Box maxW="4xl">Max width 896px</Box>

// Fractional sizes
<Box w="1/2">50% width</Box>
<Box w="2/3">66.67% width</Box>

// Special values
<Box w="full">100% width</Box>
<Box w="min">Min content width</Box>
<Box w="max">Max content width</Box>
<Box w="fit">Fit content width</Box>

// Min/Max constraints
<Box minW={64} maxW="2xl">
  Min 256px, Max 672px
</Box>

// Square elements
<Box w={16} h={16}>64px square</Box>`}
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
