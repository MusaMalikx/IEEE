import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

const TeamCard = ({ text1, text2, image }) => {
  const [hover, setHover] = useState(false);
  return (
    <Box
      className="flex transition ease-linear hover:scale-95 p-1 mx-auto"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      height={413}
      width={270}
      border={useColorModeValue(
        hover ? "2px dotted #202023" : "2px solid #F9F9F9",
        hover ? "2px dotted #F9F9F9" : "2px solid #202023"
      )}
    >
      {/* <Image src="/Images/Team/1.png" height={400} width={270} alt="team-image"/> */}

      {hover ? (
        <Box
          style={{
            backgroundImage: `linear-gradient(rgb(96,119,186,0.4), rgb(96,119,186,0.4)),url("/Images/Team/${image}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          height={400}
          width={270}
          className="cursor-pointer"
        >
          <Box
            className="flex flex-col items-center justify-center relative top-20"
            style={{
              backgroundColor: "rgb(0,0,0,0.7)",
              // 'linear-gradient(rgb(96,119,186,0.4), rgb(96,119,186,0.4)),url("/Images/Team/1.png")',
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            height={100}
            width={255}
            color="#F9F9F9"
          >
            <Text className="font-bold tracking-widest text-lg">{text1}</Text>
            <Text className="font-mono">{text2}</Text>
          </Box>
        </Box>
      ) : (
        <Box
          style={{
            backgroundImage: `url("/Images/Team/${image}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          height={400}
          width={270}
        />
      )}
    </Box>
  );
};

export default TeamCard;
