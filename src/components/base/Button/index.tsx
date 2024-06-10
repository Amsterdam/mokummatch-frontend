import React from "react";
import Button from "@mui/material/Button";
import { IButtonProps } from "./interfaces";
import { useTheme } from '@mui/material/styles';
import { CircularProgress } from "@mui/material";

const ButtonComponent = (props: IButtonProps) => {

  const theme = useTheme()

  return (
    <Button
      onClick={props.onClick}
      variant={props.variant ?? "contained"}
      size={props.size ?? "small"}
      loading={props.loading ?? "false"}
      disabled={props.loading ?? false}
      disableRipple
      sx={{
        [theme.breakpoints.down('sm')]: {
          fontSize: '16px',
        },
        fontSize: '24px',
        padding: "8px 16px",
        letterSpacing: "0.2px",
        lineHeight: '1.60',
        boxShadow: "none",
        backgroundColor: props.backgroundColor || theme.palette.primary.main,
        color: props.color,
        margin: props.margin,
        textTransform: "none",
        borderRadius: "4px",
        ...props.sx,
        '&:active': {

          transition: '0s',
        },
      }}
      component={props.component}
      to={props.to}
      startIcon={props.startIcon}
    >
      {props.label}
      {props.loading && <CircularProgress sx={{ padding: "8px", marginLeft: "8px", color: "#fff" }} />}
    </Button>
  );
};

export default ButtonComponent;
