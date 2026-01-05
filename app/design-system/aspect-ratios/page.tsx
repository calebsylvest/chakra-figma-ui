import { Box, Heading, VStack, Text, SimpleGrid } from "@chakra-ui/react";

// Aspect ratio tokens
const aspectRatioTokens = [
  { token: "square", value: "1 / 1", ratio: "1:1", description: "Perfect square", use: "Profile pictures, icons, thumbnails" },
  { token: "landscape", value: "4 / 3", ratio: "4:3", description: "Traditional landscape", use: "Photography, presentations" },
  { token: "portrait", value: "3 / 4", ratio: "3:4", description: "Traditional portrait", use: "Vertical images, stories" },
  { token: "wide", value: "16 / 9", ratio: "16:9", description: "Widescreen", use: "Videos, hero images, banners" },
  { token: "ultrawide", value: "21 / 9", ratio: "21:9", description: "Ultra-wide", use: "Cinematic content, wide banners" },
  { token: "golden", value: "1.618 / 1", ratio: "1.618:1", description: "Golden ratio", use: "Aesthetically pleasing layouts" },
];

interface AspectRatioBoxProps {
  token: string;
  value: string;
  ratio: string;
  description: string;
  use: string;
}

function AspectRatioBox({ token, value, ratio, description, use }: AspectRatioBoxProps) {
  return (
    <VStack gap={4} align="start" w="full">
      <Box
        w="full"
        bg={{ base: "gradient.to-br", _dark: "gradient.to-br" }}
        bgGradient="to-br"
        gradientFrom={{ base: "purple.400", _dark: "purple.600" }}
        gradientTo={{ base: "pink.400", _dark: "pink.600" }}
        borderRadius="md"
        borderWidth="1px"
        borderColor={{ base: "gray.200", _dark: "gray.700" }}
        style={{
          aspectRatio: value,
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack gap={0}>
          <Text fontWeight="bold" fontSize="lg" color="white">
            {ratio}
          </Text>
          <Text fontSize="sm" color="whiteAlpha.900">
            {token}
          </Text>
        </VStack>
      </Box>
      <VStack gap={1} align="start">
        <Text fontWeight="semibold" fontSize="sm">
          {description}
        </Text>
        <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
          {use}
        </Text>
      </VStack>
    </VStack>
  );
}

export default function AspectRatiosPage() {
  return (
    <Box p={8}>
      <VStack gap={12} align="start" maxW="1200px" mx="auto">
        {/* Header */}
        <VStack gap={3} align="start">
          <Heading size="4xl">Aspect Ratios</Heading>
          <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.400" }}>
            Aspect ratio tokens for maintaining consistent proportions in images, videos,
            and responsive containers across different screen sizes.
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
              Aspect ratios maintain proportions regardless of container size, making them
              perfect for responsive designs. The CSS aspect-ratio property automatically
              calculates height based on width (or vice versa).
            </Text>
          </VStack>
        </Box>

        {/* Aspect Ratio Scale */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Aspect Ratio Tokens</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Standard aspect ratios for common use cases.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} w="full">
            {aspectRatioTokens.map((aspectRatio) => (
              <AspectRatioBox
                key={aspectRatio.token}
                token={aspectRatio.token}
                value={aspectRatio.value}
                ratio={aspectRatio.ratio}
                description={aspectRatio.description}
                use={aspectRatio.use}
              />
            ))}
          </SimpleGrid>
        </VStack>

        {/* Visual Comparison */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Visual Comparison</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              All ratios at the same width for easy comparison.
            </Text>
          </VStack>

          <VStack gap={4} align="start" w="full">
            {aspectRatioTokens.map((aspectRatio) => (
              <Box key={aspectRatio.token} w="full">
                <Text fontSize="sm" fontWeight="semibold" mb={2}>
                  {aspectRatio.token} ({aspectRatio.ratio})
                </Text>
                <Box
                  w="full"
                  maxW="400px"
                  bg={{ base: "gradient.to-r", _dark: "gradient.to-r" }}
                  bgGradient="to-r"
                  gradientFrom={{ base: "blue.400", _dark: "blue.600" }}
                  gradientTo={{ base: "cyan.400", _dark: "cyan.600" }}
                  borderRadius="md"
                  style={{
                    aspectRatio: aspectRatio.value,
                  }}
                />
              </Box>
            ))}
          </VStack>
        </VStack>

        {/* Common Use Cases */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Common Use Cases</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Practical applications of aspect ratios.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Video Container */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Video Container (16:9)</Heading>
                <Box
                  w="full"
                  bg={{ base: "gray.900", _dark: "gray.950" }}
                  borderRadius="md"
                  style={{ aspectRatio: "16 / 9" }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text color="gray.400" fontSize="sm">
                    Video Player
                  </Text>
                </Box>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  Standard widescreen format for videos
                </Text>
              </VStack>
            </Box>

            {/* Profile Picture */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Profile Picture (1:1)</Heading>
                <Box
                  w="120px"
                  bg={{ base: "green.400", _dark: "green.600" }}
                  borderRadius="full"
                  style={{ aspectRatio: "1 / 1" }}
                />
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  Square format for avatars and thumbnails
                </Text>
              </VStack>
            </Box>

            {/* Card Thumbnail */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Card Thumbnail (4:3)</Heading>
                <Box
                  w="full"
                  bg={{ base: "orange.200", _dark: "orange.800" }}
                  borderRadius="md"
                  style={{ aspectRatio: "4 / 3" }}
                />
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  Classic landscape format for image cards
                </Text>
              </VStack>
            </Box>

            {/* Story Format */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Story Format (3:4)</Heading>
                <Box
                  w="180px"
                  bg={{ base: "purple.200", _dark: "purple.800" }}
                  borderRadius="md"
                  style={{ aspectRatio: "3 / 4" }}
                  mx="auto"
                />
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  Vertical format for mobile stories
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Usage Example */}
        <Box
          w="full"
          p={6}
          bg={{ base: "gray.50", _dark: "gray.900" }}
          borderRadius="lg"
        >
          <VStack gap={4} align="start">
            <Heading size="lg">Usage Example</Heading>
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
{`import { Box } from "@chakra-ui/react";

// Using aspect ratio tokens
<Box
  w="full"
  style={{ aspectRatio: "16 / 9" }}
  bg="blue.500"
>
  16:9 Video Container
</Box>

// Square container
<Box
  w={64}
  style={{ aspectRatio: "1 / 1" }}
  bg="green.500"
>
  Square Image
</Box>

// Portrait format
<Box
  w="200px"
  style={{ aspectRatio: "3 / 4" }}
  bg="purple.500"
>
  Portrait Story
</Box>

// Responsive image with aspect ratio
<Box
  w="full"
  maxW="600px"
  style={{ aspectRatio: "4 / 3" }}
  backgroundImage="url('/image.jpg')"
  backgroundSize="cover"
  backgroundPosition="center"
  borderRadius="lg"
/>

// Ultra-wide banner
<Box
  w="full"
  style={{ aspectRatio: "21 / 9" }}
  bg="orange.500"
>
  Ultra-wide Banner
</Box>`}
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
