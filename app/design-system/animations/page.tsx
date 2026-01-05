"use client";

import { Box, Heading, VStack, Text, SimpleGrid, HStack } from "@chakra-ui/react";
import { useState } from "react";

// Duration tokens
const durationTokens = [
  { token: "fastest", value: "50ms", ms: 50, description: "Micro-interactions" },
  { token: "faster", value: "100ms", ms: 100, description: "Quick transitions" },
  { token: "fast", value: "150ms", ms: 150, description: "Snappy feedback" },
  { token: "normal", value: "200ms", ms: 200, description: "Standard transitions" },
  { token: "slow", value: "300ms", ms: 300, description: "Deliberate motion" },
  { token: "slower", value: "400ms", ms: 400, description: "Emphasized motion" },
  { token: "slowest", value: "500ms", ms: 500, description: "Maximum duration" },
];

// Easing functions
const easingTokens = [
  { token: "linear", value: "linear", description: "Constant speed", curve: "No acceleration" },
  { token: "ease-in", value: "ease-in", description: "Starts slow", curve: "Accelerates at end" },
  { token: "ease-out", value: "ease-out", description: "Ends slow", curve: "Decelerates at end" },
  { token: "ease-in-out", value: "ease-in-out", description: "Smooth both ends", curve: "Natural motion" },
];

interface AnimatedBoxProps {
  duration: string;
  label: string;
  ms: number;
}

function AnimatedBox({ duration, label, ms }: AnimatedBoxProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimate = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), ms + 50);
  };

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      borderColor={{ base: "gray.200", _dark: "gray.700" }}
      cursor="pointer"
      onClick={handleAnimate}
      userSelect="none"
    >
      <VStack gap={3} align="start" w="full">
        <HStack justify="space-between" w="full">
          <Text fontWeight="semibold" fontSize="sm">
            {label}
          </Text>
          <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
            {duration}
          </Text>
        </HStack>

        <Box
          w="full"
          h="40px"
          bg={{ base: "gray.100", _dark: "gray.700" }}
          borderRadius="sm"
          position="relative"
          overflow="hidden"
        >
          <Box
            h="full"
            bg={{ base: "purple.500", _dark: "purple.400" }}
            borderRadius="sm"
            transition={`width ${duration} ease-out`}
            w={isAnimating ? "100%" : "0%"}
          />
        </Box>

        <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
          Click to animate
        </Text>
      </VStack>
    </Box>
  );
}

interface EasingBoxProps {
  easing: string;
  label: string;
  description: string;
}

function EasingBox({ easing, label, description }: EasingBoxProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimate = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1050);
  };

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      borderColor={{ base: "gray.200", _dark: "gray.700" }}
      cursor="pointer"
      onClick={handleAnimate}
      userSelect="none"
    >
      <VStack gap={3} align="start" w="full">
        <VStack gap={0} align="start" w="full">
          <Text fontWeight="semibold" fontSize="sm">
            {label}
          </Text>
          <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
            {description}
          </Text>
        </VStack>

        <Box
          w="full"
          h="60px"
          bg={{ base: "gray.100", _dark: "gray.700" }}
          borderRadius="sm"
          position="relative"
        >
          <Box
            position="absolute"
            top="50%"
            left={isAnimating ? "calc(100% - 32px)" : "8px"}
            transform="translateY(-50%)"
            w="24px"
            h="24px"
            bg={{ base: "blue.500", _dark: "blue.400" }}
            borderRadius="full"
            transition={`left 1s ${easing}`}
          />
        </Box>

        <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
          Click to see easing
        </Text>
      </VStack>
    </Box>
  );
}

export default function AnimationsPage() {
  const [hoverState, setHoverState] = useState<string | null>(null);

  return (
    <Box p={8}>
      <VStack gap={12} align="start" maxW="1200px" mx="auto">
        {/* Header */}
        <VStack gap={3} align="start">
          <Heading size="4xl">Animations</Heading>
          <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.400" }}>
            Duration and easing tokens for creating smooth, purposeful motion in your interface.
            Use animations to provide feedback, guide attention, and create delightful experiences.
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
              Motion Best Practices
            </Text>
            <Text fontSize="sm" color={{ base: "blue.800", _dark: "blue.300" }}>
              Use faster durations (50-150ms) for micro-interactions like hover states. Normal
              duration (200ms) works well for most transitions. Reserve slower durations (300-500ms)
              for significant changes like page transitions or drawer animations. Always respect
              user preferences for reduced motion.
            </Text>
          </VStack>
        </Box>

        {/* Duration Scale */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Duration Tokens</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Interactive duration scale from fastest to slowest. Click to see each duration.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4} w="full">
            {durationTokens.map((duration) => (
              <AnimatedBox
                key={duration.token}
                duration={duration.value}
                label={duration.token}
                ms={duration.ms}
              />
            ))}
          </SimpleGrid>
        </VStack>

        {/* Easing Functions */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Easing Functions</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Different easing curves for natural motion. Click to compare timing functions.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {easingTokens.map((easing) => (
              <EasingBox
                key={easing.token}
                easing={easing.value}
                label={easing.token}
                description={easing.description}
              />
            ))}
          </SimpleGrid>
        </VStack>

        {/* Common Use Cases */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Common Use Cases</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              When to use different durations and easings.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Hover States */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Hover States</Heading>
                <Box
                  px={6}
                  py={3}
                  bg={{ base: "blue.500", _dark: "blue.600" }}
                  color="white"
                  borderRadius="md"
                  cursor="pointer"
                  transition="all 0.15s ease-out"
                  _hover={{
                    transform: "translateY(-2px)",
                    shadow: "md",
                  }}
                  onMouseEnter={() => setHoverState("button")}
                  onMouseLeave={() => setHoverState(null)}
                >
                  <Text fontSize="sm" fontWeight="medium">
                    Hover Me
                  </Text>
                </Box>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  Duration: fast (150ms) • Easing: ease-out
                </Text>
              </VStack>
            </Box>

            {/* Dropdown */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Dropdown Menu</Heading>
                <Box w="full" position="relative">
                  <Box
                    px={4}
                    py={2}
                    bg={{ base: "white", _dark: "gray.800" }}
                    borderWidth="1px"
                    borderColor={{ base: "gray.300", _dark: "gray.600" }}
                    borderRadius="md"
                    cursor="pointer"
                    onClick={() => setHoverState(hoverState === "dropdown" ? null : "dropdown")}
                  >
                    <Text fontSize="sm">Toggle Menu</Text>
                  </Box>
                  {hoverState === "dropdown" && (
                    <Box
                      position="absolute"
                      top="100%"
                      left={0}
                      right={0}
                      mt={2}
                      p={2}
                      bg={{ base: "white", _dark: "gray.800" }}
                      borderWidth="1px"
                      borderColor={{ base: "gray.200", _dark: "gray.700" }}
                      borderRadius="md"
                      shadow="md"
                      style={{
                        animation: "slideDown 200ms ease-out",
                      }}
                      zIndex={10}
                    >
                      <VStack gap={1} align="start">
                        <Text fontSize="sm" px={2} py={1}>
                          Menu Item 1
                        </Text>
                        <Text fontSize="sm" px={2} py={1}>
                          Menu Item 2
                        </Text>
                      </VStack>
                    </Box>
                  )}
                </Box>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  Duration: normal (200ms) • Easing: ease-out
                </Text>
              </VStack>
            </Box>

            {/* Page Transition */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start">
                <Heading size="md">Page Transition</Heading>
                <Box
                  w="full"
                  h="80px"
                  bg={{ base: "purple.100", _dark: "purple.900" }}
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="opacity 300ms ease-in-out"
                  opacity={hoverState === "page" ? 0.5 : 1}
                  cursor="pointer"
                  onClick={() => setHoverState(hoverState === "page" ? null : "page")}
                >
                  <Text fontSize="sm" color={{ base: "purple.900", _dark: "purple.100" }}>
                    Click to fade
                  </Text>
                </Box>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  Duration: slow (300ms) • Easing: ease-in-out
                </Text>
              </VStack>
            </Box>

            {/* Loading State */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Loading Indicator</Heading>
                <Box
                  w="40px"
                  h="40px"
                  borderWidth="3px"
                  borderColor={{ base: "gray.200", _dark: "gray.700" }}
                  borderTopColor={{ base: "blue.500", _dark: "blue.400" }}
                  borderRadius="full"
                  style={{
                    animation: "spin 1s linear infinite",
                  }}
                />
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  Duration: 1s continuous • Easing: linear
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Duration Guide */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Duration Guide</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Recommended durations for common scenarios.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="md"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={2} align="start">
                <HStack justify="space-between" w="full">
                  <Text fontWeight="semibold" fontSize="sm">
                    fastest (50ms)
                  </Text>
                </HStack>
                <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Tooltips, cursor interactions, immediate feedback
                </Text>
              </VStack>
            </Box>

            <Box
              p={4}
              borderWidth="1px"
              borderRadius="md"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={2} align="start">
                <HStack justify="space-between" w="full">
                  <Text fontWeight="semibold" fontSize="sm">
                    fast (150ms)
                  </Text>
                </HStack>
                <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Hover states, button presses, quick toggles
                </Text>
              </VStack>
            </Box>

            <Box
              p={4}
              borderWidth="1px"
              borderRadius="md"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={2} align="start">
                <HStack justify="space-between" w="full">
                  <Text fontWeight="semibold" fontSize="sm">
                    normal (200ms)
                  </Text>
                </HStack>
                <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Dropdowns, popovers, most UI transitions
                </Text>
              </VStack>
            </Box>

            <Box
              p={4}
              borderWidth="1px"
              borderRadius="md"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={2} align="start">
                <HStack justify="space-between" w="full">
                  <Text fontWeight="semibold" fontSize="sm">
                    slow (300ms)
                  </Text>
                </HStack>
                <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Modals, drawers, significant state changes
                </Text>
              </VStack>
            </Box>

            <Box
              p={4}
              borderWidth="1px"
              borderRadius="md"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={2} align="start">
                <HStack justify="space-between" w="full">
                  <Text fontWeight="semibold" fontSize="sm">
                    slower (400ms)
                  </Text>
                </HStack>
                <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Page transitions, complex animations
                </Text>
              </VStack>
            </Box>

            <Box
              p={4}
              borderWidth="1px"
              borderRadius="md"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={2} align="start">
                <HStack justify="space-between" w="full">
                  <Text fontWeight="semibold" fontSize="sm">
                    slowest (500ms)
                  </Text>
                </HStack>
                <Text fontSize="xs" color={{ base: "gray.600", _dark: "gray.400" }}>
                  Dramatic effects, maximum emphasis
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

// Hover state with fast duration
<Box
  as="button"
  px={4}
  py={2}
  bg="blue.500"
  color="white"
  borderRadius="md"
  transition="all 0.15s ease-out"
  _hover={{
    transform: "translateY(-2px)",
    shadow: "md"
  }}
>
  Hover me
</Box>

// Dropdown with normal duration
<Box
  opacity={isOpen ? 1 : 0}
  transform={isOpen ? "translateY(0)" : "translateY(-8px)"}
  transition="all 0.2s ease-out"
>
  Dropdown content
</Box>

// Modal with slow duration
<Box
  position="fixed"
  opacity={isOpen ? 1 : 0}
  transition="opacity 0.3s ease-in-out"
  pointerEvents={isOpen ? "auto" : "none"}
>
  Modal content
</Box>

// Color change with normal duration
<Box
  bg="blue.500"
  transition="background-color 0.2s ease-in-out"
  _hover={{ bg: "blue.600" }}
>
  Color transition
</Box>

// Combining multiple properties
<Box
  transition="transform 0.15s ease-out, opacity 0.2s ease-in"
  _hover={{
    transform: "scale(1.05)",
    opacity: 0.9
  }}
>
  Multi-property animation
</Box>

// Respecting user preferences
<Box
  transition="transform 0.2s ease-out"
  _motionReduce={{ transition: "none" }}
>
  Respects reduced motion
</Box>

// Loading spinner
<Box
  w="40px"
  h="40px"
  borderWidth="3px"
  borderColor="gray.200"
  borderTopColor="blue.500"
  borderRadius="full"
  animation="spin 1s linear infinite"
/>

// Fade in on mount
<Box
  opacity={0}
  animation="fadeIn 0.3s ease-out forwards"
>
  Fades in
</Box>`}
            </Box>
          </VStack>
        </Box>

        {/* CSS Animations */}
        <style jsx global>{`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
      </VStack>
    </Box>
  );
}
