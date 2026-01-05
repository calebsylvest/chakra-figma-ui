import { Box, Heading, VStack, Text, SimpleGrid, Card } from "@chakra-ui/react";
import Link from "next/link";

const componentCategories = [
  {
    title: "Layout",
    description: "Flexible layout components for building responsive interfaces",
    href: "/design-system/components/layout",
    components: "Box, Stack, Grid, Container, Flex",
  },
  {
    title: "Typography",
    description: "Text and heading components with semantic styling",
    href: "/design-system/components/typography",
    components: "Heading, Text, Code, Link",
  },
  {
    title: "Buttons",
    description: "Interactive button components with variants and states",
    href: "/design-system/components/buttons",
    components: "Button, IconButton",
  },
  {
    title: "Forms",
    description: "Form controls and input components for data collection",
    href: "/design-system/components/forms",
    components: "Input, Select, Checkbox, Radio, Switch, Textarea",
  },
  {
    title: "Data Display",
    description: "Components for displaying data and content",
    href: "/design-system/components/data-display",
    components: "Card, Badge, Avatar, Table, List",
  },
  {
    title: "Feedback",
    description: "User feedback and notification components",
    href: "/design-system/components/feedback",
    components: "Alert, Toast, Progress, Spinner, Skeleton",
  },
  {
    title: "Overlay",
    description: "Modal, drawer, and popover overlay components",
    href: "/design-system/components/overlay",
    components: "Dialog, Drawer, Menu, Tooltip, Popover",
  },
  {
    title: "Navigation",
    description: "Navigation and wayfinding components",
    href: "/design-system/components/navigation",
    components: "Tabs, Breadcrumb, Pagination, Steps",
  },
];

export default function ComponentsPage() {
  return (
    <Box p={8}>
      <VStack gap={12} align="start" maxW="1200px" mx="auto">
        {/* Header */}
        <VStack gap={3} align="start">
          <Heading size="4xl">Components</Heading>
          <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.400" }}>
            Complete library of UI components built with Chakra UI v3. Each component
            includes usage examples, props documentation, accessibility features, and
            best practices.
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
              Built on Chakra UI v3
            </Text>
            <Text fontSize="sm" color={{ base: "blue.800", _dark: "blue.300" }}>
              All components support dark mode, responsive design, and accessibility
              features out of the box. They integrate seamlessly with our design token
              system for consistent styling across your application.
            </Text>
          </VStack>
        </Box>

        {/* Component Categories */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Component Categories</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Browse components organized by their primary use case.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {componentCategories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                style={{ textDecoration: "none" }}
              >
                <Card.Root
                  h="full"
                  _hover={{
                    transform: "translateY(-2px)",
                    shadow: "lg",
                  }}
                  transition="all 0.2s"
                  cursor="pointer"
                >
                  <Card.Body>
                    <VStack gap={3} align="start">
                      <Heading size="lg">{category.title}</Heading>
                      <Text color={{ base: "gray.600", _dark: "gray.400" }}>
                        {category.description}
                      </Text>
                      <Text
                        fontSize="sm"
                        color={{ base: "gray.500", _dark: "gray.500" }}
                        fontStyle="italic"
                      >
                        {category.components}
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              </Link>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Quick Start */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Quick Start</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Get started with Chakra UI components in your project.
            </Text>
          </VStack>

          <Box
            w="full"
            p={6}
            bg={{ base: "gray.50", _dark: "gray.900" }}
            borderRadius="lg"
          >
            <VStack gap={4} align="start">
              <Heading size="lg">Basic Usage</Heading>
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
{`import { Box, Button, Heading, Text } from "@chakra-ui/react";

export default function MyComponent() {
  return (
    <Box p={6}>
      <Heading size="2xl" mb={4}>
        Welcome
      </Heading>
      <Text mb={6} color={{ base: "gray.600", _dark: "gray.400" }}>
        This is a simple example using Chakra UI components.
      </Text>
      <Button colorScheme="blue">
        Get Started
      </Button>
    </Box>
  );
}`}
              </Box>
            </VStack>
          </Box>
        </VStack>

        {/* Key Features */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Key Features</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              What makes our component library powerful.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start">
                <Heading size="md">🎨 Design Token Integration</Heading>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  All components use design tokens for colors, spacing, typography, and
                  more, ensuring visual consistency across your entire application.
                </Text>
              </VStack>
            </Box>

            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start">
                <Heading size="md">🌓 Dark Mode Support</Heading>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Every component automatically adapts to light and dark themes using
                  our semantic color tokens and conditional styling.
                </Text>
              </VStack>
            </Box>

            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start">
                <Heading size="md">📱 Responsive Design</Heading>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Built-in responsive props make it easy to create layouts that work
                  beautifully on all screen sizes using mobile-first breakpoints.
                </Text>
              </VStack>
            </Box>

            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start">
                <Heading size="md">♿ Accessibility First</Heading>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Components follow WAI-ARIA standards with proper keyboard navigation,
                  focus management, and screen reader support built in.
                </Text>
              </VStack>
            </Box>

            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start">
                <Heading size="md">⚡ Performance Optimized</Heading>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Built with React 19 and Next.js 15, components are optimized for
                  fast rendering and minimal bundle size.
                </Text>
              </VStack>
            </Box>

            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start">
                <Heading size="md">🎯 Type Safe</Heading>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Full TypeScript support with autocomplete and type checking for all
                  component props and design tokens.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Design Principles */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Design Principles</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Guidelines that shape our component library.
            </Text>
          </VStack>

          <VStack gap={4} align="start" w="full">
            <Box
              p={5}
              borderLeftWidth="4px"
              borderLeftColor={{ base: "purple.500", _dark: "purple.400" }}
              bg={{ base: "gray.50", _dark: "gray.800" }}
              borderRadius="md"
              w="full"
            >
              <VStack gap={1} align="start">
                <Text fontWeight="semibold" fontSize="sm">
                  Consistency Over Customization
                </Text>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Components use design tokens to maintain visual consistency. Prefer
                  token-based styling over arbitrary values.
                </Text>
              </VStack>
            </Box>

            <Box
              p={5}
              borderLeftWidth="4px"
              borderLeftColor={{ base: "blue.500", _dark: "blue.400" }}
              bg={{ base: "gray.50", _dark: "gray.800" }}
              borderRadius="md"
              w="full"
            >
              <VStack gap={1} align="start">
                <Text fontWeight="semibold" fontSize="sm">
                  Composition Over Configuration
                </Text>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Build complex UIs by composing simple, focused components rather than
                  creating monolithic components with many options.
                </Text>
              </VStack>
            </Box>

            <Box
              p={5}
              borderLeftWidth="4px"
              borderLeftColor={{ base: "green.500", _dark: "green.400" }}
              bg={{ base: "gray.50", _dark: "gray.800" }}
              borderRadius="md"
              w="full"
            >
              <VStack gap={1} align="start">
                <Text fontWeight="semibold" fontSize="sm">
                  Accessibility Is Not Optional
                </Text>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Every component must be keyboard navigable, screen reader friendly,
                  and follow WCAG guidelines.
                </Text>
              </VStack>
            </Box>

            <Box
              p={5}
              borderLeftWidth="4px"
              borderLeftColor={{ base: "orange.500", _dark: "orange.400" }}
              bg={{ base: "gray.50", _dark: "gray.800" }}
              borderRadius="md"
              w="full"
            >
              <VStack gap={1} align="start">
                <Text fontWeight="semibold" fontSize="sm">
                  Mobile First, Always
                </Text>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Design for mobile screens first, then progressively enhance for larger
                  viewports using responsive props.
                </Text>
              </VStack>
            </Box>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
}
