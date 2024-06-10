import CommonRedButton from "@/components/base/CommonRedButton";
import Stack from "@mui/material/Stack";
import { ILandingPageButtonProps } from "./interfaces";
import { Link, useNavigate } from "react-router-dom";
import { getRouteById, routes } from "@/pages/routes";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

const LandingPageButton = ({
  btnText,
  linkText,
  contentAlgnment,
}: ILandingPageButtonProps) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(getRouteById(routes.QUESTIONNAIRE, 1));
  };

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={5}
      justifyContent={contentAlgnment}
      alignItems={"center"}
      sx={{
        marginTop: "49px !important",
        [theme.breakpoints.down("md")]: {
          marginTop: "24px !important",
        },
      }}
    >
      <CommonRedButton onClick={handleClick} btnText={btnText} />
      <Link
        to={routes.ABOUT}
        style={{ textDecoration: "none", marginTop: 0, fontWeight: 600 }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "24px",
            color: "#EC0000",
            [theme.breakpoints.down("sm")]: {
              fontSize: "14px",
              marginTop: "16px",
            },
          }}
        >
          {linkText}
        </Typography>
      </Link>
    </Stack>
  );
};

export default LandingPageButton;
