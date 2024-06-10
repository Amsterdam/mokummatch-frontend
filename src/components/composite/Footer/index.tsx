// import React from "react";
import { Grid } from "@mui/material";
import { IFooter } from "./interfaces"

export const Footer = (props: IFooter) => {

  const {
    text1 = 'text1',
    text2 = 'text2',
  } = props

  return (
    <Grid
      container
      justifyContent="space-around"
      direction="row"
      sx={{
        position: 'relative',
        backgroundColor: '#fff',
        // padding: "0 40px",
        width: '100%',
        height: '120px',
        zIndex: '500'
      }}
    >
      <Grid
        container
        display="flex"
        item
        xs={3}
        sm={2}
        md={3}
        lg={3}
        xl={4}
        direction="column"
        justifyContent="center"
        style={{
          fontWeight: "900",
        }}
      >
        {text1}
      </Grid>


      <Grid
        container
        direction="column"
        justifyContent="center"
        xs={3}
        sm={2}
        md={3}
        lg={3}
        xl={4}
        sx={{ textAlign: "right" }}
      >
        {text2}
      </Grid>

    </Grid>

  );
}

export default Footer;