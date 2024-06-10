import Grid from '@mui/material/Grid';
import React from 'react';
import { IStyledGridContainerProps } from './interfaces';

const StyledGridContainer = ({ xs = 12, sm = 12, md, lg, xl, spacing, children }: IStyledGridContainerProps) => {
  return (
    <Grid
      container
      item
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      direction={"column"}
      spacing={spacing ?? 2}
      sx={{
        margin: "auto",
        padding: "0",
        width: "100%",
      }}
    >
      {children}
    </Grid>
  );
};

export default StyledGridContainer;