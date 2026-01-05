import { Box, Heading, VStack, Text, SimpleGrid, HStack, Stack, Container, Flex, Grid } from "@chakra-ui/react";

export default function LayoutPage() {
  return (
    <Box p={8}>
      <VStack gap={12} align="start" maxW="1200px" mx="auto">
        {/* Header */}
        <VStack gap={3} align="start">
          <Heading size="4xl">Layout Components</Heading>
          <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.400" }}>
            Flexible layout primitives for building responsive interfaces. These components
            handle spacing, alignment, and structure without adding semantic meaning.
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
              Responsive by Default
            </Text>
            <Text fontSize="sm" color={{ base: "blue.800", _dark: "blue.300" }}>
              All layout components support responsive props using breakpoint objects.
              Use mobile-first design by setting base values and progressively enhancing
              for larger screens with md, lg, and xl breakpoints.
            </Text>
          </VStack>
        </Box>

        {/* Box Component */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Box</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              The fundamental building block. A polymorphic component that renders a div by default.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Basic Box */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Basic Usage</Heading>
                <Box
                  p={4}
                  bg={{ base: "purple.100", _dark: "purple.900" }}
                  borderRadius="md"
                >
                  <Text fontSize="sm" color={{ base: "purple.900", _dark: "purple.100" }}>
                    This is a Box component
                  </Text>
                </Box>
                <Box
                  as="pre"
                  p={3}
                  bg={{ base: "gray.900", _dark: "gray.950" }}
                  color="gray.50"
                  borderRadius="md"
                  overflow="auto"
                  w="full"
                  fontSize="xs"
                >
{`<Box p={4} bg="purple.100" borderRadius="md">
  Content
</Box>`}
                </Box>
              </VStack>
            </Box>

            {/* Responsive Box */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Responsive Props</Heading>
                <Box
                  p={{ base: 2, md: 4, lg: 6 }}
                  bg={{ base: "blue.100", _dark: "blue.900" }}
                  borderRadius="md"
                >
                  <Text fontSize="sm" color={{ base: "blue.900", _dark: "blue.100" }}>
                    Padding increases with screen size
                  </Text>
                </Box>
                <Box
                  as="pre"
                  p={3}
                  bg={{ base: "gray.900", _dark: "gray.950" }}
                  color="gray.50"
                  borderRadius="md"
                  overflow="auto"
                  w="full"
                  fontSize="xs"
                >
{`<Box
  p={{ base: 2, md: 4, lg: 6 }}
  bg="blue.100"
>
  Responsive padding
</Box>`}
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Stack Components */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Stack</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Layout components for stacking elements with consistent spacing.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* VStack */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">VStack (Vertical)</Heading>
                <VStack gap={3} w="full">
                  <Box
                    p={3}
                    bg={{ base: "green.100", _dark: "green.900" }}
                    borderRadius="md"
                    w="full"
                  >
                    <Text fontSize="sm" color={{ base: "green.900", _dark: "green.100" }}>
                      Item 1
                    </Text>
                  </Box>
                  <Box
                    p={3}
                    bg={{ base: "green.100", _dark: "green.900" }}
                    borderRadius="md"
                    w="full"
                  >
                    <Text fontSize="sm" color={{ base: "green.900", _dark: "green.100" }}>
                      Item 2
                    </Text>
                  </Box>
                  <Box
                    p={3}
                    bg={{ base: "green.100", _dark: "green.900" }}
                    borderRadius="md"
                    w="full"
                  >
                    <Text fontSize="sm" color={{ base: "green.900", _dark: "green.100" }}>
                      Item 3
                    </Text>
                  </Box>
                </VStack>
                <Box
                  as="pre"
                  p={3}
                  bg={{ base: "gray.900", _dark: "gray.950" }}
                  color="gray.50"
                  borderRadius="md"
                  overflow="auto"
                  w="full"
                  fontSize="xs"
                >
{`<VStack gap={3}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</VStack>`}
                </Box>
              </VStack>
            </Box>

            {/* HStack */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">HStack (Horizontal)</Heading>
                <HStack gap={3} w="full">
                  <Box
                    p={3}
                    bg={{ base: "orange.100", _dark: "orange.900" }}
                    borderRadius="md"
                    flex={1}
                  >
                    <Text fontSize="sm" color={{ base: "orange.900", _dark: "orange.100" }}>
                      Item 1
                    </Text>
                  </Box>
                  <Box
                    p={3}
                    bg={{ base: "orange.100", _dark: "orange.900" }}
                    borderRadius="md"
                    flex={1}
                  >
                    <Text fontSize="sm" color={{ base: "orange.900", _dark: "orange.100" }}>
                      Item 2
                    </Text>
                  </Box>
                  <Box
                    p={3}
                    bg={{ base: "orange.100", _dark: "orange.900" }}
                    borderRadius="md"
                    flex={1}
                  >
                    <Text fontSize="sm" color={{ base: "orange.900", _dark: "orange.100" }}>
                      Item 3
                    </Text>
                  </Box>
                </HStack>
                <Box
                  as="pre"
                  p={3}
                  bg={{ base: "gray.900", _dark: "gray.950" }}
                  color="gray.50"
                  borderRadius="md"
                  overflow="auto"
                  w="full"
                  fontSize="xs"
                >
{`<HStack gap={3}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</HStack>`}
                </Box>
              </VStack>
            </Box>

            {/* Stack Alignment */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Alignment</Heading>
                <VStack gap={3} w="full">
                  <VStack gap={2} align="start" w="full">
                    <Text fontSize="xs" fontWeight="semibold">align="start"</Text>
                    <HStack gap={2} align="start" w="full" h="60px" bg={{ base: "gray.50", _dark: "gray.800" }} p={2} borderRadius="md">
                      <Box p={2} bg={{ base: "purple.400", _dark: "purple.600" }} borderRadius="sm" h="20px" />
                      <Box p={2} bg={{ base: "purple.400", _dark: "purple.600" }} borderRadius="sm" h="40px" />
                      <Box p={2} bg={{ base: "purple.400", _dark: "purple.600" }} borderRadius="sm" h="30px" />
                    </HStack>
                  </VStack>
                  <VStack gap={2} align="start" w="full">
                    <Text fontSize="xs" fontWeight="semibold">align="center"</Text>
                    <HStack gap={2} align="center" w="full" h="60px" bg={{ base: "gray.50", _dark: "gray.800" }} p={2} borderRadius="md">
                      <Box p={2} bg={{ base: "blue.400", _dark: "blue.600" }} borderRadius="sm" h="20px" />
                      <Box p={2} bg={{ base: "blue.400", _dark: "blue.600" }} borderRadius="sm" h="40px" />
                      <Box p={2} bg={{ base: "blue.400", _dark: "blue.600" }} borderRadius="sm" h="30px" />
                    </HStack>
                  </VStack>
                </VStack>
                <Box
                  as="pre"
                  p={3}
                  bg={{ base: "gray.900", _dark: "gray.950" }}
                  color="gray.50"
                  borderRadius="md"
                  overflow="auto"
                  w="full"
                  fontSize="xs"
                >
{`<HStack align="center" gap={2}>
  {/* Items */}
</HStack>`}
                </Box>
              </VStack>
            </Box>

            {/* Stack Justification */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Justification</Heading>
                <VStack gap={3} w="full">
                  <VStack gap={2} align="start" w="full">
                    <Text fontSize="xs" fontWeight="semibold">justify="start"</Text>
                    <HStack gap={2} justify="start" w="full" bg={{ base: "gray.50", _dark: "gray.800" }} p={2} borderRadius="md">
                      <Box p={3} bg={{ base: "green.400", _dark: "green.600" }} borderRadius="sm" />
                      <Box p={3} bg={{ base: "green.400", _dark: "green.600" }} borderRadius="sm" />
                      <Box p={3} bg={{ base: "green.400", _dark: "green.600" }} borderRadius="sm" />
                    </HStack>
                  </VStack>
                  <VStack gap={2} align="start" w="full">
                    <Text fontSize="xs" fontWeight="semibold">justify="space-between"</Text>
                    <HStack gap={2} justify="space-between" w="full" bg={{ base: "gray.50", _dark: "gray.800" }} p={2} borderRadius="md">
                      <Box p={3} bg={{ base: "pink.400", _dark: "pink.600" }} borderRadius="sm" />
                      <Box p={3} bg={{ base: "pink.400", _dark: "pink.600" }} borderRadius="sm" />
                      <Box p={3} bg={{ base: "pink.400", _dark: "pink.600" }} borderRadius="sm" />
                    </HStack>
                  </VStack>
                </VStack>
                <Box
                  as="pre"
                  p={3}
                  bg={{ base: "gray.900", _dark: "gray.950" }}
                  color="gray.50"
                  borderRadius="md"
                  overflow="auto"
                  w="full"
                  fontSize="xs"
                >
{`<HStack justify="space-between">
  {/* Items */}
</HStack>`}
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Grid Components */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Grid</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              CSS Grid-based layouts for complex, two-dimensional arrangements.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* SimpleGrid */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">SimpleGrid</Heading>
                <SimpleGrid columns={3} gap={3} w="full">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Box
                      key={i}
                      p={4}
                      bg={{ base: "cyan.100", _dark: "cyan.900" }}
                      borderRadius="md"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text fontSize="sm" fontWeight="semibold" color={{ base: "cyan.900", _dark: "cyan.100" }}>
                        {i}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
                <Box
                  as="pre"
                  p={3}
                  bg={{ base: "gray.900", _dark: "gray.950" }}
                  color="gray.50"
                  borderRadius="md"
                  overflow="auto"
                  w="full"
                  fontSize="xs"
                >
{`<SimpleGrid columns={3} gap={3}>
  <Box>1</Box>
  <Box>2</Box>
  <Box>3</Box>
  {/* ... */}
</SimpleGrid>`}
                </Box>
              </VStack>
            </Box>

            {/* Responsive Grid */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Responsive Grid</Heading>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={3} w="full">
                  {[1, 2, 3].map((i) => (
                    <Box
                      key={i}
                      p={4}
                      bg={{ base: "teal.100", _dark: "teal.900" }}
                      borderRadius="md"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text fontSize="sm" fontWeight="semibold" color={{ base: "teal.900", _dark: "teal.100" }}>
                        {i}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  1 column on mobile, 2 on tablet, 3 on desktop
                </Text>
                <Box
                  as="pre"
                  p={3}
                  bg={{ base: "gray.900", _dark: "gray.950" }}
                  color="gray.50"
                  borderRadius="md"
                  overflow="auto"
                  w="full"
                  fontSize="xs"
                >
{`<SimpleGrid
  columns={{ base: 1, md: 2, lg: 3 }}
  gap={3}
>
  {/* Items */}
</SimpleGrid>`}
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Container */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Container</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Centers content and applies max-width for readable layouts.
            </Text>
          </VStack>

          <Box
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            borderColor={{ base: "gray.200", _dark: "gray.700" }}
            w="full"
          >
            <VStack gap={4} align="start">
              <Heading size="md">Centered Container</Heading>
              <Box w="full" bg={{ base: "gray.50", _dark: "gray.800" }} p={4} borderRadius="md">
                <Container maxW="2xl" bg={{ base: "indigo.100", _dark: "indigo.900" }} p={4} borderRadius="md">
                  <Text fontSize="sm" color={{ base: "indigo.900", _dark: "indigo.100" }}>
                    This content is centered with a max-width of 672px (2xl)
                  </Text>
                </Container>
              </Box>
              <Box
                as="pre"
                p={3}
                bg={{ base: "gray.900", _dark: "gray.950" }}
                color="gray.50"
                borderRadius="md"
                overflow="auto"
                w="full"
                fontSize="xs"
              >
{`<Container maxW="2xl">
  Content centered with max-width
</Container>`}
              </Box>
            </VStack>
          </Box>
        </VStack>

        {/* Flex */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Flex</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Flexbox container for advanced alignment and distribution.
            </Text>
          </VStack>

          <Box
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            borderColor={{ base: "gray.200", _dark: "gray.700" }}
            w="full"
          >
            <VStack gap={4} align="start">
              <Heading size="md">Flex Layout</Heading>
              <Flex justify="space-between" align="center" w="full" p={4} bg={{ base: "gray.50", _dark: "gray.800" }} borderRadius="md">
                <Box p={3} bg={{ base: "violet.400", _dark: "violet.600" }} borderRadius="md">
                  <Text fontSize="sm" color="white">Left</Text>
                </Box>
                <Box p={3} bg={{ base: "violet.400", _dark: "violet.600" }} borderRadius="md">
                  <Text fontSize="sm" color="white">Center</Text>
                </Box>
                <Box p={3} bg={{ base: "violet.400", _dark: "violet.600" }} borderRadius="md">
                  <Text fontSize="sm" color="white">Right</Text>
                </Box>
              </Flex>
              <Box
                as="pre"
                p={3}
                bg={{ base: "gray.900", _dark: "gray.950" }}
                color="gray.50"
                borderRadius="md"
                overflow="auto"
                w="full"
                fontSize="xs"
              >
{`<Flex justify="space-between" align="center">
  <Box>Left</Box>
  <Box>Center</Box>
  <Box>Right</Box>
</Flex>`}
              </Box>
            </VStack>
          </Box>
        </VStack>

        {/* Common Patterns */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Common Patterns</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Real-world layout examples.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Card Layout */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Card Layout</Heading>
                <Box w="full" p={4} bg={{ base: "white", _dark: "gray.800" }} borderRadius="lg" borderWidth="1px" borderColor={{ base: "gray.200", _dark: "gray.700" }}>
                  <VStack gap={3} align="start">
                    <Heading size="sm">Card Title</Heading>
                    <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                      Card description text goes here
                    </Text>
                    <HStack gap={2} w="full" justify="space-between">
                      <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                        Meta info
                      </Text>
                      <Box px={3} py={1} bg={{ base: "blue.500", _dark: "blue.600" }} color="white" borderRadius="md" fontSize="xs">
                        Action
                      </Box>
                    </HStack>
                  </VStack>
                </Box>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  VStack for vertical spacing
                </Text>
              </VStack>
            </Box>

            {/* Sidebar Layout */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Sidebar Layout</Heading>
                <HStack gap={3} w="full" h="120px">
                  <Box w="80px" h="full" bg={{ base: "purple.100", _dark: "purple.900" }} borderRadius="md" />
                  <Box flex={1} h="full" bg={{ base: "gray.100", _dark: "gray.800" }} borderRadius="md" />
                </HStack>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  Fixed sidebar with flexible content
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
                  ✅ Do: Use Stack for simple layouts
                </Text>
                <Text fontSize="sm" color={{ base: "green.800", _dark: "green.300" }}>
                  HStack and VStack handle most common layouts
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
                  ❌ Don't: Nest too deeply
                </Text>
                <Text fontSize="sm" color={{ base: "red.800", _dark: "red.300" }}>
                  Avoid more than 3-4 levels of nesting
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
                  ✅ Do: Use responsive props
                </Text>
                <Text fontSize="sm" color={{ base: "green.800", _dark: "green.300" }}>
                  Design mobile-first with breakpoint objects
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
                  ❌ Don't: Use arbitrary spacing values
                </Text>
                <Text fontSize="sm" color={{ base: "red.800", _dark: "red.300" }}>
                  Always use spacing tokens (2, 4, 6, 8, etc.)
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </VStack>
    </Box>
  );
}
