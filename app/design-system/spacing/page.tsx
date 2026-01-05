import { Box, Heading, VStack, Text, SimpleGrid, HStack } from "@chakra-ui/react";

// Spacing token data
const spacingTokens = [
  { token: "0", rem: "0rem", px: "0px" },
  { token: "0.5", rem: "0.125rem", px: "2px" },
  { token: "1", rem: "0.25rem", px: "4px" },
  { token: "1.5", rem: "0.375rem", px: "6px" },
  { token: "2", rem: "0.5rem", px: "8px" },
  { token: "2.5", rem: "0.625rem", px: "10px" },
  { token: "3", rem: "0.75rem", px: "12px" },
  { token: "3.5", rem: "0.875rem", px: "14px" },
  { token: "4", rem: "1rem", px: "16px" },
  { token: "5", rem: "1.25rem", px: "20px" },
  { token: "6", rem: "1.5rem", px: "24px" },
  { token: "7", rem: "1.75rem", px: "28px" },
  { token: "8", rem: "2rem", px: "32px" },
  { token: "9", rem: "2.25rem", px: "36px" },
  { token: "10", rem: "2.5rem", px: "40px" },
  { token: "11", rem: "2.75rem", px: "44px" },
  { token: "12", rem: "3rem", px: "48px" },
  { token: "14", rem: "3.5rem", px: "56px" },
  { token: "16", rem: "4rem", px: "64px" },
  { token: "20", rem: "5rem", px: "80px" },
  { token: "24", rem: "6rem", px: "96px" },
  { token: "28", rem: "7rem", px: "112px" },
  { token: "32", rem: "8rem", px: "128px" },
  { token: "36", rem: "9rem", px: "144px" },
  { token: "40", rem: "10rem", px: "160px" },
  { token: "44", rem: "11rem", px: "176px" },
  { token: "48", rem: "12rem", px: "192px" },
  { token: "52", rem: "13rem", px: "208px" },
  { token: "56", rem: "14rem", px: "224px" },
  { token: "60", rem: "15rem", px: "240px" },
  { token: "64", rem: "16rem", px: "256px" },
  { token: "72", rem: "18rem", px: "288px" },
  { token: "80", rem: "20rem", px: "320px" },
  { token: "96", rem: "24rem", px: "384px" },
];

interface SpacingRowProps {
  token: string;
  rem: string;
  px: string;
}

function SpacingRow({ token, rem, px }: SpacingRowProps) {
  return (
    <Box
      // p={4}
      // borderWidth="1px"
      // borderRadius="md"
      // borderColor={{ base: "gray.200", _dark: "gray.700" }}
      w="full"
    >
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
          bg={{ base: "pink.400", _dark: "pink.600" }}
          borderRadius="sm"
          style={{
            width: `${parseFloat(token) * 16}px`,
          }}
        />
      </HStack>
    </Box>
  );
}

export default function SpacingPage() {
  return (
    <Box p={8}>
      <VStack gap={12} align="start" maxW="1200px" mx="auto">
        {/* Header */}
        <VStack gap={3} align="start">
          <Heading size="4xl">Spacing</Heading>
          <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.400" }}>
            Chakra UI uses a spacing scale based on a 4px (0.25rem) baseline for
            consistent padding, margin, and gap values throughout your application.
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
              Spacing Scale
            </Text>
            <Text fontSize="sm" color={{ base: "blue.800", _dark: "blue.300" }}>
              The spacing scale is based on a 4px (0.25rem) baseline, with fractional
              values (0.5, 1.5, etc.) for finer control. Use these tokens for margin,
              padding, gap, and other spacing properties.
            </Text>
          </VStack>
        </Box>

        {/* Spacing Tokens */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Spacing Tokens</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Visual representation of all available spacing values. The pink bar
              shows the actual size of each token.
            </Text>
          </VStack>

          <VStack gap={4} w="full">
            {spacingTokens.map((spacing) => (
              <SpacingRow
                key={spacing.token}
                token={spacing.token}
                rem={spacing.rem}
                px={spacing.px}
              />
            ))}
          </VStack>
        </VStack>

        {/* Usage Examples */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Common Use Cases</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              How spacing tokens are typically used in layouts.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6} w="full">
            {/* Padding Example */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Padding</Heading>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Control internal spacing within elements
                </Text>
                <Box
                  p={8}
                  bg={{ base: "purple.100", _dark: "purple.900" }}
                  borderRadius="md"
                  w="full"
                >
                  <Box
                    p={4}
                    bg={{ base: "white", _dark: "gray.950" }}
                    borderRadius="sm"
                  >
                    <Text fontSize="sm">p={"{8}"} (32px)</Text>
                  </Box>
                </Box>
              </VStack>
            </Box>

            {/* Margin Example */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Margin</Heading>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Control external spacing between elements
                </Text>
                <VStack gap={0} align="start" w="full">
                  <Box
                    p={4}
                    bg={{ base: "blue.100", _dark: "blue.900" }}
                    borderRadius="md"
                    w="full"
                  >
                    <Text fontSize="sm">Element 1</Text>
                  </Box>
                  <Box my={4} w="full" textAlign="center">
                    <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                      my={"{4}"} (16px)
                    </Text>
                  </Box>
                  <Box
                    p={4}
                    bg={{ base: "blue.100", _dark: "blue.900" }}
                    borderRadius="md"
                    w="full"
                  >
                    <Text fontSize="sm">Element 2</Text>
                  </Box>
                </VStack>
              </VStack>
            </Box>

            {/* Gap Example */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Gap (Flexbox/Grid)</Heading>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Space between flex/grid items
                </Text>
                <HStack gap={6} w="full">
                  <Box
                    p={4}
                    bg={{ base: "green.100", _dark: "green.900" }}
                    borderRadius="md"
                    flex="1"
                  >
                    <Text fontSize="sm">Item</Text>
                  </Box>
                  <Box
                    p={4}
                    bg={{ base: "green.100", _dark: "green.900" }}
                    borderRadius="md"
                    flex="1"
                  >
                    <Text fontSize="sm">Item</Text>
                  </Box>
                </HStack>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  gap={"{6}"} (24px)
                </Text>
              </VStack>
            </Box>

            {/* Width/Height Example */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Width/Height</Heading>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Set dimensions using spacing tokens
                </Text>
                <HStack gap={4} align="end">
                  <Box
                    w={16}
                    h={16}
                    bg={{ base: "orange.400", _dark: "orange.600" }}
                    borderRadius="md"
                  />
                  <Box
                    w={24}
                    h={24}
                    bg={{ base: "orange.400", _dark: "orange.600" }}
                    borderRadius="md"
                  />
                </HStack>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  w={"{16}"} h={"{16}"} and w={"{24}"} h={"{24}"}
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Code Example */}
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
{`import { Box, VStack, HStack } from "@chakra-ui/react";

// Padding
<Box p={4}>Padding of 16px</Box>
<Box px={6} py={3}>Horizontal 24px, Vertical 12px</Box>

// Margin
<Box m={4}>Margin of 16px</Box>
<Box mt={8} mb={4}>Top 32px, Bottom 16px</Box>

// Gap (Flexbox/Grid)
<VStack gap={6}>
  <div>Item with 24px gap</div>
  <div>Between items</div>
</VStack>

<HStack gap={3}>
  <div>Horizontal</div>
  <div>12px gap</div>
</HStack>

// Width and Height
<Box w={32} h={16}>Width 128px, Height 64px</Box>

// Combining spacing
<Box p={8} m={4} gap={6}>
  Multiple spacing properties
</Box>`}
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
