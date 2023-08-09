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

export const Agendamentos = () => {
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
        <Text>Médicos</Text>
        <Stack h="auto" minW={"40%"} gap={5}>
          <DoctorContent>
            {Doctors.map((doctor, key) => (
              <DoctorItem {...doctor} key={key} />
            ))}
          </DoctorContent>

          <Calendar />
        </Stack>
      </Box>
      <Stack h="full" minW={"60%"} gap={5} minH={84} overflow="scroll">
        <Text>20/Fev/2023</Text>
        {agendamentos.map((agendamento, key) => (
          <HStack
            bg="gray.100"
            w="full"
            rounded={4}
            p={4}
            cursor={"pointer"}
            justifyContent={"space-between"}
          >
            <Text>{agendamento.horary}</Text>
            {agendamento.available && <Button>+</Button>}
          </HStack>
        ))}
      </Stack>
    </Flex>
  );
};
