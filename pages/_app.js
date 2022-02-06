import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Fonts from "../components/fonts";
import Layout from "../components/layouts/main";
import theme from "../lib/theme";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps, router }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
