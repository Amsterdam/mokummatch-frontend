import React, { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setIsQuestion } from "@/redux/Questionnaire/questionnaire";
import HeaderSection from "@/sections/About/HeaderSection";
import Page from "..";
import ImageSection from "@/sections/About/ImageSection";
import ImageRightParagraphSection from "@/sections/About/ImageRightParagraphSection";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InfoSection from "@/sections/About/InfoSection";
import ImageLeftParagraphSection from "@/sections/About/ImageLeftParagraphSection";
import CarousalSection from "@/sections/About/CarousalSection";
import QuestionDescSection from "@/sections/About/QuestionDescSection";
import SectionAboveFooter from "@/sections/About/SectionAboveFooter";
import LogoSection from "@/sections/About/LogoSection";
import { setActiveIndex } from "@/redux/Navbar/navbar";
import { useTheme } from "@mui/material";

const About = () => {
  const dispatch = useAppDispatch();

  const theme = useTheme()

  useEffect(() => {
    dispatch(setIsQuestion(false));
    dispatch(setActiveIndex(1));
  }, [dispatch]);

  return (
    <Page containsFooter={true} needMargin>
      <Grid >
        <Grid item sx={{ padding: "0 0 48px 0" }}>
          <Box>
            <HeaderSection />
          </Box>
        </Grid>
        <Grid item
          sx={{
            margin: "0 -120px",
            [theme.breakpoints.down('lg')]: {
              margin: "0 -40px"
            },
            [theme.breakpoints.down('md')]: {
              margin: "0 -40px"
            }
          }}>
          <ImageSection />
        </Grid>
        <Grid item sx={{ padding: "48px 0 8px 0" }}>
          <Box>
            <LogoSection />
          </Box>
        </Grid>
        <Grid item sx={{ padding: "12px 0 8px 0" }}>
          <Box>
            <ImageRightParagraphSection />
          </Box>
        </Grid>
        <Grid item sx={{ marginBottom: "84px" }}>
          <Box>
            <InfoSection />
          </Box>
        </Grid>
        <Grid item sx={{ padding: "0 0 24px 0" }}>
          <Box>
            <ImageLeftParagraphSection />
          </Box>
        </Grid>
        <Grid item sx={{ padding: "24px 0" }}>
          <Box>
            <CarousalSection />
          </Box>
        </Grid>
        <Grid item sx={{ padding: "4px 0 72px 0" }}>
          <Box>
            <QuestionDescSection />
          </Box>
        </Grid>
        <Grid item
          sx={{
            margin: "0 -120px",
            [theme.breakpoints.down('lg')]: {
              margin: "0 -40px"
            },
            [theme.breakpoints.down('md')]: {
              margin: "0 -40px"
            }
          }}>
          <Box>
            <SectionAboveFooter />
          </Box>
        </Grid>
      </Grid>
    </Page>
  );
};

export default About;
