import React from "react";
import ButtonComponent from "@/components/base/Button";
import HeaderComponent from "@/components/base/Header";
import StyledGridContainer from "@/components/base/StyledGridContainer";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { routes } from "@/pages/routes";
import { Link } from "react-router-dom";

const SectionAboveFooter = () => {
  const { t } = useTranslation();

  return (
    <StyledDiv>
      <StyledGridContainer xs={12} sm={8} md={4} lg={4} xl={4}>
        <HeaderComponent
          variant={"h4"}
          sx={{
            color: "#FFFFFF",
            margin: '24px'
          }}
          text={t("pages.about.sectionAboveFooter.header")}
        />
        <div style={{ textAlign: "center" }}>
          <ButtonComponent
            label={t("pages.about.sectionAboveFooter.btnText")}
            color={"#EC0000"}
            to={routes.START_MOKUMMATCH}
            component={Link}
            backgroundColor={"#FFFFFF"}
            sx={{
              marginBottom: "24px",
              fontWeight: "900",
              boxShadow: "0px",
              "&:active": {
                border: "3px solid #B80000",
                boxShadow: "0px",
              },
              "&:hover": {
                color: "#FF5252",
                background: "#FFFFFF",
              },
            }}
          />
        </div>
      </StyledGridContainer>
    </StyledDiv >
  );
};

export default SectionAboveFooter;

const StyledDiv = styled.div`
  background-color: #323232;
`;
