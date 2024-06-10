import CommonRedButton from "@/components/base/CommonRedButton";
import HeaderComponent from "@/components/base/Header";
import StyledGridContainer from "@/components/base/StyledGridContainer";
import { routes } from "@/pages/routes";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeaderSection = () => {
  const { t } = useTranslation();

  return (
    <Grid>
      <StyledGridContainer xs={12} sm={8} md={7} lg={7} xl={7}>
        <HeaderComponent text={t("pages.about.header")} variant={"h2"} />
      </StyledGridContainer>
      <StyledGridContainer xs={12} sm={8} md={6} lg={6} xl={6}>
        <HeaderComponent
          isParagraph={true}
          text={t("pages.about.subHeader")}
          variant={"body1"}
        />
      </StyledGridContainer>
      <div style={{ textAlign: "center", marginTop: "12px" }}>
        <CommonRedButton
          to={routes.START_MOKUMMATCH}
          component={Link}
          btnText={t("pages.about.btnText")}
        />
        <HeaderComponent
          isParagraph={true}
          variant={'body2'}
          text={t("pages.about.notes")}
          sx={{ paddingTop: "12px" }}
        />
      </div>
    </Grid>
  );
};

export default HeaderSection;
