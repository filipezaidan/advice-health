import { Box, Flex, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}

export const StatsCard = (props: StatsCardProps) => {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 8, md: 8 }}
      minW={"64"}
      w="auto"
      py={6}
      bg="#0093A0 "
      shadow={"md"}
      rounded={"lg"}
      color="white"
    >
      <Flex justifyContent={"space-between"} gap={2}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box my={"auto"} color={"white"} alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
};
