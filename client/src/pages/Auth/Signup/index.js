import React from "react";
import { Flex, Box, Heading, FormLabel, FormControl, Input, Button } from "@chakra-ui/react";

function Signup() {
  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt="10">
          <Box textAlign="center">
            <Heading>Sing Up</Heading>
          </Box>
          <Box my="5" textAlign="left">
            <form onSubmit={() => {}}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input name="email" />
              </FormControl>

              <FormControl mt="4">
                <FormLabel>Password</FormLabel>
                <Input name="password" type="password" />
              </FormControl>

              <FormControl mt="4">
                <FormLabel>Password Confirm</FormLabel>
                <Input name="passwordConfirm" type="password" />
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
