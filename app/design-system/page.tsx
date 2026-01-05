import { Box, Heading, VStack, Text, SimpleGrid, Card } from "@chakra-ui/react";
import Link from "next/link";

const sections = [
  {
    title: "Colors",
    description: "Complete color palette with semantic tokens and usage guidelines",
    href: "/design-system/colors",
  },
  {
    title: "Typography",
    description: "Font families, sizes, weights, and text styles",
    href: "/design-system/typography",
  },
  {
    title: "Spacing",
    description: "Spacing scale and layout guidelines",
    href: "/design-system/spacing",
  },
  {
    title: "Radii",
    description: "Border radius tokens for rounded corners",
    href: "/design-system/radii",
  },
  {
    title: "Borders",
    description: "Border width and style tokens",
    href: "/design-system/borders",
  },
  {
    title: "Shadows",
    description: "Elevation and shadow tokens",
    href: "/design-system/shadows",
  },
  {
    title: "Sizes",
    description: "Width and height sizing tokens",
    href: "/design-system/sizes",
  },
  {
    title: "Z-Index",
    description: "Layer stacking and elevation hierarchy",
    href: "/design-system/z-index",
  },
  {
    title: "Animations",
    description: "Duration and easing tokens for motion",
    href: "/design-system/animations",
  },
  {
    title: "Blur",
    description: "Blur effect tokens for glassmorphism",
    href: "/design-system/blur",
  },
  {
    title: "Aspect Ratios",
    description: "Aspect ratio tokens for responsive media",
    href: "/design-system/aspect-ratios",
  },
  {
    title: "Components",
    description: "UI component library and usage examples",
    href: "/design-system/components",
  },
];

export default function DesignSystemPage() {
  return (
    <Box p={8}>
      <VStack gap={8} align="start" maxW="1200px" mx="auto">
        <VStack gap={3} align="start">
          <Heading size="4xl">Design System</Heading>
          <Text fontSize="xl" color={{ base: "gray.600", _dark: "gray.400" }}>
            Complete reference for design tokens, components, and patterns
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              style={{ textDecoration: "none" }}
            >
              <Card.Root
                h="full"
                _hover={{
                  transform: "translateY(-2px)",
                  shadow: "lg",
                }}
                transition="all 0.2s"
                cursor="pointer"
              >
                <Card.Body>
                  <VStack gap={2} align="start">
                    <Heading size="lg">{section.title}</Heading>
                    <Text color={{ base: "gray.600", _dark: "gray.400" }}>
                      {section.description}
                    </Text>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </Link>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
