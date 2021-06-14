import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import Header from "./components/Header/Header";
import { useState } from "react";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import Home from "./components/Home/Home";

export const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getLoginStatusFromStorage = () => {
      const isAuth: any = localStorage.getItem("isLoggedIn")
        ? JSON.parse(localStorage.getItem("isLoggedIn") as any)
        : null;
      setIsLoggedIn(isAuth);
    };
    getLoginStatusFromStorage();
  }, []);

  const loginHandler = (email: string, password: string) => {
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
  };

  return (
    <ChakraProvider theme={theme}>
      <Header isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <Box>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home />}
      </Box>
    </ChakraProvider>
  );
};
