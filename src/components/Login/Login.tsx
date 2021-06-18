import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const emailChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredPassword(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setEmailIsValid(enteredEmail.includes("@"));
      setPasswordIsValid(enteredPassword.trim().length > 3);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredEmail, enteredPassword]);

  const submitHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Flex
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                isInvalid={!emailIsValid}
                type="email"
                value={enteredEmail}
                onChange={emailChangeHandler}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                isInvalid={!passwordIsValid}
                type="password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                type="submit"
                onClick={submitHandler}
                isDisabled={!emailIsValid || !passwordIsValid}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
