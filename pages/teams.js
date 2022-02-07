import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import Card from "../components/card";
import TeamCard from "../components/team-card";

const Teams = () => {
  return (
    <Box className="py-24">
      <Container maxW="container.xl">
        <Heading className="text-center mb-20 text-[#697bb0] underline underline-offset-8">
          Our Exective Team
        </Heading>
        <Box className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 items-center gap-4">
          <TeamCard text1="Nabeel Baghoor" text2="Chairperson" image="1.png" />
          <TeamCard text1="Haiqa Saman" text2="WIE Chairperson" image="2.png" />
          <TeamCard
            text1="Yassal Arif"
            text2="Vice ChairPerson"
            image="3.png"
          />
          <TeamCard
            text1="Syed Ali Hamza"
            text2="Vice Chairperson"
            image="5.png"
          />
          <TeamCard
            text1="Saif Ur Rehman"
            text2="Vice Chairperson"
            image="6.png"
          />
          <TeamCard
            text1="Hussain Mohy Ud Din"
            text2="Events Manager"
            image="4.jpeg"
          />
          <TeamCard
            text1="Talha Khan"
            text2="Media Coordinator"
            image="8.png"
          />
          <TeamCard
            text1="Mujtaba Bashir"
            text2="General Secretary"
            image="9.png"
          />
          <TeamCard text1="Hafsa Khan" text2="Treasurer" image="7.png" />
          <TeamCard
            text1="Muhammad Zeeshan"
            text2="General Manager"
            image="10.png"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Teams;
