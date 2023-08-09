import { Stack, Text } from "@chakra-ui/react";

interface ConsultaItemProps {
  cliente: string;
  doctor: string;
  date: string;
}
interface ConsultaContentProps {
  children: React.ReactNode;
}

export const ConsultaItem = ({ cliente, doctor, date }: ConsultaItemProps) => {
  return (
    <Stack>
      <Text>{cliente}</Text>
      <Text>{doctor}</Text>
      <Text>{date}</Text>
    </Stack>
  );
};

export const ConsultaContent = ({ children }: ConsultaContentProps) => {
  return (
    <Stack maxH={64} overflowY={"auto"}>
      {children}
    </Stack>
  );
};
