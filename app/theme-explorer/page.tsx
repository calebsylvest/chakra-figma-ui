"use client";

import { Box, Heading, VStack, Code, Grid, Text } from "@chakra-ui/react";
import { defaultSystem } from "@chakra-ui/react";

export default function ThemeExplorer() {
  const tokens = defaultSystem.tokens;

  return (
    <Box p={8}>
      <VStack gap={8} align="start" maxW="1200px" mx="auto">
        <Heading>Chakra UI Default Theme Explorer</Heading>

        <VStack gap={4} align="start" w="full">
          <Heading size="xl">Colors</Heading>
          <Code display="block" p={4} overflow="auto" maxH="400px" w="full">
            {JSON.stringify(tokens.colors, null, 2)}
          </Code>
        </VStack>

        <VStack gap={4} align="start" w="full">
          <Heading size="xl">Spacing</Heading>
          <Code display="block" p={4} overflow="auto" maxH="400px" w="full">
            {JSON.stringify(tokens.spacing, null, 2)}
          </Code>
        </VStack>

        <VStack gap={4} align="start" w="full">
          <Heading size="xl">Font Sizes</Heading>
          <Code display="block" p={4} overflow="auto" maxH="400px" w="full">
            {JSON.stringify(tokens.fontSizes, null, 2)}
          </Code>
        </VStack>

        <VStack gap={4} align="start" w="full">
          <Heading size="xl">Font Weights</Heading>
          <Code display="block" p={4} overflow="auto" maxH="400px" w="full">
            {JSON.stringify(tokens.fontWeights, null, 2)}
          </Code>
        </VStack>

        <VStack gap={4} align="start" w="full">
          <Heading size="xl">Radii (Border Radius)</Heading>
          <Code display="block" p={4} overflow="auto" maxH="400px" w="full">
            {JSON.stringify(tokens.radii, null, 2)}
          </Code>
        </VStack>

        <VStack gap={4} align="start" w="full">
          <Heading size="xl">All Tokens</Heading>
          <Text fontSize="sm" color="gray.600">
            Complete token reference
          </Text>
          <Code display="block" p={4} overflow="auto" maxH="600px" w="full">
            {JSON.stringify(tokens, null, 2)}
          </Code>
        </VStack>
      </VStack>
    </Box>
  );
}
