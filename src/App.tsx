import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { useContext } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AuthContext from "./context/AuthContext";

export const App: React.FC = () => {
  const authCtx = useContext(AuthContext);

  return (
    <ChakraProvider theme={theme}>
      <Header
        isAuthenticated={authCtx.isLoggedIn}
        onLogout={authCtx.onLogout}
      />
      <Box>
        {!authCtx.isLoggedIn && <Login onLogin={authCtx.onLogin} />}
        {authCtx.isLoggedIn && <Home />}
      </Box>
    </ChakraProvider>
  );
};
