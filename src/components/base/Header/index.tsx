import { Typography } from "@mui/material";
import React from "react";
import { IHeader } from "./interfaces";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

theme.typography.h1 = {
  fontSize: "60px",
  lineHeight: "105%",
  fontWeight: 900,
  [theme.breakpoints.up("xs")]: {
    fontSize: "40px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "40px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "56px",
  },
}

theme.typography.h2 = {
  marginBottom: "24px",
  fontSize: "60px",
  fontWeight: 700,
  [theme.breakpoints.up("xs")]: {
    fontSize: "24px",
    fontWeight: 900
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "40px",
    fontWeight: 900
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "40px",
    fontWeight: 900
  },
};

theme.typography.h3 = {
  fontSize: "40px",
  fontWeight: 900,
  [theme.breakpoints.up("xs")]: {
    fontSize: "24px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "24px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "32px",
  },
};

theme.typography.h4 = {
  fontSize: "32px",
  fontWeight: 700,
  [theme.breakpoints.up("xs")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "32px",
  },
};

theme.typography.h5 = {
  fontSize: "24px",
  fontWeight: 900
};


theme.typography.body1 = {
  fontSize: "30px",
  fontWeight: 400,
  [theme.breakpoints.up("xs")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "24px",
  },
};

theme.typography.body2 = {
  fontSize: "24px",
  fontWeight: 400,
  [theme.breakpoints.up("xs")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  }
};

theme.typography.subtitle1 = {
  fontSize: "18px",
  fontWeight: 400,
  [theme.breakpoints.up("xs")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  }
}


const HeaderComponent = (props: IHeader) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        align={props.align ?? "center"}
        paragraph={props.isParagraph}
        variant={props.variant ?? "body1"}
        component={props.component}
        to={props.to}
        sx={{
          ...props.sx,
        }}
        style={{ wordBreak: "break-word" }}
      >
        {props.text}
      </Typography>
    </ThemeProvider>
  );
};

export default HeaderComponent;
