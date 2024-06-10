import React, { useEffect } from "react";
import Page from "..";
import * as instances from "@/data/instances/instances.json";
import { useAppDispatch } from "@/redux/hooks";
import Grid from "@mui/material/Grid";
import SocialListsSection from "@/sections/Socials/SocialListsSection";
import HeaderSection from "@/sections/Socials/HeaderSection";
import { setIsQuestion } from "@/redux/Questionnaire/questionnaire";
import { setActiveIndex } from "@/redux/Navbar/navbar";

const Socials = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsQuestion(false));
    dispatch(setActiveIndex(2));
  }, [dispatch]);

  return (
    <Page containsFooter={true} needMargin>
      <Grid>
        <HeaderSection />
      </Grid>
      <Grid>
        <SocialListsSection />
      </Grid>
    </Page>
  );
};

export default Socials;
