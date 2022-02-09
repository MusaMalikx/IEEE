import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import Layout from "../components/layouts/article";

const Events = () => {
  return (
    <Layout>
      <Box className="py-24 relative overflow-x-hidden">
        <Container maxW="container.xl">
          <Heading className="text-center mb-20 text-[#697bb0] underline underline-offset-8">
            Events
          </Heading>
          <Box className="relative">
            <Container
              maxW="container.lg"
              className="grid text-center"
              justifyContent={{ base: "center", lg: "right" }}
            >
              <Text className="text-3xl font-medium mb-10 uppercase content-end">
                Python Workshop
              </Text>
              <Text
                className="bg-[rgb(105,123,176)] p-4 rounded-md lg:absolute lg:z-10 lg:left-16 mb-3 lg:mb-0"
                backgroundImage='url("https://www.transparenttextures.com/patterns/bright-squares.png")'
                top={{ lg: 250 }}
                width={{ lg: 640 }}
              >
                <Text className="text-[#F9F9F9] bg-[rgb(0,0,0,0.1)] p-3 tracking-wider rounded-md">
                  With the completion of the IEEE Python Workshop we bring to
                  you this sneak peak into how it all happened . Special thanks
                  to Mr. Mubeen Elahi , for delivering the crash course, and
                  congratulations to the IEEE NUCES team who worked extensively
                  for this event . We will be back with new updates regarding
                  our future events.
                </Text>
              </Text>
              <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                width={480}
                interval={8000}
              >
                <Box>
                  <Image src="/Images/Events/Python/1.jpeg" alt="python" />
                </Box>
                <Box>
                  <Image src="/Images/Events/Python/2.jpeg" alt="python" />
                </Box>
                <Box>
                  <Image src="/Images/Events/Python/3.jpeg" alt="python" />
                </Box>
              </Carousel>
            </Container>
          </Box>
          <Box className="relative my-10">
            <Container
              maxW="container.lg"
              className="grid text-center"
              justifyContent={{ base: "center", lg: "left" }}
            >
              <Text className="text-3xl font-medium mb-10 uppercase content-end">
                CS-GO Gaming Competition
              </Text>
              <Text
                className="bg-[rgb(105,123,176)] p-4 rounded-md lg:absolute lg:z-10 lg:right-0 mb-3 lg:mb-0"
                backgroundImage='url("https://www.transparenttextures.com/patterns/bright-squares.png")'
                top={{ lg: 150 }}
                width={{ lg: 640 }}
              >
                <Text className="text-[#F9F9F9] bg-[rgb(0,0,0,0.1)] p-3 tracking-wider rounded-md">
                  IEEE NUCES put an end to all your anticipations and hosted a
                  CS-GO Tournament on campus, which turned out to be a huge
                  success The two day event comprised of 9 teams going
                  head-to-head to determine who the best team on campus is.
                  Gamers gave it their all, and despite their valiant efforts,
                  only one was crowned the victor. We, at IEEE NUCES, cannot be
                  more proud of our gaming team for making this event a reality
                  We present to you the highlights of the two day action-packed
                  event.
                </Text>
              </Text>
              <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                width={540}
                interval={8000}
              >
                <Box>
                  <Image src="/Images/Events/CS-GO/1.jpeg" alt="cs-go" />
                </Box>
                {/* <Box>
                <Image src="/Images/Events/Python/2.jpeg" alt="python" />
              </Box>
              <Box>
                <Image src="/Images/Events/Python/3.jpeg" alt="python" />
              </Box> */}
              </Carousel>
            </Container>
          </Box>
          <Box className="relative">
            <Container
              maxW="container.lg"
              className="grid text-center"
              justifyContent={{ base: "center", lg: "right" }}
            >
              <Text className="text-3xl font-medium mb-10 uppercase content-end">
                Freelancing Seminar
              </Text>
              <Text
                className="bg-[rgb(105,123,176)] p-4 rounded-md lg:absolute lg:z-10 lg:left-16 mb-3 lg:mb-0"
                backgroundImage='url("https://www.transparenttextures.com/patterns/bright-squares.png")'
                top={{ lg: 250 }}
                width={{ lg: 640 }}
              >
                <Text className="text-[#F9F9F9] bg-[rgb(0,0,0,0.1)] p-3 tracking-wider rounded-md">
                  We celebrated <strong>IEEE Day</strong> by conducting an
                  orientation followed by a freelancing seminar. Mr. Hamza
                  Ihtesham, SAC Chair IEEE Lahore Section, Mr. Usman Khawar
                  Khan, founder and CEO of AdX and Sumama Zaeem, SSR IEEE Lahore
                  Section joined us.
                </Text>
              </Text>
              <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                width={480}
                interval={8000}
              >
                <Box>
                  <Image src="/Images/Events/Seminar/1.jpeg" alt="python" />
                </Box>
                <Box>
                  <Image src="/Images/Events/Seminar/2.jpeg" alt="python" />
                </Box>
                <Box>
                  <Image src="/Images/Events/Seminar/3.jpeg" alt="python" />
                </Box>
              </Carousel>
            </Container>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Events;
