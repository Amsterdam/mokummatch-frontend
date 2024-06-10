import React from "react";
import whatsapp from "@/assets/icons/socials/whatsapp.svg";
import facebook from "@/assets/icons/socials/facebook.svg";
import instagram from "@/assets/icons/socials/instagram.svg";
import twitter from "@/assets/icons/socials/twitter.svg";
import LinkableAvatar from "../LinkableAvatar";
import { ISocials } from "@/commonInterfaces/instances";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material";

const SocialLinksComponent = (props: ISocials) => {

  const theme = useTheme()

  return (
    <>
      <Stack
        sx={{
          [theme.breakpoints.down('md')]: {
            margin: "10px 0px",
          },
        }}
        direction={{ xs: "row" }}
        spacing={2}
      >
        {props.whatsapp && (
          <LinkableAvatar
            src={whatsapp}
            alt={"whatsapp"}
            linkUrl={props.whatsapp}
          />
        )}
        {props.facebook && (
          <LinkableAvatar
            src={facebook}
            alt={"facebook"}
            linkUrl={props.facebook}
          />
        )}
        {props.instagram && (
          <LinkableAvatar
            src={instagram}
            alt={"instagram"}
            linkUrl={props.instagram}
          />
        )}
        {props.twitter && (
          <LinkableAvatar
            src={twitter}
            alt={"twitter"}
            linkUrl={props.twitter}
          />
        )}
      </Stack>
    </>
  );
};

export default SocialLinksComponent;
