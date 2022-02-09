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
      <Box className="grid grid-cols-1 text-center my-5">
        <Box>
          <Button
            onClick={() => router.push("/contact")}
            color="#697bb0"
            leftIcon={<RiContactsFill size="18" />}
            className="mt-4 md:mt-0 hover:text-[#697bb0] hover:bg-slate-400"
            variant="ghost"
          >
            CONTACT US
          </Button>
        </Box>
        <Box className="flex my-4 justify-between mx-auto">
          <Button className="m-2" leftIcon={<BsFacebook size={20} />}>
            facebook
          </Button>
          <Button className="m-2" leftIcon={<BsInstagram size={20} />}>
            instagram
          </Button>
          <Button className="m-2" leftIcon={<AiTwotoneMail size={20} />}>
            mail
          </Button>
        </Box>
        <Box>852-B Milaad St, Block B Faisal Town, Lahore, Punjab 54770</Box>
      </Box>
      <Box className="md:flex justify-between p-3 text-sm bg-[#697bb0]">
        <Box className="flex justify-center">
          <Text className="font-bold">© 2022</Text>
          <Text className="ml-5 font-semibold">IEEE Student Branch NUCES</Text>
        </Box>
        <Box>
          <Text className=" flex items-center space-x-2 font-mono justify-center">
            <Text>Made with </Text>
            <GiSelfLove />
            <Text> by Musa Malik</Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default BottomNavbar;
