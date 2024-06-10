import React from "react";
import HeaderComponent from "@/components/base/Header";
import { useTranslation } from "react-i18next";
import Stack from "@mui/material/Stack";
import TextToSpeech from "@/components/base/TextToSpeech";
import LandingPageButton from "@/components/composite/LandingPageButton";
import useViewport from "@/helpers/useViewport";
import { useTheme, Box } from "@mui/material";

const DescriptionSection = () => {
  const { t } = useTranslation();
  const { width } = useViewport();
  
  const theme = useTheme()
  const breakpoint = theme.breakpoints.values.lg;
  const alignment = (width >= breakpoint) ? "left" : "center";

  return (
    <Box sx={{
      paddingTop: "100px",
      width: (width >= breakpoint) ? "50%" : "100%",
      [theme.breakpoints.down(breakpoint)]: {
        paddingTop: "0",
      }
    }}>
      <Stack direction={"column"} spacing={1}>
        <HeaderComponent
          variant={'h2'}
          text={t("pages.startmokummatch.header")}
          sx={{
            fontSize: "60px !important",
            lineHeight: "104%",
            fontWeight: "700",
            marginBottom: 0,
            [theme.breakpoints.down('lg')]: {
              marginTop: '80px',
            },
            [theme.breakpoints.down('md')]: {
              marginTop: '40px',
              fontSize: "40px !important",
            },
            [theme.breakpoints.down('sm')]: {
              fontSize: "24px !important",
            }
          }}
          align={alignment}
        />
        <HeaderComponent
          text={t("pages.startmokummatch.firstdescSection")}
          align={alignment}
          
          sx={{ fontWeight: "400", fontSize: "24px", width: (width >= breakpoint) ? "592px" : "100%", maxWidth: "fit-content"}}
        />
        <div style={{ width: (width > breakpoint) ? "609px" : "100%" }}>
          <HeaderComponent
            text={t("pages.startmokummatch.secondDescSectionPart1")}
            align={alignment}
            sx={{ fontWeight: "400", fontSize: "24px" }}
          />
          <Stack direction="row" spacing={1} justifyContent={alignment} sx={{display: 'flex',flexWrap: 'wrap'}}>
            <HeaderComponent
              text={t("pages.startmokummatch.secondDescSectionPart2")}
              align={alignment}
              sx={{ fontWeight: "400", fontSize: "24px", whiteSpace: 'nowrap', wordBreak: 'break-word' }}
            />
            <TextToSpeech
              text={`${t("pages.startmokummatch.firstdescSection")} ${t(
                "pages.startmokummatch.secondDescSection"
              )}`}
              lang={"nl-NL"}
            />
            <HeaderComponent
              text={t("pages.startmokummatch.secondDescSectionPart3")}
              align={alignment}
              sx={{ fontWeight: "400", fontSize: "24px", whiteSpace: 'nowrap', wordBreak: 'break-word'}}
            />
          </Stack>
          <HeaderComponent
            text={t("pages.startmokummatch.secondDescSectionPart4")}
            align={alignment}
            sx={{ fontWeight: "400", fontSize: "24px" }}
          />
        </div>
        <LandingPageButton
          btnText={t("pages.startmokummatch.buttonText")}
          linkText={t("pages.startmokummatch.linkText")}
          contentAlgnment={alignment}
        />
      </Stack>
      <HeaderComponent
        text={t("pages.startmokummatch.notes")}
        align={alignment}
        style={{ fontSize: "18px !important", }}
        sx={{
          fontWeight: "400", fontSize: "18px !important", marginTop: "40px", width: (width >= breakpoint) ? "468px" : "100%",
          [theme.breakpoints.down('xl')]: {
            fontSize: "18px !important",
          },
          [theme.breakpoints.down('md')]: {
            fontSize: "14px !important",
          },
        }}
      />
    </Box>
  );
};

export default DescriptionSection;
