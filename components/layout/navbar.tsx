import { Box, Container, HStack, Heading } from "@chakra-ui/react";
import { ColorModeToggle } from "@/components/ui/color-mode-toggle";
import Link from "next/link";

export function Navbar() {
  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex="sticky"
      bg={{ base: "white", _dark: "gray.900" }}
      borderBottomWidth="1px"
      borderColor={{ base: "gray.200", _dark: "gray.700" }}
      backdropFilter="blur(10px)"
      backgroundColor={{ base: "rgba(255, 255, 255, 0.8)", _dark: "rgba(17, 17, 17, 0.8)" }}
    >
      <Container maxW="8xl" py={4}>
        <HStack justify="space-between" align="center">
          <Link href="/" style={{ textDecoration: "none" }}>
            <Heading size="md" cursor="pointer">
              Chakra UI v3
            </Heading>
          </Link>

          <HStack gap={6}>
            <HStack gap={4} display={{ base: "none", md: "flex" }}>
              <Link href="/" style={{ textDecoration: "none" }}>
                <Box
                  px={3}
                  py={2}
                  borderRadius="md"
                  _hover={{ bg: { base: "gray.100", _dark: "gray.800" } }}
                  transition="background 0.2s"
                >
                  Home
                </Box>
              </Link>

              <Link href="/token-demo" style={{ textDecoration: "none" }}>
                <Box
                  px={3}
                  py={2}
                  borderRadius="md"
                  _hover={{ bg: { base: "gray.100", _dark: "gray.800" } }}
                  transition="background 0.2s"
                >
                  Tokens
                </Box>
              </Link>

              <Link href="/design-system" style={{ textDecoration: "none" }}>
                <Box
                  px={3}
                  py={2}
                  borderRadius="md"
                  _hover={{ bg: { base: "gray.100", _dark: "gray.800" } }}
                  transition="background 0.2s"
                >
                  Design System
                </Box>
              </Link>
            </HStack>

            <ColorModeToggle />
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
