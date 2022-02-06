import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import ThemeToggleButton from "./theme-toggle-button";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inActiveColor = useColorModeValue("gray200", "whiteAlpha.900");

  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? "#697bb0" : undefined}
        color={active ? "#F7F6F2" : inActiveColor}
        className={`rounded-sm hover:text-[#697bb0] ${
          active && "hover:text-gray-200"
        }`}
      >
        <Box className="">{children}</Box>
      </Link>
    </NextLink>
  );
};

const TopNavbar = (props) => {
  const { path } = props;
  return (
    <Box
      className="p-3 z-10"
      position="fixed"
      as="nav"
      w="100%"
      //b="#FFFFFF"
      bg={useColorModeValue("#FFFFFF", "#20202380")}
      style={{
        backdropFilter: "blur(10px",
      }}
      //zIndex={1}
      {...props}
    >
      <Box className="flex justify-between items-center">
        <Box>
          <Heading>
            <Image
              src={`/logo/${useColorModeValue(
                "logo_dark.png",
                "logo_light.png"
              )}`}
              alt="logo"
              height={70}
              width={100}
            />
          </Heading>
        </Box>
        <Box className="flex">
          <Box className="hidden md:flex">
            <HStack spacing={10} mr={10} className="text-lg font-normal">
              <LinkItem href="/" path={path}>
                Home
              </LinkItem>
              <LinkItem href="/events" path={path}>
                Events
              </LinkItem>
              <LinkItem href="/teams" path={path}>
                Our Team
              </LinkItem>
              <LinkItem href="/contact" path={path}>
                Contact Us
              </LinkItem>
            </HStack>
          </Box>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu className="bg-white">
              <MenuButton
                as={IconButton}
                icon={<AiOutlineMenu />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                {/* <NextLink href="/" passHref>
                          <MenuItem as={Link}>About</MenuItem>
                      </NextLink> */}
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/events" passHref>
                  <MenuItem as={Link}>Events</MenuItem>
                </NextLink>
                <NextLink href="/teams" passHref>
                  <MenuItem as={Link}>Our Team</MenuItem>
                </NextLink>
                <NextLink href="/contact" passHref>
                  <MenuItem as={Link}>Contacts</MenuItem>
                </NextLink>
                {/* <NextLink href="/posts" passHref>
                          <MenuItem as={Link}>Posts</MenuItem>
                      </NextLink> */}
                {/* <MenuItem as={Link} href="https://www.youtube.com">
                          View Source
                      </MenuItem> */}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopNavbar;
