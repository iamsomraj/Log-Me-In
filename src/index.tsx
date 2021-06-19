import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ColorModeScript />
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
