"use client";

import { Box, Heading, VStack, Text, SimpleGrid, HStack, Button, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";

export default function FormsPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    message: "",
  });

  return (
    <Box p={8}>
      <VStack gap={12} align="start" maxW="1200px" mx="auto">
        {/* Header */}
        <VStack gap={3} align="start">
          <Heading size="4xl">Form Components</Heading>
          <Text fontSize="lg" color={{ base: "gray.600", _dark: "gray.400" }}>
            Input controls for collecting user data. Includes text inputs, textareas,
            checkboxes, radio buttons, and more with built-in validation and accessibility.
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
              Accessibility
            </Text>
            <Text fontSize="sm" color={{ base: "blue.800", _dark: "blue.300" }}>
              All form components include proper ARIA attributes and keyboard support.
              Always pair inputs with labels, provide error messages, and use appropriate
              input types for mobile keyboards.
            </Text>
          </VStack>
        </Box>

        {/* Input Component */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Input</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Text input fields for single-line user input.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Basic Input */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Basic Input</Heading>
                <VStack gap={2} align="start" w="full">
                  <Text fontSize="sm" fontWeight="medium">Email</Text>
                  <Input
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </VStack>
                <Box
                  as="pre"
                  p={3}
                  bg={{ base: "gray.900", _dark: "gray.950" }}
                  color="gray.50"
                  borderRadius="md"
                  overflow="auto"
                  w="full"
                  fontSize="xs"
                >
{`<Input
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>`}
                </Box>
              </VStack>
            </Box>

            {/* Input Sizes */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Input Sizes</Heading>
                <VStack gap={3} align="start" w="full">
                  <Input size="xs" placeholder="Extra small input" />
                  <Input size="sm" placeholder="Small input" />
                  <Input size="md" placeholder="Medium input (default)" />
                  <Input size="lg" placeholder="Large input" />
                  <Input size="xl" placeholder="Extra large input" />
                </VStack>
                <Box
                  as="pre"
                  p={3}
                  bg={{ base: "gray.900", _dark: "gray.950" }}
                  color="gray.50"
                  borderRadius="md"
                  overflow="auto"
                  w="full"
                  fontSize="xs"
                >
{`<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium" />
<Input size="lg" placeholder="Large" />`}
                </Box>
              </VStack>
            </Box>

            {/* Input Variants */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Input Variants</Heading>
                <VStack gap={3} align="start" w="full">
                  <VStack gap={1} align="start" w="full">
                    <Text fontSize="xs" fontWeight="semibold">Outline (default)</Text>
                    <Input variant="outline" placeholder="Outline variant" />
                  </VStack>
                  <VStack gap={1} align="start" w="full">
                    <Text fontSize="xs" fontWeight="semibold">Filled</Text>
                    <Input variant="filled" placeholder="Filled variant" />
                  </VStack>
                  <VStack gap={1} align="start" w="full">
                    <Text fontSize="xs" fontWeight="semibold">Flushed</Text>
                    <Input variant="flushed" placeholder="Flushed variant" />
                  </VStack>
                </VStack>
                <Box
                  as="pre"
                  p={3}
                  bg={{ base: "gray.900", _dark: "gray.950" }}
                  color="gray.50"
                  borderRadius="md"
                  overflow="auto"
                  w="full"
                  fontSize="xs"
                >
{`<Input variant="outline" />
<Input variant="filled" />
<Input variant="flushed" />`}
                </Box>
              </VStack>
            </Box>

            {/* Input States */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Input States</Heading>
                <VStack gap={3} align="start" w="full">
                  <VStack gap={1} align="start" w="full">
                    <Text fontSize="xs" fontWeight="semibold">Invalid</Text>
                    <Input invalid placeholder="Invalid input" />
                    <Text fontSize="xs" color={{ base: "red.600", _dark: "red.400" }}>
                      This field is required
                    </Text>
                  </VStack>
                  <VStack gap={1} align="start" w="full">
                    <Text fontSize="xs" fontWeight="semibold">Disabled</Text>
                    <Input disabled placeholder="Disabled input" value="Cannot edit" />
                  </VStack>
                  <VStack gap={1} align="start" w="full">
                    <Text fontSize="xs" fontWeight="semibold">Read-only</Text>
                    <Input readOnly placeholder="Read-only input" value="Read only value" />
                  </VStack>
                </VStack>
                <Box
                  as="pre"
                  p={3}
                  bg={{ base: "gray.900", _dark: "gray.950" }}
                  color="gray.50"
                  borderRadius="md"
                  overflow="auto"
                  w="full"
                  fontSize="xs"
                >
{`<Input invalid />
<Input disabled />
<Input readOnly />`}
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Textarea Component */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Textarea</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Multi-line text input for longer form content.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Basic Textarea */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Basic Textarea</Heading>
                <VStack gap={2} align="start" w="full">
                  <Text fontSize="sm" fontWeight="medium">Message</Text>
                  <Textarea
                    placeholder="Enter your message..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                    {formData.message.length} characters
                  </Text>
                </VStack>
                <Box
                  as="pre"
                  p={3}
                  bg={{ base: "gray.900", _dark: "gray.950" }}
                  color="gray.50"
                  borderRadius="md"
                  overflow="auto"
                  w="full"
                  fontSize="xs"
                >
{`<Textarea
  placeholder="Enter message"
  rows={4}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
/>`}
                </Box>
              </VStack>
            </Box>

            {/* Textarea Variants */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Textarea Sizes</Heading>
                <VStack gap={3} align="start" w="full">
                  <Textarea size="sm" placeholder="Small textarea" rows={3} />
                  <Textarea size="md" placeholder="Medium textarea" rows={3} />
                  <Textarea size="lg" placeholder="Large textarea" rows={3} />
                </VStack>
                <Box
                  as="pre"
                  p={3}
                  bg={{ base: "gray.900", _dark: "gray.950" }}
                  color="gray.50"
                  borderRadius="md"
                  overflow="auto"
                  w="full"
                  fontSize="xs"
                >
{`<Textarea size="sm" rows={3} />
<Textarea size="md" rows={4} />
<Textarea size="lg" rows={5} />`}
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Form Layout Patterns */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Form Layout Patterns</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Common form layouts and field arrangements.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            {/* Stacked Form */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Stacked Layout</Heading>
                <VStack gap={4} align="start" w="full">
                  <VStack gap={2} align="start" w="full">
                    <Text fontSize="sm" fontWeight="medium">First Name</Text>
                    <Input placeholder="John" />
                  </VStack>
                  <VStack gap={2} align="start" w="full">
                    <Text fontSize="sm" fontWeight="medium">Last Name</Text>
                    <Input placeholder="Doe" />
                  </VStack>
                  <VStack gap={2} align="start" w="full">
                    <Text fontSize="sm" fontWeight="medium">Email</Text>
                    <Input type="email" placeholder="john@example.com" />
                  </VStack>
                  <Button w="full" colorPalette="blue">
                    Submit
                  </Button>
                </VStack>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  Best for mobile and simple forms
                </Text>
              </VStack>
            </Box>

            {/* Horizontal Form */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Horizontal Layout</Heading>
                <VStack gap={3} align="start" w="full">
                  <HStack gap={3} w="full">
                    <Text fontSize="sm" fontWeight="medium" minW="80px">
                      Name:
                    </Text>
                    <Input placeholder="Full name" />
                  </HStack>
                  <HStack gap={3} w="full">
                    <Text fontSize="sm" fontWeight="medium" minW="80px">
                      Email:
                    </Text>
                    <Input type="email" placeholder="Email address" />
                  </HStack>
                  <HStack gap={3} w="full">
                    <Text fontSize="sm" fontWeight="medium" minW="80px">
                      Phone:
                    </Text>
                    <Input type="tel" placeholder="Phone number" />
                  </HStack>
                  <HStack gap={3} w="full" justify="flex-end">
                    <Button variant="outline" colorPalette="gray">
                      Cancel
                    </Button>
                    <Button colorPalette="blue">
                      Save
                    </Button>
                  </HStack>
                </VStack>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  Best for settings and admin forms
                </Text>
              </VStack>
            </Box>

            {/* Grid Form */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Grid Layout</Heading>
                <VStack gap={4} align="start" w="full">
                  <SimpleGrid columns={2} gap={3} w="full">
                    <VStack gap={1} align="start">
                      <Text fontSize="sm" fontWeight="medium">First Name</Text>
                      <Input placeholder="First" />
                    </VStack>
                    <VStack gap={1} align="start">
                      <Text fontSize="sm" fontWeight="medium">Last Name</Text>
                      <Input placeholder="Last" />
                    </VStack>
                  </SimpleGrid>
                  <VStack gap={1} align="start" w="full">
                    <Text fontSize="sm" fontWeight="medium">Email Address</Text>
                    <Input type="email" placeholder="email@example.com" />
                  </VStack>
                  <SimpleGrid columns={2} gap={3} w="full">
                    <VStack gap={1} align="start">
                      <Text fontSize="sm" fontWeight="medium">City</Text>
                      <Input placeholder="City" />
                    </VStack>
                    <VStack gap={1} align="start">
                      <Text fontSize="sm" fontWeight="medium">ZIP</Text>
                      <Input placeholder="ZIP" />
                    </VStack>
                  </SimpleGrid>
                </VStack>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  Efficient for related fields
                </Text>
              </VStack>
            </Box>

            {/* Inline Form */}
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              <VStack gap={4} align="start" w="full">
                <Heading size="md">Inline Layout</Heading>
                <VStack gap={3} align="start" w="full">
                  <Text fontSize="sm" fontWeight="medium">Newsletter Signup</Text>
                  <HStack gap={2} w="full">
                    <Input placeholder="Enter your email" flex={1} />
                    <Button colorPalette="blue">
                      Subscribe
                    </Button>
                  </HStack>
                  <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                    Get weekly updates in your inbox
                  </Text>
                </VStack>
                <Text fontSize="xs" color={{ base: "gray.500", _dark: "gray.500" }}>
                  Best for simple, focused actions
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Form Validation */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Form Validation</Heading>
            <Text color={{ base: "gray.600", _dark: "gray.400" }}>
              Error states and validation feedback.
            </Text>
          </VStack>

          <Box
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            borderColor={{ base: "gray.200", _dark: "gray.700" }}
            w="full"
          >
            <VStack gap={4} align="start" w="full">
              <Heading size="md">Validation Example</Heading>
              <VStack gap={4} align="start" w="full">
                {/* Success State */}
                <VStack gap={2} align="start" w="full">
                  <Text fontSize="sm" fontWeight="medium">Username</Text>
                  <Input value="john_doe" readOnly />
                  <HStack gap={1}>
                    <Text fontSize="xs" color={{ base: "green.600", _dark: "green.400" }}>
                      ✓ Username is available
                    </Text>
                  </HStack>
                </VStack>

                {/* Error State */}
                <VStack gap={2} align="start" w="full">
                  <Text fontSize="sm" fontWeight="medium">Email *</Text>
                  <Input invalid placeholder="email@example.com" />
                  <Text fontSize="xs" color={{ base: "red.600", _dark: "red.400" }}>
                    Please enter a valid email address
                  </Text>
                </VStack>

                {/* Warning State */}
                <VStack gap={2} align="start" w="full">
                  <Text fontSize="sm" fontWeight="medium">Password</Text>
                  <Input type="password" placeholder="Enter password" />
                  <Text fontSize="xs" color={{ base: "orange.600", _dark: "orange.400" }}>
                    Password should be at least 8 characters
                  </Text>
                </VStack>
              </VStack>

              <Box
                as="pre"
                p={3}
                bg={{ base: "gray.900", _dark: "gray.950" }}
                color="gray.50"
                borderRadius="md"
                overflow="auto"
                w="full"
                fontSize="xs"
              >
{`{/* Error state */}
<Input invalid />
<Text fontSize="xs" color="red.600">
  Error message
</Text>

{/* Success feedback */}
<Text fontSize="xs" color="green.600">
  ✓ Success message
</Text>`}
              </Box>
            </VStack>
          </Box>
        </VStack>

        {/* Best Practices */}
        <VStack gap={6} align="start" w="full">
          <VStack gap={2} align="start">
            <Heading size="2xl">Best Practices</Heading>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
            <Box
              p={5}
              borderLeftWidth="4px"
              borderLeftColor={{ base: "green.500", _dark: "green.400" }}
              bg={{ base: "green.50", _dark: "green.950" }}
              borderRadius="md"
            >
              <VStack gap={1} align="start">
                <Text fontWeight="semibold" fontSize="sm" color={{ base: "green.900", _dark: "green.200" }}>
                  ✅ Do: Use clear, descriptive labels
                </Text>
                <Text fontSize="sm" color={{ base: "green.800", _dark: "green.300" }}>
                  Every input should have a visible label
                </Text>
              </VStack>
            </Box>

            <Box
              p={5}
              borderLeftWidth="4px"
              borderLeftColor={{ base: "red.500", _dark: "red.400" }}
              bg={{ base: "red.50", _dark: "red.950" }}
              borderRadius="md"
            >
              <VStack gap={1} align="start">
                <Text fontWeight="semibold" fontSize="sm" color={{ base: "red.900", _dark: "red.200" }}>
                  ❌ Don't: Use placeholder as label
                </Text>
                <Text fontSize="sm" color={{ base: "red.800", _dark: "red.300" }}>
                  Placeholders disappear when typing
                </Text>
              </VStack>
            </Box>

            <Box
              p={5}
              borderLeftWidth="4px"
              borderLeftColor={{ base: "green.500", _dark: "green.400" }}
              bg={{ base: "green.50", _dark: "green.950" }}
              borderRadius="md"
            >
              <VStack gap={1} align="start">
                <Text fontWeight="semibold" fontSize="sm" color={{ base: "green.900", _dark: "green.200" }}>
                  ✅ Do: Provide inline validation
                </Text>
                <Text fontSize="sm" color={{ base: "green.800", _dark: "green.300" }}>
                  Show errors immediately after field blur
                </Text>
              </VStack>
            </Box>

            <Box
              p={5}
              borderLeftWidth="4px"
              borderLeftColor={{ base: "red.500", _dark: "red.400" }}
              bg={{ base: "red.50", _dark: "red.950" }}
              borderRadius="md"
            >
              <VStack gap={1} align="start">
                <Text fontWeight="semibold" fontSize="sm" color={{ base: "red.900", _dark: "red.200" }}>
                  ❌ Don't: Make everything required
                </Text>
                <Text fontSize="sm" color={{ base: "red.800", _dark: "red.300" }}>
                  Only require essential fields
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </VStack>
    </Box>
  );
}
