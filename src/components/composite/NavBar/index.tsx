import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { routes } from "../../../pages/routes";
import { Link } from "react-router-dom";
import Header from "@/components/base/Header";
import { INavBarText } from "./interfaces";
import CommonRedButton from "@/components/base/CommonRedButton";
import DrawerComponent from "../Drawer";
import { useTheme } from '@mui/material/styles'

const NavBar = ({
  title,
  navbutton,
  question,
  isQuestion,
  currentQNum,
  totalQuestions,
  activeIndex,
  showDrawer,
  headerSectionValues,
}: INavBarText) => {

  const theme = useTheme()

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        position: "sticky",
        top: 0,
        width: "100%",
        backgroundColor: "#fff",
        padding: "0 120px",
        [theme.breakpoints.down('lg')]: {
          padding: "0 40px",
        },
        [theme.breakpoints.down('sm')]: {
          padding: "0 16px",
        },
        // marginBottom: "32px",
        color: theme.palette.text.primary,
      }}
      elevation={0}
    >
      <Container disableGutters sx={{ minWidth: "100%" }}>
        <Toolbar disableGutters sx={{
          padding: "32.8px 0",
          flexWrap: "wrap",
        }}>
          <Header
            component={Link}
            to={routes.ABOUT}
            text={title}
            align={"left"}
            variant={"h5"}
            sx={{
              color: theme.palette.text.primary,
              textDecoration: "none",
              border: "none",
              flexGrow: 1,
            }}
          />
          {isQuestion ? (
            <>
              <Header variant={"body2"} text={`${question}:`} sx={{ fontSize: "24px !important", fontWeight: "400", padding: "0 8px" }} /> &nbsp;{" "}
              <Header
                variant={"h5"}
                text={`${currentQNum}/${totalQuestions}`}
              />
            </>
          ) : (
            <>
              {showDrawer ? (
                <DrawerComponent
                  headerSectionValues={headerSectionValues}
                  navbutton={navbutton}
                  activeIndex={activeIndex}
                />
              ) : (
                <>
                  {headerSectionValues.map((val) => {
                    return (
                      <React.Fragment key={val.id}>
                        <Header
                          text={val.title}
                          component={Link}
                          to={val.route}
                          variant={"body2"}
                          sx={{
                            mr: 2,
                            textDecoration:
                              activeIndex === val.id ? "underline" : "none",
                            color: theme.palette.text.primary,
                          }}
                        />
                      </React.Fragment>
                    );
                  })}
                  <CommonRedButton
                    btnText={navbutton}
                    component={Link}
                    to={routes.START_MOKUMMATCH}
                    sx={{
                      // mr: 12,
                    }}
                  />
                </>
              )}
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
