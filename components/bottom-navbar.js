import {
  Box,
  Button,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiContactsFill } from "react-icons/ri";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiTwotoneMail, AiOutlineTwitter } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { useRouter } from "next/router";
import NextLink from "next/link";

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
            variant="solid"
          >
            CONTACT US
          </Button>
        </Box>
        <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 my-4 mx-auto" justifyContent="center">
          <NextLink href="https://www.facebook.com/IEEE.NUCES.LHR/" passHref>
            <Link target="_blank" variant="ghost" style={{ textDecoration: "none" }} >
              <Button className="m-2" leftIcon={<BsFacebook size={20} />}>
                facebook
              </Button>
            </Link>
          </NextLink>
          <NextLink href="https://www.instagram.com/ieee_nuces/" passHref>
            <Link target="_blank" variant="ghost" style={{ textDecoration: "none" }} >
              <Button className="m-2" leftIcon={<BsInstagram size={20} />}>
                instagram
              </Button>
            </Link>
          </NextLink>
          <NextLink href="mailto:Ieee@lhr.nu.edu.pk" passHref>
            <Link target="_blank" variant="ghost" style={{ textDecoration: "none" }} >
              <Button className="m-2" leftIcon={<AiTwotoneMail size={20} />}>
                mail
              </Button>
            </Link>
          </NextLink>
          <NextLink href="https://twitter.com/ieeenuceslahore" passHref>
            <Link target="_blank" variant="ghost" style={{ textDecoration: "none" }} >
              <Button className="m-2" leftIcon={<AiOutlineTwitter size={20} />}>
                twitter
              </Button>
            </Link>
          </NextLink>
          <NextLink href="https://linkedin.com/in/ieee-nuces-lahore-0869a7225/" passHref>
            <Link target="_blank" variant="ghost" style={{ textDecoration: "none" }} >
              <Button className="m-2" leftIcon={<BsLinkedin size={20} />}>
                linkedin
              </Button>
            </Link>
          </NextLink>
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
