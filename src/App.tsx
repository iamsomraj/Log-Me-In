import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import Header from "./components/Header/Header";
import { useState } from "react";
import Login from "./components/Login/Login";

export const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email: string, password: string) => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <ChakraProvider theme={theme}>
      <Header isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <Box>{!isLoggedIn && <Login onLogin={loginHandler} />}</Box>
    </ChakraProvider>
  );
};
