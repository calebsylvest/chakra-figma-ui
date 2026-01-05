import { Box, Heading, VStack, Text, SimpleGrid, HStack } from "@chakra-ui/react";

// Shadow tokens (based on typical design system values)
const shadowTokens = [
  { token: "xs", description: "Smallest shadow", use: "Subtle elevation, hover states" },
  { token: "sm", description: "Small shadow", use: "Cards, buttons, small elevations" },
  { token: "md", description: "Medium shadow", use: "Dropdowns, popovers, raised cards" },
  { token: "lg", description: "Large shadow", use: "Modals, drawers, significant elevation" },
  { token: "xl", description: "Extra large shadow", use: "High elevation, floating panels" },
  { token: "2xl", description: "Maximum shadow", use: "Maximum depth, hero elements" },
];

const specialShadows = [
  { token: "inner", description: "Inner shadow", use: "Inset/pressed effects, inputs" },
  { token: "outline", description: "Outline shadow", use: "Focus states, accessibility" },
];

interface ShadowBoxProps {
  token: string;
  description: string;
  use: string;
}

function ShadowBox({ token, description, use }: ShadowBoxProps) {
  return (
    <VStack gap={3} align="start" w="full">
      <Box
        w="full"
        h="120px"
        bg={{ base: "white", _dark: "gray.800" }}
        borderRadius="lg"
        shadow={token}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderWidth="1px"
        borderColor={{ base: "gray.100", _dark: "gray.700" }}
      >
        <VStack gap={0}>
          <Text fontWeight="bold" fontSize="lg" color={{ base: "gray.900", _dark: "white" }}>
            {token}
          </Text>
          <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
            shadow="{token}"
          </Text>
        </VStack>
      </Box>

      <VStack gap={1} align="start">
        <Text fontSize="sm" fontWeight="semibold" color={{ base: "gray.900", _dark: "white" }}>
          {description}
        </Text>
        <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
          {use}
        </Text>
      </VStack>
    </VStack>
  );
}

export default function ShadowsPage() {
  return (
    <Box p={8}>
      <VStack gap={12} align="start" maxW="1200px" mx="auto">
        {/* Header */}
        <VStack gap={3} align="start">
          <Heading size="4xl">Shadows</Heading>
          <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.400" }}>
            Elevation and shadow tokens for creating depth, hierarchy, and visual separation
            in your interface.
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
              Elevation Hierarchy
            </Text>
            <Text fontSize="sm" color={{ base: "blue.800", _dark: "blue.300" }}>
              Use shadows to communicate elevation and importance. Start with sm for subtle
              elevation, md for standard components, lg for floating elements, and xl-2xl for
              high-priority overlays. Dark mode shadows are automatically adjusted for better
              visibility against dark backgrounds.
            </Text>
          </VStack>
        </Box>

        {/* Shadow Scale */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Shadow Scale</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Complete shadow progression from subtle to dramatic elevation.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
            {shadowTokens.map((shadow) => (
              <ShadowBox
                key={shadow.token}
                token={shadow.token}
                description={shadow.description}
                use={shadow.use}
              />
            ))}
          </SimpleGrid>
        </VStack>

        {/* Special Shadows */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Special Shadows</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Functional shadows for specific use cases.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w="full">
            {/* Inner Shadow */}
            <VStack gap={3} align="start" w="full">
              <Box
                w="full"
                h="120px"
                bg={{ base: "gray.100", _dark: "gray.700" }}
                borderRadius="lg"
                shadow="inner"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <VStack gap={0}>
                  <Text fontWeight="bold" fontSize="lg" color={{ base: "gray.900", _dark: "white" }}>
                    inner
                  </Text>
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    shadow="inner"
                  </Text>
                </VStack>
              </Box>

              <VStack gap={1} align="start">
                <Text fontSize="sm" fontWeight="semibold" color={{ base: "gray.900", _dark: "white" }}>
                  Inner shadow
                </Text>
                <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Inset/pressed effects, inputs
                </Text>
              </VStack>
            </VStack>

            {/* Outline Shadow */}
            <VStack gap={3} align="start" w="full">
              <Box
                w="full"
                h="120px"
                bg={{ base: "white", _dark: "gray.800" }}
                borderRadius="lg"
                shadow="outline"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <VStack gap={0}>
                  <Text fontWeight="bold" fontSize="lg" color={{ base: "gray.900", _dark: "white" }}>
                    outline
                  </Text>
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    shadow="outline"
                  </Text>
                </VStack>
              </Box>

              <VStack gap={1} align="start">
                <Text fontSize="sm" fontWeight="semibold" color={{ base: "gray.900", _dark: "white" }}>
                  Outline shadow
                </Text>
                <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Focus states, accessibility
                </Text>
              </VStack>
            </VStack>
          </SimpleGrid>
        </VStack>

        {/* Dark Mode Comparison */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Light vs Dark Mode</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Shadows automatically adjust for optimal visibility in both themes.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Light Mode Simulation */}
            <Box
              p={6}
              bg={{ base: "gray.50", _dark: "gray.900" }}
              borderRadius="lg"
              borderWidth="1px"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Text fontWeight="semibold" fontSize="sm">
                  Light Mode Shadows
                </Text>
                <VStack gap={3} w="full">
                  <Box
                    w="full"
                    p={4}
                    bg="white"
                    borderRadius="md"
                    shadow="sm"
                  >
                    <Text fontSize="sm" color="gray.700">Small elevation</Text>
                  </Box>
                  <Box
                    w="full"
                    p={4}
                    bg="white"
                    borderRadius="md"
                    shadow="md"
                  >
                    <Text fontSize="sm" color="gray.700">Medium elevation</Text>
                  </Box>
                  <Box
                    w="full"
                    p={4}
                    bg="white"
                    borderRadius="md"
                    shadow="lg"
                  >
                    <Text fontSize="sm" color="gray.700">Large elevation</Text>
                  </Box>
                </VStack>
              </VStack>
            </Box>

            {/* Dark Mode Simulation */}
            <Box
              p={6}
              bg={{ base: "gray.900", _dark: "gray.950" }}
              borderRadius="lg"
              borderWidth="1px"
              borderColor={{ base: "gray.700", _dark: "gray.800" }}
            >
              <VStack gap={4} align="start">
                <Text fontWeight="semibold" fontSize="sm" color="white">
                  Dark Mode Shadows
                </Text>
                <VStack gap={3} w="full">
                  <Box
                    w="full"
                    p={4}
                    bg="gray.800"
                    borderRadius="md"
                    shadow="sm"
                  >
                    <Text fontSize="sm" color="gray.300">Small elevation</Text>
                  </Box>
                  <Box
                    w="full"
                    p={4}
                    bg="gray.800"
                    borderRadius="md"
                    shadow="md"
                  >
                    <Text fontSize="sm" color="gray.300">Medium elevation</Text>
                  </Box>
                  <Box
                    w="full"
                    p={4}
                    bg="gray.800"
                    borderRadius="md"
                    shadow="lg"
                  >
                    <Text fontSize="sm" color="gray.300">Large elevation</Text>
                  </Box>
                </VStack>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Common Use Cases */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Common Use Cases</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Practical applications of shadow tokens.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Cards */}
            <Box
              p={6}
              bg={{ base: "white", _dark: "gray.800" }}
              borderRadius="lg"
              shadow="sm"
              borderWidth="1px"
              borderColor={{ base: "gray.100", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start">
                <Heading size="md">Card Component</Heading>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Using shadow="sm" for subtle elevation
                </Text>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  Standard for most card layouts
                </Text>
              </VStack>
            </Box>

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
                    borderRadius="md"
                    shadow="sm"
                    fontSize="sm"
                    cursor="pointer"
                    _hover={{ shadow: "md" }}
                  >
                    Default
                  </Box>
                  <Box
                    px={4}
                    py={2}
                    bg={{ base: "purple.500", _dark: "purple.600" }}
                    color="white"
                    borderRadius="md"
                    shadow="md"
                    fontSize="sm"
                    cursor="pointer"
                  >
                    Elevated
                  </Box>
                </HStack>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  sm for default, md on hover or for emphasis
                </Text>
              </VStack>
            </Box>

            {/* Dropdowns */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start" w="full">
                <Heading size="md">Dropdown Menu</Heading>
                <Box
                  w="full"
                  p={3}
                  bg={{ base: "white", _dark: "gray.800" }}
                  borderRadius="md"
                  shadow="md"
                  borderWidth="1px"
                  borderColor={{ base: "gray.200", _dark: "gray.700" }}
                >
                  <VStack gap={1} align="start">
                    <Text fontSize="sm">Menu Item 1</Text>
                    <Text fontSize="sm">Menu Item 2</Text>
                    <Text fontSize="sm">Menu Item 3</Text>
                  </VStack>
                </Box>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  shadow="md" for floating menus
                </Text>
              </VStack>
            </Box>

            {/* Modals */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start" w="full">
                <Heading size="md">Modal Dialog</Heading>
                <Box
                  w="full"
                  p={4}
                  bg={{ base: "white", _dark: "gray.800" }}
                  borderRadius="lg"
                  shadow="xl"
                  borderWidth="1px"
                  borderColor={{ base: "gray.200", _dark: "gray.700" }}
                >
                  <Text fontSize="sm" fontWeight="semibold">
                    Important Dialog
                  </Text>
                  <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }} mt={1}>
                    High elevation content
                  </Text>
                </Box>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  shadow="xl" or "2xl" for maximum depth
                </Text>
              </VStack>
            </Box>

            {/* Input States */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start" w="full">
                <Heading size="md">Input Field</Heading>
                <Box
                  w="full"
                  p={3}
                  bg={{ base: "gray.50", _dark: "gray.700" }}
                  borderRadius="md"
                  shadow="inner"
                >
                  <Text fontSize="sm" color={{ base: "gray.400", _dark: "gray.500" }}>
                    Input placeholder
                  </Text>
                </Box>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  shadow="inner" for inset effect
                </Text>
              </VStack>
            </Box>

            {/* Focus States */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start" w="full">
                <Heading size="md">Focus State</Heading>
                <Box
                  w="full"
                  p={3}
                  bg={{ base: "white", _dark: "gray.800" }}
                  borderRadius="md"
                  shadow="outline"
                  borderWidth="1px"
                  borderColor={{ base: "blue.500", _dark: "blue.400" }}
                >
                  <Text fontSize="sm">Focused element</Text>
                </Box>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  shadow="outline" for accessibility
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

// Card with subtle elevation
<Box
  p={6}
  bg={{ base: "white", _dark: "gray.800" }}
  borderRadius="lg"
  shadow="sm"
>
  Card content
</Box>

// Button with hover shadow
<Box
  as="button"
  px={4}
  py={2}
  bg="blue.500"
  color="white"
  borderRadius="md"
  shadow="sm"
  _hover={{ shadow: "md" }}
>
  Click me
</Box>

// Dropdown menu
<Box
  position="absolute"
  top="100%"
  p={3}
  bg="white"
  borderRadius="md"
  shadow="md"
>
  Menu items
</Box>

// Modal dialog
<Box
  p={6}
  bg="white"
  borderRadius="lg"
  shadow="xl"
>
  Modal content
</Box>

// Input with inner shadow
<Box
  as="input"
  p={3}
  bg="gray.50"
  borderRadius="md"
  shadow="inner"
/>

// Focus state
<Box
  as="input"
  p={3}
  borderRadius="md"
  _focus={{
    shadow: "outline",
    borderColor: "blue.500"
  }}
/>

// Maximum elevation
<Box
  p={8}
  bg="white"
  borderRadius="xl"
  shadow="2xl"
>
  Hero element
</Box>`}
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
