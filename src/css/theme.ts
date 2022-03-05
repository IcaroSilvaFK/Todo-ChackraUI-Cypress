import { extendTheme } from "@chakra-ui/react";

const Theme = {
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
};

export default extendTheme(Theme);
