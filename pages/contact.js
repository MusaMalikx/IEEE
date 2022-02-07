import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
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
  // const [Name, setName] = useState("");
  // const [Email, setEmail] = useState("");
  // const [Subject, setSubject] = useState("");
  // const [Message, setMessage] = useState("");

  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [NameValid, setNameValid] = useState(false);
  const [EmailValid, setEmailValid] = useState(false);
  const [SubjectValid, setSubjectValid] = useState(false);
  const [MessageValid, setMessageValid] = useState(false);
  //const isError = Email === "";

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

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

  const handleSubmit = () => {
    if (state.name !== "") {
      console.log(state.name);
      if (state.email !== "") {
        console.log(state.name, state.email);
        if (state.subject !== "") {
          console.log(state.name, state.email, state.subject);
          if (state.message !== "") {
            console.log(state.name, state.email, state.subject, state.message);
          }
        }
      }
    }
    // if (Name == "") {
    //   setNameValid(true);
    // } else {
    //   setNameValid(false);
    // }
    // if (Email == "") {
    //   setEmailValid(true);
    // } else {
    //   setEmailValid(false);
    // }
    // if (Subject == "") {
    //   setSubjectValid(true);
    // } else {
    //   setSubjectValid(false);
    // }
    // if (Message == "") {
    //   setMessageValid(true);
    // } else {
    //   setMessageValid(false);
    // }
    // if (NameValid && EmailValid && SubjectValid && MessageValid) {
    //   alert("Form Submit");
    // } else if (!NameValid && !EmailValid && !SubjectValid && !MessageValid) {
    //   alert("Form Not Submit");
    // }
    //onOpen();
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
              onSubmit={(values) => console.log(values)}
            >
              {(formik) => (
                <Form>
                  <Container
                    maxW="container.sm"
                    className="flex flex-col flex-grow space-y-9"
                  >
                    {/* {console.log(formik.values)} */}
                    <TextField label="Name" name="name" type="text" />
                    <TextField label="Email" name="email" type="email" />
                    <TextField label="Subject" name="subject" type="text" />
                    <TextField label="Message" name="message" type="text" />
                    <Button
                      bg="#697bb0"
                      //colorScheme="blue"
                      leftIcon={<MdDoneAll size="30" />}
                      className="hover:text-[#697bb0] hover:bg-slate-400 shadow-2xl"
                      type="submit"
                      //on_hover
                    >
                      Submit Form
                    </Button>
                  </Container>
                </Form>
              )}
            </Formik>
            {/* <FormControl isInvalid={NameValid} isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                placeholder="Name"
                // name="name"
                // value={state.name}
                onChange={(e) => setState({ ...state, name: e.target.value })}
                _focus={{ borderColor: "#697bb0", borderWidth: "2px" }}
              />
              {!state.name && (
                <FormErrorMessage>Enter your Name kindly.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={EmailValid} isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                autoComplete="off"
                //value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
                _focus={{ borderColor: "#697bb0", borderWidth: "2px" }}
              />
              {!state.email ? (
                <FormHelperText>
                  Enter the email you&apos;d like to receive the response on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={SubjectValid} isRequired>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <Input
                id="subject"
                placeholder="Subject"
                autoComplete="off"
                //value={state.subject}
                onChange={(e) =>
                  setState({ ...state, subject: e.target.value })
                }
                _focus={{ borderColor: "#697bb0", borderWidth: "2px" }}
              />
              {!state.subject && (
                <FormErrorMessage>
                  Enter the Subject about which you want to discuss.
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={MessageValid} isRequired>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                id="message"
                placeholder="Message"
                autoComplete="off"
                //value={state.message}
                onChange={(e) =>
                  setState({ ...state, message: e.target.value })
                }
                _focus={{ borderColor: "#697bb0", borderWidth: "2px" }}
              />
              {!state.message && (
                <FormErrorMessage>Enter the related message.</FormErrorMessage>
              )}
            </FormControl>
            <Button
              onClick={handleSubmit}
              bg="#697bb0"
              //colorScheme="blue"
              leftIcon={<MdDoneAll size="30" />}
              className="hover:text-[#697bb0] hover:bg-slate-400 shadow-2xl"
              //on_hover
            >
              Submit Form
            </Button> */}
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
