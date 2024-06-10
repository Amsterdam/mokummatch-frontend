import Info from "@/components/composite/Info";
import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import codepen from '@/assets/codepen.svg';

const InfoSection = () => {

  const { t } = useTranslation();

  return (
    <Grid container spacing={4} justifyContent={'space-evenly'} direction={{ xs: "column", sm: "column", md: "row" }} sx={{ marginTop: '30px' }}>
      <Grid item xs={4}  >
        <Info
          hasIcon={true}
          headerText={t("pages.about.info.header1")}
          paragraphText={t("pages.about.info.description1")}
          icon={codepen}
        />
      </Grid>
      <Grid item xs={4} >
        <Info
          hasIcon={true}
          headerText={t("pages.about.info.header2")}
          paragraphText={t("pages.about.info.description2")}
          icon={codepen}
        />
      </Grid>
      <Grid item xs={4} >
        <Info
          hasIcon={true}
          headerText={t("pages.about.info.header3")}
          paragraphText={t("pages.about.info.description3")}
          icon={codepen}
        />
      </Grid>
    </Grid>
  );
};

export default InfoSection;
