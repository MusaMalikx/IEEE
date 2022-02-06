import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

const SlideShow = () => {
  return (
    <Carousel fade controls={false}>
      <Carousel.Item>
        {/* <Image
          className=""
          src="/Images/Fast/fast_03.jpg"
          alt="fast"
          width="1920"
          height="640"
        /> */}
        <Box
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
        </Box>
      </Carousel.Item>
    </Carousel>
  );
};

export default SlideShow;
