import React from "react";
import Page from "..";
import Grid from "@mui/material/Grid";
import MainSection from "@/sections/TopThree/MainSection";

const TopThree = () => {
  return (
    <>
      <Page containsFooter={false} needMargin>
        <Grid>
          <MainSection />
        </Grid>
      </Page>
    </>
  );
};

export default TopThree;
