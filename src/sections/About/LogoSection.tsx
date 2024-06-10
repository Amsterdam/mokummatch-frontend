import { Box, Grid, useTheme } from "@mui/material";
import React from "react";
import logo1 from "@/assets/about_logo1.png";
import logo2 from "@/assets/about_logo2.png";
import { useTranslation } from "react-i18next";
import HeaderComponent from "@/components/base/Header";

const LogoSection = () => {

  const { t } = useTranslation();

  const theme = useTheme()

  return (
    <Grid
      container
      spacing={2}
      justifyContent={"center"}
      direction={"column"}
      sx={{ marginTop: "20px" }}
    >
      <Grid>
        <HeaderComponent variant={"h2"} text={t("pages.about.title")} />
      </Grid>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        direction={"row"}
        sx={{ marginTop: "20px" }}
      >
        <Box component="img" src={logo1} alt={"logo1"} sx={{
          maxWidth: "100%", height: "140px",
          [theme.breakpoints.down('md')]: {
            height: "100px",
          }
        }} />
        <Box component="img" src={logo2} alt={"logo2"} sx={{
          maxWidth: "100%", height: "80px", margin: "30px 0 0 24px",
          [theme.breakpoints.down('md')]: {
            height: "40px",
            margin: "30px 0 0 24px"
          },
        }} />
      </Grid>
    </Grid>
  );
};

export default LogoSection;
