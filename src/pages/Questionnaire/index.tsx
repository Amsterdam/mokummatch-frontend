import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setIsQuestion,
  setQuestionNumber,
  storeAnswer,
  totalQuestions,
} from "@/redux/Questionnaire/questionnaire";
import { setActiveIndex } from "@/redux/Navbar/navbar";
import { useEffect } from "react";
import Page from "..";
import { useNavigate, useParams } from "react-router-dom";
import QuestionSection from "@/sections/Questionnaire/QuestionSection";
import OptionsSection from "@/sections/Questionnaire/OptionsSection";

import SpeakerSection from "@/sections/Questionnaire/SpeakerSection";
import { IAnswerModel } from "@/redux/Questionnaire/interfaces";
import { getRouteById, routes } from "../routes";
import BackSection from "@/sections/Questionnaire/BackSection";

import { Box, Grid, useTheme } from "@mui/material";

const Questionnaire = () => {
  const theme = useTheme();

  const { id }: any = useParams();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setIsQuestion(true));
    dispatch(setQuestionNumber(id));
    dispatch(setActiveIndex(-1));
  }, [dispatch, id]);

  const totalNumOfQuestions = useAppSelector(totalQuestions);

  const handleClick = (value: IAnswerModel) => {
    const answerObject = {
      questionId: parseInt(id),
      answer: value,
    };
    dispatch(storeAnswer(answerObject));
    if (id >= totalNumOfQuestions) {
      dispatch(setIsQuestion(false));
      navigate(routes.TOP_THREE);
    } else {
      navigate(getRouteById(routes.QUESTIONNAIRE, parseInt(id) + 1));
    }
  };

  return (
    <Page
      containsFooter={false}
      needMargin
      sx={{
        width: "100%",
      }}
    >
      <Grid
        container
        item
        sx={{
          height: "70%",
          width: "100%",
          marginTop: "-12px",
        }}
      >
        <Grid
          container
          item
          sx={{
            padding: "0",
            marginBottom: "16px",
            width: "100%",
          }}
        >
          {parseInt(id) !== 1 ? (
            <BackSection id={id} showBackButton={true} />
          ) : (
            <BackSection id={id} showBackButton={false} />
          )}
        </Grid>

        <Grid item sx={{ position: "relative", margin: "0 auto" }}>
          <Box
            sx={{
              position: "relative",
              margin: "0 0",
              width: "100%",
          
              [theme.breakpoints.up("lg")]: {
                padding: "0 8%",
              },
              [theme.breakpoints.down(1200)]: {
                padding: "0 9%",
              },
              [theme.breakpoints.down(980)]: {
                padding: "0 4%",
              },
              [theme.breakpoints.down("md")]: {
                padding: "0",
              },
            }}
          >
            <Grid
              container
              sx={{
                width: "100%",
              }}
            >
              <Grid
                item
                sx={{
                  width: "100%",
                }}
              >
                <SpeakerSection id={id} />
                <QuestionSection id={id} />
              </Grid>

              <Grid
                sx={{
                  width: "100%",
                }}
              >
                <OptionsSection id={id} handleClick={handleClick} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Questionnaire;
