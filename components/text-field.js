import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { ErrorMessage, useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  //console.log(field, meta);

  return (
    <FormControl isInvalid={meta.touched && meta.error && true} isRequired>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input
        {...field}
        {...props}
        id="name"
        placeholder="Name"
        // name="name"
        // value={state.name}
        //onChange={(e) => setState({ ...state, name: e.target.value })}
        _focus={{ borderColor: "#697bb0", borderWidth: "2px" }}
        autoComplete="off"
      />
      <FormErrorMessage className="absolute whitespace-nowrap -bottom-4" >
        <ErrorMessage component="div" name={field.name} className="absolute" />
      </FormErrorMessage>
    </FormControl>
  );
};

export default TextField;
