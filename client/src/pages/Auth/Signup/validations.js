import * as yup from "yup";
const validations = yup.object().shape({
  email: yup.string().email("enter a valid email").required("required"),
  password: yup.string().min(5, "password must be at least 5 characters").required("required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "the password don't match")
    .required("required"),
});

export default validations;
