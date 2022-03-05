import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./css/theme";
import { TodoContextProvider } from "./context/todo-context";

ReactDOM.render(
  <React.StrictMode>
    <TodoContextProvider>
      <ChakraProvider resetCSS theme={theme}>
        <App />
      </ChakraProvider>
    </TodoContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
