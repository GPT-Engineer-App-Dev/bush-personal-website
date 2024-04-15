import { Box, VStack, Heading, Text, Image, Button, HStack, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      <Box bg="white" py={4}>
        <Heading as="h1" size="2xl" textAlign="center" color="blue.900">
          George H. W. Bush
        </Heading>
      </Box>

      <Box>
        <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHZW9yZ2UlMjBIVyUyMEJ1c2glMjBvZmZpY2lhbCUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMzE3MTI1OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="George H. W. Bush" objectFit="cover" w="100%" h={["200px", "300px", "400px"]} />
      </Box>

      <Box px={[4, 8, 16]} py={8}>
        <VStack spacing={6} align="start" maxW="4xl" mx="auto">
          <Text fontSize={["md", "lg"]}>George Herbert Walker Bush, the 41st president of the United States, was born on June 12, 1924, in Milton, Massachusetts. He grew up in Greenwich, Connecticut and attended Phillips Academy before enlisting in the Navy on his 18th birthday in 1942, becoming the youngest aviator in the Navy at the time.</Text>

          <Text fontSize={["md", "lg"]}>After returning from the war, Bush married Barbara Pierce and attended Yale University. He moved to West Texas to enter the oil business and later began his political career, serving as a member of Congress, Ambassador to the United Nations, Chairman of the Republican National Committee, Chief of the U.S. Liaison Office in China, and Director of Central Intelligence.</Text>

          <Text fontSize={["md", "lg"]}>Bush served as vice president under Ronald Reagan for two terms before being elected president in 1988. As president, he navigated the end of the Cold War, signing arms reduction agreements with the Soviet Union. He also led a multinational coalition to successfully push back Iraq's invasion of Kuwait in the Persian Gulf War. Domestically, he signed the Americans with Disabilities Act and Clean Air Act Amendments. After one term as president, he lost re-election to Bill Clinton in 1992. Bush passed away on November 30, 2018 at the age of 94.</Text>

          <Link href="https://en.wikipedia.org/wiki/George_H._W._Bush" isExternal>
            <Button colorScheme="blue" size="lg">
              Read More on Wikipedia
            </Button>
          </Link>
        </VStack>
      </Box>

      <Box bg="gray.100" py={8}>
        <HStack spacing={8} justify="center">
          <Link href="/accomplishments">Major Accomplishments</Link>
          <Link href="/legacy">Legacy</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/quotes">Quotes</Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default Index;
