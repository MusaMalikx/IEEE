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
import { useRef, useState } from "react";
import { MdDoneAll } from "react-icons/md";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");

  const [NameValid, setNameValid] = useState(false);
  const [EmailValid, setEmailValid] = useState(false);
  const [SubjectValid, setSubjectValid] = useState(false);
  const [MessageValid, setMessageValid] = useState(false);
  //const isError = Email === "";

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef()
  const finalRef = useRef()


  const handleSubmit = () => {
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
            <FormControl isInvalid={NameValid} isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                placeholder="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
              {!Name && (
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
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!EmailValid ? (
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
                value={Subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              {!Subject && (
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
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {!Message && (
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
            </Button>
          </Container>
        </Box>
      </Container>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Form Submission</ModalHeader>
          <ModalBody>
            <Text mb="1rem">
              The Form has been Submitted
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="whatsapp" variant="solid" mr={3} onClick={onClose}>
              OK
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Contact;
