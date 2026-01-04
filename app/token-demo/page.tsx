import { Box, Heading, VStack, HStack, Text, Badge } from "@chakra-ui/react";

export default function TokenDemo() {
  return (
    <Box p={8}>
      <VStack gap={8} align="start" maxW="1200px" mx="auto">
        <Heading>Custom Token Demo</Heading>
        <Text color="gray.600">
          Examples showing how to use custom tokens defined in theme/tokens.ts
        </Text>

        {/* All Color Palettes */}
        <VStack gap={6} align="start" w="full">
          <Heading size="xl">All Color Palettes</Heading>
          <Text fontSize="sm" color="gray.600">
            Complete Chakra UI color system now available in your theme
          </Text>

          {/* Gray */}
          <Box w="full">
            <Text fontWeight="bold" mb={2}>Gray</Text>
            <HStack gap={1} wrap="wrap">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <Badge key={shade} bg={`gray.${shade}`} color={shade < 500 ? "gray.900" : "white"} size="sm">
                  {shade}
                </Badge>
              ))}
            </HStack>
          </Box>

          {/* Red */}
          <Box w="full">
            <Text fontWeight="bold" mb={2}>Red</Text>
            <HStack gap={1} wrap="wrap">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <Badge key={shade} bg={`red.${shade}`} color={shade < 400 ? "red.900" : "white"} size="sm">
                  {shade}
                </Badge>
              ))}
            </HStack>
          </Box>

          {/* Orange */}
          <Box w="full">
            <Text fontWeight="bold" mb={2}>Orange</Text>
            <HStack gap={1} wrap="wrap">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <Badge key={shade} bg={`orange.${shade}`} color={shade < 400 ? "orange.900" : "white"} size="sm">
                  {shade}
                </Badge>
              ))}
            </HStack>
          </Box>

          {/* Yellow */}
          <Box w="full">
            <Text fontWeight="bold" mb={2}>Yellow</Text>
            <HStack gap={1} wrap="wrap">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <Badge key={shade} bg={`yellow.${shade}`} color={shade < 500 ? "yellow.900" : "white"} size="sm">
                  {shade}
                </Badge>
              ))}
            </HStack>
          </Box>

          {/* Green */}
          <Box w="full">
            <Text fontWeight="bold" mb={2}>Green</Text>
            <HStack gap={1} wrap="wrap">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <Badge key={shade} bg={`green.${shade}`} color={shade < 400 ? "green.900" : "white"} size="sm">
                  {shade}
                </Badge>
              ))}
            </HStack>
          </Box>

          {/* Teal */}
          <Box w="full">
            <Text fontWeight="bold" mb={2}>Teal</Text>
            <HStack gap={1} wrap="wrap">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <Badge key={shade} bg={`teal.${shade}`} color={shade < 400 ? "teal.900" : "white"} size="sm">
                  {shade}
                </Badge>
              ))}
            </HStack>
          </Box>

          {/* Blue */}
          <Box w="full">
            <Text fontWeight="bold" mb={2}>Blue</Text>
            <HStack gap={1} wrap="wrap">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <Badge key={shade} bg={`blue.${shade}`} color={shade < 400 ? "blue.900" : "white"} size="sm">
                  {shade}
                </Badge>
              ))}
            </HStack>
          </Box>

          {/* Cyan */}
          <Box w="full">
            <Text fontWeight="bold" mb={2}>Cyan</Text>
            <HStack gap={1} wrap="wrap">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <Badge key={shade} bg={`cyan.${shade}`} color={shade < 400 ? "cyan.900" : "white"} size="sm">
                  {shade}
                </Badge>
              ))}
            </HStack>
          </Box>

          {/* Purple */}
          <Box w="full">
            <Text fontWeight="bold" mb={2}>Purple</Text>
            <HStack gap={1} wrap="wrap">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <Badge key={shade} bg={`purple.${shade}`} color={shade < 400 ? "purple.900" : "white"} size="sm">
                  {shade}
                </Badge>
              ))}
            </HStack>
          </Box>

          {/* Pink */}
          <Box w="full">
            <Text fontWeight="bold" mb={2}>Pink</Text>
            <HStack gap={1} wrap="wrap">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <Badge key={shade} bg={`pink.${shade}`} color={shade < 400 ? "pink.900" : "white"} size="sm">
                  {shade}
                </Badge>
              ))}
            </HStack>
          </Box>

          {/* Brand (Custom) */}
          <Box w="full">
            <Text fontWeight="bold" mb={2}>Brand (Custom)</Text>
            <HStack gap={1} wrap="wrap">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <Badge key={shade} bg={`brand.${shade}`} color={shade < 300 ? "brand.900" : "white"} size="sm">
                  {shade}
                </Badge>
              ))}
            </HStack>
          </Box>
        </VStack>

        {/* Custom Fonts Example */}
        <VStack gap={4} align="start" w="full">
          <Heading size="xl">Custom Fonts</Heading>
          <Text fontSize="sm" color="gray.600">
            Using Inter font family defined in tokens
          </Text>

          <Box p={6} bg="gray.50" borderRadius="lg" w="full">
            <Heading fontFamily="heading" mb={2}>
              Heading with Custom Font
            </Heading>
            <Text fontFamily="body">
              Body text with custom font family (Inter, sans-serif)
            </Text>
          </Box>
        </VStack>

        {/* Using Tokens in Code */}
        <VStack gap={4} align="start" w="full">
          <Heading size="xl">How to Use Custom Tokens</Heading>

          <Box p={6} bg="gray.50" borderRadius="lg" w="full" fontFamily="mono">
            <VStack gap={4} align="start">
              <Box>
                <Text fontWeight="bold" mb={2}>Colors:</Text>
                <Text fontSize="sm">{`<Box bg="brand.500" color="white">...</Box>`}</Text>
                <Text fontSize="sm">{`<Text color="brand.700">...</Text>`}</Text>
              </Box>

              <Box>
                <Text fontWeight="bold" mb={2}>Fonts:</Text>
                <Text fontSize="sm">{`<Heading fontFamily="heading">...</Heading>`}</Text>
                <Text fontSize="sm">{`<Text fontFamily="body">...</Text>`}</Text>
              </Box>

              <Box>
                <Text fontWeight="bold" mb={2}>With colorPalette prop:</Text>
                <Text fontSize="sm">{`<Badge colorPalette="brand">...</Badge>`}</Text>
                <Text fontSize="sm">{`<Button colorPalette="brand">...</Button>`}</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>

        {/* Color Palette Component Example */}
        <VStack gap={4} align="start" w="full">
          <Heading size="xl">Using colorPalette Prop</Heading>
          <Text fontSize="sm" color="gray.600">
            Many Chakra components accept a colorPalette prop
          </Text>

          <HStack gap={4}>
            <Badge colorPalette="brand" size="lg">Brand Badge</Badge>
            <Badge colorPalette="gray" size="lg">Gray Badge</Badge>
            <Badge colorPalette="red" size="lg">Red Badge</Badge>
            <Badge colorPalette="green" size="lg">Green Badge</Badge>
          </HStack>
        </VStack>

        {/* Instructions */}
        <Box p={6} bg="blue.50" borderRadius="lg" w="full" mt={8}>
          <Heading size="lg" mb={4}>How to Add Your Own Tokens</Heading>
          <VStack gap={3} align="start">
            <Text>1. Open <Text as="span" fontFamily="mono" fontWeight="bold">theme/tokens.ts</Text></Text>
            <Text>2. Add your custom values following the pattern shown</Text>
            <Text>3. Each token needs a value property: <Text as="span" fontFamily="mono">{`{ value: "your-value" }`}</Text></Text>
            <Text>4. Save the file and your tokens are immediately available</Text>
            <Text>5. Use tokens in components with the token name (e.g., bg="brand.500")</Text>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
