import { Box, SimpleGrid } from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { StatsCard } from "../../components/StatsCard";

export default function Statistics() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Agendamentos"}
          stat={"5,000"}
          icon={<BsPerson size={"3em"} />}
        />
        <StatsCard
          title={"Consultas"}
          stat={"1,000"}
          icon={<FiServer size={"3em"} />}
        />
        <StatsCard
          title={"Faturamento"}
          stat={"7"}
          icon={<GoLocation size={"3em"} />}
        />
      </SimpleGrid>
    </Box>
  );
}
