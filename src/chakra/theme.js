import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";
export const theme = extendTheme({
  colors: {
    brand: {
      200: "#7762D9",
      300: "#EFECFD",
      100: "#633BFE",
    },
    error: {
      100: "#fb133a",
    },
    primary: {
      100: "#3A3A3A",
      200: "#989898",
    },
    secondary: {
      100: "#f9f9f9",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "secondary.100",
      },
    }),
  },
  components: {
    Button,
  },
});
