import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./css/theme";
import { TodoContextProvider } from "./context/todo-context";

render(
  <StrictMode>
    <TodoContextProvider>
      <ChakraProvider resetCSS theme={theme}>
        <App />
      </ChakraProvider>
    </TodoContextProvider>
  </StrictMode>,
  document.getElementById("root")
);
