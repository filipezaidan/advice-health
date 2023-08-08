import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const remindersData = [
  {
    id: 1,
    date: "2023-08-10",
    content: "Lembrete: Consulta com Dr. Pereira às 10:00 AM",
  },
  {
    id: 2,
    date: "2023-08-12",
    content: "Aviso: Dia da vacinação contra a gripe.",
  },
  {
    id: 2,
    date: "2023-08-12",
    content: "Aviso: Dia da vacinação contra a gripe.",
  },
  // Adicione mais lembretes e avisos conforme necessário
];

export const StickyNotes = () => {
  return (
    <Table variant="striped" colorScheme="cyan">
      <TableCaption placement="top">
        <Text fontSize="lg" fontWeight="bold">
          Avisos e Lembretes
        </Text>
      </TableCaption>
      <Thead>
        <Tr>
          <Th>Data</Th>
          <Th>Conteúdo</Th>
        </Tr>
      </Thead>
      <Tbody>
        {remindersData.map((reminder) => (
          <Tr key={reminder.id}>
            <Td>{reminder.date}</Td>
            <Td>{reminder.content}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
