import DescriptionSection from "@/sections/StartMokummatch/DescriptionSection";
import ImageSection from "@/sections/StartMokummatch/ImageSection";
import { Box, useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";

const StartMokumMatch = () => {

  const theme = useTheme();

  return (
    <React.Fragment>
      <Box sx={{ margin: "0 auto", minHeight: "100vh" }}>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'column', lg: "row" }} spacing={4}
          sx={{
            margin: "0 120px",
            [theme.breakpoints.down('lg')]: {
              margin: "0 16px",
            },
          }} >
          <DescriptionSection />
          <ImageSection />
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default StartMokumMatch;
