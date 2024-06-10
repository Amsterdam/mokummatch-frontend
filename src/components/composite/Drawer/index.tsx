import ButtonComponent from "@/components/base/Button";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { IDrawer } from "./interfaces";
import CloseIcon from "@mui/icons-material/Close";
import HeaderComponent from "@/components/base/Header";
import { routes } from "@/pages/routes";
import { Link } from "react-router-dom";
import CommonRedButton from "@/components/base/CommonRedButton";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

const DrawerComponent = ({
  headerSectionValues,
  navbutton,
  activeIndex,
}: IDrawer) => {
  const [drawerToggle, setDrawerToggle] = useState<boolean>(false);
  const theme = useTheme();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerToggle(open);
    };

  const list = () => (
    <Box
      sx={{ width: "auto", marginTop: "33px" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}

    >
      <List>
        <ListItem disablePadding>
          <HeaderComponent
            text={"Mokummatch"}
            align={"left"}
            variant={"h5"}
            sx={{
              ml: 2,
              flexGrow: 1,
            }}
          />
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{
              mr: 2,
              backgroundColor: "#fff",
              border: "2px solid #EC0000",
              color: theme.palette.primary.main,
              borderRadius: "4px",
              width: "40px",
              height: "40px",
            }}
          >
            <CloseIcon />
          </IconButton>
        </ListItem>
      </List>
      <List>
        {headerSectionValues.map((val) => (
          <ListItem key={val.id} disablePadding>
            <ListItemButton component={Link} to={val.route}>
              <HeaderComponent
                text={val.title}
                variant={"body2"}
                sx={{
                  mr: 2,
                  textDecoration: activeIndex === val.id ? "underline" : "none",
                  color: "#000000",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <CommonRedButton
            btnText={navbutton}
            component={Link}
            to={routes.START_MOKUMMATCH}
            sx={{
              mr: 12,
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <ButtonComponent
        variant={"text"}
        // backgroundColor={"#222222"}
        startIcon={<MenuIcon
          onClick={toggleDrawer(true)}
          sx={{
      
            backgroundColor: "#fff",
            color: theme.palette.primary.main,
            border: "2px solid #EC0000",
            borderRadius: "4px",
            width: "40px",
            height: "40px",
            "&:active": {
              textDecoration: "none",
              background: "#FFFFFF",
            },
            "&:hover": {
              textDecoration: "none",
              background: "#FFFFFF",
            },
          }} />}

        sx={{
          backgroundColor: "#FFF",
          // border: "2px solid #EC0000"
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent"
          },
          "&.mui-ripple": {
            display: "none"
          },
          marginRight: "-30px",
          paddingRight: "18px"
        }}
      />
      <SwipeableDrawer
        anchor={"top"}
        open={drawerToggle}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </>
  );
};

export default DrawerComponent;
