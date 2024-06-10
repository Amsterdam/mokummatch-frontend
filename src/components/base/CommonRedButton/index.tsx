import React from 'react';
import ButtonComponent from '../Button';
import { ICommonRedButton } from './interfaces';
import { useTheme } from '@mui/material/styles'

const CommonRedButton = ({ btnText, onClick, component, to, sx }: ICommonRedButton) => {

  const theme = useTheme()

  return (
    <ButtonComponent
      label={btnText}
      color={"#FFFFFF"}
      backgroundColor={"#EC0000"}
      sx={{
        [theme.breakpoints.down('sm')]: {
          fontSize: '14px',
          padding: "8px",
        },
        fontWeight: 600,
        "&:hover": {
          backgroundColor: "#FF5252"
        },
        "&:active": {
          backgroundColor: "#EC0000",
          border: "3px solid #B80000",
          boxShadow: "none"
        },
        ...sx
      }}
      onClick={onClick}
      component={component}
      to={to}
    />
  );
};

export default CommonRedButton;