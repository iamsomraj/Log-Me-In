import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useReducer } from "react";
import { useRef } from "react";
import InputControl from "../Input/Input";
import { RefObject } from "../Util/type";

enum EmailActionTypes {
  USER_EMAIL_INPUT = "USER_EMAIL_INPUT",
  USER_EMAIL_VALID = "USER_EMAIL_VALID",
}

enum PasswordActionTypes {
  USER_PASSWORD_INPUT = "USER_PASSWORD_INPUT",
  USER_PASSWORD_VALID = "USER_PASSWORD_VALID",
}

interface UserEmailInputAction {
  type: EmailActionTypes.USER_EMAIL_INPUT;
  payload: string;
}

interface UserEmailValidAction {
  type: EmailActionTypes.USER_EMAIL_VALID;
}

interface UserPasswordInputAction {
  type: PasswordActionTypes.USER_PASSWORD_INPUT;
  payload: string;
}

interface UserPasswordValidAction {
  type: PasswordActionTypes.USER_PASSWORD_VALID;
}

type EmailAction = UserEmailInputAction | UserEmailValidAction;
type PasswordAction = UserPasswordInputAction | UserPasswordValidAction;

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const initialStateEmail = {
  value: "",
  isValid: true,
};

const initialStatePassword = {
  value: "",
  isValid: true,
};

const emailReducer = (
  state: {
    value: string;
    isValid: boolean;
  },
  action: EmailAction
) => {
  switch (action.type) {
    case EmailActionTypes.USER_EMAIL_INPUT:
      return {
        value: action.payload,
        isValid: action.payload.includes("@"),
      };
    case EmailActionTypes.USER_EMAIL_VALID:
      return {
        value: state.value,
        isValid: state.value.includes("@"),
      };
    default:
      return state;
  }
};

const passwordReducer = (
  state: {
    value: string;
    isValid: boolean;
  },
  action: PasswordAction
) => {
  switch (action.type) {
    case PasswordActionTypes.USER_PASSWORD_INPUT:
      return {
        value: action.payload,
        isValid: action.payload.trim().length > 4,
      };
    case PasswordActionTypes.USER_PASSWORD_VALID:
      return {
        value: state.value,
        isValid: state.value.trim().length > 4,
      };
    default:
      return state;
  }
};

const Login: React.FC<LoginProps> = (props) => {
  const emailRef = useRef<RefObject>(null);
  const passwordRef = useRef<RefObject>(null);

  const [emailState, emailDispatch] = useReducer(
    emailReducer,
    initialStateEmail
  );

  const [passwordState, passwordDispatch] = useReducer(
    passwordReducer,
    initialStatePassword
  );

  const emailChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    emailDispatch({
      type: EmailActionTypes.USER_EMAIL_INPUT,
      payload: event.target.value,
    });
  };

  const passwordChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    passwordDispatch({
      type: PasswordActionTypes.USER_PASSWORD_INPUT,
      payload: event.target.value,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      emailDispatch({
        type: EmailActionTypes.USER_EMAIL_VALID,
      });
      passwordDispatch({
        type: PasswordActionTypes.USER_PASSWORD_VALID,
      });
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [emailState.value, passwordState.value]);

  const submitHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    if (!emailState.isValid) {
      if (emailRef.current) {
        emailRef.current.focus();
      }
      return;
    }

    if (!passwordState.isValid) {
      if (passwordRef.current) {
        passwordRef.current.focus();
      }
      return;
    }
    props.onLogin(emailState.value, passwordState.value);
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
            <InputControl
              ref={emailRef}
              id="email"
              isValid={emailState.isValid}
              label="Email Address"
              onChange={emailChangeHandler}
              type="email"
              value={emailState.value}
            />
            <InputControl
              ref={passwordRef}
              id="password"
              isValid={passwordState.isValid}
              label="Password"
              onChange={passwordChangeHandler}
              type="password"
              value={passwordState.value}
            />
            <Stack spacing={10}>
              <Button
                type="submit"
                onClick={submitHandler}
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
