"use client";

import { Box, VStack, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  {
    title: "Design Tokens",
    items: [
      { label: "Colors", href: "/design-system/colors" },
      { label: "Typography", href: "/design-system/typography" },
      { label: "Spacing", href: "/design-system/spacing" },
      { label: "Radii", href: "/design-system/radii" },
      { label: "Borders", href: "/design-system/borders" },
      { label: "Shadows", href: "/design-system/shadows" },
      { label: "Sizes", href: "/design-system/sizes" },
      { label: "Z-Index", href: "/design-system/z-index" },
      { label: "Animations", href: "/design-system/animations" },
      { label: "Blur", href: "/design-system/blur" },
      { label: "Aspect Ratios", href: "/design-system/aspect-ratios" },
    ],
  },
  {
    title: "Components",
    items: [
      { label: "Overview", href: "/design-system/components" },
      { label: "Buttons", href: "/design-system/components/buttons" },
      { label: "Layout", href: "/design-system/components/layout" },
      { label: "Typography", href: "/design-system/components/typography" },
      { label: "Forms", href: "/design-system/components/forms" },
      { label: "Data Display", href: "/design-system/components/data-display" },
    ],
  },
];

export function DesignSystemSidebar() {
  const pathname = usePathname();

  return (
    <Box
      as="nav"
      position="sticky"
      top="73px"
      h="calc(100vh - 73px)"
      w="64"
      p={8}
      overflowY="auto"
      borderRightWidth="1px"
      borderColor={{ base: "gray.200", _dark: "gray.700" }}
      display={{ base: "none", lg: "block" }}
    >
      <VStack gap={8} align="start">
        {sections.map((section) => (
          <VStack key={section.title} gap={3} align="start" w="full">
            <Heading size="xs" color={{ base: "gray.900", _dark: "gray.100" }}>
              {section.title}
            </Heading>
            <VStack gap={1} align="start" w="full">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{ textDecoration: "none", width: "100%" }}
                  >
                    <Box
                      py={2}
                      px={3}
                      borderRadius="md"
                      bg={
                        isActive
                          ? { base: "gray.100", _dark: "gray.800" }
                          : "transparent"
                      }
                      color={
                        isActive
                          ? { base: "gray.900", _dark: "gray.50" }
                          : { base: "gray.600", _dark: "gray.400" }
                      }
                      fontWeight={isActive ? "semibold" : "normal"}
                      _hover={{
                        bg: { base: "gray.100", _dark: "gray.800" },
                        color: { base: "gray.900", _dark: "gray.50" },
                      }}
                      transition="all 0.2s"
                      fontSize="sm"
                    >
                      {item.label}
                    </Box>
                  </Link>
                );
              })}
            </VStack>
          </VStack>
        ))}
      </VStack>
    </Box>
  );
}
