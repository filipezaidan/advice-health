import {
  Badge,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

type Agendamento = {
  client: string;
  doctor: string;
  date: string;
  status: string;
  value: string;
};

interface TabelaAgendamentosProps {
  data: Agendamento[];
}

export const TabelaAgendamentos = ({ data }: TabelaAgendamentosProps) => {
  return (
    <Table variant="striped">
      <TableCaption>Acompanhamento de Agendamentos</TableCaption>
      <Thead>
        <Tr>
          <Th>Nome do Paciente</Th>
          <Th>Data do Agendamento</Th>
          <Th>Médico</Th>
          <Th>Valores</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item, index) => (
          <Tr key={index}>
            <Td>{item.client}</Td>
            <Td>{item.date}</Td>
            <Td>{item.doctor}</Td>
            <Td>{item.value}</Td>

            <Td>
              <Badge
                bg={item.status === "Confirmado" ? "green.200" : "gray.100"}
              >
                {item.status}
              </Badge>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
