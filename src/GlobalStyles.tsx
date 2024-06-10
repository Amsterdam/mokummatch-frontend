import { createTheme } from "@mui/material/styles";
import style from "./global_styles.json";

const theme = {
  palette: {
    primary: {
      main: style.brand.primary_color,
    },
    text: {
      primary: style.font_family.primary.color, //Key added manually in the global_styles.json
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    h1: {
      fontSize: style.header.h1.font_size,
    },
    h2: {
      fontSize: style.header.h2.font_size,
    },
    h3: {
      fontSize: style.header.h3.font_size,
    },
    h4: {
      fontSize: style.header.h4.font_size,
    },
    fontFamily: [
      `${style.font_family.primary.name}`,
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Oxygen"',
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ].join(","),
    fontSize: style.font_family.primary.size,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: style.font_family.primary.size,
          backgroundColor: style.button.primary.color,
        },
      },
    },
  },
};

export const BaseTheme = createTheme(theme);
