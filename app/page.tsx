import { Box, Heading, Text, VStack, Badge, Code, HStack } from "@chakra-ui/react";
import { ColorModeToggle } from "@/components/ui/color-mode-toggle";

export default function Home() {
  return (
    <Box p={8}>
      <VStack gap={6} align="start" maxW="800px" mx="auto">
        <HStack justify="space-between" w="full">
          <Badge colorPalette="green" size="lg">
            Setup Complete
          </Badge>
        </HStack>

        <Heading size="4xl">Welcome to Chakra UI v3</Heading>

        <Text fontSize="xl" color="gray.600">
          Next.js 15 with Chakra UI v3 and MCP integration
        </Text>

        <VStack gap={3} align="start" w="full" mt={4}>
          <Heading size="xl">Project Features</Heading>

          <Box p={4} bg="gray.50" borderRadius="md" w="full">
            <Text fontWeight="semibold" mb={2}>MCP Integration:</Text>
            <VStack gap={2} align="start" pl={4}>
              <Text>✓ Chakra MCP - Component library access</Text>
              <Text>✓ Figma MCP - Design file integration</Text>
            </VStack>
          </Box>

          <Box p={4} bg="gray.50" borderRadius="md" w="full">
            <Text fontWeight="semibold" mb={2}>Tech Stack:</Text>
            <VStack gap={2} align="start" pl={4}>
              <Text>✓ Next.js 15 with App Router</Text>
              <Text>✓ TypeScript</Text>
              <Text>✓ Chakra UI v3</Text>
              <Text>✓ Custom theme system</Text>
            </VStack>
          </Box>

          <Box p={4} bg="blue.50" borderRadius="md" w="full" mt={4}>
            <Text fontWeight="semibold" mb={2}>Next Steps:</Text>
            <VStack gap={2} align="start" pl={4}>
              <Text>1. Check <Code>CLAUDE.md</Code> for workflow guidance</Text>
              <Text>2. Use Figma MCP to extract design tokens</Text>
              <Text>3. Update theme in <Code>theme/tokens.ts</Code></Text>
              <Text>4. Start building components from Figma designs</Text>
            </VStack>
          </Box>
        </VStack>
      </VStack>
    </Box>
  );
}
