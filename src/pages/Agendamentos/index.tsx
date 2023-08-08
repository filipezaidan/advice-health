/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex, Text, Stack, Avatar, HStack } from "@chakra-ui/react";
import SearchInput from "../../components/SearchInput";
import { useState } from "react";

export const Agendamentos = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <Flex
      bg="white"
      flex={1}
      borderRadius={4}
      p={6}
      justifyContent={"space-between"}
      alignContent={"space-between"}
    >
      <Stack h="full" minW={"70%"} gap={5}>
        <SearchInput onChange={(e) => setSearch(e.target.value)} />

        {/* DASHBOARD */}
        <Text fontSize={"2xl"}>Agendamentos</Text>
      </Stack>
    </Flex>
  );
};
