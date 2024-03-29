import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import SlideShow from "../components/slide-show";
import Layout from "../components/layouts/article";
import { MdGroups } from "react-icons/md";
import { useRouter } from "next/router";
import { IoIosBulb } from "react-icons/io";
import { GiAwareness } from "react-icons/gi";
import { FaAssistiveListeningSystems } from "react-icons/fa";

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <Box className="" data-aos="fade-up">
        <SlideShow />

        <Container maxW="container.xl" className="p-5">
          <Box className="mt-10 mb-12 flex flex-col items-center">
            <Heading>Welcome to</Heading>
            <Heading className="text-[#697bb0] text-center">
              IEEE Student Branch NUCES
            </Heading>
            <Box
              className="h-1 w-28 rounded-t-md mt-4"
              bg={useColorModeValue("#202023", "#F9F9F9")}
            />
            <Box className="h-1 w-28 bg-[#697bb0] rounded-b-md" />
            <Text className="my-8 tracking-wider text-center">
              The Mission of IEEE Student Branch NUCES is to raise awareness of
              science and technology among the students who hold electrical or
              computer science background. The branch conducts several talks,
              workshops, seminars, educational trips and competitions for this
              purpose.
            </Text>
          </Box>
          <Box className="mt-10 mb-24 flex flex-col md:flex-row">
            <Box className="flex flex-col md:flex-row justify-center items-center mx-auto">
              <Box className="bg-[#697bb0] hover:bg-[#9ea6be] px-16 py-8 m-3 w-52 flex flex-col items-center">
                <IoIosBulb size={50} />
                <Text className="text-xl font-semibold">Insights</Text>
              </Box>
              <Box className="bg-[#697bb0] hover:bg-[#9ea6be] px-16 py-8 m-3 w-52 flex flex-col items-center">
                <GiAwareness size={50} />
                <Text className="text-xl font-semibold">Awareness</Text>
              </Box>
              <Box className="bg-[#697bb0] hover:bg-[#9ea6be] px-16 py-8 m-3 w-52 flex flex-col items-center">
                <FaAssistiveListeningSystems size={50} />
                <Text className="text-xl font-semibold">Assistence</Text>
              </Box>
              {/* <Box className="bg-[#697bb0] p-16">Awareness</Box>
            <Box className="bg-[#697bb0] p-16">Assistence</Box> */}
            </Box>
          </Box>
          <Box className="hidden mt-10 mb-24 md:grid grid-cols-1 md:grid-cols-2 gap-3 justify-evenly">
            <Box
              className="flex items-center justify-center flex-col text-justify tracking-wider py-6 m-3"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url("/Images/Fast/fast_03.jpg")',
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            //height={{ base: "300px", md: "400px" }}
            >
              <Box
                className="mx-10 flex flex-col items-center border-2 border-dashed py-6 px-6"
              >
                <Heading
                  borderRadius="lg"
                  bg="rgb(102,124,172,0.5)"
                  mb={6}
                  p={3}
                  align="center"
                  color="#F7F6F2"
                  className=""
                >
                  Annual Tradition
                </Heading>
                <Text color="#F7F6F2" className="">
                  IEEE NUCES Lahore Student Branch yearly organizes a 3 day
                  Flagship Event: IEEE Week. This event will aims to unite
                  professionals and students across Pakistan to share and
                  explore ideas, develop skills and discuss issues related to
                  education, research and careers.
                </Text>
              </Box>
            </Box>
            <Box
              className="flex items-center justify-center flex-col text-center md:text-justify tracking-wider py-6 m-3"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url("/Images/Fast/fast_03.jpg")',
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            //height={{ base: "300px", md: "400px" }}
            >
              <Box
                className="mx-10 flex flex-col items-center  border-2 border-dashed py-6 px-6"
                onMouseEnter={() => setHov(true)}
                onMouseLeave={() => setHov(false)}
              >
                <Heading
                  borderRadius="lg"
                  bg="rgb(102,124,172,0.5)"
                  mb={6}
                  p={3}
                  align="center"
                  color="#F7F6F2"
                  className=""
                >
                  Legacy
                </Heading>
                <Text color="#F7F6F2" className="">
                  For years, IEEE Nuces Lahore has conducted a plethora of
                  seminars to educate the youth in all industrial sectors with a
                  penetrating depth of Electrical Engineering dimension. It
                  conducts Workshops, Gaming Competitions and much more!
                </Text>
              </Box>
            </Box>
          </Box>
          <Box className="mt-24 mb-12 flex justify-center">
            <Button
              onClick={() => router.push("https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join")}
              bg="#697bb0"
              //colorScheme="blue"
              leftIcon={<MdGroups size="30" />}
              className="hover:text-[#697bb0] text-[#f9f9f9] hover:bg-slate-400 shadow-2xl"
            //on_hover
            >
              Join IEEE International
            </Button>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
