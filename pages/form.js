import { Button, Container } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import TextField from "../components/text-field";
import { MdDoneAll } from "react-icons/md";
import * as Yup from "yup";

const Forms = () => {
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

  return (
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
        <Container>
          {/* {console.log(formik.values)} */}
          <Form>
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
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default Forms;
