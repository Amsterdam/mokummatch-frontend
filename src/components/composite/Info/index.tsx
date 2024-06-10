import HeaderComponent from "@/components/base/Header";
import Grid from "@mui/material/Grid";
import React from "react";
import { IInfoProps } from "./interfaces";

const Info = ({ hasIcon, headerText, paragraphText, icon }: IInfoProps) => {
  return (
    <Grid
      container
      justifyContent="space-around"
      direction={"column"}
    >
      {hasIcon && (
        <img src={icon} alt="icon" style={{ width: "40px", height: "40px" }} />
      )}
      <HeaderComponent
        text={headerText}
        align={'left'}
        variant={'h2'}
        sx={{
          fontWeight: "900",
          fontSize: hasIcon ? '32px' : '56px'
        }}
      />
      <HeaderComponent
        text={paragraphText}
        isParagraph={true}
        align={'left'}
        sx={{
          fontWeight: "400",
          fontSize: "24px",
          paddingTop: "24px"
        }}
      />
    </Grid>
  );
};

export default Info;