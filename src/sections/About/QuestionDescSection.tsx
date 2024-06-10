import HeaderComponent from "@/components/base/Header";
import StyledGridContainer from "@/components/base/StyledGridContainer";
import React from "react";
import { useTranslation } from "react-i18next";

const QuestionDescSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <div style={{ textAlign: "center", marginTop: '0px' }}>
        <HeaderComponent
          variant={"h5"}
          text={t("pages.about.questionDescSection.header")}
        />
      </div>
      <StyledGridContainer xs={12} sm={8} md={5} lg={5} xl={5}>
        <HeaderComponent
          isParagraph={true}
          variant={"subtitle1"}
          text={t("pages.about.questionDescSection.description")}
        />
      </StyledGridContainer>
    </>
  );
};

export default QuestionDescSection;
