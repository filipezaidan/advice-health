import { Box, SimpleGrid } from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { GiArchiveResearch } from "react-icons/gi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
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
          icon={<GiArchiveResearch size={"3em"} />}
        />
        <StatsCard
          title={"Faturamento"}
          stat={"R$ 8.560,90"}
          icon={<FaRegMoneyBillAlt size={"3em"} />}
        />
      </SimpleGrid>
    </Box>
  );
}
