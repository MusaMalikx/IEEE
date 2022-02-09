import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const SlideShow = () => {
  return (
    <Carousel showStatus={false}>
      {/* <Box>
        <Image
          className=""
          src="/Images/Fast/fast_04.jpg"
          alt="fast"
          width="1920"
          height="640"
        />
      </Box>
      <Box>
        <Image
          className=""
          src="/Images/Fast/fast_02.jpg"
          alt="fast"
          width="1920"
          height="640"
        />
      </Box> */}
      {/* <Box
        className="flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url("/Images/Fast/fast_03.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        height={{ base: "300px", md: "600px" }}
      ></Box> */}
      <Box
        className="flex items-center justify-center h-[calc(100vh-115px)]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url("/Images/Fast/fast_05.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        color="#F9F9F9"
      >
        <Container maxW="container.lg">
          <Image src="/logo/logo.png" alt="logo" height={200} width={200} />
          <Text className="text-justify tracking-wider mt-3">
            IEEE is the world&apos;s largest professional association dedicated
            to advancing technological innovation and excellence for the benefit
            of humanity. IEEE and its members inspire a global community through
            its highly cited publications, conferences, technology standards,
            and professional and educational activities. IEEE is the trusted
            “voice” for engineering, computing and technology information around
            the globe.
          </Text>
        </Container>
      </Box>
    </Carousel>
  );
};

export default SlideShow;

{
  /* <Box
          className="flex items-center justify-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url("/Images/Fast/fast_03.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          height= {{base:'300px', md:'400px'}}
        >
          <Heading
            borderRadius="lg"
            bg="rgb(102,124,172,0.5)"
            mb={6}
            p={3}
            align="center"
            color="#F7F6F2"
          >
            IEEE Student Branch NUCES
          </Heading>
        </Box> */
}
