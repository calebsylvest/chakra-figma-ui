import { Box, Heading, VStack, Text, HStack, Card } from "@chakra-ui/react";
import { ColorModeToggle } from "@/components/ui/color-mode-toggle";

export default function ThemeToggleDemo() {
  return (
    <Box p={8}>
      <VStack gap={8} align="start" maxW="1200px" mx="auto">
        <HStack justify="space-between" w="full">
          <Heading>Dark/Light Mode Toggle Demo</Heading>
        </HStack>

        <Text color="gray.600">
          Click the toggle button above to switch between light and dark modes.
          The theme preference is persisted across page reloads.
        </Text>

        <VStack gap={6} align="start" w="full">
          <Heading size="xl">Theme-Aware Components</Heading>

          <Card.Root w="full">
            <Card.Body>
              <Heading size="lg" mb={4}>
                Card Component
              </Heading>
              <Text>
                This card automatically adapts to light and dark modes. Notice how the
                background and text colors change seamlessly.
              </Text>
            </Card.Body>
          </Card.Root>

          <Box
            p={6}
            bg={{ base: "gray.50", _dark: "gray.800" }}
            borderRadius="lg"
            w="full"
          >
            <Heading size="md" mb={2}>
              Gray Background Box
            </Heading>
            <Text>
              Boxes with semantic colors like "gray.50" automatically adjust for dark mode.
            </Text>
          </Box>

          <HStack gap={4} wrap="wrap">
            <Box p={4} bg="red.500" color="white" borderRadius="md">
              Red Box
            </Box>
            <Box p={4} bg="blue.500" color="white" borderRadius="md">
              Blue Box
            </Box>
            <Box p={4} bg="green.500" color="white" borderRadius="md">
              Green Box
            </Box>
            <Box p={4} bg="purple.500" color="white" borderRadius="md">
              Purple Box
            </Box>
          </HStack>

          <Box
            p={6}
            bg={{ base: "blue.50", _dark: "blue.900" }}
            borderRadius="lg"
            w="full"
            mt={4}
          >
            <Heading size="md" mb={4}>
              How It Works
            </Heading>
            <VStack gap={3} align="start">
              <Text>
                1. The toggle uses next-themes to manage theme state
              </Text>
              <Text>
                2. Theme preference is saved to localStorage
              </Text>
              <Text>
                3. Chakra UI automatically applies dark mode variants
              </Text>
              <Text>
                4. All color values adapt based on the active theme
              </Text>
            </VStack>
          </Box>

          <Box p={6} bg="brand.500" color="white" borderRadius="lg" w="full">
            <Heading size="md" mb={2}>
              Custom Brand Colors
            </Heading>
            <Text>
              Even custom brand colors work great in both light and dark modes!
            </Text>
          </Box>
        </VStack>
      </VStack>
    </Box>
  );
}
