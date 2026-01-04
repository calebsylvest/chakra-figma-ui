import { Box, Heading, VStack, Text, Code } from "@chakra-ui/react";
import semanticTokens from "@/theme/semantic-tokens.json";

export default function SemanticTokensPage() {
  return (
    <Box p={8}>
      <VStack gap={6} align="start" maxW="1200px" mx="auto">
        <Heading>Chakra UI Semantic Tokens</Heading>
        <Text color="gray.600">
          Semantic tokens are theme-aware tokens that automatically adapt to light and dark modes.
          They use the <Code>_light</Code> and <Code>_dark</Code> conditions.
        </Text>

        <Box
          w="full"
          p={6}
          bg={{ base: "gray.50", _dark: "gray.900" }}
          borderRadius="lg"
          overflowX="auto"
        >
          <Code
            display="block"
            whiteSpace="pre"
            fontSize="sm"
            p={4}
            bg={{ base: "white", _dark: "gray.950" }}
            borderRadius="md"
          >
            {JSON.stringify(semanticTokens, null, 2)}
          </Code>
        </Box>

        <VStack gap={4} align="start" w="full" mt={6}>
          <Heading size="lg">Common Semantic Tokens</Heading>

          <Box w="full">
            <Heading size="md" mb={3}>Background Colors</Heading>
            <VStack gap={2} align="start">
              <Box p={3} bg="bg" borderWidth="1px" w="full" borderRadius="md">
                <Text><Code>bg</Code> - Default background</Text>
              </Box>
              <Box p={3} bg="bg.subtle" borderWidth="1px" w="full" borderRadius="md">
                <Text><Code>bg.subtle</Code> - Subtle background</Text>
              </Box>
              <Box p={3} bg="bg.muted" borderWidth="1px" w="full" borderRadius="md">
                <Text><Code>bg.muted</Code> - Muted background</Text>
              </Box>
              <Box p={3} bg="bg.emphasized" borderWidth="1px" w="full" borderRadius="md">
                <Text><Code>bg.emphasized</Code> - Emphasized background</Text>
              </Box>
            </VStack>
          </Box>

          <Box w="full">
            <Heading size="md" mb={3}>Foreground Colors</Heading>
            <VStack gap={2} align="start">
              <Box p={3} borderWidth="1px" w="full" borderRadius="md">
                <Text color="fg"><Code>fg</Code> - Default foreground</Text>
              </Box>
              <Box p={3} borderWidth="1px" w="full" borderRadius="md">
                <Text color="fg.muted"><Code>fg.muted</Code> - Muted foreground</Text>
              </Box>
              <Box p={3} borderWidth="1px" w="full" borderRadius="md">
                <Text color="fg.subtle"><Code>fg.subtle</Code> - Subtle foreground</Text>
              </Box>
            </VStack>
          </Box>

          <Box w="full">
            <Heading size="md" mb={3}>Border Colors</Heading>
            <VStack gap={2} align="start">
              <Box p={3} borderWidth="2px" borderColor="border" w="full" borderRadius="md">
                <Text><Code>border</Code> - Default border</Text>
              </Box>
              <Box p={3} borderWidth="2px" borderColor="border.muted" w="full" borderRadius="md">
                <Text><Code>border.muted</Code> - Muted border</Text>
              </Box>
              <Box p={3} borderWidth="2px" borderColor="border.emphasized" w="full" borderRadius="md">
                <Text><Code>border.emphasized</Code> - Emphasized border</Text>
              </Box>
            </VStack>
          </Box>

          <Box w="full">
            <Heading size="md" mb={3}>Status Colors</Heading>
            <VStack gap={2} align="start">
              <Box p={3} bg="bg.error" color="fg.error" w="full" borderRadius="md">
                <Text><Code>bg.error</Code> + <Code>fg.error</Code> - Error state</Text>
              </Box>
              <Box p={3} bg="bg.warning" color="fg.warning" w="full" borderRadius="md">
                <Text><Code>bg.warning</Code> + <Code>fg.warning</Code> - Warning state</Text>
              </Box>
              <Box p={3} bg="bg.success" color="fg.success" w="full" borderRadius="md">
                <Text><Code>bg.success</Code> + <Code>fg.success</Code> - Success state</Text>
              </Box>
              <Box p={3} bg="bg.info" color="fg.info" w="full" borderRadius="md">
                <Text><Code>bg.info</Code> + <Code>fg.info</Code> - Info state</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>

        <Box
          w="full"
          p={6}
          bg={{ base: "blue.50", _dark: "blue.900" }}
          borderRadius="lg"
          mt={6}
        >
          <Heading size="md" mb={4}>Usage Example</Heading>
          <Code display="block" whiteSpace="pre" fontSize="sm">
{`<Box bg="bg.subtle" color="fg.muted">
  This uses semantic tokens
</Box>

// Instead of:
<Box bg="gray.50" color="gray.600">
  This uses direct color tokens
</Box>`}
          </Code>
        </Box>
      </VStack>
    </Box>
  );
}
