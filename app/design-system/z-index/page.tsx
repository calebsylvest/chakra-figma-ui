import { Box, Heading, VStack, Text, SimpleGrid, HStack } from "@chakra-ui/react";

// Z-index tokens
const zIndexTokens = [
  { token: "hide", value: "-1", description: "Hidden below normal flow", use: "Hidden elements, decorative backgrounds" },
  { token: "base", value: "0", description: "Normal document flow", use: "Default content, standard elements" },
  { token: "docked", value: "10", description: "Docked/pinned elements", use: "Sticky sidebars, pinned headers" },
  { token: "dropdown", value: "1000", description: "Dropdown menus", use: "Select menus, dropdown lists" },
  { token: "sticky", value: "1100", description: "Sticky positioned elements", use: "Sticky headers, fixed navigation" },
  { token: "banner", value: "1200", description: "Site-wide banners", use: "Announcement banners, cookie notices" },
  { token: "overlay", value: "1300", description: "Overlay backgrounds", use: "Modal backdrops, drawer overlays" },
  { token: "modal", value: "1400", description: "Modal dialogs", use: "Dialog windows, lightboxes" },
  { token: "popover", value: "1500", description: "Popover content", use: "Popovers, floating menus" },
  { token: "skipLink", value: "1600", description: "Skip navigation links", use: "Accessibility skip links" },
  { token: "toast", value: "1700", description: "Toast notifications", use: "Toast messages, snackbars" },
  { token: "tooltip", value: "1800", description: "Tooltip overlays", use: "Tooltips, hover cards" },
];

interface ZIndexRowProps {
  token: string;
  value: string;
  description: string;
  use: string;
  index: number;
}

function ZIndexRow({ token, value, description, use, index }: ZIndexRowProps) {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      borderColor={{ base: "gray.200", _dark: "gray.700" }}
      bg={{ base: "white", _dark: "gray.800" }}
    >
      <HStack gap={4} align="start" w="full">
        <Box
          minW="12"
          h="12"
          bg={{ base: `purple.${Math.min(900, 200 + index * 50)}`, _dark: `purple.${Math.max(400, 800 - index * 30)}` }}
          borderRadius="md"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexShrink={0}
        >
          <Text fontWeight="bold" fontSize="xs" color="white">
            {value}
          </Text>
        </Box>

        <VStack gap={1} align="start" flex={1}>
          <HStack justify="space-between" w="full">
            <Text fontWeight="semibold" fontSize="sm">
              {token}
            </Text>
            <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
              z-index: {value}
            </Text>
          </HStack>
          <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
            {description}
          </Text>
          <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }} fontStyle="italic">
            {use}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}

export default function ZIndexPage() {
  return (
    <Box p={8}>
      <VStack gap={12} align="start" maxW="1200px" mx="auto">
        {/* Header */}
        <VStack gap={3} align="start">
          <Heading size="4xl">Z-Index</Heading>
          <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.400" }}>
            Layer stacking and elevation hierarchy tokens for controlling the vertical
            order of overlapping elements.
          </Text>
        </VStack>

        {/* Warning Box */}
        <Box
          w="full"
          p={6}
          bg={{ base: "orange.50", _dark: "orange.950" }}
          borderRadius="lg"
          borderWidth="1px"
          borderColor={{ base: "orange.200", _dark: "orange.800" }}
        >
          <VStack gap={2} align="start">
            <Text fontWeight="semibold" color={{ base: "orange.900", _dark: "orange.200" }}>
              Important: Use Semantic Tokens
            </Text>
            <Text fontSize="sm" color={{ base: "orange.800", _dark: "orange.300" }}>
              Always use the semantic z-index tokens (tooltip, modal, overlay, etc.) instead
              of arbitrary numbers. This ensures a consistent stacking order across your
              application and prevents z-index conflicts. Avoid using random values like
              999 or 9999.
            </Text>
          </VStack>
        </Box>

        {/* Z-Index Hierarchy */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Stacking Order Hierarchy</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Complete z-index scale from lowest to highest layer.
            </Text>
          </VStack>

          <VStack gap={3} w="full">
            {zIndexTokens.map((zIndex, index) => (
              <ZIndexRow
                key={zIndex.token}
                token={zIndex.token}
                value={zIndex.value}
                description={zIndex.description}
                use={zIndex.use}
                index={index}
              />
            ))}
          </VStack>
        </VStack>

        {/* Visual Stacking Demo */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Visual Stacking</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Interactive demonstration of layered elements.
            </Text>
          </VStack>

          <Box
            w="full"
            h="400px"
            position="relative"
            bg={{ base: "gray.100", _dark: "gray.900" }}
            borderRadius="lg"
            borderWidth="1px"
            borderColor={{ base: "gray.200", _dark: "gray.700" }}
            overflow="hidden"
          >
            {/* Base content */}
            <Box
              position="absolute"
              top="40%"
              left="10%"
              p={4}
              bg={{ base: "gray.200", _dark: "gray.800" }}
              borderRadius="md"
              borderWidth="1px"
              borderColor={{ base: "gray.300", _dark: "gray.700" }}
              zIndex="base"
            >
              <Text fontSize="sm" fontWeight="semibold">Base (0)</Text>
              <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                Normal content
              </Text>
            </Box>

            {/* Docked sidebar */}
            <Box
              position="absolute"
              top="30%"
              left="25%"
              p={4}
              bg={{ base: "blue.100", _dark: "blue.900" }}
              borderRadius="md"
              borderWidth="1px"
              borderColor={{ base: "blue.300", _dark: "blue.700" }}
              zIndex="docked"
            >
              <Text fontSize="sm" fontWeight="semibold">Docked (10)</Text>
              <Text fontSize="xs" color={{ base: "blue.700", _dark: "blue.300" }}>
                Sticky sidebar
              </Text>
            </Box>

            {/* Dropdown */}
            <Box
              position="absolute"
              top="50%"
              left="20%"
              p={4}
              bg={{ base: "green.100", _dark: "green.900" }}
              borderRadius="md"
              borderWidth="1px"
              borderColor={{ base: "green.300", _dark: "green.700" }}
              zIndex="dropdown"
            >
              <Text fontSize="sm" fontWeight="semibold">Dropdown (1000)</Text>
              <Text fontSize="xs" color={{ base: "green.700", _dark: "green.300" }}>
                Select menu
              </Text>
            </Box>

            {/* Overlay backdrop */}
            <Box
              position="absolute"
              top="20%"
              left="35%"
              right="35%"
              bottom="20%"
              bg={{ base: "blackAlpha.300", _dark: "blackAlpha.600" }}
              borderRadius="md"
              zIndex="overlay"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="xs" fontWeight="semibold" color={{ base: "gray.900", _dark: "white" }}>
                Overlay (1300)
              </Text>
            </Box>

            {/* Modal */}
            <Box
              position="absolute"
              top="25%"
              left="40%"
              p={4}
              bg={{ base: "white", _dark: "gray.800" }}
              borderRadius="md"
              borderWidth="1px"
              borderColor={{ base: "gray.300", _dark: "gray.700" }}
              zIndex="modal"
              shadow="lg"
            >
              <Text fontSize="sm" fontWeight="semibold">Modal (1400)</Text>
              <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                Dialog window
              </Text>
            </Box>

            {/* Toast */}
            <Box
              position="absolute"
              top="10%"
              right="5%"
              p={3}
              bg={{ base: "purple.500", _dark: "purple.600" }}
              color="white"
              borderRadius="md"
              zIndex="toast"
              shadow="md"
            >
              <Text fontSize="sm" fontWeight="semibold">Toast (1700)</Text>
              <Text fontSize="xs">Notification</Text>
            </Box>

            {/* Tooltip */}
            <Box
              position="absolute"
              bottom="15%"
              right="15%"
              p={2}
              bg={{ base: "gray.900", _dark: "gray.950" }}
              color="white"
              borderRadius="sm"
              zIndex="tooltip"
              fontSize="xs"
            >
              Tooltip (1800)
            </Box>
          </Box>
        </VStack>

        {/* Common Patterns */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Common Patterns</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Typical use cases for different z-index levels.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Modal Pattern */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start">
                <Heading size="md">Modal Dialog</Heading>
                <VStack gap={2} align="start" w="full">
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    • Overlay backdrop: zIndex="overlay"
                  </Text>
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    • Modal content: zIndex="modal"
                  </Text>
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    • Close button tooltip: zIndex="tooltip"
                  </Text>
                </VStack>
              </VStack>
            </Box>

            {/* Navigation Pattern */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start">
                <Heading size="md">Navigation</Heading>
                <VStack gap={2} align="start" w="full">
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    • Sticky header: zIndex="sticky"
                  </Text>
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    • Dropdown menus: zIndex="dropdown"
                  </Text>
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    • Mobile drawer: zIndex="overlay" + "modal"
                  </Text>
                </VStack>
              </VStack>
            </Box>

            {/* Notifications Pattern */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start">
                <Heading size="md">Notifications</Heading>
                <VStack gap={2} align="start" w="full">
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    • Toast messages: zIndex="toast"
                  </Text>
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    • Banner announcements: zIndex="banner"
                  </Text>
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    • Popovers: zIndex="popover"
                  </Text>
                </VStack>
              </VStack>
            </Box>

            {/* Interactive Elements */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={3} align="start">
                <Heading size="md">Interactive Elements</Heading>
                <VStack gap={2} align="start" w="full">
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    • Tooltips: zIndex="tooltip"
                  </Text>
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    • Context menus: zIndex="popover"
                  </Text>
                  <Text fontSize="sm" color={{ base: "gray.600", _dark: "gray.400" }}>
                    • Skip links: zIndex="skipLink"
                  </Text>
                </VStack>
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

// Sticky header
<Box
  position="sticky"
  top={0}
  zIndex="sticky"
  bg="white"
  shadow="sm"
>
  Navigation content
</Box>

// Dropdown menu
<Box
  position="absolute"
  top="100%"
  left={0}
  zIndex="dropdown"
  bg="white"
  shadow="md"
>
  Menu items
</Box>

// Modal dialog
<>
  {/* Backdrop */}
  <Box
    position="fixed"
    top={0}
    left={0}
    right={0}
    bottom={0}
    bg="blackAlpha.600"
    zIndex="overlay"
  />

  {/* Modal content */}
  <Box
    position="fixed"
    top="50%"
    left="50%"
    transform="translate(-50%, -50%)"
    zIndex="modal"
    bg="white"
    p={6}
    borderRadius="lg"
  >
    Dialog content
  </Box>
</>

// Toast notification
<Box
  position="fixed"
  top={4}
  right={4}
  zIndex="toast"
  bg="blue.500"
  color="white"
  p={4}
  borderRadius="md"
>
  Success message
</Box>

// Tooltip
<Box
  position="absolute"
  bottom="100%"
  left="50%"
  transform="translateX(-50%)"
  zIndex="tooltip"
  bg="gray.900"
  color="white"
  px={2}
  py={1}
  borderRadius="sm"
  fontSize="sm"
>
  Tooltip text
</Box>

// DON'T do this
<Box zIndex={9999}>Bad practice</Box>

// DO this instead
<Box zIndex="modal">Good practice</Box>`}
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
