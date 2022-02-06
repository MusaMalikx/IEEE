import {
  Box,
  Button,
  Container,
  Divider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiContactsFill } from "react-icons/ri";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { useRouter } from "next/router";

const BottomNavbar = () => {
  const router = useRouter();
  return (
    <Box
      bg={useColorModeValue("rgb(221, 221, 221,0.8)", "rgb(221, 221, 221,0.3)")}
    >
      <Container maxW="container.xl">
        <Box className="grid grid-cols-1 md:grid-cols-2 p-20">
          <Box className="">
            <Box className="flex space-x-4 mb-3">
              <BsFacebook size={25} />
              <BsInstagram size={25} />
              <AiTwotoneMail size={25} />
            </Box>
            <Text className="font-normal text-xl">
              Association For Computing Machinery
            </Text>
          </Box>
          <Box>
            <Button
              onClick={() => router.push("/contact")}
              bg="#697bb0"
              colorScheme="blue"
              leftIcon={<RiContactsFill size="18" />}
              className="mt-4 md:mt-0"
            >
              CONTACT US
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box className="md:flex justify-between py-4 text-sm">
          <Box className="flex">
            <Text className="font-bold">© 2022</Text>
            <Text className="ml-5 font-semibold">IEEE Student Branch NUCES</Text>
          </Box>
          <Box>
            <Text className=" flex items-center space-x-2 font-mono">
              <Text>Made with </Text>
              <GiSelfLove />
              <Text> by Mr Malik</Text>
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BottomNavbar;
