import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const MainCard = ({ title, bold, desc }) => {
  return (
    <Box
      className="p-4 rounded-md m-2"
      bg={useColorModeValue("rgb(11,25,51,0.1)", "rgb(232,240,242,0.1)")}
    >
      <Text className="text-2xl font-bold mb-4">{title}</Text>
      <Text>
        <strong>{bold}</strong> {desc}
      </Text>
    </Box>
  );
};

export default MainCard;
