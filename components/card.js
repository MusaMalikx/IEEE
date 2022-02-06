import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const Card = () => {
  return (
    <Box className="max-w-sm w-full lg:max-w-full lg:flex mx-2 transition hover:scale-95" data-aos="zoom-in">
      <Box
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: "url('/Images/Fast/fast_02.jpg')" }}
        title="Woman holding a mug"
      ></Box>
      <Box className="border-r border-b border-l lg:border-l-0 lg:border-t rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <Box className="mb-8">
          <Text className="text-sm flex items-center">
            <svg
              className="fill-current w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </Text>
          <Box className="font-bold text-xl mb-2">
            Can coffee make you a better developer?
          </Box>
          <Text className=" text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </Text>
        </Box>
        <Box className="flex items-center">
          <Image
            height={10}
            width={10}
            className="w-10 h-10 rounded-full mr-4"
            src="/Images/Fast/fast_02.jpg"
            alt="Avatar of Jonathan Reinink"
          />
          <Box className="text-sm">
            <Text className="leading-none">Jonathan Reinink</Text>
            <Text className="">Aug 18</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Card;
