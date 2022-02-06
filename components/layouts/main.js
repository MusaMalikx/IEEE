import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Image from "next/image";
import TopNavbar from "../top-navbar";
import BottomNavbar from "../bottom-navbar";

const Main = ({ children, router }) => {
  return (
    <Box as="main" className="flex flex-col min-h-screen">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>IEEE</title>
      </Head>

      <TopNavbar path={router.asPath} />
      <Box pt={115} className=" flex-grow">
        {children}
      </Box>
      <BottomNavbar />
    </Box>
  );
};

export default Main;
