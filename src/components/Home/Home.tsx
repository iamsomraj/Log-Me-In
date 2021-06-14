import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Learn React from
          <br />
          <Text as={"span"} color={"green.400"}>
            one of the easiest courses
          </Text>
        </Heading>
      </Stack>
    </Container>
  );
}
