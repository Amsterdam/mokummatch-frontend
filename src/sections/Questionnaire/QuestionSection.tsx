import React from "react";
import Header from "@/components/base/Header";
import { useAppSelector } from "@/redux/hooks";
import { getQuestionnaire } from "@/redux/Questionnaire/questionnaire";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { IQuestion } from "./interfaces";
import { useTheme } from "@mui/material";

const QuestionSection = ({ id }: IQuestion) => {
  const questionnaire = useAppSelector(getQuestionnaire);

  const theme = useTheme()

  return (
    <Grid item>
      <Box sx={{marginTop: "8 px",
      
    }}>
        <Header
          text={questionnaire[parseInt(id) - 1].question}
          variant={'h2'}
          align={"left"}
          sx={{
            [theme.breakpoints.up('xl')]: {
              fontSize: "80px !important"
            },
            [theme.breakpoints.up('lg')]: {
              fontSize: "56px"
            },
            [theme.breakpoints.down('lg')]: {
              fontSize: "56px"
            },
            [theme.breakpoints.down('md')]: {
              fontSize: "40px"
            },
            [theme.breakpoints.down(400)]: {
              fontSize: "40px"
            },
          }}
        />
      </Box>
    </Grid>
  );
};

export default QuestionSection;
