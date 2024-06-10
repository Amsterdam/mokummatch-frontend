import React from "react";
import { Box, Grid } from "@mui/material";
import HeaderComponent from "@/components/base/Header";
import { useTranslation } from "react-i18next";
import StyledGridContainer from "@/components/base/StyledGridContainer";

const HeaderSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <Grid>
        <StyledGridContainer xs={12} sm={8} md={5} lg={5} xl={3}>
          <Box>
            <HeaderComponent variant="h2" text={t("pages.socials.header")} />
          </Box>
        </StyledGridContainer>
        <StyledGridContainer xs={12} sm={8} md={5.5} lg={5.5} xl={5.5}>
          <Box>
            <HeaderComponent
              variant="body1"
              text={t("pages.socials.subHeader")}
              isParagraph={true}
            />
          </Box>
        </StyledGridContainer>
      </Grid>
    </>
  );
};

export default HeaderSection;
