import { Box, Heading, VStack, Text, SimpleGrid, HStack, Code } from "@chakra-ui/react";

export default function TypographyPage() {
  return (
    <Box p={8}>
      <VStack gap={12} align="start" maxW="1200px" mx="auto">
        {/* Header */}
        <VStack gap={3} align="start">
          <Heading size="4xl">Typography Components</Heading>
          <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.400" }}>
            Text and heading components for displaying content with semantic meaning
            and consistent styling across your application.
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
              Semantic HTML
            </Text>
            <Text fontSize="sm" color={{ base: "blue.800", _dark: "blue.300" }}>
              Typography components render semantic HTML elements by default. Heading
              renders h2, Text renders p. Use the 'as' prop to change the rendered
              element while maintaining visual styling.
            </Text>
          </VStack>
        </Box>

        {/* Heading Component */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Heading</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Heading component for titles and section headers with semantic size variants.
            </Text>
          </VStack>

          <Box
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            borderColor={{ base: "gray.200", _dark: "gray.700" }}
            w="full"
          >
            <VStack gap={6} align="start">
              <VStack gap={4} align="start" w="full">
                <VStack gap={1} align="start">
                  <Heading size="4xl">4xl - Extra Large Heading</Heading>
                  <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                    size="4xl" - Page titles, hero sections
                  </Text>
                </VStack>

                <VStack gap={1} align="start">
                  <Heading size="3xl">3xl - Large Heading</Heading>
                  <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                    size="3xl" - Major section headers
                  </Text>
                </VStack>

                <VStack gap={1} align="start">
                  <Heading size="2xl">2xl - Section Heading</Heading>
                  <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                    size="2xl" - Section headers
                  </Text>
                </VStack>

                <VStack gap={1} align="start">
                  <Heading size="xl">xl - Subsection Heading</Heading>
                  <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                    size="xl" - Subsections
                  </Text>
                </VStack>

                <VStack gap={1} align="start">
                  <Heading size="lg">lg - Card Heading</Heading>
                  <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                    size="lg" - Card titles, smaller sections
                  </Text>
                </VStack>

                <VStack gap={1} align="start">
                  <Heading size="md">md - Small Heading</Heading>
                  <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                    size="md" - Component headers
                  </Text>
                </VStack>

                <VStack gap={1} align="start">
                  <Heading size="sm">sm - Tiny Heading</Heading>
                  <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                    size="sm" - Minimal headers
                  </Text>
                </VStack>
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
{`<Heading size="4xl">Page Title</Heading>
<Heading size="2xl">Section Title</Heading>
<Heading size="lg">Card Title</Heading>

{/* Change semantic element */}
<Heading as="h1" size="4xl">H1 Element</Heading>
<Heading as="h3" size="lg">H3 Element</Heading>`}
              </Box>
            </VStack>
          </Box>
        </VStack>

        {/* Text Component */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Text</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Text component for body content, paragraphs, and descriptions.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Font Sizes */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Font Sizes</Heading>
                <VStack gap={3} align="start">
                  <VStack gap={0} align="start">
                    <Text fontSize="2xl">2xl - Extra large text</Text>
                    <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                      fontSize="2xl"
                    </Text>
                  </VStack>
                  <VStack gap={0} align="start">
                    <Text fontSize="xl">xl - Large text</Text>
                    <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                      fontSize="xl"
                    </Text>
                  </VStack>
                  <VStack gap={0} align="start">
                    <Text fontSize="lg">lg - Slightly large</Text>
                    <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                      fontSize="lg"
                    </Text>
                  </VStack>
                  <VStack gap={0} align="start">
                    <Text fontSize="md">md - Default body text</Text>
                    <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                      fontSize="md" (default)
                    </Text>
                  </VStack>
                  <VStack gap={0} align="start">
                    <Text fontSize="sm">sm - Small text</Text>
                    <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                      fontSize="sm"
                    </Text>
                  </VStack>
                  <VStack gap={0} align="start">
                    <Text fontSize="xs">xs - Tiny text for captions</Text>
                    <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                      fontSize="xs"
                    </Text>
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
{`<Text fontSize="lg">
  Larger body text
</Text>`}
                </Box>
              </VStack>
            </Box>

            {/* Font Weights */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Font Weights</Heading>
                <VStack gap={3} align="start">
                  <VStack gap={0} align="start">
                    <Text fontWeight="thin">Thin weight (100)</Text>
                    <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                      fontWeight="thin"
                    </Text>
                  </VStack>
                  <VStack gap={0} align="start">
                    <Text fontWeight="light">Light weight (300)</Text>
                    <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                      fontWeight="light"
                    </Text>
                  </VStack>
                  <VStack gap={0} align="start">
                    <Text fontWeight="normal">Normal weight (400)</Text>
                    <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                      fontWeight="normal" (default)
                    </Text>
                  </VStack>
                  <VStack gap={0} align="start">
                    <Text fontWeight="medium">Medium weight (500)</Text>
                    <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                      fontWeight="medium"
                    </Text>
                  </VStack>
                  <VStack gap={0} align="start">
                    <Text fontWeight="semibold">Semibold weight (600)</Text>
                    <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                      fontWeight="semibold"
                    </Text>
                  </VStack>
                  <VStack gap={0} align="start">
                    <Text fontWeight="bold">Bold weight (700)</Text>
                    <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                      fontWeight="bold"
                    </Text>
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
{`<Text fontWeight="semibold">
  Important text
</Text>`}
                </Box>
              </VStack>
            </Box>

            {/* Text Colors */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Text Colors</Heading>
                <VStack gap={3} align="start">
                  <Text color={{ base: "gray.900", _dark: "white" }}>
                    Primary text color
                  </Text>
                  <Text color={{ base: "gray.600", _dark: "gray.400" }}>
                    Secondary text color
                  </Text>
                  <Text color={{ base: "gray.500", _dark: "gray.500" }}>
                    Tertiary text color
                  </Text>
                  <Text color={{ base: "blue.600", _dark: "blue.400" }}>
                    Accent blue text
                  </Text>
                  <Text color={{ base: "red.600", _dark: "red.400" }}>
                    Error or danger text
                  </Text>
                  <Text color={{ base: "green.600", _dark: "green.400" }}>
                    Success text
                  </Text>
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
{`<Text color={{
  base: "gray.600",
  _dark: "gray.400"
}}>
  Secondary text
</Text>`}
                </Box>
              </VStack>
            </Box>

            {/* Text Alignment */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Text Alignment</Heading>
                <VStack gap={3} align="start" w="full">
                  <Box w="full" p={3} bg={{ base: "gray.50", _dark: "gray.800" }} borderRadius="md">
                    <Text textAlign="left">Left aligned text (default)</Text>
                  </Box>
                  <Box w="full" p={3} bg={{ base: "gray.50", _dark: "gray.800" }} borderRadius="md">
                    <Text textAlign="center">Center aligned text</Text>
                  </Box>
                  <Box w="full" p={3} bg={{ base: "gray.50", _dark: "gray.800" }} borderRadius="md">
                    <Text textAlign="right">Right aligned text</Text>
                  </Box>
                  <Box w="full" p={3} bg={{ base: "gray.50", _dark: "gray.800" }} borderRadius="md">
                    <Text textAlign="justify">Justified text distributes content evenly across the line width.</Text>
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
{`<Text textAlign="center">
  Centered text
</Text>`}
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Code Component */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Code</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Inline code component for displaying code snippets within text.
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
              <VStack gap={3} align="start">
                <Text>
                  Use the <Code>useState</Code> hook to manage component state.
                </Text>
                <Text>
                  Import components with <Code>import {"{ Box }"} from "@chakra-ui/react"</Code>
                </Text>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  The component accepts <Code fontSize="xs">colorPalette</Code> and <Code fontSize="xs">variant</Code> props.
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
{`<Text>
  Call the <Code>useState</Code> hook
</Text>

{/* With custom styling */}
<Code colorPalette="blue" fontSize="sm">
  npm install
</Code>`}
              </Box>
            </VStack>
          </Box>
        </VStack>

        {/* Text Variants */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Text Styles</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Common text styling combinations for different use cases.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Lead Text */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Lead Paragraph</Heading>
                <Text fontSize="xl" fontWeight="light" color={{ base: "gray.700", _dark: "gray.300" }}>
                  This is a lead paragraph with larger, lighter text that introduces
                  the main content.
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
{`<Text fontSize="xl" fontWeight="light">
  Lead paragraph
</Text>`}
                </Box>
              </VStack>
            </Box>

            {/* Caption */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Caption Text</Heading>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  This is caption text for images, figures, or supplementary information.
                  It uses a smaller size and muted color.
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
{`<Text fontSize="xs" color="gray.500">
  Caption text
</Text>`}
                </Box>
              </VStack>
            </Box>

            {/* Truncated Text */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Truncated Text</Heading>
                <Text truncate maxW="200px">
                  This is a very long text that will be truncated with an ellipsis when it overflows
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
{`<Text truncate maxW="200px">
  Long text...
</Text>`}
                </Box>
              </VStack>
            </Box>

            {/* Line Clamp */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Line Clamp</Heading>
                <Text lineClamp={2}>
                  This text will be clamped to 2 lines maximum. Any additional content
                  beyond that will be hidden with an ellipsis. This is useful for cards
                  and preview text.
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
{`<Text lineClamp={2}>
  Multi-line text...
</Text>`}
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
              Real-world typography usage examples.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Article Header */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start">
                <Text fontSize="xs" fontWeight="semibold" color={{ base: "blue.600", _dark: "blue.400" }} textTransform="uppercase">
                  Category
                </Text>
                <Heading size="2xl">Article Title Goes Here</Heading>
                <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.400" }}>
                  A compelling subtitle or description that provides context
                </Text>
                <Text fontSize="sm" color={{ base: "gray.500", _dark: "gray.500" }}>
                  By Author Name • 5 min read
                </Text>
              </VStack>
            </Box>

            {/* Stat Display */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={2} align="start">
                <Text fontSize="4xl" fontWeight="bold" color={{ base: "blue.600", _dark: "blue.400" }}>
                  2,543
                </Text>
                <Text fontSize="sm" fontWeight="medium">
                  Total Users
                </Text>
                <Text fontSize="xs" color={{ base: "green.600", _dark: "green.400" }}>
                  ↑ 12% from last month
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
                  ✅ Do: Use semantic heading levels
                </Text>
                <Text fontSize="sm" color={{ base: "green.800", _dark: "green.300" }}>
                  H1 for page title, H2 for sections, H3 for subsections
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
                  ❌ Don't: Skip heading levels
                </Text>
                <Text fontSize="sm" color={{ base: "red.800", _dark: "red.300" }}>
                  Don't jump from H1 to H3, maintain hierarchy
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
                  ✅ Do: Consider line length
                </Text>
                <Text fontSize="sm" color={{ base: "green.800", _dark: "green.300" }}>
                  Keep text lines between 45-75 characters for readability
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
                  ❌ Don't: Use too many font weights
                </Text>
                <Text fontSize="sm" color={{ base: "red.800", _dark: "red.300" }}>
                  Stick to 2-3 weights per page for visual consistency
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </VStack>
    </Box>
  );
}
