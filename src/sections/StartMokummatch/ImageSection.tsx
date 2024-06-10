import React from "react";
import landingPageColumn from "@/assets/landingPageColumn.svg";
import landingPageRow from "@/assets/landingPageRow.svg";
import landingPageRowMobile from "@/assets/landingPageRowMobile.svg";
import useViewport from "@/helpers/useViewport";
import { Box, useTheme } from "@mui/material";

const ImageSection = () => {
  const { width } = useViewport();
  const theme = useTheme();
  const breakpoint = theme.breakpoints.values.lg;

  return (
    <Box>
      <Box
        component="img"
        src={
          width < breakpoint
            ? width < theme.breakpoints.values.sm
              ? landingPageRowMobile
              : landingPageRow
            : landingPageColumn
        }
        sx={{
          [theme.breakpoints.up("lg")]: {
            position: "fixed",
            overflow: "hidden",
            marginTop: "-170px",
          },
          [theme.breakpoints.down("lg")]: {
            width: "fit-content",
            alignSelf: "center",
            marginBottom: "8px",
            marginLeft: "-170px",
          },
        }}
      />
    </Box>
  );
};

export default ImageSection;
