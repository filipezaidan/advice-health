/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Flex,
  Text,
  Stack,
  Avatar,
  HStack,
  Box,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { DoctorContent, DoctorItem } from "../../components/Doctor";
import { Doctors } from "../../mocks/Doctor";
import Calendar from "react-calendar";
import { ListOfHorary } from "../../utils/generateHorary";
import SearchInput from "../../components/SearchInput";

export const Consultas = () => {
  const [search, setSearch] = useState<string>("");
  const [agendamentos, setAgendamentos] = useState(ListOfHorary);

  return (
    <Flex
      bg="white"
      flex={1}
      borderRadius={4}
      p={6}
      justifyContent={"space-between"}
      alignContent={"space-between"}
      maxH={"100%"}
      overflow={"hidden"}
    >
      <Box>
        <SearchInput onChange={(e) => setSearch(e.target.value)} />
      </Box>
    </Flex>
  );
};
