import React from "react";
import ButtonComponent from "@/components/base/Button";
import { EAnswer } from "@/redux/Questionnaire/interfaces";
import { useTranslation } from "react-i18next";
import { IOptionsProps } from "./interfaces";
import { useTheme } from "@mui/material";

const SkipSection = ({ id, handleClick }: IOptionsProps) => {

  const { t } = useTranslation();

  const theme = useTheme()

  return (
    <ButtonComponent
      label={t("questions.general.skip")}
      color={"#000"}
      backgroundColor={"#ffffff"}
      variant="text"
      onClick={() => handleClick({
        id: 4,
        answer: EAnswer.skipped
      })}
      sx={{
        fontWeight: 600,
        "&:hover": {
          backgroundColor: "#FFFFFF",
          border: "none",
        },
        "&:active": {
          border: "3px solid #000000",
          boxShadow: "none"
        },
        [theme.breakpoints.down('md')]: {
          marginTop: "32px",
          fontSize: "24px !important",
          width: "100%",
        },
        [theme.breakpoints.up('md')]: {
          marginLeft: "60px",
        }
      }}
    />
  );
};

export default SkipSection;
