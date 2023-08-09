import { Avatar, Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";

interface DoctorContentProps {
  children: React.ReactNode;
}

interface DoctorItemProps {
  name: string;
  contact?: string;
  position?: string;
}

export const DoctorItem = ({ name, position }: DoctorItemProps) => {
  return (
    <Box w={"100%"} bg="gray.100" p={2} rounded={"md"}>
      <HStack justifyContent={"space-between"}>
        <Flex gap={2}>
          <Avatar src="https://img.imageboss.me/revista-cdn/cdn/41938/7d8429c45731acf5a27316ce946ece4f005b8947.jpg?1666045869"></Avatar>
          <Stack spacing={0}>
            <Text fontSize={"md"} fontWeight={"bold"}>
              {name}
            </Text>
            <Text fontSize={"md"}>{position}</Text>
          </Stack>
        </Flex>
      </HStack>
    </Box>
  );
};

export const DoctorContent = ({ children }: DoctorContentProps) => {
  return (
    <Stack maxH={64} overflowY={"auto"}>
      {children}
    </Stack>
  );
};
