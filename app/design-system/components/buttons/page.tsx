"use client";

import { Box, Heading, VStack, Text, SimpleGrid, HStack, Button, IconButton } from "@chakra-ui/react";
import { useState } from "react";

export default function ButtonsPage() {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

  const handleClick = (id: string) => {
    setLoadingStates(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <Box p={8}>
      <VStack gap={12} align="start" maxW="1200px" mx="auto">
        {/* Header */}
        <VStack gap={3} align="start">
          <Heading size="4xl">Buttons</Heading>
          <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.400" }}>
            Button components for triggering actions and events. Includes regular buttons
            and icon-only buttons with multiple variants, sizes, and states.
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
              Accessibility
            </Text>
            <Text fontSize="sm" color={{ base: "blue.800", _dark: "blue.300" }}>
              Buttons are keyboard accessible and support focus states. Icon-only buttons
              should include an aria-label for screen readers. Use loading states to
              prevent double submissions and provide visual feedback.
            </Text>
          </VStack>
        </Box>

        {/* Button Variants */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Button Variants</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Different visual styles for various contexts.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w="full">
            {/* Solid */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <VStack gap={1} align="start">
                  <Heading size="md">Solid (Default)</Heading>
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    Primary action buttons with solid background
                  </Text>
                </VStack>
                <HStack gap={3} wrap="wrap">
                  <Button variant="solid" colorPalette="blue">
                    Primary
                  </Button>
                  <Button variant="solid" colorPalette="gray">
                    Secondary
                  </Button>
                  <Button variant="solid" colorPalette="green">
                    Success
                  </Button>
                  <Button variant="solid" colorPalette="red">
                    Danger
                  </Button>
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
{`<Button variant="solid" colorPalette="blue">
  Primary
</Button>`}
                </Box>
              </VStack>
            </Box>

            {/* Outline */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <VStack gap={1} align="start">
                  <Heading size="md">Outline</Heading>
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    Secondary actions with border only
                  </Text>
                </VStack>
                <HStack gap={3} wrap="wrap">
                  <Button variant="outline" colorPalette="blue">
                    Primary
                  </Button>
                  <Button variant="outline" colorPalette="gray">
                    Secondary
                  </Button>
                  <Button variant="outline" colorPalette="green">
                    Success
                  </Button>
                  <Button variant="outline" colorPalette="red">
                    Danger
                  </Button>
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
{`<Button variant="outline" colorPalette="blue">
  Secondary
</Button>`}
                </Box>
              </VStack>
            </Box>

            {/* Ghost */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <VStack gap={1} align="start">
                  <Heading size="md">Ghost</Heading>
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    Minimal style with hover background
                  </Text>
                </VStack>
                <HStack gap={3} wrap="wrap">
                  <Button variant="ghost" colorPalette="blue">
                    Primary
                  </Button>
                  <Button variant="ghost" colorPalette="gray">
                    Secondary
                  </Button>
                  <Button variant="ghost" colorPalette="green">
                    Success
                  </Button>
                  <Button variant="ghost" colorPalette="red">
                    Danger
                  </Button>
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
{`<Button variant="ghost" colorPalette="gray">
  Tertiary
</Button>`}
                </Box>
              </VStack>
            </Box>

            {/* Subtle */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <VStack gap={1} align="start">
                  <Heading size="md">Subtle</Heading>
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    Light background with colored text
                  </Text>
                </VStack>
                <HStack gap={3} wrap="wrap">
                  <Button variant="subtle" colorPalette="blue">
                    Primary
                  </Button>
                  <Button variant="subtle" colorPalette="gray">
                    Secondary
                  </Button>
                  <Button variant="subtle" colorPalette="green">
                    Success
                  </Button>
                  <Button variant="subtle" colorPalette="red">
                    Danger
                  </Button>
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
{`<Button variant="subtle" colorPalette="blue">
  Subtle
</Button>`}
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Button Sizes */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Button Sizes</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Four size options from extra small to extra large.
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
              <HStack gap={3} wrap="wrap" align="center">
                <Button size="xs" colorPalette="blue">
                  Extra Small
                </Button>
                <Button size="sm" colorPalette="blue">
                  Small
                </Button>
                <Button size="md" colorPalette="blue">
                  Medium
                </Button>
                <Button size="lg" colorPalette="blue">
                  Large
                </Button>
                <Button size="xl" colorPalette="blue">
                  Extra Large
                </Button>
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
{`<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium (default)</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>`}
              </Box>
            </VStack>
          </Box>
        </VStack>

        {/* Button States */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Button States</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Loading and disabled states for user feedback.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Loading State */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <VStack gap={1} align="start">
                  <Heading size="md">Loading State</Heading>
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    Shows spinner and prevents interaction
                  </Text>
                </VStack>
                <HStack gap={3}>
                  <Button
                    colorPalette="blue"
                    loading={loadingStates["demo"]}
                    onClick={() => handleClick("demo")}
                  >
                    Click to Load
                  </Button>
                  <Button variant="outline" colorPalette="blue" loading>
                    Loading...
                  </Button>
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
{`<Button loading={isLoading}>
  Submit
</Button>`}
                </Box>
              </VStack>
            </Box>

            {/* Disabled State */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <VStack gap={1} align="start">
                  <Heading size="md">Disabled State</Heading>
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    Makes button non-interactive
                  </Text>
                </VStack>
                <HStack gap={3}>
                  <Button colorPalette="blue" disabled>
                    Disabled Solid
                  </Button>
                  <Button variant="outline" colorPalette="blue" disabled>
                    Disabled Outline
                  </Button>
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
{`<Button disabled>
  Disabled
</Button>`}
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Icon Buttons */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Icon Buttons</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Compact buttons with icons only. Always include aria-label.
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
              <HStack gap={3} wrap="wrap">
                <IconButton aria-label="Settings" variant="solid" colorPalette="blue">
                  ⚙️
                </IconButton>
                <IconButton aria-label="Delete" variant="solid" colorPalette="red">
                  🗑️
                </IconButton>
                <IconButton aria-label="Edit" variant="outline" colorPalette="gray">
                  ✏️
                </IconButton>
                <IconButton aria-label="Info" variant="ghost" colorPalette="blue">
                  ℹ️
                </IconButton>
                <IconButton aria-label="Search" size="sm" colorPalette="purple">
                  🔍
                </IconButton>
                <IconButton aria-label="Menu" size="lg" colorPalette="gray">
                  ☰
                </IconButton>
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
{`<IconButton
  aria-label="Settings"
  colorPalette="blue"
>
  <SettingsIcon />
</IconButton>`}
              </Box>
            </VStack>
          </Box>
        </VStack>

        {/* Common Patterns */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Common Patterns</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Real-world button usage examples.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Button Group */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Button Groups</Heading>
                <HStack gap={2}>
                  <Button variant="outline" colorPalette="gray">
                    Cancel
                  </Button>
                  <Button colorPalette="blue">
                    Save Changes
                  </Button>
                </HStack>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  Primary action on the right, secondary on the left
                </Text>
              </VStack>
            </Box>

            {/* Full Width */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Full Width</Heading>
                <Button w="full" colorPalette="blue">
                  Sign In
                </Button>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  Common in forms and mobile layouts
                </Text>
              </VStack>
            </Box>

            {/* With Icons */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Buttons with Icons</Heading>
                <VStack gap={2} align="start">
                  <Button colorPalette="blue">
                    ➕ Add Item
                  </Button>
                  <Button variant="outline" colorPalette="gray">
                    ⬇️ Download
                  </Button>
                  <Button variant="ghost" colorPalette="red">
                    🗑️ Delete
                  </Button>
                </VStack>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  Icons help communicate action quickly
                </Text>
              </VStack>
            </Box>

            {/* Loading Form */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Form Submission</Heading>
                <VStack gap={3} w="full">
                  <Box
                    as="input"
                    placeholder="Email address"
                    p={2}
                    borderWidth="1px"
                    borderRadius="md"
                    borderColor={{ base: "gray.300", _dark: "gray.600" }}
                    bg={{ base: "white", _dark: "gray.800" }}
                    w="full"
                  />
                  <Button
                    w="full"
                    colorPalette="blue"
                    loading={loadingStates["form"]}
                    onClick={() => handleClick("form")}
                  >
                    Subscribe
                  </Button>
                </VStack>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  Click to see loading state
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
                  ✅ Do: Use clear, action-oriented labels
                </Text>
                <Text fontSize="sm" color={{ base: "green.800", _dark: "green.300" }}>
                  "Save changes", "Add to cart", "Sign in"
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
                  ❌ Don't: Use vague labels
                </Text>
                <Text fontSize="sm" color={{ base: "red.800", _dark: "red.300" }}>
                  "Click here", "Submit", "OK"
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
                  ✅ Do: Show loading state for async actions
                </Text>
                <Text fontSize="sm" color={{ base: "green.800", _dark: "green.300" }}>
                  Prevents double clicks and provides feedback
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
                  ❌ Don't: Have too many primary buttons
                </Text>
                <Text fontSize="sm" color={{ base: "red.800", _dark: "red.300" }}>
                  Use one primary, others outline or ghost
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </VStack>
    </Box>
  );
}
