/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex, Text, Stack } from "@chakra-ui/react";
import SearchInput from "../../components/SearchInput";
import { useState } from "react";
import Statistics from "../../components/Stattistics";
import Calendar from "react-calendar";

import { AgendaContent, AgendaItem } from "../../components/Agenda";
import { consultas } from "../../mocks/Consultas";
import { StickyNotes } from "../../components/StickyNotes";

export const Home = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <Flex
      bg="white"
      flex={1}
      borderRadius={4}
      p={6}
      justifyContent={"space-between"}
      alignContent={"space-between"}
      gap={4}
    >
      <Stack h="full" minW={"70%"} gap={5}>
        <SearchInput onChange={(e) => setSearch(e.target.value)} />

        <Text fontSize={"2xl"} color="#0093A0" fontWeight={"bold"}>
          Dashboard
        </Text>

        <Statistics />

        <StickyNotes></StickyNotes>
      </Stack>
      <Stack>
        <Calendar />

        <AgendaContent>
          {consultas.map((consulta, key) => (
            <AgendaItem {...consulta} key={key} />
          ))}
        </AgendaContent>
      </Stack>
    </Flex>
  );
};
