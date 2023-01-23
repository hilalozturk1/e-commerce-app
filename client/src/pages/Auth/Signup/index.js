import React, { useContext } from "react";
import {useNavigate} from "react-router-dom"
import { Flex, Box, Heading, FormLabel, FormControl, Input, Button, Alert } from "@chakra-ui/react";
import { useFormik } from "formik";
import validationSchema from "./validations";
import { fecthRegister } from "../../../api";
import { useAuth } from "../../../context/AuthContext";

function Signup() {
  let navigate = useNavigate();
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      console.log(values);
      try {
        const registerResponse = await fecthRegister({
          email: values.email,
          password: values.password,
        });
        login(registerResponse);
        navigate("/profile")
        console.log(registerResponse);
      } catch (error) {
        bag.setErrors({ general: error.response.data.message });
      }
    },
  });

  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt="10">
          <Box textAlign="center">
            <Heading>Sing Up</Heading>
          </Box>
          <Box my="5">
            {formik.errors.general && <Alert status="error">{formik.errors.general}</Alert>}
          </Box>
          <Box my="5" textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                />
              </FormControl>

              <FormControl mt="4">
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                />
              </FormControl>

              <FormControl mt="4">
                <FormLabel>Password Confirm</FormLabel>
                <Input
                  name="passwordConfirm"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passwordConfirm}
                  isInvalid={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
                />
              </FormControl>

              <Button mt="4" type="submit" width="full">
                Sing up
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Signup;
