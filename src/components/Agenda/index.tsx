import { Avatar, Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";

interface AgendaContentProps {
  children: React.ReactNode;
}

interface AgendaItemProps {
  name: string;
  hours: string;
  doctor: string;
}

export const AgendaItem = ({ name, doctor, hours }: AgendaItemProps) => {
  return (
    <Box w={"100%"} bg="gray.100" p={2} rounded={"md"}>
      <HStack justifyContent={"space-between"}>
        <Flex gap={2}>
          <Avatar></Avatar>
          <Stack spacing={0}>
            <Text fontSize={"md"} fontWeight={"bold"}>
              {name}
            </Text>
            <Text fontSize={"md"} fontWeight={"normal"}>
              {doctor}
            </Text>
          </Stack>
        </Flex>
        <Box>
          <Text fontSize={"md"} fontWeight={"normal"}>
            {hours}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export const AgendaContent = ({ children }: AgendaContentProps) => {
  return (
    <Stack minH={"xs"} overflowY={"auto"}>
      {children}
    </Stack>
  );
};
