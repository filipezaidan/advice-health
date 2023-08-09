/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex, Text, Stack, HStack, Box, Button } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { DoctorContent, DoctorItem } from "../../components/Doctor";
import { Doctors } from "../../mocks/Doctor";
import Calendar from "react-calendar";
import { ListOfHorary } from "../../utils/generateHorary";
import { format } from "date-fns";

import { useDisclosure } from "@chakra-ui/react";

import { ModalAgendamento } from "../../components/Modal/Agendamento";
import { AgendamentoType } from "../../@types/Agendamento";

export const Agendamentos = () => {
  const [search, setSearch] = useState<string>("");
  const [agendamentos, setAgendamentos] = useState(ListOfHorary);
  const [agenda, setAgenda] = useState<AgendamentoType>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenModal = (item: AgendamentoType) => {
    setAgenda(item);
    onOpen();
  };

  const handleAddAgendamento = (item: AgendamentoType) => {
    const indexAgendamento = agendamentos.findIndex(
      (itemAgenda) => itemAgenda.id === item.id
    );

    if (indexAgendamento !== -1) {
      const newList = agendamentos;
      newList[indexAgendamento] = {
        ...newList[indexAgendamento],
        available: false,
        client: item.client,
      };
      setAgendamentos(newList);
    }
  };

  const today = useMemo(() => {
    const data = new Date();
    return format(data, "dd/MMM/yyyy");
  }, []);

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
        <Text fontSize={24} color="#0093A0" fontWeight={"bold"}>
          Médicos
        </Text>
        <Stack h="auto" minW={"40%"} gap={5}>
          <DoctorContent>
            {Doctors.map((doctor, key) => (
              <DoctorItem {...doctor} key={key} />
            ))}
          </DoctorContent>

          <Calendar />
        </Stack>
      </Box>
      <Stack h="full" minW={"60%"} gap={5}>
        <Text fontSize={24} color="#0093A0" fontWeight={"bold"}>
          {today}
        </Text>
        <Stack overflowY="scroll" maxH={96}>
          {agendamentos.map((agendamento) => (
            <HStack
              bg="gray.100"
              w="full"
              rounded={4}
              p={4}
              cursor={"pointer"}
              justifyContent={"space-between"}
              key={agendamento.id}
            >
              <HStack align="center" justifyContent={"center"}>
                <Text fontSize={24} color="#0093A0" fontWeight={"bold"}>
                  {agendamento.horary}
                </Text>
                <Text fontSize={16} fontWeight={500}>
                  {agendamento.client.name}
                </Text>
              </HStack>

              {agendamento.available && (
                <Button onClick={() => handleOpenModal(agendamento)}>
                  Agendar
                </Button>
              )}
            </HStack>
          ))}
        </Stack>
      </Stack>
      <ModalAgendamento
        {...{ isOpen, onOpen, onClose }}
        data={agenda}
        onConfirm={handleAddAgendamento}
      />
    </Flex>
  );
};
