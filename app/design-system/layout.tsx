"use client";

import { Box, HStack } from "@chakra-ui/react";
import { DesignSystemSidebar } from "@/components/layout/design-system-sidebar";

export default function DesignSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HStack align="start" gap={0} w="full">
      <DesignSystemSidebar />
      <Box flex="1" minW="0">
        {children}
      </Box>
    </HStack>
  );
}
