import { Box, Heading, VStack, Text, SimpleGrid, HStack, Badge, Card } from "@chakra-ui/react";

export default function DataDisplayPage() {
  return (
    <Box p={8}>
      <VStack gap={12} align="start" maxW="1200px" mx="auto">
        {/* Header */}
        <VStack gap={3} align="start">
          <Heading size="4xl">Data Display Components</Heading>
          <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.400" }}>
            Components for organizing and displaying data, content, and information
            in clear, scannable formats.
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
              Visual Hierarchy
            </Text>
            <Text fontSize="sm" color={{ base: "blue.800", _dark: "blue.300" }}>
              Use data display components to create clear information hierarchies. Cards
              group related content, badges highlight status, and proper spacing helps
              users scan and process information quickly.
            </Text>
          </VStack>
        </Box>

        {/* Card Component */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Card</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Flexible container for grouping related content and actions.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Basic Card */}
            <Box>
              <VStack gap={4} align="start">
                <Heading size="md">Basic Card</Heading>
                <Card.Root w="full">
                  <Card.Body>
                    <VStack gap={3} align="start">
                      <Heading size="lg">Card Title</Heading>
                      <Text color={{ base: "gray.600", _dark: "gray.400" }}>
                        This is the card body content. It can contain any elements
                        like text, images, or other components.
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>
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
{`<Card.Root>
  <Card.Body>
    <Heading size="lg">Title</Heading>
    <Text>Content</Text>
  </Card.Body>
</Card.Root>`}
                </Box>
              </VStack>
            </Box>

            {/* Card with Header */}
            <Box>
              <VStack gap={4} align="start">
                <Heading size="md">Card with Header</Heading>
                <Card.Root w="full">
                  <Card.Header>
                    <HStack justify="space-between" w="full">
                      <Heading size="md">Project Status</Heading>
                      <Badge colorPalette="green">Active</Badge>
                    </HStack>
                  </Card.Header>
                  <Card.Body>
                    <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                      The project is on track and progressing as planned.
                    </Text>
                  </Card.Body>
                </Card.Root>
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
{`<Card.Root>
  <Card.Header>
    <Heading size="md">Title</Heading>
  </Card.Header>
  <Card.Body>
    Content
  </Card.Body>
</Card.Root>`}
                </Box>
              </VStack>
            </Box>

            {/* Interactive Card */}
            <Box>
              <VStack gap={4} align="start">
                <Heading size="md">Interactive Card</Heading>
                <Card.Root
                  w="full"
                  cursor="pointer"
                  _hover={{
                    transform: "translateY(-2px)",
                    shadow: "lg",
                  }}
                  transition="all 0.2s"
                >
                  <Card.Body>
                    <VStack gap={2} align="start">
                      <Heading size="md">Click Me</Heading>
                      <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                        This card responds to hover with elevation
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>
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
{`<Card.Root
  cursor="pointer"
  _hover={{
    transform: "translateY(-2px)",
    shadow: "lg"
  }}
  transition="all 0.2s"
>
  <Card.Body>
    Content
  </Card.Body>
</Card.Root>`}
                </Box>
              </VStack>
            </Box>

            {/* Card with Footer */}
            <Box>
              <VStack gap={4} align="start">
                <Heading size="md">Card with Footer</Heading>
                <Card.Root w="full">
                  <Card.Body>
                    <VStack gap={2} align="start">
                      <Heading size="md">Article Title</Heading>
                      <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                        Brief article description or excerpt goes here.
                      </Text>
                    </VStack>
                  </Card.Body>
                  <Card.Footer>
                    <HStack justify="space-between" w="full">
                      <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                        5 min read
                      </Text>
                      <Text fontSize="xs" color={{ base: "blue.600", _dark: "blue.400" }} cursor="pointer">
                        Read more →
                      </Text>
                    </HStack>
                  </Card.Footer>
                </Card.Root>
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
{`<Card.Root>
  <Card.Body>Content</Card.Body>
  <Card.Footer>
    Footer content
  </Card.Footer>
</Card.Root>`}
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Badge Component */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Badge</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Small label for statuses, counts, and categorization.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Badge Variants */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Badge Variants</Heading>
                <HStack gap={3} wrap="wrap">
                  <Badge variant="solid" colorPalette="blue">Solid</Badge>
                  <Badge variant="subtle" colorPalette="blue">Subtle</Badge>
                  <Badge variant="outline" colorPalette="blue">Outline</Badge>
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
{`<Badge variant="solid" colorPalette="blue">
  Solid
</Badge>
<Badge variant="subtle" colorPalette="blue">
  Subtle
</Badge>
<Badge variant="outline" colorPalette="blue">
  Outline
</Badge>`}
                </Box>
              </VStack>
            </Box>

            {/* Badge Colors */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Badge Colors</Heading>
                <HStack gap={2} wrap="wrap">
                  <Badge colorPalette="gray">Default</Badge>
                  <Badge colorPalette="blue">Info</Badge>
                  <Badge colorPalette="green">Success</Badge>
                  <Badge colorPalette="yellow">Warning</Badge>
                  <Badge colorPalette="red">Error</Badge>
                  <Badge colorPalette="purple">New</Badge>
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
{`<Badge colorPalette="green">Success</Badge>
<Badge colorPalette="red">Error</Badge>
<Badge colorPalette="blue">Info</Badge>`}
                </Box>
              </VStack>
            </Box>

            {/* Badge Sizes */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Badge Sizes</Heading>
                <HStack gap={3} align="center" wrap="wrap">
                  <Badge size="sm" colorPalette="purple">Small</Badge>
                  <Badge size="md" colorPalette="purple">Medium</Badge>
                  <Badge size="lg" colorPalette="purple">Large</Badge>
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
{`<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`}
                </Box>
              </VStack>
            </Box>

            {/* Badge in Context */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Badge in Context</Heading>
                <VStack gap={3} align="start">
                  <HStack>
                    <Text fontSize="sm">Notifications</Text>
                    <Badge colorPalette="red" variant="solid">12</Badge>
                  </HStack>
                  <HStack>
                    <Heading size="sm">Premium Feature</Heading>
                    <Badge colorPalette="purple" size="sm">PRO</Badge>
                  </HStack>
                  <HStack>
                    <Text fontSize="sm">Status:</Text>
                    <Badge colorPalette="green" variant="subtle">Active</Badge>
                  </HStack>
                </VStack>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  Badges complement other content
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Common Patterns */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Common Patterns</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Real-world examples of data display components.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* User Card */}
            <Card.Root>
              <Card.Body>
                <HStack gap={4}>
                  <Box
                    w="48px"
                    h="48px"
                    bg={{ base: "blue.400", _dark: "blue.600" }}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text color="white" fontWeight="bold">JD</Text>
                  </Box>
                  <VStack gap={1} align="start" flex={1}>
                    <HStack>
                      <Heading size="sm">John Doe</Heading>
                      <Badge size="sm" colorPalette="green">Online</Badge>
                    </HStack>
                    <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                      Product Designer
                    </Text>
                  </VStack>
                </HStack>
              </Card.Body>
            </Card.Root>

            {/* Stats Card */}
            <Card.Root>
              <Card.Body>
                <VStack gap={3} align="start">
                  <HStack justify="space-between" w="full">
                    <Text fontSize="sm" fontWeight="medium" color={{ base: "gray.600", _dark: "gray.400" }}>
                      Total Revenue
                    </Text>
                    <Badge colorPalette="green" variant="subtle">+12%</Badge>
                  </HStack>
                  <Heading size="2xl">$45,231</Heading>
                  <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                    vs. $40,378 last month
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>

            {/* Product Card */}
            <Card.Root>
              <Card.Body>
                <VStack gap={3} align="start">
                  <Box
                    w="full"
                    h="120px"
                    bg={{ base: "gradient.to-br" }}
                    bgGradient="to-br"
                    gradientFrom={{ base: "purple.400", _dark: "purple.600" }}
                    gradientTo={{ base: "pink.400", _dark: "pink.600" }}
                    borderRadius="md"
                  />
                  <VStack gap={2} align="start" w="full">
                    <HStack justify="space-between" w="full">
                      <Heading size="sm">Product Name</Heading>
                      <Badge colorPalette="blue">New</Badge>
                    </HStack>
                    <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                      Product description goes here
                    </Text>
                    <HStack justify="space-between" w="full">
                      <Text fontSize="lg" fontWeight="bold">$99.00</Text>
                      <Text fontSize="sm" color={{ base: "gray.500", _dark: "gray.500" }}>
                        In stock
                      </Text>
                    </HStack>
                  </VStack>
                </VStack>
              </Card.Body>
            </Card.Root>

            {/* Notification Card */}
            <Card.Root>
              <Card.Body>
                <HStack gap={3} align="start">
                  <Box
                    w="8px"
                    h="8px"
                    bg={{ base: "blue.500", _dark: "blue.400" }}
                    borderRadius="full"
                    mt={1}
                  />
                  <VStack gap={1} align="start" flex={1}>
                    <HStack justify="space-between" w="full">
                      <Text fontSize="sm" fontWeight="semibold">
                        New message received
                      </Text>
                      <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                        2m ago
                      </Text>
                    </HStack>
                    <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                      Sarah sent you a message about the project
                    </Text>
                  </VStack>
                </HStack>
              </Card.Body>
            </Card.Root>
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
                  ✅ Do: Group related information in cards
                </Text>
                <Text fontSize="sm" color={{ base: "green.800", _dark: "green.300" }}>
                  Cards help organize complex data
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
                  ❌ Don't: Overuse badges
                </Text>
                <Text fontSize="sm" color={{ base: "red.800", _dark: "red.300" }}>
                  Too many badges create visual clutter
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
                  ✅ Do: Use consistent badge colors
                </Text>
                <Text fontSize="sm" color={{ base: "green.800", _dark: "green.300" }}>
                  Green for success, red for error, etc.
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
                  ❌ Don't: Make cards too dense
                </Text>
                <Text fontSize="sm" color={{ base: "red.800", _dark: "red.300" }}>
                  Allow breathing room with proper padding
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </VStack>
    </Box>
  );
}
