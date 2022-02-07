import {
  Box,
  Button,
  Container,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRef, useState } from "react";
import { MdDoneAll } from "react-icons/md";
import TextField from "../components/text-field";
import * as Yup from "yup";

const Contact = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const validate = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 Characters or Less")
      .required("Required"),
    email: Yup.string().email("Email is Invalid").required("Email is Required"),
    subject: Yup.string()
      .max(20, "Must be 20 Characters or Less")
      .required("Enter the Subject about which you want to discuss."),
    message: Yup.string()
      .max(150, "Must be 150 Characters or Less")
      .required("Enter the related message."),
  });

  const handleSubmit = (values) => {
    //console.log(values);
    onOpen();
  };

  return (
    <Box className="py-24">
      <Container maxW="container.xl">
        <Heading className="text-center mb-20 text-[#697bb0] underline underline-offset-8">
          Get In Touch
        </Heading>
        <Box>
          <Container
            maxW="container.sm"
            className="flex flex-col flex-grow space-y-8"
          >
            <Formik
              initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  <Container
                    maxW="container.sm"
                    className="flex flex-col flex-grow space-y-9"
                  >
                    <TextField label="Name" name="name" type="text" />
                    <TextField label="Email" name="email" type="email" />
                    <TextField label="Subject" name="subject" type="text" />
                    <TextField label="Message" name="message" type="text" />
                    <Button
                      bg="#697bb0"
                      leftIcon={<MdDoneAll size="30" />}
                      className="hover:text-[#697bb0] hover:bg-slate-400 shadow-2xl"
                      type="submit"
                    >
                      Submit Form
                    </Button>
                  </Container>
                </Form>
              )}
            </Formik>
          </Container>
        </Box>
      </Container>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Form Submission</ModalHeader>
          <ModalBody>
            <Text mb="1rem">The Form has been Submitted</Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="whatsapp"
              variant="solid"
              mr={3}
              onClick={onClose}
            >
              OK
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Contact;
