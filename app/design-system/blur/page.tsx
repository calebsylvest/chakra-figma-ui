import { Box, Heading, VStack, Text, SimpleGrid, HStack } from "@chakra-ui/react";

// Blur tokens
const blurTokens = [
  { token: "sm", value: "4px", description: "Subtle blur" },
  { token: "md", value: "8px", description: "Moderate blur" },
  { token: "lg", value: "12px", description: "Strong blur" },
  { token: "xl", value: "16px", description: "Very strong blur" },
  { token: "2xl", value: "24px", description: "Extra strong blur" },
  { token: "3xl", value: "40px", description: "Maximum blur" },
];

interface BlurBoxProps {
  token: string;
  value: string;
  description: string;
}

function BlurBox({ token, value, description }: BlurBoxProps) {
  return (
    <VStack gap={3} align="start" w="full">
      <Box
        w="full"
        h="120px"
        position="relative"
        borderRadius="md"
        overflow="hidden"
        borderWidth="1px"
        borderColor={{ base: "gray.200", _dark: "gray.700" }}
      >
        {/* Background pattern */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient="to-br"
          gradientFrom={{ base: "blue.400", _dark: "blue.600" }}
          gradientTo={{ base: "purple.400", _dark: "purple.600" }}
        />

        {/* Blurred overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          style={{ backdropFilter: `blur(${value})` }}
          bg={{ base: "whiteAlpha.300", _dark: "blackAlpha.300" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack gap={0}>
            <Text fontWeight="bold" fontSize="lg" color={{ base: "gray.900", _dark: "white" }}>
              {token}
            </Text>
            <Text fontSize="sm" color={{ base: "gray.700", _dark: "gray.200" }}>
              {value}
            </Text>
          </VStack>
        </Box>
      </Box>

      <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
        {description}
      </Text>
    </VStack>
  );
}

export default function BlurPage() {
  return (
    <Box p={8}>
      <VStack gap={12} align="start" maxW="1200px" mx="auto">
        {/* Header */}
        <VStack gap={3} align="start">
          <Heading size="4xl">Blur</Heading>
          <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.400" }}>
            Blur effect tokens for creating glassmorphism designs, backdrop effects,
            and visual depth in overlays and modals.
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
              Accessibility Note
            </Text>
            <Text fontSize="sm" color={{ base: "blue.800", _dark: "blue.300" }}>
              When using blur effects, ensure sufficient contrast between text and blurred
              backgrounds. Test text readability across all blur levels. Use stronger blur
              values (lg-3xl) for decorative purposes, and lighter values (sm-md) when
              maintaining content visibility is important.
            </Text>
          </VStack>
        </Box>

        {/* Blur Scale */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Blur Scale</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Backdrop filter blur values from subtle to maximum.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} w="full">
            {blurTokens.map((blur) => (
              <BlurBox
                key={blur.token}
                token={blur.token}
                value={blur.value}
                description={blur.description}
              />
            ))}
          </SimpleGrid>
        </VStack>

        {/* Glassmorphism Examples */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Glassmorphism</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Modern glass-like effects using backdrop blur.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Navigation Bar */}
            <Box
              h="200px"
              position="relative"
              borderRadius="lg"
              overflow="hidden"
              borderWidth="1px"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgGradient="to-br"
                gradientFrom={{ base: "cyan.300", _dark: "cyan.700" }}
                gradientTo={{ base: "blue.300", _dark: "blue.700" }}
              />

              <Box
                position="absolute"
                top={4}
                left={4}
                right={4}
                p={4}
                style={{ backdropFilter: "blur(12px)" }}
                bg={{ base: "whiteAlpha.400", _dark: "blackAlpha.400" }}
                borderRadius="md"
                borderWidth="1px"
                borderColor={{ base: "whiteAlpha.500", _dark: "whiteAlpha.200" }}
              >
                <Text fontWeight="semibold" color={{ base: "gray.900", _dark: "white" }}>
                  Glass Navigation
                </Text>
                <Text fontSize="xs" color={{ base: "gray.700", _dark: "gray.300" }} mt={1}>
                  blur(12px) with semi-transparent background
                </Text>
              </Box>
            </Box>

            {/* Modal Overlay */}
            <Box
              h="200px"
              position="relative"
              borderRadius="lg"
              overflow="hidden"
              borderWidth="1px"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgGradient="to-br"
                gradientFrom={{ base: "purple.300", _dark: "purple.700" }}
                gradientTo={{ base: "pink.300", _dark: "pink.700" }}
              />

              <Box
                position="absolute"
                top="50%"
                left="50%"
                style={{
                  transform: "translate(-50%, -50%)",
                  backdropFilter: "blur(24px)"
                }}
                p={6}
                bg={{ base: "whiteAlpha.300", _dark: "blackAlpha.400" }}
                borderRadius="lg"
                borderWidth="1px"
                borderColor={{ base: "whiteAlpha.500", _dark: "whiteAlpha.200" }}
                minW="60%"
              >
                <Text fontWeight="semibold" color={{ base: "gray.900", _dark: "white" }}>
                  Modal Dialog
                </Text>
                <Text fontSize="xs" color={{ base: "gray.700", _dark: "gray.300" }} mt={1}>
                  blur(24px) with frosted glass effect
                </Text>
              </Box>
            </Box>

            {/* Card with Blur */}
            <Box
              h="200px"
              position="relative"
              borderRadius="lg"
              overflow="hidden"
              borderWidth="1px"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgGradient="to-br"
                gradientFrom={{ base: "green.300", _dark: "green.700" }}
                gradientTo={{ base: "teal.300", _dark: "teal.700" }}
              />

              <Box
                position="absolute"
                bottom={4}
                left={4}
                right={4}
                p={4}
                style={{ backdropFilter: "blur(8px)" }}
                bg={{ base: "whiteAlpha.500", _dark: "blackAlpha.500" }}
                borderRadius="md"
                borderWidth="1px"
                borderColor={{ base: "whiteAlpha.600", _dark: "whiteAlpha.300" }}
              >
                <Text fontWeight="semibold" color={{ base: "gray.900", _dark: "white" }}>
                  Image Caption
                </Text>
                <Text fontSize="xs" color={{ base: "gray.700", _dark: "gray.300" }} mt={1}>
                  blur(8px) overlay on image
                </Text>
              </Box>
            </Box>

            {/* Search Overlay */}
            <Box
              h="200px"
              position="relative"
              borderRadius="lg"
              overflow="hidden"
              borderWidth="1px"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgGradient="to-br"
                gradientFrom={{ base: "orange.300", _dark: "orange.700" }}
                gradientTo={{ base: "red.300", _dark: "red.700" }}
              />

              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                style={{ backdropFilter: "blur(16px)" }}
                bg={{ base: "blackAlpha.200", _dark: "blackAlpha.600" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                p={6}
              >
                <Box
                  w="full"
                  p={3}
                  bg={{ base: "whiteAlpha.700", _dark: "whiteAlpha.200" }}
                  borderRadius="md"
                  borderWidth="1px"
                  borderColor={{ base: "whiteAlpha.800", _dark: "whiteAlpha.300" }}
                >
                  <Text fontSize="sm" color={{ base: "gray.700", _dark: "gray.300" }}>
                    Search overlay with blur(16px)
                  </Text>
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Common Use Cases */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Common Use Cases</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              When to use different blur intensities.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={2} align="start">
                <HStack justify="space-between" w="full">
                  <Text fontWeight="semibold">sm (4px)</Text>
                  <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                    Subtle
                  </Text>
                </HStack>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Minimal blur for maintaining readability while adding slight depth
                </Text>
              </VStack>
            </Box>

            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={2} align="start">
                <HStack justify="space-between" w="full">
                  <Text fontWeight="semibold">md (8px)</Text>
                  <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                    Moderate
                  </Text>
                </HStack>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Navigation bars, toolbars, image captions
                </Text>
              </VStack>
            </Box>

            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={2} align="start">
                <HStack justify="space-between" w="full">
                  <Text fontWeight="semibold">lg (12px)</Text>
                  <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                    Strong
                  </Text>
                </HStack>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Glass cards, floating panels, dropdown menus
                </Text>
              </VStack>
            </Box>

            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={2} align="start">
                <HStack justify="space-between" w="full">
                  <Text fontWeight="semibold">xl-3xl (16-40px)</Text>
                  <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                    Maximum
                  </Text>
                </HStack>
                <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Modal overlays, full-screen dialogs, dramatic effects
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

// Basic backdrop blur
<Box
  style={{ backdropFilter: "blur(8px)" }}
  bg="whiteAlpha.300"
>
  Glass effect with md blur
</Box>

// Glass navigation bar
<Box
  position="sticky"
  top={0}
  style={{ backdropFilter: "blur(12px)" }}
  bg={{ base: "whiteAlpha.500", _dark: "blackAlpha.500" }}
  borderBottomWidth="1px"
  borderColor="whiteAlpha.200"
  zIndex="sticky"
>
  Navigation content
</Box>

// Modal overlay
<Box
  position="fixed"
  top={0}
  left={0}
  right={0}
  bottom={0}
  style={{ backdropFilter: "blur(24px)" }}
  bg="blackAlpha.600"
  zIndex="modal"
>
  <Box
    bg={{ base: "white", _dark: "gray.800" }}
    p={6}
    borderRadius="lg"
  >
    Modal content
  </Box>
</Box>

// Image caption overlay
<Box position="relative">
  <img src="/image.jpg" alt="..." />
  <Box
    position="absolute"
    bottom={0}
    left={0}
    right={0}
    p={4}
    style={{ backdropFilter: "blur(8px)" }}
    bg="blackAlpha.400"
  >
    Caption text
  </Box>
</Box>

// Combining with borders
<Box
  style={{ backdropFilter: "blur(16px)" }}
  bg="whiteAlpha.200"
  borderWidth="1px"
  borderColor="whiteAlpha.400"
  borderRadius="lg"
>
  Frosted glass card
</Box>`}
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
