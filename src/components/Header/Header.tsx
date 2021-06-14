/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Flex, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  let buttonOptions = (
    <>
      <Button fontSize={"sm"} fontWeight={400} href={"#"}>
        Sign In
      </Button>
      <Button
        fontSize={"sm"}
        fontWeight={600}
        color={"white"}
        bg={"pink.400"}
        href={"#"}
        _hover={{
          bg: "pink.300",
        }}
      >
        Sign Up
      </Button>
    </>
  );

  if (props.isAuthenticated) {
    buttonOptions = (
      <>
        <Button
          onClick={props.onLogout}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"pink.400"}
          href={"#"}
          _hover={{
            bg: "pink.300",
          }}
        >
          Logout
        </Button>
      </>
    );
  }

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Stack justify="right" direction={"row"} spacing={6}>
          {buttonOptions}
        </Stack>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
    </Box>
  );
};

export default Header;
