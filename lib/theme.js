import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#F9F9F9", "#202023")(props),
    },
  }),
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  fonts,
});

export default theme;
