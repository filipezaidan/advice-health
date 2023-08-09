/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
import {
  Flex,
  Text,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";

import SearchInput from "../../components/SearchInput";
import { TabelaAgendamentos } from "../../components/TableAgendamentos";

export const Consultas = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <Flex
      bg="white"
      flex={1}
      borderRadius={4}
      p={12}
      justifyContent={"space-between"}
      alignContent={"space-between"}
      h={"100%"}
      overflow={"hidden"}
      flexDir={"column"}
      gap={20}
    >
      <HStack w="full" justifyContent={"space-between"}>
        <SearchInput maxW={"50%"} onChange={(e) => setSearch(e.target.value)} />

        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
          >
            <HStack>
              <FaFilter />
              <Text>Filtros avançados</Text>
            </HStack>
          </MenuButton>
          <MenuList
            bg={useColorModeValue("white", "gray.900")}
            borderColor={useColorModeValue("gray.200", "gray.700")}
          >
            <MenuItem>Médico</MenuItem>
            {/* TODO: add more option in here */}
          </MenuList>
        </Menu>
      </HStack>

      <Flex>
        <TabelaAgendamentos
          data={[
            {
              client: "Maria Silva",
              doctor: "Dr. Pedro Almeida",
              date: "2023-08-12",
              status: "Confirmado",
              value: "R$ 120",
            },
            {
              client: "Carlos Oliveira",
              doctor: "Dra. Ana Santos",
              date: "2023-08-14",
              status: "Pendente",
              value: "R$ 90",
            },
            {
              client: "Fernanda Souza",
              doctor: "Dr. Ricardo Barbosa",
              date: "2023-08-15",
              status: "Confirmado",
              value: "R$ 150",
            },
          ]}
        />
      </Flex>
    </Flex>
  );
};
