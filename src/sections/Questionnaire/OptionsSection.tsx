import ButtonComponent from "@/components/base/Button";
import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import SkipSection from "./SkipSection";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { EAnswer } from "@/redux/Questionnaire/interfaces";
import { IOptionsProps } from './interfaces';
import { useTheme } from "@mui/material";

const OptionsSection = ({ id, handleClick }: IOptionsProps) => {
  const { t } = useTranslation();

  const theme = useTheme()

  return (
    <>

      <Grid
        container
        item
        direction={{ xs: "column", md: "row" }}
        spacing={0}
        sx={{
          width: "100%",
        }}
      >
        <Grid item sx={{ padding: "4px" }}>
          <ButtonComponent
            label={t("questions.options.agree")}
            color={"#ffffff"}
            backgroundColor={"#00A03C"}
            startIcon={<ThumbUpOffAltIcon sx={{
              height: "24px",
              width: "24px",
            }} />}
            onClick={() => handleClick({
              id: 1,
              answer: EAnswer.agree
            })}
            sx={{
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#00D14E",
                border: "none",
                boxShadow: "none",
              },
              "&:active": {
                border: "3px solid #006B28",
                boxShadow: "none"
              },
              [theme.breakpoints.down('md')]: {
                width: "100%",
              },
              fontSize: "24px !important",
            }}
          />
        </Grid>

        <Grid item sx={{ padding: "4px 4px" }}>
          <ButtonComponent
            label={t("questions.options.neutral")}
            color={"#000"}
            backgroundColor={"#ffffff"}
            variant={"outlined"}
            sx={{
              margin: "0 14px",
              // border: "2px solid #000000",
              border: "none",
              boxShadow: "inset 0px 0px 0px 3px #000",
              borderRadius: "4px",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: '#eee',
                // border: "2px solid #000000",
                border: "none",
              },
              "&:active": {
                // border: "3px solid #000000",
                // boxShadow: "none"
              },
              [theme.breakpoints.down('md')]: {
                margin: "20px 0",
                width: "100%",
              },
              fontSize: '24px !important'
            }}
            onClick={() => handleClick({
              id: 2,
              answer: EAnswer.neutral
            })}
          />
        </Grid>

        <Grid item
          sx={{
            padding: "4px",
            // [theme.breakpoints.down('xl')]: {
            //   backgroundColor: "gray",
            //   padding: "4px 2px"
            // }
          }}>
          <ButtonComponent
            label={t("questions.options.disagree")}
            color={"#ffffff"}
            backgroundColor={"#EC0000"}
            startIcon={<ThumbDownOffAltIcon sx={{
              height: "24px",
              width: "24px",
            }} />}
            onClick={() => handleClick({
              id: 3,
              answer: EAnswer.disagree
            })}
            sx={{
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#FF5252",
                border: "none",
                boxShadow: "none",
              },
              "&:active": {
                border: "3px solid #850000",
                boxShadow: "none"
              },
              [theme.breakpoints.down('lg')]: {
                width: "100%",
              },
              fontSize: '24px !important'
            }}
          />
        </Grid>

        <Grid item sx={{ padding: "4px", }}>
          <SkipSection id={id} handleClick={handleClick} />
        </Grid>
      </Grid >

    </>
  );
};

export default OptionsSection;
