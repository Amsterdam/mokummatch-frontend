import Info from "@/components/composite/Info";
import React from "react";
import { useTranslation } from "react-i18next";
import ImagePlaceholder1 from "@/assets/ImagePlaceholder1.svg";
import Grid from "@mui/material/Grid";
import useViewport from "@/helpers/useViewport";
import { Box, useTheme } from "@mui/material";

const ImageLeftParagraphSection = () => {
  const { t } = useTranslation();

  const { width } = useViewport();

  const theme = useTheme();

  const breakpoint = 880;

  return (
    <Grid
      container
      wrap={"wrap"}
      direction={{ xs: "column", sm: "column", md: "row" }}
      sx={{ marginTop: "20px" }}
    >
      {width > breakpoint ? (
        <>
          <Grid item xs={6} sx={{ width: "100%" }}>
            <Box component="img" src={ImagePlaceholder1} alt="placeholder" sx={{
              position: "relative",
              width: "100%", height: "auto",
              padding: "0 0 0 0",
              [theme.breakpoints.down(breakpoint)]: {
                padding: "0 24px 0 0",
              }
            }} />
          </Grid>

          <Grid item xs={6} sx={{
            marginTop: '12px',
            padding: "0 0 0 24px",
            [theme.breakpoints.down(breakpoint)]: {
              padding: "0 0 0 0",
            }
          }}>
            <Info
              headerText={t("pages.about.imgParagraphReverse.header")}
              paragraphText={t("pages.about.imgParagraphReverse.description")}
            />
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={6}>
            <Info
              headerText={t("pages.about.imgParagraphReverse.header")}
              paragraphText={t("pages.about.imgParagraphReverse.description")}
            />
          </Grid>
          <Grid item xs={6}>
            <Box component="img" src={ImagePlaceholder1} alt="placeholder" style={{
              width: '100%', height: '100%',

            }} />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default ImageLeftParagraphSection;
