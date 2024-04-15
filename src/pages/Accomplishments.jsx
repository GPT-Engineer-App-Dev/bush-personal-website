import { Box, VStack, Heading, Text, Image, Flex, Link, HStack } from "@chakra-ui/react";

const Accomplishments = () => {
  return (
    <Box>
      <Box bg="white" py={4}>
        <Heading as="h1" size="2xl" textAlign="center" color="blue.900">
          Accomplishments
        </Heading>
      </Box>

      <Box px={[4, 8, 16]} py={8}>
        <VStack spacing={12} align="stretch" maxW="4xl" mx="auto">
          <Flex direction={["column", "row"]} align="center">
            <Box flex={1} pr={[0, 8]}>
              <Heading as="h2" size="xl" mb={4}>
                End of the Cold War
              </Heading>
              <Text fontSize={["md", "lg"]}>President Bush navigated the end of the Cold War, fostering improved relations with the Soviet Union and signing arms reduction agreements.</Text>
            </Box>
            <Image src="https://example.com/end-cold-war.jpg" alt="End of Cold War" objectFit="cover" w={["100%", "50%"]} h="300px" />
          </Flex>

          <Flex direction={["column", "row-reverse"]} align="center">
            <Box flex={1} pl={[0, 8]}>
              <Heading as="h2" size="xl" mb={4}>
                Americans with Disabilities Act
              </Heading>
              <Text fontSize={["md", "lg"]}>Bush signed the Americans with Disabilities Act in 1990, prohibiting discrimination based on disability.</Text>
            </Box>
            <Image src="https://example.com/ada-signing.jpg" alt="Signing ADA" objectFit="cover" w={["100%", "50%"]} h="300px" />
          </Flex>

          <Flex direction={["column", "row"]} align="center">
            <Box flex={1} pr={[0, 8]}>
              <Heading as="h2" size="xl" mb={4}>
                Gulf War
              </Heading>
              <Text fontSize={["md", "lg"]}>In 1991, Bush led a coalition to push back Iraq's invasion of Kuwait in the Persian Gulf War.</Text>
            </Box>
            <Image src="https://example.com/gulf-war.jpg" alt="Gulf War" objectFit="cover" w={["100%", "50%"]} h="300px" />
          </Flex>

          <Flex direction={["column", "row-reverse"]} align="center">
            <Box flex={1} pl={[0, 8]}>
              <Heading as="h2" size="xl" mb={4}>
                German Reunification
              </Heading>
              <Text fontSize={["md", "lg"]}>Bush played a key role in the reunification of Germany after the fall of the Berlin Wall.</Text>
            </Box>
            <Image src="https://example.com/german-reunification.jpg" alt="German Reunification" objectFit="cover" w={["100%", "50%"]} h="300px" />
          </Flex>
        </VStack>
      </Box>

      <Box bg="gray.100" py={8}>
        <HStack spacing={8} justify="center">
          <Link href="/">Home</Link>
          <Link href="/accomplishments">Accomplishments</Link>
          <Link href="/legacy">Legacy</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/quotes">Quotes</Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default Accomplishments;
